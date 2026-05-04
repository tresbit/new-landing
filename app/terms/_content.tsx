import Link from "next/link"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { COMPANY_INFO } from "@/lib/config"

const LAST_UPDATED = "Mayo 2026"

const sections = [
  {
    title: "1. Aceptación de los términos",
    content: `Al contratar los servicios de ${COMPANY_INFO.NAME} o al utilizar este sitio web, usted acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna de las condiciones aquí establecidas, le pedimos que no utilice nuestros servicios.`,
  },
  {
    title: "2. Descripción del servicio",
    content: `${COMPANY_INFO.NAME} ofrece servicios de desarrollo de software a medida, consultoría tecnológica, integración de sistemas, soporte y mantenimiento de software, y servicios relacionados. Las condiciones específicas de cada proyecto se definen en el contrato o propuesta comercial acordada entre las partes.`,
  },
  {
    title: "3. Propiedad intelectual",
    content: null,
    list: [
      "El código, diseños y entregables desarrollados específicamente para el cliente serán de su propiedad una vez abonados en su totalidad.",
      "Las herramientas, frameworks, librerías de código abierto y componentes reutilizables que Tresbit incorpore al proyecto mantienen sus licencias originales.",
      "Tresbit se reserva el derecho de mencionar el proyecto en su portfolio, salvo acuerdo de confidencialidad expreso.",
    ],
  },
  {
    title: "4. Confidencialidad",
    content: `${COMPANY_INFO.NAME} se compromete a mantener la confidencialidad de toda información sensible que el cliente comparta durante el desarrollo del proyecto. Esta obligación se extiende por el período que las partes acuerden y, en ausencia de acuerdo, por 2 años desde la finalización del proyecto.`,
  },
  {
    title: "5. Plazos y entregas",
    content: "Los plazos de entrega acordados están condicionados a la provisión oportuna de información, accesos y feedback por parte del cliente. Retrasos en la respuesta del cliente pueden impactar en las fechas estimadas sin que ello implique incumplimiento por parte de Tresbit.",
  },
  {
    title: "6. Limitación de responsabilidad",
    content: `${COMPANY_INFO.NAME} no será responsable por daños indirectos, pérdida de datos, lucro cesante o daños consecuentes derivados del uso o la imposibilidad de uso del software desarrollado, salvo en casos de dolo o negligencia grave. La responsabilidad total de Tresbit no excederá el monto facturado en los últimos 12 meses.`,
  },
  {
    title: "7. Pagos",
    content: "Las condiciones de pago (montos, plazos, moneda) se establecen en la propuesta comercial aceptada por el cliente. El incumplimiento en los plazos de pago puede resultar en la suspensión del servicio. Los precios son en la moneda indicada en cada propuesta.",
  },
  {
    title: "8. Resolución del contrato",
    content: "Cualquiera de las partes puede resolver el contrato con un preaviso de 30 días. En caso de resolución, el cliente abonará los trabajos realizados hasta la fecha de resolución efectiva. Tresbit entregará todos los entregables completados hasta ese momento.",
  },
  {
    title: "9. Ley aplicable y jurisdicción",
    content: "Estos términos se rigen por las leyes de la República Argentina. Ante cualquier controversia, las partes se someten a la jurisdicción de los Tribunales Ordinarios de la ciudad de Mendoza, Provincia de Mendoza, renunciando a cualquier otro fuero que pudiera corresponderles.",
  },
  {
    title: "10. Modificaciones",
    content: "Tresbit puede actualizar estos términos periódicamente. Los cambios se comunicarán con antelación razonable. El uso continuado de los servicios tras la modificación implica la aceptación de los nuevos términos.",
  },
  {
    title: "11. Contacto",
    content: "Para consultas sobre estos términos:",
    contactItems: [
      { label: "Email", value: COMPANY_INFO.EMAIL, href: `mailto:${COMPANY_INFO.EMAIL}` },
      { label: "Teléfono", value: COMPANY_INFO.PHONE, href: `https://wa.me/${COMPANY_INFO.PHONE.replace(/[^\d+]/g, "")}` },
      { label: "Dirección", value: COMPANY_INFO.ADDRESS },
    ],
  },
]

export default function TermsContent() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      <Header />

      <main id="main-content">
        <section className="bg-[#0b1120] pt-40 pb-16 border-b border-white/[0.07]">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
              <span className="sr-only">Volver al </span>inicio
            </Link>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5ba8d8] mb-4">Legal</p>
            <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
              Términos y Condiciones
            </h1>
            <p className="text-slate-400 text-base">Última actualización: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <p className="text-slate-300 text-base leading-relaxed mb-12 pb-12 border-b border-white/[0.07]">
              Estos Términos y Condiciones regulan la relación entre <strong className="text-slate-200">{COMPANY_INFO.NAME}</strong> y sus clientes, tanto en la prestación de servicios de software como en el uso de este sitio web. Al contratar nuestros servicios, aceptas las condiciones aquí descritas.
            </p>

            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading text-xl font-bold text-white mb-4 tracking-tight">{section.title}</h2>

                  {section.content && (
                    <p className="text-slate-400 leading-relaxed mb-4">{section.content}</p>
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

                  {"contactItems" in section && section.contactItems && (
                    <ul className="space-y-3 mt-2">
                      {section.contactItems.map((item) => (
                        <li key={item.label} className="flex items-center gap-2 text-sm text-slate-400">
                          <span className="text-slate-600 font-medium w-16 shrink-0">{item.label}:</span>
                          {item.href ? (
                            <a href={item.href} className="hover:text-[#5ba8d8] transition-colors">{item.value}</a>
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

            <div className="mt-16 pt-8 border-t border-white/[0.07] flex gap-6">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#5ba8d8] hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
                Inicio
              </Link>
              <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
