"use client"

import { m } from "framer-motion"
import { Rocket, RefreshCw, Target, GitMerge } from "lucide-react"
import Term from "@/components/ui/term-tooltip"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { BGPattern } from "@/components/ui/bg-pattern"
import { SECTION_IDS } from "@/lib/config"
import Link from "next/link"
import Breadcrumb from "@/components/ui/breadcrumb"

const pillars = [
  {
    icon: Rocket,
    subtitle: "Valor desde la primera semana",
    title: "Entregas tempranas con propósito",
    description: (
      <>Construimos una versión funcional lo antes posible, no para impresionar, sino para validar. Un <Term term="MVP" /> bien definido reduce el riesgo de construir lo que nadie necesita.</>
    ),
    iconColor: "#fbbf24",
    accent: "from-yellow-400/15 to-transparent",
  },
  {
    icon: RefreshCw,
    subtitle: "Feedback que mejora el producto",
    title: "Iteración continua",
    description:
      "Trabajamos en ciclos cortos con entregas frecuentes. Cada iteración incorpora lo aprendido de la anterior. El producto evoluciona con el negocio, no a pesar de él.",
    iconColor: "#fde68a",
    accent: "from-yellow-200/15 to-transparent",
  },
  {
    icon: Target,
    subtitle: "Primero lo que más retorna",
    title: "Priorización por impacto",
    description:
      "No todo lo que se puede construir se debe construir primero. Ordenamos el backlog según impacto real: qué desbloquea más usuarios, qué reduce más fricción, qué genera más retorno.",
    iconColor: "#fbbf24",
    accent: "from-yellow-400/15 to-transparent",
  },
  {
    icon: GitMerge,
    subtitle: (<><Term term="CI/CD" />, tests y deploys automáticos</>),
    title: "Automatización del proceso de entrega",
    description:
      "Cada cambio pasa por pipelines automáticos de testing y despliegue. Esto elimina errores manuales, reduce el tiempo entre desarrollo y producción, y sostiene la velocidad a largo plazo.",
    iconColor: "#fde68a",
    accent: "from-yellow-200/15 to-transparent",
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

const metrics = [
  { value: "4–6 sem", label: (<>de <Term term="MVP" /> funcional a producción</>) },
  { value: "100%", label: (<>de entregas con <Term term="CI/CD" /> automatizado</>) },
  { value: "Semanal", label: "cadencia de entregas en proyectos activos" },
]

export default function SpeedPageContent() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0b1120] pt-40 pb-28 border-b border-white/[0.07]">
          <BGPattern variant="horizontal-lines" mask="fade-right" style={{ "--background": "#0b1120" } as React.CSSProperties} />
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Entrega Rápida" }]} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-yellow-400/40 text-yellow-400 bg-yellow-400/8">
                Time to Market
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
                La{" "}
                <span style={{ WebkitTextFillColor: "#fbbf24", color: "#fbbf24" }}>velocidad</span>
                {" "}no sirve
                <br />
                si no{" "}
                <span style={{ WebkitTextFillColor: "#fbbf24", color: "#fbbf24" }}>
                  entrega valor.
                </span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Optimizamos el tiempo entre idea y producto en producción sin atajos que
                generen deuda técnica. Rápido, pero bien hecho.
              </p>
            </m.div>
          </div>
        </section>

        {/* Metrics strip */}
        <section className="bg-[#0d1728] py-12 border-b border-white/[0.07]">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {metrics.map((metric, i) => (
                <m.div
                  key={metric.value}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center py-8 px-6"
                >
                  <p
                    className="font-heading text-4xl font-black tracking-tight mb-1"
                    style={{ color: "#fbbf24" }}
                  >
                    {metric.value}
                  </p>
                  <p className="text-slate-500 text-sm">{metric.label}</p>
                </m.div>
              ))}
            </div>
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

        {/* How we work timeline */}
        <section className="bg-[#0d1020] py-20 border-b border-white/[0.07]">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">
                De la idea al producto en producción
              </h2>
              <p className="text-slate-500 text-sm mt-2">Un proceso claro, sin sorpresas.</p>
            </m.div>

            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-5 top-2 bottom-2 w-px bg-white/10 hidden sm:block" />

              <div className="space-y-8">
                {[
                  { step: "01", title: "Kickoff y definición", desc: "Entendemos el problema, definimos el alcance del MVP y acordamos prioridades. Sin ambigüedades." },
                  { step: "02", title: "Primera entrega funcional", desc: "En 1-2 semanas tenés algo real para ver, probar y mostrar. No wireframes, código en staging." },
                  { step: "03", title: "Iteraciones semanales", desc: "Cada semana entregamos mejoras. Vos decidís qué sigue según lo que aprendiste." },
                  { step: "04", title: "Deploy a producción", desc: "Pipeline automatizado. Cero pasos manuales, cero riesgo de errores humanos en el lanzamiento." },
                ].map((item, i) => (
                  <m.div
                    key={item.step}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div
                      className="relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border border-white/15 bg-[#0b1120]"
                      style={{ color: "#fbbf24" }}
                    >
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </m.div>
                ))}
              </div>
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
                ¿Cuánto hace que tu proyecto está esperando?
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Contanos qué querés construir. En 48 horas te decimos cómo arrancamos.
              </p>
              <Link
                href={`/#${SECTION_IDS.CONTACT}`}
                className="btn-shimmer inline-block px-8 py-4 bg-yellow-400 text-[#07090f] font-semibold rounded-xl shadow-[0_0_24px_rgba(251,191,36,0.4)] hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] hover:bg-yellow-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                Hablar sobre tu MVP
              </Link>
            </m.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
