import { COMPANY_INFO, SOCIAL_LINKS } from "@/lib/config"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import Security from "@/components/sections/Security"
import Showcase from "@/components/sections/Showcase"
import Partners from "@/components/sections/Partners"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

const WEBSITE = COMPANY_INFO.WEBSITE

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${WEBSITE}/#organization`,
      name: COMPANY_INFO.NAME,
      url: WEBSITE,
      email: COMPANY_INFO.EMAIL,
      telephone: COMPANY_INFO.PHONE,
      logo: `${WEBSITE}/favicon.svg`,
      sameAs: [SOCIAL_LINKS.LINKEDIN, SOCIAL_LINKS.GITHUB, SOCIAL_LINKS.INSTAGRAM],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${WEBSITE}/#local`,
      name: COMPANY_INFO.NAME,
      url: WEBSITE,
      telephone: COMPANY_INFO.PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ceretti 244",
        addressLocality: "Godoy Cruz",
        addressRegion: "Mendoza",
        postalCode: "5501",
        addressCountry: "AR",
      },
      parentOrganization: { "@id": `${WEBSITE}/#organization` },
    },
    {
      "@type": "Service",
      name: "Desarrollo de software a medida",
      areaServed: "Mendoza, AR",
      provider: { "@id": `${WEBSITE}/#organization` },
    },
    {
      "@type": "Service",
      name: "Consultoria tecnologica",
      areaServed: "Mendoza, AR",
      provider: { "@id": `${WEBSITE}/#organization` },
    },
    {
      "@type": "Service",
      name: "Soporte continuo",
      areaServed: "Mendoza, AR",
      provider: { "@id": `${WEBSITE}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: WEBSITE },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <Security />
        <Showcase />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
