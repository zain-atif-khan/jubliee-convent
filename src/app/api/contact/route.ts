import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, phone, subject, message } = data;

    // Strict validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: Full Name, Email, or Message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format supplied." },
        { status: 400 }
      );
    }

    // In a production deployment with email service or CRM, deliver message here.
    console.log("[JUBLIE Contact Message Processed]", {
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "None",
      subject: subject || "General Enquiry",
      messageLength: message.trim().length,
    });

    return NextResponse.json({
      success: true,
      message: "Contact message successfully received by JUBLIE Administration.",
    });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error while processing message." },
      { status: 500 }
    );
  }
}
