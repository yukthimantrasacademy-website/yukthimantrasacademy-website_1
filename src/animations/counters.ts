'use client';

import { gsap, ScrollTrigger, EASE, prefersReducedMotion, isClient } from './gsap';

/* ============================================================
   COUNTER ANIMATION
   Animates a number from 0 → endValue when scrolled into view.
   ============================================================ */

interface CounterOptions {
  /** The DOM element to render the counter text into */
  element: HTMLElement;
  /** Final numeric value */
  endValue: number;
  /** Duration in seconds (default: 1.5) */
  duration?: number;
  /** Suffix to append after the number (e.g. '+', '%', 'k+') */
  suffix?: string;
  /** Prefix to prepend before the number (e.g. '$') */
  prefix?: string;
  /** ScrollTrigger start (default: 'top 85%') */
  start?: string;
  /** Whether to use decimal places (default: false, rounds to int) */
  decimals?: number;
}

export function animateCounter(options: CounterOptions): gsap.core.Tween | null {
  if (!isClient()) return null;

  const {
    element,
    endValue,
    duration = 1.5,
    suffix = '',
    prefix = '',
    start = 'top 85%',
    decimals = 0,
  } = options;

  if (prefersReducedMotion()) {
    const formatted = decimals > 0 ? endValue.toFixed(decimals) : Math.round(endValue).toString();
    element.innerText = `${prefix}${formatted}${suffix}`;
    return null;
  }

  const obj = { val: 0 };

  return gsap.to(obj, {
    val: endValue,
    duration,
    ease: EASE.secondary,
    scrollTrigger: {
      trigger: element,
      start,
      once: true,
    },
    onUpdate: () => {
      const formatted = decimals > 0
        ? obj.val.toFixed(decimals)
        : Math.round(obj.val).toString();
      element.innerText = `${prefix}${formatted}${suffix}`;
    },
  });
}

/* ============================================================
   BATCH COUNTERS — animate multiple counter elements at once
   ============================================================ */

interface BatchCounterItem {
  element: HTMLElement;
  endValue: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function animateCounterBatch(
  items: BatchCounterItem[],
  containerTrigger?: HTMLElement,
  duration = 1.5
): gsap.core.Tween[] {
  if (!isClient()) return [];

  return items
    .map((item) =>
      animateCounter({
        element: item.element,
        endValue: item.endValue,
        duration,
        suffix: item.suffix,
        prefix: item.prefix,
        decimals: item.decimals,
        start: containerTrigger ? 'top 85%' : 'top 85%',
      })
    )
    .filter(Boolean) as gsap.core.Tween[];
}
