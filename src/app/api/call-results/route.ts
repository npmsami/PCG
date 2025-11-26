import { NextResponse } from "next/server";
import { CallMetrics } from "@/lib/metrics";

const DEFAULT_URL = "https://weareims.app.n8n.cloud/webhook/call-result";

type Aggregate = {
	total: number;
	successfulCalls: number;
	failedCalls: number;
	appointments: number;
	unknown: number;
};

type EnhancedCallData = {
	duration?: number;
	outcome?: string;
	hangupReason?: string;
	status?: string;
	connected?: boolean;
	completed?: boolean;
	appointmentBooked?: boolean;
};

function computeAggregates(items: any[]): Aggregate {
	let successfulCalls = 0;
	let appointments = 0;
	let failedCalls = 0;
	for (const it of items) {
		const v = it || {};
		const statusVal = String(v.status ?? v.callStatus ?? v.result ?? "").toLowerCase();
		const successLike = /success|ok|completed|connected|answered/.test(statusVal);
		const failLike = /fail|error|no[-_ ]?answer|busy|timeout|cancel/.test(statusVal);
		if (successLike) successfulCalls += 1;
		if (failLike) failedCalls += 1;
		const appt = Boolean(
			v.appointmentBooked || v.appointment || v.meeting || /appointment|booked|scheduled/i.test(JSON.stringify(v))
		);
		if (appt) appointments += 1;
	}
	const total = items.length;
	const unknown = Math.max(0, total - successfulCalls - failedCalls);
	return { total, successfulCalls, failedCalls, appointments, unknown };
}

function parseCallData(item: any): EnhancedCallData {
	const v = item || {};
	
	// Parse duration (could be in seconds or minutes)
	let duration: number | undefined;
	if (v.duration) {
		duration = typeof v.duration === 'number' ? v.duration : parseFloat(v.duration);
		// If duration seems too small, assume it's in minutes and convert to seconds
		if (duration < 10) duration *= 60;
	}
	
	// Parse outcome
	let outcome: string | undefined;
	const statusVal = String(v.status ?? v.callStatus ?? v.result ?? "").toLowerCase();
	if (/success|ok|completed/.test(statusVal)) outcome = 'success';
	else if (/no[-_ ]?interest|not[-_ ]?interested/.test(statusVal)) outcome = 'noInterest';
	else if (/wrong[-_ ]?number|invalid[-_ ]?number/.test(statusVal)) outcome = 'wrongNumber';
	else if (/follow[-_ ]?up|callback|call[-_ ]?back/.test(statusVal)) outcome = 'followUpRequired';
	else if (statusVal) outcome = 'other';
	
	// Parse hangup reason
	let hangupReason: string | undefined;
	if (v.hangupReason) {
		const reason = v.hangupReason.toLowerCase();
		if (/user|customer|client/.test(reason)) hangupReason = 'userEnd';
		else if (/timeout|ai|bot/.test(reason)) hangupReason = 'aiTimeout';
		else if (/system|technical|error/.test(reason)) hangupReason = 'systemDrop';
		else hangupReason = 'other';
	}
	
	// Parse call status
	let status: string | undefined;
	if (/answered|connected|picked/.test(statusVal)) status = 'answered';
	else if (/unanswered|no[-_ ]?answer|busy/.test(statusVal)) status = 'unanswered';
	else if (/voicemail|voice[-_ ]?mail/.test(statusVal)) status = 'voicemail';
	
	return {
		duration,
		outcome,
		hangupReason,
		status,
		connected: /connected|answered/.test(statusVal),
		completed: /completed|success/.test(statusVal),
		appointmentBooked: Boolean(v.appointmentBooked || v.appointment || v.meeting)
	};
}

function computeEnhancedMetrics(items: any[]): CallMetrics {
	const callData = items.map(parseCallData);
	
	// Basic counts
	const totalCallsAttempted = items.length;
	const totalCallsConnected = callData.filter(d => d.connected).length;
	const totalCallsCompleted = callData.filter(d => d.completed).length;
	const callConnectionRate = totalCallsAttempted > 0 ? totalCallsConnected / totalCallsAttempted : 0;
	
	// Duration metrics
	const durations = callData.filter(d => d.duration).map(d => d.duration!);
	const avgCallDuration = durations.length > 0 ? durations.reduce((sum, d) => sum + d, 0) / durations.length : 0;
	const medianCallDuration = durations.length > 0 ? 
		[...durations].sort((a, b) => a - b)[Math.floor(durations.length / 2)] : 0;
	const p90CallDuration = durations.length > 0 ? 
		[...durations].sort((a, b) => a - b)[Math.floor(durations.length * 0.9)] : 0;
	
	// Call status distribution
	const answeredCalls = callData.filter(d => d.status === 'answered').length;
	const unansweredCalls = callData.filter(d => d.status === 'unanswered').length;
	const voicemailCalls = callData.filter(d => d.status === 'voicemail').length;
	
	// Hang-up reasons
	const hangupReasons = {
		userEnd: callData.filter(d => d.hangupReason === 'userEnd').length,
		aiTimeout: callData.filter(d => d.hangupReason === 'aiTimeout').length,
		systemDrop: callData.filter(d => d.hangupReason === 'systemDrop').length,
		other: callData.filter(d => d.hangupReason === 'other').length,
	};
	
	// Follow-up metrics
	const followUpScheduled = callData.filter(d => d.appointmentBooked).length;
	
	// Call outcomes
	const callOutcomes = {
		success: callData.filter(d => d.outcome === 'success').length,
		noInterest: callData.filter(d => d.outcome === 'noInterest').length,
		wrongNumber: callData.filter(d => d.outcome === 'wrongNumber').length,
		followUpRequired: callData.filter(d => d.outcome === 'followUpRequired').length,
		other: callData.filter(d => d.outcome === 'other').length,
	};
	
	// Legacy metrics for backward compatibility
	const successfulCalls = callData.filter(d => d.outcome === 'success').length;
	const errorCount = callData.filter(d => !d.connected).length;
	
	return {
		// Core pipeline metrics
		totalCallsAttempted,
		totalCallsConnected,
		totalCallsCompleted,
		callConnectionRate,
		
		// Call duration metrics
		avgCallDuration,
		medianCallDuration,
		p90CallDuration,
		
		// Call outcome distribution
		answeredCalls,
		unansweredCalls,
		voicemailCalls,
		
		// Hang-up reason distribution
		hangupReasons,
		
		// Follow-up metrics
		followUpScheduled,
		
		// Call outcome rates
		callOutcomes,
		
		// Legacy metrics for backward compatibility
		total: totalCallsAttempted,
		successCount: successfulCalls,
		errorCount,
		appointmentCount: followUpScheduled,
		lastUpdatedIso: new Date().toISOString(),
	};
}

export async function GET() {
	try {
		const url = process.env.N8N_CALL_RESULTS_URL || DEFAULT_URL;
		const res = await fetch(url, { cache: "no-store" });
		
		if (!res.ok) {
			// Return empty data structure instead of error to prevent frontend crashes
			// The upstream service (n8n webhook) may not always be available
			return NextResponse.json({ 
				aggregate: { total: 0, successfulCalls: 0, failedCalls: 0, appointments: 0, unknown: 0 },
				enhancedMetrics: null,
				itemsSample: [],
				error: `Upstream service unavailable (${res.status})`
			}, { status: 200 }); // Return 200 with error message in body
		}
		
		const data = await res.json();
		const items: any[] = Array.isArray(data) ? data : (Array.isArray(data?.items) ? data.items : []);
		
		// Return both legacy and enhanced metrics
		const agg = computeAggregates(items);
		const enhancedMetrics = computeEnhancedMetrics(items);
		
		return NextResponse.json({ 
			aggregate: agg, 
			enhancedMetrics,
			itemsSample: items.slice(0, 20) 
		});
	} catch (e: any) {
		// Return empty data structure instead of error to prevent frontend crashes
		return NextResponse.json({ 
			aggregate: { total: 0, successfulCalls: 0, failedCalls: 0, appointments: 0, unknown: 0 },
			enhancedMetrics: null,
			itemsSample: [],
			error: e?.message ?? "Failed to fetch call results"
		}, { status: 200 }); // Return 200 with error message in body
	}
}



