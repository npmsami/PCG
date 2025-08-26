'use client';

import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    'Home Page',
    'About Us', 
    'Contact Us',
    'Services',
    'Testimonials'
  ];

  const connectLinks = [
    'Facebook Page',
    'Instagram Feed',
    'Twitter Profile', 
    'LinkedIn Page',
    'YouTube Channel'
  ];

  const socialIcons = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'];

  const renderSocialIcon = (name: string) => {
    switch (name) {
      case 'Facebook':
        return (
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.3335 12.3038C22.3335 6.74719 17.8564 2.24268 12.3335 2.24268C6.81065 2.24268 2.3335 6.74719 2.3335 12.3038C2.3335 17.3255 5.99034 21.4879 10.771 22.2427V15.2121H8.23194V12.3038H10.771V10.0872C10.771 7.56564 12.264 6.1728 14.5481 6.1728C15.6423 6.1728 16.7866 6.36931 16.7866 6.36931V8.84529H15.5257C14.2835 8.84529 13.896 9.6209 13.896 10.4166V12.3038H16.6694L16.2261 15.2121H13.896V22.2427C18.6767 21.4879 22.3335 17.3257 22.3335 12.3038Z" fill="white"/>
          </svg>
        );
      case 'Instagram':
        return (
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.3335 3.24268H8.3335C5.57208 3.24268 3.3335 5.48126 3.3335 8.24268V16.2427C3.3335 19.0041 5.57208 21.2427 8.3335 21.2427H16.3335C19.0949 21.2427 21.3335 19.0041 21.3335 16.2427V8.24268C21.3335 5.48126 19.0949 3.24268 16.3335 3.24268ZM19.5835 16.2427C19.578 18.0353 18.1261 19.4872 16.3335 19.4927H8.3335C6.54085 19.4872 5.08899 18.0353 5.0835 16.2427V8.24268C5.08899 6.45003 6.54085 4.99817 8.3335 4.99268H16.3335C18.1261 4.99817 19.578 6.45003 19.5835 8.24268V16.2427ZM17.0835 8.49268C17.6358 8.49268 18.0835 8.04496 18.0835 7.49268C18.0835 6.9404 17.6358 6.49268 17.0835 6.49268C16.5312 6.49268 16.0835 6.9404 16.0835 7.49268C16.0835 8.04496 16.5312 8.49268 17.0835 8.49268ZM12.3335 7.74268C9.84822 7.74268 7.8335 9.7574 7.8335 12.2427C7.8335 14.728 9.84822 16.7427 12.3335 16.7427C14.8188 16.7427 16.8335 14.728 16.8335 12.2427C16.8362 11.0484 16.3629 9.90225 15.5184 9.05776C14.6739 8.21327 13.5278 7.74002 12.3335 7.74268ZM9.5835 12.2427C9.5835 13.7615 10.8147 14.9927 12.3335 14.9927C13.8523 14.9927 15.0835 13.7615 15.0835 12.2427C15.0835 10.7239 13.8523 9.49268 12.3335 9.49268C10.8147 9.49268 9.5835 10.7239 9.5835 12.2427Z" fill="white"/>
          </svg>
        );
      case 'Twitter':
        return (
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5096 4.24268H20.2697L14.2396 11.0201L21.3335 20.2427H15.7791L11.4286 14.6493L6.45073 20.2427H3.68894L10.1387 12.9935L3.3335 4.24268H9.02895L12.9614 9.3553L17.5096 4.24268ZM16.5408 18.6181H18.0703L8.19791 5.78196H6.5567L16.5408 18.6181Z" fill="white"/>
          </svg>
        );
      case 'LinkedIn':
        return (
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.8335 3.24268C4.00507 3.24268 3.3335 3.91425 3.3335 4.74268V19.7427C3.3335 20.5711 4.00507 21.2427 4.8335 21.2427H19.8335C20.6619 21.2427 21.3335 20.5711 21.3335 19.7427V4.74268C21.3335 3.91425 20.6619 3.24268 19.8335 3.24268H4.8335ZM8.85426 7.2454C8.85989 8.20165 8.14411 8.79087 7.29473 8.78665C6.49457 8.78243 5.79707 8.1454 5.80129 7.24681C5.80551 6.40165 6.47348 5.72243 7.34114 5.74212C8.22145 5.76181 8.85989 6.40728 8.85426 7.2454ZM12.6132 10.0044H10.0932H10.0918V18.5643H12.7552V18.3646C12.7552 17.9847 12.7549 17.6047 12.7546 17.2246C12.7538 16.2108 12.7529 15.1959 12.7581 14.1824C12.7595 13.9363 12.7707 13.6804 12.834 13.4455C13.0716 12.568 13.8606 12.0013 14.7409 12.1406C15.3062 12.2291 15.6802 12.5568 15.8377 13.0898C15.9348 13.423 15.9784 13.7816 15.9826 14.129C15.994 15.1766 15.9924 16.2242 15.9908 17.2719C15.9902 17.6417 15.9896 18.0117 15.9896 18.3815V18.5629H18.6615V18.3576C18.6615 17.9056 18.6613 17.4537 18.661 17.0018C18.6605 15.8723 18.6599 14.7428 18.6629 13.6129C18.6643 13.1024 18.6095 12.599 18.4843 12.1054C18.2973 11.3713 17.9106 10.7638 17.282 10.3251C16.8362 10.0129 16.3468 9.81178 15.7998 9.78928C15.7375 9.78669 15.6747 9.7833 15.6116 9.77989C15.3319 9.76477 15.0476 9.74941 14.7802 9.80334C14.0152 9.95662 13.3431 10.3068 12.8354 10.9241C12.7764 10.9949 12.7187 11.0668 12.6326 11.1741L12.6132 11.1984V10.0044ZM6.01514 18.5671H8.66592V10.01H6.01514V18.5671Z" fill="white"/>
          </svg>
        );
      case 'YouTube':
        return (
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9263 7.20301C21.8124 6.78041 21.5898 6.39501 21.2807 6.08518C20.9716 5.77534 20.5867 5.55187 20.1643 5.43701C18.5983 5.00701 12.3333 5.00001 12.3333 5.00001C12.3333 5.00001 6.06934 4.99301 4.50234 5.40401C4.08026 5.52415 3.69616 5.75078 3.3869 6.06214C3.07765 6.3735 2.85362 6.75913 2.73634 7.18201C2.32334 8.74801 2.31934 11.996 2.31934 11.996C2.31934 11.996 2.31534 15.26 2.72534 16.81C2.95534 17.667 3.63034 18.344 4.48834 18.575C6.07034 19.005 12.3183 19.012 12.3183 19.012C12.3183 19.012 18.5833 19.019 20.1493 18.609C20.5718 18.4943 20.9571 18.2714 21.267 17.9622C21.5769 17.653 21.8007 17.2682 21.9163 16.846C22.3303 15.281 22.3333 12.034 22.3333 12.034C22.3333 12.034 22.3533 8.76901 21.9263 7.20301ZM10.3293 15.005L10.3343 9.00501L15.5413 12.01L10.3293 15.005Z" fill="white"/>
        </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="newsletter-section">
            <div className="company-logo">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/ae5e99d29686311debaad341b15d6eb03412fa3a?width=268"
                alt="PCG Logo"
                width={84}
                height={36}
              />
            </div>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest updates on roofing services and offers.
            </p>
            <div className="newsletter-form">
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email Here" 
                  className="email-input"
                />
                <button className="join-btn">Join</button>
              </div>
              <p className="newsletter-disclaimer">
                By subscribing, you consent to receive updates and agree to our Privacy Policy.
              </p>
            </div>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h4 className="column-title">Quick Links</h4>
              <ul className="links-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="links-column">
              <h4 className="column-title">Connect With Us</h4>
              <ul className="links-list">
                {connectLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="links-column">
              <h4 className="column-title">Stay Updated</h4>
              <ul className="social-links">
                {socialIcons.map((socialName, index) => (
                  <li key={index} className="social-item">
                    <a href="#" className="social-link">
                      {renderSocialIcon(socialName)}
                      <span>{socialName}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2025 PCG Roofing. All rights reserved.</p>
          </div>
          <div className="legal-links">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
            <a href="#" className="legal-link">Cookie Settings</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--dark-gray);
          padding: var(--section-padding) 0;
          border-radius: var(--border-radius-medium);
          margin: 40px var(--page-padding) 0;
        }

        .footer-main {
          display: flex;
          gap: 128px;
          margin-bottom: 80px;
          padding: 48px;
          border-radius: var(--border-radius-large);
          background: var(--dark-gray);
        }

        .newsletter-section {
          flex: 1;
          max-width: 500px;
        }

        .company-logo {
          width: 84px;
          height: 36px;
          margin-bottom: 24px;
        }

        .newsletter-description {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          margin-bottom: 24px;
        }

        .form-group {
          display: flex;
          gap: 16px;
          margin-bottom: 12px;
        }

        .email-input {
          flex: 1;
          padding: 12px;
          border-radius: 30px;
          border: 1px solid var(--white);
          background: transparent;
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 16px;
          line-height: 150%;
        }

        .email-input::placeholder {
          color: var(--white);
        }

        .email-input:focus {
          outline: none;
          border-color: var(--primary-orange);
        }

        .join-btn {
          padding: 12px 24px;
          border-radius: 35px;
          border: 1px solid var(--white);
          background: transparent;
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .join-btn:hover {
          background: var(--primary-orange);
          border-color: var(--primary-orange);
        }

        .newsletter-disclaimer {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 12px;
          font-weight: 400;
          line-height: 150%;
        }

        .footer-links {
          display: flex;
          gap: 40px;
          flex: 1;
        }

        .links-column {
          flex: 1;
        }

        .column-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 16px;
          font-weight: 700;
          line-height: 150%;
          margin-bottom: 16px;
        }

        .links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .links-list li {
          padding: 8px 0;
        }

        .footer-link {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--primary-orange);
        }

        .social-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .social-item {
          padding: 8px 0;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: var(--primary-orange);
        }

        .social-link svg {
          width: 24px;
          height: 24px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #555;
          padding-top: 32px;
        }

        .copyright p {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          margin: 0;
        }

        .legal-links {
          display: flex;
          gap: 24px;
        }

        .legal-link {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 14px;
          font-weight: 400;
          line-height: 150%;
          text-decoration: underline;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: var(--primary-orange);
        }

        @media (max-width: 1200px) {
          .footer-main {
            flex-direction: column;
            gap: 60px;
          }

          .footer-links {
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 0;
            margin: 40px 20px 0;
          }

          .footer-main {
            padding: 32px;
          }

          .footer-links {
            flex-direction: column;
            gap: 32px;
          }

          .form-group {
            flex-direction: column;
            gap: 12px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .legal-links {
            flex-direction: column;
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .footer {
            margin: 40px 16px 0;
          }

          .footer-main {
            padding: 20px;
          }

          .newsletter-description,
          .footer-link,
          .social-link,
          .copyright p,
          .legal-link {
            font-size: 12px;
          }

          .column-title {
            font-size: 14px;
          }
        }
      `}</style>
    </footer>
  );
}
