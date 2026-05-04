"use client"

import Script from "next/script"
import dynamic from "next/dynamic"
import { useEffect, useRef } from "react"
import { COMPANY_INFO, SECTION_IDS } from "@/lib/config"
import { Mail, MapPin, Phone, PlusIcon } from "lucide-react"

const DottedSurface = dynamic(
  () => import("@/components/ui/dotted-surface").then((m) => m.DottedSurface),
  { ssr: false },
)

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.ADDRESS)}`
const SANITIZED_PHONE = COMPANY_INFO.PHONE.replace(/[^\d+]/g, "")
const CALENDLY_URL =
  "https://calendly.com/tresbitsoft/30min?background_color=0b1120&text_color=f8fafc&primary_color=286291&hide_gdpr_banner=1"

export default function Contact() {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!widgetRef.current) return
    // Guard: skip if Calendly already auto-initialized from data-url (iframe present)
    if (widgetRef.current.querySelector("iframe")) return
    // Only reaches here on SPA back-navigation (script loaded, new div mounted, no iframe yet)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).Calendly?.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: widgetRef.current,
    })
  }, [])

  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="dark relative bg-[#0b1120] text-white py-20 overflow-hidden border-t border-white/[0.07]"
    >
      <DottedSurface className="absolute inset-0 opacity-60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        <div className="relative border border-white/10">
          <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-white/30" aria-hidden="true" />
          <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-white/30" aria-hidden="true" />
          <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-white/30" aria-hidden="true" />
          <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-white/30" aria-hidden="true" />

          {/* Header */}
          <div className="px-6 md:px-10 pt-10 pb-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
              Hablemos de tu próximo sistema
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Elegí un horario y coordinamos una reunión de 30 minutos. Sin formularios, sin esperas.
            </p>
          </div>

          {/* Calendly inline widget */}
          <div className="px-4 md:px-8 pb-2">
            <div
              ref={widgetRef}
              className="calendly-inline-widget w-full"
              data-url={CALENDLY_URL}
              data-auto-height="true"
              style={{ minWidth: "320px", height: "700px" }}
              aria-label="Calendario para agendar una reunión con Tresbit"
              role="region"
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
            />
          </div>

          {/* Contact info strip */}
          <div className="border-t border-white/[0.07] px-6 md:px-10 py-7">
            <dl className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="shrink-0 p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <Phone className="h-4 w-4 text-[#5ba8d8]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <dt className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-0.5">Teléfono</dt>
                  <dd>
                    <a
                      href={`https://wa.me/${SANITIZED_PHONE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-300 hover:text-[#5ba8d8] transition-colors duration-150"
                    >
                      {COMPANY_INFO.PHONE}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="shrink-0 p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <Mail className="h-4 w-4 text-[#5ba8d8]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <dt className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-0.5">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${COMPANY_INFO.EMAIL}`}
                      className="text-sm text-slate-300 hover:text-[#5ba8d8] transition-colors duration-150"
                    >
                      {COMPANY_INFO.EMAIL}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="shrink-0 p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="h-4 w-4 text-[#5ba8d8]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <dt className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-0.5">Dirección</dt>
                  <dd>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-300 hover:text-[#5ba8d8] transition-colors duration-150"
                    >
                      {COMPANY_INFO.ADDRESS}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
