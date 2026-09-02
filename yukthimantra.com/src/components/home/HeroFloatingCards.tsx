'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, TrendingUp, Sparkles, Check } from '@/components/icons/GoogleIcons';
import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './HeroFloatingCards.module.css';
import { cn } from '@/lib/utils/cn';

// Track configurations for Card 1 (Group A)
const groupATracks = [
  {
    name: 'Healthcare Analytics',
    badge: 'Group A Track',
    percent: 85,
    growth: '+12% Industry Demand',
    bars: [
      { label: 'EHR Claims', val: 40 },
      { label: 'SQL DB', val: 70 },
      { label: 'PowerBI', val: 55 },
      { label: 'Analytics', val: 90 },
      { label: 'Reporting', val: 85 },
      { label: 'Insights', val: 60 },
    ],
  },
  {
    name: 'Data Science in Health',
    badge: 'Group A Track',
    percent: 92,
    growth: '+18% High Growth',
    bars: [
      { label: 'Python', val: 50 },
      { label: 'Statistics', val: 65 },
      { label: 'ML Models', val: 80 },
      { label: 'Deep Learning', val: 95 },
      { label: 'Clinical DS', val: 90 },
      { label: 'Pipelines', val: 75 },
    ],
  },
  {
    name: 'Python Automation',
    badge: 'Group A Track',
    percent: 78,
    growth: '+10% Automation Demand',
    bars: [
      { label: 'Scripting', val: 35 },
      { label: 'ETL Pipelines', val: 60 },
      { label: 'API Sync', val: 70 },
      { label: 'Data Cleaning', val: 85 },
      { label: 'Automation', val: 75 },
      { label: 'Reporting', val: 55 },
    ],
  },
];

// Track configurations for Card 2 (Group B - Center Stage)
const groupBTracks = [
  {
    name: 'Medical Coding & RCM',
    badge: 'Group B Track',
    percent: 100,
    label: 'Graduation-Focused Intake',
  },
  {
    name: 'CPC Exam Prep',
    badge: 'AAPC Track',
    percent: 96,
    label: 'Certified Coder Pass Rate',
  },
  {
    name: 'Clinical Coding CCS',
    badge: 'AHIMA Track',
    percent: 90,
    label: 'Inpatient DRG Focus',
  },
];

// Track configurations for Card 3 (Advanced AI)
const advancedTracks = [
  {
    name: 'Clinical AI & LLMs',
    badge: 'Advanced Track',
    percent: 94,
    growth: 'Hands-on Labs',
    bars: [
      { label: 'NLP', val: 35 },
      { label: 'RAG', val: 65 },
      { label: 'LLMs', val: 85 },
      { label: 'Agents', val: 50 },
      { label: 'Vision', val: 75 },
    ],
  },
  {
    name: 'Generative AI Systems',
    badge: 'Advanced Track',
    percent: 98,
    growth: 'Clinical RAG',
    bars: [
      { label: 'Prompts', val: 45 },
      { label: 'Embeddings', val: 70 },
      { label: 'Fine-tune', val: 95 },
      { label: 'Agents', val: 60 },
      { label: 'Safety', val: 85 },
    ],
  },
  {
    name: 'Healthcare MLOps',
    badge: 'Advanced Track',
    percent: 89,
    growth: 'Production ML',
    bars: [
      { label: 'Docker', val: 40 },
      { label: 'Pipelines', val: 60 },
      { label: 'Monitoring', val: 80 },
      { label: 'Serving', val: 55 },
      { label: 'CI/CD', val: 70 },
    ],
  },
];

// 10 Radial Gauge Ticks with rotation angles
const gaugeTickAngles = [-80, -60, -40, -20, 0, 20, 40, 60, 80, 100];

export const HeroFloatingCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mobile active tab state: 'A' (Analytics), 'B' (Medical Coding / RCM), 'C' (Clinical AI)
  const [activeMobileTab, setActiveMobileTab] = useState<'A' | 'B' | 'C'>('B');

  // Active track selections
  const [activeTrackA, setActiveTrackA] = useState(0);
  const [activeTrackB, setActiveTrackB] = useState(0);
  const [activeTrackC, setActiveTrackC] = useState(0);

  // Dropdown open states
  const [openDropdown, setOpenDropdown] = useState<'A' | 'B' | 'C' | null>(null);

  // Animated live counter states
  const [displayCount1, setDisplayCount1] = useState(0);
  const [displayCount2, setDisplayCount2] = useState(0);
  const [displayCount3, setDisplayCount3] = useState(0);

  // Interactive hover states
  const [hoveredBarA, setHoveredBarA] = useState<number | null>(null);
  const [hoveredBarC, setHoveredBarC] = useState<number | null>(null);
  const [interactiveGaugeVal, setInteractiveGaugeVal] = useState<number | null>(null);

  // Target values based on selected tracks
  const targetVal1 = groupATracks[activeTrackA].percent;
  const targetVal2 = interactiveGaugeVal !== null ? interactiveGaugeVal : groupBTracks[activeTrackB].percent;
  const targetVal3 = advancedTracks[activeTrackC].percent;

  // Run lively number counter animation on mount / track change
  useEffect(() => {
    if (!isClient()) return;

    if (prefersReducedMotion()) {
      setDisplayCount1(targetVal1);
      setDisplayCount2(targetVal2);
      setDisplayCount3(targetVal3);
      return;
    }

    const counts = {
      c1: displayCount1,
      c2: displayCount2,
      c3: displayCount3,
    };

    const anim = gsap.to(counts, {
      c1: targetVal1,
      c2: targetVal2,
      c3: targetVal3,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => {
        setDisplayCount1(Math.round(counts.c1));
        setDisplayCount2(Math.round(counts.c2));
        setDisplayCount3(Math.round(counts.c3));
      },
    });

    return () => {
      anim.kill();
    };
  }, [targetVal1, targetVal2, targetVal3]);

  // Close dropdowns on clicking outside
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(`.${styles.dropdownWrap}`)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  // Calculate active gauge ticks based on displayCount2 (0-100%)
  const activeTicksCount = Math.round((displayCount2 / 100) * gaugeTickAngles.length);

  return (
    <div ref={containerRef} className={styles.floatingCardsContainer} data-hero="cards">
      {/* Mobile Track Switcher Tabs (Only visible on screens <= 768px) */}
      <div className={styles.mobileTabsNav} role="tablist" aria-label="Hero Tracks">
        <button
          type="button"
          role="tab"
          aria-selected={activeMobileTab === 'A'}
          className={cn(styles.mobileTabBtn, activeMobileTab === 'A' && styles.mobileTabBtnActive)}
          onClick={() => setActiveMobileTab('A')}
        >
          Analytics
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeMobileTab === 'B'}
          className={cn(styles.mobileTabBtn, activeMobileTab === 'B' && styles.mobileTabBtnActive)}
          onClick={() => setActiveMobileTab('B')}
        >
          Medical Coding
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeMobileTab === 'C'}
          className={cn(styles.mobileTabBtn, activeMobileTab === 'C' && styles.mobileTabBtnActive)}
          onClick={() => setActiveMobileTab('C')}
        >
          AI &amp; LLMs
        </button>
      </div>

      {/* =========================================================================
          CARD 1: LEFT ANGLED CARD (Healthcare Analytics)
          ========================================================================= */}
      <div className={cn(styles.cardWrapper, styles.cardLeftWrapper, activeMobileTab === 'A' && styles.mobileCardVisible)}>
        <div className={cn(styles.floatingCard, styles.cardLeft, 'gsap-hero-hidden')} data-hero="card">
          {/* Header with Interactive Dropdown */}
          <div className={styles.cardHeaderSmall}>
            <span className={styles.cardTitleSmall}>{groupATracks[activeTrackA].name}</span>

            <div className={styles.dropdownWrap}>
              <button
                type="button"
                className={cn(styles.dropdownTriggerBtn, openDropdown === 'A' && styles.dropdownActive)}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(openDropdown === 'A' ? null : 'A');
                }}
                aria-label="Select Group A Track"
              >
                <span>{groupATracks[activeTrackA].badge}</span>
                <ChevronDown size={12} />
              </button>

              {openDropdown === 'A' && (
                <div className={styles.dropdownMenu}>
                  {groupATracks.map((track, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={cn(styles.dropdownItem, activeTrackA === idx && styles.dropdownItemActive)}
                      onClick={() => {
                        setActiveTrackA(idx);
                        setOpenDropdown(null);
                      }}
                    >
                      <span>{track.name}</span>
                      <span className={styles.dropdownItemValue}>{track.percent}%</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Metric Row */}
          <div className={styles.metricRow}>
            <span className={styles.metricValueLarge}>{displayCount1}%</span>
            <span className={styles.growthBadge}>
              <TrendingUp size={11} /> {groupATracks[activeTrackA].growth}
            </span>
          </div>

          {/* Interactive Bar Chart */}
          <div className={styles.barChartVisual}>
            {groupATracks[activeTrackA].bars.map((bar, bIdx) => {
              const isHovered = hoveredBarA === bIdx;
              return (
                <div
                  key={bIdx}
                  className={cn(styles.barColWrap, isHovered && styles.barActive)}
                  onMouseEnter={() => setHoveredBarA(bIdx)}
                  onMouseLeave={() => setHoveredBarA(null)}
                >
                  {isHovered && (
                    <div className={styles.barTooltip}>
                      {bar.label}: {bar.val}%
                    </div>
                  )}
                  <div
                    className={styles.chartBar}
                    style={{ height: `${bar.val}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          CARD 2: CENTER MAIN FRONT CARD (Medical Coding & Operations)
          ========================================================================= */}
      <div className={cn(styles.cardWrapper, styles.cardCenterWrapper, activeMobileTab === 'B' && styles.mobileCardVisible)}>
        <div className={cn(styles.floatingCard, styles.cardCenter, 'gsap-hero-hidden')} data-hero="card">
          {/* Header with Interactive Dropdown */}
          <div className={styles.cardHeaderMain}>
            <span className={styles.cardTitleMain}>{groupBTracks[activeTrackB].name}</span>

            <div className={styles.dropdownWrap}>
              <button
                type="button"
                className={cn(styles.dropdownTriggerBtn, openDropdown === 'B' && styles.dropdownActive)}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(openDropdown === 'B' ? null : 'B');
                }}
                aria-label="Select Group B Track"
              >
                <span>{groupBTracks[activeTrackB].badge}</span>
                <ChevronDown size={13} />
              </button>

              {openDropdown === 'B' && (
                <div className={styles.dropdownMenu}>
                  {groupBTracks.map((track, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={cn(styles.dropdownItem, activeTrackB === idx && styles.dropdownItemActive)}
                      onClick={() => {
                        setActiveTrackB(idx);
                        setOpenDropdown(null);
                      }}
                    >
                      <span>{track.name}</span>
                      <span className={styles.dropdownItemValue}>{track.percent}%</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Interactive Radial Gauge Arc Visualization */}
          <div
            className={styles.gaugeContainer}
            onMouseLeave={() => setInteractiveGaugeVal(null)}
          >
            <div className={styles.gaugeArc}>
              {gaugeTickAngles.map((angle, tIdx) => {
                const isActive = tIdx < activeTicksCount;
                const tickPercent = Math.round(((tIdx + 1) / gaugeTickAngles.length) * 100);

                return (
                  <div
                    key={tIdx}
                    className={cn(styles.gaugeTick, isActive ? styles.tickActive : styles.tickInactive)}
                    style={{
                      transform: `rotate(${angle}deg) translate(0, -56px)`,
                    }}
                    onMouseEnter={() => setInteractiveGaugeVal(tickPercent)}
                  />
                );
              })}
            </div>

            <div className={styles.gaugeCenterText}>
              <span className={styles.gaugePercentage}>{displayCount2}%</span>
              <span className={styles.gaugeLabel}>{groupBTracks[activeTrackB].label}</span>
              <span className={styles.interactiveHint}>✦ Live Cohort Metric</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CARD 3: RIGHT ANGLED CARD (Clinical AI & LLMs)
          ========================================================================= */}
      <div className={cn(styles.cardWrapper, styles.cardRightWrapper, activeMobileTab === 'C' && styles.mobileCardVisible)}>
        <div className={cn(styles.floatingCard, styles.cardRight, 'gsap-hero-hidden')} data-hero="card">
          {/* Header with Interactive Dropdown */}
          <div className={styles.cardHeaderSmall}>
            <span className={styles.cardTitleSmall}>{advancedTracks[activeTrackC].name}</span>

            <div className={styles.dropdownWrap}>
              <button
                type="button"
                className={cn(styles.dropdownTriggerBtn, openDropdown === 'C' && styles.dropdownActive)}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(openDropdown === 'C' ? null : 'C');
                }}
                aria-label="Select Advanced Track"
              >
                <span>{advancedTracks[activeTrackC].badge}</span>
                <ChevronDown size={12} />
              </button>

              {openDropdown === 'C' && (
                <div className={styles.dropdownMenu}>
                  {advancedTracks.map((track, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={cn(styles.dropdownItem, activeTrackC === idx && styles.dropdownItemActive)}
                      onClick={() => {
                        setActiveTrackC(idx);
                        setOpenDropdown(null);
                      }}
                    >
                      <span>{track.name}</span>
                      <span className={styles.dropdownItemValue}>{track.percent}%</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Metric Row */}
          <div className={styles.metricRow}>
            <span className={styles.metricValueLarge}>{displayCount3}%</span>
            <span className={styles.growthBadge}>
              <Sparkles size={11} /> {advancedTracks[activeTrackC].growth}
            </span>
          </div>

          {/* Interactive Dot/Bubble Chart */}
          <div className={styles.dotsChartVisual}>
            {advancedTracks[activeTrackC].bars.map((bar, bIdx) => {
              const isHovered = hoveredBarC === bIdx;
              return (
                <div
                  key={bIdx}
                  className={cn(styles.dotColWrap, isHovered && styles.dotActive)}
                  onMouseEnter={() => setHoveredBarC(bIdx)}
                  onMouseLeave={() => setHoveredBarC(null)}
                >
                  {isHovered && (
                    <div className={styles.barTooltip}>
                      {bar.label}: {bar.val}%
                    </div>
                  )}
                  <div
                    className={styles.dotBubble}
                    style={{ height: `${bar.val}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
