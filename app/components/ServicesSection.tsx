'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import type { MessageKey } from '../i18n/messages';

const SERVICE_ITEMS: { titleKey: MessageKey; image: string }[] = [
  {
    titleKey: 'SVC_ITEM_1',
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/f6236692f79bebe3f92a08329f72112d49f892a1?width=722',
  },
  {
    titleKey: 'SVC_ITEM_2',
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/d5676b2f651575ad0183c0ddc95e21eed74ec271?width=722',
  },
  {
    titleKey: 'SVC_ITEM_3',
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/f80eb218a6215c804c6f6a5b4a0190fa0dbcea61?width=722',
  },
  {
    titleKey: 'SVC_ITEM_4',
    image: '/services/exterior-home-repairs.png',
  },
  {
    titleKey: 'SVC_ITEM_5',
    image: '/services/interior-home-repairs.png',
  },
  {
    titleKey: 'SVC_ITEM_6',
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/b6491b01922b2e5f70adb1165c523e552d0c9715?width=722',
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services-section" className="services-section">
      <div className="container">
        {/* Header with confidence message */}
        <div className="services-header">
          <div className="header-content">
            <div className="years-badge">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/41381a4b237be349d87bd00aadcd8c27ae740efb?width=460"
                alt={t('SVC_ALT_BADGE')}
                width={120}
                height={120}
              />
            </div>
            <h2 className="services-title">{t('SVC_HEAD_TITLE')}</h2>
            <p className="services-description">{t('SVC_HEAD_DESC')}</p>
            <button
              type="button"
              className="services-cta-btn"
              data-cal-link="pcg-roofing-mydefr/inspection"
              data-cal-namespace="inspection"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              <span className="services-cta-text">{t('BTN_BOOK_APPOINTMENT')}</span>
              <svg
                className="services-cta-arrow"
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1.44238 0.5C1.69602 0.500038 1.90352 0.585183 2.09082 0.771484L10.2188 8.85742C10.3316 8.96969 10.3984 9.073 10.4365 9.16406C10.4778 9.26252 10.5 9.3696 10.5 9.48926C10.5 9.57889 10.4873 9.6612 10.4639 9.73828L10.4365 9.81445C10.3984 9.90553 10.3316 10.0088 10.2188 10.1211L2.0498 18.248C1.86283 18.434 1.66766 18.5073 1.43945 18.499C1.19789 18.4901 0.988169 18.4012 0.792969 18.207C0.605899 18.0208 0.521572 17.8153 0.521484 17.5654C0.521484 17.3153 0.605735 17.1092 0.792969 16.9229L7.9082 9.84375L8.26465 9.48926L7.9082 9.13477L0.751953 2.01465C0.565112 1.82867 0.492723 1.63565 0.500977 1.41113C0.509811 1.17306 0.597897 0.965647 0.792969 0.771484C0.980352 0.585043 1.1886 0.5 1.44238 0.5Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
          <div className="header-image">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/d6ef8f1c47d87444e36b9547bae45863b8a2ff5d?width=1200"
              alt={t('SVC_IMG_ALT')}
              width={600}
              height={640}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-content">
          <h3 className="services-grid-title">{t('SVC_GRID_TITLE')}</h3>
          <div className="services-grid">
            {SERVICE_ITEMS.map((service, index) => {
              const title = t(service.titleKey);
              return (
                <div key={index} className="service-item">
                  <div className="service-image">
                    <Image
                      src={service.image}
                      alt={title}
                      width={361}
                      height={202}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h4 className="service-title">{title}</h4>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style jsx>{`
        .services-section {
          background: var(--black);
          padding: var(--section-padding) 0;
          border-radius: var(--border-radius-medium);
          margin: 40px var(--page-padding) 0;
          position: relative;
        }

        .services-header {
          display: flex;
          align-items: center;
          gap: 80px;
          margin-bottom: 120px;
        }

        .header-content {
          flex: 1;
          max-width: 600px;
        }

        .years-badge {
          margin-bottom: 24px;
          display: flex;
          justify-content: flex-start;
        }

        .services-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 48px;
          font-weight: 700;
          line-height: 120%;
          margin-bottom: 24px;
        }

        .services-description {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 25px;
          font-weight: 400;
          line-height: 150%;
          margin-bottom: 32px;
        }

        .services-cta-btn {
          display: flex;
          width: auto;
          min-width: 360px;
          min-height: 78px;
          padding: 14px 22px;
          justify-content: center;
          align-items: center;
          gap: 12px;
          border-radius: 36px;
          border: 1px solid #1c1c1c;
          background: #121212;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .services-cta-btn:hover {
          background: #272727;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
        }

        .services-cta-text {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 36px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.02em;
          text-align: center;
          white-space: nowrap;
        }

        .services-cta-arrow {
          width: 11px;
          height: 19px;
          flex-shrink: 0;
        }

        .header-image {
          flex: 1;
          max-width: 600px;
          height: 640px;
          border-radius: var(--border-radius-large);
          overflow: hidden;
        }

        .services-content {
          margin-bottom: 80px;
        }

        .services-grid-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 40px;
          font-weight: 700;
          line-height: 120%;
          margin-bottom: 64px;
          max-width: 768px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 48px;
        }

        .service-item {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .service-image {
          width: 100%;
          height: 202px;
          border-radius: var(--border-radius-small);
          overflow: hidden;
        }

        .service-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 32px;
          font-weight: 700;
          line-height: 130%;
        }



        @media (max-width: 1200px) {
          .services-header {
            flex-direction: column;
            gap: 60px;
            text-align: center;
          }

          .header-image {
            max-width: 100%;
            height: 400px;
          }

          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            margin: 40px 20px 0;
            padding: 60px 0;
          }

          .services-title {
            font-size: 32px;
          }

          .services-description {
            font-size: 18px;
          }

          .services-cta-btn {
            width: auto;
            min-width: 320px;
            max-width: 100%;
            min-height: 64px;
          }

          .services-cta-text {
            font-size: 28px;
          }

          .services-grid-title {
            font-size: 28px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .service-title {
            font-size: 24px;
          }

        }

        @media (max-width: 480px) {
          .services-title {
            font-size: 24px;
          }

          .services-description {
            font-size: 16px;
          }

          .services-cta-text {
            font-size: 18px;
            line-height: 1.2;
          }

          .services-cta-btn {
            max-width: 280px;
            min-height: 56px;
            padding: 10px 16px;
          }

          .services-grid-title {
            font-size: 22px;
          }

          .service-title {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}
