'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function TestimonialsSection() {
  const { t, language } = useLanguage();

  const testimonials = useMemo(
    () => [
      {
        id: 1,
        quote: t('TST_1_QUOTE'),
        name: t('TST_1_NAME'),
        location: t('TST_1_LOC'),
        avatar: '/testimonials/Maria.webp',
        avatarAlt: t('TST_1_ALT'),
      },
      {
        id: 2,
        quote: t('TST_2_QUOTE'),
        name: t('TST_2_NAME'),
        location: t('TST_2_LOC'),
        avatar: '/testimonials/Ken.webp',
        avatarAlt: t('TST_2_ALT'),
      },
      {
        id: 3,
        quote: t('TST_3_QUOTE'),
        name: t('TST_3_NAME'),
        location: t('TST_3_LOC'),
        avatar: '/testimonials/John.webp',
        avatarAlt: t('TST_3_ALT'),
      },
    ],
    [t, language]
  );

  const StarRating = () => (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="black"/>
        </svg>
      ))}
    </div>
  );

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">{t('TST_TITLE')}</h2>
          <p className="testimonials-subtitle">{t('TST_SUBTITLE')}</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <StarRating />
              <div className="testimonial-quote-wrapper">
                <blockquote className="testimonial-quote">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.avatarAlt}
                    width={56}
                    height={56}
                    className="avatar-image"
                  />
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-location">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: var(--white);
          padding: var(--section-padding) 0;
          margin: 40px var(--page-padding) 0;
          border-radius: var(--border-radius-medium);
        }

        .testimonials-header {
          max-width: 768px;
          margin: 0 auto 80px;
          text-align: left;
        }

        .testimonials-title {
          color: var(--black);
          font-family: var(--font-roboto);
          font-size: 48px;
          font-weight: 700;
          line-height: 120%;
          margin-bottom: 24px;
        }

        .testimonials-subtitle {
          color: var(--black);
          font-family: var(--font-roboto);
          font-size: 18px;
          font-weight: 400;
          line-height: 150%;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 0;
        }

        .star-rating {
          display: flex;
          align-items: flex-start;
          gap: 4px;
        }

        .testimonial-quote-wrapper {
          font-weight: 700;
        }

        .testimonial-quote {
          color: var(--black);
          font-family: var(--font-roboto);
          font-size: 20px;
          font-weight: 700;
          line-height: 140%;
          margin: 0;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .author-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .avatar-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          color: var(--black);
          font-family: var(--font-roboto);
          font-size: 16px;
          font-weight: 700;
          line-height: 150%;
        }

        .author-location {
          color: var(--black);
          font-family: var(--font-roboto);
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
        }

        @media (max-width: 1200px) {
          .testimonials-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            margin: 40px 20px 0;
          }

          .testimonials-title {
            font-size: 32px;
          }

          .testimonials-subtitle {
            font-size: 16px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .testimonial-quote {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .testimonials-title {
            font-size: 24px;
          }

          .testimonial-quote {
            font-size: 16px;
          }

          .author-name,
          .author-location {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
