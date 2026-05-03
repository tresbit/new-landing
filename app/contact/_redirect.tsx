"use client"

import { useEffect } from "react"

export default function ContactRedirect() {
  useEffect(() => {
    window.location.replace("/#contacto")
  }, [])

  return (
    <div className="min-h-screen bg-[#07090f] flex items-center justify-center">
      <p className="text-slate-500 text-sm">Redirigiendo...</p>
    </div>
  )
}
