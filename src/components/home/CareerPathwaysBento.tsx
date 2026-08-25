'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './CareerPathwaysBento.module.css';

export const CareerPathwaysBento: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClient() || prefersReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the bento cards with stagger
      const cards = containerRef.current?.querySelectorAll(
        `.${styles.cardPathways}, .${styles.cardTeamwork}, .${styles.cardMergedBottom}, .${styles.cardDiscoverApp}`
      );

      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: EASE.primary,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.bentoContainer}>
      {/* LEFT SECTION: 2x2 Bento area */}
      <div className={styles.bentoLeftGrid}>
        {/* ROW 1: Two cards */}
        <div className={styles.topRow}>
          {/* CARD 1: Technology & AI Pathway (PATHWAYS PHOTO WITH TAG BAR -> id: 'tech-ai') */}
          <Link href="/career-pathways#tech-ai" className={styles.cardPathways}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardHeading}>Technology + AI</h3>
              <p className={styles.cardSubtext}>
                Build careers in <strong>data analytics, data science, AI, and Generative AI</strong> applied to healthcare.
              </p>
            </div>

            <div className={styles.pathwayPhotoWrapper}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80"
                alt="Technology and AI Healthcare Learning"
                className={styles.pathwayPhotoImg}
              />
              <div className={styles.pathwayTagBar}>
                <span className={styles.tagPill}>Analytics</span>
                <span className={styles.tagPill}>Data Science</span>
                <div className={styles.tagPillArrow}>
                  <ArrowRight size={13} />
                </div>
                <span className={styles.tagPill}>GenAI</span>
              </div>
            </div>
          </Link>

          {/* CARD 2: Integrated Career Track (TEAMWORK RADIAL AVATARS -> id: 'integrated') */}
          <Link href="/career-pathways#integrated" className={styles.cardTeamwork}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardHeading}>Integrated Track</h3>
              <p className={styles.cardSubtext}>
                Combine <strong>medical coding &amp; healthcare domain</strong> knowledge with SQL and data analytics.
              </p>
            </div>

            <div className={styles.radialNetworkArea}>
              {/* Central Mentor / Lead Node */}
              <div className={styles.rootAvatarNode}>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80"
                  alt="Integrated Pathway Lead"
                  className={styles.avatarImg}
                />
              </div>

              {/* Connecting Radiating Vector Lines */}
              <div className={styles.radialBranches}>
                {/* Branch 1 */}
                <div className={styles.branchLine1} />
                <div className={styles.leafAvatar1}>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Clinical Data Analyst"
                    className={styles.miniAvatarImg}
                  />
                  <span className={styles.leafNamePill}>Analytics Lead</span>
                </div>

                {/* Branch 2 */}
                <div className={styles.branchLine2} />
                <div className={styles.leafAvatar2}>
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                    alt="Senior Coding Specialist"
                    className={styles.miniAvatarImg}
                  />
                  <span className={styles.leafNamePill}>Senior Coder</span>
                </div>

                {/* Branch 3 */}
                <div className={styles.branchLine3} />
                <div className={styles.leafAvatar3}>
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                    alt="RCM Operations Manager"
                    className={styles.miniAvatarImg}
                  />
                  <span className={styles.leafNamePill}>RCM Auditor</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* ROW 2: MERGED WIDE GRADIENT CARD (EMERGING HEALTH-TECH + HEALTHCARE OPERATIONS) */}
        <div className={styles.cardMergedBottom}>
          {/* Left Sub-Card: Emerging Health-Tech (Gradient Blue -> id: 'tech-ai') */}
          <Link href="/career-pathways#tech-ai" className={styles.mergedLeftCol}>
            <div className={styles.securityHeader}>
              <span className={styles.securityBrandTag}>EMERGING HEALTH-TECH</span>
              <div className={styles.securityWaveIcon}>
                <span className={styles.pulseDot} />
              </div>
            </div>

            <div className={styles.securityBody}>
              <div className={styles.securityBadge}>
                <span className={styles.verifiedShield}>🛡️</span>
                <span>Fastest Growing</span>
              </div>
              <h3 className={styles.securityTitle}>Applied AI &amp; LLMs in Healthcare</h3>
              <p className={styles.securitySub}>
                Specialised AI engineering, Retrieval-Augmented Generation (RAG), and automation models for clinical settings.
              </p>
            </div>
          </Link>

          {/* Center Vertical Divider */}
          <div className={styles.mergedDivider} />

          {/* Right Sub-Card: Clinical Systems & Data Operations (Dark Slate -> id: 'healthcare-tech') */}
          <Link href="/career-pathways#healthcare-tech" className={styles.mergedRightCol}>
            <div className={styles.darkCardHeader}>
              <div className={styles.darkTag}>
                <span className={styles.darkTagDot} />
                <span>HEALTHCARE OPERATIONS</span>
              </div>
              <div className={styles.arrowCircle}>
                <ArrowRight size={14} />
              </div>
            </div>

            <div className={styles.darkCardBody}>
              <h3 className={styles.darkCardTitle}>Clinical Systems &amp; Data Operations</h3>
              <p className={styles.darkCardSub}>
                Bridge hospital information systems, clinical data management (CDM), and electronic health record operations.
              </p>
            </div>

            <div className={styles.darkMiniBadgeRow}>
              <span className={styles.darkPill}>EHR Workflows</span>
              <span className={styles.darkPill}>CDM Protocols</span>
              <span className={styles.darkPill}>HIPAA &amp; Auditing</span>
            </div>
          </Link>
        </div>
      </div>

      {/* RIGHT COLUMN: Medical Coding & Operations (RIGHT TALL DISCOVER APP CARD -> id: 'medical-coding-ops') */}
      <div className={styles.cardDiscoverApp}>
        {/* App Bar */}
        <div className={styles.appBar}>
          <div className={styles.appBrandWrap}>
            <span className={styles.appBrandIcon}>✦</span>
            <span className={styles.appBrandText}>yukthimantras.io/medical-coding</span>
          </div>
          <div className={styles.appMenuDots}>
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* App Center Content */}
        <div className={styles.appCenterContent}>
          <div className={styles.reboundBadge}>
            <span>Medical Coding &amp; RCM</span>
            <span className={styles.cBadge}>©</span>
          </div>

          <h3 className={styles.appTitle}>Medical Coding &amp; Operations</h3>
          <p className={styles.appSubtext}>
            Specialise in <strong>medical coding (ICD-10, CPT)</strong>, clinical coding (DRGs), billing, and revenue cycle management.
          </p>

          {/* Interactive Search Bar */}
          <Link href="/career-pathways#medical-coding-ops" className={styles.searchBar}>
            <span className={styles.searchPlaceholder}>Search for CPC, CCS, or RCM tracks...</span>
            <div className={styles.searchIconBtn}>
              <Search size={13} />
            </div>
          </Link>
        </div>

        {/* Dynamic Animated Ocean Wave Landscape */}
        <div className={styles.landscapeVisualArea}>
          {/* Animated Ambient Sun / Glow Orb */}
          <div className={styles.oceanSunGlow} />

          {/* SVG Animated Rolling Ocean Waves */}
          <svg
            className={styles.oceanWavesSvg}
            viewBox="0 24 150 40"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <linearGradient id="oceanGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="oceanGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c0f050" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="oceanGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0584c6" stopOpacity="0.88" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.96" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.92" />
              </linearGradient>
              <path
                id="wavePath"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className={styles.waveGroup}>
              <use href="#wavePath" x="48" y="0" fill="url(#oceanGrad1)" className={styles.waveLayerBack} />
              <use href="#wavePath" x="48" y="3" fill="url(#oceanGrad2)" className={styles.waveLayerMid} />
              <use href="#wavePath" x="48" y="6" fill="url(#oceanGrad3)" className={styles.waveLayerFront} />
            </g>
          </svg>

          {/* Concentric Water Ripples Aura */}
          <div className={styles.oceanRipples} />

          <div className={styles.partnerLogosFooter}>
            <span>ICD-10-CM</span>
            <span>CPT &amp; HCPCS</span>
            <span>DRG CODING</span>
            <span>RCM CLAIMS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
