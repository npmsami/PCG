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
      <div className="desktop-nav">
        <div className="desktop-left">
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
        </div>

        <div className="desktop-center">
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

        <div className="desktop-right">
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

      <div className="mobile-nav">
        <div className="mobile-topbar">
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
          <div className="mobile-logo">
            <div className="logo">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/c0456d8bbbc4e627a852ee0e8821dccdb98970d0?width=244"
                alt="PCG Logo"
                width={52}
                height={52}
                priority
              />
            </div>
          </div>
          <span className="mobile-spacer" aria-hidden="true" />
        </div>

        <div
          id="mobile-nav-panel"
          className={`mobile-drawer ${isMenuOpen ? 'mobile-drawer-open' : ''}${isLanguageOpen ? ' mobile-drawer-lang-open' : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="mobile-drawer-header">
            <span>{t('NAV_MAIN_MENU')}</span>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => {
                setIsMenuOpen(false);
                setIsLanguageOpen(false);
              }}
              aria-label={t('NAV_CLOSE_MENU')}
            >
              <span />
              <span />
            </button>
          </div>

          <button type="button" className="mobile-nav-link" onClick={handleNavigateHome}>
            <span>{t('NAV_HOME')}</span>
          </button>
          <button
            type="button"
            className="mobile-nav-link"
            onClick={() => handleSmoothScroll('process-section')}
          >
            <span>{t('NAV_ABOUT')}</span>
          </button>
          <button
            type="button"
            className="mobile-nav-link"
            onClick={() => handleSmoothScroll('services-section')}
          >
            <span>{t('NAV_SERVICES')}</span>
          </button>

          <div className="mobile-language-wrap">
            <LanguageSwitcher
              ref={languageSwitcherMobileRef}
              variant="drawer"
              isOpen={isLanguageOpen}
              onToggle={() => setIsLanguageOpen(!isLanguageOpen)}
              onSelect={selectLanguage}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .nav-backdrop {
          position: fixed;
          inset: 0;
          z-index: 900;
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
          z-index: 1001;
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

        .desktop-nav {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          margin: 0;
          padding: 0;
          gap: 16px;
          min-width: 0;
          position: relative;
          z-index: 1002;
        }

        .desktop-left {
          display: flex;
          align-items: center;
          gap: 24px;
          justify-content: flex-start;
        }

        .desktop-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .desktop-right {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: flex-end;
          min-width: 0;
        }

        .desktop-right > * {
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

        .mobile-nav {
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
          z-index: 1003;
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

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-nav {
            display: block;
            position: relative;
            z-index: 1002;
            width: 100%;
            min-width: 0;
          }

          .mobile-topbar {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            min-height: 52px;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            padding: 6px 12px;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(255, 255, 255, 0.35);
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(12px);
          }

          .mobile-menu-btn {
            display: flex;
            flex: 0 0 44px;
          }

          .mobile-logo {
            flex: 1 1 auto;
            min-width: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
          }

          .mobile-logo .logo img {
            width: 50px;
            height: 50px;
          }

          .mobile-spacer {
            flex: 0 0 44px;
            width: 44px;
            height: 44px;
            visibility: hidden;
            pointer-events: none;
          }

          .mobile-drawer {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: min(320px, calc(100vw - 16px));
            max-width: calc(100vw - 16px);
            box-sizing: border-box;
            z-index: 1004;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            padding: max(16px, env(safe-area-inset-top, 0px)) 16px
              max(16px, env(safe-area-inset-bottom, 0px));
            padding-left: max(16px, env(safe-area-inset-left, 0px));
            padding-right: max(16px, env(safe-area-inset-right, 0px));
            background: #fff;
            transform: translate3d(-105%, 0, 0);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-y: auto;
            overflow-x: hidden;
            overscroll-behavior: contain;
            pointer-events: none;
            box-shadow: 8px 0 40px rgba(0, 0, 0, 0.12);
            border-radius: 0 16px 16px 0;
          }

          .mobile-drawer.mobile-drawer-lang-open {
            overflow-x: visible;
          }

          .mobile-drawer.mobile-drawer-open {
            transform: translate3d(0, 0, 0);
            pointer-events: auto;
          }

          .mobile-drawer-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 4px 0 12px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            margin-bottom: 4px;
          }

          .mobile-drawer-header span {
            font-family: var(--font-open-sans);
            font-size: 16px;
            font-weight: 600;
            color: var(--black);
          }

          .mobile-close-btn {
            position: relative;
            width: 40px;
            height: 40px;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 10px;
            background: #fff;
            cursor: pointer;
            flex-shrink: 0;
          }

          .mobile-close-btn span {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 18px;
            height: 2px;
            background: var(--black);
            transform-origin: center;
          }

          .mobile-close-btn span:first-child {
            transform: translate(-50%, -50%) rotate(45deg);
          }

          .mobile-close-btn span:last-child {
            transform: translate(-50%, -50%) rotate(-45deg);
          }

          .mobile-nav-link {
            display: flex;
            width: 100%;
            max-width: 360px;
            margin: 0;
            justify-content: center;
            min-height: 48px;
            padding: 10px 16px;
            border-radius: 12px;
            border: 1px solid #d5d5d5;
            background: #fff;
            cursor: pointer;
            transition: background 0.2s ease, border-color 0.2s ease;
          }

          .mobile-nav-link:hover {
            background: rgba(247, 148, 29, 0.1);
            border-color: var(--primary-orange);
          }

          .mobile-nav-link span {
            color: var(--black);
            font-family: var(--font-open-sans);
            font-size: 17px;
            font-weight: 500;
            line-height: normal;
          }

          .mobile-language-wrap {
            margin-top: 2px;
            padding-top: 14px;
            border-top: 1px solid rgba(0, 0, 0, 0.08);
          }

          .nav-container {
            left: 0;
            right: 0;
            margin: 0 auto;
            transform: none;
            width: calc(100% - 24px);
            max-width: min(600px, calc(100% - 24px));
            top: max(16px, env(safe-area-inset-top, 0px));
            padding: 0;
            box-sizing: border-box;
            overflow: visible;
            border-radius: 0;
            border: none;
            background: transparent;
            box-shadow: none;
            backdrop-filter: none;
            isolation: auto;
          }

          .nav-container.nav-visible {
            transform: none;
          }

          .nav-container.nav-hidden {
            transform: none;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            width: calc(100% - 16px);
            max-width: min(500px, calc(100% - 16px));
            top: max(12px, env(safe-area-inset-top, 0px));
            padding: 0;
          }

          .mobile-topbar {
            border-radius: 16px;
          }

          .mobile-drawer {
            width: min(304px, calc(100vw - 12px));
            max-width: calc(100vw - 12px);
          }

          .mobile-nav-link {
            min-height: 46px;
            padding: 8px 14px;
          }

          .mobile-nav-link span {
            font-size: 16px;
          }
        }
      `}</style>
    </nav>
  );
}
