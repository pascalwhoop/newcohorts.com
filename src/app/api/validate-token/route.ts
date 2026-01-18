import { NextRequest, NextResponse } from "next/server";
import { validateToken } from "@/lib/notion";

export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        { message: "Token is required" },
        { status: 400 }
      );
    }

    const isValid = await validateToken(token);

    return NextResponse.json(
      { valid: isValid },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in validate-token:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
