"use client"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { LEXICON } from "@/lib/lexicon"

interface TermProps {
  term: string
  definition?: string
  children?: React.ReactNode
  className?: string
}

export default function Term({ term, definition, children, className = "" }: TermProps) {
  const [showLoader, setShowLoader] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const [mounted, setMounted] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const termDef = definition || LEXICON[term] || ""

  useEffect(() => {
    setMounted(true)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleMouseEnter = () => {
    setShowLoader(true)
    timeoutRef.current = setTimeout(() => {
      if (spanRef.current) {
        const rect = spanRef.current.getBoundingClientRect()
        setPos({ top: rect.top, left: rect.left + rect.width / 2 })
      }
      setShowTooltip(true)
    }, 1000)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setShowLoader(false)
    setShowTooltip(false)
  }

  if (!termDef) {
    return <>{children || term}</>
  }

  return (
    <span
      ref={spanRef}
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="border-b border-dotted border-slate-400/50 cursor-help">
        {children || term}
      </span>

      {showLoader && !showTooltip && (
        <svg
          className="absolute -top-1 -right-4 w-3.5 h-3.5 animate-fadeIn"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            stroke="#5ba8d8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="56.55"
            strokeDashoffset="56.55"
            className="loader-circle"
          />
        </svg>
      )}

      {showTooltip && mounted && createPortal(
        <span
          style={{
            position: "fixed",
            top: pos.top,
            left: pos.left,
            transform: "translate(-50%, calc(-100% - 10px))",
            zIndex: 99999,
          }}
          className="px-3 py-2 bg-[#0b1120] border border-white/20 rounded-lg shadow-xl w-64 max-w-xs animate-fadeIn pointer-events-none"
        >
          <span className="text-slate-200 text-xs leading-relaxed">{termDef}</span>
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0b1120]" />
        </span>,
        document.body
      )}
    </span>
  )
}
