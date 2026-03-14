import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cambridge School Mangalore",
  description:
    "Cambridge School, Mangalore — a top-ranked CBSE school at Neermarga Road, Kudupu, Mangalore, founded in 2007 under St. Lawrence Education Trust. Offering academic excellence, sports, ICT & co-curricular activities. Admissions open 2025–26.",

  keywords: [
    "Cambridge School Mangalore",
    "best CBSE school in Mangalore",
    "top ranking school Mangalore",
    "CBSE school Kudupu Mangalore",
    "Cambridge School Karnataka",
    "St Lawrence Education Trust school",
    "CBSE school Neermarga Road Mangalore",
    "best school in Mangalore 2025",
    "Cambridge school admissions Mangalore",
    "co-curricular activities school Mangalore",
    "CBSE school Karnataka admissions 2025",
    "international school Mangaluru",
  ],

  authors: [{ name: "Cambridge School Mangalore" }],
  metadataBase: new URL("https://cambridgeschoolmangalore.com"),
  alternates: {
    canonical: "/",
  },

  // ── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    title: "Cambridge School Mangalore",
    description:
      "Founded in 2007 by Collins & Flavia Albuquerque under St. Lawrence Education Trust. Academic excellence, world-class infrastructure & holistic growth at Kudupu, Mangalore. Admissions open 2025–26.",
    url: "https://cambridgeschoolmangalore.com",
    siteName: "Cambridge School Mangalore",
    images: [
      {
        url: "/images/og-banner.jpg", // ⚠️ Replace with a real 1200×630 JPG
        width: 1200,
        height: 630,
        alt: "Cambridge School Mangalore — Neermarga Road, Kudupu, Mangalore",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ── Twitter / X Card ────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Cambridge School Mangalore",
    description:
      "Top-ranked CBSE school in Mangalore with outstanding board results, sports, ICT & co-curricular activities. Admissions open 2025–26.",
    images: ["/images/og-banner.jpg"], // ⚠️ Use a real JPG/PNG, not SVG
  },

  // ── Robots ──────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification ────────────────────────────────────────────────────────────
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN", // ← paste from Search Console
  },

  category: "education",
  applicationName: "Cambridge School Mangalore",
  referrer: "origin-when-cross-origin",
};
import { ModalProvider } from "@/context/ModalContext";
import GlobalModal from "@/components/sections/GlobalModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ModalProvider>
          <GlobalModal />
          {children}
        </ModalProvider>
        <Script src="/smoothScroll/smoothScroll.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
