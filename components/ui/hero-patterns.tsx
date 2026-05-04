"use client"

import { m, AnimatePresence } from "framer-motion"

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
        <m.path
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
        <m.path
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
        <m.path
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
        <m.circle
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

export function HeroPatterns({ currentPattern }: { currentPattern: number }) {
  return (
    <AnimatePresence>
      <m.div
        key={currentPattern}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        {currentPattern === 0 && <NeuralPaths />}
        {currentPattern === 1 && <FlowPaths />}
        {currentPattern === 2 && <GeometricPaths />}
      </m.div>
    </AnimatePresence>
  )
}
