import type { Metadata } from "next"
import SecurityPageContent from "./_content"

export const metadata: Metadata = {
  title: "Seguridad | Tresbit",
  description:
    "Seguridad desde el diseño: autenticación multifactor, cifrado AES-256, arquitectura de mínimo privilegio y monitoreo activo en cada sistema que construimos.",
  alternates: { canonical: "/security" },
  openGraph: {
    title: "Seguridad | Tresbit",
    description:
      "Seguridad desde el diseño: autenticación multifactor, cifrado AES-256, arquitectura de mínimo privilegio y monitoreo activo en cada sistema que construimos.",
    url: "https://tresbit.com/security",
  },
}

export default function SecurityPage() {
  return <SecurityPageContent />
}
