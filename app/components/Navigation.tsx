'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="nav-container">
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
          <div className="nav-link">
            <span>Home</span>
          </div>
          <div className="nav-link">
            <span>About</span>
          </div>

          {/* Mobile menu items - only visible on mobile */}
          <div className="mobile-only-items">
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
          <div className="nav-link">
            <span>Services</span>
          </div>

          {/* Language switcher */}
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

      <style jsx>{`
        .nav-container {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
          max-width: 800px;
          padding: 8px 20px;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .nav-content {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          margin: 0;
          padding: 0;
          gap: 24px;
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
            padding: 6px 16px;
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
            padding: 5px 12px;
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
