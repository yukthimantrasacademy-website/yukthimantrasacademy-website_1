import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons/GoogleIcons';
import { FooterAnimation } from '@/components/shared/FooterAnimation';
import { FooterWordmark } from './FooterWordmark';
import styles from './Footer.module.css';

// Cohesive SVG icons for social media
const XIcon: React.FC<{ size?: number; className?: string }> = ({ size = 15, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 15, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 15, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 15, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <FooterAnimation>
    <footer className={styles.footer}>
      <div className="container">
        {/* TOP ROW: 4 COLUMNS */}
        <div className={styles.topRow}>
          {/* COL 1: Short Statement in 2 lines */}
          <div className={styles.statementCol} data-footer="col">
            <p className={styles.statementText}>
              <span className={styles.lineOne}>YukthiMantra&apos;s Academy is the premier technology + healthcare</span>
              <br className={styles.statementBr} />
              <span className={styles.lineTwo}>career academy for graduate learners.</span>
            </p>
          </div>

          {/* COL 2: Explore Navigation */}
          <div className={styles.navCol} data-footer="col">
            <span className={styles.colHeading}>Explore</span>
            <ul className={styles.linksList}>
              <li>
                <Link href="/programmes">Programmes</Link>
              </li>
              <li>
                <Link href="/career-pathways">Career Pathways</Link>
              </li>
              <li>
                <Link href="/eligibility">Eligibility</Link>
              </li>
              <li>
                <Link href="/admission-counselling">Admission Counselling</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* COL 3: Follow Us Pills (Consistent App Icons) */}
          <div className={styles.socialCol} data-footer="col">
            <span className={styles.colHeading}>Follow us</span>
            <div className={styles.socialPills}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
              >
                <XIcon size={14} className={styles.socialIcon} />
                <span>@YukthiMantra</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
              >
                <InstagramIcon size={14} className={styles.socialIcon} />
                <span>@YukthiMantra</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
              >
                <LinkedinIcon size={14} className={styles.socialIcon} />
                <span>@YukthiMantra</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialPill}
              >
                <YoutubeIcon size={14} className={styles.socialIcon} />
                <span>@YukthiMantra</span>
              </a>
            </div>
          </div>

          {/* COL 4: Action / Direct CTAs (Website Brand Colors) */}
          <div className={styles.actionCol} data-footer="col">
            {/* Primary Blue CTA Card */}
            <Link href="/contact" className={styles.actionCardPrimary}>
              <div className={styles.actionCardTop}>
                <span className={styles.actionTitlePrimary}>Call Academic Desk</span>
                <div className={styles.actionArrowPrimary}>
                  <ArrowUpRight size={14} />
                </div>
              </div>
              <span className={styles.actionSubtext}>Let&apos;s talk about your pathway</span>
            </Link>

            {/* Dark Navy CTA Card */}
            <Link href="/programmes" className={styles.actionCardSecondary}>
              <div className={styles.actionCardTop}>
                <span className={styles.actionTitleSecondary}>Programmes &amp; Tracks</span>
                <div className={styles.actionArrowSecondary}>
                  <ArrowUpRight size={14} />
                </div>
              </div>
              <span className={styles.actionSubtext}>Explore 11 healthcare tech courses</span>
            </Link>
          </div>
        </div>
      </div>

      {/* MASSIVE HERO BRAND WATERMARK WORDMARK DISPLAY (Unclipped, Dynamic GSAP Flash Beam) */}
      <FooterWordmark />

      <div className="container">
        {/* BOTTOM COPYRIGHT & LOCATION BAR */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <span>YukthiMantra&apos;s Academy © {new Date().getFullYear()}</span>
            <span className={styles.dot}>•</span>
            <Link href="/eligibility" className={styles.legalLink}>
              Eligibility Policy
            </Link>
            <span className={styles.dot}>•</span>
            <Link href="/contact" className={styles.legalLink}>
              Privacy &amp; Terms
            </Link>
          </div>

          <div className={styles.bottomRight}>
            <span>India 🇮🇳</span>
            <span className={styles.dot}>•</span>
            <span>Healthcare + Technology</span>
          </div>
        </div>
      </div>
    </footer>
    </FooterAnimation>
  );
};
