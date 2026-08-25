'use client';

import { gsap, ScrollTrigger, EASE, TIMING, SCROLL_DEFAULTS, prefersReducedMotion, isClient } from './gsap';

/* ============================================================
   SECTION REVEAL — ScrollTrigger-based
   Animates a container's children with staggered opacity + y.
   ============================================================ */

interface RevealOptions {
  /** The container element */
  trigger: HTMLElement;
  /** CSS selector for children to animate (default: direct children) */
  childSelector?: string;
  /** Y offset to animate from (default: 40) */
  y?: number;
  /** Animation duration (default: TIMING.sectionReveal) */
  duration?: number;
  /** Stagger between children (default: 0.08) */
  stagger?: number;
  /** ScrollTrigger start position (default: 'top 80%') */
  start?: string;
  /** Optional delay before animation starts */
  delay?: number;
}

export function revealSection(options: RevealOptions): gsap.core.Tween | null {
  if (!isClient() || prefersReducedMotion()) return null;

  const {
    trigger,
    childSelector,
    y = 40,
    duration = TIMING.sectionReveal,
    stagger = 0.08,
    start = SCROLL_DEFAULTS.start,
    delay = 0,
  } = options;

  const targets = childSelector
    ? trigger.querySelectorAll(childSelector)
    : trigger.children;

  if (!targets || targets.length === 0) return null;

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: EASE.primary,
      scrollTrigger: {
        trigger,
        start,
        once: true,
      },
    }
  );
}

/* ============================================================
   SINGLE ELEMENT REVEAL — for individual elements
   ============================================================ */

interface ElementRevealOptions {
  element: HTMLElement;
  y?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  start?: string;
}

export function revealElement(options: ElementRevealOptions): gsap.core.Tween | null {
  if (!isClient() || prefersReducedMotion()) return null;

  const {
    element,
    y = 30,
    scale = 1,
    duration = TIMING.sectionReveal,
    delay = 0,
    start = SCROLL_DEFAULTS.start,
  } = options;

  const fromVars: gsap.TweenVars = { opacity: 0, y };
  const toVars: gsap.TweenVars = {
    opacity: 1,
    y: 0,
    duration,
    delay,
    ease: EASE.primary,
    scrollTrigger: {
      trigger: element,
      start,
      once: true,
    },
  };

  if (scale !== 1) {
    fromVars.scale = scale;
    toVars.scale = 1;
  }

  return gsap.fromTo(element, fromVars, toVars);
}

/* ============================================================
   LINE DRAW REVEAL — for decorative dividers
   Animates width from 0 → 100% on scroll.
   ============================================================ */

export function revealLine(
  element: HTMLElement,
  duration = 0.7,
  start = SCROLL_DEFAULTS.start
): gsap.core.Tween | null {
  if (!isClient() || prefersReducedMotion()) return null;

  return gsap.fromTo(
    element,
    { scaleX: 0, transformOrigin: 'left center' },
    {
      scaleX: 1,
      duration,
      ease: EASE.secondary,
      scrollTrigger: {
        trigger: element,
        start,
        once: true,
      },
    }
  );
}
