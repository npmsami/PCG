import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const SECRET_KEY = process.env.AUTH_SECRET || "default-secret-key-change-in-production";
const JWT_SECRET = new TextEncoder().encode(SECRET_KEY);

export interface AdminUser {
  username: string;
  role: "admin";
}

export async function signToken(user: AdminUser): Promise<string> {
  const token = await new SignJWT({ username: user.username, role: user.role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET);

  return token;
}

export async function verifyToken(token: string): Promise<AdminUser | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as AdminUser;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<AdminUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin-token")?.value;

    if (!token) {
      return null;
    }

    return await verifyToken(token);
  } catch {
    return null;
  }
}

export async function setSessionInResponse(response: NextResponse, user: AdminUser): Promise<NextResponse> {
  const token = await signToken(user);
  response.cookies.set("admin-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
  return response;
}

export function clearSessionInResponse(response: NextResponse): NextResponse {
  response.cookies.delete("admin-token");
  return response;
}

export function verifyAdminCredentials(username: string, password: string): boolean {
  const adminUsername = process.env.ADMIN_USERNAME || "admin";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  
  return username === adminUsername && password === adminPassword;
}

