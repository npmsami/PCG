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

  // Initialize scroll position and set up scroll handler
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
          aria-label="Toggle menu"
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
                aria-expanded={isLanguageOpen}
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
                  <button
                    className={`language-option ${language === 'en' ? 'language-option-active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    English
                  </button>
                  <button
                    className={`language-option ${language === 'es' ? 'language-option-active' : ''}`}
                    onClick={() => handleLanguageChange('es')}
                  >
                    Español
                  </button>
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
              aria-expanded={isLanguageOpen}
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
                <button
                  className={`language-option ${language === 'en' ? 'language-option-active' : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </button>
                <button
                  className={`language-option ${language === 'es' ? 'language-option-active' : ''}`}
                  onClick={() => handleLanguageChange('es')}
                >
                  Español
                </button>
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
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          font-family: var(--font-open-sans);
          font-size: 14px;
          color: var(--black);
        }

        .language-option:hover {
          background: #f5f5f5;
        }

        .language-option-active {
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
