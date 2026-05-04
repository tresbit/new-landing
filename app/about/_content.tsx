"use client"

import { m } from "framer-motion"
import Link from "next/link"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { COMPANY_INFO, SECTION_IDS } from "@/lib/config"
import { MapPin, Mail, Phone, Target, Wrench, MessageSquare, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Foco en resultados",
    description: "No construimos tecnología por construirla. Cada decisión técnica tiene que traducirse en un impacto medible para tu negocio.",
    color: "#5ba8d8",
  },
  {
    icon: Wrench,
    title: "Calidad y compromiso",
    description: "Entregamos rápido sin acumular deuda técnica. El código que escribimos hoy no te va a frenar en seis meses.",
    color: "#a78bfa",
  },
  {
    icon: MessageSquare,
    title: "Comunicación directa",
    description: "Sin intermediarios, sin reportes vacíos. Hablamos claro sobre el estado real del proyecto, los problemas y las soluciones.",
    color: "#34d399",
  },
  {
    icon: TrendingUp,
    title: "Relación a largo plazo",
    description: "No desaparecemos después del deploy. Acompañamos el crecimiento del sistema y del negocio que lo usa.",
    color: "#f59e0b",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
}

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <Header />

      <main id="main-content">

        {/* Hero */}
        <section className="bg-[#0b1120] pt-40 pb-24 border-b border-white/[0.07]">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#5ba8d8]/40 text-[#5ba8d8] bg-[#5ba8d8]/10">
                Quiénes somos
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 text-white">
                Construimos el software que tu negocio{" "}
                <span style={{ color: "#5ba8d8" }}>necesita</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Somos un equipo de Mendoza, Argentina. Desarrollamos sistemas a medida para empresas que necesitan tecnología que funcione de verdad, no soluciones genéricas de catálogo.
              </p>
            </m.div>
          </div>
        </section>

        {/* Origen */}
        <section className="bg-[#07090f] py-20 border-b border-white/[0.07]">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <m.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                  Nacimos en Mendoza.<br />
                  <span style={{ color: "#5ba8d8" }}>Operamos para el país.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Fundamos Tresbit con una premisa simple: las empresas argentinas merecen acceso a software bien construido, sin pagar los precios de una consultora internacional ni aceptar la calidad de un freelancer improvisado.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Trabajamos con empresas de distintos rubros — logística, retail, fintech, servicios — ayudándolas a resolver problemas concretos con tecnología moderna y equipos que entienden el contexto local.
                </p>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#0b1120] border border-white/[0.07] rounded-2xl p-8 space-y-4"
              >
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 hover:text-[#5ba8d8] transition-colors group"
                >
                  <MapPin size={18} className="shrink-0 mt-0.5 group-hover:text-[#5ba8d8]" aria-hidden="true" />
                  <span className="text-sm">{COMPANY_INFO.ADDRESS}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.EMAIL}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-[#5ba8d8] transition-colors"
                >
                  <Mail size={18} className="shrink-0" aria-hidden="true" />
                  <span className="text-sm">{COMPANY_INFO.EMAIL}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.PHONE.replace(/[^\d+]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-[#5ba8d8] transition-colors"
                >
                  <Phone size={18} className="shrink-0" aria-hidden="true" />
                  <span className="text-sm">{COMPANY_INFO.PHONE}</span>
                </a>
                <p className="text-slate-600 text-xs pt-2">Lun–Vie · 09:00–18:00 ART</p>
              </m.div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="bg-[#0b1120] py-20 border-b border-white/[0.07]">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center mb-14"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
                Cómo trabajamos
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Los principios que guían cada proyecto.
              </p>
            </m.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
              {values.map((v, i) => (
                <m.div
                  key={v.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="bg-[#0b1120] p-8 md:p-10 group hover:bg-[#0d1728] transition-colors duration-200"
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 border border-white/10"
                    style={{ backgroundColor: `${v.color}18` }}
                  >
                    <v.icon className="w-5 h-5" strokeWidth={1.5} style={{ color: v.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0f1929] py-20">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
                ¿Querés trabajar con nosotros?
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Contanos qué estás buscando resolver. Sin vueltas.
              </p>
              <Link
                href={`/#${SECTION_IDS.CONTACT}`}
                className="btn-shimmer inline-block px-8 py-4 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #286291, #5ba8d8)", boxShadow: "0 0 24px rgba(91,168,216,0.3)" }}
              >
                Hablar con el equipo
              </Link>
            </m.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
