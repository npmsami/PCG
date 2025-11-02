import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { metricsStore, type LeadPostResult } from "@/lib/metrics";

const DEFAULT_PROD = "https://weareims.app.n8n.cloud/webhook/roofing-leads-webhook";
const DEFAULT_TEST = "https://weareims.app.n8n.cloud/webhook-test/roofing-leads-webhook";

function coerceLead(row: any) {
	let firstName = row.firstName ?? row.first_name ?? row.FirstName ?? row["First Name"] ?? row.first ?? row.name?.split?.(" ")?.[0] ?? "";
	let lastName = row.lastName ?? row.last_name ?? row.LastName ?? row["Last Name"] ?? row.last ?? row.name?.split?.(" ")?.slice?.(1)?.join?.(" ") ?? "";
	const full = (row.fullname ?? row.full_name ?? row.FullName ?? `${firstName} ${lastName}`)?.toString().trim();
	if ((!firstName || !lastName) && full) {
		const parts = full.split(/\s+/);
		if (!firstName) firstName = parts[0] || "";
		if (!lastName) lastName = parts.slice(1).join(" ") || "";
	}
	const email = row.email ?? row.Email ?? row["Email Address"] ?? "";
	const phone = row.phone ?? row.Phone ?? row["Phone Number"] ?? row["Phone number"] ?? row.PhoneNumber ?? row.phone_number ?? row.phonenumber ?? row.mobile ?? row.Mobile ?? row["Cell"] ?? row["Cell Phone"] ?? "";
	return {
		firstName,
		lastName,
		fullname: full,
		email,
		phone,
		Email: email,
		Phone: phone,
		"Full Name": full,
		address: row.address ?? row.Address ?? "",
		city: row.city ?? row.City ?? "",
		state: row.state ?? row.State ?? row.region ?? "",
		zip: row.zip ?? row.postcode ?? row["Zip Code"] ?? row["Postal Code"] ?? "",
		source: row.source ?? row.Source ?? row.campaign ?? row.Campaign ?? "",
		original: row,
		body: { full_name: full, fullname: full, email, phone },
	};
}

export async function POST(request: NextRequest) {
	try {
		const { rows, mode = "prod", batch = false } = await request.json();
		if (!Array.isArray(rows)) {
			return NextResponse.json({ error: "Body must include array 'rows'" }, { status: 400 });
		}

		const webhookUrl = mode === "test" ? (process.env.NEXT_PUBLIC_N8N_WEBHOOK_TEST || DEFAULT_TEST) : (process.env.N8N_WEBHOOK_PROD || DEFAULT_PROD);
		const results: LeadPostResult[] = [];

		if (batch) {
			const items = rows.map((r: any, i: number) => ({
				name: r.name ?? r.firstName ?? `item_${i + 1}`,
				code: Number(r.code ?? i + 1),
				original: r,
			}));
			try {
				const res = await axios.post(webhookUrl, items, { headers: { "Content-Type": "application/json" }, timeout: 30000 });
				const body = typeof res.data === "string" ? res.data : JSON.stringify(res.data);
				results.push({ index: 0, status: "success", responseSnippet: body.slice(0, 300) });
			} catch (err: any) {
				const message = err?.response?.data ? JSON.stringify(err.response.data) : (err?.message ?? "Request failed");
				results.push({ index: 0, status: "error", message: message.slice(0, 300) });
			}
		} else {
			for (let i = 0; i < rows.length; i++) {
				const payload = coerceLead(rows[i]);
				try {
					const res = await axios.post(webhookUrl, payload, { headers: { "Content-Type": "application/json" }, timeout: 30000 });
					const body = typeof res.data === "string" ? res.data : JSON.stringify(res.data);
					const appointmentBooked = /appointment/i.test(body) || !!(res.data?.appointmentBooked);
					results.push({ index: i, status: "success", responseSnippet: body.slice(0, 300), appointmentBooked });
				} catch (err: any) {
					const message = err?.response?.data ? JSON.stringify(err.response.data) : (err?.message ?? "Request failed");
					results.push({ index: i, status: "error", message: message.slice(0, 300) });
				}
			}
		}

		metricsStore.appendBatch(results);
		return NextResponse.json({ count: rows.length, results, metrics: metricsStore.getSnapshot() });
	} catch (e: any) {
		return NextResponse.json({ error: e?.message ?? "Ingest failed" }, { status: 500 });
	}
}


