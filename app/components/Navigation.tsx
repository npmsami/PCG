'use client';

import { useState, useEffect, useRef, useCallback, type RefObject } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../i18n/messages';

export default function Navigation() {
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const languageSwitcherDesktopRef = useRef<HTMLDivElement>(null);
  const languageSwitcherMobileRef = useRef<HTMLDivElement>(null);
  const scrollThreshold = 10;
  const hideDelay = 2000;

  const selectLanguage = useCallback(
    (lang: Language) => {
      setLanguage(lang);
      setIsLanguageOpen(false);
    },
    [setLanguage]
  );

  useEffect(() => {
    if (!isLanguageOpen) return;
    const handlePointerDown = (event: MouseEvent | PointerEvent) => {
      const target = event.target as Node;
      if (
        languageSwitcherDesktopRef.current?.contains(target) ||
        languageSwitcherMobileRef.current?.contains(target)
      ) {
        return;
      }
      setIsLanguageOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isLanguageOpen]);

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

  const dynamicClass = isNavVisible ? 'nav-visible' : 'nav-hidden';
  const langCode = language === 'en' ? 'EN' : 'ES';
  const langLabel =
    language === 'en'
      ? t('LANG_OPTION_ENGLISH')
      : t('LANG_OPTION_SPANISH');

  const renderLanguageSwitcher = (ref: RefObject<HTMLDivElement | null>) => (
    <div className="language-switcher" ref={ref}>
      <button
        type="button"
        className={`language-btn${isLanguageOpen ? ' language-btn-open' : ''}`}
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        aria-expanded={isLanguageOpen}
        aria-haspopup="listbox"
        aria-label={`${t('LANG_MENU_ARIA')}: ${langLabel}`}
      >
        <span className="language-code" aria-hidden="true">
          {langCode}
        </span>
        <span className="language-name">{langLabel}</span>
        <span className="language-chevron" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {isLanguageOpen && (
        <div
          className="language-dropdown"
          role="listbox"
          aria-label={t('LANG_MENU_ARIA')}
        >
          <button
            type="button"
            role="option"
            aria-selected={language === 'en'}
            className={`language-option${language === 'en' ? ' active' : ''}`}
            onClick={() => selectLanguage('en')}
          >
            <span className="language-option-check" aria-hidden="true">
              {language === 'en' ? '✓' : ''}
            </span>
            <span className="language-option-label">{t('LANG_OPTION_ENGLISH')}</span>
          </button>
          <button
            type="button"
            role="option"
            aria-selected={language === 'es'}
            className={`language-option${language === 'es' ? ' active' : ''}`}
            onClick={() => selectLanguage('es')}
          >
            <span className="language-option-check" aria-hidden="true">
              {language === 'es' ? '✓' : ''}
            </span>
            <span className="language-option-label">{t('LANG_OPTION_SPANISH')}</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <nav className={`nav-container ${dynamicClass}`.trim()}>
      <div className="nav-content">
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-left ${isMenuOpen ? 'nav-items-open' : ''}`}>
          <button
            type="button"
            className="nav-link nav-scroll-link"
            onClick={handleNavigateHome}
          >
            <span>{t('NAV_HOME')}</span>
          </button>
          <button
            type="button"
            className="nav-link nav-scroll-link"
            onClick={() => handleSmoothScroll('process-section')}
          >
            <span>{t('NAV_ABOUT')}</span>
          </button>

          <div className="mobile-only-items">
            <button
              type="button"
              className="nav-link nav-scroll-link"
              onClick={() => handleSmoothScroll('services-section')}
            >
              <span>{t('NAV_SERVICES')}</span>
            </button>
            {renderLanguageSwitcher(languageSwitcherMobileRef)}
          </div>
        </div>

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

        <div className="nav-right">
          <button
            type="button"
            className="nav-link nav-scroll-link"
            onClick={() => handleSmoothScroll('services-section')}
          >
            <span>{t('NAV_SERVICES')}</span>
          </button>
          {renderLanguageSwitcher(languageSwitcherDesktopRef)}
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
          min-width: 0;
        }

        .nav-right .language-switcher {
          flex-shrink: 0;
        }

        .nav-link {
          display: flex;
          padding: 6px 20px;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          border: 1px solid #4b4949;
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
          flex-shrink: 0;
          z-index: 1003;
        }

        .language-btn {
          display: inline-flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 6px 14px 6px 10px;
          border-radius: 100px;
          border: 1px solid #4b4949;
          background: rgba(255, 255, 255, 0.65);
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          white-space: nowrap;
          max-width: none;
        }

        .language-btn:hover,
        .language-btn.language-btn-open {
          background: var(--primary-orange);
          border-color: var(--primary-orange);
          box-shadow: 0 4px 14px rgba(224, 72, 38, 0.25);
        }

        .language-btn:hover .language-code,
        .language-btn:hover .language-name,
        .language-btn:hover .language-chevron,
        .language-btn.language-btn-open .language-code,
        .language-btn.language-btn-open .language-name,
        .language-btn.language-btn-open .language-chevron {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.85);
        }

        .language-code {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 30px;
          height: 26px;
          padding: 0 6px;
          border-radius: 8px;
          border: 1px solid var(--black);
          font-family: var(--font-open-sans);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
          line-height: 1;
          color: var(--black);
          flex-shrink: 0;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .language-name {
          font-family: var(--font-open-sans);
          font-size: 15px;
          font-weight: 500;
          line-height: 1.2;
          color: var(--black);
          flex-shrink: 0;
          transition: color 0.2s ease;
        }

        .language-chevron {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--black);
          flex-shrink: 0;
          margin-left: -2px;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .language-chevron svg {
          display: block;
        }

        .language-btn.language-btn-open .language-chevron {
          transform: rotate(180deg);
        }

        .language-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          right: auto;
          transform: translateX(-50%);
          min-width: calc(100% + 12px);
          width: max-content;
          max-width: min(260px, calc(100vw - 48px));
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 6px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(75, 73, 73, 0.35);
          border-radius: 16px;
          box-shadow:
            0 12px 32px rgba(0, 0, 0, 0.12),
            0 4px 12px rgba(0, 0, 0, 0.06);
          z-index: 1004;
          overflow: hidden;
        }

        .language-option {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          width: 100%;
          box-sizing: border-box;
          text-align: left;
          padding: 10px 12px;
          margin: 0;
          border: none;
          border-radius: 12px;
          background: transparent;
          cursor: pointer;
          font-family: var(--font-open-sans);
          font-size: 15px;
          font-weight: 500;
          line-height: 1.25;
          color: var(--black);
          transition: background 0.15s ease, color 0.15s ease;
        }

        .language-option-check {
          flex: 0 0 1.25rem;
          width: 1.25rem;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          color: var(--primary-orange);
        }

        .language-option-label {
          flex: 1 1 auto;
          min-width: 0;
        }

        .language-option:hover {
          background: rgba(224, 72, 38, 0.08);
        }

        .language-option.active {
          background: rgba(224, 72, 38, 0.12);
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

          .language-name {
            font-size: 18px;
          }

          .language-code {
            font-size: 13px;
            min-width: 32px;
            height: 28px;
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

          .nav-link span {
            font-size: 18px;
          }

          .language-name {
            font-size: 17px;
          }
        }
      `}</style>
    </nav>
  );
}
