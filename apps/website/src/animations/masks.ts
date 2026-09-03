'use client';

import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from './gsap';

/* ============================================================
   IMAGE MASK REVEAL
   Reveals an image from a clip-path animation (bottom→full).
   Creates a premium visual reveal instead of simple fade-in.
   ============================================================ */

export function createImageMaskReveal(
  element: HTMLElement,
  options?: {
    direction?: 'bottom' | 'left' | 'right';
    duration?: number;
    start?: string;
    delay?: number;
  }
): gsap.core.Tween | null {
  if (!isClient() || prefersReducedMotion()) return null;

  const {
    direction = 'bottom',
    duration = 0.9,
    start = 'top 80%',
    delay = 0,
  } = options || {};

  const clipFrom: Record<string, string> = {
    bottom: 'inset(100% 0% 0% 0%)',
    left: 'inset(0% 100% 0% 0%)',
    right: 'inset(0% 0% 0% 100%)',
  };

  return gsap.fromTo(
    element,
    {
      clipPath: clipFrom[direction] || clipFrom.bottom,
      scale: 1.05,
    },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      scale: 1,
      duration,
      delay,
      ease: EASE.heroReveal,
      scrollTrigger: {
        trigger: element,
        start,
        once: true,
      },
    }
  );
}

/* ============================================================
   TEXT MASK REVEAL
   For major headings — overflow hidden + y: 100% → y: 0
   Works beautifully with editorial serif headings.
   ============================================================ */

export function createTextMaskReveal(
  element: HTMLElement,
  options?: {
    duration?: number;
    delay?: number;
    start?: string;
    staggerLines?: boolean;
  }
): gsap.core.Tween | gsap.core.Timeline | null {
  if (!isClient() || prefersReducedMotion()) return null;

  const {
    duration = 0.8,
    delay = 0,
    start = 'top 85%',
    staggerLines = false,
  } = options || {};

  // Wrap inner text in a reveal container
  element.style.overflow = 'hidden';

  if (staggerLines) {
    // Try to split into lines using <br>, <span>, or child elements
    const children = element.children;
    if (children.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start,
          once: true,
        },
        delay,
      });

      tl.fromTo(
        children,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration,
          stagger: 0.12,
          ease: EASE.heroReveal,
        }
      );

      return tl;
    }
  }

  // Single element reveal
  return gsap.fromTo(
    element,
    { y: '100%', opacity: 0 },
    {
      y: '0%',
      opacity: 1,
      duration,
      delay,
      ease: EASE.heroReveal,
      scrollTrigger: {
        trigger: element.parentElement || element,
        start,
        once: true,
      },
    }
  );
}
