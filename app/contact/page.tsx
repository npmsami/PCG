import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BreadcrumbSchema } from '../components/SchemaOrg';
import ContactForm from './ContactForm';
import ContactPageHero from './ContactPageHero';
import '../styles/contact.css';

export const metadata: Metadata = {
  title: 'Contact PCG Contractors | Free Home Inspection in Texas',
  description:
    'Contact PCG Contractors for roofing, siding, gutters, interior repairs, storm damage restoration, and insurance claim support across Texas. Schedule your free inspection.',
  keywords: [
    'contact pcg contractors',
    'free home inspection texas',
    'home repair contractor texas',
    'storm damage restoration contact',
    'insurance repair contractor texas',
    'roofing contractor san antonio',
    'general contractor texas',
  ],
  openGraph: {
    title: 'Contact PCG Contractors | Free Home Inspection in Texas',
    description:
      'Reach PCG Contractors for whole-home repair, roofing, storm restoration, and insurance-supported projects across Texas. We respond quickly.',
    url: 'https://pcgroofing.net/contact',
    siteName: 'PCG Contractors',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PCG Contractors — contact us for a free home inspection',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact PCG Contractors | Free Home Inspection in Texas',
    description:
      'Roofing, siding, gutters, interior repairs, storm damage restoration, and insurance claim support across Texas.',
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
            <ContactPageHero />
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
