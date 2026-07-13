import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Portfolio <onboarding@resend.dev>`,
      to: process.env.CONTACT_EMAIL || "bharathserman@gmail.com",
      subject: `Portfolio: ${subject}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Portfolio Message</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #334155; -webkit-font-smoothing: antialiased;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width: 560px; width: 100%; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                  
                  <!-- Top Accent Line -->
                  <tr>
                    <td style="height: 4px; background-color: #0ea5e9; border-top-left-radius: 8px; border-top-right-radius: 8px;"></td>
                  </tr>

                  <!-- Header -->
                  <tr>
                    <td style="padding: 32px 32px 24px 32px; border-bottom: 1px solid #f1f5f9;">
                      <h2 style="margin: 0; font-size: 18px; font-weight: 600; color: #0f172a;">
                        New Message Received
                      </h2>
                      <p style="margin: 4px 0 0 0; font-size: 14px; color: #64748b;">
                        Subject: ${subject}
                      </p>
                    </td>
                  </tr>

                  <!-- Sender Details -->
                  <tr>
                    <td style="padding: 24px 32px 20px 32px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="font-size: 13px; font-weight: 600; color: #475569; padding-bottom: 6px; width: 100px;">From</td>
                          <td style="font-size: 14px; color: #0f172a; padding-bottom: 6px;">${name}</td>
                        </tr>
                        <tr>
                          <td style="font-size: 13px; font-weight: 600; color: #475569; padding-bottom: 6px;">Email</td>
                          <td style="font-size: 14px; padding-bottom: 6px;">
                            <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size: 13px; font-weight: 600; color: #475569; padding-bottom: 6px;">Date</td>
                          <td style="font-size: 14px; color: #0f172a; padding-bottom: 6px;">${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message Body -->
                  <tr>
                    <td style="padding: 0 32px 32px 32px;">
                      <div style="background-color: #f1f5f9; border-left: 4px solid #cbd5e1; border-radius: 4px; padding: 20px;">
                        <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Reply Button -->
                  <tr>
                    <td style="padding: 0 32px 40px 32px;" align="center">
                      <a href="mailto:${email}?subject=Re: Portfolio - ${subject}" style="display: inline-block; padding: 12px 32px; background-color: #0f172a; color: #ffffff; font-size: 14px; font-weight: 500; text-decoration: none; border-radius: 6px;">
                        Reply to Sender
                      </a>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; border-top: 1px solid #f1f5f9; padding: 20px 32px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; text-align: center;">
                      <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                        This email was sent from the contact form on your portfolio website.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data, success: true }, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
