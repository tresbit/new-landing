import type { Metadata } from "next"
import ContactContent from "./_content"

export const metadata: Metadata = {
  title: "Agendá una reunión",
  description:
    "Reservá una llamada de 30 minutos con el equipo de Tresbit. Contanos tu proyecto y evaluamos juntos cómo resolverlo.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Agendá una reunión | Tresbit",
    description:
      "Reservá una llamada de 30 minutos con el equipo de Tresbit. Contanos tu proyecto y evaluamos juntos cómo resolverlo.",
    url: "https://tresbit.com/contact",
    siteName: "Tresbit",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agendá una reunión | Tresbit",
    description: "Reservá una llamada de 30 minutos con el equipo de Tresbit.",
  },
}

export default function ContactPage() {
  return <ContactContent />
}
