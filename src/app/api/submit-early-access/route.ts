import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { earlyAccessSchema } from "@/lib/validation";
import { createEarlyAccessEntry } from "@/lib/notion";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = earlyAccessSchema.parse(body);

    // Generate unique token
    const token = nanoid(16);

    // Create entry in Notion
    await createEarlyAccessEntry({
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      email: validatedData.email,
      city: validatedData.city,
      moveDate: validatedData.moveDate,
      token,
    });

    // Return success response with token
    return NextResponse.json(
      { success: true, token },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in submit-early-access:", error);

    // Handle validation errors
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { message: "Invalid form data" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
