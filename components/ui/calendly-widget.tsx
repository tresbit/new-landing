"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

function buildUrl(base: string): string {
  const params = new URLSearchParams({
    background_color: "0b1120",
    text_color: "f1f5f9",
    primary_color: "5ba8d8",
    hide_gdpr_banner: "1",
  })
  const sep = base.includes("?") ? "&" : "?"
  return `${base}${sep}${params.toString()}`
}

interface CalendlyWidgetProps {
  url: string
  className?: string
}

export function CalendlyWidget({ url, className }: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)
  const [height, setHeight] = useState(630)
  const [ready, setReady] = useState(false)
  const builtUrl = buildUrl(url)

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://calendly.com") return
      const { event, payload } = e.data ?? {}
      if (event === "calendly.page_height" && payload?.height) {
        const px = parseInt(String(payload.height), 10)
        if (!isNaN(px) && px > 0) {
          setHeight(px)
          setReady(true)
        }
      }
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [])

  function initWidget() {
    if (window.Calendly && containerRef.current && !initialized.current) {
      window.Calendly.initInlineWidget({ url: builtUrl, parentElement: containerRef.current })
      initialized.current = true
    }
  }

  useEffect(() => {
    if (window.Calendly) initWidget()
  }, [])

  return (
    <>
      <div
        className={cn("relative w-full rounded-2xl overflow-hidden border border-white/[0.07]", className)}
        style={{ minWidth: "320px", minHeight: 500 }}
      >
        {/* Overlay centrado mientras Calendly no emitió page_height */}
        {!ready && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#0b1120]">
            <div className="h-8 w-8 rounded-full border-2 border-[#5ba8d8]/30 border-t-[#5ba8d8] animate-spin" />
            <span className="text-xs text-slate-500">Cargando calendario...</span>
          </div>
        )}

        <div
          ref={containerRef}
          className="calendly-inline-widget w-full"
          data-url={builtUrl}
          style={{ height }}
        />
      </div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onReady={initWidget}
      />
    </>
  )
}
