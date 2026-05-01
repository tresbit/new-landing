"use client"

import { motion } from "framer-motion"
import { Blocks, FileCode2, GitBranch, ShieldCheck } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { BGPattern } from "@/components/ui/bg-pattern"
import { ANIMATION_CONFIG, SECTION_IDS } from "@/lib/config"

const pillars = [
  {
    icon: Blocks,
    subtitle: "Cambios sin efecto dominó",
    title: "Módulos que no se pisan entre sí",
    description:
      "Separamos responsabilidades para que modificar una parte del sistema no rompa el resto. Cada cambio tiene un alcance definido y predecible.",
    iconColor: "#60a5fa",
    accent: "from-blue-400/15 to-transparent",
  },
  {
    icon: FileCode2,
    subtitle: "Sin dependencia de personas clave",
    title: "Código que cualquier developer entiende",
    description:
      "Seguimos estándares claros para que el equipo pueda intervenir el sistema sin semanas de onboarding. El conocimiento queda en el código, no en la cabeza de alguien.",
    iconColor: "#93c5fd",
    accent: "from-blue-300/15 to-transparent",
  },
  {
    icon: GitBranch,
    subtitle: "Listo para lo que viene",
    title: "El sistema crece sin reescribirse",
    description:
      "Diseñamos pensando en cambios futuros: nuevos flujos, integraciones o módulos se incorporan sin refactorizaciones costosas ni decisiones que se van acumulando como deuda.",
    iconColor: "#60a5fa",
    accent: "from-blue-400/15 to-transparent",
  },
  {
    icon: ShieldCheck,
    subtitle: "Menos fallos, más confianza",
    title: "Validación que detecta problemas antes",
    description:
      "Tests automatizados y control de errores en cada capa del sistema. Los problemas aparecen en staging, no en producción con usuarios reales.",
    iconColor: "#93c5fd",
    accent: "from-blue-300/15 to-transparent",
  },
]

const principles = [
  "Separación de responsabilidades",
  "Revisión de código en cada PR",
  "Tests unitarios y de integración",
  "Documentación técnica viva",
  "Versionado semántico",
  "CI/CD con validaciones automáticas",
  "Contratos de API explícitos",
  "Monitoreo de errores en producción",
]

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.1 },
  }),
}

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0b1120] pt-40 pb-28 border-b border-white/[0.07]">
          <BGPattern variant="grid" mask="fade-edges" style={{ "--background": "#0b1120" } as React.CSSProperties} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest border border-blue-400/40 text-blue-400 bg-blue-400/8">
                <span className="size-1.5 rounded-full bg-blue-400 animate-pulse" />
                Arquitectura
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
                El problema no es{" "}
                <span style={{ WebkitTextFillColor: "#60a5fa", color: "#60a5fa" }}>construir</span>.
                <br />
                Es poder{" "}
                <span style={{ WebkitTextFillColor: "#60a5fa", color: "#60a5fa" }}>mantenerlo</span>.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Un sistema que funciona hoy pero no puede crecer mañana no es una solución:
                es un problema diferido. Diseñamos con orden desde el principio.
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
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />
                  <div className="relative z-10">
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 border border-white/10"
                      style={{ backgroundColor: `${pillar.iconColor}18` }}
                    >
                      <pillar.icon
                        className="w-5 h-5"
                        strokeWidth={1.5}
                        style={{ color: pillar.iconColor }}
                      />
                    </div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: pillar.iconColor }}
                    >
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

        {/* Principles strip */}
        <section className="bg-[#0d1728] py-20 border-b border-white/[0.07]">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                Principios que aplicamos en cada proyecto
              </h2>
              <p className="text-slate-400 text-sm">
                No como checklist, sino como forma de trabajo.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {principles.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-blue-400/20 text-blue-300/80 bg-blue-400/5"
                >
                  {item}
                </span>
              ))}
            </motion.div>
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
                ¿Tu sistema actual tiene deuda técnica acumulada?
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Auditamos el estado actual y proponemos un plan realista para ordenar, estabilizar y preparar el sistema para lo que viene.
              </p>
              <a
                href={`/#${SECTION_IDS.CONTACT}`}
                className="btn-shimmer inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl shadow-[0_0_24px_rgba(96,165,250,0.35)] hover:shadow-[0_0_40px_rgba(96,165,250,0.55)] hover:bg-blue-400 hover:-translate-y-0.5 transition-all duration-200"
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
