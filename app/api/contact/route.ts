import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Sanitize inputs (basic)
    const safeName = String(name).slice(0, 100);
    const safeEmail = String(email).slice(0, 200);
    const safeSubject = String(subject || "Portfolio Contact").slice(0, 200);
    const safeMessage = String(message).slice(0, 5000);

    // Create transporter
    // For production, use real SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || process.env.EMAIL_FROM,
        pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
      },
    });

    // Email to yourself (notification)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || "talishtarik1234@gmail.com",
      replyTo: safeEmail,
      subject: `[Portfolio] ${safeSubject}`,
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #0d0d0f; color: #f0eee8; border-radius: 12px;">
          <h1 style="font-family: Georgia, serif; font-size: 28px; color: #0ea5e9; margin-bottom: 8px; border-bottom: 1px solid #2a2828; padding-bottom: 16px;">
            New Portfolio Message
          </h1>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2828; color: #a09890; font-size: 12px; letter-spacing: 0.1em; width: 100px;">FROM</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2828; font-weight: 600;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2828; color: #a09890; font-size: 12px; letter-spacing: 0.1em;">EMAIL</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2828;"><a href="mailto:${safeEmail}" style="color: #0ea5e9;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2828; color: #a09890; font-size: 12px; letter-spacing: 0.1em;">SUBJECT</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2828;">${safeSubject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #141418; border-radius: 8px; border-left: 3px solid #0ea5e9;">
            <p style="color: #a09890; font-size: 11px; letter-spacing: 0.1em; margin: 0 0 12px;">MESSAGE</p>
            <p style="line-height: 1.7; color: #f0eee8; white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <p style="margin-top: 32px; color: #6b6560; font-size: 12px; text-align: center;">
            Sent from your portfolio contact form — mohd-talish.dev
          </p>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Mohd Talish Ansari" <${process.env.SMTP_USER}>`,
      to: safeEmail,
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #0d0d0f; color: #f0eee8; border-radius: 12px;">
          <h1 style="font-family: Georgia, serif; font-size: 28px; margin-bottom: 8px;">
            Hey ${safeName}! <span style="color: #0ea5e9;">👋</span>
          </h1>
          
          <p style="color: #a09890; line-height: 1.7; margin: 20px 0;">
            Thanks for getting in touch! I've received your message and will get back to you within <strong style="color: #f0eee8;">24 hours</strong>.
          </p>

          <div style="padding: 20px; background: #141418; border-radius: 8px; border-left: 3px solid #0ea5e9; margin: 24px 0;">
            <p style="color: #a09890; font-size: 11px; letter-spacing: 0.1em; margin: 0 0 8px;">YOUR MESSAGE</p>
            <p style="line-height: 1.6; color: #f0eee8; font-size: 14px;">${safeMessage.slice(0, 300)}${safeMessage.length > 300 ? "..." : ""}</p>
          </div>

          <p style="color: #a09890; line-height: 1.7;">
            In the meantime, feel free to check out my work on 
            <a href="https://github.com/Talish1234" style="color: #0ea5e9;">GitHub</a> or connect with me on 
            <a href="https://www.linkedin.com/in/mohd-talish-ansari-a8a05b234" style="color: #0ea5e9;">LinkedIn</a>.
          </p>

          <p style="margin-top: 32px; color: #f0eee8;">
            Best,<br/>
            <strong>Mohd Talish Ansari</strong><br/>
            <span style="color: #0ea5e9; font-size: 0.9em;">Full Stack Developer</span>
          </p>

          <p style="margin-top: 40px; color: #6b6560; font-size: 12px; text-align: center; border-top: 1px solid #2a2828; padding-top: 20px;">
            mohd-talish.dev · New Delhi, India
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
