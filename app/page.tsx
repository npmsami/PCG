'use client';

import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <h1>Test Page</h1>
      <p>Navigation and Hero components added.</p>
    </main>
  )
}
