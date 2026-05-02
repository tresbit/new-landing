import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter_Tight } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tresbit | Software a medida en Mendoza",
    template: "%s | Tresbit",
  },
  description:
    "Empresa de desarrollo de software a medida en Mendoza: aplicaciones web, mobile, automatización e integraciones. Hablemos de tu proyecto.",
  metadataBase: new URL("https://tresbit.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Tresbit | Software a medida en Mendoza",
    description:
      "Empresa de desarrollo de software a medida en Mendoza: aplicaciones web, mobile, automatización e integraciones. Hablemos de tu proyecto.",
    url: "https://tresbit.com",
    siteName: "Tresbit",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tresbit | Software a medida en Mendoza",
    description:
      "Empresa de desarrollo de software a medida en Mendoza: aplicaciones web, mobile, automatización e integraciones. Hablemos de tu proyecto.",
  },
};

export const viewport: Viewport = {
  themeColor: "#286291",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`h-full antialiased ${plusJakartaSans.variable} ${interTight.variable}`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
