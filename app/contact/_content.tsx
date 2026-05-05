"use client"

import { m } from "framer-motion"
import Link from "next/link"
import { CalendlyWidget } from "@/components/ui/calendly-widget"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { COMPANY_INFO } from "@/lib/config"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"

const details = [
  { icon: CalendarDays, label: "Duración", value: "30 minutos" },
  { icon: Clock, label: "Disponibilidad", value: "Lun–Vie · 09:00–18:00 ART" },
]

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <Header />

      <main id="main-content">

        {/* Hero */}
        <section className="bg-[#0b1120] pt-40 pb-16 border-b border-white/[0.07]">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#5ba8d8] transition-colors mb-8"
              >
                <ArrowLeft size={14} aria-hidden="true" />
                Volver al inicio
              </Link>
              <span className="block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#5ba8d8]/40 text-[#5ba8d8] bg-[#5ba8d8]/10 w-fit mx-auto">
                Reuniones
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight mb-4 text-white">
                Agendá una{" "}
                <span style={{ color: "#5ba8d8" }}>reunión</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-8">
                Elegí el horario que mejor te quede y charlamos sobre tu proyecto. Sin compromiso.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-slate-400">
                    <Icon size={15} className="text-[#5ba8d8]" aria-hidden="true" />
                    <span className="text-slate-500">{label}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </m.div>
          </div>
        </section>

        {/* Calendly */}
        <section className="bg-[#07090f] py-12">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto px-4 md:px-6"
          >
            <CalendlyWidget url="https://calendly.com/tresbitsoft/30min" />
          </m.div>
        </section>

        {/* Prefiere escribir */}
        <section className="bg-[#0b1120] py-14 border-t border-white/[0.07]">
          <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
            <p className="text-slate-400 text-base mb-4">
              ¿Preferís escribirnos?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a
                href={`mailto:${COMPANY_INFO.EMAIL}`}
                className="text-[#5ba8d8] hover:underline transition-colors"
              >
                {COMPANY_INFO.EMAIL}
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.PHONE.replace(/[^\d+]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5ba8d8] hover:underline transition-colors"
              >
                {COMPANY_INFO.PHONE}
              </a>
            </div>
            <Link
              href="/#contacto"
              className="inline-block mt-6 text-sm text-slate-500 hover:text-white transition-colors underline underline-offset-4"
            >
              Ir al formulario de contacto
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
