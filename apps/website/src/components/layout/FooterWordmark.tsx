'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion, isClient } from '@/animations/gsap';
import styles from './FooterWordmark.module.css';

export const FooterWordmark: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradRef = useRef<SVGLinearGradientElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isClient()) return;
    // Ensure ScrollTrigger positions are accurate on initial render
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  // 1. Mouse Enter -> Turn ON Blue-to-Green Spotlight on Hovered Letter
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gradRef.current || prefersReducedMotion()) return;
    setIsHovered(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = ((e.clientX - rect.left) / rect.width) * 100;

    const gradEl = gradRef.current;
    const targetX1 = relativeX - 7;
    const targetX2 = relativeX + 7;

    gsap.killTweensOf(gradEl);
    gsap.to(gradEl, {
      attr: {
        x1: `${targetX1}%`,
        x2: `${targetX2}%`,
      },
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  // 2. Mouse Move -> Fluidly Track Spotlight across Letters
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gradRef.current || prefersReducedMotion()) return;
    if (!isHovered) setIsHovered(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = ((e.clientX - rect.left) / rect.width) * 100;

    const gradEl = gradRef.current;
    const targetX1 = relativeX - 7;
    const targetX2 = relativeX + 7;

    gsap.to(gradEl, {
      attr: {
        x1: `${targetX1}%`,
        x2: `${targetX2}%`,
      },
      duration: 0.1,
      ease: 'power1.out',
      overwrite: 'auto',
    });
  };

  // 3. Mouse Leave -> Turn OFF Spotlight (Reverts 100% to Solid Black/Dark Slate)
  const handleMouseLeave = () => {
    if (!gradRef.current || prefersReducedMotion()) return;

    const gradEl = gradRef.current;
    gsap.killTweensOf(gradEl);
    gsap.to(gradEl, {
      attr: {
        x1: '-150%',
        x2: '-100%',
      },
      duration: 0.35,
      ease: 'power2.out',
      onComplete: () => {
        setIsHovered(false);
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className={styles.wordmarkContainer}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      title="YukthiMantra's Academy"
    >
      <svg
        viewBox="0 0 1620 210"
        className={styles.heroSvg}
        aria-label="YukthiMantra's Academy"
      >
        <defs>
          {/* Blue-to-Green Localized Hover Spotlight Linear Gradient */}
          <linearGradient
            id="wordmarkSpotlightGrad"
            ref={gradRef}
            x1="-150%"
            y1="0%"
            x2="-100%"
            y2="0%"
            spreadMethod="pad"
          >
            {/* Left side: Base solid dark color */}
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="15%" stopColor="#0f172a" />

            {/* Localized Hover Gradient: Blue -> Cyan -> Lime/Green */}
            <stop offset="35%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="65%" stopColor="#c0f050" />

            {/* Right side: Base solid dark color */}
            <stop offset="85%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="central"
          fill="url(#wordmarkSpotlightGrad)"
          className={styles.svgWordmarkText}
        >
          YukthiMantra&apos;s Academy
        </text>
      </svg>
    </div>
  );
};
