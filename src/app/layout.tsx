import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "MARA Mahavonjy | Developpeur Full Stack JavaScript",
  description: "Portfolio de MARA Mahavonjy, developpeur Full Stack JavaScript base a Antananarivo Madagascar. Expert React, Next.js, Node.js et React Native. Disponible pour alternance et stage.",
  keywords: ["MARA Mahavonjy", "developpeur full stack", "javascript", "react", "next.js", "node.js", "react native", "madagascar", "antananarivo", "portfolio", "alternance", "stage"],
  authors: [{ name: "MARA Mahavonjy", url: "https://portfolio-mara-six.vercel.app" }],
  creator: "MARA Mahavonjy",
  publisher: "MARA Mahavonjy",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://portfolio-mara-six.vercel.app" },
  openGraph: {
    type: "website",
    url: "https://portfolio-mara-six.vercel.app",
    title: "MARA Mahavonjy | Developpeur Full Stack JavaScript",
    description: "Portfolio de MARA Mahavonjy, developpeur Full Stack JavaScript. React, Next.js, Node.js, React Native. Base a Antananarivo, disponible en remote.",
    siteName: "MARA Mahavonjy Portfolio",
    images: [{ url: "https://portfolio-mara-six.vercel.app/avatar.jpg", width: 800, height: 800, alt: "MARA Mahavonjy - Developpeur Full Stack JavaScript" }],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARA Mahavonjy | Developpeur Full Stack JavaScript",
    description: "Portfolio de MARA Mahavonjy, developpeur Full Stack JavaScript. React, Next.js, Node.js, React Native.",
    images: ["https://portfolio-mara-six.vercel.app/avatar.jpg"],
    creator: "@maramahavonjy",
  },
  verification: { google: "google-site-verification-code" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/avatar.jpg" />
        <meta name="theme-color" content="#0d1b4b" />
        <meta name="geo.region" content="MG" />
        <meta name="geo.placename" content="Antananarivo" />
      </head>
      <body className={[dmSans.variable, syne.variable].join(" ")}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
