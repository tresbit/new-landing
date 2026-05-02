import type { Metadata } from "next"
import SpeedPageContent from "./_content"

const WEBSITE = "https://tresbit.com"

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${WEBSITE}/speed#webpage`,
      url: `${WEBSITE}/speed`,
      name: "Entrega Rápida de Software · Time to Market | Tresbit",
      description:
        "Llevamos ideas a producción en 4-6 semanas con MVPs bien definidos, iteraciones semanales y CI/CD automatizado.",
      isPartOf: { "@id": `${WEBSITE}/#website` },
      inLanguage: "es-AR",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${WEBSITE}/speed#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: WEBSITE },
        { "@type": "ListItem", position: 2, name: "Entrega Rápida", item: `${WEBSITE}/speed` },
      ],
    },
    {
      "@type": "Service",
      name: "Entrega rápida de software (Time to Market)",
      description:
        "Llevamos ideas a producción en semanas mediante MVPs bien definidos, entregas iterativas, priorización por impacto y CI/CD automatizado.",
      url: `${WEBSITE}/speed`,
      serviceType: "Agile Software Delivery",
      areaServed: { "@type": "AdministrativeArea", name: "Mendoza, Argentina" },
      provider: { "@id": `${WEBSITE}/#organization` },
    },
  ],
}

export const metadata: Metadata = {
  title: "Entrega Rápida de Software · Time to Market",
  description:
    "Llevamos ideas a producción en 4-6 semanas: MVPs bien definidos, iteraciones semanales y CI/CD automatizado. Rápido y bien hecho. Hablemos.",
  alternates: { canonical: "/speed" },
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
    title: "Entrega Rápida de Software · Time to Market | Tresbit",
    description:
      "Llevamos ideas a producción en 4-6 semanas: MVPs bien definidos, iteraciones semanales y CI/CD automatizado. Rápido y bien hecho. Hablemos.",
    url: "https://tresbit.com/speed",
    siteName: "Tresbit",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrega Rápida de Software · Time to Market | Tresbit",
    description:
      "Llevamos ideas a producción en 4-6 semanas: MVPs bien definidos, iteraciones semanales y CI/CD automatizado. Rápido y bien hecho. Hablemos.",
  },
}

export default function SpeedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <SpeedPageContent />
    </>
  )
}
