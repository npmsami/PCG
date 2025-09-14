'use client';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Protect Your Home Today</h2>
          <p className="cta-subtitle">
            Ensure your roof is safe and secure with our expert services—insurance pays for it!
          </p>
          <button className="cta-button">
            <span>Book a Call</span>
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
          width: 177px;
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
            width: 100%;
            max-width: 200px;
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
