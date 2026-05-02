import type { Metadata } from "next"
import SupportPageContent from "./_content"

export const metadata: Metadata = {
  title: "Soporte y Continuidad | Tresbit",
  description:
    "Monitoreo activo, mantenimiento preventivo y evolución continua. Acompañamos el sistema en producción para que funcione sin interrupciones después del lanzamiento.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Soporte y Continuidad | Tresbit",
    description:
      "Monitoreo activo, mantenimiento preventivo y evolución continua. Acompañamos el sistema en producción para que funcione sin interrupciones después del lanzamiento.",
    url: "https://tresbit.com/support",
  },
}

export default function SupportPage() {
  return <SupportPageContent />
}
