'use client';

import { useLanguage } from '../context/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{t('CTA_BAND_TITLE')}</h2>
          <blockquote className="cta-subtitle">{t('CTA_BAND_SUB')}</blockquote>
          <div className="cta-nap" aria-label="Business contact details">
            <p><strong>PCG Contractors</strong> | San Antonio, Texas service area</p>
            <p>Phone: +1 (956) 206-2004</p>
            <p>Business Hours: 8am to 9pm, 7 days a week</p>
          </div>
          <button
            type="button"
            className="cta-button"
            data-cal-link="pcg-roofing-mydefr/inspection"
            data-cal-namespace="inspection"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            <span>{t('CTA_BAND_BTN')}</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background: var(--primary-orange);
          padding: var(--section-padding) 0;
          border-radius: var(--border-radius-medium);
          margin: 40px var(--page-padding) 0;
        }

        .cta-content {
          max-width: 768px;
        }

        .cta-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 48px;
          font-weight: 700;
          line-height: 120%;
          margin-bottom: 24px;
        }

        .cta-subtitle {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 18px;
          font-weight: 400;
          line-height: 150%;
          margin-bottom: 32px;
        }

        .cta-button {
          display: inline-flex;
          width: auto;
          min-width: 177px;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 47px;
          border: 1px solid var(--black);
          background: var(--black);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-nap {
          margin-bottom: 24px;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cta-nap p {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 14px;
          line-height: 1.45;
          margin: 0 0 4px;
        }

        .cta-button:hover {
          background: #333;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .cta-button span {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
        }

        @media (max-width: 768px) {
          .cta-section {
            margin: 40px 20px 0;
            padding: 60px 0;
          }

          .cta-title {
            font-size: 32px;
          }

          .cta-subtitle {
            font-size: 16px;
          }

          .cta-button {
            width: auto;
            min-width: 177px;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .cta-title {
            font-size: 24px;
          }

          .cta-subtitle {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
