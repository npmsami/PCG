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
          <section className="about-hero">
            <h1 className="heading-1">About Us</h1>
          </section>

          <section className="about-section">
            <p className="text-medium">We build practical, reliable technology solutions that help businesses operate more effectively. Our focus is on delivering tools and services that solve real problems with clarity and precision, without unnecessary complexity.</p>
          </section>

          <section className="about-section">
            <p className="text-medium">Our values guide everything we do: clarity in communication and design, excellence in execution, and a commitment to long-term impact. We believe in building relationships based on trust, delivering sustainable solutions, and contributing meaningfully to our clients' success.</p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  )
}
