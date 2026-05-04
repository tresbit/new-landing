"use client"

import { m } from "framer-motion"
import { RadioTower, Zap, Wrench, TrendingUp } from "lucide-react"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { BGPattern } from "@/components/ui/bg-pattern"
import { SECTION_IDS } from "@/lib/config"
import Link from "next/link"
import Breadcrumb from "@/components/ui/breadcrumb"

const pillars = [
  {
    icon: RadioTower,
    subtitle: "Antes de que lo notes vos",
    title: "Monitoreo activo del sistema",
    description:
      "Configuramos alertas sobre métricas reales: tiempos de respuesta, errores, consumo de recursos. Si algo se desvía del patrón normal, lo sabemos antes de que afecte a tus usuarios.",
    iconColor: "#38bdf8",
    accent: "from-[#38bdf8]/15 to-transparent",
  },
  {
    icon: Zap,
    subtitle: "Respuesta sin demoras",
    title: "Soporte con tiempo de reacción real",
    description:
      "Ante una incidencia, actuamos rápido y con contexto. No empezamos desde cero cada vez: conocemos el sistema, el historial y los puntos sensibles. Eso reduce el tiempo de resolución significativamente.",
    iconColor: "#5ba8d8",
    accent: "from-[#5ba8d8]/15 to-transparent",
  },
  {
    icon: Wrench,
    subtitle: "Sin deuda técnica acumulada",
    title: "Mantenimiento preventivo",
    description:
      "Actualizamos dependencias, revisamos vulnerabilidades y refactorizamos partes críticas antes de que se conviertan en problemas. El sistema que entregamos en seis meses sigue siendo tan sólido como el del primer día.",
    iconColor: "#38bdf8",
    accent: "from-[#38bdf8]/15 to-transparent",
  },
  {
    icon: TrendingUp,
    subtitle: "El producto que crece con el uso",
    title: "Evolución continua",
    description:
      "Revisamos métricas de uso real para identificar qué mejorar, qué eliminar y qué construir después. El sistema no queda congelado en la versión del lanzamiento.",
    iconColor: "#5ba8d8",
    accent: "from-[#5ba8d8]/15 to-transparent",
  },
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

const commitments = [
  { label: "Canal de comunicación directo con el equipo que construyó el sistema" },
  { label: "Reportes periódicos de estado, errores y acciones realizadas" },
  { label: "Ventanas de mantenimiento coordinadas para no afectar la operación" },
  { label: "Registro de cambios y documentación actualizada" },
  { label: "Revisión trimestral de arquitectura y rendimiento" },
  { label: "Plan de contingencia definido antes de que lo necesites" },
]

export default function SupportPageContent() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0b1120] pt-40 pb-28 border-b border-white/[0.07]">
          <BGPattern variant="vertical-lines" mask="fade-bottom" style={{ "--background": "#0b1120" } as React.CSSProperties} />
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Soporte" }]} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#38bdf8]/40 text-[#38bdf8] bg-[#38bdf8]/10">
                Soporte y Continuidad
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
                El{" "}
                <span style={{ WebkitTextFillColor: "#38bdf8", color: "#38bdf8" }}>lanzamiento</span>
                {" "}no es el{" "}
                <span style={{ WebkitTextFillColor: "#38bdf8", color: "#38bdf8" }}>final</span>.
                <br />
                Es donde empieza el{" "}
                <span style={{ WebkitTextFillColor: "#38bdf8", color: "#38bdf8" }}>trabajo real</span>.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Acompañamos el sistema en producción con monitoreo, mantenimiento preventivo y
                evolución continua. No lo lanzamos y desaparecemos.
              </p>
            </m.div>
          </div>
        </section>

        {/* Pillars grid */}
        <section className="bg-[#0b1120] py-24 border-b border-white/[0.07]">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
              {pillars.map((pillar, i) => (
                <m.div
                  key={pillar.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
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
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments strip */}
        <section className="bg-[#0d1020] py-20 border-b border-white/[0.07]">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">
                Lo que incluye trabajar con nosotros a largo plazo
              </h2>
              <p className="text-slate-500 text-sm mt-2">Sin letra chica, sin sorpresas.</p>
            </m.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {commitments.map((item, i) => (
                <m.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-white/3 hover:bg-white/6 transition-colors duration-200"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: i % 2 === 0 ? "#38bdf8" : "#5ba8d8" }}
                  />
                  <p className="text-slate-300 text-sm leading-snug">{item.label}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#0f1929] py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent tracking-tight">
                ¿Tenés un sistema que necesita atención constante?
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Contanos en qué estado está y cómo lo estás gestionando hoy. Evaluamos qué tiene sentido mejorar.
              </p>
              <Link
                href={`/#${SECTION_IDS.CONTACT}`}
                className="btn-shimmer inline-block px-8 py-4 bg-[#38bdf8] text-[#07090f] font-semibold rounded-xl shadow-[0_0_24px_rgba(56,189,248,0.35)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] hover:bg-[#7dd3fc] hover:-translate-y-0.5 transition-all duration-200"
              >
                Consultar sobre soporte
              </Link>
            </m.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
