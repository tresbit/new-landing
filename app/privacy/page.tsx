import type { Metadata } from "next"
import PrivacyContent from "./_content"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Conocé cómo Tresbit recopila, usa y protege tus datos personales, en cumplimiento de la Ley 25.326 de Protección de Datos Personales de Argentina.",
  alternates: { canonical: "/privacy" },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
