import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { parentName, email, phone, studentName, gradeApplying, academicYear, notes } = data;

    // Strict validation
    if (!parentName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: Parent Name, Email, or Phone." },
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

    // In a production deployment with database/email service, store or forward enquiry here.
    // For local and serverless execution, we log and confirm processing:
    console.log("[JUBLIE Admissions Enquiry Processed]", {
      timestamp: new Date().toISOString(),
      parentName: parentName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      studentName: studentName?.trim() || "Unspecified",
      gradeApplying: gradeApplying || "Grade 1",
      academicYear: academicYear || "2027–2028",
      notes: notes?.trim() || "",
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry successfully recorded by the JUBLIE Admissions Office.",
    });
  } catch (error) {
    console.error("[Enquiry API Error]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error while processing enquiry." },
      { status: 500 }
    );
  }
}
