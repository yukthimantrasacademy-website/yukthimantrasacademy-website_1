'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, PhoneCall, CheckCircle2 } from 'lucide-react';
import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './CTASection.module.css';
import { cn } from '@/lib/utils/cn';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showHighlights?: boolean;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Stay updated on the latest programmes, cohort intakes, and counselling.',
  subtitle = 'Get personalized eligibility mapping and 1-on-1 academic guidance.',
  primaryCtaText = 'BOOK COUNSELLING NOW',
  primaryCtaHref = '/admission-counselling',
  secondaryCtaText = 'Check Your Eligibility',
  secondaryCtaHref = '/eligibility',
  showHighlights = true,
  className,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // GSAP scroll-triggered animations
  useEffect(() => {
    if (!isClient() || !sectionRef.current || prefersReducedMotion()) return;

    const container = sectionRef.current;

    const ctx = gsap.context(() => {
      // Card entrance
      const card = container.querySelector(`.${styles.ctaCard}`);
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.8,
            ease: EASE.primary,
            scrollTrigger: { trigger: container, start: 'top 90%', once: true },
          }
        );
      }

      // Stagger check items
      const checkItems = container.querySelectorAll(`.${styles.checkItem}`);
      if (checkItems.length > 0) {
        gsap.fromTo(checkItems,
          { opacity: 0, x: -15 },
          {
            opacity: 1, x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: EASE.primary,
            scrollTrigger: { trigger: container, start: 'top 75%', once: true },
          }
        );
      }

      // Glow orbs slow motion
      const orbRight = container.querySelector(`.${styles.glowOrbRight}`);
      const orbLeft = container.querySelector(`.${styles.glowOrbLeft}`);
      if (orbRight) {
        gsap.to(orbRight, { x: '+=12', y: '+=8', duration: TIMING.backgroundMotion, ease: EASE.float, repeat: -1, yoyo: true });
      }
      if (orbLeft) {
        gsap.to(orbLeft, { x: '-=10', y: '+=6', duration: TIMING.backgroundMotion + 3, ease: EASE.float, repeat: -1, yoyo: true });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section ref={sectionRef} className={cn(styles.ctaSection, className)}>
      <div className="container">
        <div className={styles.ctaCard}>
          {/* Subtle Grid Watermark Pattern */}
          <div className={styles.gridOverlay} />
          <div className={styles.glowOrbRight} />
          <div className={styles.glowOrbLeft} />

          <div className={styles.cardGrid}>
            {/* LEFT COLUMN: Main Title & Checkmarks */}
            <div className={styles.leftCol}>
              <h2 className={styles.mainTitle}>{title}</h2>

              <div className={styles.checklist}>
                <div className={styles.checkItem}>
                  <div className={styles.checkCircle}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>Personalized 1-on-1 Academic Counselling.</span>
                </div>

                <div className={styles.checkItem}>
                  <div className={styles.checkCircle}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>Comprehensive Healthcare-Tech Eligibility Assessment.</span>
                </div>

                <div className={styles.checkItem}>
                  <div className={styles.checkCircle}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>Placement Guidance &amp; Live Practicum Access.</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Form & Direct CTAs */}
            <div className={styles.rightCol}>
              <h3 className={styles.rightHeading}>Schedule your counselling call</h3>

              {isSubmitted ? (
                <div className={styles.successBox}>
                  <CheckCircle2 size={22} className={styles.successIcon} />
                  <div>
                    <h4 className={styles.successTitle}>Request Received!</h4>
                    <p className={styles.successSub}>
                      An academic counsellor will reach out to you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.ctaForm}>
                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      placeholder="ENTER YOUR EMAIL OR PHONE"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className={styles.emailInput}
                      required
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <span>{primaryCtaText}</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}

              {/* Secondary Quick Action CTAs */}
              <div className={styles.secondaryCtaRow}>
                <Link href={secondaryCtaHref} className={styles.secondaryLink}>
                  <span>{secondaryCtaText}</span>
                  <ArrowRight size={13} />
                </Link>

                <span className={styles.dividerDot}>•</span>

                <Link href="/contact" className={styles.secondaryLink}>
                  <PhoneCall size={13} />
                  <span>Talk to Advisor</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
