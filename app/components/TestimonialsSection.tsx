'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonials = [
    {
      id: 1,
      quoteKey: 'testimonials.1.quote',
      nameKey: 'testimonials.1.name',
      locationKey: 'testimonials.1.location',
      avatar: "https://placehold.co/200x200/e8e8e8/333333?text=MG"
    },
    {
      id: 2,
      quoteKey: 'testimonials.2.quote',
      nameKey: 'testimonials.2.name',
      locationKey: 'testimonials.2.location',
      avatar: "https://placehold.co/200x200/e8e8e8/333333?text=KR"
    },
    {
      id: 3,
      quoteKey: 'testimonials.3.quote',
      nameKey: 'testimonials.3.name',
      locationKey: 'testimonials.3.location',
      avatar: "https://placehold.co/200x200/e8e8e8/333333?text=JD"
    }
  ];

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
    <section id="testimonials-section" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">{t('testimonials.title')}</h2>
          <p className="testimonials-subtitle">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <StarRating />
                <blockquote className="testimonial-quote">
                  &ldquo;{t(testimonial.quoteKey)}&rdquo;
                </blockquote>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${t(testimonial.nameKey)}'s avatar`} 
                    className="avatar-image"
                  />
                </div>
                <div className="author-info">
                  <div className="author-name">{t(testimonial.nameKey)}</div>
                  <div className="author-location">{t(testimonial.locationKey)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
