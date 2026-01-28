import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Send email notification when Google Workspace is set up
    // For now, log the contact request
    console.log("=== New Contact Request ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || "Not provided"}`);
    console.log(`Service: ${service}`);
    console.log(`Message: ${message}`);
    console.log("===========================");

    // TODO: Integrate with email service (Nodemailer + Google Workspace)
    // TODO: Store in database if needed

    return NextResponse.json(
      { success: true, message: "Contact request received" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
