'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

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

export default function ContactForm() {
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

      <style jsx>{`
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
          .form-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .submit-btn {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </form>
  );
}
