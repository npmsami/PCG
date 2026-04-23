import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Providers } from './components/Providers'

export const metadata: Metadata = {
  metadataBase: new URL('https://pcgroofing.net'),
  title: {
    default: 'PCG Roofing - Texas Roofing Experts | Roof Repair & Replacement',
    template: '%s | PCG Roofing'
  },
  description: 'Professional roofing services in Texas. 15+ years experience in roof repair, roof replacement, storm damage restoration, and insurance claims assistance. Free inspections. Call today!',
  keywords: ['roofing texas', 'roof repair', 'roof replacement', 'storm damage repair', 'insurance claims roofing', 'texas roofer', 'emergency roof repair', 'hail damage roof', 'roof inspection'],
  authors: [{ name: 'PCG Roofing' }],
  creator: 'PCG Roofing',
  publisher: 'PCG Roofing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pcgroofing.net',
    siteName: 'PCG Roofing',
    title: 'PCG Roofing - Texas Roofing Experts',
    description: 'Professional roofing services in Texas. 15+ years experience. Free inspections, insurance claims assistance, storm damage repair.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PCG Roofing - Professional Roofing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PCG Roofing - Texas Roofing Experts',
    description: 'Professional roofing services in Texas. 15+ years experience. Free inspections.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code', // Add your Google Search Console verification code
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
        <link rel="canonical" href="https://pcgroofing.net" />
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
