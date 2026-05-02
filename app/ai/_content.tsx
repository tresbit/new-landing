"use client"

import { motion } from "framer-motion"
import { BotMessageSquare, BarChart3, Cpu, Plug } from "lucide-react"
import Term from "@/components/ui/term-tooltip"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { BGPattern } from "@/components/ui/bg-pattern"
import { SECTION_IDS } from "@/lib/config"
import Link from "next/link"

const pillars = [
  {
    icon: Cpu,
    subtitle: "Tareas repetitivas resueltas",
    title: "Automatización inteligente",
    description:
      "Reemplazamos flujos manuales —clasificación, validación, generación de reportes— con modelos que procesan información y toman decisiones simples sin intervención humana. Menos errores, menos tiempo operativo.",
    iconColor: "#a78bfa",
    accent: "from-[#a78bfa]/15 to-transparent",
  },
  {
    icon: BotMessageSquare,
    subtitle: "Atención sin límite de horario",
    title: "Asistentes entrenados con tus datos",
    description:
      "Chatbots que conocen tu producto, tus procesos y tu tono. No son genéricos: se entrenan con la información de tu negocio para responder con precisión y derivar solo cuando es necesario.",
    iconColor: "#818cf8",
    accent: "from-[#818cf8]/15 to-transparent",
  },
  {
    icon: BarChart3,
    subtitle: "Datos que anticipan decisiones",
    title: "Análisis y detección de patrones",
    description:
      "Modelos que identifican tendencias, anomalías y señales tempranas en tus datos operativos. No reemplaza tu criterio: lo complementa con contexto que un dashboard estático no puede darte.",
    iconColor: "#a78bfa",
    accent: "from-[#a78bfa]/15 to-transparent",
  },
  {
    icon: Plug,
    subtitle: "OpenAI, modelos propios y más",
    title: (<>Integración con <Term term="APIs">APIs</Term> de IA</>),
    description:
      "Conectamos tu sistema con los modelos más relevantes del mercado o con infraestructura propia. La integración está diseñada para cambiar de proveedor o modelo sin reescribir tu lógica de negocio.",
    iconColor: "#818cf8",
    accent: "from-[#818cf8]/15 to-transparent",
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

export default function IAPageContent() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0b1120] pt-40 pb-28 border-b border-white/[0.07]">
          <BGPattern variant="checkerboard" mask="fade-top" style={{ "--background": "#0b1120" } as React.CSSProperties} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#a78bfa]/40 text-[#a78bfa] bg-[#a78bfa]/10">
                Inteligencia Artificial
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
                La{" "}
                <span style={{ WebkitTextFillColor: "#a78bfa", color: "#a78bfa" }}>IA</span>
                {" "}no reemplaza tu sistema.
                <br />
                Lo{" "}
                <span style={{ WebkitTextFillColor: "#a78bfa", color: "#a78bfa" }}>potencia</span>
                {" "}donde más{" "}
                <span style={{ WebkitTextFillColor: "#a78bfa", color: "#a78bfa" }}>impacta</span>.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Integramos modelos de IA en sistemas reales, con casos de uso concretos y
                resultados medibles. Sin promesas vacías, sin complejidad innecesaria.
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
                  key={pillar.subtitle}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="relative bg-[#0b1120] p-8 md:p-10 group hover:bg-[#0d1728] transition-colors duration-200 overflow-hidden"
                >
                  {/* gradient wash on hover */}
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

        {/* Use case highlight strip */}
        <section className="bg-[#0d1020] py-16 border-b border-white/[0.07]">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">
                ¿Dónde tiene sentido integrar IA en tu sistema?
              </h2>
              <p className="text-slate-500 text-sm mt-2">Ejemplos reales, no teoría.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Clasificación automática de tickets de soporte" },
                { label: "Generación de borradores de contratos o propuestas" },
                { label: "Detección de anomalías en transacciones" },
                { label: "Resumen automático de reuniones o documentos" },
                { label: "Chatbot de onboarding para usuarios nuevos" },
                { label: "Predicción de demanda o stock mínimo" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-white/3 hover:bg-white/6 transition-colors duration-200"
                >
                  <span
                    className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: i % 2 === 0 ? "#a78bfa" : "#818cf8", marginTop: "6px" }}
                  />
                  <p className="text-slate-300 text-sm leading-snug">{item.label}</p>
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
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent tracking-tight">
                ¿Tenés un proceso que querés automatizar?
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Contanos el problema. Te decimos si tiene sentido resolverlo con IA y cómo lo encaramos.
              </p>
              <Link
                href={`/#${SECTION_IDS.CONTACT}`}
                className="btn-shimmer inline-block px-8 py-4 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  boxShadow: "0 0 24px rgba(124,58,237,0.4)",
                }}
              >
                Hablar con el equipo
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
