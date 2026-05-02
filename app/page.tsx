import { COMPANY_INFO, SOCIAL_LINKS } from "@/lib/config"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import WhyUs from "@/components/sections/WhyUs"
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
      logo: {
        "@type": "ImageObject",
        url: `${WEBSITE}/favicon.svg`,
        width: 512,
        height: 512,
      },
      sameAs: [SOCIAL_LINKS.LINKEDIN, SOCIAL_LINKS.GITHUB, SOCIAL_LINKS.INSTAGRAM],
    },
    {
      "@type": "WebSite",
      "@id": `${WEBSITE}/#website`,
      url: WEBSITE,
      name: COMPANY_INFO.NAME,
      description: "Empresa de desarrollo de software a medida en Mendoza, Argentina.",
      publisher: { "@id": `${WEBSITE}/#organization` },
      inLanguage: "es-AR",
    },
    {
      "@type": "WebPage",
      "@id": `${WEBSITE}/#webpage`,
      url: WEBSITE,
      name: "Tresbit | Software a medida en Mendoza",
      description: "Empresa de desarrollo de software a medida en Mendoza: aplicaciones web, mobile, automatización e integraciones.",
      isPartOf: { "@id": `${WEBSITE}/#website` },
      about: { "@id": `${WEBSITE}/#organization` },
      inLanguage: "es-AR",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${WEBSITE}/#local`,
      name: COMPANY_INFO.NAME,
      url: WEBSITE,
      telephone: COMPANY_INFO.PHONE,
      email: COMPANY_INFO.EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ceretti 244",
        addressLocality: "Godoy Cruz",
        addressRegion: "Mendoza",
        postalCode: "5501",
        addressCountry: "AR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-32.9303",
        longitude: "-68.8427",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      parentOrganization: { "@id": `${WEBSITE}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${WEBSITE}/#service-desarrollo`,
      name: "Desarrollo de software a medida",
      description: "Construimos sistemas web y mobile adaptados a tu negocio: desde aplicaciones hasta plataformas complejas, diseñadas para integrarse y escalar.",
      url: WEBSITE,
      serviceType: "Custom Software Development",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Mendoza, Argentina",
      },
      provider: { "@id": `${WEBSITE}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${WEBSITE}/#service-consultoria`,
      name: "Consultoría tecnológica",
      description: "Evaluamos, priorizamos y definimos una hoja de ruta tecnológica clara para avanzar sin improvisar.",
      url: WEBSITE,
      serviceType: "Technology Consulting",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Mendoza, Argentina",
      },
      provider: { "@id": `${WEBSITE}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${WEBSITE}/#service-soporte`,
      name: "Soporte y continuidad operativa",
      description: "Monitoreo activo, mantenimiento preventivo y evolución continua para que el sistema funcione sin interrupciones después del lanzamiento.",
      url: `${WEBSITE}/support`,
      serviceType: "Software Maintenance and Support",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Mendoza, Argentina",
      },
      provider: { "@id": `${WEBSITE}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${WEBSITE}/#service-ia`,
      name: "Integración de Inteligencia Artificial",
      description: "Automatización inteligente, asistentes entrenados con tus datos y análisis de patrones con resultados medibles.",
      url: `${WEBSITE}/ai`,
      serviceType: "AI Integration",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Mendoza, Argentina",
      },
      provider: { "@id": `${WEBSITE}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${WEBSITE}/#service-integraciones`,
      name: "Integraciones de software y APIs",
      description: "Conectamos tu sistema con CRMs, ERPs, pasarelas de pago y cualquier API. Automatización entre plataformas sin silos ni procesos manuales.",
      url: `${WEBSITE}/integrations`,
      serviceType: "Software Integration",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Mendoza, Argentina",
      },
      provider: { "@id": `${WEBSITE}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${WEBSITE}/#breadcrumb`,
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
        <WhyUs />
        <Showcase />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
