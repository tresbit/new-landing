import Link from "next/link"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { COMPANY_INFO } from "@/lib/config"

const LAST_UPDATED = "Mayo 2026"

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content: `${COMPANY_INFO.NAME}, con domicilio en ${COMPANY_INFO.ADDRESS}, y correo electrónico ${COMPANY_INFO.EMAIL}, es el responsable del tratamiento de los datos personales recopilados a través de este sitio web.`,
  },
  {
    title: "2. Datos que recopilamos",
    content: "A través del formulario de contacto, recopilamos los siguientes datos que usted nos proporciona voluntariamente:",
    list: [
      "Nombre completo",
      "Dirección de correo electrónico",
      "Número de teléfono (opcional)",
      "Contenido del mensaje",
    ],
    note: "No recopilamos datos sensibles, datos financieros ni información de menores de edad.",
  },
  {
    title: "3. Finalidad del tratamiento",
    content: "Los datos recabados se utilizan exclusivamente para:",
    list: [
      "Responder consultas y solicitudes de información enviadas a través del formulario de contacto.",
      "Gestionar la relación comercial con potenciales clientes.",
      "Enviar información sobre nuestros servicios cuando usted lo haya solicitado expresamente.",
    ],
  },
  {
    title: "4. Base legal",
    content: "El tratamiento de sus datos se basa en el consentimiento otorgado al completar y enviar el formulario de contacto, conforme al artículo 5 de la Ley 25.326 de Protección de Datos Personales de la República Argentina.",
  },
  {
    title: "5. Conservación de datos",
    content: "Los datos se conservan durante el tiempo necesario para cumplir con la finalidad para la que fueron recopilados. Una vez finalizada la relación, se conservarán debidamente bloqueados durante los plazos legalmente exigibles.",
  },
  {
    title: "6. Sus derechos",
    content: "Conforme a la Ley 25.326, usted tiene derecho a:",
    list: [
      "Acceso: solicitar información sobre los datos que mantenemos sobre usted.",
      "Rectificación: corregir datos inexactos o desactualizados.",
      "Supresión: solicitar la eliminación de sus datos cuando ya no sean necesarios.",
      "Oposición: oponerse al tratamiento de sus datos.",
    ],
    note: `Para ejercer estos derechos, contáctenos en ${COMPANY_INFO.EMAIL}. Responderemos en un plazo máximo de 5 días hábiles. El organismo de control competente es la Dirección Nacional de Protección de Datos Personales (DNPDP): datospersonales.gob.ar.`,
  },
  {
    title: "7. Seguridad",
    content: "Implementamos medidas técnicas y organizativas razonables para proteger sus datos personales contra accesos no autorizados, pérdida o destrucción. Todo el sitio opera bajo protocolo HTTPS con cifrado en tránsito.",
  },
  {
    title: "8. Cookies",
    content: "Este sitio puede utilizar cookies de sesión estrictamente necesarias para el funcionamiento técnico. No utilizamos cookies de seguimiento publicitario ni compartimos datos con redes de publicidad.",
  },
  {
    title: "9. Menores de edad",
    content: "Nuestros servicios están dirigidos a empresas y profesionales. No recopilamos intencionalmente datos de menores de 13 años. Si detectamos que hemos recopilado datos de un menor sin consentimiento parental, los eliminaremos de forma inmediata.",
  },
  {
    title: "10. Cambios a esta política",
    content: "Podemos actualizar esta política periódicamente. Publicaremos la versión actualizada en esta página con la fecha de la última modificación.",
  },
  {
    title: "11. Contacto",
    content: "Para cualquier consulta sobre esta política o el tratamiento de sus datos:",
    contactItems: [
      { label: "Email", value: COMPANY_INFO.EMAIL, href: `mailto:${COMPANY_INFO.EMAIL}` },
      { label: "Teléfono", value: COMPANY_INFO.PHONE, href: `https://wa.me/${COMPANY_INFO.PHONE.replace(/[^\d+]/g, "")}` },
      { label: "Dirección", value: COMPANY_INFO.ADDRESS },
    ],
  },
]

export default function PrivacyContent() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-[#0b1120] pt-40 pb-16 border-b border-white/[0.07]">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
              Volver al inicio
            </Link>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5ba8d8] mb-4">
              Legal
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
              Política de Privacidad
            </h1>
            <p className="text-slate-400 text-base">
              Última actualización: {LAST_UPDATED}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <p className="text-slate-300 text-base leading-relaxed mb-12 pb-12 border-b border-white/[0.07]">
              En Tresbit nos tomamos en serio la privacidad de quienes nos contactan. Esta política describe cómo recopilamos, usamos y protegemos su información personal, en cumplimiento de la{" "}
              <strong className="text-slate-200">Ley 25.326</strong> de Protección de Datos Personales de la República Argentina.
            </p>

            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading text-xl font-bold text-white mb-4 tracking-tight">
                    {section.title}
                  </h2>

                  {section.content && (
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {section.content}
                    </p>
                  )}

                  {"list" in section && section.list && (
                    <ul className="space-y-2 mb-4">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5ba8d8] shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {"note" in section && section.note && (
                    <p className="text-slate-500 text-sm leading-relaxed mt-3 pl-4 border-l border-white/10">
                      {section.note}
                    </p>
                  )}

                  {"contactItems" in section && section.contactItems && (
                    <ul className="space-y-3 mt-2">
                      {section.contactItems.map((item) => (
                        <li key={item.label} className="flex items-center gap-2 text-sm text-slate-400">
                          <span className="text-slate-600 font-medium w-16 shrink-0">{item.label}:</span>
                          {item.href ? (
                            <a href={item.href} className="hover:text-[#5ba8d8] transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <span>{item.value}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/[0.07]">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-[#5ba8d8] hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
                Volver al inicio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
