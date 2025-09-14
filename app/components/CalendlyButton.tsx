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

      return () => {
        // Clean up script when component unmounts
        document.body.removeChild(script);
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
              data-url="https://calendly.com/ims-n8n/30min?primary_color=ff5200" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      )}
    </>
  );
}
