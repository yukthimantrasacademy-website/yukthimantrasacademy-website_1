'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap, ScrollTrigger, isClient, prefersReducedMotion } from '@/animations/gsap';
import 'locomotive-scroll/locomotive-scroll.css';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

/**
 * Global helper for smooth scrolling anywhere in the app.
 * Calculates exact absolute document pixel coordinates to guarantee 100% accuracy on 1st click.
 */
export const smoothScrollTo = (target: string | HTMLElement, offset: number = -90) => {
  if (!isClient()) return;

  const element = typeof target === 'string' ? (document.querySelector(target) as HTMLElement) : target;
  if (!element) return;

  const lenis = (window as any).__lenisInstance;

  // Calculate absolute target position in document coordinates
  const rect = element.getBoundingClientRect();
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop || (lenis ? lenis.scroll : 0);
  const targetY = Math.max(0, rect.top + currentScroll + offset);

  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(targetY, {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      immediate: false,
    });
  } else {
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  }
};

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const scrollInstanceRef = useRef<any>(null);

  // 1. Initialize Locomotive Scroll
  useEffect(() => {
    if (!isClient() || prefersReducedMotion()) return;

    let locomotiveScroll: any;

    const initScroll = async () => {
      try {
        const LocomotiveScrollModule = await import('locomotive-scroll');
        const LocomotiveScroll = LocomotiveScrollModule.default;

        locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            wrapper: window,
            content: document.documentElement,
            lerp: 0.085, // Silky smooth inertia curve
            duration: 1.25,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            syncTouch: false,
            wheelMultiplier: 1.05,
            touchMultiplier: 1.5,
            autoResize: true,
          },
        });

        scrollInstanceRef.current = locomotiveScroll;
        (window as any).__locomotiveScroll = locomotiveScroll;
        (window as any).__lenisInstance = locomotiveScroll.lenisInstance;

        // Bridge Locomotive Scroll updates with GSAP ScrollTrigger
        if (locomotiveScroll.lenisInstance) {
          locomotiveScroll.lenisInstance.on('scroll', ScrollTrigger.update);

          gsap.ticker.add((time) => {
            locomotiveScroll.lenisInstance.raf(time * 1000);
          });

          gsap.ticker.lagSmoothing(0);
        }

        // Check if page was loaded with a hash in URL (e.g. /#faq)
        if (window.location.hash) {
          const targetEl = document.querySelector(window.location.hash) as HTMLElement;
          if (targetEl) {
            setTimeout(() => {
              smoothScrollTo(targetEl, -90);
            }, 300);
          }
        }
      } catch (err) {
        console.warn('Locomotive Scroll initialization skipped:', err);
      }
    };

    initScroll();

    return () => {
      if (scrollInstanceRef.current) {
        scrollInstanceRef.current.destroy();
        scrollInstanceRef.current = null;
        (window as any).__locomotiveScroll = null;
        (window as any).__lenisInstance = null;
      }
    };
  }, []);

  // 2. Global Anchor Click Interceptor (handles #faq, /#faq on single 1st click)
  useEffect(() => {
    if (!isClient()) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      const isHashLink = href.startsWith('#') || (href.startsWith('/#') && window.location.pathname === '/');

      if (isHashLink) {
        const hash = href.startsWith('/#') ? href.slice(1) : href;
        const targetElement = document.querySelector(hash) as HTMLElement;

        if (targetElement) {
          e.preventDefault();
          e.stopPropagation();

          smoothScrollTo(targetElement, -90);
          window.history.pushState(null, '', hash);
        }
      }
    };

    // Attach to document capture phase to intercept before Next.js Link router
    document.addEventListener('click', handleAnchorClick, { capture: true });
    return () => document.removeEventListener('click', handleAnchorClick, { capture: true });
  }, []);

  // 3. Handle Route Navigation & Deep Hash Navigation (e.g. from /about to /#faq)
  useEffect(() => {
    if (!isClient()) return;

    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash) as HTMLElement;
        if (targetElement) {
          smoothScrollTo(targetElement, -90);
        }
      } else {
        const lenis = (window as any).__lenisInstance;
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        }
      }
      ScrollTrigger.refresh();
    };

    const timer1 = setTimeout(handleHashNavigation, 80);
    const timer2 = setTimeout(handleHashNavigation, 350);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  return <>{children}</>;
};
