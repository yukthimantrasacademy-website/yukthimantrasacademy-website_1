'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function PlatformComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const mainSiteUrl = process.env.NEXT_PUBLIC_MAIN_SITE_URL || 'https://yukthimantra.com';
  const eventsSiteUrl = process.env.NEXT_PUBLIC_EVENTS_SITE_URL || 'https://events.yukthimantra.com';

  return (
    <div className={styles.wrapper}>
      <div className={styles.gridOverlay} />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span>YukthiMantra</span>
          <span className={styles.logoBadge}>Platform</span>
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
          Academy Platform • Coming Soon
        </div>

        <h1 className={styles.title}>
          The Next-Generation <br />
          <span className={styles.titleAccent}>Learning & Mentorship</span> Ecosystem
        </h1>

        <p className={styles.description}>
          We are crafting an intelligent candidate and mentor portal designed to accelerate
          high-impact healthcare, AI, and technical careers with direct 1-on-1 industry guidance.
        </p>

        {/* Waitlist Form */}
        <div className={styles.formContainer}>
          {submitted ? (
            <div className={styles.successMessage}>
              ✨ Thank you! You will be among the first to get exclusive beta access.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.waitlistForm}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work or student email"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Request Early Access
              </button>
            </form>
          )}
        </div>

        {/* Feature Teasers */}
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.cardIcon}>
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <h3 className={styles.cardTitle}>1-on-1 Industry Mentorship</h3>
            <p className={styles.cardText}>
              Direct weekly 1-on-1 sessions with seasoned data architects, healthcare AI specialists, and domain leaders.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardIcon}>
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <h3 className={styles.cardTitle}>Real-World Project Labs</h3>
            <p className={styles.cardText}>
              Interactive simulation sandboxes working on real healthcare data pipelines, compliance frameworks, and AI systems.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardIcon}>
              <span className="material-symbols-outlined">verified</span>
            </div>
            <h3 className={styles.cardTitle}>Verified Competency Badges</h3>
            <p className={styles.cardText}>
              Provable, tamper-proof skill certifications recognized by top healthcare & tech enterprise hiring partners.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href={mainSiteUrl} className={styles.footerLink}>Main Website</a>
          <span>•</span>
          <a href={eventsSiteUrl} className={styles.footerLink}>Events Portal</a>
          <span>•</span>
          <a href={`${mainSiteUrl}/contact`} className={styles.footerLink}>Contact Us</a>
        </div>
        <p>© {new Date().getFullYear()} YukthiMantra's Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
