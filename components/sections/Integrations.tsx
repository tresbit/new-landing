"use client"

import { motion } from "framer-motion"
import { Plug, Webhook, RefreshCw, Globe } from "lucide-react"
import { SECTION_IDS } from "@/lib/config"

const blocks = [
  {
    icon: Plug,
    tag: "Integraciones",
    title: "Tu software, integrado a lo que ya usás",
    description:
      "Conectamos tu sistema con CRMs, ERPs, pasarelas de pago y herramientas internas. Sin carga manual de datos, sin duplicar procesos, sin errores de sincronización entre plataformas.",
  },
  {
    icon: Webhook,
    tag: "Arquitectura API",
    title: "Preparado para conectarse desde el día uno",
    description:
      "Diseñamos con estándares de interoperabilidad desde el primer sprint. Cuando necesites integrar algo nuevo, el sistema ya sabe cómo recibirlo sin intervención mayor.",
  },
  {
    icon: RefreshCw,
    tag: "Automatización",
    title: "Los datos fluyen, los procesos suceden solos",
    description:
      "Sincronización automática entre plataformas, flujos disparados sin intervención humana. Menos tareas repetitivas, menos errores, más tiempo para decisiones que tienen valor real.",
  },
  {
    icon: Globe,
    tag: "Independencia tecnológica",
    title: "El sistema se adapta a vos, no al revés",
    description:
      "Sin ataduras a un proveedor específico. Construimos con estándares abiertos para que puedas migrar, cambiar herramientas o escalar sin reescribir desde cero.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.09, ease: "easeOut" as const },
  }),
}

export default function Integrations() {
  return (
    <section
      id="integraciones"
      className="dark relative bg-[#0d1728] py-24 overflow-hidden border-t border-white/[0.07]"
    >
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Emerald radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-105"
        style={{
          background:
            "radial-gradient(ellipse, rgba(52,211,153,0.07), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-emerald-500/30 text-emerald-400/90 bg-emerald-500/5 mb-6">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ecosistema conectado
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5 tracking-tight bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent leading-tight">
            Tu sistema no debería
            <br className="hidden sm:block" /> trabajar solo
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Debería trabajar con todo lo demás. Conectamos tu operación en un
            ecosistema digital donde los datos fluyen y los procesos se ejecutan
            sin fricción.
          </p>
        </motion.div>

        {/* 2×2 card grid — gap-px trick for separator lines */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          {blocks.map((block, i) => (
            <motion.div
              key={block.tag}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-60px" }}
              variants={cardVariants}
              className="group relative bg-[#0d1728] hover:bg-[#0f2035] p-8 transition-colors duration-200"
            >
              {/* Hover top accent line */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-emerald-500/70 via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="inline-flex items-center justify-center size-11 rounded-xl bg-emerald-500/8 border border-emerald-500/15 mb-5">
                <block.icon
                  className="size-5 text-emerald-400"
                  strokeWidth={1.5}
                />
              </div>

              {/* Tag */}
              <p className="text-emerald-400/70 text-[11px] font-mono font-medium tracking-widest uppercase mb-2">
                {block.tag}
              </p>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                {block.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-12 text-center"
        >
          <a
            href={`#${SECTION_IDS.CONTACT}`}
            className="inline-block px-8 py-4 bg-[#286291] text-white font-semibold rounded-xl shadow-[0_0_24px_rgba(40,98,145,0.45)] hover:shadow-[0_0_40px_rgba(91,168,216,0.55)] hover:bg-[#286291]/90 hover:-translate-y-0.5 transition-all duration-200"
          >
            Hablemos de tu ecosistema
          </a>
        </motion.div>
      </div>
    </section>
  )
}
