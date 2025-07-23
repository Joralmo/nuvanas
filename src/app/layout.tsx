import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuvanas - Descubre lo que tu cuerpo necesita | Productos Naturales",
  description: "Nuvanas ofrece bienestar real a través del cuidado facial, corporal y de la salud interior con productos naturales y efectivos. Crema dental herbs, toallas sanitarias con turmalina, jabones de oliva y más.",
  keywords: "nuvanas, productos naturales, turmalina, jabón de oliva, crema dental natural, toallas sanitarias, protectores diarios, aloe vera, cuidado natural, bienestar",
  authors: [{ name: "Nuvanas" }],
  creator: "Nuvanas",
  publisher: "Nuvanas",
  openGraph: {
    title: "Nuvanas - Descubre lo que tu cuerpo necesita",
    description: "Productos naturales para el cuidado facial, corporal y de la salud interior. Con ingredientes como turmalina, hierbas chinas y aceite de oliva.",
    url: "https://nuvanas.com",
    siteName: "Nuvanas",
    images: [
      {
        url: "/assets/ProductosNuvanas.jpeg",
        width: 1200,
        height: 630,
        alt: "Productos Naturales Nuvanas - Cuidado Natural y Bienestar",
      },
      {
        url: "/assets/LogoConFondo.jpeg",
        width: 800,
        height: 600,
        alt: "Logo Nuvanas - Productos Naturales",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvanas - Descubre lo que tu cuerpo necesita",
    description: "Productos naturales para el cuidado facial, corporal y de la salud interior. Turmalina, hierbas chinas, aceite de oliva y más.",
    images: ["/assets/ProductosNuvanas.jpeg"],
    creator: "@nuvanas.co",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Agregar cuando tengas Google Search Console configurado
  },
  alternates: {
    canonical: "https://nuvanas.com",
  },
  other: {
    "whatsapp:phone": "+573146232756",
    "contact:email": "nuvanascol@gmail.com",
    "social:instagram": "@nuvanas.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Meta tags adicionales para WhatsApp y redes sociales */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nuvanas" />
        
        {/* WhatsApp específico */}
        <meta property="og:phone_number" content="+573146232756" />
        
        {/* Información de contacto structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nuvanas",
              "description": "Productos naturales para el cuidado facial, corporal y de la salud interior",
              "url": "https://nuvanas.com",
              "logo": "/assets/LogoConFondo.jpeg",
              "image": "/assets/ProductosNuvanas.jpeg",
              "telephone": "+573146232756",
              "email": "nuvanascol@gmail.com",
              "sameAs": [
                "https://instagram.com/nuvanas.co"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CO"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+573146232756",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
