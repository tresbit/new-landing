import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { EMAIL_CONFIG } from "@/lib/config"

const ALLOWED_SUBJECTS = ["consulta", "presupuesto", "soporte", "otro"]

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: "Cuerpo inválido" }, { status: 400 })
  }

  const { name, email, phone, subject, message } = body as Record<string, string>

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: "Faltan campos requeridos" }, { status: 422 })
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Email inválido" }, { status: 422 })
  }

  // Validate subject against allowlist
  if (!ALLOWED_SUBJECTS.includes(subject)) {
    return NextResponse.json({ message: "Asunto inválido" }, { status: 422 })
  }

  // Sanitize text fields
  const sanitize = (val: string) =>
    String(val).replace(/[<>]/g, "").slice(0, 2000)

  const safeName = sanitize(name)
  const safePhone = sanitize(phone ?? "")
  const safeMessage = sanitize(message)

  const transport = nodemailer.createTransport({
    host: EMAIL_CONFIG.HOST,
    port: EMAIL_CONFIG.PORT,
    secure: EMAIL_CONFIG.PORT === 465,
    auth: {
      user: EMAIL_CONFIG.USER,
      pass: EMAIL_CONFIG.PASS,
    },
  })

  try {
    await transport.sendMail({
      from: `"Formulario Tresbit" <${EMAIL_CONFIG.USER}>`,
      to: EMAIL_CONFIG.TO,
      replyTo: email,
      subject: `[Contacto] ${subject} — ${safeName}`,
      text: `Nombre: ${safeName}\nEmail: ${email}\nTeléfono: ${safePhone}\nAsunto: ${subject}\n\nMensaje:\n${safeMessage}`,
      html: `
        <h2>Nuevo mensaje desde tresbit.com</h2>
        <table cellpadding="6">
          <tr><th align="left">Nombre</th><td>${safeName}</td></tr>
          <tr><th align="left">Email</th><td>${email}</td></tr>
          <tr><th align="left">Teléfono</th><td>${safePhone || "—"}</td></tr>
          <tr><th align="left">Asunto</th><td>${subject}</td></tr>
        </table>
        <hr/>
        <p style="white-space:pre-wrap">${safeMessage}</p>
      `,
    })

    return NextResponse.json({ message: "ok" }, { status: 200 })
  } catch (err) {
    console.error("[contact] smtp error:", err)
    return NextResponse.json({ message: "Error al enviar el email" }, { status: 500 })
  }
}
