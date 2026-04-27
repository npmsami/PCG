import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Repair Blog | PCG Contractors Texas Repair & Restoration Tips',
  description:
    'Read home repair, roofing, storm damage, insurance claim, exterior repair, and restoration tips from the PCG Contractors team.',
  keywords: [
    'home repair blog Texas',
    'storm damage restoration tips',
    'insurance claim home repairs',
    'PCG Contractors blog',
    'exterior home repairs',
    'roof repair Texas',
  ],
  openGraph: {
    title: 'Home Repair & Restoration Blog | PCG Contractors',
    description:
      'Expert advice on home repairs, roofing, storm damage, insurance claims, and protecting your Texas home.',
    url: 'https://pcgroofing.net/blogs',
    siteName: 'PCG Contractors',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Repair & Restoration Blog | PCG Contractors',
    description: 'Home repair, roofing, storm damage, and restoration tips for Texas homeowners.',
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
