"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if already logged in
    checkSession();
  }, []);

  async function checkSession() {
    try {
      const res = await fetch("/api/auth/session");
      if (res.ok) {
        const data = await res.json();
        if (data.authenticated) {
          const redirect = searchParams.get("redirect") || "/admin";
          router.push(redirect);
        }
      }
    } catch (error) {
      console.error("Session check error:", error);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // Redirect to original page or admin dashboard
      const redirect = searchParams.get("redirect") || "/admin";
      router.push(redirect);
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-gray-100 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="glass-card rounded-3xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="h-16 w-16 rounded-2xl animated-gradient flex items-center justify-center text-3xl mx-auto mb-4">
            🔐
          </div>
          <h1 className="text-3xl font-bold tracking-tight neon-text mb-2">
            Admin Login
          </h1>
          <p className="text-sm text-gray-300/80">
            Enter your credentials to access the dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-2 text-gray-300">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Enter username"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Enter password"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 px-6 py-3 text-sm font-medium text-white enabled:hover:from-fuchsia-500 enabled:hover:to-purple-500 disabled:opacity-40 transition-all"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-300/70">
          <p>Default credentials (change in .env):</p>
          <p className="mt-1 font-mono">Username: admin</p>
          <p className="font-mono">Password: admin123</p>
        </div>
      </div>
    </div>
  );
}

