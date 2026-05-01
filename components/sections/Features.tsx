"use client"

import { CircularTestimonials } from "@/components/ui/circular-testimonials"
import { SECTION_IDS } from "@/lib/config"

const SERVICES = [
  {
    name: "Desarrollo a medida",
    designation: "Software · Full-Stack",
    quote:
      "Creamos soluciones de software personalizadas que se adaptan perfectamente a los procesos y necesidades especificas de tu empresa, desde aplicaciones web hasta sistemas internos complejos.",
    src: "/customize-develop.png",
  },
  {
    name: "Consultoria tecnologica",
    designation: "Estrategia · Innovacion",
    quote:
      "Asesoramiento especializado para optimizar tus procesos digitales y aprovechar las ultimas tecnologias. Te ayudamos a tomar mejores decisiones con una hoja de ruta clara y ejecutable.",
    src: "/consulting.png",
  },
  {
    name: "Soporte continuo",
    designation: "Mantenimiento · 24/7",
    quote:
      "Acompanamiento permanente y mantenimiento proactivo de tus sistemas para garantizar su optimo funcionamiento. Respondemos rapido para que tu negocio nunca se detenga.",
    src: "/customer-support.png",
  },
]

export default function Features() {
  return (
    <section id={SECTION_IDS.FEATURES} className="bg-[#0f1929] py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Nuestras <span className="text-[#5ba8d8]">soluciones</span>
          </h2>
          <p className="text-slate-300 text-xl leading-relaxed">
            Todo lo que necesitas para hacer crecer tu negocio con tecnologia
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
