'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import CalendlyButton from './CalendlyButton';

export default function ProcessSection() {
  const { t } = useLanguage();
  const processSteps = [
    {
      id: 1,
      titleKey: "process.step1.title",
      descriptionKey: "process.step1.description",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/c9534831ad3921a74bf4d58466b8742783360484?width=722"
    },
    {
      id: 2,
      titleKey: "process.step2.title",
      descriptionKey: "process.step2.description",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/a0052aeeccaef6bb464025d7cd6fbe6a3d8200d3?width=722"
    },
    {
      id: 3,
      titleKey: "process.step3.title",
      descriptionKey: "process.step3.description",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/66ceb427bd3a65770d3aeeaad24020ce37b8b368?width=722"
    }
  ];

  return (
    <section id="process-section" className="process-section">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">{t('process.title')}</h2>
          <p className="process-subtitle">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.id} className="process-step">
              <div className="step-image">
                <Image
                  src={step.image}
                  alt={t(step.titleKey)}
                  width={361}
                  height={202}
                  style={{ objectFit: 'cover', maxWidth: '100%' }}
                  priority={step.id === 1}
                />
              </div>
              <div className="step-content">
                <h3 className="step-title">{t(step.titleKey)}</h3>
                <p className="step-description">{t(step.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-actions">
          <CalendlyButton 
            text="Book an Appointment" 
            className="book-appointment-btn"
          />
        </div>
      </div>

      <style jsx>{`
        .process-section {
          background: var(--primary-orange);
          padding: var(--section-padding) 0;
          border-radius: var(--border-radius-medium);
          margin: 40px var(--page-padding) 0;
          overflow: hidden;
        }

        .process-container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 var(--page-padding);
          width: 100%;
        }

        .process-header {
          max-width: 1280px;
          margin: 0 auto 80px;
          text-align: left;
        }

        .process-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 48px;
          font-weight: 700;
          line-height: 120%;
          margin-bottom: 32px;
          max-width: 800px;
        }

        .process-subtitle {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 25px;
          font-weight: 400;
          line-height: 150%;
          max-width: 1061px;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 48px;
          margin-bottom: 80px;
        }

        .process-step {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .step-image {
          width: 100%;
          max-width: 100%;
          height: 202px;
          border-radius: var(--border-radius-small);
          overflow: hidden;
          position: relative;
        }

        .step-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          max-width: 100%;
        }

        .step-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .step-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 32px;
          font-weight: 700;
          line-height: 130%;
        }

        .step-description {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 20px;
          font-weight: 400;
          line-height: 150%;
        }

        .process-actions {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .book-appointment-btn {
          display: flex;
          width: 286px;
          height: 62px;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 12px;
          border-radius: 28px;
          background: var(--black);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .book-appointment-btn:hover {
          background: #333;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .book-appointment-btn span {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 20px;
          font-weight: 400;
          line-height: 150%;
        }

        .arrow-icon {
          width: 11px;
          height: 19px;
          flex-shrink: 0;
        }

        @media (max-width: 1200px) {
          .process-steps {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .process-section {
            margin: 40px 20px 0;
            padding: 60px 20px;
            width: calc(100% - 40px);
          }

          .process-title {
            font-size: 32px;
            margin-bottom: 24px;
          }

          .process-subtitle {
            font-size: 18px;
          }

          .process-steps {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 60px;
          }

          .step-title {
            font-size: 24px;
          }

          .step-description {
            font-size: 16px;
          }

          .book-appointment-btn {
            width: 100%;
            max-width: 286px;
          }

          .process-container {
            padding: 0 15px;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .process-section {
            margin: 20px 10px 0;
            padding: 40px 10px;
            width: calc(100% - 20px);
          }

          .process-title {
            font-size: 24px;
          }

          .process-subtitle {
            font-size: 16px;
          }

          .step-image {
            height: 180px;
          }

          .step-title {
            font-size: 20px;
          }

          .step-description {
            font-size: 14px;
          }

          .book-appointment-btn {
            max-width: 100%;
          }

          .book-appointment-btn span {
            font-size: 16px;
          }

          .process-header {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </section>
  );
}
