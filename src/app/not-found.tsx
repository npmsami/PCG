'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#0070f3', 
            color: 'white', 
            borderRadius: '0.5rem',
            textDecoration: 'none'
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
