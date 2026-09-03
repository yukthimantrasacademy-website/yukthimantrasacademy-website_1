'use client';

import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from './gsap';

/* ============================================================
   GSAP-DRIVEN ACCORDION
   Animate height, opacity, content y, and chevron rotation.
   Measures dynamic content height rather than using fixed values.
   ============================================================ */

interface AccordionAnimateOptions {
  /** The panel/content wrapper that expands/collapses */
  panel: HTMLElement;
  /** The inner content element to measure natural height */
  content: HTMLElement;
  /** The chevron icon element to rotate */
  chevron?: HTMLElement | null;
  /** Whether to open or close */
  open: boolean;
  /** Duration (default: TIMING.accordion) */
  duration?: number;
  /** Callback when animation completes */
  onComplete?: () => void;
}

export function animateAccordion(options: AccordionAnimateOptions): gsap.core.Timeline {
  const {
    panel,
    content,
    chevron,
    open,
    duration = TIMING.accordion,
    onComplete,
  } = options;

  const tl = gsap.timeline({
    onComplete,
  });

  if (!isClient() || prefersReducedMotion()) {
    // Instant toggle for reduced motion
    gsap.set(panel, {
      height: open ? 'auto' : 0,
      overflow: 'hidden',
    });
    gsap.set(content, { opacity: open ? 1 : 0, y: 0 });
    if (chevron) gsap.set(chevron, { rotation: open ? 180 : 0 });
    return tl;
  }

  if (open) {
    // Measure natural height
    gsap.set(panel, { height: 'auto', overflow: 'hidden' });
    const naturalHeight = panel.scrollHeight;
    gsap.set(panel, { height: 0 });

    tl.to(panel, {
      height: naturalHeight,
      duration,
      ease: EASE.secondary,
    })
      .fromTo(
        content,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: duration * 0.7, ease: EASE.primary },
        duration * 0.3
      );

    // After open, set to auto for responsive content
    tl.set(panel, { height: 'auto' });
  } else {
    // Closing
    const currentHeight = panel.scrollHeight;
    gsap.set(panel, { height: currentHeight, overflow: 'hidden' });

    tl.to(content, {
      opacity: 0,
      y: -4,
      duration: duration * 0.4,
      ease: EASE.secondary,
    }).to(
      panel,
      {
        height: 0,
        duration: duration * 0.6,
        ease: EASE.secondary,
      },
      duration * 0.2
    );
  }

  // Chevron rotation
  if (chevron) {
    tl.to(
      chevron,
      {
        rotation: open ? 180 : 0,
        duration: duration * 0.6,
        ease: EASE.secondary,
      },
      0
    );
  }

  return tl;
}
