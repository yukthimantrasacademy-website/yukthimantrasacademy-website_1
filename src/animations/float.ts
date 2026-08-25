'use client';

import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from './gsap';

/* ============================================================
   FLOATING CARD LOOP
   Subtle continuous y-float + optional rotation for hero cards.
   Each card gets a slightly different duration for organic feel.
   ============================================================ */

interface FloatConfig {
  /** Amplitude of Y movement in px (default: 8) */
  yAmplitude?: number;
  /** Base duration in seconds (default: TIMING.floatCycle) */
  duration?: number;
  /** Optional rotation amplitude in degrees (default: 0) */
  rotationAmplitude?: number;
}

export function createFloatLoop(
  element: HTMLElement,
  config?: FloatConfig
): gsap.core.Tween | null {
  if (!isClient() || prefersReducedMotion()) return null;

  const {
    yAmplitude = 8,
    duration = TIMING.floatCycle,
    rotationAmplitude = 0,
  } = config || {};

  const vars: gsap.TweenVars = {
    y: -yAmplitude,
    duration,
    ease: EASE.float,
    repeat: -1,
    yoyo: true,
  };

  if (rotationAmplitude > 0) {
    vars.rotation = rotationAmplitude;
  }

  return gsap.to(element, vars);
}

/* ============================================================
   BATCH FLOAT — apply different float configs to multiple elements
   ============================================================ */

export function createBatchFloat(
  elements: HTMLElement[] | NodeListOf<Element>,
  configs?: FloatConfig[]
): gsap.core.Tween[] {
  if (!isClient() || prefersReducedMotion()) return [];

  const tweens: gsap.core.Tween[] = [];

  const defaultConfigs: FloatConfig[] = [
    { yAmplitude: 6, duration: 2.4 },
    { yAmplitude: 8, duration: 3.0, rotationAmplitude: 0.5 },
    { yAmplitude: 10, duration: 3.6 },
    { yAmplitude: 7, duration: 2.8, rotationAmplitude: 1 },
    { yAmplitude: 9, duration: 3.2 },
    { yAmplitude: 6, duration: 2.6, rotationAmplitude: 0.8 },
  ];

  Array.from(elements).forEach((el, i) => {
    const config = configs?.[i] || defaultConfigs[i % defaultConfigs.length];
    const tween = createFloatLoop(el as HTMLElement, config);
    if (tween) tweens.push(tween);
  });

  return tweens;
}
