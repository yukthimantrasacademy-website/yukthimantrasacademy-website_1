'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BarChart3, ArrowRight, ShieldCheck, Activity, Sparkles } from '@/components/icons/GoogleIcons';
import { gsap, ScrollTrigger, EASE, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './AboutBentoGrid.module.css';
import { cn } from '@/lib/utils/cn';

interface AvatarItem {
  emoji: string;
  bg: string;
  tooltip: string;
}

const avatars: AvatarItem[] = [
  { emoji: '🎓', bg: '#1e293b', tooltip: '100% Graduate Focused' },
  { emoji: '🏥', bg: '#0284c7', tooltip: 'Top Hospital Networks' },
  { emoji: '💻', bg: '#059669', tooltip: 'Health-Tech Workflows' },
  { emoji: '📊', bg: '#7c3aed', tooltip: 'Clinical Analytics Teams' },
];

export const AboutBentoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Number Counter States
  const [count1, setCount1] = useState(0); // -> 11+
  const [count2, setCount2] = useState(0); // -> 100%
  const [count3, setCount3] = useState(0); // -> 50k+
  const [count4, setCount4] = useState(0); // -> 4 Tracks

  // Hover states for interactive elements
  const [hoveredAvatar, setHoveredAvatar] = useState<number | null>(null);

  useEffect(() => {
    if (!isClient() || !containerRef.current) return;

    if (prefersReducedMotion()) {
      setCount1(11);
      setCount2(100);
      setCount3(50);
      setCount4(4);
      return;
    }

    const container = containerRef.current;
    const cards = container.querySelectorAll(`.${styles.bentoCard}, .${styles.bentoCardLime}, .${styles.bentoCardDark}`);

    const ctx = gsap.context(() => {
      // Trigger animations exactly when the cards reach 50% on screen!
      ScrollTrigger.create({
        trigger: container,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          // 1. Dynamic Card Load Animation (Stagger reveal)
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 40, scale: 0.94 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                stagger: 0.12,
                ease: EASE.primary,
              }
            );
          }

          // 2. GSAP Number Counters Animation
          const counterObj = {
            c1: 0,
            c2: 0,
            c3: 0,
            c4: 0,
          };

          gsap.to(counterObj, {
            c1: 11,
            c2: 100,
            c3: 50,
            c4: 4,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              setCount1(Math.round(counterObj.c1));
              setCount2(Math.round(counterObj.c2));
              setCount3(Math.round(counterObj.c3));
              setCount4(Math.round(counterObj.c4));
            },
          });
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.bentoGrid}>
      {/* =========================================================================
          CARD 1: BLUE CARD (YM ACADEMY — 11+ PROGRAMMES)
          ========================================================================= */}
      <Link href="/programmes" className={cn(styles.bentoCard, styles.bentoCardBlue)}>
        <div className={styles.blueCardTop}>
          <span className={styles.blueCardBrand}>YM ACADEMY</span>
          <div className={styles.blueCardIconWrap}>
            <BarChart3 size={17} />
          </div>
        </div>

        <div className={styles.blueCardOverlay}>
          <span className={styles.overlayMetric}>{count1}+</span>
          <p className={styles.overlayText}>
            Specialised programmes bridging AI, analytics, and healthcare operations.
          </p>

          <div className={styles.cardTagsRow}>
            <span className={styles.miniTag}>Data Analytics</span>
            <span className={styles.miniTag}>AI &amp; GenAI</span>
            <span className={styles.miniTag}>Medical Coding</span>
            <span className={styles.miniTag}>RCM</span>
          </div>
        </div>
      </Link>

      {/* =========================================================================
          CARD 2: LIGHT MIDDLE CARD (100% COMMITMENT & INTERACTIVE AVATARS)
          ========================================================================= */}
      <div className={cn(styles.bentoCard, styles.bentoCardLight)}>
        <div>
          <div className={styles.lightCardHeaderWrap}>
            <div className={styles.lightCardHeader}>Commitment to graduate outcomes</div>
            <div className={styles.verifiedBadge}>
              <span className={styles.greenDot} />
              <span>Verified</span>
            </div>
          </div>

          <div className={styles.lightCardMetric}>{count2}%</div>

          {/* Interactive Avatars with Hover Badges */}
          <div className={styles.avatarsRow}>
            {avatars.map((item, idx) => (
              <div
                key={idx}
                className={styles.avatarInteractiveWrap}
                onMouseEnter={() => setHoveredAvatar(idx)}
                onMouseLeave={() => setHoveredAvatar(null)}
              >
                {hoveredAvatar === idx && (
                  <div className={styles.avatarTooltip}>{item.tooltip}</div>
                )}
                <div
                  className={styles.avatarCircle}
                  style={{ background: item.bg }}
                >
                  {item.emoji}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.lightCardQuote}>
          &ldquo;Every applicant undergoes personalised academic counselling to ensure matched programme selection and progression.&rdquo;
        </p>
      </div>

      {/* =========================================================================
          COLUMN 3: STACKED RIGHT CARDS
          ========================================================================= */}
      <div className={styles.bentoColRight}>
        {/* CARD 3: LIME ACCENT CARD (50K+ DATA POINTS) */}
        <div className={styles.bentoCardLime}>
          <div className={styles.limeCardTopRow}>
            <div className={styles.limeCardHeader}>Clinical &amp; Tech Data Points</div>
            <div className={styles.limePulseIcon}>
              <Activity size={13} />
            </div>
          </div>

          <div className={styles.limeCardMetric}>{count3}k+</div>
          <p className={styles.limeCardDesc}>
            Authentic EHR records, claims cycles, and medical coding cases analysed across batches.
          </p>

          <div className={styles.limeChipsRow}>
            <span className={styles.limeChip}>EHR Datasets</span>
            <span className={styles.limeChip}>Claims Cycles</span>
            <span className={styles.limeChip}>ICD Cases</span>
          </div>
        </div>

        {/* CARD 4: DARK BOTTOM CARD (4 TRACKS) */}
        <Link href="/career-pathways" className={styles.bentoCardDark}>
          <div className={styles.darkCardTopRow}>
            <span className={styles.darkCardLabel}>Career Pathways</span>
            <div className={styles.darkArrowWrap}>
              <ArrowRight size={13} />
            </div>
          </div>

          <div className={styles.darkCardBottomRow}>
            <span className={styles.darkCardMetric}>{count4} Tracks</span>
            <div className={styles.darkTrackPills}>
              <span className={styles.darkDotPill}>Tech+AI</span>
              <span className={styles.darkDotPill}>Health</span>
              <span className={styles.darkDotPill}>Coding</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
