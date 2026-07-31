import type { Metadata } from "next";
import { Arimo, Spectral } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Disruption Advisors | Whitney Johnson",
  description:
    "Whitney Johnson helps leaders build both powers transformation requires: the disruption that moves you forward, and the stability that makes it last.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${arimo.variable} ${spectral.variable}`}>
      <body className="min-h-screen font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
