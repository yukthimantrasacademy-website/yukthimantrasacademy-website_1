'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  Database,
  Brain,
  Sparkles,
  Code2,
  Cpu,
  HeartPulse,
  FileText,
  FileCheck,
  Layers,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Award,
} from '@/components/icons/GoogleIcons';
import { ProgrammeGraphic } from '@/components/shared/ProgrammeGraphic';
import type { Programme } from '@/types/programme';
import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './ProgrammesDirectory.module.css';
import { cn } from '@/lib/utils/cn';

interface ProgrammesDirectoryProps {
  groupAProgrammes: Programme[];
  groupBProgrammes: Programme[];
}

function getProgrammeIcon(slug: string) {
  switch (slug) {
    case 'healthcare-data-analytics-foundation':
      return <BarChart3 size={18} />;
    case 'certified-data-scientist-healthcare':
      return <Database size={18} />;
    case 'artificial-intelligence-healthcare':
      return <Brain size={18} />;
    case 'generative-ai-llm-healthcare':
      return <Sparkles size={18} />;
    case 'python-data-healthcare-automation':
      return <Code2 size={18} />;
    case 'machine-learning-mlops-foundation':
      return <Cpu size={18} />;
    case 'cpc-preparation-medical-coding':
      return <ShieldCheck size={18} />;
    case 'ccs-preparation-clinical-coding':
      return <FileText size={18} />;
    case 'medical-billing-revenue-cycle-management':
      return <FileCheck size={18} />;
    case 'healthcare-it-clinical-data-management':
      return <Layers size={18} />;
    case 'medical-coding-data-analytics-integrated':
      return <Compass size={18} />;
    default:
      return <HeartPulse size={18} />;
  }
}

export const ProgrammesDirectory: React.FC<ProgrammesDirectoryProps> = ({
  groupAProgrammes,
  groupBProgrammes,
}) => {
  // Mobile active group tab ('A' or 'B')
  const [activeMobileGroup, setActiveMobileGroup] = useState<'A' | 'B'>('A');

  // Default to first programme
  const [activeProgramme, setActiveProgramme] = useState<Programme>(
    groupAProgrammes[0] || groupBProgrammes[0]
  );
  const containerRef = React.useRef<HTMLDivElement>(null);
  const posterRef = React.useRef<HTMLDivElement>(null);

  // Entrance animations on scroll
  React.useEffect(() => {
    if (!isClient() || !containerRef.current || prefersReducedMotion()) return;

    const container = containerRef.current;

    const ctx = gsap.context(() => {
      const items = container.querySelectorAll(`.${styles.directoryItem}`);
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: EASE.primary,
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  // Poster transition on activeProgramme change
  React.useEffect(() => {
    if (!isClient() || !posterRef.current || prefersReducedMotion()) return;

    gsap.fromTo(
      posterRef.current,
      { opacity: 0.85, scale: 0.99 },
      { opacity: 1, scale: 1, duration: 0.35, ease: EASE.secondary }
    );
  }, [activeProgramme.id]);

  return (
    <div className={styles.directoryCard} ref={containerRef}>
      {/* Mobile Group Switcher (Visible only on screens <= 768px) */}
      <div className={styles.mobileGroupTabs} role="tablist" aria-label="Programme Groups">
        <button
          type="button"
          role="tab"
          aria-selected={activeMobileGroup === 'A'}
          className={cn(styles.mobileGroupTab, activeMobileGroup === 'A' && styles.mobileGroupTabActive)}
          onClick={() => {
            setActiveMobileGroup('A');
            if (groupAProgrammes[0]) setActiveProgramme(groupAProgrammes[0]);
          }}
        >
          Group A: Data &amp; AI
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeMobileGroup === 'B'}
          className={cn(styles.mobileGroupTab, activeMobileGroup === 'B' && styles.mobileGroupTabActive)}
          onClick={() => {
            setActiveMobileGroup('B');
            if (groupBProgrammes[0]) setActiveProgramme(groupBProgrammes[0]);
          }}
        >
          Group B: Medical Coding
        </button>
      </div>

      <div className={styles.directoryGrid}>
        {/* COLUMN 1: GROUP A (DATA & AI TRACKS) */}
        <div className={cn(styles.directoryColumn, activeMobileGroup !== 'A' && styles.hideOnMobile)}>
          <div className={styles.columnEyebrow}>GROUP A • DATA &amp; AI TRACKS</div>
          <div className={styles.directoryList}>
            {groupAProgrammes.map((prog) => {
              const isSelected = activeProgramme.id === prog.id;
              return (
                <Link
                  key={prog.id}
                  href={`/programmes/${prog.slug}`}
                  className={cn(styles.directoryItem, isSelected && styles.activeItem)}
                  onMouseEnter={() => setActiveProgramme(prog)}
                  onFocus={() => setActiveProgramme(prog)}
                  onClick={() => setActiveProgramme(prog)}
                >
                  <div className={styles.itemIconWrap}>
                    {getProgrammeIcon(prog.slug)}
                  </div>
                  <div className={styles.itemText}>
                    <h4 className={styles.itemTitle}>{prog.title}</h4>
                    <p className={styles.itemDesc}>{prog.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* COLUMN 2: GROUP B (MEDICAL CODING & OPERATIONS) */}
        <div className={cn(styles.directoryColumn, activeMobileGroup !== 'B' && styles.hideOnMobile)}>
          <div className={styles.columnEyebrow}>GROUP B • MEDICAL CODING &amp; OPS</div>
          <div className={styles.directoryList}>
            {groupBProgrammes.map((prog) => {
              const isSelected = activeProgramme.id === prog.id;
              return (
                <Link
                  key={prog.id}
                  href={`/programmes/${prog.slug}`}
                  className={cn(styles.directoryItem, isSelected && styles.activeItem)}
                  onMouseEnter={() => setActiveProgramme(prog)}
                  onFocus={() => setActiveProgramme(prog)}
                  onClick={() => setActiveProgramme(prog)}
                >
                  <div className={styles.itemIconWrap}>
                    {getProgrammeIcon(prog.slug)}
                  </div>
                  <div className={styles.itemText}>
                    <h4 className={styles.itemTitle}>{prog.title}</h4>
                    <p className={styles.itemDesc}>{prog.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* COLUMN 3: POSTER IMAGE CARD WITH GLASS OVERLAY */}
        <div className={styles.posterWrapper}>
          <div
            ref={posterRef}
            className={styles.posterCard}
            key={activeProgramme.id}
          >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <ProgrammeGraphic
                programmeId={activeProgramme.id}
                category={activeProgramme.category}
                title={activeProgramme.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Bar Floating Pills */}
            <div className={styles.posterTopBar}>
              <div className={styles.topTagsGroup}>
                <span className={styles.tagPill}>{activeProgramme.group}</span>
                <span className={styles.tagPill}>{activeProgramme.category}</span>
              </div>
              <div className={styles.ratingBadge}>
                <Award size={13} fill={true} color="#ffffff" />
                <span>4.9</span>
              </div>
            </div>

            {/* Bottom Frosted Glassmorphism Overlay Card */}
            <div className={styles.posterGlassCard}>
              <div className={styles.glassHeaderRow}>
                <h3 className={styles.glassTitle}>{activeProgramme.title}</h3>
                <span className={styles.topRatedBadge}>Top Track</span>
              </div>
              <p className={styles.glassSubtitle}>
                Rolling Admissions • {activeProgramme.duration} Cohort
              </p>

              <div className={styles.glassBottomRow}>
                <div className={styles.durationTag}>
                  {activeProgramme.duration}
                </div>
                <Link
                  href={`/programmes/${activeProgramme.slug}`}
                  className={styles.exploreButton}
                >
                  <span>Explore Track</span>
                  <div className={styles.arrowCircle}>
                    <ArrowUpRight size={13} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DIRECTORY FOOTER BAR */}
      <div className={styles.directoryFooter}>
        <div className={styles.footerLeft}>
          <div className={styles.footerIcon}>
            <ShieldCheck size={18} />
          </div>
          <span className={styles.footerText}>
            <strong>Unsure which programme fits your degree?</strong> Book a free 1-on-1 academic evaluation &amp; eligibility verification.
          </span>
        </div>
        <Link href="/admission-counselling" className={styles.footerCta}>
          Book Free Counselling
        </Link>
      </div>
    </div>
  );
};
