"use client";
import { useState, useMemo, useEffect } from "react";
import { CallMetrics } from "@/lib/metrics";
import Charts from "@/components/Charts";

type UploadResult = {
  index: number;
  status: "success" | "error";
  message?: string;
  responseSnippet?: string;
  appointmentBooked?: boolean;
};

export default function AdminDashboard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [results, setResults] = useState<UploadResult[] | null>(null);
  const [metrics, setMetrics] = useState<CallMetrics | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<"prod" | "test">("prod");
  const [batch, setBatch] = useState(false);
  const [callAgg, setCallAgg] = useState<{ total: number; successfulCalls: number; failedCalls: number; appointments: number; unknown: number } | null>(null);
  const [parsedRows, setParsedRows] = useState<any[] | null>(null);
  const [validCount, setValidCount] = useState(0);
  const [validRowsList, setValidRowsList] = useState<any[] | null>(null);
  const [invalidRows, setInvalidRows] = useState<any[] | null>(null);
  const [sendOnlyValid, setSendOnlyValid] = useState(true);
  const [previewTab, setPreviewTab] = useState<"valid" | "invalid">("invalid");
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced metrics cards data
  const metricsCards = useMemo(() => {
    if (!metrics) return [];
    
    return [
      {
        title: "Total Calls Attempted",
        value: metrics.totalCallsAttempted,
        icon: "📞",
        color: "from-blue-500 to-cyan-500",
        trend: "+12%",
        trendUp: true
      },
      {
        title: "Call Connection Rate",
        value: `${(metrics.callConnectionRate * 100).toFixed(1)}%`,
        icon: "🔗",
        color: "from-green-500 to-emerald-500",
        trend: "+5.2%",
        trendUp: true
      },
      {
        title: "Avg Call Duration",
        value: `${Math.round(metrics.avgCallDuration / 60)}m ${Math.round(metrics.avgCallDuration % 60)}s`,
        icon: "⏱️",
        color: "from-purple-500 to-pink-500",
        trend: "-2.1%",
        trendUp: false
      },
      {
        title: "Follow-ups Scheduled",
        value: metrics.followUpScheduled,
        icon: "📅",
        color: "from-orange-500 to-red-500",
        trend: "+8.3%",
        trendUp: true
      }
    ];
  }, [metrics]);

  // Call outcome distribution data
  const callOutcomeData = useMemo(() => {
    if (!metrics) return [];
    
    return [
      { label: "Success", value: metrics.callOutcomes.success, color: "text-green-400" },
      { label: "No Interest", value: metrics.callOutcomes.noInterest, color: "text-yellow-400" },
      { label: "Wrong Number", value: metrics.callOutcomes.wrongNumber, color: "text-red-400" },
      { label: "Follow-up Required", value: metrics.callOutcomes.followUpRequired, color: "text-blue-400" },
      { label: "Other", value: metrics.callOutcomes.other, color: "text-gray-400" }
    ];
  }, [metrics]);

  // Hang-up reasons data
  const hangupReasonsData = useMemo(() => {
    if (!metrics) return [];
    
    return [
      { label: "User End", value: metrics.hangupReasons.userEnd, color: "text-blue-400" },
      { label: "AI Timeout", value: metrics.hangupReasons.aiTimeout, color: "text-yellow-400" },
      { label: "System Drop", value: metrics.hangupReasons.systemDrop, color: "text-red-400" },
      { label: "Other", value: metrics.hangupReasons.other, color: "text-gray-400" }
    ];
  }, [metrics]);

  // Auto-refresh metrics every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refreshMetrics();
      refreshCallResults();
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Load initial data
  useEffect(() => {
    refreshMetrics();
    refreshCallResults();
  }, []);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    setSelectedFile(f);
    setResults(null);
    setError(null);
    setParsedRows(null);
    setInvalidRows(null);
    setValidCount(0);
  }

  async function onUpload() {
    if (!selectedFile) return;
    setIsUploading(true);
    setError(null);
    try {
      const controller = new AbortController();
      setAbortController(controller);
      let rows: any[] = parsedRows ?? [];
      if (!rows.length) {
        const ext = selectedFile.name.toLowerCase();
        if (ext.endsWith(".csv")) {
          const text = await selectedFile.text();
          const Papa = (await import("papaparse")).default;
          const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
          rows = (parsed.data as any[]).filter((r) => Object.keys(r).length > 0);
        } else {
          const XLSX = await import("xlsx");
          const buf = await selectedFile.arrayBuffer();
          const wb = XLSX.read(buf, { type: "array" });
          const ws = wb.Sheets[wb.SheetNames[0]];
          rows = XLSX.utils.sheet_to_json(ws, { defval: "" }) as any[];
        }
      }

      // Validate rows
      const { validRows, invalidRows: bad } = validateRows(rows);
      setParsedRows(rows);
      setValidRowsList(validRows);
      setInvalidRows(bad);
      setValidCount(validRows.length);
      const rowsToSend = sendOnlyValid ? validRows : rows;
      if (sendOnlyValid && bad.length > 0 && rowsToSend.length === 0) {
        throw new Error("All rows are invalid. Please fix the file or disable 'Send only valid'.");
      }

      const res = await fetch("/api/ingest", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ rows: rowsToSend, mode, batch }), signal: controller.signal });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Upload failed");
      setResults(data.results);
      setMetrics(data.metrics);
    } catch (e: any) {
      if (e?.name === "AbortError") {
        setError("Upload canceled");
      } else {
        setError(e?.message ?? "Upload failed");
      }
    } finally {
      setIsUploading(false);
      setAbortController(null);
    }
  }

  function pick<T = any>(row: Record<string, any>, keys: string[], fallbackRegex?: RegExp): T | "" {
    for (const k of keys) {
      if (row[k] != null && String(row[k]).trim() !== "") return row[k] as T;
    }
    if (fallbackRegex) {
      for (const key of Object.keys(row)) {
        const norm = key.toString().toLowerCase().replace(/[^a-z0-9]/g, "");
        if (fallbackRegex.test(norm)) {
          const v = row[key];
          if (v != null && String(v).trim() !== "") return v as T;
        }
      }
    }
    return "" as any;
  }

  function validateRows(rows: any[]) {
    const validRows: any[] = [];
    const invalidRows: any[] = [];
    for (const r of rows) {
      const full = (pick(r, ["fullname", "full_name", "Full Name", "First Name"], /(full)?name/) || `${pick(r, ["firstName","first_name","First Name"], /^(first|firstname)$/)} ${pick(r, ["lastName","last_name","Last Name"], /^(last|lastname)$/)}`)?.toString().trim();
      const email = pick(r, ["email", "Email", "Email Address"], /email/);
      const phone = pick(r, ["phone", "Phone", "Phone Number", "Phone number", "PhoneNumber", "phone_number", "phonenumber", "mobile", "Mobile", "Cell", "Cell Phone"], /(phone|mobile|cell)/);
      const isValid = Boolean(full && email && phone);
      if (isValid) validRows.push(r); else invalidRows.push({ ...r, _missing: { full: !full, email: !email, phone: !phone } });
    }
    return { validRows, invalidRows };
  }

  async function refreshMetrics() {
    setIsLoading(true);
    try {
      const res = await fetch("/api/metrics");
      const data = await res.json();
      setMetrics(data.metrics);
      setResults(data.results);
    } catch (error) {
      console.error("Failed to refresh metrics:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function refreshCallResults() {
    try {
      const res = await fetch("/api/call-results", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) {
        // If it's a 502 (upstream error) or 404, just log it but don't throw
        // This is expected if the external service isn't available
        console.warn("Call results service unavailable:", data?.error || "Unknown error");
        return;
      }
      setCallAgg(data.aggregate);
      
      // Update metrics with enhanced data if available
      if (data.enhancedMetrics) {
        setMetrics(data.enhancedMetrics);
      }
    } catch (e) {
      // Silently handle errors for call results - it's not critical
      console.debug("Failed to fetch call results:", e);
    }
  }

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
      // Still redirect even if request fails
      window.location.href = "/login";
    }
  }

  return (
    <div className="min-h-screen w-full text-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Enhanced Topbar */}
        <div className="glass-strong rounded-3xl px-6 py-5 flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl animated-gradient flex items-center justify-center text-2xl">
              📊
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight neon-text">Call Pipeline Dashboard</h1>
              <p className="text-sm text-gray-300/80">Real-time call metrics and pipeline health monitoring</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
              <span className="text-gray-300/80">
                {isLoading ? 'Updating...' : 'Live'}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={refreshMetrics}
                disabled={isLoading}
                className="glass rounded-xl px-4 py-2 text-sm font-medium hover:bg-white/10 transition-all disabled:opacity-50"
              >
                {isLoading ? 'Refreshing...' : 'Refresh Metrics'}
              </button>
              <button
                onClick={refreshCallResults}
                disabled={isLoading}
                className="glass rounded-xl px-4 py-2 text-sm font-medium hover:bg-white/10 transition-all disabled:opacity-50"
              >
                {isLoading ? 'Refreshing...' : 'Refresh Calls'}
              </button>
              <button
                onClick={handleLogout}
                className="glass rounded-xl px-4 py-2 text-sm font-medium hover:bg-red-500/20 transition-all text-red-300 border border-red-500/30"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Core Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metricsCards.map((card, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center text-2xl`}>
                  {card.icon}
                </div>
                <div className={`text-sm font-medium ${card.trendUp ? 'text-green-400' : 'text-red-400'}`}>
                  {card.trend}
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-300/80 mb-2">{card.title}</h3>
              <div className="text-3xl font-bold text-white">{card.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Call Duration Metrics */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              Call Duration Analysis
            </h3>
            {metrics ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300/80">Average</span>
                  <span className="text-lg font-semibold">
                    {Math.round(metrics.avgCallDuration / 60)}m {Math.round(metrics.avgCallDuration % 60)}s
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300/80">Median</span>
                  <span className="text-lg font-semibold">
                    {Math.round(metrics.medianCallDuration / 60)}m {Math.round(metrics.medianCallDuration % 60)}s
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300/80">90th Percentile</span>
                  <span className="text-lg font-semibold">
                    {Math.round(metrics.p90CallDuration / 60)}m {Math.round(metrics.p90CallDuration % 60)}s
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-300/70">No duration data available</div>
            )}
          </div>

          {/* Call Status Distribution */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">📊</span>
              Call Status Distribution
            </h3>
            {metrics ? (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300/80">Answered</span>
                  <span className="text-lg font-semibold text-green-400">{metrics.answeredCalls}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300/80">Unanswered</span>
                  <span className="text-lg font-semibold text-yellow-400">{metrics.unansweredCalls}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300/80">Voicemail</span>
                  <span className="text-lg font-semibold text-blue-400">{metrics.voicemailCalls}</span>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-300/70">No status data available</div>
            )}
          </div>

          {/* Pipeline Health Score */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">💚</span>
              Pipeline Health
            </h3>
            {metrics ? (
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {Math.round(metrics.callConnectionRate * 100)}%
                </div>
                <div className="text-sm text-gray-300/80 mb-4">Connection Rate</div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${metrics.callConnectionRate * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-300/70">
                  {metrics.totalCallsConnected} of {metrics.totalCallsAttempted} calls connected
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-300/70">No health data available</div>
            )}
          </div>
        </div>

        {/* Charts Section */}
        {metrics && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">📈</span>
              Data Visualizations
            </h2>
            <Charts
              callOutcomes={metrics.callOutcomes}
              hangupReasons={metrics.hangupReasons}
              callDurations={[]} // TODO: Add duration data to metrics store
              answeredCalls={metrics.answeredCalls}
              unansweredCalls={metrics.unansweredCalls}
              voicemailCalls={metrics.voicemailCalls}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Call Outcomes Summary */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Call Outcomes Summary
            </h3>
            {callOutcomeData.length > 0 ? (
              <div className="space-y-3">
                {callOutcomeData.map((outcome, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-300/80">{outcome.label}</span>
                    <span className={`text-lg font-semibold ${outcome.color}`}>{outcome.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm text-gray-300/70">No outcome data available</div>
            )}
          </div>

          {/* Hang-up Reasons Summary */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">📞</span>
              Hang-up Reasons Summary
            </h3>
            {hangupReasonsData.length > 0 ? (
              <div className="space-y-3">
                {hangupReasonsData.map((reason, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-300/80">{reason.label}</span>
                    <span className={`text-lg font-semibold ${reason.color}`}>{reason.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm text-gray-300/70">No hang-up data available</div>
            )}
          </div>
        </div>

        {/* Upload Section */}
        <div className="glass-card rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="text-2xl">📤</span>
            Upload Leads
          </h2>
          <div className="flex flex-col gap-4">
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={onFileChange}
              className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-white/20 file:px-4 file:py-2 file:text-sm hover:file:bg-white/30 transition-all"
            />
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={onUpload}
                disabled={!selectedFile || isUploading}
                className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 px-6 py-3 text-sm font-medium text-white enabled:hover:from-fuchsia-500 enabled:hover:to-purple-500 disabled:opacity-40 transition-all"
              >
                {isUploading ? "Uploading..." : "Upload and Send"}
              </button>
              {isUploading && (
                <button
                  onClick={() => abortController?.abort()}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-white/10 transition-all"
                >
                  Stop
                </button>
              )}
              <div className="flex items-center gap-2 text-sm">
                <label className="opacity-80">Mode</label>
                <select value={mode} onChange={(e) => setMode(e.target.value as any)} className="glass rounded-lg px-3 py-2">
                  <option value="prod">Production</option>
                  <option value="test">Test</option>
                </select>
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={batch} onChange={(e) => setBatch(e.target.checked)} />
                Send as batch array
              </label>
              {selectedFile && (
                <span className="text-sm text-gray-300/80">{selectedFile.name}</span>
              )}
            </div>
            {error && <div className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">{error}</div>}
          </div>
        </div>

        {/* Results Table */}
        {results && (
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="text-2xl">📋</span>
              Last Upload Results
            </h3>
            <div className="overflow-auto rounded-xl border border-white/10 bg-white/5">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-white/5 text-gray-300">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Appointment</th>
                    <th className="px-4 py-3">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r) => (
                    <tr key={r.index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3">{r.index + 1}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-lg px-3 py-1 text-xs font-medium ${r.status === "success" ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"}`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{r.appointmentBooked ? "✅ Yes" : "❌ No"}</td>
                      <td className="px-4 py-3 text-gray-300/90">{r.message ?? r.responseSnippet ?? ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-300/70">
          <p>Webhook: <code className="bg-white/5 px-2 py-1 rounded">https://weareims.app.n8n.cloud/webhook/roofing-leads-webhook</code></p>
          <p className="mt-2">Last updated: {metrics ? new Date(metrics.lastUpdatedIso).toLocaleString() : "Never"}</p>
        </div>
      </div>
    </div>
  );
}

