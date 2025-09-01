import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppProviders from "@/lib/providers/appProvider";
import Script from "next/script";
import GTMScript from "./GTMScript";
import { Toaster } from "sonner";
import { jsonLd } from "../config/jsonLd";
import { enFaqJsonLd } from "@/jsonLd/enFaq";
import { idFaqJsonLd } from "@/jsonLd/idFaq";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://convo.rullysaputra.com"), // ← your prod domain
  title: {
    default: "Convo — Say the unsaid",
    template: "%s | Convo",
  },
  description:
    "Talk freely in a warm, anonymous chat. No account, no tracking—messages are used to reply, then deleted. A friendly ear, no judgment. Start a safe chat.",
  keywords: [
    "anonymous chat",
    "safe anonymous chat",
    "private chat",
    "judgment-free chat",
    "vent anonymously",
    "talk to someone online",
    "friend-like listener",
    "no account chat",
    "privacy-first chat",
    "AI listener",
  ],
  applicationName: "Convo",
  creator: "Rully Saputra",
  publisher: "Rully Saputra",
  alternates: {
    canonical: "https://convo.rullysaputra.com/",
    languages: {
      en: "https://convo.rullysaputra.com/",
      id: "https://convo.rullysaputra.com/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://convo.rullysaputra.com/",
    title: "Convo — Say the unsaid",
    siteName: "Convo",
    description:
      "A gentle place to talk, anonymously. No account or tracking; messages are used to reply, then deleted.",
    images: [
      {
        url: "/og/hero.png", // 1200×630 recommended
        width: 1200,
        height: 630,
        alt: "Convo — Say the unsaid",
      },
    ],
    locale: "en_US",
    alternateLocale: ["id_ID"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convo — Say the unsaid",
    description:
      "Start a private, anonymous chat with Salma. No judgment. No storage.",
    creator: "@rullysaputra",
    images: ["/og/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Tag Manager (or other third-party service) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Optional: DNS-prefetch if preconnect isn't required */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${jakartaSans.variable} antialiased h-dvh`}>
        <AppProviders>{children}</AppProviders>
        <GTMScript />
        <Toaster position="bottom-center" richColors />
        <Script
          id="ld-json-convo"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="en-faq-convo"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(enFaqJsonLd) }}
        />
        <Script
          id="id-faq-convo"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(idFaqJsonLd) }}
        />
      </body>
    </html>
  );
}
