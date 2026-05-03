"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Tresbit transformó nuestro proceso de pedidos en una plataforma digital eficiente. Lo que antes nos llevaba horas está automatizado. El equipo entendió nuestra operación desde el primer día.",
    name: "Martina García",
    role: "Directora Operativa",
    company: "Distribuidora del Sur",
    initials: "MG",
    accent: "#5ba8d8",
  },
  {
    quote: "Implementamos un asistente de IA para atención al cliente que responde el 80% de las consultas sin intervención humana. El ROI fue claro desde el primer mes.",
    name: "Carlos Mendoza",
    role: "CEO",
    company: "Fintech Cuyo",
    initials: "CM",
    accent: "#a78bfa",
  },
  {
    quote: "Necesitábamos conectar nuestro sistema con tres plataformas externas y Tresbit lo resolvió en tiempo récord. La integración es estable y no nos dio un solo problema.",
    name: "Lucía Romero",
    role: "Gerente de Tecnología",
    company: "Logística Andina",
    initials: "LR",
    accent: "#34d399",
  },
  {
    quote: "Entregaron nuestro MVP en 5 semanas. Era exactamente lo que necesitábamos para validar el producto con usuarios reales antes de invertir más en desarrollo.",
    name: "Diego Funes",
    role: "Fundador",
    company: "PropTech Argentina",
    initials: "DF",
    accent: "#f59e0b",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
}

export default function Testimonials() {
  return (
    <section className="bg-[#07090f] py-24 border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Lo que dicen nuestros{" "}
            <span style={{ color: "#5ba8d8" }}>clientes</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Resultados reales de empresas que confiaron en Tresbit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              className="relative bg-[#0b1120] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-6 hover:border-white/[0.12] transition-colors duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 20 20" fill="#f59e0b" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote
                  className="absolute -top-1 -left-1 opacity-20"
                  style={{ color: t.accent }}
                  size={28}
                  aria-hidden="true"
                />
                <blockquote className="text-slate-300 text-base leading-relaxed pl-6">
                  {t.quote}
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/[0.06]">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: `${t.accent}28`, border: `1.5px solid ${t.accent}50`, color: t.accent }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
