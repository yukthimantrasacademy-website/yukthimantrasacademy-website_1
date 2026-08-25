'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { leftNavItems, rightNavItems } from '@/data/navigation';
import { MobileMenu } from './MobileMenu';
import styles from './Navbar.module.css';
import { cn } from '@/lib/utils/cn';
import { gsap, ScrollTrigger, EASE, TIMING, prefersReducedMotion, isClient } from '@/animations/gsap';

import { smoothScrollTo } from '@/components/shared/SmoothScrollProvider';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const leftIslandRef = useRef<HTMLDivElement>(null);
  const rightIslandRef = useRef<HTMLDivElement>(null);

  // GSAP entrance animation on mount
  useEffect(() => {
    if (!isClient() || prefersReducedMotion() || !headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: EASE.primary,
          delay: 0.1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Scroll listener — toggle state + GSAP-driven smooth transition
  useEffect(() => {
    if (!isClient()) return;

    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP smooth transition when isScrolled changes
  useEffect(() => {
    if (!isClient() || prefersReducedMotion()) return;
    if (!leftIslandRef.current || !rightIslandRef.current) return;

    const duration = TIMING.navbarTransition;

    if (isScrolled) {
      gsap.to([leftIslandRef.current, rightIslandRef.current], {
        boxShadow: '0 16px 40px rgba(16, 24, 40, 0.14)',
        duration,
        ease: EASE.secondary,
      });
    } else {
      gsap.to([leftIslandRef.current, rightIslandRef.current], {
        boxShadow: '0 12px 32px rgba(16, 24, 40, 0.08), 0 2px 6px rgba(16, 24, 40, 0.03)',
        duration,
        ease: EASE.secondary,
      });
    }
  }, [isScrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const [targetPath, hash] = href.split('#');
      const isCurrentPage = pathname === (targetPath || '/') || (pathname === '/' && !targetPath);

      if (isCurrentPage) {
        e.preventDefault();
        const targetEl = document.getElementById(hash);
        if (targetEl) {
          smoothScrollTo(targetEl, -90);
          window.history.pushState(null, '', `#${hash}`);
        }
      }
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          styles.header,
          isScrolled && styles.headerScrolled
        )}
      >
        <div className={styles.headerWrapper}>
          {/* PART 1: LEFT ISLAND (Logo to Admission Counselling) */}
          <div ref={leftIslandRef} className={styles.navIslandLeft}>
            {/* Logo + Academy Name */}
            <Link href="/" className={styles.logoLink} aria-label="YukthiMantra's Academy Home">
              <span className={styles.logoSymbol}>YM</span>
              <span className={styles.brandTitle}>YUKTHIMANTRA&apos;S ACADEMY</span>
            </Link>

            <nav className={styles.desktopNav} aria-label="Primary Left Navigation">
              <ul className={styles.navList}>
                {leftNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(styles.navLink, isActive && styles.activeLink)}
                        onClick={(e) => handleLinkClick(e, item.href)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* PART 2: RIGHT ISLAND (About to CTA) */}
          <div ref={rightIslandRef} className={styles.navIslandRight}>
            <nav className={styles.desktopNav} aria-label="Primary Right Navigation">
              <ul className={styles.navList}>
                {rightNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={cn(styles.navLink, isActive && styles.activeLink)}
                        onClick={(e) => handleLinkClick(e, item.href)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.ctaWrapper}>
              <Link href="/contact" className={styles.ctaButton}>
                Contact
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={styles.mobileMenuToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  );
};
