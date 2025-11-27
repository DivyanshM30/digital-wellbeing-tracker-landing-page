import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Wellbeing Tracker — Reclaim Your Focus",
  description:
    "Privacy-first screen time tracker with ML-powered insights. Track, understand, and improve your digital habits without compromising privacy.",
  keywords: "screen time tracker, digital wellbeing, privacy-first, app usage, ML analytics, desktop app, open source",
  authors: [{ name: "Divyansh M", url: "https://github.com/DivyanshM30" }],
  openGraph: {
    title: "Digital Wellbeing Tracker — Reclaim Your Focus",
    description: "Track, understand, and improve your digital habits with privacy-first analytics.",
    type: "website",
    url: "https://digital-wellbeing-tracker.vercel.app",
    siteName: "Digital Wellbeing Tracker",
    images: [
      {
        url: "/digital-wellbeing-dashboard-with-app-usage-charts.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Wellbeing Tracker Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Wellbeing Tracker — Reclaim Your Focus",
    description: "Privacy-first screen time tracker with ML-powered insights.",
    images: ["/digital-wellbeing-dashboard-with-app-usage-charts.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://digital-wellbeing-tracker.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Digital Wellbeing Tracker",
    description:
      "Privacy-first screen time tracker with ML-powered insights to help you understand and improve your digital habits.",
    applicationCategory: "UtilitiesApplication",
    url: "https://digital-wellbeing-tracker.vercel.app",
    image: "/digital-wellbeing-dashboard-with-app-usage-charts.jpg",
    operatingSystem: ["Windows", "Linux", "macOS"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Divyansh M",
      url: "https://github.com/DivyanshM30",
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Theme Script - runs before render to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || 
                    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        
        {/* Preload hero image for faster LCP */}
        <link
          rel="preload"
          as="image"
          href="/digital-wellbeing-dashboard-with-app-usage-charts.jpg"
          fetchPriority="high"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
