'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';

interface CTAAnimationProps {
  children: React.ReactNode;
}

/**
 * Client wrapper for CTA section animations.
 * Animates glow orbs with slow motion and staggers CTA card content.
 *
 * Expected data attributes:
 *   data-cta="glow-orb"   — background glow elements
 *   data-cta="card"       — main CTA card
 *   data-cta="left-col"   — left content column
 *   data-cta="right-col"  — right form/CTA column
 */
export const CTAAnimation: React.FC<CTAAnimationProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClient() || !containerRef.current || prefersReducedMotion()) return;

    const container = containerRef.current;

    const ctx = gsap.context(() => {
      // Section card reveal
      const card = container.querySelector('[data-cta="card"]');
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: EASE.primary,
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // Left + right column stagger
      const leftCol = container.querySelector('[data-cta="left-col"]');
      const rightCol = container.querySelector('[data-cta="right-col"]');
      const cols = [leftCol, rightCol].filter(Boolean) as HTMLElement[];

      if (cols.length > 0) {
        gsap.fromTo(
          cols,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: EASE.primary,
            scrollTrigger: {
              trigger: container,
              start: 'top 75%',
              once: true,
            },
          }
        );
      }

      // Glow orb slow motion
      const orbs = container.querySelectorAll('[data-cta="glow-orb"]');
      orbs.forEach((orb, i) => {
        const xAmp = 10 + i * 6;
        const yAmp = 8 + i * 4;
        const duration = TIMING.backgroundMotion + i * 3;
        gsap.to(orb, {
          x: `+=${xAmp}`,
          y: `+=${yAmp}`,
          duration,
          ease: EASE.float,
          repeat: -1,
          yoyo: true,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};
