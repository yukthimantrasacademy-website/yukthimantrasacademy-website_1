'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';
import { createBatchFloat } from '@/animations/float';

interface HeroAnimationProps {
  children: React.ReactNode;
}

/**
 * Client wrapper for the home hero section.
 * Orchestrates a staggered entrance timeline and continuous floating motion.
 *
 * Expected data attributes on children:
 *   data-hero="badge"         — badge/eyebrow pill
 *   data-hero="heading"       — main headline
 *   data-hero="subtitle"      — description text
 *   data-hero="cta"           — CTA buttons wrapper
 *   data-hero="cards"         — floating cards container
 *   data-hero="card"          — individual floating card
 *   data-hero="cloud"         — background cloud/blob
 */
export const HeroAnimation: React.FC<HeroAnimationProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClient() || !containerRef.current) return;

    const container = containerRef.current;
    const badge = container.querySelector<HTMLElement>('[data-hero="badge"]');
    const heading = container.querySelector<HTMLElement>('[data-hero="heading"]');
    const subtitle = container.querySelector<HTMLElement>('[data-hero="subtitle"]');
    const cta = container.querySelector<HTMLElement>('[data-hero="cta"]');
    const cards = container.querySelectorAll<HTMLElement>('[data-hero="card"]');

    if (prefersReducedMotion()) {
      // Immediately show everything
      const allHidden = container.querySelectorAll('.gsap-hero-hidden');
      gsap.set(allHidden, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: EASE.primary },
      });

      // 1. Badge
      if (badge) {
        tl.fromTo(
          badge,
          { opacity: 0, y: 20, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 },
          0.15
        );
      }

      // 2. Heading — editorial reveal
      if (heading) {
        tl.fromTo(
          heading,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: TIMING.heroEntrance, ease: EASE.heroReveal },
          0.25
        );
      }

      // 3. Subtitle
      if (subtitle) {
        tl.fromTo(
          subtitle,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.5
        );
      }

      // 4. CTA buttons
      if (cta) {
        const buttons = cta.children;
        if (buttons.length > 0) {
          tl.fromTo(
            buttons,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
            0.65
          );
        }
      }

      // 5. Floating cards — staggered entrance
      if (cards.length > 0) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 25, scale: 0.92, rotation: 2 },
          { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.7, stagger: 0.12, ease: EASE.primary },
          0.75
        );

        // After entrance, start continuous floating
        tl.call(() => {
          createBatchFloat(cards);
        });
      }


    }, container);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};
