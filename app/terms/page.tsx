import type { Metadata } from "next"
import TermsContent from "./_content"

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y Condiciones de uso de los servicios de Tresbit. Ley aplicable: República Argentina.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return <TermsContent />
}
