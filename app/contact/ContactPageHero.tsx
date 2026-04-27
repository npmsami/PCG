'use client';

import { useLanguage } from '../context/LanguageContext';

export default function ContactPageHero() {
  const { t } = useLanguage();

  return (
    <div className="hero-card">
      <h1 className="hero-title">{t('CONTACT_TITLE')}</h1>
      <p className="hero-subtitle">{t('CONTACT_SUBTITLE')}</p>
    </div>
  );
}
