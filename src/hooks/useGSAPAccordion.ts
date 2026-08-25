'use client';

import { useEffect, useRef, useCallback } from 'react';
import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';

/**
 * Hook for GSAP-powered accordion animation.
 * Returns refs and toggle function for panel + chevron + content.
 */
export function useGSAPAccordion(isOpen: boolean) {
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isClient() || !panelRef.current || !contentRef.current) return;

    const panel = panelRef.current;
    const content = contentRef.current;
    const chevron = chevronRef.current;
    const duration = TIMING.accordion;

    if (prefersReducedMotion()) {
      // Instant toggle for reduced motion
      panel.style.height = isOpen ? 'auto' : '0px';
      panel.style.overflow = 'hidden';
      content.style.opacity = isOpen ? '1' : '0';
      if (chevron) chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      return;
    }

    const ctx = gsap.context(() => {
      if (isOpen) {
        // Measure natural height
        gsap.set(panel, { height: 'auto', overflow: 'hidden' });
        const naturalHeight = panel.scrollHeight;
        gsap.set(panel, { height: 0 });

        const tl = gsap.timeline();

        tl.to(panel, {
          height: naturalHeight,
          duration,
          ease: EASE.secondary,
        });

        tl.fromTo(
          content,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: duration * 0.7, ease: EASE.primary },
          duration * 0.3
        );

        if (chevron) {
          tl.to(chevron, {
            rotation: 180,
            duration: duration * 0.6,
            ease: EASE.secondary,
          }, 0);
        }

        tl.set(panel, { height: 'auto' });
      } else {
        const currentHeight = panel.scrollHeight;
        gsap.set(panel, { height: currentHeight, overflow: 'hidden' });

        const tl = gsap.timeline();

        tl.to(content, {
          opacity: 0,
          y: -4,
          duration: duration * 0.4,
          ease: EASE.secondary,
        });

        tl.to(panel, {
          height: 0,
          duration: duration * 0.6,
          ease: EASE.secondary,
        }, duration * 0.2);

        if (chevron) {
          tl.to(chevron, {
            rotation: 0,
            duration: duration * 0.6,
            ease: EASE.secondary,
          }, 0);
        }
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  return { panelRef, contentRef, chevronRef };
}
