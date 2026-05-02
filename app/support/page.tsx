import type { Metadata } from "next"
import SupportPageContent from "./_content"

const WEBSITE = "https://tresbit.com"

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${WEBSITE}/support#webpage`,
      url: `${WEBSITE}/support`,
      name: "Soporte y Mantenimiento de Software | Tresbit",
      description:
        "Monitoreo activo, mantenimiento preventivo y evolución continua. Acompañamos el sistema en producción sin interrupciones.",
      isPartOf: { "@id": `${WEBSITE}/#website` },
      inLanguage: "es-AR",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${WEBSITE}/support#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: WEBSITE },
        { "@type": "ListItem", position: 2, name: "Soporte y Mantenimiento", item: `${WEBSITE}/support` },
      ],
    },
    {
      "@type": "Service",
      name: "Soporte y mantenimiento de software",
      description:
        "Monitoreo activo, mantenimiento preventivo, corrección de errores y evolución continua del sistema después del lanzamiento.",
      url: `${WEBSITE}/support`,
      serviceType: "Software Maintenance and Support",
      areaServed: { "@type": "AdministrativeArea", name: "Mendoza, Argentina" },
      provider: { "@id": `${WEBSITE}/#organization` },
    },
  ],
}

export const metadata: Metadata = {
  title: "Soporte y Mantenimiento de Software",
  description:
    "Monitoreo activo, mantenimiento preventivo y evolución continua. Acompañamos tu sistema en producción para que funcione sin interrupciones. Consultanos.",
  alternates: { canonical: "/support" },
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
    title: "Soporte y Mantenimiento de Software | Tresbit",
    description:
      "Monitoreo activo, mantenimiento preventivo y evolución continua. Acompañamos tu sistema en producción para que funcione sin interrupciones. Consultanos.",
    url: "https://tresbit.com/support",
    siteName: "Tresbit",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soporte y Mantenimiento de Software | Tresbit",
    description:
      "Monitoreo activo, mantenimiento preventivo y evolución continua. Acompañamos tu sistema en producción para que funcione sin interrupciones. Consultanos.",
  },
}

export default function SupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <SupportPageContent />
    </>
  )
}
