import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import AppProviders from "@/lib/providers/appProvider";
import Script from "next/script";
import { initialize } from "@/lib/tracking";
import GTMScript from "./GTMScript";
import { Toaster } from "sonner";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://convo.rullysaputra.com"), // ← your prod domain
  title: {
    default: "Convo — Say the unsaid",
    template: "%s | Convo",
  },
  description:
    "A gentle AI companion named Salma that listens without judgment. Start a private, anonymous chat in Bahasa Indonesia or English. Your stories are never stored.",
  keywords: [
    "Convo",
    "Say the unsaid",
    "anonymous chat",
    "judgment-free",
    "AI companion",
    "virtual friend",
    "private conversation",
    "safe space",
    "Bahasa Indonesia",
    "English",
    "no data storage",
  ],
  applicationName: "Convo",
  creator: "Convo",
  publisher: "Convo",
  themeColor: "#F6E7FF", // soft pastel
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      id: "/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://convo.rullysaputra.com/",
    title: "Convo — Say the unsaid",
    siteName: "Convo",
    description:
      "A safe, judgment-free space to be heard. Your stories are never stored.",
    // images: [
    //   {
    //     url: "/og/hero.png", // 1200×630 recommended
    //     width: 1200,
    //     height: 630,
    //     alt: "Convo — Say the unsaid",
    //   },
    // ],
    locale: "en_US",
    alternateLocale: ["id_ID"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convo — Say the unsaid",
    description:
      "Start a private, anonymous chat with Salma. No judgment. No storage.",
    creator: "@rullysaputra",
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
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Convo",
    slogan: "Say the unsaid",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    url: "https://convo.app/",
    description:
      "A gentle AI companion (Salma) that listens without judgment. Anonymous, private, and available in Bahasa Indonesia or English.",
    inLanguage: ["en", "id"],
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
    audience: { "@type": "PeopleAudience", suggestedMinAge: 13 },
    // Clarify boundaries without medical claims:
    about:
      "Listening & supportive conversation. Not a replacement for professional care.",
  };
  return (
    <html lang="en">
      <Head>
        {/* Preconnect to Google Tag Manager (or other third-party service) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* Optional: DNS-prefetch if preconnect isn't required */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Add more preconnect or dns-prefetch links as needed */}
      </Head>
      <body className={`${jakartaSans.variable} antialiased h-dvh`}>
        <AppProviders>{children}</AppProviders>
        <GTMScript />
        <Toaster position="bottom-center" richColors />
        <Script
          id="ld-json-convo"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
