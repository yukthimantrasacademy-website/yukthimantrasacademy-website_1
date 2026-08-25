'use client';

import { useEffect, useRef } from 'react';
import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';

/**
 * Hook for animating inner page hero sections.
 * Provides staggered entrance for badge → heading → subtitle → CTA.
 * 
 * Use data attributes on children:
 *   data-hero-inner="badge"
 *   data-hero-inner="heading"
 *   data-hero-inner="subtitle"
 *   data-hero-inner="cta"
 */
export function usePageHeroAnimation<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!isClient() || !ref.current || prefersReducedMotion()) return;

    const container = ref.current;

    const ctx = gsap.context(() => {
      const badge = container.querySelector('[data-hero-inner="badge"]');
      const heading = container.querySelector('[data-hero-inner="heading"]');
      const subtitle = container.querySelector('[data-hero-inner="subtitle"]');
      const cta = container.querySelector('[data-hero-inner="cta"]');

      const tl = gsap.timeline({
        defaults: { ease: EASE.primary },
      });

      if (badge) {
        tl.fromTo(
          badge,
          { opacity: 0, y: 16, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 },
          0.1
        );
      }

      if (heading) {
        tl.fromTo(
          heading,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: TIMING.heroEntrance, ease: EASE.heroReveal },
          0.2
        );
      }

      if (subtitle) {
        tl.fromTo(
          subtitle,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.45
        );
      }

      if (cta) {
        const buttons = cta.children;
        if (buttons.length > 0) {
          tl.fromTo(
            buttons,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
            0.6
          );
        } else {
          tl.fromTo(
            cta,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5 },
            0.6
          );
        }
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return ref;
}
