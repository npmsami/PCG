'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../i18n/messages';
import { LanguageSwitcher } from './LanguageSwitcher';

export default function Navigation() {
  const router = useRouter();
  const { setLanguage, t } = useLanguage();
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
      if (window.innerWidth <= 768) {
        setLastScrollY(currentScrollY);
        setIsNavVisible(true);
        return;
      }
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

  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsLanguageOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
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

  return (
    <nav className={`nav-container ${dynamicClass}`.trim()} aria-label={t('NAV_MAIN_MENU')}>
      {isMenuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label={t('NAV_CLOSE_MENU')}
          onClick={() => {
            setIsMenuOpen(false);
            setIsLanguageOpen(false);
          }}
        />
      )}
      <div className="nav-content">
        <div
          id="mobile-nav-panel"
          className={`nav-left ${isMenuOpen ? 'nav-items-open' : ''}${isLanguageOpen ? ' nav-left-lang-open' : ''}`}
          aria-hidden={!isMenuOpen}
        >
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
            <LanguageSwitcher
              ref={languageSwitcherMobileRef}
              variant="drawer"
              isOpen={isLanguageOpen}
              onToggle={() => setIsLanguageOpen(!isLanguageOpen)}
              onSelect={selectLanguage}
            />
          </div>
        </div>

        <button
          type="button"
          className={`mobile-menu-btn${isMenuOpen ? ' mobile-menu-btn-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMenuOpen ? t('NAV_CLOSE_MENU') : t('NAV_OPEN_MENU')}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-center">
          <div className="logo">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/c0456d8bbbc4e627a852ee0e8821dccdb98970d0?width=244"
              alt="PCG Contractors"
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
          <LanguageSwitcher
            ref={languageSwitcherDesktopRef}
            isOpen={isLanguageOpen}
            onToggle={() => setIsLanguageOpen(!isLanguageOpen)}
            onSelect={selectLanguage}
          />
        </div>
      </div>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .nav-backdrop {
          position: fixed;
          inset: 0;
          z-index: 40;
          margin: 0;
          padding: 0;
          border: none;
          border-radius: 0;
          background: rgba(0, 0, 0, 0.45);
          cursor: pointer;
          animation: navBackdropIn 0.2s ease;
        }

        @keyframes navBackdropIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
          isolation: isolate;
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
          position: relative;
          z-index: 50;
        }

        .nav-content::after {
          content: none;
          display: none;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          background: none;
          border-radius: 12px;
          cursor: pointer;
          z-index: 3;
          position: relative;
          flex-shrink: 0;
        }

        .mobile-menu-btn span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--black);
          margin: 3px 0;
          transition: transform 0.25s ease, opacity 0.2s ease;
          transform-origin: center;
        }

        .mobile-menu-btn-open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .mobile-menu-btn-open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .mobile-menu-btn-open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
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

        .nav-right > * {
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

        .logo {
          flex-shrink: 0;
        }

        .logo img {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }

        .mobile-only-items {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            order: 1;
            flex: 0 0 44px;
            z-index: 60;
          }

          .nav-content {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            min-height: 52px;
            padding: 4px 2px;
            overflow: visible;
            z-index: 50;
          }

          .nav-content::after {
            content: '';
            display: block;
            order: 3;
            flex: 0 0 44px;
            width: 44px;
            height: 1px;
            visibility: hidden;
            pointer-events: none;
            flex-shrink: 0;
          }

          .nav-center {
            order: 2;
            flex: 1 1 auto;
            min-width: 0;
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            display: flex;
            justify-content: center;
            align-items: center;
            width: auto;
            max-width: 100%;
            pointer-events: auto;
            z-index: 55;
          }

          .nav-left {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: min(320px, calc(100vw - 16px));
            max-width: calc(100vw - 16px);
            right: auto;
            z-index: 45;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            gap: 12px;
            padding: max(16px, env(safe-area-inset-top, 0px)) 20px
              max(16px, env(safe-area-inset-bottom, 0px));
            padding-left: max(20px, env(safe-area-inset-left, 0px));
            padding-right: max(20px, env(safe-area-inset-right, 0px));
            background: #fff;
            transform: translate3d(-105%, 0, 0);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-x: hidden;
            overflow-y: auto;
            overscroll-behavior: contain;
            pointer-events: none;
            box-shadow: 8px 0 40px rgba(0, 0, 0, 0.12);
            border-radius: 0 16px 16px 0;
          }

          .nav-left.nav-left-lang-open {
            overflow-y: visible;
            overflow-x: visible;
          }

          .nav-left.nav-items-open {
            transform: translate3d(0, 0, 0);
            pointer-events: auto;
          }

          .nav-right {
            display: none;
          }

          .nav-left .nav-link {
            width: 100%;
            max-width: 360px;
            margin-left: auto;
            margin-right: auto;
            justify-content: center;
            min-height: 48px;
            padding: 10px 20px;
          }

          .nav-left.nav-items-open .mobile-only-items {
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
            width: 100%;
            max-width: 360px;
            margin: 8px auto 0;
            padding-top: 16px;
            border-top: 1px solid rgba(0, 0, 0, 0.08);
          }

          .nav-link span {
            font-size: 18px;
          }

          .nav-container {
            left: 50%;
            transform: translateX(-50%) translateY(0);
            width: calc(100% - 24px);
            max-width: min(600px, calc(100% - 24px));
            top: max(16px, env(safe-area-inset-top, 0px));
            padding: 6px 12px;
            box-sizing: border-box;
            overflow: visible;
          }

          .nav-container.nav-visible {
            transform: translateX(-50%) translateY(0);
          }

          .nav-container.nav-hidden {
            transform: translateX(-50%) translateY(-120%);
          }

          .logo img {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            width: calc(100% - 16px);
            max-width: min(500px, calc(100% - 16px));
            top: max(12px, env(safe-area-inset-top, 0px));
            padding: 5px 10px;
          }

          .nav-left .nav-link {
            min-height: 46px;
            padding: 8px 18px;
          }

          .nav-link span {
            font-size: 17px;
          }

          .logo img {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </nav>
  );
}
