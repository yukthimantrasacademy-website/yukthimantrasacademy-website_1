'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';

interface ProgrammeDetailAnimationProps {
  children: React.ReactNode;
}

/**
 * Client animation orchestrator for the Programme Detail page.
 * Provides:
 * 1. Image banner clip-path mask reveal
 * 2. Learning checklist staggered entrance
 * 3. Career outcome chips staggered entrance
 * 4. Right sidebar specs list staggered entrance
 */
export const ProgrammeDetailAnimation: React.FC<ProgrammeDetailAnimationProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClient() || !containerRef.current || prefersReducedMotion()) return;

    const container = containerRef.current;

    const ctx = gsap.context(() => {
      // 1. Showcase image reveal
      const showcaseImg = container.querySelector('[data-programme-anim="showcase-img"]');
      if (showcaseImg) {
        gsap.fromTo(
          showcaseImg,
          { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.06 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            duration: 0.9,
            ease: EASE.heroReveal,
            delay: 0.1,
          }
        );
      }

      // 2. Action card entrance
      const actionCard = container.querySelector('[data-programme-anim="action-card"]');
      if (actionCard) {
        gsap.fromTo(
          actionCard,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: EASE.primary,
            delay: 0.25,
          }
        );
      }

      // 3. Learning items stagger
      const learningGrid = container.querySelector('[data-programme-anim="learning-grid"]');
      if (learningGrid) {
        const items = learningGrid.children;
        gsap.fromTo(
          items,
          { opacity: 0, x: -12 },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            stagger: 0.05,
            ease: EASE.primary,
            scrollTrigger: {
              trigger: learningGrid,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }

      // 4. Career chips stagger
      const careerGrid = container.querySelector('[data-programme-anim="career-grid"]');
      if (careerGrid) {
        const chips = careerGrid.children;
        gsap.fromTo(
          chips,
          { opacity: 0, scale: 0.94, y: 10 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: EASE.secondary,
            scrollTrigger: {
              trigger: careerGrid,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // 5. Sidebar cards scroll reveal
      const sidebarCards = container.querySelectorAll('[data-programme-anim="sidebar-card"]');
      sidebarCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: EASE.primary,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};
