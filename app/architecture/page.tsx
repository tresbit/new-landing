import type { Metadata } from "next"
import ArchitecturePageContent from "./_content"

export const metadata: Metadata = {
  title: "Arquitectura de Software | Tresbit",
  description:
    "Diseñamos sistemas mantenibles y escalables que evolucionan sin generar deuda técnica. Módulos desacoplados, código legible y validación automática en cada capa.",
  alternates: { canonical: "/architecture" },
  openGraph: {
    title: "Arquitectura de Software | Tresbit",
    description:
      "Diseñamos sistemas mantenibles y escalables que evolucionan sin generar deuda técnica. Módulos desacoplados, código legible y validación automática en cada capa.",
    url: "https://tresbit.com/architecture",
  },
}

export default function ArchitecturePage() {
  return <ArchitecturePageContent />
}
