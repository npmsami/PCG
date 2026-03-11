import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import '../styles/about.css'

export const metadata = {
  title: 'Terms and Conditions - PCG Roofing',
  description:
    'Read the PCG Roofing Terms and Conditions to understand the rules for using our website and services.',
}

export default function TermsAndConditions() {
  return (
    <main>
      <Navigation />

      <div className="container">
        <article className="about-content">
          <section className="about-hero">
            <h1 className="heading-1">
              <p>Terms and Conditions</p>
            </h1>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Introduction</h2>
            <p className="text-medium">
              Welcome to PCG Roofing. These Terms and Conditions outline the rules and guidelines for using our website
              and services. By accessing this website or submitting your information through our forms, you agree to
              comply with these Terms and Conditions.
            </p>
            <p className="text-medium">
              If you do not agree with any part of these terms, please do not use our website or services.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Services Provided</h2>
            <p className="text-medium">
              PCG Roofing provides roofing inspections, storm damage assessments, insurance-related repair coordination,
              and home repair services.
            </p>
            <p className="text-medium">
              Information provided on this website is intended to help homeowners request roofing inspections, obtain
              service estimates, and communicate with our team regarding roofing services.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Use of Website</h2>
            <p className="text-medium">
              By using our website, you agree to use it only for lawful purposes and in a manner that does not infringe
              upon the rights of others.
            </p>
            <p className="text-medium">You agree not to:</p>
            <ul className="about-values">
              <li>Submit false or misleading information</li>
              <li>Attempt to gain unauthorized access to website systems</li>
              <li>Use the website in a way that disrupts or damages services</li>
            </ul>
            <p className="text-medium">
              Information submitted through our forms must be accurate and provided by individuals requesting legitimate
              roofing services.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Estimates and Service Agreements</h2>
            <p className="text-medium">
              Any estimates provided through our website or communications are preliminary and subject to inspection and
              confirmation.
            </p>
            <p className="text-medium">
              Final service pricing, scope of work, and timelines will be outlined in written service agreements or
              contracts between PCG Roofing and the customer.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">SMS Communication Terms</h2>
            <p className="text-medium">
              By submitting your phone number through our website forms, inspection requests, advertisements, or other
              contact methods, you consent to receive SMS messages from PCG Roofing related to your service request.
            </p>
            <p className="text-medium">These messages may include:</p>
            <ul className="about-values">
              <li>Appointment scheduling</li>
              <li>Inspection confirmations</li>
              <li>Service updates</li>
              <li>Follow-up regarding roofing inspections or repairs</li>
            </ul>
            <p className="text-medium">
              Message frequency may vary depending on your service request.
            </p>
            <p className="text-medium">
              Message and data rates may apply depending on your mobile carrier.
            </p>
            <p className="text-medium">
              You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message
              sent by PCG Roofing.
            </p>
            <p className="text-medium">
              For assistance, reply <strong>HELP</strong> or contact our office directly.
            </p>
            <p className="text-medium">SMS consent is not a condition of purchasing services.</p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">User Responsibilities</h2>
            <p className="text-medium">
              Users are responsible for ensuring that the contact information they provide is accurate and belongs to
              them.
            </p>
            <p className="text-medium">
              Users should not submit phone numbers or personal information belonging to another individual without
              permission.
            </p>
            <p className="text-medium">
              PCG Roofing is not responsible for messages sent to numbers that were incorrectly entered by the user.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Intellectual Property</h2>
            <p className="text-medium">
              All content on this website, including text, graphics, logos, and images, is the property of PCG Roofing
              and may not be copied, reproduced, or distributed without written permission.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Limitation of Liability</h2>
            <p className="text-medium">
              PCG Roofing is not liable for any indirect, incidental, or consequential damages resulting from the use of
              our website or communications.
            </p>
            <p className="text-medium">
              All services are provided in accordance with the terms outlined in formal service agreements between PCG
              Roofing and the customer.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Privacy</h2>
            <p className="text-medium">
              Your use of this website is also governed by our Privacy Policy, which explains how we collect and use
              your information.
            </p>
            <p className="text-medium">Please review our Privacy Policy for additional details.</p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Changes to Terms</h2>
            <p className="text-medium">
              PCG Roofing reserves the right to update or modify these Terms and Conditions at any time.
            </p>
            <p className="text-medium">
              Any changes will be posted on this page with the updated effective date.
            </p>
            <p className="text-medium">
              Continued use of the website after changes indicates acceptance of the updated terms.
            </p>
          </section>

          {/* Contact Information section removed as requested */}
        </article>
      </div>

      <Footer />
    </main>
  )
}

