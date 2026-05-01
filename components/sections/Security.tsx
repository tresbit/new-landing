"use client"

import { SECTION_IDS, ANIMATION_CONFIG } from "@/lib/config"
import { FeatureCard } from "@/components/ui/grid-feature-cards"
import { motion } from "framer-motion"
import { Activity, Lock, ShieldCheck, TrendingUp, Wrench, Zap } from "lucide-react"
import FloatingPathsBackground from "@/components/ui/floating-paths-background"

const features = [
  {
    title: "Seguridad avanzada",
    icon: ShieldCheck,
    description:
      "Cifrado de extremo a extremo, autenticacion multifactor y protocolos avanzados que protegen la informacion critica de tu empresa.",
  },
  {
    title: "Confidencialidad total",
    icon: Lock,
    description:
      "Acuerdos NDA rigurosos, gestion segura de datos y cumplimiento estricto de normativas de privacidad para proteger tu propiedad intelectual.",
  },
  {
    title: "Escalabilidad infinita",
    icon: TrendingUp,
    description:
      "Arquitecturas modulares adaptables e infraestructura cloud optimizada que crecen con tu negocio sin comprometer el rendimiento.",
  },
  {
    title: "Alto rendimiento",
    icon: Zap,
    description:
      "Sistemas optimizados con balanceo de carga inteligente que garantizan tiempos de respuesta rapidos bajo cualquier nivel de demanda.",
  },
  {
    title: "Monitoreo continuo",
    icon: Activity,
    description:
      "Vigilancia 24/7 de todos tus sistemas con alertas en tiempo real para detectar y resolver incidencias antes de que impacten tu negocio.",
  },
  {
    title: "Soporte permanente",
    icon: Wrench,
    description:
      "Mantenimiento proactivo, actualizaciones regulares y equipo de soporte dedicado para mantener tus sistemas en optimas condiciones.",
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
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
            Soluciones <span style={{ WebkitTextFillColor: '#5ba8d8', color: '#5ba8d8' }}>seguras</span> y escalables
          </h2>
          <p className="text-slate-300 text-xl leading-relaxed">
            Desarrollamos sistemas robustos que crecen con tu negocio sin comprometer la seguridad
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
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
            Consulta por nuestras soluciones
          </a>
        </div>
      </div>
    </section>
  )
}
