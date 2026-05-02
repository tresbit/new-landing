"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#07090f] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Error inesperado
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-6 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
          Algo salió mal
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          Ocurrió un error inesperado. Podés intentar recargar la página o volver al inicio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block px-8 py-4 bg-[#286291] text-white font-semibold rounded-xl shadow-[0_0_24px_rgba(40,98,145,0.45)] hover:shadow-[0_0_40px_rgba(91,168,216,0.55)] hover:bg-[#286291]/90 hover:-translate-y-0.5 transition-all duration-200"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-200"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
