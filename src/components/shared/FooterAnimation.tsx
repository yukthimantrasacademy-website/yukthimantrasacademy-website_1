'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';

interface FooterAnimationProps {
  children: React.ReactNode;
}

/**
 * Client wrapper for the footer section.
 * Animates footer content with staggered scroll reveal
 * and a section divider line draw.
 */
export const FooterAnimation: React.FC<FooterAnimationProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClient() || !containerRef.current || prefersReducedMotion()) return;

    const container = containerRef.current;

    const ctx = gsap.context(() => {
      // Staggered reveal for footer columns
      const columns = container.querySelectorAll('[data-footer="col"]');
      if (columns.length > 0) {
        gsap.fromTo(
          columns,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: EASE.primary,
            scrollTrigger: {
              trigger: container,
              start: 'top 90%',
              once: true,
            },
          }
        );
      }

      // Divider line draw
      const divider = container.querySelector('[data-footer="divider"]');
      if (divider) {
        gsap.fromTo(
          divider,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.8,
            ease: EASE.secondary,
            scrollTrigger: {
              trigger: divider,
              start: 'top 95%',
              once: true,
            },
          }
        );
      }


    }, container);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
};
