import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  adSpend?: string;
  platforms?: string[];
  problem?: string;
  question?: string;
  formType: "diagnostico" | "contact";
}

function buildEmailHtml(data: ContactPayload): string {
  if (data.formType === "diagnostico") {
    return `
<h2>Nueva solicitud de sesión de diagnóstico</h2>
<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
  <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Nombre</td><td style="padding:8px;">${data.name}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Email</td><td style="padding:8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
  <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Empresa</td><td style="padding:8px;">${data.company || "—"}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Gasto mensual</td><td style="padding:8px;">${data.adSpend || "—"}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Plataformas</td><td style="padding:8px;">${data.platforms?.join(", ") || "—"}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Problema principal</td><td style="padding:8px;">${data.problem || "—"}</td></tr>
</table>
    `;
  }

  return `
<h2>Nuevo mensaje de contacto</h2>
<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
  <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Nombre</td><td style="padding:8px;">${data.name}</td></tr>
  <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Email</td><td style="padding:8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
  <tr><td style="padding:8px;font-weight:bold;color:#6B7280;">Pregunta / Situación</td><td style="padding:8px;">${data.question || "—"}</td></tr>
</table>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const data: ContactPayload = await req.json();

    if (!data.name || !data.email) {
      return NextResponse.json({ error: "Nombre y email son requeridos." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "El email no es válido." }, { status: 400 });
    }

    const subject =
      data.formType === "diagnostico"
        ? `Sesión de Diagnóstico — ${data.name} (${data.company || "sin empresa"})`
        : `Contacto — ${data.name}`;

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "JT Ads <notificaciones@juantabares.co>",
        to: "hola@juantabares.co",
        replyTo: data.email,
        subject,
        html: buildEmailHtml(data),
      });
    } else {
      // Log to console in development when no API key is set
      console.log("=== FORM SUBMISSION (no RESEND_API_KEY) ===");
      console.log("Subject:", subject);
      console.log("Data:", JSON.stringify(data, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error interno. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
