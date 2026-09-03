'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check } from '@/components/icons/GoogleIcons';
import { ProgrammeGraphic } from '@/components/shared/ProgrammeGraphic';
import type { Programme } from '@/types/programme';
import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './ProgrammeCard.module.css';
import { cn } from '@/lib/utils/cn';

interface ProgrammeCardProps {
  programme: Programme;
  index?: number;
  className?: string;
}

const programmeMediaPoints: Record<string, { badge: string; points: string[] }> = {
  'prog-01': {
    badge: '500+ Clinical Datasets',
    points: ['2–4 Months • Online / Hybrid', 'Excel, SQL, Python & Power BI', 'Clinical analytics portfolio & capstone'],
  },
  'prog-02': {
    badge: 'Clinical ML Models',
    points: ['6–9 Months • Weekend / Classroom', 'Python, Scikit-learn, ML & Stats', 'Real-world healthcare predictive cases'],
  },
  'prog-03': {
    badge: 'Deep Learning & NLP',
    points: ['4–6 Months • Advanced Track', 'Computer Vision & Clinical NLP', 'Medical imaging & diagnostic algorithms'],
  },
  'prog-04': {
    badge: 'RAG & Clinical Agents',
    points: ['6–10 Weeks • Intensive', 'Prompt Engineering, LLMs & RAG', 'Automated EHR notes & triage agents'],
  },
  'prog-05': {
    badge: 'Automation & APIs',
    points: ['4–8 Weeks • Foundation', 'NumPy, Pandas & Healthcare APIs', 'Data pipelines & clinical automation'],
  },
  'prog-06': {
    badge: 'Pipelines & Cloud MLOps',
    points: ['3–5 Months • Engineering', 'Supervised & Unsupervised ML', 'Model deployment & monitoring pipelines'],
  },
  'prog-07': {
    badge: 'CPC® Exam Ready',
    points: ['3–6 Months • Classroom / Online', 'ICD-10-CM, CPT & HCPCS Level II', 'AAPC curriculum & mock case practice'],
  },
  'prog-08': {
    badge: 'Inpatient & ICD-10-PCS',
    points: ['4–6 Months • Hospital Track', 'ICD-10-PCS & MS-DRG grouping', 'AHIMA CCS examination simulation'],
  },
  'prog-09': {
    badge: 'Denial Management',
    points: ['2–4 Months • Operational', 'US Healthcare Billing & EDI 837/835', 'AR follow-up & claims appeals'],
  },
  'prog-10': {
    badge: 'EHR / EMR Systems',
    points: ['4–6 Months • Digital Health', 'Epic, Cerner, HL7 & FHIR basics', 'Clinical data governance & HIPAA'],
  },
  'prog-11': {
    badge: 'Dual Specialisation',
    points: ['6–9 Months • Flagship', 'Medical Coding + Healthcare Analytics', 'End-to-end clinical data cycle'],
  },
};

export const ProgrammeCard: React.FC<ProgrammeCardProps> = ({
  programme,
  index = 1,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const media = programmeMediaPoints[programme.id] || {
    badge: `${programme.duration} • Track`,
    points: [
      `${programme.duration} Duration`,
      programme.toolsAndTechnologies.slice(0, 3).join(', '),
      programme.careerOutcomes[0] || 'Graduate Role Ready',
    ],
  };

  const formattedIndex = index < 10 ? `0${index}` : `${index}`;

  useEffect(() => {
    if (!isClient() || !cardRef.current || prefersReducedMotion()) return;

    const card = cardRef.current;
    const arrow = card.querySelector(`.${styles.ctaArrow}`);
    const img = card.querySelector(`.${styles.imageContainer}`);

    // Card entrance and internal elements reveal timeline on scroll trigger
    const ctx = gsap.context(() => {
      const topMeta = card.querySelector(`.${styles.topMeta}`);
      const title = card.querySelector(`.${styles.title}`);
      const points = card.querySelectorAll(`.${styles.pointItem}`);
      const checkmarks = card.querySelectorAll(`.${styles.checkWrap}`);
      const ctaBtn = card.querySelector(`.${styles.ctaButton}`);
      const imgContainer = card.querySelector(`.${styles.imageContainer}`);
      const floatingBadge = card.querySelector(`.${styles.floatingBadge}`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          once: true,
        },
      });

      // 1. Card base entrance
      tl.fromTo(
        card,
        { opacity: 0, y: 35, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'power2.out' },
        0
      );

      // 2. Top meta (Index + Category badge)
      if (topMeta) {
        tl.fromTo(
          topMeta,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
          0.15
        );
      }

      // 3. Programme Title
      if (title) {
        tl.fromTo(
          title,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
          0.2
        );
      }

      // 4. Points list stagger
      if (points.length > 0) {
        tl.fromTo(
          points,
          { opacity: 0, x: -14 },
          { opacity: 1, x: 0, duration: 0.35, stagger: 0.08, ease: 'power2.out' },
          0.28
        );
      }

      // 5. Checkmark icons pop
      if (checkmarks.length > 0) {
        tl.fromTo(
          checkmarks,
          { scale: 0, rotation: -30 },
          { scale: 1, rotation: 0, duration: 0.35, stagger: 0.08, ease: 'back.out(2)' },
          0.32
        );
      }

      // 6. Action CTA Button pop
      if (ctaBtn) {
        tl.fromTo(
          ctaBtn,
          { opacity: 0, y: 12, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.6)' },
          0.45
        );
      }

      // 7. Right Image Container reveal
      if (imgContainer) {
        tl.fromTo(
          imgContainer,
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.55, ease: 'power2.out' },
          0.18
        );
      }

      // 8. Floating Image Badge pop
      if (floatingBadge) {
        tl.fromTo(
          floatingBadge,
          { opacity: 0, y: 15, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'back.out(2)' },
          0.5
        );
      }
    }, card);

    const handleMouseEnter = () => {
      gsap.to(card, { y: -4, duration: 0.25, ease: EASE.secondary });
      if (arrow) gsap.to(arrow, { x: 2, y: -2, duration: 0.2, ease: EASE.secondary });
      if (img) gsap.to(img, { scale: 1.03, duration: 0.35, ease: EASE.secondary });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { y: 0, duration: 0.25, ease: EASE.secondary });
      if (arrow) gsap.to(arrow, { x: 0, y: 0, duration: 0.2, ease: EASE.secondary });
      if (img) gsap.to(img, { scale: 1, duration: 0.35, ease: EASE.secondary });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ctx.revert();
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={cn(styles.card, className)}>
      {/* LEFT COLUMN: INFO & BULLETS */}
      <div className={styles.leftCol}>
        <div className={styles.topMeta}>
          <div className={styles.indexWrap}>
            <span className={styles.indexNumber}>{formattedIndex}</span>
            <span className={styles.neonDotSmall} />
          </div>
          <span className={styles.categoryBadge}>{programme.category}</span>
        </div>

        <h3 className={styles.title}>
          <Link href={`/programmes/${programme.slug}`} className={styles.titleLink}>
            {programme.title}
          </Link>
        </h3>

        <ul className={styles.pointsList}>
          {media.points.map((pt, i) => (
            <li key={i} className={styles.pointItem}>
              <span className={styles.checkWrap}>
                <Check size={11} className={styles.checkIcon} strokeWidth={3} />
              </span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        <div className={styles.actionWrapper}>
          <Link
            href={`/programmes/${programme.slug}`}
            className={styles.ctaButton}
            aria-label={`View programme details for ${programme.title}`}
          >
            <span>View Programme</span>
            <div className={styles.ctaArrowWrap}>
              <ArrowUpRight size={13} className={styles.ctaArrow} />
            </div>
          </Link>
        </div>
      </div>

      {/* RIGHT COLUMN: GRAPHIC FIGURE WITH FLOATING BADGE */}
      <div className={styles.rightCol}>
        <div className={styles.imageContainer}>
          <ProgrammeGraphic
            programmeId={programme.id}
            category={programme.category}
            title={programme.title}
          />
          <div className={styles.floatingBadge}>
            <span className={styles.neonPulseDot} />
            <span>{media.badge}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
