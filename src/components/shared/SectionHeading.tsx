import React from 'react';
import styles from './SectionHeading.module.css';
import { cn } from '@/lib/utils/cn';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'default' | 'accent' | 'lavender';
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  isEditorial?: boolean;
  className?: string;
  isDark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = 'default',
  title,
  description,
  align = 'center',
  isEditorial = false,
  className,
  isDark = false,
}) => {
  return (
    <div
      className={cn(
        styles.headingWrapper,
        align === 'center' ? styles.alignCenter : styles.alignLeft,
        isDark && styles.isDark,
        className
      )}
    >
      {badge && (
        <div className={styles.badgeWrapper}>
          <span
            className={cn(
              'badge-pill',
              badgeVariant === 'accent' && 'badge-pill-accent',
              badgeVariant === 'lavender' && 'badge-pill-lavender'
            )}
          >
            {badge}
          </span>
        </div>
      )}
      <h2
        className={cn(
          styles.title,
          isEditorial ? 'text-editorial' : styles.titleSans
        )}
      >
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
