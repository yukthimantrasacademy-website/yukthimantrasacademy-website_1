'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';

interface PageHeroAnimationProps {
  children: React.ReactNode;
  /** Variant controls the specific hero animation style per page */
  variant?: 'default' | 'floating-widgets' | 'step-reveal' | 'form-reveal';
}

/**
 * Client wrapper for inner page hero sections.
 * Applies a staggered entrance animation to badge → heading → subtitle.
 *
 * Expected data attributes on children:
 *   data-hero-inner="badge"     — badge pill
 *   data-hero-inner="heading"   — page heading
 *   data-hero-inner="subtitle"  — description paragraph
 *   data-hero-inner="cta"       — CTA wrapper
 *   data-hero-inner="widget"    — floating decorative widgets
 */
export const PageHeroAnimation: React.FC<PageHeroAnimationProps> = ({
  children,
  variant = 'default',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClient() || !containerRef.current || prefersReducedMotion()) return;

    const container = containerRef.current;

    const ctx = gsap.context(() => {
      const badge = container.querySelector('[data-hero-inner="badge"]');
      const heading = container.querySelector('[data-hero-inner="heading"]');
      const subtitle = container.querySelector('[data-hero-inner="subtitle"]');
      const cta = container.querySelector('[data-hero-inner="cta"]');
      const widgets = container.querySelectorAll('[data-hero-inner="widget"]');

      const tl = gsap.timeline({
        defaults: { ease: EASE.primary },
      });

      // Badge reveal
      if (badge) {
        tl.fromTo(
          badge,
          { opacity: 0, y: 16, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 },
          0.1
        );
      }

      // Heading reveal
      if (heading) {
        tl.fromTo(
          heading,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: TIMING.heroEntrance, ease: EASE.heroReveal },
          0.2
        );
      }

      // Subtitle reveal
      if (subtitle) {
        tl.fromTo(
          subtitle,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.45
        );
      }

      // CTA reveal
      if (cta) {
        const buttons = cta.children;
        if (buttons.length > 0) {
          tl.fromTo(
            buttons,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
            0.6
          );
        } else {
          tl.fromTo(
            cta,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5 },
            0.6
          );
        }
      }

      // Floating widgets (career pathways hero)
      if (variant === 'floating-widgets' && widgets.length > 0) {
        tl.fromTo(
          widgets,
          { opacity: 0, y: 30, scale: 0.9, rotation: 2 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: EASE.primary,
          },
          0.5
        );

        // After entrance, start subtle floating
        tl.call(() => {
          widgets.forEach((widget, i) => {
            const yAmp = 5 + i * 2;
            const duration = 3 + i * 0.8;
            gsap.to(widget, {
              y: -yAmp,
              duration,
              ease: EASE.float,
              repeat: -1,
              yoyo: true,
            });
          });
        });
      }
    }, container);

    return () => ctx.revert();
  }, [variant]);

  return <div ref={containerRef}>{children}</div>;
};
