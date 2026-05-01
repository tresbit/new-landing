import { SECTION_IDS } from "@/lib/config"
import Image from "next/image"

const partners = [
  { name: "AWS", src: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg" },
  { name: "Netlify", src: "https://cdn.worldvectorlogo.com/logos/netlify.svg" },
  { name: "Railway", src: "https://railway.com/brand/logo-dark.svg" },
  { name: "GoDaddy", src: "https://cdn.worldvectorlogo.com/logos/godaddy-1.svg" },
  { name: "Hostinger", src: "https://cdn.worldvectorlogo.com/logos/hostinger.svg" },
  { name: "Azure", src: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg" },
  { name: "Google Cloud", src: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
  { name: "Digital Ocean", src: "https://cdn.worldvectorlogo.com/logos/digitalocean-icon-1.svg" },
]

export default function Partners() {
  return (
    <section id={SECTION_IDS.PARTNERS} className="bg-[#0f1929] py-16 overflow-hidden border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3 tracking-tight bg-linear-to-b from-white to-slate-300/80 bg-clip-text text-transparent">
          Nuestros <span style={{ WebkitTextFillColor: '#5ba8d8', color: '#5ba8d8' }}>aliados</span> tecnológicos
        </h2>
        <p className="text-slate-300 text-lg max-w-xl mx-auto">
          Trabajamos con los mejores proveedores de tecnología para ofrecerte soluciones de alta calidad
        </p>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden gap-0 mask-[linear-gradient(to_right,transparent,#0f1929_10%,#0f1929_90%,transparent)]">
        {[0, 1].map((clone) => (
          <ul
            key={clone}
            aria-hidden={clone === 1}
            className="flex items-center gap-12 animate-marquee shrink-0 px-6"
          >
            {partners.map((p) => (
              <li key={p.name} className="flex items-center justify-center w-36 h-16 opacity-50 hover:opacity-90 grayscale brightness-0 invert hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.name}
                  width={120}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="max-h-12 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
