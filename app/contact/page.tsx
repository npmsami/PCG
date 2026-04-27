import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BreadcrumbSchema } from '../components/SchemaOrg';
import ContactForm from './ContactForm';

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

        <style jsx>{`
          .contact-page {
            margin-top: 0;
            padding-top: 132px;
          }

          .contact-hero {
            margin: 0 var(--page-padding);
          }

          .hero-card {
            border-radius: var(--border-radius-medium);
            padding: 56px;
            background: linear-gradient(135deg, #1a1a1a 0%, #323232 55%, #e04826 100%);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
          }

          .hero-title {
            color: var(--white);
            font-family: var(--font-roboto);
            font-size: 48px;
            font-weight: 700;
            line-height: 120%;
            margin-bottom: 16px;
          }

          .hero-subtitle {
            color: rgba(255, 255, 255, 0.92);
            font-family: var(--font-roboto);
            font-size: 20px;
            font-weight: 400;
            line-height: 150%;
            max-width: 760px;
          }

          .contact-form-section {
            margin: 40px var(--page-padding) 0;
            padding-bottom: 40px;
          }

          .form-card {
            border-radius: var(--border-radius-medium);
            padding: 48px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background: var(--white);
            box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
          }

          @media (max-width: 768px) {
            .contact-hero,
            .contact-form-section {
              margin-left: 20px;
              margin-right: 20px;
            }

            .hero-card {
              padding: 32px 24px;
              border-radius: 28px;
            }

            .contact-page {
              padding-top: 96px;
            }

            .hero-title {
              font-size: 34px;
            }

            .hero-subtitle {
              font-size: 16px;
            }

            .form-card {
              padding: 28px 20px;
              border-radius: 28px;
            }
          }

          @media (max-width: 480px) {
            .contact-hero,
            .contact-form-section {
              margin-left: 16px;
              margin-right: 16px;
            }

            .hero-title {
              font-size: 28px;
            }

            .contact-page {
              padding-top: 84px;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
