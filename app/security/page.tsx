"use client"

import { motion } from "framer-motion"
import { ShieldCheck, KeyRound, Lock, Activity } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { BGPattern } from "@/components/ui/bg-pattern"
import { ANIMATION_CONFIG, SECTION_IDS } from "@/lib/config"

const pillars = [
  {
    icon: KeyRound,
    title: "Autenticación segura",
    subtitle: "Identidad verificada, acceso controlado",
    description:
      "Implementamos autenticación multifactor, integración con proveedores como Auth0 y gestión granular de roles. Cada usuario accede únicamente a lo que necesita, nada más.",
    accent: "from-red-500/20 to-transparent",
    iconColor: "#f87171",
  },
  {
    icon: Lock,
    title: "Encriptación de datos",
    subtitle: "En tránsito y en reposo",
    description:
      "TLS en todas las comunicaciones y cifrado AES-256 para datos persistentes. Aunque ocurra una filtración, los datos no son legibles ni utilizables por terceros.",
    accent: "from-red-300/20 to-transparent",
    iconColor: "#fca5a5",
  },
  {
    icon: ShieldCheck,
    title: "Arquitectura segura por diseño",
    subtitle: "Mínimo privilegio, máxima protección",
    description:
      "Separamos las capas de presentación, lógica y datos. El backend nunca queda expuesto directamente. Aplicamos el principio de mínimo privilegio desde la primera línea de código.",
    accent: "from-red-500/20 to-transparent",
    iconColor: "#f87171",
  },
  {
    icon: Activity,
    title: "Monitoreo y protección activa",
    subtitle: "Detección antes del impacto",
    description:
      "Logs estructurados, alertas en tiempo real y rate limiting configurado para bloquear patrones sospechosos. No esperamos a que algo falle para actuar.",
    accent: "from-red-300/20 to-transparent",
    iconColor: "#fca5a5",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0b1120] pt-40 pb-28 border-b border-white/[0.07]">
          <BGPattern variant="diagonal-stripes" mask="fade-y" style={{ "--background": "#0b1120" } as React.CSSProperties} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-red-500/40 text-red-400 bg-red-500/8">
                Seguridad
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
                La{" "}
                <span style={{ WebkitTextFillColor: "#f87171", color: "#f87171" }}>seguridad</span>
                {" "}no es un{" "}
                <span style={{ WebkitTextFillColor: "#f87171", color: "#f87171" }}>extra.</span>
                <br />
                Es parte del diseño.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Cada sistema que construimos incorpora prácticas de seguridad desde el primer commit,
                no como parche final sino como decisión de arquitectura.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pillars grid */}
        <section className="bg-[#0b1120] py-24 border-b border-white/[0.07]">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-60px" }}
                  variants={fadeUp}
                  className="relative bg-[#0b1120] p-8 md:p-10 group hover:bg-[#0d1728] transition-colors duration-200 overflow-hidden"
                >
                  {/* subtle gradient wash */}
                  <div className={`absolute inset-0 bg-linear-to-br ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 border border-white/10"
                      style={{ backgroundColor: `${pillar.iconColor}15` }}
                    >
                      <pillar.icon
                        className="w-5 h-5"
                        strokeWidth={1.5}
                        style={{ color: pillar.iconColor }}
                      />
                    </div>

                    {/* Text */}
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: pillar.iconColor }}>
                      {pillar.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#0f1929] py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent tracking-tight">
                ¿Tu próximo proyecto necesita ser seguro?
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Hablemos de cómo construir un sistema que tus usuarios y tu equipo puedan confiar.
              </p>
              <a
                href={`/#${SECTION_IDS.CONTACT}`}
                className="btn-shimmer inline-block px-8 py-4 bg-red-600 text-white font-semibold rounded-xl shadow-[0_0_24px_rgba(239,68,68,0.35)] hover:shadow-[0_0_40px_rgba(239,68,68,0.55)] hover:bg-red-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                Hablar con el equipo
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
