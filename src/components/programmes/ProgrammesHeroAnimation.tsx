'use client';

import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { gsap, EASE, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './ProgrammesHeroAnimation.module.css';

export const ProgrammesHeroAnimation: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!isClient() || !containerRef.current || prefersReducedMotion()) return;

    const container = containerRef.current;
    const badge = badgeRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          once: true,
        },
      });

      if (badge) {
        tl.fromTo(
          badge,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: EASE.primary }
        );
      }

      if (title) {
        tl.fromTo(
          title,
          { opacity: 0, y: 35, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: EASE.primary },
          '-=0.35'
        );
      }

      if (subtitle) {
        tl.fromTo(
          subtitle,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: EASE.primary },
          '-=0.4'
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.heroSection}>
      <div className={styles.heroBgAura} />

      <div className="container">
        <div className={styles.heroContent}>
          <div ref={badgeRef} className={styles.badgeWrap}>
            <span className="badge-pill badge-pill-accent">
              <Sparkles size={13} />
              Industry-Aligned Curriculum
            </span>
          </div>

          <h1 ref={titleRef} className={styles.pageTitle}>
            Explore all courses<br className={styles.titleBr} /> &amp; <span className={styles.titleHighlight}>learning paths</span>.
          </h1>

          <p ref={subtitleRef} className={styles.pageSubtitle}>
            Discover industry-relevant, career-focused programmes carefully crafted to help you gain practical skills in technology, AI, and healthcare operations.
          </p>
        </div>
      </div>
    </section>
  );
};
