import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  // Skip auth for login page and API auth routes
  if (
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  // Skip auth for webhook/ingestion routes (these are called by external services)
  if (
    request.nextUrl.pathname.startsWith("/api/call-results") ||
    request.nextUrl.pathname.startsWith("/api/ingest") ||
    request.nextUrl.pathname.startsWith("/api/upload")
  ) {
    return NextResponse.next();
  }

  // Check for auth token in cookies
  const token = request.cookies.get("admin-token")?.value;

  if (!token) {
    // Redirect to login if no token
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Verify token
  const user = await verifyToken(token);
  
  if (!user) {
    // Invalid token, clear cookie and redirect
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete("admin-token");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

