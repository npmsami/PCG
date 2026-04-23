'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQSection() {
  const { t, language } = useLanguage();
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems = useMemo(
    () => [
      { id: 0, question: t('FAQ_Q1'), answer: t('FAQ_A1') },
      { id: 1, question: t('FAQ_Q2'), answer: t('FAQ_A2') },
      { id: 2, question: t('FAQ_Q3'), answer: t('FAQ_A3') },
      { id: 3, question: t('FAQ_Q4'), answer: t('FAQ_A4') },
      { id: 4, question: t('FAQ_Q5'), answer: t('FAQ_A5') },
    ],
    [t, language]
  );

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-background">
        <div className="faq-overlay"></div>
      </div>
      
      <div className="container">
        <div className="faq-content">
          <div className="faq-header">
            <h2 className="faq-title">{t('FAQ_TITLE')}</h2>
            <p className="faq-subtitle">{t('FAQ_INTRO')}</p>
          </div>

          <div className="faq-accordion">
            {faqItems.map((item) => (
              <div key={item.id} className="accordion-item">
                <button
                  type="button"
                  className="accordion-question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItem === item.id}
                >
                  <span className="question-text">{item.question}</span>
                  <svg
                    className={`chevron-icon ${openItem === item.id ? 'chevron-open' : ''}`}
                    width="32" 
                    height="32" 
                    viewBox="0 0 32 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M15.9995 11.606C16.1246 11.606 16.2248 11.6438 16.3315 11.7505L22.9243 18.3423C23.0335 18.4515 23.0688 18.5502 23.0688 18.6665C23.0688 18.7828 23.0334 18.8815 22.9243 18.9907C22.8203 19.0948 22.7178 19.1352 22.5835 19.1353C22.449 19.1353 22.3459 19.0949 22.2417 18.9907L22.2407 18.9897L16.4702 13.2515L15.9985 12.7827L9.75732 19.0239C9.65367 19.1276 9.56503 19.1567 9.45752 19.1528C9.33183 19.1482 9.22363 19.1055 9.10889 18.9907C9.00474 18.8866 8.96436 18.7844 8.96436 18.6499C8.96437 18.5154 9.00474 18.4132 9.10889 18.3091L15.6675 11.7505C15.7742 11.6437 15.8745 11.606 15.9995 11.606Z" 
                      fill="white" 
                      stroke="white" 
                      strokeWidth="1.33333"
                    />
                  </svg>
                </button>
                
                <div
                  className={`accordion-answer ${openItem === item.id ? 'answer-open' : ''}`}
                >
                  <div className="answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <div className="cta-content">
              <h3 className="cta-title">{t('FAQ_CTA_TITLE')}</h3>
              <p className="cta-subtitle">{t('FAQ_CTA_SUBTITLE')}</p>
              <a className="contact-btn" href="/contact">
                <span>{t('FAQ_CONTACT_BTN')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          position: relative;
          background: var(--black);
          padding: var(--section-padding) 0;
          border-radius: var(--border-radius-medium);
          margin: 40px var(--page-padding) 0;
          overflow: hidden;
        }

        .faq-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('https://api.builder.io/api/v1/image/assets/TEMP/ef5d90ce328d45584bdfb79dcdb5ddfa44090e9e?width=3340');
          background-size: cover;
          background-position: center;
          opacity: 0.2;
        }

        .faq-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.6) 50%,
            rgba(0, 0, 0, 0.8) 100%
          );
        }

        .faq-content {
          position: relative;
          z-index: 2;
          max-width: 768px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .faq-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 48px;
          font-weight: 700;
          line-height: 120%;
          margin-bottom: 24px;
        }

        .faq-subtitle {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 18px;
          font-weight: 400;
          line-height: 150%;
        }

        .faq-accordion {
          border-bottom: 1px solid var(--white);
        }

        .accordion-item {
          border-top: 1px solid var(--white);
        }

        .accordion-question {
          display: flex;
          padding: 20px 0;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .accordion-question:hover {
          opacity: 0.8;
        }

        .question-text {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 18px;
          font-weight: 700;
          line-height: 150%;
          text-align: left;
          flex: 1;
        }

        .chevron-icon {
          width: 32px;
          height: 32px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .chevron-open {
          transform: rotate(180deg);
        }

        .accordion-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .answer-open {
          max-height: 200px;
          padding-bottom: 24px;
        }

        .answer-content p {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          margin: 0;
        }

        .faq-cta {
          margin-top: 80px;
          text-align: center;
        }

        .cta-content {
          max-width: 560px;
          margin: 0 auto;
        }

        .cta-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 32px;
          font-weight: 700;
          line-height: 130%;
          margin-bottom: 16px;
        }

        .cta-subtitle {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 18px;
          font-weight: 400;
          line-height: 150%;
          margin-bottom: 24px;
        }

        .contact-btn {
          display: inline-flex;
          width: auto;
          min-width: 156px;
          max-width: 100%;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 36px;
          background: var(--primary-orange);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          background: #c73d1f;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(224, 72, 38, 0.4);
        }

        .contact-btn span {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          white-space: nowrap;
          text-align: center;
        }

        @media (max-width: 768px) {
          .faq-section {
            margin: 40px 20px 0;
            padding: 60px 0;
          }

          .faq-title {
            font-size: 32px;
          }

          .faq-subtitle {
            font-size: 16px;
          }

          .question-text {
            font-size: 16px;
          }

          .answer-content p {
            font-size: 14px;
          }

          .cta-title {
            font-size: 24px;
          }

          .cta-subtitle {
            font-size: 16px;
          }

          .contact-btn {
            width: auto;
            max-width: 100%;
            padding: 12px 18px;
          }

          .contact-btn span {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .faq-title {
            font-size: 24px;
          }

          .question-text {
            font-size: 14px;
          }

          .answer-content p {
            font-size: 12px;
          }

          .cta-title {
            font-size: 20px;
          }

          .chevron-icon {
            width: 24px;
            height: 24px;
          }

          .contact-btn {
            padding: 10px 14px;
          }

          .contact-btn span {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
