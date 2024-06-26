import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  console.log("Environment variables:", process.env);
  console.log("RECAPTCHA_SECRET_KEY:", process.env.RECAPTCHA_SECRET_KEY);
  try {
    const { name, email, phone, message, recaptchaToken } =
      await request.json();

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "reCAPTCHA secret key not set" },
        { status: 500 }
      );
    }

    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    const recaptchaRes = await axios.post(verifyURL);
    const { success } = recaptchaRes.data;

    if (success) {
      // reCAPTCHA verification successful
      // Process form data (e.g., save to database, send email)
      console.log("Form data:", { name, email, phone, message });
      return NextResponse.json({ message: "Form submitted successfully" });
    } else {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
