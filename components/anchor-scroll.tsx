"use client"

import { useEffect } from "react"

export function AnchorScroll() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]")
      if (!link) return

      const hash = link.getAttribute("href")?.split("#")[1]
      if (!hash) return

      const el = document.getElementById(hash)
      if (!el) return

      e.preventDefault()
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
