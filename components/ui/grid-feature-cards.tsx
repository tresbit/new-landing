"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"

type FeatureType = {
  title: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description: string
  href?: string
}

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType
}

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const [mounted, setMounted] = useState(false)
  const patternRef = useRef<number[][]>(genRandomPattern())

  useEffect(() => {
    setMounted(true)
  }, [])

  const inner = (
    <div className={cn("relative overflow-hidden p-6 bg-[#0b1120] opacity-95 hover:bg-[#0d1728] transition-colors duration-200", feature.href && "cursor-pointer group", className)} {...props}>
      {mounted && (
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full mask-[linear-gradient(white,transparent)]">
          <div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-linear-to-r mask-[radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
            <GridPattern
              width={20}
              height={20}
              x="-12"
              y="4"
              squares={patternRef.current}
              className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
            />
          </div>
        </div>
      )}
      <feature.icon className="text-foreground/75 size-6" strokeWidth={1} aria-hidden />
      <h3 className="mt-10 text-base md:text-lg font-semibold text-foreground">{feature.title}</h3>
      <p className="text-muted-foreground relative z-20 mt-2 text-sm leading-relaxed">{feature.description}</p>
      {feature.href && (
        <span className="relative z-20 inline-flex items-center gap-1 mt-4 text-xs font-medium text-[#5ba8d8] opacity-70 group-hover:opacity-100 transition-opacity">
          Ver más <span aria-hidden>→</span>
        </span>
      )}
    </div>
  )

  if (feature.href) {
    return (
      <Link href={feature.href} className="block">
        {inner}
      </Link>
    )
  }

  return inner
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number
  height: number
  x: string
  y: string
  squares?: number[][]
}) {
  const patternId = React.useId()

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={sx * width} y={sy * height} />
          ))}
        </svg>
      )}
    </svg>
  )
}

function genRandomPattern(length?: number): number[][] {
  length = length ?? 5
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ])
}
