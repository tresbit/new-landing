import type { Metadata } from "next"
import SecurityPageContent from "./_content"

const WEBSITE = "https://tresbit.com"

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${WEBSITE}/security#webpage`,
      url: `${WEBSITE}/security`,
      name: "Seguridad en Desarrollo de Software | Tresbit",
      description:
        "Seguridad desde el diseño: autenticación multifactor, cifrado AES-256, arquitectura de mínimo privilegio y monitoreo activo.",
      isPartOf: { "@id": `${WEBSITE}/#website` },
      inLanguage: "es-AR",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${WEBSITE}/security#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: WEBSITE },
        { "@type": "ListItem", position: 2, name: "Seguridad", item: `${WEBSITE}/security` },
      ],
    },
    {
      "@type": "Service",
      name: "Seguridad en desarrollo de software",
      description:
        "Implementamos seguridad desde el diseño del sistema: autenticación robusta, cifrado de datos, arquitectura de mínimo privilegio y monitoreo continuo.",
      url: `${WEBSITE}/security`,
      serviceType: "Software Security",
      areaServed: { "@type": "AdministrativeArea", name: "Mendoza, Argentina" },
      provider: { "@id": `${WEBSITE}/#organization` },
    },
  ],
}

export const metadata: Metadata = {
  title: "Seguridad en Desarrollo de Software",
  description:
    "Seguridad desde el diseño: autenticación multifactor, cifrado AES-256, mínimo privilegio y monitoreo activo en cada sistema que construimos. Consultanos.",
  alternates: { canonical: "/security" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Seguridad en Desarrollo de Software | Tresbit",
    description:
      "Seguridad desde el diseño: autenticación multifactor, cifrado AES-256, mínimo privilegio y monitoreo activo en cada sistema que construimos. Consultanos.",
    url: "https://tresbit.com/security",
    siteName: "Tresbit",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguridad en Desarrollo de Software | Tresbit",
    description:
      "Seguridad desde el diseño: autenticación multifactor, cifrado AES-256, mínimo privilegio y monitoreo activo en cada sistema que construimos. Consultanos.",
  },
}

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <SecurityPageContent />
    </>
  )
}
