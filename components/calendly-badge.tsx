"use client"

import Script from "next/script"

export function CalendlyBadge() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(window as any).Calendly?.initBadgeWidget({
            url: "https://calendly.com/tresbitsoft/30min",
            text: "Agendá una reunión",
            color: "#286291",
            textColor: "#ffffff",
            branding: false,
          })
        }}
      />
    </>
  )
}
