import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PCG Contractors AMP | Texas Home Repair',
  description:
    'PCG Contractors provides Texas home repair, storm damage restoration, and free home inspections.',
  alternates: {
    canonical: 'https://pcgroofing.net',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AmpPage() {
  return (
    <main
      style={{
        maxWidth: '840px',
        margin: '0 auto',
        padding: '24px 16px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.5,
      }}
    >
      <h1>PCG Contractors</h1>
      <p>
        Texas home repair and storm damage restoration with roofing, exterior and
        interior repairs, and insurance claim support.
      </p>
      <p>
        <a href="https://pcgroofing.net">Visit the full site</a> or book a free
        home inspection.
      </p>
    </main>
  )
}
