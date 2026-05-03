"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { SECTION_IDS, ANIMATION_CONFIG } from "@/lib/config"

// Geometric Grid Paths
function GeometricPaths() {
  const gridSize = 40
  const paths = []

  for (let x = 0; x < 20; x++) {
    for (let y = 0; y < 12; y++) {
      if (Math.random() > 0.7) {
        paths.push({
          id: `grid-${x}-${y}`,
          d: `M${x * gridSize},${y * gridSize} L${(x + 1) * gridSize},${y * gridSize} L${(x + 1) * gridSize},${(y + 1) * gridSize} L${x * gridSize},${(y + 1) * gridSize} Z`,
          delay: Math.random() * 5,
        })
      }
    }
  }

  return (
    <svg className="absolute inset-0 w-full h-full opacity-55" viewBox="0 0 800 480" preserveAspectRatio="xMidYMid slice">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.9, 0.9, 0],
            scale: [1, 1.05, 1.05, 1],
          }}
          transition={{
            duration: 14,
            times: [0, 0.15, 0.85, 1],
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  )
}

// Organic Flow Paths
function FlowPaths() {
  const flowPaths = Array.from({ length: 12 }, (_, i) => {
    const amplitude = 50 + i * 10
    const offset = i * 60

    return {
      id: `flow-${i}`,
      d: `M-100,${200 + offset} Q200,${200 + offset - amplitude} 500,${200 + offset} T900,${200 + offset}`,
      strokeWidth: 1 + i * 0.3,
      opacity: 0.1 + i * 0.05,
      delay: i * 0.8,
    }
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
      {flowPaths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, path.opacity, path.opacity, 0],
          }}
          transition={{
            duration: 22,
            times: [0, 0.12, 0.88, 1],
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  )
}

// Neural Network Paths
function NeuralPaths() {
  const nodes = Array.from({ length: 50 }, (_, i) => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
    id: `node-${i}`,
  }))

  const connections: { id: string; d: string; delay: number }[] = []
  nodes.forEach((node, i) => {
    const nearbyNodes = nodes.filter((other, j) => {
      if (i === j) return false
      const distance = Math.sqrt(
        Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2),
      )
      return distance < 120 && Math.random() > 0.6
    })

    nearbyNodes.forEach((target) => {
      connections.push({
        id: `conn-${i}-${target.id}`,
        d: `M${node.x},${node.y} L${target.x},${target.y}`,
        delay: Math.random() * 10,
      })
    })
  })

  return (
    <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      {connections.map((conn) => (
        <motion.path
          key={conn.id}
          d={conn.d}
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 12,
            times: [0, 0.15, 0.85, 1],
            delay: conn.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="2.5"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1.3, 1],
            opacity: [0, 0.9, 1, 0.9],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  )
}



export default function HeroSection() {
  const [currentPattern, setCurrentPattern] = useState(0)
  const [mounted, setMounted] = useState(false)
  const patterns = ["neural", "flow", "geometric"]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % patterns.length)
    }, 18000)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderPattern = () => {
    switch (currentPattern) {
      case 0: return <NeuralPaths />
      case 1: return <FlowPaths />
      case 2: return <GeometricPaths />
      default: return <NeuralPaths />
    }
  }

  return (
    <section
      id={SECTION_IDS.WELCOME}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0b1120]"
    >
      {/* Dynamic Background Patterns — coloreados con el primario de la marca */}
      <div className="absolute inset-0 text-[#5ba8d8]" style={{ opacity: ANIMATION_CONFIG.OPACITY }}>
        {mounted && (
          <AnimatePresence>
            <motion.div
              key={currentPattern}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {renderPattern()}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0b1120]/80 via-transparent to-[#0b1120]/60" />



      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl mx-auto">

          {/* Text side */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
              Transformamos la{" "}
              <span style={{ WebkitTextFillColor: '#5ba8d8', color: '#5ba8d8' }}>tecnología</span>{" "}en resultados concretos para tu negocio
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl mb-10"
            >
              Transformamos ideas en sistemas que resuelven problemas reales y acompañan el crecimiento concreto de tu empresa.
            </motion.p>

            <motion.div
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
            </motion.div>
          </motion.div>

          {/* Image side */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/aplicacion-movil-software-a-medida.webp"
              alt="App móvil demostrativa Tresbit"
              width={400}
              height={800}
              priority
              sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
              className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
