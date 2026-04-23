'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: ContactFormState = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const isValidEmail = useMemo(() => {
    if (!formData.email) return true;
    return EMAIL_REGEX.test(formData.email);
  }, [formData.email]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(t('CONTACT_REQUIRED_ERROR'));
      return;
    }

    if (!EMAIL_REGEX.test(formData.email.trim())) {
      setErrorMessage(t('CONTACT_EMAIL_ERROR'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(result.error || t('CONTACT_SEND_ERROR'));
        return;
      }

      setSuccessMessage(t('CONTACT_SUCCESS'));
      setFormData(initialState);
    } catch {
      setErrorMessage(t('CONTACT_SEND_ERROR'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="hero-card">
            <h1 className="hero-title">{t('CONTACT_TITLE')}</h1>
            <p className="hero-subtitle">{t('CONTACT_SUBTITLE')}</p>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="form-card">
            <form onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="fullName">{t('CONTACT_FULL_NAME')}</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                    placeholder={t('CONTACT_FULL_NAME_PH')}
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">{t('CONTACT_EMAIL')}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder={t('CONTACT_EMAIL_PH')}
                    aria-invalid={!isValidEmail}
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">{t('CONTACT_PHONE')}</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder={t('CONTACT_PHONE_PH')}
                  />
                </div>

                <div className="field">
                  <label htmlFor="subject">{t('CONTACT_SUBJECT')}</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                    placeholder={t('CONTACT_SUBJECT_PH')}
                  />
                </div>
              </div>

              <div className="field message-field">
                <label htmlFor="message">{t('CONTACT_MESSAGE')}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder={t('CONTACT_MESSAGE_PH')}
                  rows={6}
                />
              </div>

              {errorMessage ? <p className="feedback error">{errorMessage}</p> : null}
              {successMessage ? <p className="feedback success">{successMessage}</p> : null}

              <button className="submit-btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? t('CONTACT_SUBMITTING') : t('CONTACT_SUBMIT')}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          margin-top: 0;
          padding-top: 132px;
        }

        .contact-hero {
          margin: 0 var(--page-padding);
        }

        .hero-card {
          border-radius: var(--border-radius-medium);
          padding: 56px;
          background: linear-gradient(135deg, #1a1a1a 0%, #323232 55%, #e04826 100%);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
        }

        .hero-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 48px;
          font-weight: 700;
          line-height: 120%;
          margin-bottom: 16px;
        }

        .hero-subtitle {
          color: rgba(255, 255, 255, 0.92);
          font-family: var(--font-roboto);
          font-size: 20px;
          font-weight: 400;
          line-height: 150%;
          max-width: 760px;
        }

        .contact-form-section {
          margin: 40px var(--page-padding) 0;
          padding-bottom: 40px;
        }

        .form-card {
          border-radius: var(--border-radius-medium);
          padding: 48px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: var(--white);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .field label {
          font-family: var(--font-open-sans);
          font-size: 14px;
          font-weight: 600;
          color: #222;
        }

        .field input,
        .field textarea {
          width: 100%;
          border-radius: 14px;
          border: 1px solid #d6d6d6;
          padding: 14px 16px;
          font-family: var(--font-open-sans);
          font-size: 16px;
          color: #111;
          background: #fff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .field input:focus,
        .field textarea:focus {
          outline: none;
          border-color: var(--primary-orange);
          box-shadow: 0 0 0 3px rgba(224, 72, 38, 0.12);
        }

        .message-field {
          margin-top: 20px;
        }

        .field textarea {
          resize: vertical;
          min-height: 140px;
        }

        .feedback {
          margin-top: 18px;
          font-family: var(--font-open-sans);
          font-size: 14px;
          font-weight: 600;
        }

        .feedback.error {
          color: #b42318;
        }

        .feedback.success {
          color: #067647;
        }

        .submit-btn {
          margin-top: 20px;
          min-width: 220px;
          border-radius: 999px;
          padding: 14px 24px;
          border: none;
          background: var(--primary-orange);
          color: var(--white);
          font-family: var(--font-open-sans);
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(224, 72, 38, 0.35);
        }

        .submit-btn:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .contact-hero,
          .contact-form-section {
            margin-left: 20px;
            margin-right: 20px;
          }

          .hero-card {
            padding: 32px 24px;
            border-radius: 28px;
          }

          .contact-page {
            padding-top: 96px;
          }

          .hero-title {
            font-size: 34px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .form-card {
            padding: 28px 20px;
            border-radius: 28px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .submit-btn {
            width: 100%;
            min-width: 0;
          }
        }

        @media (max-width: 480px) {
          .contact-hero,
          .contact-form-section {
            margin-left: 16px;
            margin-right: 16px;
          }

          .hero-title {
            font-size: 28px;
          }

          .contact-page {
            padding-top: 84px;
          }
        }
      `}</style>
      </main>
    </>
  );
}
