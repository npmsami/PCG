import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import '../styles/about.css'

export const metadata = {
  title: 'About PCG Roofing',
  description: 'Learn about PCG Roofing, Texas roofing experts with 15+ years of experience.',
}

export default function About() {
  return (
    <main>
      <Navigation />

      <div className="container">
        <article className="about-content">
          <section className="about-hero">
            <h1 className="heading-1"><p>About PCG Roofing</p></h1>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Trusted Texas Roofing Experts</h2>
            <p className="text-medium">
              PCG Roofing is a <strong>Texas based roofing company</strong> dedicated to protecting homes and businesses through reliable, high-quality roofing services. With over <strong>15 years of hands-on experience</strong>, we specialize in roof repair, roof replacement, storm damage restoration, and insurance claim assistance—delivering results homeowners can trust.
            </p>
            <p className="text-medium">
              We understand that roof damage can be stressful. That's why our team focuses on making the process simple, transparent, and efficient—from the first inspection to the final nail.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading">Our Mission</h2>
            <p className="text-medium">
              Our mission is to <strong>protect Texas homes and properties</strong> by delivering dependable roofing solutions with integrity, craftsmanship, and clear communication. We aim to remove uncertainty from the roofing process by guiding our customers every step of the way.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-subheading-large">What Sets Us Apart</h2>
          </section>

          <section className="about-section">
            <h3 className="about-highlight">Experience You Can Rely On</h3>
            <p className="text-medium">
              With more than <strong>15 years of roofing experience</strong>, PCG Roofing has restored <strong>thousands of roofs across Texas</strong>. Our team is trained to handle everything from minor repairs to full roof replacements.
            </p>
          </section>

          <section className="about-section">
            <h3 className="about-highlight">Licensed &amp; Insured in Texas</h3>
            <p className="text-medium">
              PCG Roofing is fully <strong>licensed and insured</strong>, giving homeowners peace of mind knowing their property is protected and their project is handled professionally.
            </p>
          </section>

          <section className="about-section">
            <h3 className="about-highlight">Insurance Claim Assistance</h3>
            <p className="text-medium">
              We work directly with insurance companies to help homeowners navigate the claims process. From documentation to approvals, we manage the details so you don't have to.
            </p>
          </section>

          <section className="about-section">
            <h3 className="about-highlight">Quality Materials &amp; Skilled Installers</h3>
            <p className="text-medium">
              We partner with trusted manufacturers and certified installers to ensure every roof is built to last—using materials designed to withstand Texas weather.
            </p>
          </section>

          <section className="about-section">
            <h3 className="about-highlight">Our Proven Process</h3>
            <div className="about-process">
              <p className="text-medium">
                <strong>Free Roof Inspection</strong>
              </p>
              <p className="text-medium">
                We assess your roof, document any damage, and provide a clear, honest evaluation.
              </p>
            </div>
            <div className="about-process">
              <p className="text-medium">
                <strong>Insurance Claim Support</strong>
              </p>
              <p className="text-medium">
                If applicable, we assist with insurance claims and explain your options before any work begins.
              </p>
            </div>
            <div className="about-process">
              <p className="text-medium">
                <strong>Professional Roof Restoration</strong>
              </p>
              <p className="text-medium">
                Our experienced crew completes the project efficiently, safely, and to the highest standards.
              </p>
            </div>
          </section>

          <section className="about-section">
            <h3 className="about-highlight">Serving Communities Across Texas</h3>
            <p className="text-medium">
              PCG Roofing proudly serves homeowners and businesses throughout <strong>Texas</strong>, including major metro areas and surrounding communities. Our local expertise allows us to address region-specific roofing challenges such as storms, heat exposure, and material longevity.
            </p>
          </section>

          <section className="about-section">
            <h3 className="about-highlight">Our Commitment to You</h3>
            <p className="text-medium">
              When you choose PCG Roofing, you're choosing a team that values:
            </p>
            <ul className="about-values">
              <li>Honesty and transparency</li>
              <li>Quality workmanship</li>
              <li>Timely project completion</li>
              <li>Long-term customer satisfaction</li>
            </ul>
            <p className="text-medium">
              We don't just repair roofs—we help protect what matters most.
            </p>
          </section>

          <section className="about-section">
            <h3 className="about-highlight">Get Started Today</h3>
            <p className="text-medium">
              Whether you need a roof inspection, emergency repair, or full replacement, PCG Roofing is here to help.
            </p>
            <p className="text-medium">
              <strong>Schedule a Free Roof Inspection today and protect your Texas home with confidence.</strong>
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  )
}
