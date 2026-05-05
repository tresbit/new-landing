"use client"

import { m } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { SECTION_IDS, ANIMATION_CONFIG } from "@/lib/config"

const HeroPatterns = dynamic(
  () => import("@/components/ui/hero-patterns").then((mod) => mod.HeroPatterns),
  { ssr: false }
)

export default function HeroSection() {
  const [currentPattern, setCurrentPattern] = useState(0)
  const patterns = ["neural", "flow", "geometric"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % patterns.length)
    }, 18000)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      id={SECTION_IDS.WELCOME}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0b1120]"
    >
      {/* Dynamic Background Patterns — coloreados con el primario de la marca */}
      <div className="absolute inset-0 text-[#5ba8d8]" style={{ opacity: ANIMATION_CONFIG.OPACITY }}>
        <HeroPatterns currentPattern={currentPattern} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0b1120]/80 via-transparent to-[#0b1120]/60" />



      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl mx-auto">

          {/* Text side */}
          <m.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
              Software a medida en{" "}
              <span style={{ WebkitTextFillColor: '#5ba8d8', color: '#5ba8d8' }}>Mendoza</span>{" "}que convierte tu idea en un sistema real
            </h1>
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl mb-10"
            >
              Somos una empresa de desarrollo de software en Mendoza. Construimos sistemas web y mobile a medida que resuelven problemas reales y acompañan el crecimiento de tu negocio.
            </m.p>

            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 100 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link href={`#${SECTION_IDS.CONTACT}`} data-track="cta_contacto">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base bg-[#286291] hover:bg-[#286291]/90 text-white rounded-xl shadow-[0_0_24px_rgba(40,98,145,0.45)] hover:shadow-[0_0_40px_rgba(91,168,216,0.55)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Hablar con nosotros
                </Button>
              </Link>
              <Link href={`#${SECTION_IDS.SECURITY}`} data-track="cta_servicios">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base bg-white/10 border border-white/30 text-white hover:bg-white hover:text-[#0b1120] rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  Ver cómo trabajamos
                </Button>
              </Link>
            </m.div>
          </m.div>

          {/* Image side */}
          <m.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/aplicacion-movil-software-a-medida.webp"
              alt="Aplicación mobile a medida desarrollada por Tresbit Mendoza"
              width={400}
              height={800}
              priority
              sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
              className="w-55 sm:w-70 md:w-80 lg:w-95 h-auto object-contain drop-shadow-2xl"
            />
          </m.div>
        </div>
      </div>
    </section>
  )
}
