'use client';

import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Insurance approved my claim fast, and PCG had my roof done in a week. I paid $0.",
      name: "Maria G.",
      location: "Homeowner, San Antonio",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/992:313"
    },
    {
      id: 2,
      quote: "They explained everything clearly and handled all the insurance headaches. Highly recommend.",
      name: "Ken R.",
      location: "Homeowner, San Antonio",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/992:327"
    },
    {
      id: 3,
      quote: "PCG Roofing made the entire process stress-free and quick!",
      name: "John D.",
      location: "Business Owner, Local",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/992:341"
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

  const CompanyLogo = () => (
    <svg width="120" height="49" viewBox="0 0 120 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M33.0596 15.2456L23.1943 34.5314H13.9279L18.0565 26.5385H17.8713C14.4652 30.9601 9.38316 33.8709 2.14209 34.5314V26.6492C2.14209 26.6492 6.77438 26.3756 9.49757 23.5125H2.14209V15.2458H10.4089V22.0451L10.5944 22.0443L13.9725 15.2458H20.2245V22.0019L20.4099 22.0016L23.9148 15.2456H33.0596Z" fill="black"/>
      <path d="M86.8565 32.4027H89.5189V17.1206H86.8565V32.4027Z" fill="black"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M72.1789 32.2466C72.7575 32.4872 73.3459 32.6075 73.9441 32.6075C74.9323 32.6075 75.8165 32.367 76.5967 31.8858C77.3768 31.4047 77.9816 30.7416 78.4107 29.8963C78.8398 29.0447 79.0543 28.0791 79.0543 26.9998C79.0543 25.9206 78.8332 24.9551 78.3912 24.1034C77.949 23.2517 77.3346 22.5918 76.5479 22.1237C75.7612 21.649 74.8672 21.415 73.866 21.4215C73.2289 21.4215 72.6177 21.545 72.0325 21.7921C71.4474 22.0391 70.9598 22.3902 70.5697 22.8453C70.5396 22.88 70.5103 22.915 70.4819 22.9503V17.1304H67.8098V32.4028H70.4624L70.4571 30.976C70.5257 31.0601 70.5991 31.1423 70.6769 31.2227C71.0995 31.6583 71.6002 31.9996 72.1789 32.2466ZM74.9095 29.7793C74.4739 30.0459 73.9765 30.1792 73.4174 30.1792C72.8647 30.1792 72.3576 30.0426 71.896 29.7696C71.4343 29.49 71.0671 29.1097 70.7939 28.6285C70.5274 28.1474 70.3941 27.6012 70.3941 26.9901C70.3877 26.3789 70.5176 25.8328 70.7842 25.3517C71.0573 24.8641 71.4246 24.487 71.8863 24.2204C72.3478 23.9474 72.8583 23.8141 73.4174 23.8206C73.9765 23.8141 74.4739 23.9441 74.9095 24.2107C75.3516 24.4707 75.6897 24.8446 75.9238 25.3322C76.1643 25.8133 76.2846 26.366 76.2846 26.9901C76.2846 27.6143 76.1643 28.1669 75.9238 28.648C75.6897 29.1292 75.3516 29.5062 74.9095 29.7793Z" fill="black"/>
      <path d="M36.9166 18.0471H39.9594L42.6812 27.9875L45.5768 18.0471H48.1124L51.2527 27.788L53.8664 18.0471H56.6555L52.54 32.4027H49.9166L46.7233 22.8867L43.7921 32.4027H41.1394L36.9166 18.0471Z" fill="black"/>
    </svg>
  );

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Customer Testimonials</h2>
          <p className="testimonials-subtitle">
            Insurance approved my claim fast, and PCG had my roof done in a week.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <StarRating />
              <blockquote className="testimonial-quote">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <div className="avatar-placeholder"></div>
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-location">{testimonial.location}</div>
                </div>
                <div className="company-logo">
                  <CompanyLogo />
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
        }

        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #ddd, #bbb);
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

        .company-logo {
          width: 120px;
          height: 48px;
        }

        @media (max-width: 1200px) {
          .testimonials-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
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
