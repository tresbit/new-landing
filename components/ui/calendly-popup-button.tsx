"use client"

import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"

const CALENDLY_URL = "https://calendly.com/tresbitsoft/30min"

interface Props {
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function CalendlyPopupButton({ className, style, children }: Props) {
  return (
    <button
      type="button"
      className={cn("cursor-pointer", className)}
      style={style}
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL })
      }}
    >
      {children}
    </button>
  )
}
