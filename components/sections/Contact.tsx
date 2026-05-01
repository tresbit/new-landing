"use client"

import { useState, useRef } from "react"
import { COMPANY_INFO, SECTION_IDS } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { DottedSurface } from "@/components/ui/dotted-surface"
import { ContactCard } from "@/components/ui/contact-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

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
          title="Ponte en contacto"
          description="Estamos listos para ayudarte con tus necesidades tecnologicas. Completa el formulario y te respondemos a la brevedad."
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
                <Input id="name" name="name" type="text" required placeholder="Tu nombre" />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">
                  Email <span aria-hidden="true" className="text-red-400">*</span>
                </Label>
                <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone">
                  Telefono <span className="text-muted-foreground text-xs">(opcional)</span>
                </Label>
                <Input id="phone" name="phone" type="tel" placeholder="+54 9 261 000 0000" />
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
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="" disabled>Selecciona un asunto</option>
                  <option value="consulta">Consulta general</option>
                  <option value="presupuesto">Solicitud de presupuesto</option>
                  <option value="soporte">Soporte tecnico</option>
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
                  placeholder="En que podemos ayudarte?"
                  className="resize-none"
                />
              </div>
            </div>

            {state === "error" && (
              <p role="alert" className="text-red-400 text-sm">
                {errorMsg || "Ocurrio un error. Intenta de nuevo."}
              </p>
            )}
            {state === "success" && (
              <p role="status" className="text-green-400 text-sm font-medium">
                Mensaje enviado! Te responderemos a la brevedad.
              </p>
            )}

            <Button
              type="submit"
              disabled={state === "sending"}
              className="w-full bg-[#286291] hover:bg-[#286291]/90 text-white font-semibold transition-all duration-200 disabled:opacity-60"
            >
              {state === "sending" ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </ContactCard>
      </div>
    </section>
  )
}

