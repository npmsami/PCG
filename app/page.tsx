import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ProcessSection from './components/ProcessSection'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import { LocalBusinessSchema, WebSiteSchema, FAQSchema } from './components/SchemaOrg'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('./components/Footer'), { ssr: false })

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
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
