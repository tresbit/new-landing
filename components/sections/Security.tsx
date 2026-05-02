"use client"

import { SECTION_IDS, ANIMATION_CONFIG } from "@/lib/config"
import { FeatureCard } from "@/components/ui/grid-feature-cards"
import { motion } from "framer-motion"
import { Activity, Brain, Layers, Link, Rocket, ShieldCheck } from "lucide-react"
import FloatingPathsBackground from "@/components/ui/floating-paths-background"
import Term from "@/components/ui/term-tooltip"

const features = [
  {
    title: "Seguridad sólida",
    icon: ShieldCheck,
    description:
      "Protegemos accesos y datos críticos con autenticación robusta, cifrado y prácticas que reducen riesgos reales desde el diseño del sistema.",
  },
  {
    title: "Integración con IA",
    icon: Brain, // o Sparkles si usas lucide
    description:
      "Incorporamos inteligencia artificial en procesos clave para automatizar tareas, mejorar decisiones y generar ventajas competitivas reales.",
  },
  {
    title: "Entrega rápida",
    icon: Rocket,
    description:
      "Llevamos ideas a producción en tiempos cortos mediante entregas iterativas, priorización por impacto y automatización del desarrollo.",
  },
  {
    title: "Continuidad operativa",
    icon: Activity,
    description:
      "Monitoreamos, mantenemos y evolucionamos el sistema para asegurar estabilidad, respuesta rápida y funcionamiento constante.",
  },
  {
    title: "Integraciones sin fricción",
    icon: Link,
    description: <>Conectamos tu sistema con herramientas externas, <Term term="APIs" /> y plataformas existentes para evitar silos y optimizar procesos.</>,
  },
  {
    title: "Arquitectura preparada para crecer",
    icon: Layers,
    description:
      "Diseñamos sistemas mantenibles y escalables que evolucionan sin generar deuda técnica ni bloqueos a futuro.",
  },
]

export default function Security() {
  return (
    <section id={SECTION_IDS.SECURITY} className="dark relative bg-[#0b1120] py-20 overflow-hidden border-t border-white/[0.07]">
      <FloatingPathsBackground globalOpacity={ANIMATION_CONFIG.OPACITY} />
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
            Preparado para crecer <span style={{ WebkitTextFillColor: '#5ba8d8', color: '#5ba8d8' }}>sin fricciones</span>
          </h2>
          <p className="text-slate-300 text-xl leading-relaxed">
            Diseñamos sistemas preparados para crecer, resistir y operar sin comprometer la información ni el rendimiento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y divide-x divide-dashed divide-white/35 border border-dashed border-white/35 mb-12"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>

        <div className="text-center">
          <a
            href={`#${SECTION_IDS.CONTACT}`}
            data-track="cta_consulta"
            className="inline-block px-8 py-4 bg-[#286291] text-white font-semibold rounded-xl shadow-[0_0_24px_rgba(40,98,145,0.45)] hover:shadow-[0_0_40px_rgba(91,168,216,0.55)] hover:bg-[#286291]/90 hover:-translate-y-0.5 transition-all duration-200"
          >
            Hablar sobre tu proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
