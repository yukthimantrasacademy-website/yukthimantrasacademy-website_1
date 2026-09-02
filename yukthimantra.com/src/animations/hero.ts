'use client';

import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from './gsap';

/* ============================================================
   HERO ENTRANCE TIMELINE
   Creates a staggered reveal sequence for hero sections.
   ============================================================ */

interface HeroElements {
  /** The hero container for gsap.context scoping */
  container: HTMLElement;
  /** Badge / eyebrow pill */
  badge?: HTMLElement | null;
  /** Main heading (or wrapper for split-line) */
  heading?: HTMLElement | null;
  /** Subtitle / description */
  description?: HTMLElement | null;
  /** CTA buttons wrapper */
  cta?: HTMLElement | null;
  /** Hero visual / image element */
  visual?: HTMLElement | null;
  /** Floating decorative elements */
  floatingElements?: HTMLElement[] | NodeListOf<Element>;
  /** Background elements (clouds, blobs) */
  backgroundElements?: HTMLElement[] | NodeListOf<Element>;
}

export function createHeroTimeline(elements: HeroElements): gsap.core.Timeline | null {
  if (!isClient() || prefersReducedMotion()) {
    // Immediately show all elements when reduced motion is preferred
    if (elements.container) {
      gsap.set(elements.container.querySelectorAll('.gsap-hero-hidden'), {
        opacity: 1,
        y: 0,
        scale: 1,
      });
    }
    return null;
  }

  const tl = gsap.timeline({
    defaults: {
      ease: EASE.primary,
    },
  });

  // 1. Badge / eyebrow
  if (elements.badge) {
    tl.fromTo(
      elements.badge,
      { opacity: 0, y: 20, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5 },
      0.1
    );
  }

  // 2. Heading — split-line reveal (manual approach, no SplitText plugin)
  if (elements.heading) {
    tl.fromTo(
      elements.heading,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: TIMING.heroEntrance, ease: EASE.heroReveal },
      0.2
    );
  }

  // 3. Description
  if (elements.description) {
    tl.fromTo(
      elements.description,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.45
    );
  }

  // 4. CTA buttons
  if (elements.cta) {
    const buttons = elements.cta.children;
    if (buttons.length > 0) {
      tl.fromTo(
        buttons,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        0.6
      );
    }
  }

  // 5. Hero visual
  if (elements.visual) {
    tl.fromTo(
      elements.visual,
      { opacity: 0, y: 20, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7 },
      0.55
    );
  }

  // 6. Floating elements (staggered)
  if (elements.floatingElements && elements.floatingElements.length > 0) {
    tl.fromTo(
      elements.floatingElements,
      { opacity: 0, y: 25, scale: 0.92, rotation: 2 },
      { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.7, stagger: 0.12 },
      0.7
    );
  }

  return tl;
}

/* ============================================================
   BACKGROUND MOTION
   Very subtle continuous motion for hero background elements.
   ============================================================ */

export function createBackgroundMotion(
  elements: HTMLElement[] | NodeListOf<Element>
): gsap.core.Tween[] {
  if (!isClient() || prefersReducedMotion()) return [];

  const tweens: gsap.core.Tween[] = [];

  Array.from(elements).forEach((el, i) => {
    const xAmp = 8 + i * 4;
    const yAmp = 6 + i * 3;
    const duration = TIMING.backgroundMotion + i * 2;

    tweens.push(
      gsap.to(el, {
        x: `+=${xAmp}`,
        y: `+=${yAmp}`,
        duration,
        ease: EASE.float,
        repeat: -1,
        yoyo: true,
      })
    );
  });

  return tweens;
}
