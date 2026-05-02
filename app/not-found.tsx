import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  // Use absolute to bypass the root layout's title template ("%s | Tresbit")
  // and avoid producing "Página no encontrada | Tresbit | Tresbit".
  title: { absolute: "Página no encontrada | Tresbit" },
  description: "La página que buscás no existe o fue movida.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-[#5ba8d8] text-sm font-semibold uppercase tracking-widest mb-4">
          Error 404
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight mb-6 bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
          Página no encontrada
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          La página que buscás no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#286291] text-white font-semibold rounded-xl shadow-[0_0_24px_rgba(40,98,145,0.45)] hover:shadow-[0_0_40px_rgba(91,168,216,0.55)] hover:bg-[#286291]/90 hover:-translate-y-0.5 transition-all duration-200"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
