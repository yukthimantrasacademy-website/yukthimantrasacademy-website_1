'use client';

import React from 'react';
import { RotateCcw } from 'lucide-react';
import type { ProgrammeCategory, ProgrammeGroup } from '@/types/programme';
import styles from './ProgrammeFilters.module.css';
import { cn } from '@/lib/utils/cn';

const categories: { label: string; value: ProgrammeCategory | '' }[] = [
  { label: 'ALL PROGRAMMES', value: '' },
  { label: 'DATA SCIENCE & ANALYTICS', value: 'Data Science & Analytics' },
  { label: 'ARTIFICIAL INTELLIGENCE', value: 'Artificial Intelligence' },
  { label: 'MEDICAL CODING', value: 'Medical Coding' },
  { label: 'REVENUE CYCLE (RCM)', value: 'Revenue Cycle Management' },
  { label: 'HEALTHCARE IT & OPS', value: 'Healthcare IT & Operations' },
  { label: 'INTEGRATED PATHWAY', value: 'Integrated Pathway' },
];

const groups: { label: string; value: ProgrammeGroup | '' }[] = [
  { label: 'All Tracks', value: '' },
  { label: 'Tech + AI (Group A)', value: 'Group A' },
  { label: 'Healthcare Ops (Group B)', value: 'Group B' },
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
              {grp.label}
            </button>
          ))}
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
