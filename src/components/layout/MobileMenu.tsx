'use client';

import React from 'react';
import Link from 'next/link';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import { leftNavItems, rightNavItems } from '@/data/navigation';
import { Button } from '@/components/shared/Button';
import { smoothScrollTo } from '@/components/shared/SmoothScrollProvider';
import styles from './MobileMenu.module.css';
import { cn } from '@/lib/utils/cn';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentPath,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className={styles.drawerHeader}>
          <div className={styles.brandGroup}>
            <div className={styles.logoBadge}>YM</div>
            <span className={styles.brandText}>YUKTHIMANTRA</span>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Content */}
        <div className={styles.drawerBody}>
          <div className={styles.navGroup}>
            <span className={styles.groupLabel}>Curriculum & Admissions</span>
            <ul className={styles.navList}>
              {leftNavItems.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(styles.navLink, isActive && styles.activeLink)}
                      onClick={onClose}
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={16} className={styles.arrow} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.groupLabel}>Academy & Support</span>
            <ul className={styles.navList}>
              {rightNavItems.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(styles.navLink, isActive && styles.activeLink)}
                      onClick={(e) => {
                        onClose();
                        if (item.href.includes('#')) {
                          const [targetPath, hash] = item.href.split('#');
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
                      }}
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={16} className={styles.arrow} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.drawerFooter}>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              fullWidth
              onClick={onClose}
            >
              Contact Us
            </Button>
            <Button
              href="/admission-counselling"
              variant="accent"
              size="lg"
              fullWidth
              onClick={onClose}
            >
              Book Free Counselling
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
