'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './context/LanguageContext';
import './not-found.css';

export default function NotFound() {
  const { t } = useLanguage();
  
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>{t('notFound.title') || 'Page Not Found'}</h2>
        <p>{t('notFound.message') || 'The page you are looking for doesn\'t exist or has been moved.'}</p>
        <Link href="/" className="btn-primary">
          {t('notFound.button') || 'Back to Home'}
        </Link>
      </div>
    </div>
  );
}