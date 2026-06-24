import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientPageManager from "@/components/ClientPageManager";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OZCLU — Transparent Background Verification & Screening Services",
  description:
    "OzClu provides transparent, technology-driven background verification and screening services. Employment checks, identity verification, compliance screening, and business due diligence — built on trust, accuracy, and full transparency.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "background verification",
    "background checks",
    "employment screening",
    "identity verification",
    "compliance screening",
    "due diligence",
    "OzClu",
    "transparent verification",
  ],
  openGraph: {
    title: "OZCLU — Let's Make It Transparent",
    description:
      "Transparent, technology-driven background verification and screening services. Trust. Accuracy. Compliance.",
    type: "website",
    locale: "en_US",
    siteName: "OzClu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main id="main-content">
          <ClientPageManager>{children}</ClientPageManager>
        </main>
        <Footer />
      </body>
    </html>
  );
}
