'use client';

import React from 'react';
import { Search, X } from '@/components/icons/GoogleIcons';
import styles from './ProgrammeSearch.module.css';
import { cn } from '@/lib/utils/cn';

interface ProgrammeSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const ProgrammeSearch: React.FC<ProgrammeSearchProps> = ({
  value,
  onChange,
  placeholder = 'Search by programme title, skill, or career role...',
  className,
}) => {
  return (
    <div className={cn(styles.searchWrapper, className)}>
      <Search size={20} className={styles.searchIcon} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
        aria-label="Search programmes"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className={styles.clearButton}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
