import type { Metadata } from "next"
import IAPageContent from "./_content"

const WEBSITE = "https://tresbit.com"

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${WEBSITE}/ai#webpage`,
      url: `${WEBSITE}/ai`,
      name: "Integración de Inteligencia Artificial | Tresbit",
      description:
        "Automatizamos tareas, creamos asistentes entrenados con tus datos y detectamos patrones en operaciones reales. Sin promesas vacías.",
      isPartOf: { "@id": `${WEBSITE}/#website` },
      inLanguage: "es-AR",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${WEBSITE}/ai#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: WEBSITE },
        { "@type": "ListItem", position: 2, name: "Inteligencia Artificial", item: `${WEBSITE}/ai` },
      ],
    },
    {
      "@type": "Service",
      name: "Integración de Inteligencia Artificial",
      description:
        "Automatizamos flujos de trabajo con IA: desde clasificación de tickets hasta asistentes entrenados con datos propios y detección de patrones en tiempo real.",
      url: `${WEBSITE}/ai`,
      serviceType: "AI Integration",
      areaServed: { "@type": "AdministrativeArea", name: "Mendoza, Argentina" },
      provider: { "@id": `${WEBSITE}/#organization` },
    },
  ],
}

export const metadata: Metadata = {
  title: "Integración de Inteligencia Artificial",
  description:
    "Automatizamos tareas, creamos asistentes entrenados con tus datos y detectamos patrones en operaciones reales. Sin promesas vacías. Consultanos.",
  alternates: { canonical: "/ai" },
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
    title: "Integración de Inteligencia Artificial | Tresbit",
    description:
      "Automatizamos tareas, creamos asistentes entrenados con tus datos y detectamos patrones en operaciones reales. Sin promesas vacías. Consultanos.",
    url: "https://tresbit.com/ai",
    siteName: "Tresbit",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integración de Inteligencia Artificial | Tresbit",
    description:
      "Automatizamos tareas, creamos asistentes entrenados con tus datos y detectamos patrones en operaciones reales. Sin promesas vacías. Consultanos.",
  },
}

export default function IAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <IAPageContent />
    </>
  )
}
