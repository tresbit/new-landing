"use client"

import { m } from "framer-motion"
import { Quote, ArrowRight, UserRound } from "lucide-react"
import Link from "next/link"
import { SECTION_IDS } from "@/lib/config"

const testimonial = {
  quote:
    "Tresbit transformó nuestro proceso de pedidos en una plataforma digital eficiente. Lo que antes nos llevaba horas está automatizado. El equipo entendió nuestra operación desde el primer día.",
  name: "Pablo García",
  role: "Director Operativo",
  company: "Embragues San Pablo",
  href: "https://www.instagram.com/embraguessp/", // → reemplazar con URL real
  imageSrc: "https://scontent.fmdz5-1.fna.fbcdn.net/v/t39.30808-6/447568842_968097598347782_1317527126779684680_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=A3tFBc-HOJcQ7kNvwEvrMKK&_nc_oc=AdqyCwW3xRH-tGmuYoxdhUSgysnnMReBFMBmfaE5IFTo11UdUY5HH1xHdYHfUxJILT4&_nc_zt=23&_nc_ht=scontent.fmdz5-1.fna&_nc_gid=Lxnq8riANosT2k7fQ33C-A&_nc_ss=7b289&oh=00_Af4E5kn3_GVXckZsIJj2gEpdMoOmoGRy-D5yzExolBnMEg&oe=69FCB4D5",
  initials: "PG",
  accent: "#5ba8d8",
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.1 },
  }),
}

export default function Testimonials() {
  return (
    <section className="bg-[#07090f] py-24 border-t border-white/[0.07]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Lo que dicen nuestros{" "}
            <span style={{ color: "#5ba8d8" }}>clientes</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Resultados reales de empresas que confiaron en Tresbit.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Testimonio real */}
          <m.article
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="bg-[#0b1120] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-6 hover:border-white/[0.14] transition-colors duration-200"
          >
            <span className="text-amber-400 text-base tracking-wide" aria-label="5 de 5 estrellas">★★★★★</span>

            <div className="relative flex-1">
              <Quote
                className="absolute -top-1 -left-1 opacity-20"
                style={{ color: testimonial.accent }}
                size={28}
                aria-hidden="true"
              />
              <blockquote className="text-slate-300 text-base leading-relaxed pl-6">
                {testimonial.quote}
              </blockquote>
            </div>

            <div className="flex items-center gap-4 pt-2 border-t border-white/[0.06]">
              {testimonial.imageSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover shrink-0"
                  loading="lazy"
                />
              ) : (
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    background: `${testimonial.accent}22`,
                    border: `1.5px solid ${testimonial.accent}44`,
                    color: testimonial.accent,
                  }}
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
              )}
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <p className="text-slate-500 text-xs">{testimonial.role} ·</p>
                  {testimonial.href ? (
                    <a
                      href={testimonial.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#5ba8d8] hover:text-white transition-colors truncate"
                    >
                      {testimonial.company}
                    </a>
                  ) : (
                    <p className="text-slate-500 text-xs">{testimonial.company}</p>
                  )}
                </div>
              </div>
            </div>
          </m.article>

          {/* CTA — "Aquí deberías estar vos" */}
          <m.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="bg-[#0b1120]/40 border border-dashed border-white/[0.12] rounded-2xl p-8 flex flex-col items-center justify-center gap-6 text-center hover:border-white/[0.22] transition-colors duration-200 group"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center border border-dashed border-white/20 text-slate-600 group-hover:border-white/30 group-hover:text-slate-500 transition-all duration-300"
            >
              <UserRound size={28} strokeWidth={1.2} />
            </div>

            <div className="space-y-2">
              <p className="text-white text-xl font-bold tracking-tight">
                Aquí deberías estar vos
              </p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                Empresas de Mendoza y Argentina confían en Tresbit para resolver sus desafíos tecnológicos. ¿Tu negocio es el próximo?
              </p>
            </div>

            <Link
              href={`/#${SECTION_IDS.CONTACT}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/8 hover:border-white/30 transition-all duration-200 group/btn"
            >
              Hablemos
              <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </m.div>

        </div>
      </div>
    </section>
  )
}
