'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function EventsComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const mainSiteUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'https://yukthimantrasacademy.com';
  const platformSiteUrl = process.env.NEXT_PUBLIC_APP_SITE_URL || 'https://app.yukthimantrasacademy.com';

  return (
    <div className={styles.wrapper}>
      <div className={styles.gridOverlay} />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span>YukthiMantra</span>
          <span className={styles.logoBadge}>Events</span>
        </div>
        <a href={mainSiteUrl} className={styles.backLink}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
            arrow_back
          </span>
          Back to Main Site
        </a>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.badge}>
          <span className={styles.pulseDot} />
          Events & Workshops • Coming Soon
        </div>

        <h1 className={styles.title}>
          World-Class <br />
          <span className={styles.titleAccent}>Tech Seminars & Masterclasses</span>
        </h1>

        <p className={styles.description}>
          Join live hackathons, keynote seminars, and technical workshops led by pioneers
          in Healthcare AI, Enterprise Data Engineering, and Emerging Technologies.
        </p>

        {/* Waitlist / Notification Form */}
        <div className={styles.formContainer}>
          {submitted ? (
            <div className={styles.successMessage}>
              🎉 You are registered! We will notify you when early seat reservations open.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.waitlistForm}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for priority event invites"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Get Event Alerts
              </button>
            </form>
          )}
        </div>

        {/* Event Teasers */}
        <div className={styles.eventsGrid}>
          <div className={styles.eventCard}>
            <span className={styles.eventTag}>Masterclass Series</span>
            <h3 className={styles.cardTitle}>AI in Precision Healthcare</h3>
            <p className={styles.cardText}>
              Deep dive into LLMs, clinical clinical-trial intelligence, and medical imaging architectures with senior researchers.
            </p>
          </div>

          <div className={styles.eventCard}>
            <span className={styles.eventTag}>Global Hackathon</span>
            <h3 className={styles.cardTitle}>YukthiMantra Buildathon</h3>
            <p className={styles.cardText}>
              A 48-hour global challenge to build real-world data pipelines and healthcare intelligence tools with mentorship.
            </p>
          </div>

          <div className={styles.eventCard}>
            <span className={styles.eventTag}>Executive Panel</span>
            <h3 className={styles.cardTitle}>Career Pathways in Health-Tech</h3>
            <p className={styles.cardText}>
              Fireside panel with hiring directors and technology chiefs discussing high-growth roles and industry expectations.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href={mainSiteUrl} className={styles.footerLink}>Main Website</a>
          <span>•</span>
          <a href={platformSiteUrl} className={styles.footerLink}>Academy Platform</a>
          <span>•</span>
          <a href={`${mainSiteUrl}/contact`} className={styles.footerLink}>Contact Us</a>
        </div>
        <p>© {new Date().getFullYear()} YukthiMantra&apos;s Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
