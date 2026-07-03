import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Fraunces, Jost } from "next/font/google";
import { BEHANCE_URL, LINKEDIN_URL } from "@/lib/content";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://camila-brito.vercel.app";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#fbf1ef",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Camila Brito · Designer Gráfica",
  description:
    "Identidade visual, social media e design gráfico para marcas que querem ser lembradas. Portfólio de Camila Brito — São Paulo, Brasil.",
  keywords: [
    "Camila Brito",
    "designer gráfica",
    "identidade visual",
    "social media",
    "design gráfico",
    "branding",
    "São Paulo",
  ],
  authors: [{ name: "Camila Brito" }],
  openGraph: {
    title: "Camila Brito · Designer Gráfica",
    description:
      "Identidade visual, social media e design gráfico para marcas que querem ser lembradas.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camila Brito · Designer Gráfica",
    description:
      "Identidade visual, social media e design gráfico para marcas que querem ser lembradas.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Camila Brito",
  jobTitle: "Designer Gráfica",
  url: SITE_URL,
  sameAs: [LINKEDIN_URL, BEHANCE_URL],
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  knowsAbout: ["Identidade Visual", "Social Media", "Design Gráfico", "Branding", "Publicidade"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body
        className={`${jost.variable} ${cormorant.variable} ${fraunces.variable} font-sans overflow-x-clip`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
