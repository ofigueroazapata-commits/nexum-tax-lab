import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Nexum Tax Lab <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `[Nexum Tax Lab] ${subject} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0f1e; color: #e2e8f0; padding: 32px; border-radius: 12px;">
          <h2 style="color: #0CBBD4; margin-top: 0;">Nueva consulta recibida</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; width: 120px;">Nombre</td>
              <td style="padding: 8px 0; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0CBBD4;">${email}</a></td>
            </tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #94a3b8;">Teléfono</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;">Asunto</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #1e293b; margin: 20px 0;" />
          <p style="color: #94a3b8; margin-bottom: 8px;">Mensaje:</p>
          <p style="background: #0f172a; padding: 16px; border-radius: 8px; border-left: 3px solid #0CBBD4; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
          <p style="color: #475569; font-size: 12px; margin-top: 24px;">Enviado desde nexumtaxlab.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}
