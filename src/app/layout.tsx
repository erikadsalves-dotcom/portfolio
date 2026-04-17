import type { Metadata } from "next";
import {
  DM_Sans,
  DM_Serif_Display,
  Syne,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://erika-portfolio-pi.vercel.app";
const SITE_NAME = "Érika de Sousa Alves — Product Designer";
const SITE_DESCRIPTION =
  "Product Designer com foco em discovery, métricas e estratégia — transformando complexidade em produtos digitais que funcionam de verdade.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s — Érika de Sousa Alves",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Portfolio de Érika de Sousa Alves",
  authors: [{ name: "Érika de Sousa Alves" }],
  creator: "Érika de Sousa Alves",
  publisher: "Érika de Sousa Alves",
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Product Discovery",
    "Design de Produto",
    "Portfolio",
    "Érika de Sousa Alves",
    "Fortaleza",
    "Brasil",
  ],
  category: "design",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@erikadsalves",
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
  icons: {
    icon: "/favicon.ico",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Érika de Sousa Alves",
  jobTitle: "Product Designer",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Product Design",
    "UX Research",
    "Product Discovery",
    "Design Systems",
    "User Interface Design",
  ],
  sameAs: [
    "https://www.linkedin.com/in/erikadsalves",
    "https://github.com/erikadsalves-dotcom",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${dmSerif.variable} ${syne.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
