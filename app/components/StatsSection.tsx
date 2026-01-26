'use client';

export default function StatsSection() {
  const stats = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 16H36V12C36 10.9391 35.5786 9.92172 34.8284 9.17157C34.0783 8.42143 33.0609 8 32 8H16C14.9391 8 13.9217 8.42143 13.1716 9.17157C12.4214 9.92172 12 10.9391 12 12V16H10C8.89543 16 8 16.8954 8 18V36C8 37.1046 8.89543 38 10 38H38C39.1046 38 40 37.1046 40 36V18C40 16.8954 39.1046 16 38 16ZM16 12H32V16H16V12ZM36 34H12V20H36V34Z" fill="white"/>
          <path d="M20 24H28V28H20V24Z" fill="white"/>
        </svg>
      ),
      title: "Insurance",
      subtitle: "Claim",
      description: "Assistance"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40Z" fill="white"/>
          <path d="M24 12V24L32 32L34.8 29.2L28 22.4V12H24Z" fill="white"/>
        </svg>
      ),
      title: "Fast",
      subtitle: "Turnaround",
      description: "Times"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 36L12.7 42.4L15.2 29.9L5.4 20.6L18.1 18.8L24 7L29.9 18.8L42.6 20.6L32.8 29.9L35.3 42.4L24 36Z" fill="white"/>
        </svg>
      ),
      title: "15+ Years",
      subtitle: "of",
      description: "Experience"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6L26.83 12.85L34 8L32.17 15.15L40 16L34 22L40 28L32.17 28.85L34 36L26.83 31.15L24 38L21.17 31.15L14 36L15.83 28.85L8 28L14 22L8 16L15.83 15.15L14 8L21.17 12.85L24 6Z" fill="white"/>
          <path d="M24 12V32L18 28V18L24 12Z" fill="white"/>
          <path d="M24 12L30 18V28L24 32V12Z" fill="white"/>
        </svg>
      ),
      title: "Thousands",
      subtitle: "of Roofs",
      description: "Restored"
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3 className="stat-title">{stat.title}</h3>
                <p className="stat-subtitle">{stat.subtitle}</p>
                <p className="stat-description">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          background: #2C2C2C;
          padding: 80px 0;
          border-radius: var(--border-radius-medium);
          margin: 40px var(--page-padding) 0;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 64px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 60px;
        }

        .stat-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .stat-icon {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 12px;
        }

        .stat-content {
          text-align: center;
        }

        .stat-title {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 18px;
          font-weight: 700;
          line-height: 130%;
          margin-bottom: 4px;
        }

        .stat-subtitle {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 16px;
          font-weight: 400;
          line-height: 130%;
          margin-bottom: 2px;
        }

        .stat-description {
          color: var(--white);
          font-family: var(--font-roboto);
          font-size: 16px;
          font-weight: 400;
          line-height: 130%;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
          }

          .container {
            padding: 0 40px;
          }
        }

        @media (max-width: 768px) {
          .stats-section {
            margin: 40px 20px 0;
            padding: 60px 0;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }

          .container {
            padding: 0 24px;
          }

          .stat-icon {
            width: 64px;
            height: 64px;
          }

          .stat-title {
            font-size: 16px;
          }

          .stat-subtitle,
          .stat-description {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .stat-item {
            gap: 16px;
          }

          .stat-icon {
            width: 56px;
            height: 56px;
          }

          .stat-title {
            font-size: 14px;
          }

          .stat-subtitle,
          .stat-description {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
