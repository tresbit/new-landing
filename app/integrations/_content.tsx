"use client"

import { motion } from "framer-motion"
import { Plug, Webhook, RefreshCw, Globe } from "lucide-react"
import Term from "@/components/ui/term-tooltip"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { BGPattern } from "@/components/ui/bg-pattern"
import { SECTION_IDS } from "@/lib/config"
import Link from "next/link"

const pillars = [
  {
    icon: Plug,
    title: "Tu software, integrado a lo que ya usás",
    subtitle: "Sin duplicar trabajo, sin errores manuales",
    description: (
      <>Conectamos tu sistema con <Term term="CRMs" />, <Term term="ERPs" />, pasarelas de pago y herramientas internas. Cada dato se sincroniza automáticamente: sin carga manual, sin pasos intermedios, sin margen de error entre plataformas.</>
    ),
    iconColor: "#fb923c",
    accent: "from-orange-500/15 to-transparent",
  },
  {
    icon: Webhook,
    title: "Preparado para conectarse desde el día uno",
    subtitle: (<>Arquitectura orientada a <Term term="APIs">APIs</Term></>),
    description:
      "Diseñamos con estándares de interoperabilidad desde el primer sprint. Cuando necesités integrar algo nuevo —una herramienta, un proveedor, una plataforma— el sistema ya sabe cómo recibirlo sin intervención mayor.",
    iconColor: "#fdba74",
    accent: "from-orange-400/15 to-transparent",
  },
  {
    icon: RefreshCw,
    title: "Los datos fluyen, los procesos suceden solos",
    subtitle: "Automatización entre plataformas",
    description:
      "Sincronización automática entre sistemas, flujos disparados sin intervención humana. Menos tareas repetitivas, menos errores operativos, más tiempo del equipo para lo que realmente importa.",
    iconColor: "#fb923c",
    accent: "from-orange-500/15 to-transparent",
  },
  {
    icon: Globe,
    title: "El sistema se adapta a vos, no al revés",
    subtitle: "Independencia tecnológica",
    description:
      "Sin ataduras a un proveedor específico. Construimos con estándares abiertos para que puedas cambiar herramientas, migrar datos o escalar el ecosistema sin reescribir desde cero ni negociar con nadie.",
    iconColor: "#fdba74",
    accent: "from-orange-400/15 to-transparent",
  },
]

const connectedItems = [
  "Salesforce / HubSpot",
  "SAP / Odoo / ERP propio",
  "Stripe / MercadoPago",
  "WhatsApp Business API",
  "Google Workspace",
  "Slack / Teams",
  "Shopify / WooCommerce",
  "AWS / GCP / Azure",
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

export default function IntegrationsPageContent() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0b1120] pt-40 pb-28 border-b border-white/[0.07]">
          <BGPattern variant="dots" mask="fade-center" style={{ "--background": "#0b1120" } as React.CSSProperties} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest border border-orange-500/40 text-orange-400 bg-orange-500/8">
                <span className="size-1.5 rounded-full bg-orange-400 animate-pulse" />
                Integraciones
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
                Tu sistema{" "}
                <span style={{ WebkitTextFillColor: "#fb923c", color: "#fb923c" }}>no</span>
                {" "}debería
                <br />
                <span style={{ WebkitTextFillColor: "#fb923c", color: "#fb923c" }}>
                  trabajar solo.
                </span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Construimos software que se conecta al ecosistema digital de tu empresa desde el primer día. Sin fricciones, sin silos, sin procesos manuales innecesarios.
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Connected systems strip */}
        <section className="bg-[#0d1728] py-20 border-b border-white/[0.07]">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                Nos conectamos con lo que ya usás
              </h2>
              <p className="text-slate-400 text-sm">
                Y con cualquier plataforma que tenga una <Term term="API">API</Term> abierta o documentación.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {connectedItems.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-orange-500/20 text-orange-300/80 bg-orange-500/5"
                >
                  {item}
                </span>
              ))}
              <span className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-slate-400 bg-white/4">
                + cualquier API REST o GraphQL
              </span>
            </motion.div>
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
                ¿Tu operación tiene herramientas desconectadas?
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Contanos cómo trabaja tu empresa hoy y diseñamos juntos un ecosistema integrado que elimine la fricción operativa.
              </p>
              <Link
                href={`/#${SECTION_IDS.CONTACT}`}
                className="btn-shimmer inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl shadow-[0_0_24px_rgba(249,115,22,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:bg-orange-400 hover:-translate-y-0.5 transition-all duration-200"
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
