import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import '../styles/about.css'

export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company, mission, and values.',
}

export default function About() {
  return (
    <main>
      <Navigation />
      
      <div className="container">
        <article className="about-content">
          {/* Main heading */}
          <section className="about-hero">
            <h1 className="heading-1">About Us</h1>
            <p className="text-large">Placeholder paragraph introducing the company and its core purpose. This section sets the tone for the page and helps search engines understand the main topic.</p>
          </section>

          {/* Our Mission Section */}
          <section className="about-section">
            <h2 className="heading-2">Our Mission</h2>
            <p className="text-medium">Placeholder paragraph describing the company's mission statement and primary objectives.</p>
          </section>

          {/* Company Overview Section */}
          <section className="about-section">
            <h2 className="heading-2">Company Overview</h2>
            
            <h3 className="heading-3">History</h3>
            <p className="text-medium">Placeholder paragraph about the company's history, founding, and key milestones.</p>

            <h3 className="heading-3">Growth</h3>
            <p className="text-medium">Placeholder paragraph describing the company's growth trajectory and expansion over time.</p>
          </section>

          {/* Our Values Section */}
          <section className="about-section">
            <h2 className="heading-2">Our Values</h2>
            
            <h3 className="heading-3">Value One</h3>
            <p className="text-medium">Placeholder paragraph explaining the first core value and how it influences company decisions.</p>

            <h3 className="heading-3">Value Two</h3>
            <p className="text-medium">Placeholder paragraph explaining the second core value and its importance to the organization.</p>

            <h3 className="heading-3">Value Three</h3>
            <p className="text-medium">Placeholder paragraph explaining the third core value and how it benefits customers and employees.</p>
          </section>

          {/* Team Section */}
          <section className="about-section">
            <h2 className="heading-2">Our Team</h2>
            <p className="text-medium">Placeholder paragraph describing the team composition and expertise areas.</p>
            
            <h3 className="heading-3">Leadership</h3>
            <p className="text-medium">Placeholder paragraph about key leadership members and their backgrounds.</p>
          </section>

          {/* Services or Products Section */}
          <section className="about-section">
            <h2 className="heading-2">What We Offer</h2>
            
            <h3 className="heading-3">Core Offering One</h3>
            <p className="text-medium">Placeholder paragraph describing the first main service or product offering and its benefits.</p>

            <h3 className="heading-3">Core Offering Two</h3>
            <p className="text-medium">Placeholder paragraph describing the second main service or product offering and its unique features.</p>

            <h3 className="heading-3">Core Offering Three</h3>
            <p className="text-medium">Placeholder paragraph describing the third main service or product offering and customer outcomes.</p>
          </section>

          {/* Why Choose Us Section */}
          <section className="about-section">
            <h2 className="heading-2">Why Choose Us</h2>
            
            <h3 className="heading-3">Expertise</h3>
            <p className="text-medium">Placeholder paragraph highlighting the company's expertise and industry knowledge.</p>

            <h3 className="heading-3">Reliability</h3>
            <p className="text-medium">Placeholder paragraph describing the company's track record and commitment to reliability.</p>

            <h3 className="heading-3">Customer Support</h3>
            <p className="text-medium">Placeholder paragraph explaining the quality of customer service and support offerings.</p>
          </section>

          {/* Commitment Section */}
          <section className="about-section">
            <h2 className="heading-2">Our Commitment</h2>
            <p className="text-medium">Placeholder paragraph describing the company's commitment to quality, innovation, and customer satisfaction.</p>
          </section>

          {/* Contact Call-to-Action */}
          <section className="about-section about-cta">
            <h2 className="heading-2">Get in Touch</h2>
            <p className="text-medium">Placeholder paragraph inviting visitors to contact the company for more information or inquiries.</p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  )
}
