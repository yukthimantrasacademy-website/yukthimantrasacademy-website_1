'use client';

import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from './gsap';

/* ============================================================
   SUBTLE PARALLAX
   Very light vertical parallax on scroll (20px max).
   Use only on hero, about visual, featured programme visual.
   ============================================================ */

export function createParallax(
  element: HTMLElement,
  options?: {
    amount?: number;
    start?: string;
    end?: string;
  }
): gsap.core.Tween | null {
  if (!isClient() || prefersReducedMotion()) return null;

  const {
    amount = 20,
    start = 'top bottom',
    end = 'bottom top',
  } = options || {};

  return gsap.fromTo(
    element,
    { y: -amount },
    {
      y: amount,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: 0.5,
      },
    }
  );
}

/* ============================================================
   GRADIENT MOTION
   Very slow background-position animation for hero gradients.
   Duration 8-15 seconds, extremely subtle.
   ============================================================ */

export function createGradientMotion(
  element: HTMLElement,
  options?: {
    duration?: number;
  }
): gsap.core.Tween | null {
  if (!isClient() || prefersReducedMotion()) return null;

  const { duration = TIMING.backgroundMotion } = options || {};

  return gsap.to(element, {
    backgroundPosition: '100% 50%',
    duration,
    ease: EASE.float,
    repeat: -1,
    yoyo: true,
  });
}
