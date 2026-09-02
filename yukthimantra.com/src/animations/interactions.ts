'use client';

import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from './gsap';

/* ============================================================
   FILTER PILL ANIMATION
   Animates active state transitions for filter pills.
   Small scale + background color transition.
   ============================================================ */

export function createFilterPillAnimation(
  pill: HTMLElement,
  isActive: boolean
): gsap.core.Tween | null {
  if (!isClient() || prefersReducedMotion()) return null;

  if (isActive) {
    return gsap.to(pill, {
      scale: 1.03,
      duration: TIMING.buttonInteraction,
      ease: EASE.secondary,
    });
  }

  return gsap.to(pill, {
    scale: 1,
    duration: TIMING.buttonInteraction,
    ease: EASE.secondary,
  });
}

/* ============================================================
   SEARCH RESULT TRANSITION
   Animates cards out then in when filter/search results change.
   ============================================================ */

export function createSearchResultTransition(
  container: HTMLElement,
  callback: () => void,
  options?: {
    exitDuration?: number;
    enterDuration?: number;
    stagger?: number;
  }
): gsap.core.Timeline | null {
  if (!isClient() || prefersReducedMotion()) {
    callback();
    return null;
  }

  const {
    exitDuration = 0.2,
    enterDuration = 0.4,
    stagger = 0.05,
  } = options || {};

  const cards = container.children;
  if (!cards.length) {
    callback();
    return null;
  }

  const tl = gsap.timeline();

  // Exit animation
  tl.to(cards, {
    opacity: 0,
    y: -10,
    scale: 0.98,
    duration: exitDuration,
    stagger: stagger * 0.5,
    ease: EASE.secondary,
  });

  // Swap content
  tl.call(callback);

  // Enter animation — targets will be new children after callback
  tl.call(() => {
    const newCards = container.children;
    if (newCards.length > 0) {
      gsap.fromTo(
        newCards,
        { opacity: 0, y: 20, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: enterDuration,
          stagger,
          ease: EASE.primary,
        }
      );
    }
  });

  return tl;
}

/* ============================================================
   STAGGERED GRID ANIMATION
   For programme grids and card collections on page load/scroll.
   ============================================================ */

export function createStaggeredGrid(
  elements: HTMLElement[] | NodeListOf<Element>,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
    container?: HTMLElement;
  }
): gsap.core.Tween | null {
  if (!isClient() || prefersReducedMotion()) return null;

  const {
    y = 30,
    duration = 0.6,
    stagger = 0.08,
    start = 'top 80%',
    container,
  } = options || {};

  if (!elements || (elements as NodeListOf<Element>).length === 0) return null;

  return gsap.fromTo(
    elements,
    { opacity: 0, y, scale: 0.97 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      stagger,
      ease: EASE.primary,
      scrollTrigger: {
        trigger: container || (elements as NodeListOf<Element>)[0] as HTMLElement,
        start,
        once: true,
      },
    }
  );
}

/* ============================================================
   BUTTON HOVER GSAP INTERACTION
   Tiny lift + scale on hover, smooth return on leave.
   ============================================================ */

export function setupButtonHover(button: HTMLElement): {
  onEnter: () => void;
  onLeave: () => void;
  cleanup: () => void;
} {
  const onEnter = () => {
    if (prefersReducedMotion()) return;
    gsap.to(button, {
      y: -2,
      scale: 1.02,
      duration: TIMING.microHover,
      ease: EASE.secondary,
    });
  };

  const onLeave = () => {
    if (prefersReducedMotion()) return;
    gsap.to(button, {
      y: 0,
      scale: 1,
      duration: TIMING.microHover,
      ease: EASE.secondary,
    });
  };

  button.addEventListener('mouseenter', onEnter);
  button.addEventListener('mouseleave', onLeave);

  return {
    onEnter,
    onLeave,
    cleanup: () => {
      button.removeEventListener('mouseenter', onEnter);
      button.removeEventListener('mouseleave', onLeave);
    },
  };
}

/* ============================================================
   TECHNOLOGY BADGE HOVER
   Subtle scale + y lift for tech badges like Python, SQL, etc.
   ============================================================ */

export function setupTechBadgeHover(badge: HTMLElement): () => void {
  if (!isClient() || prefersReducedMotion()) return () => {};

  const onEnter = () => {
    gsap.to(badge, {
      scale: 1.04,
      y: -2,
      duration: TIMING.microHover,
      ease: EASE.secondary,
    });
  };

  const onLeave = () => {
    gsap.to(badge, {
      scale: 1,
      y: 0,
      duration: TIMING.microHover,
      ease: EASE.secondary,
    });
  };

  badge.addEventListener('mouseenter', onEnter);
  badge.addEventListener('mouseleave', onLeave);

  return () => {
    badge.removeEventListener('mouseenter', onEnter);
    badge.removeEventListener('mouseleave', onLeave);
  };
}
