import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DemoBadge } from "@/components/layout/demo-badge";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beacon Ridge Multispecialty Hospital — Concept Website Demo | MHTSdigiXR",
  description:
    "A Premium-tier multispecialty hospital website concept built by MHTSdigiXR, with a live 3D hero, full CMS pattern, and 20+ pages. Fictional brand — demo only.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Beacon Ridge Multispecialty Hospital — Concept Website Demo",
    description:
      "A Premium-tier hospital website concept built by MHTSdigiXR. Fictional brand, demo only.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-canvas font-body text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-surface"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <DemoBadge />
      </body>
    </html>
  );
}
