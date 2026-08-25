'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Search,
  ShieldCheck,
  Headphones,
  Compass,
  FileCheck2,
  Rocket,
  Check,
  Sparkles,
} from 'lucide-react';
import { gsap, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './AdmissionProcessFlow.module.css';
import { cn } from '@/lib/utils/cn';

interface StepData {
  number: string;
  stepNum: number;
  duration: string;
  title: string;
  description: string;
  highlightTag: string;
  outcomeTag: string;
  points: string[];
  icon: React.ReactNode;
  side: 'left' | 'right';
}

const stepsList: StepData[] = [
  {
    number: '01',
    stepNum: 1,
    duration: '1-2 Days',
    title: '1 Profile Submission',
    description:
      'Submit your graduation degree stream, year of passing, city, and preferred learning mode through our secure admission portal.',
    highlightTag: 'Online Application',
    outcomeTag: 'App ID Issued',
    points: [
      'Graduation degree & academic stream intake',
      'Preferred batch schedule (Online / Weekend)',
      'Instant registration acknowledgement tracking',
    ],
    icon: <Search size={20} />,
    side: 'left',
  },
  {
    number: '02',
    stepNum: 2,
    duration: '24-48 Hrs',
    title: '2 Eligibility Verification',
    description:
      'Our academic advisors review your academic stream to confirm eligibility and assess foundational computer/mathematics aptitude.',
    highlightTag: 'Aptitude Screening',
    outcomeTag: 'Eligibility Cleared',
    points: [
      "Bachelor's qualification & transcript review",
      'Quantitative logic & aptitude baseline check',
      '100% Free academic guidance consultation',
    ],
    icon: <ShieldCheck size={20} />,
    side: 'right',
  },
  {
    number: '03',
    stepNum: 3,
    duration: '15-20 Mins',
    title: '3 Counselling Call',
    description:
      'A dedicated 15–20 minute discussion covering your career objectives, syllabus breakdown, batch schedule alignment, and fee guidance.',
    highlightTag: '1-on-1 Advisory',
    outcomeTag: 'Custom Study Plan',
    points: [
      '1-on-1 session with senior academic advisor',
      'Target compensation & career goal mapping',
      'Authorized fee structures & flexible EMI plans',
    ],
    icon: <Headphones size={20} />,
    side: 'left',
  },
  {
    number: '04',
    stepNum: 4,
    duration: 'Same Day',
    title: '4 Guided Track Mapping',
    description:
      'Receive an official track assignment matching your bachelor’s qualification to Technology + AI, Healthcare Data, or Medical Coding.',
    highlightTag: 'Synergy Matching',
    outcomeTag: 'Track Finalised',
    points: [
      'Track assignment: AI, Data Analytics, or CPC',
      'Live toolchain & industry curriculum preview',
      'Healthcare capstone project milestones overview',
    ],
    icon: <Compass size={20} />,
    side: 'right',
  },
  {
    number: '05',
    stepNum: 5,
    duration: '1-2 Days',
    title: '5 Document Check & Seat',
    description:
      'Submit academic transcripts for verification, secure your authorized batch seat, and complete enrollment registration.',
    highlightTag: 'Seat Confirmation',
    outcomeTag: 'Seat Reserved',
    points: [
      'Govt Photo ID & academic transcripts validation',
      'Official cohort seat reservation confirmation',
      'Admissions welcome kit & enrollment invoice',
    ],
    icon: <FileCheck2 size={20} />,
    side: 'left',
  },
  {
    number: '06',
    stepNum: 6,
    duration: 'Day 1',
    title: '6 LMS Launch & Onboarding',
    description:
      'Receive your LMS portal credentials, join the private student cohort community, and attend the live faculty orientation webinar.',
    highlightTag: 'LMS Portal Unlocked',
    outcomeTag: 'Day-1 Access',
    points: [
      '24/7 LMS cloud portal access credentials',
      'Private mentor & student cohort channel invite',
      'Live faculty orientation & cohort schedule kickoff',
    ],
    icon: <Rocket size={20} />,
    side: 'right',
  },
];

export const AdmissionProcessFlow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const arrowRefs = useRef<(SVGPolygonElement | null)[]>([]);

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  useEffect(() => {
    if (!isClient() || prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Dotted SVG Paths Scroll Animation across all 5 connectors
      pathRefs.current.forEach((path, i) => {
        if (!path) return;
        const length = path.getTotalLength ? path.getTotalLength() : 600;
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        // Animate path stroke with ScrollTrigger scrub
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: cardRefs.current[i] || containerRef.current,
            start: 'center center',
            end: () => `+=${cardRefs.current[i + 1]?.offsetTop ? cardRefs.current[i + 1]!.offsetTop - cardRefs.current[i]!.offsetTop : 250}`,
            scrub: 0.5,
            onUpdate: (self) => {
              const arrow = arrowRefs.current[i];
              if (self.progress > 0.85 && arrow) {
                gsap.to(arrow, { opacity: 1, fill: '#0584c6', duration: 0.2 });
              } else if (arrow) {
                gsap.to(arrow, { opacity: 0.3, fill: '#cbd5e1', duration: 0.2 });
              }
            },
          },
        });
      });

      // 2. Individual Card and Elements Reveal Animation for all 6 steps
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const pill = card.querySelector(`.${styles.verticalPill}`);
        const iconBox = card.querySelector(`.${styles.iconBox}`);
        const title = card.querySelector(`.${styles.stepTitle}`);
        const desc = card.querySelector(`.${styles.stepDescription}`);
        const points = card.querySelectorAll(`.${styles.pointItem}`);
        const progressBar = card.querySelector(`.${styles.cardProgressBar}`);
        const chips = card.querySelectorAll(`.${styles.footerChip}, .${styles.outcomeBadge}`);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
            onEnter: () => setActiveStepIndex((prev) => Math.max(prev, index)),
          },
        });

        // Stagger card container entrance
        tl.fromTo(
          card,
          { opacity: 0, y: 35, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power2.out' }
        );

        // Vertical pill slide
        if (pill) {
          tl.fromTo(
            pill,
            { scaleY: 0, opacity: 0, transformOrigin: 'top center' },
            { scaleY: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.6)' },
            '-=0.3'
          );
        }

        // Icon rotation pop
        if (iconBox) {
          tl.fromTo(
            iconBox,
            { scale: 0, rotation: -20 },
            { scale: 1, rotation: 0, duration: 0.4, ease: 'back.out(2)' },
            '-=0.25'
          );
        }

        // Title and description fade-in
        if (title && desc) {
          tl.fromTo(
            [title, desc],
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, stagger: 0.08, duration: 0.35, ease: 'power2.out' },
            '-=0.2'
          );
        }

        // Action points list slide
        if (points && points.length > 0) {
          tl.fromTo(
            points,
            { opacity: 0, x: -8 },
            { opacity: 1, x: 0, stagger: 0.06, duration: 0.3, ease: 'power2.out' },
            '-=0.15'
          );
        }

        // Tag chips pop
        if (chips && chips.length > 0) {
          tl.fromTo(
            chips,
            { opacity: 0, scale: 0.85 },
            { opacity: 1, scale: 1, stagger: 0.08, duration: 0.3, ease: 'back.out(1.7)' },
            '-=0.15'
          );
        }

        // Progress bar fill
        if (progressBar) {
          tl.fromTo(
            progressBar,
            { width: '0%' },
            { width: '100%', duration: 0.8, ease: 'power1.inOut' },
            '-=0.2'
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.processWrapper} ref={containerRef}>
      {/* SVG Dotted Connectors Overlay (Desktop / Tablet) for 6 Steps */}
      <svg
        className={styles.svgConnectorsContainer}
        viewBox="0 0 1000 1550"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="stepPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0584c6" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>

        {/* ----------------------------------------------------
            Path 1: Step 1 (Left) -> Step 2 (Right)
            ---------------------------------------------------- */}
        <path
          d="M 450 110 H 680 Q 720 110 720 150 V 220"
          className={styles.basePath}
        />
        <path
          ref={(el) => {
            pathRefs.current[0] = el;
          }}
          d="M 450 110 H 680 Q 720 110 720 150 V 220"
          className={styles.activePath}
        />
        <polygon
          ref={(el) => {
            arrowRefs.current[0] = el;
          }}
          points="714,218 726,218 720,230"
          className={styles.pathArrow}
          style={{ opacity: 0.3 }}
        />

        {/* ----------------------------------------------------
            Path 2: Step 2 (Right) -> Step 3 (Left)
            ---------------------------------------------------- */}
        <path
          d="M 550 350 H 320 Q 280 350 280 390 V 460"
          className={styles.basePath}
        />
        <path
          ref={(el) => {
            pathRefs.current[1] = el;
          }}
          d="M 550 350 H 320 Q 280 350 280 390 V 460"
          className={styles.activePath}
        />
        <polygon
          ref={(el) => {
            arrowRefs.current[1] = el;
          }}
          points="274,458 286,458 280,470"
          className={styles.pathArrow}
          style={{ opacity: 0.3 }}
        />

        {/* ----------------------------------------------------
            Path 3: Step 3 (Left) -> Step 4 (Right)
            ---------------------------------------------------- */}
        <path
          d="M 450 590 H 680 Q 720 590 720 630 V 700"
          className={styles.basePath}
        />
        <path
          ref={(el) => {
            pathRefs.current[2] = el;
          }}
          d="M 450 590 H 680 Q 720 590 720 630 V 700"
          className={styles.activePath}
        />
        <polygon
          ref={(el) => {
            arrowRefs.current[2] = el;
          }}
          points="714,698 726,698 720,710"
          className={styles.pathArrow}
          style={{ opacity: 0.3 }}
        />

        {/* ----------------------------------------------------
            Path 4: Step 4 (Right) -> Step 5 (Left)
            ---------------------------------------------------- */}
        <path
          d="M 550 830 H 320 Q 280 830 280 870 V 940"
          className={styles.basePath}
        />
        <path
          ref={(el) => {
            pathRefs.current[3] = el;
          }}
          d="M 550 830 H 320 Q 280 830 280 870 V 940"
          className={styles.activePath}
        />
        <polygon
          ref={(el) => {
            arrowRefs.current[3] = el;
          }}
          points="274,938 286,938 280,950"
          className={styles.pathArrow}
          style={{ opacity: 0.3 }}
        />

        {/* ----------------------------------------------------
            Path 5: Step 5 (Left) -> Step 6 (Right)
            ---------------------------------------------------- */}
        <path
          d="M 450 1070 H 680 Q 720 1070 720 1110 V 1180"
          className={styles.basePath}
        />
        <path
          ref={(el) => {
            pathRefs.current[4] = el;
          }}
          d="M 450 1070 H 680 Q 720 1070 720 1110 V 1180"
          className={styles.activePath}
        />
        <polygon
          ref={(el) => {
            arrowRefs.current[4] = el;
          }}
          points="714,1178 726,1178 720,1190"
          className={styles.pathArrow}
          style={{ opacity: 0.3 }}
        />
      </svg>

      {/* 6 Staggered Step Cards */}
      <div className={styles.stepsGrid}>
        {stepsList.map((step, idx) => {
          const isLeft = step.side === 'left';
          const isCurrentOrPast = activeStepIndex >= idx;

          return (
            <div
              key={step.number}
              className={cn(
                styles.stepRow,
                isLeft ? styles.stepRowLeft : styles.stepRowRight
              )}
            >
              <div
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={cn(
                  styles.stepCard,
                  isCurrentOrPast && styles.stepCardActive
                )}
              >
                {/* Vertical Pill Bar with Signature Website Blue Gradient */}
                <div className={styles.verticalPill}>
                  <span className={styles.verticalPillText}>{step.duration}</span>
                </div>

                {/* Card Main Body Content */}
                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>{step.icon}</div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>

                  <p className={styles.stepDescription}>{step.description}</p>

                  {/* Key Action Deliverables Checklist */}
                  <ul className={styles.pointsList}>
                    {step.points.map((pt, pIdx) => (
                      <li key={pIdx} className={styles.pointItem}>
                        <div className={styles.pointCheck}>
                          <Check size={9} strokeWidth={3} />
                        </div>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footers with Badge Chips & Outcome */}
                  <div className={styles.cardFooterChips}>
                    <span className={styles.footerChip}>
                      <span className={styles.chipDot} />
                      {step.highlightTag}
                    </span>
                    <span className={styles.outcomeBadge}>
                      <Sparkles size={11} />
                      {step.outcomeTag}
                    </span>
                  </div>

                  {/* Micro Progress Bar */}
                  <div className={styles.cardProgressBarWrap}>
                    <div className={styles.cardProgressBar} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
