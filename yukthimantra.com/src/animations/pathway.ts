'use client';

import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from './gsap';

/* ============================================================
   CAREER PATHWAY LINE ANIMATION
   Progressively draws a connector line as user scrolls.
   Works with SVG paths or CSS-styled dividers.
   ============================================================ */

export function createPathwayLineAnimation(
  pathElement: SVGPathElement | HTMLElement,
  options?: {
    duration?: number;
    start?: string;
    scrub?: boolean | number;
    triggerElement?: HTMLElement;
  }
): gsap.core.Tween | null {
  if (!isClient() || prefersReducedMotion()) return null;

  const {
    duration = 1.5,
    start = 'top 75%',
    scrub = false,
    triggerElement,
  } = options || {};

  // SVG path animation
  if (pathElement instanceof SVGPathElement) {
    const length = pathElement.getTotalLength();
    gsap.set(pathElement, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    return gsap.to(pathElement, {
      strokeDashoffset: 0,
      duration,
      ease: EASE.primary,
      scrollTrigger: {
        trigger: triggerElement || pathElement,
        start,
        ...(scrub ? { scrub: typeof scrub === 'number' ? scrub : 0.5 } : { once: true }),
      },
    });
  }

  // HTML element (width-based line draw)
  return gsap.fromTo(
    pathElement,
    { scaleX: 0, transformOrigin: 'left center' },
    {
      scaleX: 1,
      duration,
      ease: EASE.secondary,
      scrollTrigger: {
        trigger: triggerElement || pathElement,
        start,
        ...(scrub ? { scrub: typeof scrub === 'number' ? scrub : 0.5 } : { once: true }),
      },
    }
  );
}

/* ============================================================
   PATHWAY NODE PULSE
   Very subtle scale pulse for the currently active step.
   ============================================================ */

export function createNodePulse(
  element: HTMLElement,
  options?: {
    scale?: number;
    duration?: number;
  }
): gsap.core.Tween | null {
  if (!isClient() || prefersReducedMotion()) return null;

  const { scale = 1.04, duration = 1.5 } = options || {};

  return gsap.to(element, {
    scale,
    duration,
    ease: EASE.float,
    repeat: -1,
    yoyo: true,
  });
}

/* ============================================================
   STAGGERED NODE REVEAL
   Animates pathway nodes one by one as they enter view.
   Used for the career pathway step-by-step reveal.
   ============================================================ */

export function createPathwayNodeReveal(
  nodes: HTMLElement[] | NodeListOf<Element>,
  options?: {
    connectorSelector?: string;
    container?: HTMLElement;
    stagger?: number;
    y?: number;
  }
): gsap.core.Timeline | null {
  if (!isClient() || prefersReducedMotion() || !nodes || (nodes as NodeListOf<Element>).length === 0) return null;

  const {
    stagger = 0.15,
    y = 30,
  } = options || {};

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: options?.container || (nodes as NodeListOf<Element>)[0] as HTMLElement,
      start: 'top 80%',
      once: true,
    },
  });

  tl.fromTo(
    nodes,
    { opacity: 0, y, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger,
      ease: EASE.primary,
    }
  );

  return tl;
}
