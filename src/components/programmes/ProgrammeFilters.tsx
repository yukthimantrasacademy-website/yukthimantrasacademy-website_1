'use client';

import React from 'react';
import { RotateCcw } from 'lucide-react';
import type { ProgrammeCategory, ProgrammeGroup } from '@/types/programme';
import styles from './ProgrammeFilters.module.css';
import { cn } from '@/lib/utils/cn';

const categories: { label: string; value: ProgrammeCategory | '' }[] = [
  { label: 'All Programmes', value: '' },
  { label: 'Data Science & Analytics', value: 'Data Science & Analytics' },
  { label: 'Artificial Intelligence', value: 'Artificial Intelligence' },
  { label: 'Medical Coding', value: 'Medical Coding' },
  { label: 'Revenue Cycle (RCM)', value: 'Revenue Cycle Management' },
  { label: 'Healthcare IT & Ops', value: 'Healthcare IT & Operations' },
  { label: 'Integrated Pathway', value: 'Integrated Pathway' },
];

const groups: { label: string; shortLabel: string; value: ProgrammeGroup | '' }[] = [
  { label: 'All Tracks', shortLabel: 'All Tracks (11)', value: '' },
  { label: 'Tech + AI (Group A)', shortLabel: 'Tech + AI (6)', value: 'Group A' },
  { label: 'Healthcare Ops (Group B)', shortLabel: 'Healthcare Ops (5)', value: 'Group B' },
];

interface ProgrammeFiltersProps {
  selectedCategory: ProgrammeCategory | '';
  selectedGroup: ProgrammeGroup | '';
  onCategoryChange: (category: ProgrammeCategory | '') => void;
  onGroupChange: (group: ProgrammeGroup | '') => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
  className?: string;
}

export const ProgrammeFilters: React.FC<ProgrammeFiltersProps> = ({
  selectedCategory,
  selectedGroup,
  onCategoryChange,
  onGroupChange,
  onReset,
  totalCount,
  filteredCount,
  className,
}) => {
  const isFiltered = selectedCategory !== '' || selectedGroup !== '';

  return (
    <div className={cn(styles.filterWrapper, className)}>
      {/* 1. PRIMARY CATEGORY PILLS (CENTERED HORIZONTAL SCROLL / WRAP) */}
      <div className={styles.pillContainer}>
        {categories.map((cat) => (
          <button
            key={cat.label}
            type="button"
            onClick={() => onCategoryChange(cat.value)}
            className={cn(
              styles.filterPill,
              selectedCategory === cat.value && styles.activePill
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 2. SUB-BAR WITH DOMAIN TOGGLE & RESULTS COUNT */}
      <div className={styles.subFilterBar}>
        <div className={styles.domainGroup}>
          <span className={styles.domainLabel}>Track:</span>
          <div className={styles.domainButtonsWrap}>
            {groups.map((grp) => (
              <button
                key={grp.label}
                type="button"
                onClick={() => onGroupChange(grp.value)}
                className={cn(
                  styles.domainBtn,
                  selectedGroup === grp.value && styles.activeDomainBtn
                )}
              >
                <span className={styles.domainFullLabel}>{grp.label}</span>
                <span className={styles.domainShortLabel}>{grp.shortLabel}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.metaRight}>
          <span className={styles.countText}>
            Showing <strong>{filteredCount}</strong> of {totalCount} programmes
          </span>

          {isFiltered && (
            <button type="button" onClick={onReset} className={styles.resetButton}>
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
