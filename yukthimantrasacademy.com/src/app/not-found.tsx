import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from '@/components/icons/GoogleIcons';
import { Button } from '@/components/shared/Button';
import styles from './not-found.module.css';
import { cn } from '@/lib/utils/cn';

export default function NotFound() {
  return (
    <div className={styles.notFoundWrapper}>
      <div className="container">
        <div className={styles.content}>
          <span className="badge-pill badge-pill-accent">404 Error</span>
          <h1 className={cn('text-editorial', styles.title)}>Page Not Found</h1>
          <p className={styles.subtitle}>
            The page or programme you are looking for might have been moved or does not exist. Explore our programme catalogue or return home.
          </p>

          <div className={styles.actions}>
            <Button href="/" variant="primary" size="lg" icon={<ArrowLeft size={18} />} iconPosition="left">
              Return Home
            </Button>
            <Button href="/programmes" variant="secondary" size="lg" icon={<Compass size={18} />}>
              Explore Programmes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
