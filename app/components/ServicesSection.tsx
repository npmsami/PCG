'use client';

import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    {
      title: "Roofing Repairs",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f6236692f79bebe3f92a08329f72112d49f892a1?width=722"
    },
    {
      title: "Roof Replacements",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d5676b2f651575ad0183c0ddc95e21eed74ec271?width=722"
    },
    {
      title: "Roofing Insurance Claims",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f80eb218a6215c804c6f6a5b4a0190fa0dbcea61?width=722"
    },
    {
      title: "Shingle Roofing Installation",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/c38331bc8ceda2967705f6b6288b77fc6e12d5bf?width=722"
    },
    {
      title: "Tile Roofing Installation",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d389c25419b297d99c00930e39d324a50447ba3f?width=722"
    },
    {
      title: "Emergency Tarping Services",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b6491b01922b2e5f70adb1165c523e552d0c9715?width=722"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Header with confidence message */}
        <div className="services-header">
          <div className="header-content">
            <div className="years-badge">
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/41381a4b237be349d87bd00aadcd8c27ae740efb?width=460"
                alt="15 Years Certification"
                width={120}
                height={120}
              />
            </div>
            <h2 className="services-title">Protect Your Home with Confidence</h2>
            <p className="services-description">
              With over 15 years of dedicated service, PCG Roofing is fully licensed and insured, ensuring peace of mind for homeowners. Our strong relationships with top insurance carriers and certified installers allow us to deliver exceptional roofing solutions quickly and efficiently.
            </p>
            <button className="services-cta-btn">
              <span>Book an Appointment</span>
            </button>
          </div>
          <div className="header-image">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/d6ef8f1c47d87444e36b9547bae45863b8a2ff5d?width=1200"
              alt="PCG Roofing professionals discussing with homeowner"
              width={600}
              height={640}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-content">
          <h3 className="services-grid-title">Comprehensive Roofing Solutions Tailored to Your Needs</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={361}
                    height={202}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4 className="service-title">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .services-section {
          background: var(--black);
          padding: var(--section-padding) 0;
          border-radius: var(--border-radius-medium);
          margin: 40px var(--page-padding) 0;
          position: relative;
        }

        .services-header {
          display: flex;
          align-items: center;
          gap: 80px;
          margin-bottom: 120px;
        }

        .header-content {
          flex: 1;
          max-width: 600px;
        }

        .services-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 48px;
          font-weight: 700;
          line-height: 120%;
          margin-bottom: 24px;
        }

        .services-description {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 25px;
          font-weight: 400;
          line-height: 150%;
          margin-bottom: 32px;
        }

        .services-cta-btn {
          display: flex;
          width: 386px;
          height: 78px;
          padding: 12px 24px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 36px;
          border: 1px solid var(--black);
          background: var(--primary-orange);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .services-cta-btn:hover {
          background: #c73d1f;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(224, 72, 38, 0.4);
        }

        .services-cta-btn span {
          color: var(--black);
          font-family: var(--font-roboto);
          font-size: 32px;
          font-weight: 700;
          line-height: 150%;
        }

        .header-image {
          flex: 1;
          max-width: 600px;
          height: 640px;
          border-radius: var(--border-radius-large);
          overflow: hidden;
        }

        .services-content {
          margin-bottom: 80px;
        }

        .services-grid-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 40px;
          font-weight: 700;
          line-height: 120%;
          margin-bottom: 64px;
          max-width: 768px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 48px;
        }

        .service-item {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .service-image {
          width: 100%;
          height: 202px;
          border-radius: var(--border-radius-small);
          overflow: hidden;
        }

        .service-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 32px;
          font-weight: 700;
          line-height: 130%;
        }

        .certifications {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 60px;
        }

        .cert-badge {
          flex-shrink: 0;
        }


        @media (max-width: 1200px) {
          .services-header {
            flex-direction: column;
            gap: 60px;
            text-align: center;
          }

          .header-image {
            max-width: 100%;
            height: 400px;
          }

          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            margin: 40px 20px 0;
            padding: 60px 0;
          }

          .services-title {
            font-size: 32px;
          }

          .services-description {
            font-size: 18px;
          }

          .services-cta-btn {
            width: 100%;
            max-width: 386px;
            height: 60px;
          }

          .services-cta-btn span {
            font-size: 24px;
          }

          .services-grid-title {
            font-size: 28px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .service-title {
            font-size: 24px;
          }

          .certifications {
            justify-content: center;
            margin-top: 40px;
          }
        }

        @media (max-width: 480px) {
          .services-title {
            font-size: 24px;
          }

          .services-description {
            font-size: 16px;
          }

          .services-cta-btn span {
            font-size: 20px;
          }

          .services-grid-title {
            font-size: 22px;
          }

          .service-title {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}
