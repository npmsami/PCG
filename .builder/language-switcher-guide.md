# Language Switcher Implementation Guide

## Overview
This guide implements a fully functional Spanish/English language switcher for the PCG Roofing website. The implementation uses React Context API to manage language state globally.

---

## Step 1: Create the Language Context
**File Location:** `app/context/LanguageContext.tsx`

```typescript
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
```

---

## Step 2: Create the Translations File
**File Location:** `app/data/translations.ts`

```typescript
export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      spanish: 'Spanish',
      english: 'English',
    },
    // Hero Section
    hero: {
      title: 'Restore Your Roof<br />Restore Your Peace of Mind',
      description: 'Roof damage can be overwhelming, but it doesn\'t have to be. At PCG, we prioritize your family\'s safety by efficiently restoring your roof and managing the repair process.',
      cta: 'Call Us Today',
    },
    // Process Section
    process: {
      title: 'Our Proven Process: Simple and Effective',
      subtitle: 'At PCG Roofing, we simplify the roof repair process. Our proven three-steps approach ensures you receive the best service while we handle your insurance claim. Experience a stress-free journey from inspection to completion.',
      steps: [
        {
          title: 'Step 1: Free Roof Inspection',
          description: 'We document the damage with detailed photos and a comprehensive report.',
        },
        {
          title: 'Step 2: Insurance Claim and Contract Signing',
          description: 'We handle the claim process and provide a transparent contract—no surprises, just peace of mind.',
        },
        {
          title: 'Step 3: Roof Restore',
          description: 'Licensed crew, warranty included, peace of mind delivered.',
        },
      ],
    },
    // Services Section
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive roofing solutions tailored to your needs',
      items: [
        {
          title: 'Roof Inspection',
          description: 'Professional assessment of your roof condition',
        },
        {
          title: 'Roof Repair',
          description: 'Quick and reliable repairs for any damage',
        },
        {
          title: 'Roof Replacement',
          description: 'Complete roof replacement with warranty',
        },
        {
          title: 'Storm Damage Restoration',
          description: 'Emergency response for storm-damaged roofs',
        },
        {
          title: 'Insurance Claims',
          description: 'We handle your insurance claim process',
        },
      ],
    },
    // Stats Section
    stats: {
      title: 'Trusted by Thousands of Homeowners',
      items: [
        {
          number: '5000+',
          label: 'Roofs Restored',
        },
        {
          number: '98%',
          label: 'Customer Satisfaction',
        },
        {
          number: '20+',
          label: 'Years Experience',
        },
        {
          number: '24/7',
          label: 'Emergency Service',
        },
      ],
    },
    // Testimonials
    testimonials: {
      title: 'What Our Customers Say',
      items: [
        {
          name: 'John Smith',
          text: 'PCG Roofing did an amazing job on our roof. Professional, efficient, and honest.',
          rating: 5,
        },
        {
          name: 'Sarah Johnson',
          text: 'They handled everything from start to finish. Highly recommend!',
          rating: 5,
        },
      ],
    },
    // Footer
    footer: {
      about: 'About Us',
      services: 'Services',
      contact: 'Contact',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookieSettings: 'Cookie Settings',
      copyright: '© 2024 PCG Roofing. All rights reserved.',
    },
  },
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      services: 'Servicios',
      spanish: 'Español',
      english: 'English',
    },
    // Hero Section
    hero: {
      title: 'Restaura tu Techo<br />Restaura tu Paz Mental',
      description: 'El daño al techo puede ser abrumador, pero no tiene que serlo. En PCG, priorizamos la seguridad de tu familia restaurando eficientemente tu techo y gestionando el proceso de reparación.',
      cta: 'Llámanos Hoy',
    },
    // Process Section
    process: {
      title: 'Nuestro Proceso Comprobado: Simple y Efectivo',
      subtitle: 'En PCG Roofing, simplificamos el proceso de reparación del techo. Nuestro enfoque de tres pasos comprobado garantiza que recibas el mejor servicio mientras manejamos tu reclamación de seguros. Experimenta un viaje sin estrés desde la inspección hasta la finalización.',
      steps: [
        {
          title: 'Paso 1: Inspección Gratuita del Techo',
          description: 'Documentamos el daño con fotos detalladas e un informe completo.',
        },
        {
          title: 'Paso 2: Reclamación de Seguros y Firma de Contrato',
          description: 'Manejamos el proceso de reclamación y proporcionamos un contrato transparente—sin sorpresas, solo paz mental.',
        },
        {
          title: 'Paso 3: Restauración del Techo',
          description: 'Equipo licenciado, garantía incluida, paz mental garantizada.',
        },
      ],
    },
    // Services Section
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones de techado integral adaptadas a tus necesidades',
      items: [
        {
          title: 'Inspección del Techo',
          description: 'Evaluación profesional del estado de tu techo',
        },
        {
          title: 'Reparación del Techo',
          description: 'Reparaciones rápidas y confiables para cualquier daño',
        },
        {
          title: 'Reemplazo del Techo',
          description: 'Reemplazo completo del techo con garantía',
        },
        {
          title: 'Restauración por Daños de Tormenta',
          description: 'Respuesta de emergencia para techos dañados por tormentas',
        },
        {
          title: 'Reclamaciones de Seguros',
          description: 'Manejamos tu proceso de reclamación de seguros',
        },
      ],
    },
    // Stats Section
    stats: {
      title: 'Confiado por Miles de Propietarios',
      items: [
        {
          number: '5000+',
          label: 'Techos Restaurados',
        },
        {
          number: '98%',
          label: 'Satisfacción del Cliente',
        },
        {
          number: '20+',
          label: 'Años de Experiencia',
        },
        {
          number: '24/7',
          label: 'Servicio de Emergencia',
        },
      ],
    },
    // Testimonials
    testimonials: {
      title: 'Lo Que Dicen Nuestros Clientes',
      items: [
        {
          name: 'John Smith',
          text: 'PCG Roofing hizo un trabajo increíble en nuestro techo. Profesional, eficiente y honesto.',
          rating: 5,
        },
        {
          name: 'Sarah Johnson',
          text: '¡Manejaron todo de principio a fin. Altamente recomendado!',
          rating: 5,
        },
      ],
    },
    // Footer
    footer: {
      about: 'Acerca de Nosotros',
      services: 'Servicios',
      contact: 'Contacto',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      cookieSettings: 'Configuración de Cookies',
      copyright: '© 2024 PCG Roofing. Todos los derechos reservados.',
    },
  },
};
```

---

## Step 3: Update the Layout
**File Location:** `app/layout.tsx`

Replace the entire file with:

```typescript
import './globals.css'
import { LanguageProvider } from './context/LanguageContext'

export const metadata = {
  title: 'PCG Roofing',
  description: 'Professional roofing services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
```

---

## Step 4: Update the Navigation Component
**File Location:** `app/components/Navigation.tsx`

Replace the entire file with the updated version that includes language switching:

```typescript
'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Navigation() {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollThreshold = 10;
  const hideDelay = 2000;

  const t = translations[language];

  useEffect(() => {
    setLastScrollY(window.scrollY);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      if (scrollDifference < scrollThreshold) return;

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(true);
        hideTimeoutRef.current = setTimeout(() => {
          setIsNavVisible(false);
        }, hideDelay);
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsNavVisible(true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    }
  }, [isMenuOpen]);

  const handleNavigateHome = () => {
    router.push('/');
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLanguageChange = (lang: 'en' | 'es') => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  const dynamicClass = isNavVisible ? 'nav-visible' : 'nav-hidden';

  return (
    <nav
      className={`nav-container ${dynamicClass}`.trim()}
    >
      <div className="nav-content">
        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Left side: Home and About */}
        <div className={`nav-left ${isMenuOpen ? 'nav-items-open' : ''}`}>
          <button
            className="nav-link nav-scroll-link"
            onClick={handleNavigateHome}
          >
            <span>{t.nav.home}</span>
          </button>
          <button
            className="nav-link nav-scroll-link"
            onClick={() => handleSmoothScroll('process-section')}
          >
            <span>{t.nav.about}</span>
          </button>

          {/* Mobile menu items - only visible on mobile */}
          <div className="mobile-only-items">
            <button
              className="nav-link nav-scroll-link"
              onClick={() => handleSmoothScroll('services-section')}
            >
              <span>{t.nav.services}</span>
            </button>

            <div className="language-switcher">
              <button
                className="language-btn"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <div className="language-flag">
                  <span>{language === 'en' ? 'EN' : 'ES'}</span>
                </div>
                <span>{language === 'en' ? t.nav.english : t.nav.spanish}</span>
                <span className="chevron" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5L15 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {isLanguageOpen && (
                <div className="language-dropdown">
                  <div 
                    className={`language-option ${language === 'en' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    English
                  </div>
                  <div 
                    className={`language-option ${language === 'es' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('es')}
                  >
                    Español
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Center: Logo */}
        <div className="nav-center">
          <div className="logo">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/c0456d8bbbc4e627a852ee0e8821dccdb98970d0?width=244"
              alt="PCG Logo"
              width={60}
              height={60}
              priority
            />
          </div>
        </div>

        {/* Right side: Services and Language */}
        <div className="nav-right">
          <button
            className="nav-link nav-scroll-link"
            onClick={() => handleSmoothScroll('services-section')}
          >
            <span>{t.nav.services}</span>
          </button>

          {/* Language switcher */}
          <div className="language-switcher">
            <button
              className="language-btn"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <div className="language-flag">
                <span>{language === 'en' ? 'EN' : 'ES'}</span>
              </div>
              <span>{language === 'en' ? t.nav.english : t.nav.spanish}</span>
              <span className="chevron" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5L15 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            {isLanguageOpen && (
              <div className="language-dropdown">
                <div 
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </div>
                <div 
                  className={`language-option ${language === 'es' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('es')}
                >
                  Español
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .nav-container {
          position: fixed;
          top: 40px;
          left: 50%;
          width: auto;
          max-width: 800px;
          padding: 6px 16px;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transform: translateX(-50%) translateY(0);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 1;
          visibility: visible;
        }

        .nav-container.nav-visible {
          transform: translateX(-50%) translateY(0);
        }

        .nav-container.nav-hidden {
          transform: translateX(-50%) translateY(-120%);
        }

        .nav-content {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          margin: 0;
          padding: 0;
          gap: 16px;
          min-width: 0;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }

        .mobile-menu-btn span {
          width: 20px;
          height: 2px;
          background: var(--black);
          margin: 2px 0;
          transition: 0.3s;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 24px;
          transform: none;
          justify-content: flex-start;
        }

        .nav-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: flex-end;
        }


        .nav-link {
          display: flex;
          padding: 6px 20px;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          border: 1px solid #4B4949;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          background: var(--primary-orange);
          border-color: var(--primary-orange);
        }

        .nav-link:hover span {
          color: white;
        }

        .nav-link span {
          color: var(--black);
          font-family: var(--font-open-sans);
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          transition: color 0.3s ease;
        }

        .nav-scroll-link {
          font-family: inherit;
          padding: 6px 20px;
        }

        .language-switcher {
          position: relative;
        }

        .language-btn {
          display: flex;
          padding: 6px 16px;
          justify-content: center;
          align-items: center;
          gap: 5px;
          border-radius: 100px;
          border: 1px solid #4B4949;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .language-btn:hover {
          background: var(--primary-orange);
          border-color: var(--primary-orange);
        }

        .language-btn:hover span,
        .language-btn:hover .language-flag span {
          color: white;
        }

        .language-flag {
          display: inline-flex;
          padding: 1px 3px 1px 4px;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          border: 1px solid var(--black);
          width: 30px;
          height: 29px;
        }

        .language-flag span {
          color: var(--black);
          font-family: var(--font-open-sans);
          font-size: 14px;
          font-weight: 400;
          line-height: normal;
          transition: color 0.3s ease;
        }

        .language-btn > span {
          color: var(--black);
          font-family: var(--font-open-sans);
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          transition: color 0.3s ease;
        }

        .chevron {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--black);
          width: 16px;
          height: 16px;
          transition: color 0.3s ease;
        }

        .language-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #4B4949;
          border-radius: 12px;
          padding: 8px 0;
          margin-top: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 1002;
        }

        .language-option {
          padding: 8px 16px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .language-option:hover {
          background: #f5f5f5;
        }

        .language-option.active {
          background: #e8e8e8;
          font-weight: 600;
        }


        .logo {
          flex-shrink: 0;
        }

        .mobile-only-items {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }

          .nav-content {
            grid-template-columns: 1fr auto;
            gap: 16px;
          }

          .nav-left {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: white;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            z-index: 1000;
          }

          .nav-left.nav-items-open {
            transform: translateX(0);
          }

          .nav-center {
            grid-column: 2;
          }

          .nav-right {
            display: none;
          }

          .nav-left.nav-items-open .mobile-only-items {
            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: center;
          }

          .nav-link span {
            font-size: 20px;
          }

          .language-btn > span {
            font-size: 20px;
          }

          .nav-container {
            width: calc(100% - 40px);
            max-width: 600px;
            padding: 5px 14px;
            top: 32px;
          }

          .nav-content {
            padding: 0;
          }

          .logo img {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            width: calc(100% - 32px);
            max-width: 500px;
            padding: 4px 10px;
            top: 28px;
          }

          .nav-link {
            padding: 8px 30px;
          }

          .language-btn {
            padding: 8px 30px;
          }

          .nav-link span,
          .language-btn > span {
            font-size: 18px;
          }
        }
      `}</style>
    </nav>
  );
}
```

---

## Step 5: Update Hero Section Component
**File Location:** `app/components/HeroSection.tsx`

Replace the entire file with:

```typescript
'use client';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="hero-section">
      <div className="hero-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          poster="https://api.builder.io/api/v1/image/assets/TEMP/ef5d90ce328d45584bdfb79dcdb5ddfa44090e9e?width=3340"
        >
          <source
            src="https://cdn.builder.io/o/assets%2F701c6aa649cc4d0db8f75aa92ca32a88%2Fc42cf556fe04477abff0163c478a5a87?alt=media&token=0ae050f2-1f6c-4522-a049-f018e671d07d&apiKey=701c6aa649cc4d0db8f75aa92ca32a88"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
      </div>

      <div className="hero-text">
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t.hero.title }} />
        <p className="hero-description">
          {t.hero.description}
        </p>
        <button className="hero-cta-btn">
          <span>{t.hero.cta}</span>
          <div className="btn-glow"></div>
        </button>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          width: calc(100% - 2 * var(--page-padding));
          height: 100vh;
          min-height: 600px;
          max-height: 900px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 120px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          height: 100%;
          max-width: 1200px;
          padding-left: var(--page-padding);
          padding-right: var(--page-padding);
        }

        .hero-text {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 600px;
          color: white;
        }

        .hero-title {
          font-size: 64px;
          font-weight: 400;
          line-height: 1.2;
          margin: 0;
          color: white;
        }

        .hero-description {
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-cta-btn {
          margin-top: 16px;
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          background: var(--primary-orange);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
        }

        .hero-cta-btn:hover {
          background: #d97706;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(255, 107, 53, 0.4);
        }

        .btn-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: glow-pulse 1.5s ease-out infinite;
          pointer-events: none;
        }

        @keyframes glow-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 60vh;
            min-height: 450px;
            margin-top: 100px;
          }

          .hero-title {
            font-size: 40px;
          }

          .hero-description {
            font-size: 16px;
          }

          .hero-cta-btn {
            padding: 12px 28px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            height: 50vh;
            min-height: 350px;
            margin-top: 80px;
          }

          .hero-title {
            font-size: 28px;
          }

          .hero-description {
            font-size: 14px;
          }

          .hero-text {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
```

---

## Step 6: Update Process Section Component
**File Location:** `app/components/ProcessSection.tsx`

Update the component to use translations (replace the data and text references):

```typescript
'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function ProcessSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const processSteps = t.process.steps;

  return (
    <section id="process-section" className="process-section">
      <div className="container">
        <div className="process-header">
          <h2 className="process-title">{t.process.title}</h2>
          <p className="process-subtitle">
            {t.process.subtitle}
          </p>
        </div>

        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-image">
                <Image
                  src={[
                    "https://api.builder.io/api/v1/image/assets/TEMP/c9534831ad3921a74bf4d58466b8742783360484?width=722",
                    "https://api.builder.io/api/v1/image/assets/TEMP/a0052aeeccaef6bb464025d7cd6fbe6a3d8200d3?width=722",
                    "https://api.builder.io/api/v1/image/assets/TEMP/66ceb427bd3a65770d3aeeaad24020ce37b8b368?width=722"
                  ][index]}
                  alt={step.title}
                  width={361}
                  height={202}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-section {
          background: white;
          padding: 80px var(--page-padding);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .process-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .process-title {
          font-size: 48px;
          font-weight: 400;
          color: var(--black);
          margin: 0 0 20px 0;
        }

        .process-subtitle {
          font-size: 18px;
          color: var(--dark-gray);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .process-step {
          background: #f8f8f8;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .process-step:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
        }

        .step-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #e0e0e0;
        }

        .step-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .step-content {
          padding: 24px;
        }

        .step-title {
          font-size: 24px;
          font-weight: 600;
          color: var(--black);
          margin: 0 0 12px 0;
        }

        .step-description {
          font-size: 16px;
          color: var(--dark-gray);
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .process-section {
            padding: 60px var(--page-padding);
          }

          .process-title {
            font-size: 36px;
          }

          .process-subtitle {
            font-size: 16px;
          }

          .process-steps {
            gap: 30px;
          }
        }

        @media (max-width: 480px) {
          .process-section {
            padding: 40px var(--page-padding);
          }

          .process-title {
            font-size: 28px;
          }

          .step-title {
            font-size: 20px;
          }

          .step-description {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
```

---

## Step 7: Create the Directory Structure

```bash
# Create the context directory
mkdir -p app/context

# Create the data directory (if it doesn't exist)
mkdir -p app/data
```

---

## Testing Checklist

After implementation:
- [ ] Language switcher appears in navigation
- [ ] Clicking English/Español in dropdown changes the language
- [ ] Hero section title changes to Spanish
- [ ] Hero section description changes to Spanish
- [ ] Process section title and steps translate correctly
- [ ] Navigation links translate (Home → Inicio, About → Acerca de, etc.)
- [ ] Language persists when navigating between pages
- [ ] Mobile language switcher works correctly
- [ ] Desktop language switcher works correctly

---

## GitHub Workflow

### 1. Clone/Navigate to Repository
```bash
cd PCG
```

### 2. Create a New Branch
```bash
git checkout -b feature/language-switcher
```

### 3. Create the Files

Create `app/context/LanguageContext.tsx` with code from Step 1

Create `app/data/translations.ts` with code from Step 2

### 4. Update Existing Files

Update `app/layout.tsx` (Step 3)

Update `app/components/Navigation.tsx` (Step 4)

Update `app/components/HeroSection.tsx` (Step 5)

Update `app/components/ProcessSection.tsx` (Step 6)

### 5. Commit and Push

```bash
git add app/context/ app/data/ app/components/ app/layout.tsx
git commit -m "Add language switcher functionality (EN/ES)"
git push origin feature/language-switcher
```

### 6. Create Pull Request

Go to GitHub and create a PR for `feature/language-switcher` into your main branch.

---

## Next Steps (Optional)

To complete the translation of the entire site:
- Update remaining components (Services, Stats, Testimonials, FAQ, Footer, CTA)
- Follow the same pattern used in HeroSection and ProcessSection
- Import `useLanguage` hook and translations data
- Replace hardcoded text with `t.section.key` references
