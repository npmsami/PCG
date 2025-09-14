'use client';

import React from 'react';

interface InfoBoxProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
}) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <div className="info-box">
      <h2 className="info-title">
        {title}
        {subtitle && <span className="info-subtitle">{subtitle}</span>}
      </h2>
      <p className="info-description">{description}</p>
      <button className="info-cta-button" onClick={handleCtaClick}>
        {ctaText}
      </button>

      <style jsx>{`
        .info-box {
          background-color: rgba(233, 233, 233, 0.95);
          border-radius: 25px;
          padding: 28px;
          width: calc(100% - 40px);
          max-width: 420px;
          margin: 0 auto;
        }

        .info-title {
          font-family: var(--font-roboto);
          font-weight: 700;
          font-size: 28px;
          line-height: 1.2;
          color: var(--black);
          margin-bottom: 16px;
        }

        .info-subtitle {
          display: block;
        }

        .info-description {
          font-family: var(--font-roboto);
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 24px;
          color: var(--black);
        }

        .info-cta-button {
          background-color: var(--primary-orange);
          color: white;
          font-family: var(--font-open-sans);
          font-weight: 700;
          font-size: 18px;
          padding: 12px 32px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .info-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 390px) {
          .info-box {
            padding: 20px;
            width: calc(100% - 32px);
          }
          
          .info-title {
            font-size: 24px;
          }
          
          .info-description {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default InfoBox;
