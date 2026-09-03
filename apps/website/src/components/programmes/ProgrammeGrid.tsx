import React from 'react';
import type { Programme } from '@/types/programme';
import { ProgrammeCard } from './ProgrammeCard';
import styles from './ProgrammeGrid.module.css';
import { cn } from '@/lib/utils/cn';

interface ProgrammeGridProps {
  programmes: Programme[];
  className?: string;
  columns?: 2 | 3;
}

export const ProgrammeGrid: React.FC<ProgrammeGridProps> = ({
  programmes,
  className,
  columns = 2,
}) => {
  return (
    <div
      className={cn(
        styles.grid,
        columns === 2 ? styles.cols2 : styles.cols3,
        className
      )}
    >
      {programmes.map((programme, index) => (
        <ProgrammeCard
          key={programme.id}
          programme={programme}
          index={index + 1}
        />
      ))}
    </div>
  );
};
