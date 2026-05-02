import type { Metadata } from "next"
import SpeedPageContent from "./_content"

export const metadata: Metadata = {
  title: "Time to Market | Tresbit",
  description:
    "Llevamos ideas a producción en 4-6 semanas con MVPs bien definidos, iteraciones semanales y CI/CD automatizado. Rápido, pero bien hecho.",
  alternates: { canonical: "/speed" },
  openGraph: {
    title: "Time to Market | Tresbit",
    description:
      "Llevamos ideas a producción en 4-6 semanas con MVPs bien definidos, iteraciones semanales y CI/CD automatizado. Rápido, pero bien hecho.",
    url: "https://tresbit.com/speed",
  },
}

export default function SpeedPage() {
  return <SpeedPageContent />
}
