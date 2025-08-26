'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/ef5d90ce328d45584bdfb79dcdb5ddfa44090e9e?width=3340"
          alt="Roofing professionals at work"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
      </div>

      <div className="hero-text">
        <h1 className="hero-title">
          Restore Your Roof<br />
          Restore Your Peace of Mind
        </h1>
        <p className="hero-description">
          Roof damage can be overwhelming, but it doesn't have to be. At PCG, we prioritize your family's safety by efficiently restoring your roof and managing the repair process.
        </p>
        <button className="hero-cta-btn">
          <span>Call Us Today</span>
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
          margin: 0 var(--page-padding);
          border-radius: var(--border-radius-medium);
          margin-top: 0;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.2) 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 64px;
        }

        .hero-text {
          position: absolute;
          left: 24px;
          bottom: 24px;
          max-width: 450px;
          z-index: 3;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-radius: var(--border-radius-medium);
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .hero-title {
          color: var(--black);
          font-family: var(--font-roboto);
          font-size: 36px;
          font-weight: 700;
          line-height: 120%;
          margin-bottom: 16px;
        }

        .hero-description {
          color: var(--black);
          font-family: var(--font-roboto);
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          margin-bottom: 24px;
          max-width: 100%;
        }

        .hero-cta-btn {
          position: relative;
          display: inline-flex;
          padding: 12px 28px;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          background: var(--primary-orange);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .hero-cta-btn span {
          position: relative;
          z-index: 2;
          color: var(--white);
          font-family: var(--font-open-sans);
          font-size: 18px;
          font-weight: 700;
          line-height: 111.66%;
        }

        .btn-glow {
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 74px;
          height: 74px;
          border-radius: 50%;
          background: var(--primary-orange);
          filter: blur(39.85px);
          z-index: 1;
        }

        .hero-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 9px 5px 25px rgba(224, 72, 38, 0.4);
        }

        .hero-cta-btn:hover .btn-glow {
          filter: blur(45px);
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 80vh;
            min-height: 500px;
            width: calc(100% - 40px);
            margin: 0 20px;
          }

          .hero-text {
            padding: 20px;
            max-width: 340px;
            left: 20px;
            bottom: 20px;
            border-radius: var(--border-radius-medium);
          }

          .hero-title {
            font-size: 28px;
            margin-bottom: 12px;
          }

          .hero-description {
            font-size: 14px;
            margin-bottom: 20px;
          }

          .hero-cta-btn {
            padding: 10px 24px;
          }

          .hero-cta-btn span {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            height: 70vh;
            min-height: 450px;
            width: calc(100% - 32px);
            margin: 0 16px;
          }

          .hero-text {
            padding: 16px;
            border-radius: var(--border-radius-medium);
            max-width: 280px;
            left: 16px;
            bottom: 0;
          }

          .hero-title {
            font-size: 24px;
            line-height: 110%;
            margin-bottom: 10px;
          }

          .hero-description {
            font-size: 12px;
            margin-bottom: 16px;
          }

          .hero-cta-btn {
            padding: 8px 20px;
          }

          .hero-cta-btn span {
            font-size: 18px;
          }

          .btn-glow {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
}
