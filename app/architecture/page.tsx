import type { Metadata } from "next"
import ArchitecturePageContent from "./_content"

const WEBSITE = "https://tresbit.com"

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${WEBSITE}/architecture#webpage`,
      url: `${WEBSITE}/architecture`,
      name: "Arquitectura de Software Escalable | Tresbit",
      description:
        "Diseñamos sistemas mantenibles y escalables que evolucionan sin generar deuda técnica: módulos desacoplados, código legible y validación automática.",
      isPartOf: { "@id": `${WEBSITE}/#website` },
      inLanguage: "es-AR",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${WEBSITE}/architecture#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: WEBSITE },
        { "@type": "ListItem", position: 2, name: "Arquitectura de Software", item: `${WEBSITE}/architecture` },
      ],
    },
    {
      "@type": "Service",
      name: "Arquitectura de software escalable",
      description:
        "Diseñamos sistemas con arquitecturas limpias, módulos desacoplados y patrones que permiten crecer sin acumular deuda técnica ni generar bloqueos futuros.",
      url: `${WEBSITE}/architecture`,
      serviceType: "Software Architecture Design",
      areaServed: { "@type": "AdministrativeArea", name: "Mendoza, Argentina" },
      provider: { "@id": `${WEBSITE}/#organization` },
    },
  ],
}

export const metadata: Metadata = {
  title: "Arquitectura de Software Escalable",
  description:
    "Diseñamos sistemas mantenibles y escalables sin deuda técnica: módulos desacoplados, código legible y validación automática en cada capa. Consultanos.",
  alternates: { canonical: "/architecture" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Arquitectura de Software Escalable | Tresbit",
    description:
      "Diseñamos sistemas mantenibles y escalables sin deuda técnica: módulos desacoplados, código legible y validación automática en cada capa. Consultanos.",
    url: "https://tresbit.com/architecture",
    siteName: "Tresbit",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arquitectura de Software Escalable | Tresbit",
    description:
      "Diseñamos sistemas mantenibles y escalables sin deuda técnica: módulos desacoplados, código legible y validación automática en cada capa. Consultanos.",
  },
}

export default function ArchitecturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <ArchitecturePageContent />
    </>
  )
}
