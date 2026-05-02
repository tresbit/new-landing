import type { Metadata } from "next"
import IAPageContent from "./_content"

export const metadata: Metadata = {
  title: "Inteligencia Artificial | Tresbit",
  description:
    "Integramos modelos de IA en sistemas reales: automatización inteligente, asistentes entrenados con tus datos y análisis de patrones con resultados medibles.",
  alternates: { canonical: "/ai" },
  openGraph: {
    title: "Inteligencia Artificial | Tresbit",
    description:
      "Integramos modelos de IA en sistemas reales: automatización inteligente, asistentes entrenados con tus datos y análisis de patrones con resultados medibles.",
    url: "https://tresbit.com/ai",
  },
}

export default function IAPage() {
  return <IAPageContent />
}
