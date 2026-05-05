"use client"

import { useState, useRef } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { COMPANY_INFO, SECTION_IDS } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { ContactCard } from "@/components/ui/contact-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CalendarDays } from "lucide-react"

const DottedSurface = dynamic(
  () => import("@/components/ui/dotted-surface").then((m) => m.DottedSurface),
  { ssr: false },
)

type FormState = "idle" | "sending" | "success" | "error"

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.ADDRESS)}`
const SANITIZED_PHONE = COMPANY_INFO.PHONE.replace(/[^\d+]/g, "")

export default function Contact() {
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState("sending")
    setErrorMsg("")

    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.message || "Error al enviar")
      }

      setState("success")
      formRef.current?.reset()
    } catch (err) {
      setState("error")
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido")
    }
  }

  return (
    <section id={SECTION_IDS.CONTACT} className="dark relative bg-[#0b1120] text-white py-20 overflow-hidden border-t border-white/[0.07]">
      <DottedSurface className="absolute inset-0 opacity-60" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        <ContactCard
          title="Hablemos de tu próximo sistema"
          description="Contanos qué estás buscando y evaluamos juntos la mejor forma de resolverlo. Sin vueltas, sin propuestas genéricas."
          contactInfo={[
            {
              icon: Phone,
              label: "Telefono",
              value: (
                <a
                  href={`https://wa.me/${SANITIZED_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5ba8d8] transition-colors"
                >
                  {COMPANY_INFO.PHONE}
                </a>
              ),
            },
            {
              icon: Mail,
              label: "Email",
              value: (
                <a href={`mailto:${COMPANY_INFO.EMAIL}`} className="hover:text-[#5ba8d8] transition-colors">
                  {COMPANY_INFO.EMAIL}
                </a>
              ),
            },
            {
              icon: MapPin,
              label: "Direccion",
              value: (
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5ba8d8] transition-colors"
                >
                  {COMPANY_INFO.ADDRESS}
                </a>
              ),
            },
          ]}
          className="bg-transparent border-white/10"
          formSectionClassName="bg-[#0b1120]/60 border-white/10"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="w-full space-y-4"
            aria-label="Formulario de contacto"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">
                  Nombre <span aria-hidden="true" className="text-red-400">*</span>
                </Label>
                <Input id="name" name="name" type="text" required placeholder="Tu nombre" aria-label="Nombre completo" aria-required="true" />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">
                  Email <span aria-hidden="true" className="text-red-400">*</span>
                </Label>
                <Input id="email" name="email" type="email" required placeholder="tu@email.com" aria-label="Dirección de email" aria-required="true" />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone">
                  Telefono <span className="text-muted-foreground text-xs">(opcional)</span>
                </Label>
                <Input id="phone" name="phone" type="tel" placeholder="+54 9 261 000 0000" aria-label="Número de teléfono (opcional)" />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="subject">
                  Asunto <span aria-hidden="true" className="text-red-400">*</span>
                </Label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  aria-label="Asunto del mensaje"
                  aria-required="true"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="" disabled>Selecciona un asunto</option>
                  <option value="consulta">Consulta general</option>
                  <option value="presupuesto">Solicitud de presupuesto</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="message">
                  Mensaje <span aria-hidden="true" className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Contanos qué necesitás resolver"
                  className="resize-none"
                  aria-label="Mensaje"
                  aria-required="true"
                />
              </div>
            </div>

            {state === "error" && (
              <p role="alert" className="text-red-400 text-sm">
                {errorMsg || "Hubo un problema. Intentalo nuevamente."}
              </p>
            )}
            {state === "success" && (
              <p role="status" className="text-green-400 text-sm font-medium">
                Mensaje enviado. Te respondemos en breve.
              </p>
            )}

            <Button
              type="submit"
              disabled={state === "sending"}
              className="w-full bg-[#286291] hover:bg-[#286291]/90 text-white font-semibold transition-all duration-200 disabled:opacity-60"
            >
              {state === "sending" ? "Enviando..." : "Enviar consulta"}
            </Button>

            <div className="relative flex items-center gap-3 pt-1">
              <div className="h-px flex-1 bg-white/[0.08]" />
              <span className="text-xs text-slate-600">o</span>
              <div className="h-px flex-1 bg-white/[0.08]" />
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full h-10 rounded-lg border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:border-white/25 transition-colors duration-200"
            >
              <CalendarDays size={15} aria-hidden="true" />
              Agendá una reunión
            </Link>
          </form>
        </ContactCard>
      </div>
    </section>
  )
}

