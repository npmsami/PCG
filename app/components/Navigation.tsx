'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import './Navigation.css';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const hideTimeoutRef = useRef(null);
  const scrollThreshold = 10;
  const hideDelay = 2000;
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    setIsMounted(true);
    setLastScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

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
  }, [lastScrollY, isMounted]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsNavVisible(true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const dynamicClass = isMounted
    ? (isNavVisible ? 'nav-visible' : 'nav-hidden')
    : '';

  return (
    <div className={`nav-container ${dynamicClass}`.trim()}>
      <div className="nav-content">
        {/* Logo */}
        <div className="logo">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/c0456d8bbbc4e627a852ee0e8821dccdb98970d0?width=244"
            alt="PCG Logo"
            width={65}
            height={65}
            className="logo-image"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav center-nav">
          <div className="nav-links">
            <div className="nav-link" onClick={() => scrollToSection('hero-section')}>
              <span>{t('nav.home')}</span>
            </div>
            <div className="nav-link" onClick={() => scrollToSection('process-section')}>
              <span>{t('nav.about')}</span>
            </div>
            <div className="nav-link" onClick={() => scrollToSection('services-section')}>
              <span>{t('nav.services')}</span>
            </div>
            <div className="nav-link" onClick={() => scrollToSection('testimonials-section')}>
              <span>{t('nav.testimonials')}</span>
            </div>
            <div className="nav-link" onClick={() => scrollToSection('faq-section')}>
              <span>{t('nav.faq')}</span>
            </div>
          </div>
        </div>
        
        <div className="desktop-nav right-nav">
          <div className="language-switcher desktop-only">
            <button
              className="language-btn"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <div className="language-flag">
                <span>{language === 'en' ? 'EN' : 'ES'}</span>
              </div>
              <span>{language === 'en' ? t('language.english') : t('language.spanish')}</span>
              <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {isLanguageOpen && (
              <div className="language-dropdown">
                <div 
                  className={`language-option ${language === 'en' ? 'active' : ''}`} 
                  onClick={() => {
                    setLanguage('en');
                    setIsLanguageOpen(false);
                  }}
                >
                  {t('language.english')}
                </div>
                <div 
                  className={`language-option ${language === 'es' ? 'active' : ''}`}
                  onClick={() => {
                    setLanguage('es');
                    setIsLanguageOpen(false);
                  }}
                >
                  {t('language.spanish')}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Mobile menu overlay */}
        <div 
          className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nav-link" onClick={() => scrollToSection('hero-section')}>
              <span>{t('nav.home')}</span>
            </div>
            <div className="nav-link" onClick={() => scrollToSection('process-section')}>
              <span>{t('nav.about')}</span>
            </div>
            <div className="nav-link" onClick={() => scrollToSection('services-section')}>
              <span>{t('nav.services')}</span>
            </div>
            <div className="nav-link" onClick={() => scrollToSection('testimonials-section')}>
              <span>{t('nav.testimonials')}</span>
            </div>
            <div className="nav-link" onClick={() => scrollToSection('faq-section')}>
              <span>{t('nav.faq')}</span>
            </div>

            <div className="language-switcher">
              <button
                className="language-btn"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <div className="language-flag">
                  <span>{language === 'en' ? 'EN' : 'ES'}</span>
                </div>
                <span>{language === 'en' ? t('language.english') : t('language.spanish')}</span>
                <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {isLanguageOpen && (
                <div className="language-dropdown">
                  <div 
                    className={`language-option ${language === 'en' ? 'active' : ''}`}
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageOpen(false);
                    }}
                  >
                    {t('language.english')}
                  </div>
                  <div 
                    className={`language-option ${language === 'es' ? 'active' : ''}`}
                    onClick={() => {
                      setLanguage('es');
                      setIsLanguageOpen(false);
                    }}
                  >
                    {t('language.spanish')}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;