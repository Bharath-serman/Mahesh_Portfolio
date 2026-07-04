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
          <meta name="x-apple-disable-message-reformatting">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #050508; font-family: 'Courier New', Courier, monospace; -webkit-font-smoothing: antialiased;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #050508; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; border: 1px solid #111; border-radius: 8px; overflow: hidden; background-color: #080808;">
                  
                  <!-- Terminal Header Bar -->
                  <tr>
                    <td style="background-color: #0d120d; padding: 10px 16px; border-bottom: 1px solid #00ff8833;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #ff5f56; margin-right: 6px;"></span>
                            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #ffbd2e; margin-right: 6px;"></span>
                            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #27c93f; margin-right: 12px;"></span>
                            <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #555; letter-spacing: 1px;">portfolio_contact.log</span>
                          </td>
                          <td align="right">
                            <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #00ff88;">● CONNECTED</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Header -->
                  <tr>
                    <td style="padding: 30px 30px 25px 30px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #00ff88; letter-spacing: 3px; padding-bottom: 8px;">
                            &gt; INCOMING TRANSMISSION_
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family: 'Courier New', Courier, monospace; font-size: 22px; color: #ffffff; font-weight: bold; padding-bottom: 12px;">
                            PORTFOLIO<span style="color: #ff00ff;">:</span> ${subject}
                          </td>
                        </tr>
                        <tr>
                          <td style="height: 2px; background: linear-gradient(90deg, #00ff88, #00ff8800);"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Sender Info -->
                  <tr>
                    <td style="padding: 0 30px 25px 30px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0e0a; border: 1px solid #00ff8833; border-radius: 6px;">
                        <tr>
                          <td style="padding: 10px 14px; background-color: #0d120d; border-bottom: 1px solid #00ff8833;">
                            <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #ff5f56;">●</span>
                            <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #ffbd2e;">●</span>
                            <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #27c93f;">●</span>
                            <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #555; margin-left: 12px;">sender_info.txt</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 20px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="90" style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #00ffff; padding: 8px 0; vertical-align: top;">NAME</td>
                                <td style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #ffffff; padding: 8px 0;">${name}</td>
                              </tr>
                              <tr>
                                <td width="90" style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #00ffff; padding: 8px 0; vertical-align: top;">EMAIL</td>
                                <td style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #ffffff; padding: 8px 0;">
                                  <a href="mailto:${email}" style="color: #00ff88; text-decoration: none; border-bottom: 1px solid #00ff8833;">${email}</a>
                                </td>
                              </tr>
                              <tr>
                                <td width="90" style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #00ffff; padding: 8px 0; vertical-align: top;">TIME</td>
                                <td style="font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #ffffff; padding: 8px 0;">${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message -->
                  <tr>
                    <td style="padding: 0 30px 30px 30px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0e0a; border: 1px solid #ff00ff33; border-radius: 6px;">
                        <tr>
                          <td style="padding: 10px 14px; background-color: #0d120d; border-bottom: 1px solid #ff00ff33;">
                            <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #ff00ff;">// MESSAGE_BODY</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 20px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #111; border-left: 3px solid #00ff88; border-radius: 4px;">
                              <tr>
                                <td style="padding: 18px;">
                                  <p style="font-family: 'Courier New', Courier, monospace; font-size: 13px; color: #cccccc; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Reply Button -->
                  <tr>
                    <td style="padding: 0 30px 35px 30px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <table role="presentation" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="background-color: #00ff88; border-radius: 4px;">
                                  <a href="mailto:${email}?subject=Re: Portfolio - ${subject}" style="display: inline-block; padding: 14px 45px; background-color: #00ff88; color: #050508; font-family: 'Courier New', Courier, monospace; font-size: 13px; font-weight: bold; text-decoration: none; letter-spacing: 3px; border-radius: 4px;">
                                    REPLY
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding-top: 10px;">
                            <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #444;">click to respond to ${email}</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #0a0a0a; border-top: 1px solid #1a1a1a; padding: 20px 30px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="font-family: 'Courier New', Courier, monospace; font-size: 10px; color: #333; line-height: 1.8;">
                            <span style="color: #555;">TRANSMISSION_ID:</span> ${Date.now().toString(36).toUpperCase()}<br>
                            <span style="color: #555;">SOURCE:</span> PORTFOLIO_CONTACT_FORM<br>
                            <span style="color: #555;">STATUS:</span> <span style="color: #00ff88;">DELIVERED</span>
                          </td>
                        </tr>
                      </table>
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
