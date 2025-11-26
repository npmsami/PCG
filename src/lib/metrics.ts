// Enhanced metrics store for call pipeline health monitoring
// Note: This resets on server restart. For persistence, integrate a database.

export type LeadPostResult = {
	index: number;
	status: "success" | "error";
	message?: string;
	responseSnippet?: string;
	appointmentBooked?: boolean;
};

export type CallMetrics = {
	// Core pipeline metrics
	totalCallsAttempted: number;
	totalCallsConnected: number;
	totalCallsCompleted: number;
	callConnectionRate: number; // connected ÷ attempted
	
	// Call duration metrics
	avgCallDuration: number; // in seconds
	medianCallDuration: number; // in seconds
	p90CallDuration: number; // 90th percentile in seconds
	
	// Call outcome distribution
	answeredCalls: number;
	unansweredCalls: number;
	voicemailCalls: number;
	
	// Hang-up reason distribution
	hangupReasons: {
		userEnd: number;
		aiTimeout: number;
		systemDrop: number;
		other: number;
	};
	
	// Follow-up metrics
	followUpScheduled: number; // appointments booked
	
	// Call outcome rates
	callOutcomes: {
		success: number;
		noInterest: number;
		wrongNumber: number;
		followUpRequired: number;
		other: number;
	};
	
	// Legacy metrics for backward compatibility
	total: number;
	successCount: number;
	errorCount: number;
	appointmentCount: number;
	lastUpdatedIso: string;
};

export type MetricsSnapshot = CallMetrics;

class MetricsStore {
	// Legacy metrics
	private successCount: number = 0;
	private errorCount: number = 0;
	private appointmentCount: number = 0;
	private total: number = 0;
	private lastUpdatedIso: string = new Date().toISOString();
	private lastResults: LeadPostResult[] = [];

	// Enhanced call metrics
	private callDurations: number[] = [];
	private callOutcomes: { [key: string]: number } = {
		success: 0,
		noInterest: 0,
		wrongNumber: 0,
		followUpRequired: 0,
		other: 0
	};
	private hangupReasons: { [key: string]: number } = {
		userEnd: 0,
		aiTimeout: 0,
		systemDrop: 0,
		other: 0
	};
	private callStatuses: { [key: string]: number } = {
		answered: 0,
		unanswered: 0,
		voicemail: 0
	};

	reset() {
		this.successCount = 0;
		this.errorCount = 0;
		this.appointmentCount = 0;
		this.total = 0;
		this.lastResults = [];
		this.lastUpdatedIso = new Date().toISOString();
		this.callDurations = [];
		this.callOutcomes = { success: 0, noInterest: 0, wrongNumber: 0, followUpRequired: 0, other: 0 };
		this.hangupReasons = { userEnd: 0, aiTimeout: 0, systemDrop: 0, other: 0 };
		this.callStatuses = { answered: 0, unanswered: 0, voicemail: 0 };
	}

	appendBatch(results: LeadPostResult[]) {
		for (const r of results) {
			this.total += 1;
			if (r.status === "success") this.successCount += 1;
			if (r.status === "error") this.errorCount += 1;
			if (r.appointmentBooked) this.appointmentCount += 1;
		}
		this.lastResults = results;
		this.lastUpdatedIso = new Date().toISOString();
	}

	// Add call data for enhanced metrics
	addCallData(callData: {
		duration?: number;
		outcome?: string;
		hangupReason?: string;
		status?: string;
		connected?: boolean;
		completed?: boolean;
	}) {
		if (callData.duration) {
			this.callDurations.push(callData.duration);
		}
		
		if (callData.outcome) {
			const outcome = callData.outcome.toLowerCase();
			if (this.callOutcomes.hasOwnProperty(outcome)) {
				this.callOutcomes[outcome]++;
			} else {
				this.callOutcomes.other++;
			}
		}
		
		if (callData.hangupReason) {
			const reason = callData.hangupReason.toLowerCase();
			if (this.hangupReasons.hasOwnProperty(reason)) {
				this.hangupReasons[reason]++;
			} else {
				this.hangupReasons.other++;
			}
		}
		
		if (callData.status) {
			const status = callData.status.toLowerCase();
			if (this.callStatuses.hasOwnProperty(status)) {
				this.callStatuses[status]++;
			}
		}
	}

	private calculatePercentile(values: number[], percentile: number): number {
		if (values.length === 0) return 0;
		const sorted = [...values].sort((a, b) => a - b);
		const index = Math.ceil((percentile / 100) * sorted.length) - 1;
		return sorted[Math.max(0, index)];
	}

	getSnapshot(): MetricsSnapshot {
		const totalCallsAttempted = this.total;
		const totalCallsConnected = this.callStatuses.answered + this.callStatuses.voicemail;
		const totalCallsCompleted = this.callOutcomes.success + this.callOutcomes.noInterest + this.callOutcomes.wrongNumber;
		const callConnectionRate = totalCallsAttempted > 0 ? totalCallsConnected / totalCallsAttempted : 0;

		const avgCallDuration = this.callDurations.length > 0 
			? this.callDurations.reduce((sum, d) => sum + d, 0) / this.callDurations.length 
			: 0;
		const medianCallDuration = this.calculatePercentile(this.callDurations, 50);
		const p90CallDuration = this.calculatePercentile(this.callDurations, 90);

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
			answeredCalls: this.callStatuses.answered,
			unansweredCalls: this.callStatuses.unanswered,
			voicemailCalls: this.callStatuses.voicemail,
			
			// Hang-up reason distribution
			hangupReasons: { ...this.hangupReasons },
			
			// Follow-up metrics
			followUpScheduled: this.appointmentCount,
			
			// Call outcome rates
			callOutcomes: { ...this.callOutcomes },
			
			// Legacy metrics for backward compatibility
			total: this.total,
			successCount: this.successCount,
			errorCount: this.errorCount,
			appointmentCount: this.appointmentCount,
			lastUpdatedIso: this.lastUpdatedIso,
		};
	}

	getLastResults(): LeadPostResult[] {
		return this.lastResults;
	}
}

export const metricsStore = new MetricsStore();



