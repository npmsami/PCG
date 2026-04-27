import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import '../styles/about.css'

export const metadata = {
  title: 'Privacy Policy | PCG Contractors',
  description:
    'Read the PCG Contractors Privacy Policy to understand how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <main>
      <Navigation />

      <div className="container">
        <article className="about-content">
          <section className="about-hero">
            <h1 className="heading-1">
              <p>Privacy Policy</p>
            </h1>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Introduction</h2>
            <p className="text-medium">
              PCG Contractors respects your privacy and is committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, store, and protect the information you provide when you interact
              with our website, request services, or communicate with our company.
            </p>
            <p className="text-medium">
              By using our website or submitting your information through our forms, you agree to the practices
              described in this Privacy Policy.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Information We Collect</h2>
            <p className="text-medium">
              We may collect the following types of information when you interact with our website or request services:
            </p>

            <h3 className="about-highlight">Personal Information</h3>
            <ul className="about-values">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property address</li>
              <li>Service request details</li>
              <li>Insurance claim related information if voluntarily provided</li>
            </ul>

            <h3 className="about-highlight">Website Information</h3>
            <ul className="about-values">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited on our website</li>
              <li>Cookies and analytics data</li>
            </ul>

            <h3 className="about-highlight">Information Provided Through Forms</h3>
            <p className="text-medium">
              When you fill out a contact form, request a home inspection, request storm damage assistance, or respond
              to advertisements or landing pages, we may collect the information you submit including your contact
              details and service request information.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">How We Use Your Information</h2>
            <p className="text-medium">PCG Contractors uses the information we collect to:</p>
            <ul className="about-values">
              <li>Respond to customer inquiries</li>
              <li>Schedule home inspections or service appointments</li>
              <li>Provide estimates and service updates</li>
              <li>Coordinate home repair, restoration, or insurance claim assistance</li>
              <li>Send follow-up communications related to your request</li>
              <li>Improve our website and customer experience</li>
              <li>Communicate with customers about services they requested</li>
            </ul>
            <p className="text-medium">
              We only use the information necessary to provide our services and operate our business.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">SMS Communications</h2>
            <p className="text-medium">
              If you provide your phone number through our website forms, service requests, or other lead sources, you
              may receive SMS text messages from PCG Contractors related to your inquiry or requested services.
            </p>
            <p className="text-medium">These messages may include:</p>
            <ul className="about-values">
              <li>Appointment confirmations</li>
              <li>Inspection scheduling</li>
              <li>Service updates</li>
              <li>Follow-up regarding roofing or repair requests</li>
            </ul>
            <p className="text-medium">Message frequency may vary.</p>
            <p className="text-medium">
              Message and data rates may apply depending on your mobile carrier plan.
            </p>
            <p className="text-medium">
              You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message
              you receive from us.
            </p>
            <p className="text-medium">
              For assistance, reply <strong>HELP</strong> or contact our office directly.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Sharing of Information</h2>
            <p className="text-medium">PCG Contractors does not sell, rent, or trade your personal information.</p>
            <p className="text-medium">We may share information only in the following limited situations:</p>
            <ul className="about-values">
              <li>With trusted service providers who help operate our business systems</li>
              <li>With contractors or staff assisting with your requested services</li>
              <li>When required by law or legal process</li>
              <li>To protect the safety, rights, or property of PCG Contractors or others</li>
            </ul>

            <h3 className="about-highlight">SMS Compliance Statement</h3>
            <p className="text-medium">
              Mobile information will not be shared with third parties or affiliates for marketing or promotional
              purposes.
            </p>
            <p className="text-medium">
              All the above categories exclude text messaging originator opt-in data and consent; this information will
              not be shared with any third parties.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Data Security</h2>
            <p className="text-medium">
              We take reasonable measures to protect your personal information from unauthorized access, misuse, or
              disclosure. While no system can guarantee absolute security, we use appropriate technical and
              administrative safeguards to protect the information we collect.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Cookies and Website Analytics</h2>
            <p className="text-medium">
              Our website may use cookies or similar technologies to improve the user experience and analyze website
              performance.
            </p>
            <p className="text-medium">
              Cookies help us understand how visitors interact with our website so we can improve functionality and
              services. You may disable cookies in your browser settings if you prefer.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Your Choices and Rights</h2>
            <p className="text-medium">
              You may choose not to provide certain personal information; however, doing so may limit our ability to
              provide services.
            </p>
            <p className="text-medium">You may also request to:</p>
            <ul className="about-values">
              <li>Update your contact information</li>
              <li>Request removal from communications</li>
              <li>Opt out of SMS communications by replying STOP</li>
            </ul>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Updates to This Privacy Policy</h2>
            <p className="text-medium">
              PCG Contractors may update this Privacy Policy from time to time to reflect changes in business practices or
              legal requirements. The updated policy will be posted on this page with the revised effective date.
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  )
}

