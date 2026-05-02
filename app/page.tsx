import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ProcessSection from './components/ProcessSection'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import { LocalBusinessSchema, WebSiteSchema, FAQSchema } from './components/SchemaOrg'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pcgroofing.net',
    types: {
      'application/amp+html': 'https://pcgroofing.net/amp',
    },
  },
}

// FAQ items mirrored here for schema (must match FAQSection content)
const FAQ_SCHEMA_ITEMS = [
  {
    question: 'Do you offer free home inspections?',
    answer:
      'Yes. PCG Contractors offers free home inspections in San Antonio and nearby Texas communities. During the visit, we review visible damage, discuss your concerns, and explain practical next steps for repair.',
  },
  {
    question: 'Do you help with storm damage repairs?',
    answer:
      'Yes. We handle storm damage restoration for roofing, exterior areas, and interior spaces affected by wind, hail, or water intrusion. Our team documents the damage and builds a clear repair plan tailored to your property.',
  },
  {
    question: 'Do you help with insurance claims?',
    answer:
      'Yes. We can support your insurance claim process by organizing repair documentation, photos, and scope details. Final coverage decisions are made by your insurance carrier based on your policy terms.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'PCG Contractors serves homeowners in San Antonio and surrounding Texas areas. Contact us to confirm service availability for your address and project timeline.',
  },
  {
    question: 'Do you handle interior and exterior repairs?',
    answer:
      'Yes. We provide both interior and exterior home repairs, including work related to storm damage and general restoration needs. We coordinate the scope so repairs are completed in a logical and efficient order.',
  },
];

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <WebSiteSchema />
      <FAQSchema items={FAQ_SCHEMA_ITEMS} />
      <main>
        <Navigation />
        <HeroSection />
        <ProcessSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <section id="storm-damage" className="home-seo-content">
          <h2>Storm Damage Restoration &amp; Insurance Claim Support</h2>
          <p>
            PCG Contractors helps homeowners across Texas with practical, full-service
            home repair support after storms, leaks, and unexpected property damage.
            Our team handles roofing and home repairs as one coordinated project so
            exterior and interior work can be planned together with clear timelines.
          </p>
          <p>
            If your property has hail or wind damage, we inspect visible and hidden
            issues, document the scope, and explain next steps in plain language.
            We also support insurance-related repair documentation so homeowners can
            make informed decisions based on policy details and approved scope.
          </p>
          <p>
            Our work includes roof repair, exterior home repairs, interior home
            repairs, emergency storm protection, and restoration planning from first
            inspection through final walkthrough.
          </p>
          <p>
            Jump directly to key topics:{' '}
            <Link href="/#home">Home</Link>,{' '}
            <Link href="/#services">Services</Link>,{' '}
            <Link href="/#storm-damage">Storm Damage Restoration</Link>,{' '}
            <Link href="/#interior-repairs">Interior Repairs</Link>,{' '}
            <Link href="/#exterior-repairs">Exterior Repairs</Link>,{' '}
            <Link href="/#insurance-claims">Insurance Claim Help</Link>,{' '}
            <Link href="/#faqs">FAQs</Link>, and{' '}
            <Link href="/contact">Contact / Free Inspection</Link>.
          </p>
          <h3>Explore More Home Repair Resources</h3>
          <nav aria-label="Homepage internal links">
            <ul>
              <li><Link href="/about">About PCG Contractors</Link></li>
              <li><Link href="/contact">Book a Free Home Inspection</Link></li>
              <li><Link href="/blogs">Home Repair &amp; Restoration Blog</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
            </ul>
          </nav>
          <p>
            Insurance education resource:{' '}
            <a
              href="https://www.tdi.texas.gov/tips/claims-process.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Texas Department of Insurance claims process guide
            </a>
            .
          </p>
        </section>
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
