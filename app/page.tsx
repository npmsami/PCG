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

const Footer = dynamic(() => import('./components/Footer'), { ssr: false })

// FAQ items mirrored here for schema (must match FAQSection content)
const FAQ_SCHEMA_ITEMS = [
  {
    question: 'Do I really pay $0?',
    answer: "Yes, if your claim is approved, the insurance covers the entire cost of the repairs. You won't pay anything out of pocket. We handle all the paperwork to ensure a smooth process.",
  },
  {
    question: 'What if my claim is denied?',
    answer: 'If your claim is denied, we will provide you with a clear explanation of your options. Our team will offer a fair quote for the necessary repairs. We are committed to helping you navigate the situation.',
  },
  {
    question: 'How fast is the process?',
    answer: 'Typically, most roofs are restored within 1 to 2 weeks after your claim is approved. Our efficient process ensures minimal disruption to your home. We prioritize getting your roof repaired quickly and effectively.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely! PCG Roofing is fully licensed and insured. With over 15 years of experience, we are a trusted name in the San Antonio area.',
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
