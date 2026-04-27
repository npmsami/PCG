import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BreadcrumbSchema } from '../components/SchemaOrg'
import '../styles/about.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About PCG Contractors | Texas Home Repair & Restoration Experts',
  description:
    'Learn about PCG Contractors, a Texas home repair and restoration company helping homeowners with roofing, storm damage, exterior repairs, interior repairs, and insurance claim support.',
  keywords: [
    'about PCG Contractors',
    'Texas home repair company',
    'home repair contractor San Antonio',
    'storm restoration contractor',
    'insurance claim home repairs',
  ],
  openGraph: {
    title: 'About PCG Contractors | Texas Home Repair & Restoration Experts',
    description:
      'PCG Contractors helps Texas homeowners with roofing, storm damage, exterior and interior repairs, and insurance-supported projects.',
    url: 'https://pcgroofing.net/about',
    siteName: 'PCG Contractors',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About PCG Contractors | Texas Home Repair & Restoration Experts',
    description:
      'Texas home repair and restoration: roofing, storm damage, exterior and interior work, and insurance claim support.',
  },
  alternates: {
    canonical: 'https://pcgroofing.net/about',
  },
}

export default function About() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://pcgroofing.net' },
    { name: 'About', url: 'https://pcgroofing.net/about' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main>
        <Navigation />
        <div className="container">
          <article className="about-content">
            <section className="about-hero">
              <h1 className="heading-1">
                <p>About PCG Contractors</p>
              </h1>
            </section>

            <section className="about-section">
              <h2 className="about-subheading">Trusted Texas Home Repair &amp; Restoration Experts</h2>
              <p className="text-medium">
                PCG Contractors is a Texas-based home repair and restoration company dedicated to helping homeowners
                protect, repair, and restore their properties. With over 15 years of hands-on experience, we handle
                roofing, exterior repairs, interior repairs, storm damage restoration, and insurance-supported repair
                projects with professionalism and care.
              </p>
            </section>

            <section className="about-section">
              <h2 className="about-subheading">Our Mission</h2>
              <p className="text-medium">
                Our mission is to make home repairs simple, transparent, and dependable. We help Texas homeowners
                understand the damage, review their repair options, and move through the process with confidence.
              </p>
            </section>

            <section className="about-section">
              <h2 className="about-subheading-large">What Sets Us Apart</h2>
              <ul className="about-values">
                <li>15+ years of home repair and restoration experience</li>
                <li>Licensed and insured team</li>
                <li>Roofing, interior, and exterior repair support</li>
                <li>Storm damage restoration experience</li>
                <li>Insurance claim documentation assistance</li>
                <li>Clear communication from inspection to completion</li>
              </ul>
            </section>

            <section className="about-section">
              <h2 className="about-subheading">What We Do</h2>
              <p className="text-medium">
                Roofing remains a core strength—we repair and replace shingle, metal, and tile systems and work with
                carriers to document storm-related damage. We also restore{' '}
                <strong>siding, fascia, trim, gutters, windows, and exterior doors</strong>, and when damage reaches
                inside the home, we can help with <strong>drywall, paint, ceilings, and interior restoration</strong>.
                From emergency protection after severe weather to full project management, PCG Contractors is your
                whole-home partner.
              </p>
            </section>

            <section className="about-section">
              <h2 className="about-subheading">Serving Communities Across Texas</h2>
              <p className="text-medium">
                PCG Contractors proudly serves homeowners and businesses throughout{' '}
                <strong>San Antonio, Austin, Houston, New Braunfels, Seguin</strong>, and surrounding Texas communities.
                Our local team understands Texas weather—from hail and high winds to heat and UV exposure—and how it
                affects your property.
              </p>
            </section>

            <section className="about-section">
              <h2 className="about-subheading">Our Commitment to You</h2>
              <p className="text-medium">When you choose PCG Contractors, you can expect:</p>
              <ul className="about-values">
                <li>Honesty and transparency on every job</li>
                <li>Quality workmanship backed by a warranty</li>
                <li>Timely project completion with minimal disruption</li>
                <li>Help navigating insurance documentation and repair scope</li>
                <li>Long-term customer satisfaction</li>
              </ul>
            </section>

            <section className="about-section">
              <h3 className="about-highlight">Get Started Today</h3>
              <p className="text-medium">
                Whether your home needs roof repair, storm damage restoration, exterior repairs, or interior repair
                work, PCG Contractors is ready to help.{' '}
                <strong>Schedule a free home inspection today.</strong>
              </p>
            </section>
          </article>
        </div>

        <Footer />
      </main>
    </>
  )
}
