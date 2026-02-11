import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roofing Blog - Tips, Guides & Industry News',
  description: 'Expert roofing advice, maintenance tips, and industry insights from PCG Roofing. Learn about roof repair, storm damage, insurance claims, and more.',
  keywords: ['roofing blog', 'roof maintenance tips', 'roofing guides', 'storm damage advice', 'roof repair tips'],
  openGraph: {
    title: 'PCG Roofing Blog - Expert Advice & Tips',
    description: 'Expert roofing advice, maintenance tips, and industry insights from PCG Roofing.',
    url: 'https://pcgroofing.net/blogs',
    siteName: 'PCG Roofing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PCG Roofing Blog - Expert Advice & Tips',
    description: 'Expert roofing advice, maintenance tips, and industry insights.',
  },
  alternates: {
    canonical: 'https://pcgroofing.net/blogs',
  },
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
