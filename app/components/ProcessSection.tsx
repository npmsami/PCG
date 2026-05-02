'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function ProcessSection() {
  const { t, language } = useLanguage();

  const processSteps = useMemo(
    () => [
      {
        id: 1,
        title: t('PROCESS_S1_TITLE'),
        imageAlt: t('PROCESS_S1_ALT'),
        description: t('PROCESS_S1_DESC'),
        image:
          'https://api.builder.io/api/v1/image/assets/TEMP/c9534831ad3921a74bf4d58466b8742783360484?width=722',
      },
      {
        id: 2,
        title: t('PROCESS_S2_TITLE'),
        imageAlt: t('PROCESS_S2_ALT'),
        description: t('PROCESS_S2_DESC'),
        image:
          'https://api.builder.io/api/v1/image/assets/TEMP/a0052aeeccaef6bb464025d7cd6fbe6a3d8200d3?width=722',
      },
      {
        id: 3,
        title: t('PROCESS_S3_TITLE'),
        imageAlt: t('PROCESS_S3_ALT'),
        description: t('PROCESS_S3_DESC'),
        image: '/services/professional-home-repair-restoration.png',
      },
    ],
    [t, language]
  );

  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="process-header">
          <h2 className="process-title">{t('PROCESS_TITLE')}</h2>
          <p className="process-subtitle">{t('PROCESS_SUBTITLE')}</p>
        </div>

        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.id} className="process-step">
              <div className="step-image">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
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

        <div className="process-actions">
          <button
            type="button"
            className="book-appointment-btn"
            data-cal-link="pcg-roofing-mydefr/inspection"
            data-cal-namespace="inspection"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            <span>{t('BTN_BOOK_APPOINTMENT')}</span>
            <svg className="arrow-icon" width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.44238 0.5C1.69602 0.500038 1.90352 0.585183 2.09082 0.771484L10.2188 8.85742C10.3316 8.96969 10.3984 9.073 10.4365 9.16406C10.4778 9.26252 10.5 9.3696 10.5 9.48926C10.5 9.57889 10.4873 9.6612 10.4639 9.73828L10.4365 9.81445C10.3984 9.90553 10.3316 10.0088 10.2188 10.1211L2.0498 18.248C1.86283 18.434 1.66766 18.5073 1.43945 18.499C1.19789 18.4901 0.988169 18.4012 0.792969 18.207C0.605899 18.0208 0.521572 17.8153 0.521484 17.5654C0.521484 17.3153 0.605735 17.1092 0.792969 16.9229L7.9082 9.84375L8.26465 9.48926L7.9082 9.13477L0.751953 2.01465C0.565112 1.82867 0.492723 1.63565 0.500977 1.41113C0.509811 1.17306 0.597897 0.965647 0.792969 0.771484C0.980352 0.585043 1.1886 0.5 1.44238 0.5Z" fill="white" stroke="white"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .process-section {
          background: var(--primary-orange);
          padding: var(--section-padding) 0;
          border-radius: var(--border-radius-medium);
          margin: 40px var(--page-padding) 0;
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
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
          height: 202px;
          border-radius: var(--border-radius-small);
          overflow: hidden;
          position: relative;
        }

        .step-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          width: auto;
          min-width: 360px;
          min-height: 62px;
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
          font-size: 18px;
          font-weight: 400;
          line-height: 130%;
          white-space: nowrap;
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
            padding: 60px 0;
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
            width: auto;
            min-width: 320px;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .process-title {
            font-size: 24px;
          }

          .process-subtitle {
            font-size: 16px;
          }

          .step-title {
            font-size: 20px;
          }

          .step-description {
            font-size: 14px;
          }

          .book-appointment-btn span {
            font-size: 16px;
          }

          .book-appointment-btn {
            min-width: 280px;
            padding: 10px 16px;
          }
        }
      `}</style>
    </section>
  );
}
