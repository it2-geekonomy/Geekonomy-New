import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fname, lname, email, pnum, message, subject } = body;

    const templateParams = {
      from_name: `${fname} ${lname}`,
      from_email: email,
      phone_number: pnum,
      subject,
      message,
    };

    // 📨 Send email via EmailJS REST API
    const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
      service_id: "service_b9jpwod",     // Your EmailJS Service ID
      template_id: "template_zweeaku",   // Your Template ID
      user_id: "fqPzstZbWOYcNqmvB",      // Your Public Key
      accessToken: "8lKqJgqPoOAlEtyjXaWvP", // Your Private Key
      template_params: templateParams,
    });

    return NextResponse.json(
      { success: true, message: "Form submitted and email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Error in contact API:", error.response?.data || error.message);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
