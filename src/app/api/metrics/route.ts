import { NextResponse } from "next/server";
import { metricsStore } from "@/lib/metrics";

export async function GET() {
	return NextResponse.json({ metrics: metricsStore.getSnapshot(), results: metricsStore.getLastResults() });
}



