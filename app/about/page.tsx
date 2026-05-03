import type { Metadata } from "next"
import AboutContent from "./_content"

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Somos Tresbit, una empresa de desarrollo de software a medida en Mendoza, Argentina. Construimos sistemas que resuelven problemas reales con tecnología que funciona.",
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Quiénes Somos | Tresbit",
    description:
      "Somos Tresbit, una empresa de desarrollo de software a medida en Mendoza, Argentina. Construimos sistemas que resuelven problemas reales con tecnología que funciona.",
    url: "https://tresbit.com/about",
    siteName: "Tresbit",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes Somos | Tresbit",
    description:
      "Somos Tresbit, una empresa de desarrollo de software a medida en Mendoza, Argentina.",
  },
}

export default function AboutPage() {
  return <AboutContent />
}
