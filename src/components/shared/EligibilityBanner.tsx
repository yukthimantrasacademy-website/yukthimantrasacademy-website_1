import React from 'react';
import { ShieldCheck, ArrowRight } from '@/components/icons/GoogleIcons';
import { Button } from '@/components/shared/Button';
import styles from './EligibilityBanner.module.css';
import { cn } from '@/lib/utils/cn';

interface EligibilityBannerProps {
  className?: string;
  compact?: boolean;
}

export const EligibilityBanner: React.FC<EligibilityBannerProps> = ({
  className,
  compact = false,
}) => {
  return (
    <div className={cn(styles.bannerWrapper, compact && styles.compact, className)}>
      <div className={cn('container', styles.bannerContainer)}>
        <div className={styles.contentLeft}>
          <div className={styles.iconBadge}>
            <ShieldCheck size={20} className={styles.icon} />
          </div>
          <div className={styles.textBlock}>
            <span className={styles.tag}>Admission Eligibility Notice</span>
            <p className={styles.message}>
              This programme is open only to candidates who are currently pursuing graduation or have completed graduation. Eligibility is confirmed during counselling.
            </p>
          </div>
        </div>

        <div className={styles.actionRight}>
          <Button
            href="/eligibility"
            variant="accent"
            size={compact ? 'sm' : 'md'}
            icon={<ArrowRight size={16} />}
          >
            Check Your Eligibility
          </Button>
        </div>
      </div>
    </div>
  );
};
