"use client"

import dynamic from "next/dynamic"

const CircularTestimonials = dynamic(
  () => import("@/components/ui/circular-testimonials").then((mod) => mod.CircularTestimonials),
  {
    ssr: false,
    loading: () => <div className="h-96 w-full animate-pulse rounded-xl bg-white/5" aria-busy="true" />,
  }
)
import { SECTION_IDS } from "@/lib/config"
import Term from "@/components/ui/term-tooltip"

const SERVICES = [
  {
    name: "Desarrollo a medida",
    designation: <>Software · <Term term="Full-Stack" /></>,
    quote:
      "Construimos sistemas adaptados a tu negocio, no al revés. Desde aplicaciones web hasta plataformas complejas, diseñadas para integrarse y escalar sin fricción.",
    src: "/desarrollo-software-personalizado.webp",
  },
  {
    name: "Consultoría tecnológica",
    designation: "Estrategia · Innovación",
    quote:
      "Te ayudamos a tomar decisiones tecnológicas con criterio. Evaluamos, priorizamos y definimos una hoja de ruta clara para avanzar sin improvisar.",
    src: "/consultoria-tecnologica-empresas.webp",
  },
  {
    name: "Soporte continuo",
    designation: "Mantenimiento · 24/7",
    quote:
      "Acompañamos el sistema en producción para evitar caídas, resolver problemas rápido y mejorar de forma constante.",
    src: "/soporte-tecnico-software-empresas.webp",
  },
]

export default function Features() {
  return (
    <section id={SECTION_IDS.FEATURES} className="bg-[#0f1929] py-20 border-t border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
            Soluciones que resuelven, <span style={{ WebkitTextFillColor: '#5ba8d8', color: '#5ba8d8' }}>no solo que funcionan</span>
          </h2>
          <p className="text-slate-300 text-xl leading-relaxed">
            Cada desarrollo está pensado para impactar en tu operación, no solo para cumplir un requerimiento.
          </p>
        </div>

        <div className="flex justify-center">
          <CircularTestimonials
            testimonials={SERVICES}
            autoplay={true}
            colors={{
              name: "#ffffff",
              designation: "#7ec8e3",
              testimony: "#cbd5e1",
              arrowBackground: "#142033",
              arrowForeground: "#f1f5f9",
              arrowHoverBackground: "#286291",
              activeBorderColor: "#0f1929",
            }}
            fontSizes={{
              name: "28px",
              designation: "13px",
              quote: "18px",
            }}
          />
        </div>
      </div>
    </section>
  )
}
