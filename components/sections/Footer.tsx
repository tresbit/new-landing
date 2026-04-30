import { COMPANY_INFO, SOCIAL_LINKS, SECTION_IDS } from "@/lib/config"
import Image from "next/image"

const SANITIZED_PHONE = COMPANY_INFO.PHONE.replace(/[^\d+]/g, "")
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.ADDRESS)}`
const year = new Date().getFullYear()

const navSections = [
  {
    title: "Navega",
    links: [
      { name: "Inicio", url: `#${SECTION_IDS.WELCOME}` },
      { name: "Características", url: `#${SECTION_IDS.FEATURES}` },
      { name: "Servicios", url: `#${SECTION_IDS.SECURITY}` },
      { name: "Aliados", url: `#${SECTION_IDS.PARTNERS}` },
      { name: "Contacto", url: `#${SECTION_IDS.CONTACT}` },
    ],
  },
  {
    title: "Servicios",
    links: [
      { name: "Desarrollo a medida", url: `#${SECTION_IDS.FEATURES}` },
      { name: "Consultoría tecnológica", url: `#${SECTION_IDS.CONTACT}` },
      { name: "Soporte continuo", url: `#${SECTION_IDS.CONTACT}` },
      { name: "Cyberseguridad", url: `#${SECTION_IDS.CONTACT}` },
      { name: "Soluciones cloud", url: `#${SECTION_IDS.PARTNERS}` },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href={`#${SECTION_IDS.WELCOME}`} aria-label="Tresbit - inicio" className="inline-block mb-4">
              <Image src="/isotipo_white.svg" alt="Tresbit" width={40} height={40} style={{ width: 40, height: "auto" }} loading="lazy" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              {COMPANY_INFO.TAGLINE}
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${SANITIZED_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#5ba8d8] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {COMPANY_INFO.PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.EMAIL}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#5ba8d8] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  {COMPANY_INFO.EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#5ba8d8] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {COMPANY_INFO.ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          {/* Nav columns */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-slate-200 text-sm mb-4 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="text-sm text-slate-400 hover:text-[#5ba8d8] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-300 text-xs">
            © {year} {COMPANY_INFO.NAME}. Todos los derechos reservados.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Tresbit"
              className="text-slate-400 hover:text-[#5ba8d8] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Tresbit"
              className="text-slate-400 hover:text-[#5ba8d8] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a
              href={SOCIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Tresbit"
              className="text-slate-400 hover:text-[#5ba8d8] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
