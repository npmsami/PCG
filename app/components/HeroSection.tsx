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
