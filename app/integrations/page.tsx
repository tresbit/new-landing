import type { Metadata } from "next"
import IntegrationsPageContent from "./_content"

const WEBSITE = "https://tresbit.com"

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${WEBSITE}/integrations#webpage`,
      url: `${WEBSITE}/integrations`,
      name: "Integraciones de Software y APIs | Tresbit",
      description:
        "Conectamos tu sistema con CRMs, ERPs, pasarelas de pago y cualquier API. Automatización entre plataformas sin silos.",
      isPartOf: { "@id": `${WEBSITE}/#website` },
      inLanguage: "es-AR",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${WEBSITE}/integrations#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: WEBSITE },
        { "@type": "ListItem", position: 2, name: "Integraciones", item: `${WEBSITE}/integrations` },
      ],
    },
    {
      "@type": "Service",
      name: "Integraciones de software y APIs",
      description:
        "Conectamos sistemas con CRMs, ERPs, pasarelas de pago, plataformas externas y APIs de terceros. Eliminamos silos y automatizamos flujos entre herramientas.",
      url: `${WEBSITE}/integrations`,
      serviceType: "Software Integration",
      areaServed: { "@type": "AdministrativeArea", name: "Mendoza, Argentina" },
      provider: { "@id": `${WEBSITE}/#organization` },
    },
  ],
}

export const metadata: Metadata = {
  title: "Integraciones de Software y APIs",
  description:
    "Conectamos tu sistema con CRMs, ERPs, pasarelas de pago y cualquier API. Automatización entre plataformas sin silos ni procesos manuales. Hablemos.",
  alternates: { canonical: "/integrations" },
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
    title: "Integraciones de Software y APIs | Tresbit",
    description:
      "Conectamos tu sistema con CRMs, ERPs, pasarelas de pago y cualquier API. Automatización entre plataformas sin silos ni procesos manuales. Hablemos.",
    url: "https://tresbit.com/integrations",
    siteName: "Tresbit",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integraciones de Software y APIs | Tresbit",
    description:
      "Conectamos tu sistema con CRMs, ERPs, pasarelas de pago y cualquier API. Automatización entre plataformas sin silos ni procesos manuales. Hablemos.",
  },
}

export default function IntegrationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <IntegrationsPageContent />
    </>
  )
}
