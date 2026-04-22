'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function ProcessSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const processSteps = t.process.steps;

  const stepImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/c9534831ad3921a74bf4d58466b8742783360484?width=722",
    "https://api.builder.io/api/v1/image/assets/TEMP/a0052aeeccaef6bb464025d7cd6fbe6a3d8200d3?width=722",
    "https://api.builder.io/api/v1/image/assets/TEMP/66ceb427bd3a65770d3aeeaad24020ce37b8b368?width=722"
  ];

  return (
    <section id="process-section" className="process-section">
      <div className="container">
        <div className="process-header">
          <h2 className="process-title">{t.process.title}</h2>
          <p className="process-subtitle">
            {t.process.subtitle}
          </p>
        </div>

        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-image">
                <Image
                  src={stepImages[index]}
                  alt={step.title}
                  width={361}
                  height={202}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-section {
          background: white;
          padding: 80px var(--page-padding);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .process-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .process-title {
          font-size: 48px;
          font-weight: 400;
          color: var(--black);
          margin: 0 0 20px 0;
        }

        .process-subtitle {
          font-size: 18px;
          color: var(--dark-gray);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .process-step {
          background: #f8f8f8;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .process-step:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
        }

        .step-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #e0e0e0;
        }

        .step-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .step-content {
          padding: 24px;
        }

        .step-title {
          font-size: 24px;
          font-weight: 600;
          color: var(--black);
          margin: 0 0 12px 0;
        }

        .step-description {
          font-size: 16px;
          color: var(--dark-gray);
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .process-section {
            padding: 60px var(--page-padding);
          }

          .process-title {
            font-size: 36px;
          }

          .process-subtitle {
            font-size: 16px;
          }

          .process-steps {
            gap: 30px;
          }
        }

        @media (max-width: 480px) {
          .process-section {
            padding: 40px var(--page-padding);
          }

          .process-title {
            font-size: 28px;
          }

          .step-title {
            font-size: 20px;
          }

          .step-description {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
