export interface CareerPathway {
  id: string;
  title: string;
  category: string;
  description: string;
  roles: string[];
  skills: string[];
  relatedProgrammeSlugs: string[];
}

export interface PathwayCategory {
  id: string;
  title: string;
  description: string;
  pathways: CareerPathway[];
}
