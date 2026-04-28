import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

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
  title: "MARA Mahavonjy — Full Stack JavaScript Developer",
  description:
    "Portfolio de MARA Mahavonjy, développeur Full Stack JavaScript basé à Antananarivo, Madagascar. React, Next.js, Node.js, React Native.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}