import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BreadcrumbSchema } from '../components/SchemaOrg';
import ContactForm from './ContactForm';
import '../styles/contact.css';

export const metadata: Metadata = {
  title: 'Contact PCG Roofing | Free Roof Inspection in Texas',
  description: 'Get in touch with PCG Roofing for a free roof inspection in Texas. Call us or fill out the form — our team responds quickly. Licensed & insured Texas roofing experts.',
  keywords: ['contact pcg roofing', 'free roof inspection texas', 'roofing company contact', 'texas roofer phone number'],
  openGraph: {
    title: 'Contact PCG Roofing | Free Roof Inspection',
    description: 'Get a free roof inspection from Texas roofing experts. Call or message us today — we respond quickly.',
    url: 'https://pcgroofing.net/contact',
    siteName: 'PCG Roofing',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PCG Roofing - Contact Us for a Free Roof Inspection',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact PCG Roofing | Free Roof Inspection',
    description: 'Get a free roof inspection from Texas roofing experts.',
  },
  alternates: {
    canonical: 'https://pcgroofing.net/contact',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: 'https://pcgroofing.net' },
  { name: 'Contact', url: 'https://pcgroofing.net/contact' },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navigation />
      <main className="contact-page">
        <section className="contact-hero">
          <div className="container">
            <div className="hero-card">
              <h1 className="hero-title">Contact Us</h1>
              <p className="hero-subtitle">
                Have questions about your roof or need help with an inspection? Send us a message and our team will get back to you quickly.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="container">
            <div className="form-card">
              <ContactForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
