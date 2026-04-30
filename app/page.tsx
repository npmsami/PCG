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
    question: 'Do I really pay $0?',
    answer:
      'In some approved insurance claims, your covered repairs may be paid by the insurance company, depending on your policy, deductible, damage type, and claim approval. PCG Contractors can help document the damage and explain the repair process, but final coverage is determined by your insurance carrier.',
  },
  {
    question: 'What if my claim is denied?',
    answer:
      'If your claim is denied, we can review the repair needs with you and provide a clear estimate for the necessary work. Our team will explain your options so you can make the best decision for your home.',
  },
  {
    question: 'How fast is the process?',
    answer:
      'Timelines depend on the repair scope, insurance approval, materials, and weather. Smaller repairs may be completed quickly, while larger restoration projects may take longer. We keep you updated through each step.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. PCG Contractors is licensed and insured, with more than 15 years of experience helping Texas homeowners with repair and restoration projects.',
  },
  {
    question: 'Still have questions?',
    answer: "We're here to help you.",
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
        <section className="home-seo-content">
          <h2>Texas Home Repair and Storm Damage Restoration</h2>
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
