'use client';

import React, { useState, useMemo } from 'react';
import type { Programme, ProgrammeCategory, ProgrammeGroup } from '@/types/programme';
import { ProgrammeSearch } from '@/components/programmes/ProgrammeSearch';
import { ProgrammeFilters } from '@/components/programmes/ProgrammeFilters';
import { ProgrammeGrid } from '@/components/programmes/ProgrammeGrid';
import { searchProgrammes, filterProgrammes } from '@/services/programmes';
import { Button } from '@/components/shared/Button';
import { SearchX, RotateCcw } from '@/components/icons/GoogleIcons';
import styles from './ProgrammesCatalogue.module.css';

interface ProgrammesCatalogueProps {
  initialProgrammes: Programme[];
}

export const ProgrammesCatalogue: React.FC<ProgrammesCatalogueProps> = ({
  initialProgrammes,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProgrammeCategory | ''>('');
  const [selectedGroup, setSelectedGroup] = useState<ProgrammeGroup | ''>('');

  const filteredProgrammes = useMemo(() => {
    let result = searchProgrammes(initialProgrammes, searchQuery);
    result = filterProgrammes(result, {
      category: selectedCategory,
      group: selectedGroup,
    });
    return result;
  }, [initialProgrammes, searchQuery, selectedCategory, selectedGroup]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedGroup('');
  };

  return (
    <div className={styles.catalogueWrapper}>
      {/* Search & Filter Controls */}
      <div className={styles.controlsArea}>
        <ProgrammeSearch
          value={searchQuery}
          onChange={setSearchQuery}
          className={styles.searchBar}
        />

        <ProgrammeFilters
          selectedCategory={selectedCategory}
          selectedGroup={selectedGroup}
          onCategoryChange={setSelectedCategory}
          onGroupChange={setSelectedGroup}
          onReset={handleReset}
          totalCount={initialProgrammes.length}
          filteredCount={filteredProgrammes.length}
        />
      </div>

      {/* Results Grid or Empty State */}
      {filteredProgrammes.length > 0 ? (
        <ProgrammeGrid programmes={filteredProgrammes} />
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIconWrap}>
            <SearchX size={36} />
          </div>
          <h3 className={styles.emptyTitle}>No matching programmes found</h3>
          <p className={styles.emptySubtitle}>
            We could not find any programme matching your current search or filter combination. Try clearing your filters or searching for terms like &ldquo;Python&rdquo;, &ldquo;Medical Coding&rdquo;, or &ldquo;Analytics&rdquo;.
          </p>
          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={handleReset}
            icon={<RotateCcw size={16} />}
            iconPosition="left"
          >
            Reset All Filters
          </Button>
        </div>
      )}
    </div>
  );
};
