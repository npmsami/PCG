import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Providers } from './components/Providers'

export const metadata: Metadata = {
  metadataBase: new URL('https://pcgroofing.net'),
  title: {
    default: 'PCG Contractors | Texas Home Repair & Free Home Inspection',
    template: '%s | PCG Contractors'
  },
  description: 'PCG Contractors offers Texas home repair, storm damage restoration, and exterior and interior repairs. Book your free home inspection today.',
  keywords: ['PCG Contractors', 'home repair Texas', 'home repair contractor Texas', 'home repair contractor San Antonio', 'storm damage restoration Texas', 'book free home inspection', 'free home inspection', 'roofing and home repairs', 'exterior home repairs', 'interior home repairs', 'roof repair Texas', 'general contractor San Antonio'],
  authors: [{ name: 'PCG Contractors' }],
  creator: 'PCG Contractors',
  publisher: 'PCG Contractors',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pcgroofing.net',
    siteName: 'PCG Contractors',
    title: 'PCG Contractors | Texas Home Repair & Free Home Inspection',
    description: 'PCG Contractors offers Texas home repair, storm damage restoration, and exterior and interior repairs. Book your free home inspection today.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PCG Contractors — Texas home repair and restoration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PCG Contractors | Texas Home Repair & Free Home Inspection',
    description: 'Texas home repair, storm damage restoration, and exterior and interior repairs. Book your free home inspection today.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://pcgroofing.net',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '45JEW6Tp3GQdBpO8XiJr8peKaVvX2wLsQhVU4vzwlKs',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Builder.io CDN to speed up image loads */}
        <link rel="preconnect" href="https://api.builder.io" />
        <link rel="dns-prefetch" href="https://api.builder.io" />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Script id="cal-com-embed" strategy="afterInteractive">
          {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "inspection", { origin: "https://app.cal.com" });
Cal.ns.inspection("ui", { hideEventTypeDetails: false, layout: "month_view" });`}
        </Script>
      </body>
    </html>
  )
}
