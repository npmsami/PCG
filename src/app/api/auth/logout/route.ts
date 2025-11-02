import { NextResponse } from "next/server";
import { clearSessionInResponse } from "@/lib/auth";

export async function POST() {
  try {
    const response = NextResponse.json({ success: true, message: "Logout successful" });
    return clearSessionInResponse(response);
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

