import { NextRequest, NextResponse } from "next/server";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import axios from "axios";
import { metricsStore, type LeadPostResult } from "@/lib/metrics";

const DEFAULT_PROD = "https://weareims.app.n8n.cloud/webhook/roofing-leads-webhook";
const DEFAULT_TEST = "https://weareims.app.n8n.cloud/webhook-test/roofing-leads-webhook";

function parseCsv(buffer: Buffer): any[] {
	const text = buffer.toString("utf8");
	const result = Papa.parse(text, { header: true, skipEmptyLines: true });
	if (result.errors?.length) {
		throw new Error(result.errors.map((e) => e.message).join("; "));
	}
	return (result.data as any[]).filter((row) => Object.keys(row).length > 0);
}

function parseXlsx(buffer: Buffer): any[] {
	const wb = XLSX.read(buffer, { type: "buffer" });
	const sheetName = wb.SheetNames[0];
	const ws = wb.Sheets[sheetName];
	return XLSX.utils.sheet_to_json(ws, { defval: "" }) as any[];
}

function coerceLead(row: any) {
	// Flexible mapping: try common field names; keep original as fallback
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
	const payload = {
		firstName,
		lastName,
		fullname: full,
		email,
		phone,
		// Title-cased duplicates for downstream nodes using $json.Email / $json["Full Name"] / $json.Phone
		Email: email,
		Phone: phone,
		"Full Name": full,
		address: row.address ?? row.Address ?? "",
		city: row.city ?? row.City ?? "",
		state: row.state ?? row.State ?? row.region ?? "",
		zip: row.zip ?? row.postcode ?? row["Zip Code"] ?? row["Postal Code"] ?? "",
		source: row.source ?? row.Source ?? row.campaign ?? row.Campaign ?? "",
		// Include full original row for webhook flexibility
		original: row,
		// Mirror in body.* for n8n expressions used in the workflow
		body: {
			full_name: full,
			fullname: full,
			email,
			phone,
		},
	};
	return payload;
}

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData();
		const file = formData.get("file");
		const mode = (formData.get("mode") as string) || "prod"; // "prod" | "test"
		const sendAsBatch = ((formData.get("batch") as string) || "false").toLowerCase() === "true";
		if (!file || typeof file === "string") {
			return NextResponse.json({ error: "Missing file" }, { status: 400 });
		}

		const arrayBuffer = await (file as File).arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		const filename = (file as File).name.toLowerCase();

		let rows: any[] = [];
		if (filename.endsWith(".csv")) {
			rows = parseCsv(buffer);
		} else if (filename.endsWith(".xlsx") || filename.endsWith(".xls")) {
			rows = parseXlsx(buffer);
		} else {
			return NextResponse.json({ error: "Unsupported file type" }, { status: 400 });
		}


		const webhookUrl = mode === "test" ? (process.env.NEXT_PUBLIC_N8N_WEBHOOK_TEST || DEFAULT_TEST) : (process.env.N8N_WEBHOOK_PROD || DEFAULT_PROD);
		const results: LeadPostResult[] = [];

		if (sendAsBatch) {
			// Send as an array of simplified objects similar to your screenshot
			const items = rows.map((r, i) => ({
				name: r.name ?? r.firstName ?? `item_${i + 1}`,
				code: Number(r.code ?? i + 1),
				original: r,
			}));
			try {
				const res = await axios.post(webhookUrl, items, { headers: { "Content-Type": "application/json" }, timeout: 20000 });
				const body = typeof res.data === "string" ? res.data : JSON.stringify(res.data);
				results.push({ index: 0, status: "success", responseSnippet: body.slice(0, 300) });
			} catch (err: any) {
				const message = err?.response?.data ? JSON.stringify(err.response.data) : (err?.message ?? "Request failed");
				results.push({ index: 0, status: "error", message: message.slice(0, 300) });
			}
		} else {
			for (let i = 0; i < rows.length; i++) {
				const row = rows[i];
				const payload = coerceLead(row);
				try {
					const res = await axios.post(webhookUrl, payload, {
						headers: { "Content-Type": "application/json" },
						timeout: 20000,
					});
					const body = typeof res.data === "string" ? res.data : JSON.stringify(res.data);
					const appointmentBooked = /appointment/i.test(body) || !!(res.data?.appointmentBooked);
					results.push({
						index: i,
						status: "success",
						responseSnippet: body?.slice(0, 300),
						appointmentBooked,
					});
				} catch (err: any) {
					const message = err?.response?.data ? JSON.stringify(err.response.data) : (err?.message ?? "Request failed");
					results.push({ index: i, status: "error", message: message?.slice(0, 300) });
				}
			}
		}

		metricsStore.appendBatch(results);
		return NextResponse.json({ count: rows.length, results, metrics: metricsStore.getSnapshot() });
	} catch (e: any) {
		return NextResponse.json({ error: e?.message ?? "Upload failed" }, { status: 500 });
	}
}


