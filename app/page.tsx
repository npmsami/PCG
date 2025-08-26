'use client';

import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ProcessSection from './components/ProcessSection'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
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
  )
}
