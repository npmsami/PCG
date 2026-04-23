'use client';

import { forwardRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../i18n/messages';
import styles from './LanguageSwitcher.module.css';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (lang: Language) => void;
  /** Wider control + menu for mobile drawer */
  variant?: 'bar' | 'drawer';
};

export const LanguageSwitcher = forwardRef<HTMLDivElement, Props>(
  function LanguageSwitcher({ isOpen, onToggle, onSelect, variant = 'bar' }, ref) {
    const { language, t } = useLanguage();
    const langCode = language === 'en' ? 'EN' : 'ES';
    const langLabel =
      language === 'en'
        ? t('LANG_OPTION_ENGLISH')
        : t('LANG_OPTION_SPANISH');

    const wrapClass =
      variant === 'drawer' ? `${styles.wrap} ${styles.wrapDrawer}` : styles.wrap;

    return (
      <div ref={ref} className={wrapClass}>
        <button
          type="button"
          className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''}`}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={`${t('LANG_MENU_ARIA')}: ${langLabel}`}
        >
          <span className={styles.triggerCode} aria-hidden="true">
            {langCode}
          </span>
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.triggerName}>{langLabel}</span>
          <span className={styles.chevron} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div
            className={styles.menu}
            role="listbox"
            aria-label={t('LANG_MENU_ARIA')}
          >
            <div className={styles.menuTitle}>{t('LANG_MENU_HEADING')}</div>
            <button
              type="button"
              role="option"
              aria-selected={language === 'en'}
              className={`${styles.option} ${language === 'en' ? styles.optionActive : ''}`}
              onClick={() => onSelect('en')}
            >
              <span className={styles.optionCheck} aria-hidden="true">
                {language === 'en' ? '✓' : '\u00a0'}
              </span>
              <span className={styles.optionLabel}>{t('LANG_OPTION_ENGLISH')}</span>
              <span className={styles.optionHint}>EN</span>
            </button>
            <button
              type="button"
              role="option"
              aria-selected={language === 'es'}
              className={`${styles.option} ${language === 'es' ? styles.optionActive : ''}`}
              onClick={() => onSelect('es')}
            >
              <span className={styles.optionCheck} aria-hidden="true">
                {language === 'es' ? '✓' : '\u00a0'}
              </span>
              <span className={styles.optionLabel}>{t('LANG_OPTION_SPANISH')}</span>
              <span className={styles.optionHint}>ES</span>
            </button>
          </div>
        )}
      </div>
    );
  }
);
