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
        </div>

        {/* Center: Logo */}
        <div className="nav-center">
          <div className="logo">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/c0456d8bbbc4e627a852ee0e8821dccdb98970d0?width=244"
              alt="PCG Logo"
              width={80}
              height={80}
              priority
            />
          </div>
        </div>

        {/* Right side: Services, Language and Phone button */}
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

          {/* Phone button */}
          <button className="phone-btn">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.5 27.3V30.55C32.5 31.15 32.3 31.7 31.95 32.15C31.6 32.6 31.1 32.85 30.55 32.85H28.75C25.25 32.85 21.9 31.55 19.25 29.25C16.6 26.95 14.75 23.75 14.1 20.3L13.95 19.5H13.15C12.55 19.5 12 19.3 11.55 18.95C11.1 18.6 10.85 18.1 10.85 17.5V14.25C10.85 13.65 11.05 13.1 11.4 12.65C11.75 12.2 12.25 11.95 12.85 11.95H16.1C16.7 11.95 17.25 12.15 17.7 12.5C18.15 12.85 18.4 13.35 18.4 13.95V17.2L21.1 18.7C21.85 19.05 22.65 19.25 23.5 19.25C24.35 19.25 25.15 19.05 25.9 18.7L28.6 17.2V13.95C28.6 13.35 28.85 12.85 29.3 12.5C29.75 12.15 30.3 11.95 30.9 11.95H34.15C34.75 11.95 35.25 12.15 35.6 12.5C35.95 12.85 36.15 13.35 36.15 13.95V17.2C36.15 20.7 34.85 24.05 32.55 26.7C32.55 27 32.5 27.15 32.5 27.3Z" fill="white"/>
            </svg>
          </button>
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
          padding: 12px 24px;
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
          flex-shrink: 0;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .nav-items {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-link {
          display: flex;
          padding: 8px 24px;
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
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
          transition: color 0.3s ease;
        }

        .language-switcher {
          position: relative;
        }

        .language-btn {
          display: flex;
          padding: 8px 20px;
          justify-content: center;
          align-items: center;
          gap: 6px;
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
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          transition: color 0.3s ease;
        }

        .language-btn > span {
          color: var(--black);
          font-family: var(--font-open-sans);
          font-size: 18px;
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

        .phone-btn {
          display: flex;
          padding: 5px 8px;
          align-items: center;
          gap: 10px;
          border-radius: 100px;
          border: 1px solid #302F2F;
          background: var(--black);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .phone-btn:hover {
          background: var(--primary-orange);
          border-color: var(--primary-orange);
          transform: translateY(-2px);
        }

        .logo {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
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

          .nav-items {
            flex-direction: column;
            gap: 30px;
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
            padding: 10px 20px;
          }

          .nav-content {
            padding: 0;
          }

          .logo img {
            width: 80px;
            height: 80px;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            width: calc(100% - 32px);
            max-width: 500px;
            padding: 8px 16px;
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
