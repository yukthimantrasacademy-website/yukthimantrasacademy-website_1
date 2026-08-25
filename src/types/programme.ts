export type ProgrammeGroup = 'Group A' | 'Group B';

export type ProgrammeCategory =
  | 'Data Science & Analytics'
  | 'Artificial Intelligence'
  | 'Healthcare Technology'
  | 'Medical Coding'
  | 'Revenue Cycle Management'
  | 'Healthcare IT & Operations'
  | 'Integrated Pathway';

export interface CurriculumModule {
  phase: number;
  title: string;
  topics: string[];
}

export interface ProgrammeFAQ {
  question: string;
  answer: string;
}

export interface ProgrammeSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Programme {
  id: string;
  slug: string;
  title: string;
  group: ProgrammeGroup;
  groupLabel: string;
  category: ProgrammeCategory;
  idealFor: string[];
  duration: string;
  summary: string;
  description: string;
  learningAreas: string[];
  curriculum: CurriculumModule[];
  toolsAndTechnologies: string[];
  careerOutcomes: string[];
  careerPathway: string;
  eligibilityRequirements: string[];
  learningModes: string[];
  faqs: ProgrammeFAQ[];
  status: 'active' | 'coming-soon' | 'archived';
  isFeatured: boolean;
  seo: ProgrammeSEO;
}
