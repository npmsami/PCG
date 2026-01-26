'use client';

import { useState, useEffect } from 'react';
import './CalendlyButton.css';

interface CalendlyButtonProps {
  text: string;
  className?: string;
}

export default function CalendlyButton({ text, className = '' }: CalendlyButtonProps) {
  const [showCalendly, setShowCalendly] = useState(false);

  // Initialize Calendly when component mounts
  useEffect(() => {
    // Load Calendly script only when needed
    if (showCalendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';

      return () => {
        // Clean up script when component unmounts
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        // Restore body scrolling
        document.body.style.overflow = '';
      };
    }
  }, [showCalendly]);

  const openCalendly = () => {
    setShowCalendly(true);
  };

  const closeCalendly = () => {
    setShowCalendly(false);
  };

  return (
    <>
      <button className={`calendly-btn ${className}`} onClick={openCalendly}>
        <span>{text}</span>
      </button>

      {showCalendly && (
        <div className="calendly-overlay">
          <div className="calendly-popup">
            <div className="calendly-popup-header">
              <button className="calendly-close-btn" onClick={closeCalendly}>
                &times;
              </button>
            </div>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/roofingpcg/30min?primary_color=ff5a00&hide_gdpr_banner=1" 
              style={{ width: '100%', height: '100%', minHeight: '700px' }}
            />
          </div>
        </div>
      )}
    </>
  );
}