import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tresbit | Software a medida en Mendoza",
  description:
    "Soluciones digitales a medida desde Mendoza: desarrollo web y mobile, automatización de procesos, backoffice y landings.",
  metadataBase: new URL("https://tresbit.com"),
  alternates: {
    canonical: "/",
    languages: { "es-AR": "/" },
  },
  openGraph: {
    title: "Tresbit | Software a medida en Mendoza",
    description:
      "Soluciones digitales a medida desde Mendoza: desarrollo web y mobile, automatización de procesos, backoffice y landings.",
    url: "https://tresbit.com",
    siteName: "Tresbit",
    locale: "es_AR",
    type: "website",
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
    <html lang="es" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Cinzel:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
