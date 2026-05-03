import type { Metadata } from "next"
import ContactRedirect from "./_redirect"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con Tresbit. Hablemos sobre tu proyecto de software a medida en Mendoza, Argentina.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
}

export default function ContactPage() {
  return <ContactRedirect />
}
