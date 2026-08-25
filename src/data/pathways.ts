/**
 * Career Pathways Data
 */

import type { PathwayCategory } from '@/types/pathway';

export const pathwayCategories: PathwayCategory[] = [
  {
    id: 'tech-ai',
    title: 'Technology + AI',
    description: 'Build careers in data analytics, data science, AI and generative AI applied to healthcare.',
    pathways: [
      {
        id: 'data-analytics',
        title: 'Data Analytics',
        category: 'Technology + AI',
        description: 'Analyse healthcare data to drive decisions. From Excel and SQL to Power BI dashboards.',
        roles: ['Junior Data Analyst', 'Healthcare Reporting Analyst', 'MIS Analyst', 'BI Support Associate'],
        skills: ['Excel', 'SQL', 'Python', 'Power BI', 'Tableau', 'Data Cleaning'],
        relatedProgrammeSlugs: ['healthcare-data-analytics-foundation', 'python-data-healthcare-automation'],
      },
      {
        id: 'data-science',
        title: 'Data Science',
        category: 'Technology + AI',
        description: 'Apply statistics, machine learning and data visualisation to healthcare challenges.',
        roles: ['Data Analyst', 'Junior Data Scientist', 'Healthcare Data Analyst', 'ML Analyst'],
        skills: ['Python', 'Statistics', 'Machine Learning', 'Data Visualisation', 'Model Evaluation'],
        relatedProgrammeSlugs: ['certified-data-scientist-healthcare', 'python-data-healthcare-automation'],
      },
      {
        id: 'artificial-intelligence',
        title: 'Artificial Intelligence',
        category: 'Technology + AI',
        description: 'Develop AI solutions for clinical and healthcare use cases using ML and deep learning.',
        roles: ['AI/ML Associate', 'Healthcare AI Analyst', 'Health-tech Product Support Associate'],
        skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Responsible AI'],
        relatedProgrammeSlugs: ['artificial-intelligence-healthcare', 'machine-learning-mlops-foundation'],
      },
      {
        id: 'generative-ai',
        title: 'Generative AI',
        category: 'Technology + AI',
        description: 'Work with LLMs, prompt engineering and AI agents for healthcare document workflows.',
        roles: ['GenAI Application Associate', 'Automation Analyst', 'Health-tech Innovation Associate'],
        skills: ['Prompt Engineering', 'LLMs', 'RAG', 'AI Agents', 'Healthcare Document Workflows'],
        relatedProgrammeSlugs: ['generative-ai-llm-healthcare'],
      },
    ],
  },
  {
    id: 'healthcare-tech',
    title: 'Healthcare Technology',
    description: 'Bridge technology and healthcare with data management, IT systems and clinical data roles.',
    pathways: [
      {
        id: 'healthcare-data',
        title: 'Healthcare Data',
        category: 'Healthcare Technology',
        description: 'Manage and analyse healthcare data across clinical and operational settings.',
        roles: ['Healthcare Data Analyst', 'Clinical Data Coordinator', 'Health Information Associate'],
        skills: ['Data Quality', 'Healthcare Datasets', 'Reporting', 'EHR/EMR'],
        relatedProgrammeSlugs: ['healthcare-data-analytics-foundation', 'healthcare-it-clinical-data-management'],
      },
      {
        id: 'healthcare-it',
        title: 'Healthcare IT',
        category: 'Healthcare Technology',
        description: 'Support and manage healthcare IT systems, EHR/EMR platforms and digital health tools.',
        roles: ['Healthcare IT Support Associate', 'Health Information Associate'],
        skills: ['EHR/EMR Systems', 'Healthcare Workflows', 'Interoperability', 'Digital Health'],
        relatedProgrammeSlugs: ['healthcare-it-clinical-data-management'],
      },
      {
        id: 'clinical-data',
        title: 'Clinical Data',
        category: 'Healthcare Technology',
        description: 'Ensure clinical data quality, documentation standards and reporting compliance.',
        roles: ['Clinical Data Coordinator', 'Health Information Associate'],
        skills: ['Clinical Documentation', 'Data Quality', 'HL7/FHIR', 'Reporting'],
        relatedProgrammeSlugs: ['healthcare-it-clinical-data-management'],
      },
    ],
  },
  {
    id: 'medical-coding-ops',
    title: 'Medical Coding & Healthcare Operations',
    description: 'Specialise in medical coding, clinical coding, billing and revenue cycle management.',
    pathways: [
      {
        id: 'medical-coding',
        title: 'Medical Coding',
        category: 'Medical Coding & Healthcare Operations',
        description: 'Code medical records using ICD-10-CM, CPT and HCPCS systems.',
        roles: ['Medical Coding Trainee', 'Junior Medical Coder', 'Medical Coding Analyst'],
        skills: ['ICD-10-CM', 'CPT', 'HCPCS Level II', 'Medical Terminology', 'Anatomy'],
        relatedProgrammeSlugs: ['cpc-preparation-medical-coding', 'medical-coding-data-analytics-integrated'],
      },
      {
        id: 'clinical-coding',
        title: 'Clinical Coding',
        category: 'Medical Coding & Healthcare Operations',
        description: 'Specialise in inpatient and hospital coding with DRG and ICD system expertise.',
        roles: ['Hospital Coding Associate', 'Clinical Coding Trainee'],
        skills: ['Inpatient Coding', 'Outpatient Coding', 'DRGs', 'ICD Systems', 'Documentation Review'],
        relatedProgrammeSlugs: ['ccs-preparation-clinical-coding'],
      },
      {
        id: 'medical-billing',
        title: 'Medical Billing',
        category: 'Medical Coding & Healthcare Operations',
        description: 'Manage the claims lifecycle from submission through denials and AR follow-up.',
        roles: ['Medical Billing Associate', 'Claims/Denials Associate'],
        skills: ['Claims Lifecycle', 'Insurance', 'Denials Management', 'AR Follow-up'],
        relatedProgrammeSlugs: ['medical-billing-revenue-cycle-management'],
      },
      {
        id: 'rcm',
        title: 'Revenue Cycle Management',
        category: 'Medical Coding & Healthcare Operations',
        description: 'Oversee the full revenue cycle from patient registration through final payment.',
        roles: ['RCM Executive', 'RCM Data Analyst', 'Healthcare Operations Analyst'],
        skills: ['RCM Workflow', 'Compliance', 'Charge Entry', 'Eligibility Verification'],
        relatedProgrammeSlugs: ['medical-billing-revenue-cycle-management', 'medical-coding-data-analytics-integrated'],
      },
    ],
  },
  {
    id: 'integrated',
    title: 'Integrated Career Pathway',
    description: 'Combine healthcare domain knowledge with technology and data analytics for a differentiated career.',
    pathways: [
      {
        id: 'integrated-healthcare',
        title: 'Healthcare + Technology + Data Analytics',
        category: 'Integrated Career Pathway',
        description: 'A unique career profile that bridges medical coding, healthcare operations and data analytics.',
        roles: ['Medical Coding Analyst', 'RCM Data Analyst', 'Healthcare Operations Analyst'],
        skills: ['Medical Coding', 'Data Analytics', 'Excel', 'SQL', 'Power BI', 'Reporting'],
        relatedProgrammeSlugs: ['medical-coding-data-analytics-integrated'],
      },
    ],
  },
];
