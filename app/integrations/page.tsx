import type { Metadata } from "next"
import IntegrationsPageContent from "./_content"

export const metadata: Metadata = {
  title: "Integraciones | Tresbit",
  description:
    "Conectamos tu sistema con CRMs, ERPs, pasarelas de pago y cualquier API. Automatización entre plataformas sin silos ni procesos manuales innecesarios.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    title: "Integraciones | Tresbit",
    description:
      "Conectamos tu sistema con CRMs, ERPs, pasarelas de pago y cualquier API. Automatización entre plataformas sin silos ni procesos manuales innecesarios.",
    url: "https://tresbit.com/integrations",
  },
}

export default function IntegrationsPage() {
  return <IntegrationsPageContent />
}
