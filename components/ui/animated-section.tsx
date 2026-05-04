"use client"

import { m } from "framer-motion"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  x?: number
  blur?: boolean
  once?: boolean
  margin?: string
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  y = 16,
  x = 0,
  blur = false,
  once = true,
  margin,
}: Props) {
  return (
    <m.div
      initial={{
        opacity: 0,
        ...(y !== 0 && { y }),
        ...(x !== 0 && { x }),
        ...(blur && { filter: "blur(6px)" }),
      }}
      whileInView={{
        opacity: 1,
        ...(y !== 0 && { y: 0 }),
        ...(x !== 0 && { x: 0 }),
        ...(blur && { filter: "blur(0px)" }),
      }}
      viewport={{ once, ...(margin ? { margin } : {}) }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </m.div>
  )
}
