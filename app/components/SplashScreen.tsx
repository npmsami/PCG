'use client';

import React, { useState, useEffect } from 'react';
import styles from './SplashScreen.module.css';

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after a delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.splashScreen}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <span>PCG</span>
          <span className={styles.roofing}>ROOFING</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
