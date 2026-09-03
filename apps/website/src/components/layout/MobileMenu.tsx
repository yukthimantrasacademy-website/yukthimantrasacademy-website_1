'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Home as HomeIcon } from '@/components/icons/GoogleIcons';
import { Button } from '@/components/shared/Button';
import { smoothScrollTo } from '@/components/shared/SmoothScrollProvider';
import styles from './MobileMenu.module.css';
import { cn } from '@/lib/utils/cn';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

interface MobileNavItem {
  label: string;
  href: string;
}

const mobileNavItems: MobileNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Career Pathways', href: '/career-pathways' },
  { label: 'Eligibility', href: '/eligibility' },
  { label: 'Admission Counselling', href: '/admission-counselling' },
  { label: 'About', href: '/about' },
  { label: 'Career Support', href: '/career-support' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentPath,
}) => {
  // Body scroll lock when menu is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onClose();

    if (href.includes('#')) {
      const [targetPath, hash] = href.split('#');
      const isCurrentPage = currentPath === (targetPath || '/') || (currentPath === '/' && !targetPath);

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
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className={styles.drawerHeader}>
          <div className={styles.brand}>
            <div className={styles.logoSymbol}>YM</div>
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>YUKTHIMANTRA&apos;S</span>
              <span className={styles.brandSubtitle}>ACADEMY</span>
            </div>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close Navigation Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation List */}
        <div className={styles.drawerBody}>
          <nav aria-label="Mobile Navigation">
            <ul className={styles.navList}>
              {mobileNavItems.map((item) => {
                const isActive = item.href.includes('#')
                  ? false
                  : currentPath === item.href || (item.href === '/' && currentPath === '/');

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(styles.navLink, isActive && styles.activeLink)}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <span className={styles.navLinkLabel}>{item.label}</span>
                      <ArrowRight size={16} className={styles.arrow} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action CTAs in Drawer Footer */}
          <div className={styles.drawerFooter}>
            <Button
              href="/admission-counselling"
              variant="accent"
              size="lg"
              fullWidth
              onClick={onClose}
            >
              Book Free Counselling
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              fullWidth
              onClick={onClose}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
