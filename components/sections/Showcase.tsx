"use client";

import ComponentFileViewer, { type ApiComponent } from "@/components/ui/file-viewer";
import { motion } from "framer-motion";

const TRESBIT_STACK: ApiComponent = {
  name: "Tresbit Dev Stack",
  version: "2.0",
  files: [
    {
      path: "README.md",
      content: `# Desarrollo de Aplicaciones Web y Móviles en Mendoza

Somos Tresbit, una empresa de desarrollo de software a medida con sede en Mendoza, Argentina.
Especializados en aplicaciones web, móviles y soluciones empresariales escalables.

## Qué construimos

- **Web Apps**: Next.js, React, TypeScript — rápidas, seguras y posicionadas en Google
- **APIs REST / GraphQL**: Node.js, Express, Prisma — arquitecturas limpias y documentadas
- **Mobile**: React Native — iOS y Android desde una sola base de código
- **Backoffice**: Dashboards, CRM y ERP a medida para equipos operativos
- **Landing pages**: SEO-first, carga ultrarrápida, optimizadas para conversión

## Stack tecnológico

\`\`\`
Frontend   → Next.js 15 · React 19 · TypeScript · Tailwind CSS
Backend    → Node.js · Express · Prisma ORM · PostgreSQL
Infra      → AWS · Vercel · Railway · Docker
Mobile     → React Native · Expo
\`\`\`

## Por qué Tresbit

1. **Código limpio y mantenible** — revisiones de código, tests unitarios, CI/CD
2. **SEO desde el día 0** — Server Side Rendering, Core Web Vitals optimizados
3. **Seguridad OWASP** — sin SQL injection, XSS ni data leaks
4. **Escalabilidad** — arquitecturas pensadas para crecer con tu negocio
5. **Soporte continuo** — no desaparecemos después del lanzamiento

## Contacto

- Web: https://tresbit.com
- Email: contact@tresbit.com
- WhatsApp: +54 9 261 605 0326
`,
    },
    {
      path: "app/api/projects/route.ts",
      content: `import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const CreateProjectSchema = z.object({
  name: z.string().min(2).max(100),
  type: z.enum(["web", "mobile", "backoffice", "landing", "api"]),
  description: z.string().min(10).max(1000),
  budget: z.number().min(0).optional(),
});

// GET /api/projects — returns list of active projects
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  const projects = await db.project.findMany({
    where: type ? { type } : undefined,
    orderBy: { createdAt: "desc" },
    include: { client: { select: { name: true } } },
  });

  return NextResponse.json({ data: projects, total: projects.length });
}

// POST /api/projects — creates a new project
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = CreateProjectSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const project = await db.project.create({
    data: { ...parsed.data, status: "ACTIVE" },
  });

  return NextResponse.json({ data: project }, { status: 201 });
}
`,
    },
    {
      path: "components/ProjectCard.tsx",
      content: `import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={[
        "group relative rounded-2xl overflow-hidden border bg-card",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        featured ? "md:col-span-2" : "",
      ].join(" ")}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold leading-tight">{project.name}</h3>
          <Badge variant="secondary">{project.type}</Badge>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.url && (
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            View project →
          </Link>
        )}
      </div>
    </article>
  );
}
`,
    },
    {
      path: "types/project.ts",
      content: `export type ProjectType =
  | "web"
  | "mobile"
  | "backoffice"
  | "landing"
  | "api";

export type ProjectStatus =
  | "ACTIVE"
  | "PAUSED"
  | "DELIVERED"
  | "MAINTENANCE";

export interface Project {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  status: ProjectStatus;
  imageUrl: string;
  url?: string;
  stack: string[];
  clientId: string;
  client?: { name: string };
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProjectDto {
  name: string;
  type: ProjectType;
  description: string;
  budget?: number;
}

export interface ProjectsResponse {
  data: Project[];
  total: number;
}
`,
    },
    {
      path: "lib/seo.ts",
      content: `import type { Metadata } from "next";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const BASE_URL = "https://tresbit.com";
const DEFAULT_IMAGE = "/og-image.png";

/**
 * Builds full SEO metadata for Next.js App Router.
 * Covers OG tags, Twitter cards and canonical URL.
 */
export function generateSeoMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
}: SeoProps): Metadata {
  const url = \`\${BASE_URL}\${path}\`;
  const fullImage = image.startsWith("http") ? image : \`\${BASE_URL}\${image}\`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Tresbit",
      images: [{ url: fullImage, width: 1200, height: 630, alt: title }],
      locale: "es_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
`,
    },
  ],
};

export default function Showcase() {
  return (
    <section className="dark bg-[#0f1929] py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#5ba8d8] mb-3 block">
            Stack & Proceso
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Así desarrollamos{" "}
            <span className="text-[#5ba8d8]">tu aplicación</span>
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base leading-relaxed">
            Código limpio, arquitectura escalable y SEO desde el primer commit. Explorá
            cómo estructuramos proyectos reales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ComponentFileViewer component={TRESBIT_STACK} />
        </motion.div>
      </div>
    </section>
  );
}
