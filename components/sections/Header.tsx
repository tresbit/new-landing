"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { SECTION_IDS } from "@/lib/config"
import { cn } from "@/lib/utils"

const navItems = [
  { href: `/#${SECTION_IDS.WELCOME}`, text: "Inicio" },
  { href: `/#${SECTION_IDS.FEATURES}`, text: "Características" },
  { href: `/#${SECTION_IDS.SECURITY}`, text: "Servicios" },
  { href: `/#${SECTION_IDS.CONTACT}`, text: "Contacto" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#07090f]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-[#07090f]",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Tresbit - inicio">
          <Image
            src="/isotipo_black.svg"
            alt="Tresbit"
            width={96}
            height={36}
            style={{ width: 96, height: 36 }}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {item.text}
            </Link>
          ))}
          <Link
            href={`/#${SECTION_IDS.CONTACT}`}
            className="ml-2 px-4 py-2 rounded-lg border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-[#286291] transition-all duration-200"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-transform duration-300",
              menuOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-opacity duration-300",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-transform duration-300",
              menuOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-[#07090f]",
          menuOpen ? "max-h-64 border-t border-white/20" : "max-h-0",
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-white/90 hover:text-white text-sm font-medium border-b border-white/10 last:border-0 transition-colors"
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
