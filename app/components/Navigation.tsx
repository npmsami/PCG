'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollThreshold = 10; // Minimum scroll distance to trigger hide/show
  const hideDelay = 2000; // 2 seconds delay before hiding

  // Handle component mounting for hydration
  useEffect(() => {
    setIsMounted(true);
    setLastScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    // Only run scroll logic after component has mounted (hydrated)
    if (!isMounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      // Only trigger if scroll difference is significant enough
      if (scrollDifference < scrollThreshold) return;

      // Clear any existing timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar after delay
        setIsNavVisible(true); // Show immediately while scrolling
        hideTimeoutRef.current = setTimeout(() => {
          setIsNavVisible(false);
        }, hideDelay);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar immediately
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [lastScrollY, isMounted]);

  // Keep navbar visible when menu is open and add body class
  useEffect(() => {
    if (isMenuOpen) {
      setIsNavVisible(true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      // Add class to body to prevent scrolling and apply dimming
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Build dynamic class name only after mounting
  const dynamicClass = isMounted
    ? (isNavVisible ? 'nav-visible' : 'nav-hidden')
    : '';

  return (
    <nav
      className={`nav-container ${dynamicClass}`.trim()}
      suppressHydrationWarning={true}
    >
      <div className="nav-content">
        {/* Logo */}
        <div className="logo">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/c0456d8bbbc4e627a852ee0e8821dccdb98970d0?width=244"
            alt="PCG Logo"
            width={60}
            height={60}
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <div className="nav-links">
            <div className="nav-link">
              <span>Home</span>
            </div>
            <div className="nav-link">
              <span>About</span>
            </div>
            <div className="nav-link">
              <span>Services</span>
            </div>
          </div>

          <div className="language-switcher desktop-only">
            <button
              className="language-btn"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <div className="language-flag">
                <span>ES</span>
              </div>
              <span>Spanish</span>
              <span className="chevron">􀆊</span>
            </button>
            {isLanguageOpen && (
              <div className="language-dropdown">
                <div className="language-option">English</div>
                <div className="language-option">Español</div>
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
        
        {/* Background dimming handled by body.menu-open class */}

        {/* Mobile menu overlay */}
        <div 
          className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(false)}
        >
            <div 
              className="mobile-menu-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="nav-link">
                <span>Home</span>
              </div>
              <div className="nav-link">
                <span>About</span>
              </div>
              <div className="nav-link">
                <span>Services</span>
              </div>

              <div className="language-switcher">
                <button
                  className="language-btn"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                  <div className="language-flag">
                    <span>ES</span>
                  </div>
                  <span>Spanish</span>
                  <span className="chevron">􀆊</span>
                </button>
                {isLanguageOpen && (
                  <div className="language-dropdown">
                    <div className="language-option">English</div>
                    <div className="language-option">Español</div>
                  </div>
                )}
              </div>
            </div>
        </div>
      </div>

      <style jsx>{`
        .nav-container {
          position: fixed;
          top: 40px;
          left: 50%;
          width: auto;
          max-width: 800px;
          padding: 6px 16px;
          z-index: 1050;
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
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .logo {
          flex-shrink: 0;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nav-links {
          display: flex;
          gap: 12px;
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
          transform: rotate(90deg);
          color: var(--black);
          font-family: 'SF Pro', -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 15px;
          font-weight: 590;
          line-height: 20px;
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

        /* Mobile menu button (hidden on desktop) */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 36px;
          height: 24px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1060;
          position: relative;
          padding: 0;
        }

        .mobile-menu-btn span {
          display: block;
          width: 24px;
          height: 2px;
          background-color: var(--black);
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn.open span:nth-child(1) {
          transform: translateY(11px) rotate(45deg);
        }

        .mobile-menu-btn.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.open span:nth-child(3) {
          transform: translateY(-11px) rotate(-45deg);
        }

        /* Mobile menu (hidden by default) */
        /* Background dimming handled by global body.menu-open class */
        
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 100px;
          z-index: 1050;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .mobile-menu.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: 22px;
          align-items: center;
          padding: 35px 35px;
          background: white;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          min-width: 320px;
          position: relative;
          z-index: 1050; /* Highest z-index to appear above overlay */
        }
        
        /* No close button needed anymore */

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .nav-container {
            width: calc(100% - 30px);
            max-width: 380px;
            padding: 6px 12px;
            top: 32px;
          }

          .nav-content {
            justify-content: space-between;
          }

          .logo img {
            width: 40px;
            height: 40px;
          }

          .mobile-menu {
            padding-top: 90px;
          }

          .mobile-menu .nav-link {
            border-color: rgba(75, 73, 73, 0.8);
            border-width: 1.5px;
            min-width: 300px;
            text-align: center;
            margin: 6px 0;
            padding: 14px 20px;
          }

          .mobile-menu .nav-link span {
            font-size: 22px;
            font-weight: 500;
          }

          .mobile-menu .language-btn {
            border-color: rgba(75, 73, 73, 0.8);
            border-width: 1.5px;
            min-width: 300px;
            padding: 14px 20px;
          }
          
          .mobile-menu-content .language-dropdown {
            width: 300px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            width: calc(100% - 24px);
            max-width: 360px;
            padding: 4px 10px;
            top: 28px;
            border-radius: 40px;
          }
          
          .logo img {
            width: 36px;
            height: 36px;
          }
          
          .mobile-menu {
            padding-top: 75px;
          }
          
          .mobile-menu-content {
            padding: 30px 25px;
            min-width: 300px;
          }
          
          .mobile-menu .nav-link,
          .mobile-menu .language-btn {
            min-width: 280px;
            padding: 12px 20px;
          }
          
          .mobile-menu .nav-link span {
            font-size: 20px;
          }
          
          .mobile-menu-content .language-dropdown {
            width: 280px;
          }
        }
      `}</style>
    </nav>
  );
}