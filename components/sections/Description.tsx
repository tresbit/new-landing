"use client"

import { m } from "framer-motion"
import Term from "@/components/ui/term-tooltip"

export default function Description() {
  return (
    <section className="bg-[#0f1929] py-20 border-t border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight"
        >
          Desarrollo de software a medida: cómo lo hacemos
        </m.h2>

        <div className="space-y-6">
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-slate-300 text-lg leading-relaxed"
          >
            En Tresbit construimos aplicaciones web, móviles y plataformas digitales adaptadas a las necesidades específicas de cada negocio. Nuestra metodología se basa en entender profundamente el problema antes de escribir código, lo que nos permite diseñar soluciones que realmente resuelvan necesidades operativas y generen impacto medible.
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-300 text-lg leading-relaxed"
          >
            Trabajamos con tecnologías modernas como <Term term="Next.js" />, <Term term="React" />, <Term term="TypeScript" /> en el <Term term="Frontend" />, y <Term term="Node.js" /> con Express y <Term term="PostgreSQL" /> en el <Term term="Backend" />. Cada proyecto incluye arquitectura preparada para escalar, pruebas automatizadas, <Term term="CI/CD" /> integrado y documentación técnica clara para facilitar el mantenimiento futuro.
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed"
          >
            Nuestro proceso comienza con un workshop de definición donde identificamos el alcance del <Term term="MVP" /> (Producto Mínimo Viable). Esto nos permite entregar valor en producción en un plazo de 4 a 6 semanas, con entregas iterativas semanales que incorporan feedback real de usuarios sin generar deuda técnica.
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-300 text-lg leading-relaxed"
          >
            La seguridad está integrada desde el diseño: implementamos autenticación multifactor, cifrado de datos en tránsito y reposo con <Term term="TLS" /> y <Term term="AES-256" />, y seguimos las mejores prácticas de <Term term="OWASP" /> para prevenir vulnerabilidades comunes como inyección <Term term="SQL" />, <Term term="XSS" /> y filtraciones de información.
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-300 text-lg leading-relaxed"
          >
            Además del desarrollo, ofrecemos servicios de integración de <Term term="API" />s, conexión con <Term term="CRM" />s y <Term term="ERP" />s existentes, y automatización de procesos mediante workflows personalizados. También incorporamos soluciones de inteligencia artificial como clasificación automática de documentos, chatbots entrenados con tus datos y análisis predictivo de demanda o comportamiento de usuarios.
          </m.p>
        </div>
      </div>
    </section>
  )
}