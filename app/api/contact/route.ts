import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "Invalid request format. Expected JSON." },
      { status: 400 }
    );
  }

  try {
    const { name, email, subject, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Please enter a subject (minimum 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a message with at least 10 characters." },
        { status: 400 }
      );
    }

    // Check for optional external email delivery providers
    const resendApiKey = process.env.RESEND_API_KEY;
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

    // 1. Resend Integration if configured
    if (resendApiKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["ayeshatahirshehbaz@gmail.com"],
            subject: `[Portfolio Inquiry] ${subject.trim()}`,
            reply_to: email.trim(),
            html: `
              <h2>New Message from Portfolio Website</h2>
              <p><strong>Name:</strong> ${name.trim()}</p>
              <p><strong>Email:</strong> ${email.trim()}</p>
              <p><strong>Subject:</strong> ${subject.trim()}</p>
              <p><strong>Message:</strong></p>
              <p>${message.trim().replace(/\n/g, "<br/>")}</p>
            `,
          }),
        });

        if (res.ok) {
          return NextResponse.json({
            success: true,
            provider: "resend",
            message: "Your message has been delivered directly to Ayesha's inbox!",
          });
        }
      } catch (err) {
        console.error("Failed to forward via Resend:", err);
      }
    }

    // 2. Formspree Integration if configured
    if (formspreeEndpoint) {
      try {
        const res = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name, email, subject, message }),
        });

        if (res.ok) {
          return NextResponse.json({
            success: true,
            provider: "formspree",
            message: "Your message has been forwarded successfully via Formspree!",
          });
        }
      } catch (err) {
        console.error("Failed to forward via Formspree:", err);
      }
    }

    // Log the message in the server terminal for development/testing
    console.log("-----------------------------------------");
    console.log("NEW PORTFOLIO CONTACT SUBMISSION:");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("-----------------------------------------");

    // Return transparent feedback about backend status
    return NextResponse.json({
      success: true,
      provider: "none",
      backendConfigured: false,
      message:
        "Your message was validated successfully and logged on the server. External email delivery is not yet configured with an API key (e.g. RESEND_API_KEY in .env.local). You can also click 'Send via Email App' to email Ayesha directly!",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again or email directly." },
      { status: 500 }
    );
  }
}
