/**
 * Official Programme Data — Source of Truth
 * Based on the Nibandhana Eligibility & Programme Guide.
 *
 * All 11 programmes are defined here. Every programme card,
 * detail page, search result, and filter draws from this data.
 * Do NOT duplicate programme content elsewhere.
 */

import type { Programme } from '@/types/programme';

export const programmes: Programme[] = [
  /* ================================================================
   * GROUP A — Data Science, AI & Healthcare Technology
   * ================================================================ */
  {
    id: 'prog-01',
    slug: 'healthcare-data-analytics-foundation',
    title: 'Healthcare Data Analytics Foundation',
    group: 'Group A',
    groupLabel: 'Data Science, AI & Healthcare Technology',
    category: 'Data Science & Analytics',
    idealFor: [
      'Graduation-pursuing or completed candidates from any degree background',
      'Especially B.Sc, BCA, B.Tech, B.Com and life-science graduates',
    ],
    duration: '2–4 months',
    summary:
      'Build foundational data analytics skills with healthcare datasets, dashboards and reporting tools.',
    description:
      'This programme equips learners with essential data analytics skills applied to healthcare. Starting from Excel and SQL fundamentals through to dashboard creation with Power BI and Tableau concepts, the curriculum emphasises practical work with real healthcare datasets and reporting workflows.',
    learningAreas: [
      'Excel',
      'SQL basics',
      'Python basics',
      'Data cleaning',
      'Dashboards',
      'Power BI/Tableau concepts',
      'Healthcare datasets',
      'Reporting',
    ],
    curriculum: [
      { phase: 1, title: 'Foundation', topics: ['Excel for data analysis', 'SQL fundamentals', 'Database querying'] },
      { phase: 2, title: 'Python Essentials', topics: ['Python basics', 'Data types & structures', 'Libraries introduction'] },
      { phase: 3, title: 'Data Wrangling', topics: ['Data cleaning techniques', 'Data transformation', 'Healthcare datasets'] },
      { phase: 4, title: 'Visualisation & Reporting', topics: ['Dashboard design', 'Power BI / Tableau concepts', 'Healthcare reporting'] },
    ],
    toolsAndTechnologies: ['Excel', 'SQL', 'Python', 'Power BI', 'Tableau'],
    careerOutcomes: [
      'Junior Data Analyst',
      'Healthcare Reporting Analyst',
      'MIS Analyst',
      'BI Support Associate',
    ],
    careerPathway: 'Data Analytics',
    eligibilityRequirements: [
      'Currently pursuing graduation or graduation completed',
      'Any degree background accepted',
      'Eligibility confirmed during counselling',
    ],
    learningModes: ['Online', 'Weekend', 'Classroom'],
    faqs: [
      { question: 'Do I need prior coding experience?', answer: 'No. This programme starts from the basics and is designed for beginners with no prior coding experience.' },
      { question: 'What tools will I learn?', answer: 'You will learn Excel, SQL, Python basics, and dashboard tools like Power BI and Tableau.' },
      { question: 'Is this programme suitable for non-technical graduates?', answer: 'Yes. The programme is designed for graduates from any discipline, including B.Com, BA, and life sciences.' },
    ],
    status: 'active',
    isFeatured: true,
    seo: {
      metaTitle: 'Healthcare Data Analytics Foundation Programme | YukthiMantra\'s Academy',
      metaDescription: 'Learn data analytics with healthcare datasets. Excel, SQL, Python, Power BI & Tableau. 2–4 months. For graduates and pursuing students.',
      keywords: ['data analytics', 'healthcare analytics', 'Excel', 'SQL', 'Power BI', 'healthcare data'],
    },
  },

  {
    id: 'prog-02',
    slug: 'certified-data-scientist-healthcare',
    title: 'Certified Data Scientist – Healthcare Track',
    group: 'Group A',
    groupLabel: 'Data Science, AI & Healthcare Technology',
    category: 'Data Science & Analytics',
    idealFor: [
      'Graduates or final-year students with analytical aptitude',
      'Preferred: B.Tech, BCA, B.Sc Maths/Statistics/Computer Science and life-science graduates',
    ],
    duration: '6–9 months',
    summary:
      'Comprehensive data science programme with machine learning, healthcare use cases, capstone projects and portfolio building.',
    description:
      'A rigorous programme covering Python, statistics, machine learning, and data visualisation with a strong emphasis on healthcare applications. Learners build a professional portfolio through capstone projects and gain the analytical depth required for data science roles.',
    learningAreas: [
      'Python',
      'Statistics',
      'Machine learning',
      'Data visualisation',
      'Healthcare use cases',
      'Model evaluation',
      'Capstone projects',
      'Portfolio building',
    ],
    curriculum: [
      { phase: 1, title: 'Python & Statistics', topics: ['Advanced Python', 'Statistical methods', 'Probability', 'Hypothesis testing'] },
      { phase: 2, title: 'Machine Learning', topics: ['Supervised learning', 'Unsupervised learning', 'Feature engineering', 'Model evaluation'] },
      { phase: 3, title: 'Healthcare Applications', topics: ['Healthcare datasets', 'Clinical data analysis', 'Healthcare use cases'] },
      { phase: 4, title: 'Visualisation & Portfolio', topics: ['Data visualisation', 'Dashboard creation', 'Capstone project', 'Portfolio building'] },
    ],
    toolsAndTechnologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'SQL'],
    careerOutcomes: [
      'Data Analyst',
      'Junior Data Scientist',
      'Healthcare Data Analyst',
      'ML Analyst',
    ],
    careerPathway: 'Data Science',
    eligibilityRequirements: [
      'Currently pursuing graduation or graduation completed',
      'Analytical aptitude preferred',
      'Eligibility confirmed during counselling',
    ],
    learningModes: ['Online', 'Weekend', 'Classroom'],
    faqs: [
      { question: 'Do I need a mathematics background?', answer: 'An analytical aptitude is helpful but not mandatory. The programme covers the required statistics and mathematical foundations.' },
      { question: 'Will I build a portfolio?', answer: 'Yes. You will complete capstone projects that form a professional data science portfolio.' },
      { question: 'What is the healthcare focus?', answer: 'You will apply data science techniques to real healthcare use cases, clinical datasets and health-data challenges.' },
    ],
    status: 'active',
    isFeatured: true,
    seo: {
      metaTitle: 'Certified Data Scientist – Healthcare Track | YukthiMantra\'s Academy',
      metaDescription: 'Become a data scientist with healthcare expertise. Python, ML, statistics, capstone projects. 6–9 months. For graduates.',
      keywords: ['data scientist', 'machine learning', 'healthcare data science', 'Python', 'capstone projects'],
    },
  },

  {
    id: 'prog-03',
    slug: 'artificial-intelligence-healthcare',
    title: 'Artificial Intelligence in Healthcare',
    group: 'Group A',
    groupLabel: 'Data Science, AI & Healthcare Technology',
    category: 'Artificial Intelligence',
    idealFor: [
      'Graduates or final-year students with basic programming',
      'Candidates willing to complete a foundation module',
    ],
    duration: '4–6 months',
    summary:
      'Explore machine learning, deep learning, NLP and computer vision applied to clinical and healthcare use cases.',
    description:
      'This programme covers the core pillars of artificial intelligence — machine learning, deep learning, NLP, and computer vision — with a dedicated focus on clinical and healthcare applications. Learners develop an understanding of responsible AI and deployment fundamentals.',
    learningAreas: [
      'Machine learning',
      'Deep learning basics',
      'NLP',
      'Computer vision concepts',
      'Clinical / healthcare use cases',
      'Responsible AI',
      'Deployment fundamentals',
    ],
    curriculum: [
      { phase: 1, title: 'ML Foundations', topics: ['Machine learning algorithms', 'Model training', 'Evaluation metrics'] },
      { phase: 2, title: 'Deep Learning', topics: ['Neural networks', 'Deep learning basics', 'Frameworks introduction'] },
      { phase: 3, title: 'NLP & Computer Vision', topics: ['Natural Language Processing', 'Computer vision concepts', 'Healthcare applications'] },
      { phase: 4, title: 'Responsible AI & Deployment', topics: ['Responsible AI principles', 'Model deployment fundamentals', 'Clinical use cases'] },
    ],
    toolsAndTechnologies: ['Python', 'TensorFlow', 'PyTorch', 'NLP Libraries', 'Computer Vision Tools'],
    careerOutcomes: [
      'AI/ML Associate',
      'Healthcare AI Analyst',
      'Health-tech Product Support Associate',
    ],
    careerPathway: 'Artificial Intelligence',
    eligibilityRequirements: [
      'Currently pursuing graduation or graduation completed',
      'Basic programming knowledge or willingness to complete foundation module',
      'Eligibility confirmed during counselling',
    ],
    learningModes: ['Online', 'Weekend', 'Classroom'],
    faqs: [
      { question: 'Do I need programming experience?', answer: 'Basic programming knowledge is preferred. If you are new to coding, you can complete a foundation module before starting.' },
      { question: 'What healthcare applications will I learn?', answer: 'You will work on clinical use cases including medical imaging concepts, clinical NLP, and responsible AI in healthcare.' },
    ],
    status: 'active',
    isFeatured: true,
    seo: {
      metaTitle: 'Artificial Intelligence in Healthcare Programme | YukthiMantra\'s Academy',
      metaDescription: 'Learn AI for healthcare. Machine learning, deep learning, NLP, computer vision. 4–6 months. For graduates.',
      keywords: ['AI healthcare', 'machine learning', 'deep learning', 'NLP', 'computer vision', 'healthcare AI'],
    },
  },

  {
    id: 'prog-04',
    slug: 'generative-ai-llm-healthcare',
    title: 'Generative AI & LLM Applications for Healthcare',
    group: 'Group A',
    groupLabel: 'Data Science, AI & Healthcare Technology',
    category: 'Artificial Intelligence',
    idealFor: [
      'Graduates',
      'Working professionals',
      'Suitable for IT, life sciences, pharmacy and allied-health backgrounds',
    ],
    duration: '6–10 weeks',
    summary:
      'Learn prompt engineering, LLM foundations, RAG, AI agents and healthcare document workflows.',
    description:
      'A focused programme on the latest generative AI technologies. Covers prompt engineering, large language model foundations, retrieval-augmented generation (RAG), AI agents, and their applications in healthcare document workflows — with emphasis on evaluation, privacy and responsible use.',
    learningAreas: [
      'Prompt engineering',
      'LLM foundations',
      'RAG',
      'AI agents',
      'Healthcare document workflows',
      'Evaluation',
      'Privacy',
      'Responsible use',
    ],
    curriculum: [
      { phase: 1, title: 'LLM Foundations', topics: ['Large language models', 'Prompt engineering', 'Prompt design patterns'] },
      { phase: 2, title: 'RAG & AI Agents', topics: ['Retrieval-augmented generation', 'AI agents', 'Tool use and orchestration'] },
      { phase: 3, title: 'Healthcare Applications', topics: ['Healthcare document workflows', 'Clinical text processing', 'Privacy considerations'] },
      { phase: 4, title: 'Evaluation & Responsible Use', topics: ['Model evaluation', 'Responsible AI use', 'Deployment considerations'] },
    ],
    toolsAndTechnologies: ['Python', 'LLM APIs', 'RAG Frameworks', 'Vector Databases', 'AI Agent Tools'],
    careerOutcomes: [
      'GenAI Application Associate',
      'Automation Analyst',
      'Health-tech Operations/Innovation Associate',
    ],
    careerPathway: 'Generative AI',
    eligibilityRequirements: [
      'Currently pursuing graduation or graduation completed',
      'Suitable for IT, life sciences, pharmacy and allied-health backgrounds',
      'Eligibility confirmed during counselling',
    ],
    learningModes: ['Online', 'Weekend'],
    faqs: [
      { question: 'Is this suitable for non-technical backgrounds?', answer: 'Yes. The programme is designed for graduates from various backgrounds including life sciences and allied health.' },
      { question: 'How does this differ from the AI in Healthcare programme?', answer: 'This programme focuses specifically on generative AI and large language models, while the AI programme covers broader machine learning and deep learning topics.' },
    ],
    status: 'active',
    isFeatured: false,
    seo: {
      metaTitle: 'Generative AI & LLM Applications for Healthcare | YukthiMantra\'s Academy',
      metaDescription: 'Master generative AI for healthcare. Prompt engineering, LLMs, RAG, AI agents. 6–10 weeks. For graduates and professionals.',
      keywords: ['generative AI', 'LLM', 'prompt engineering', 'RAG', 'healthcare AI', 'AI agents'],
    },
  },

  {
    id: 'prog-05',
    slug: 'python-data-healthcare-automation',
    title: 'Python for Data & Healthcare Automation',
    group: 'Group A',
    groupLabel: 'Data Science, AI & Healthcare Technology',
    category: 'Data Science & Analytics',
    idealFor: [
      'Graduation-pursuing students',
      'Graduates needing a coding bridge before DS/AI programmes',
    ],
    duration: '4–8 weeks',
    summary:
      'Master Python essentials for data analysis and healthcare workflow automation.',
    description:
      'A coding bridge programme designed to prepare learners for more advanced data science and AI tracks. Covers Python essentials, NumPy, Pandas, APIs, file/spreadsheet automation, data visualisation, and healthcare workflow examples.',
    learningAreas: [
      'Python essentials',
      'NumPy',
      'Pandas',
      'APIs',
      'Spreadsheet/file automation',
      'Data visualisation',
      'Healthcare workflow examples',
    ],
    curriculum: [
      { phase: 1, title: 'Python Essentials', topics: ['Variables, data types, control flow', 'Functions and modules', 'File handling'] },
      { phase: 2, title: 'Data Libraries', topics: ['NumPy arrays', 'Pandas DataFrames', 'Data manipulation'] },
      { phase: 3, title: 'Automation & APIs', topics: ['Working with APIs', 'Spreadsheet automation', 'File processing'] },
      { phase: 4, title: 'Visualisation & Healthcare', topics: ['Data visualisation with Python', 'Healthcare workflow examples', 'Mini projects'] },
    ],
    toolsAndTechnologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'APIs'],
    careerOutcomes: [
      'Foundation pathway for Data Analytics',
      'Foundation pathway for Data Science',
      'Foundation pathway for AI',
      'Healthcare automation roles',
    ],
    careerPathway: 'Data Analytics',
    eligibilityRequirements: [
      'Currently pursuing graduation or graduation completed',
      'No prior coding experience required',
      'Eligibility confirmed during counselling',
    ],
    learningModes: ['Online', 'Weekend', 'Classroom'],
    faqs: [
      { question: 'Is this a standalone programme?', answer: 'It can be taken standalone, but it is designed as a foundation pathway leading into Data Analytics, Data Science, or AI programmes.' },
      { question: 'Do I need any prerequisites?', answer: 'No prior coding experience is required. The programme starts from the basics.' },
    ],
    status: 'active',
    isFeatured: false,
    seo: {
      metaTitle: 'Python for Data & Healthcare Automation | YukthiMantra\'s Academy',
      metaDescription: 'Learn Python for data analysis and healthcare automation. NumPy, Pandas, APIs. 4–8 weeks foundation course for graduates.',
      keywords: ['Python', 'data automation', 'healthcare automation', 'NumPy', 'Pandas', 'foundation course'],
    },
  },

  {
    id: 'prog-06',
    slug: 'machine-learning-mlops-foundation',
    title: 'Machine Learning & MLOps Foundation',
    group: 'Group A',
    groupLabel: 'Data Science, AI & Healthcare Technology',
    category: 'Artificial Intelligence',
    idealFor: [
      'Graduates or final-year students',
      'Python and data-analysis fundamentals required',
    ],
    duration: '3–5 months',
    summary:
      'Learn supervised and unsupervised learning, ML pipelines, model deployment and monitoring with health-data use cases.',
    description:
      'Covers the complete machine learning lifecycle from model training through deployment and monitoring. Includes supervised and unsupervised learning, ML pipelines, model evaluation, versioning, and deployment basics — all applied to healthcare data use cases.',
    learningAreas: [
      'Supervised learning',
      'Unsupervised learning',
      'Pipelines',
      'Model evaluation',
      'Versioning',
      'Deployment basics',
      'Monitoring',
      'Health-data use cases',
    ],
    curriculum: [
      { phase: 1, title: 'ML Fundamentals', topics: ['Supervised learning algorithms', 'Unsupervised learning', 'Model selection'] },
      { phase: 2, title: 'ML Pipelines', topics: ['Data pipelines', 'Feature engineering', 'Model evaluation'] },
      { phase: 3, title: 'MLOps Basics', topics: ['Model versioning', 'Deployment basics', 'Monitoring fundamentals'] },
      { phase: 4, title: 'Healthcare Applications', topics: ['Health-data use cases', 'End-to-end ML project', 'Portfolio project'] },
    ],
    toolsAndTechnologies: ['Python', 'Scikit-learn', 'MLflow', 'Docker basics', 'Git'],
    careerOutcomes: [
      'ML Associate',
      'MLOps Support Associate',
      'Data/AI Project Associate',
    ],
    careerPathway: 'Artificial Intelligence',
    eligibilityRequirements: [
      'Currently pursuing graduation or graduation completed',
      'Python and data-analysis fundamentals required',
      'Eligibility confirmed during counselling',
    ],
    learningModes: ['Online', 'Weekend', 'Classroom'],
    faqs: [
      { question: 'What prerequisites are needed?', answer: 'You should have foundational knowledge of Python and data analysis. If not, consider taking the Python for Data & Healthcare Automation programme first.' },
      { question: 'What is MLOps?', answer: 'MLOps (Machine Learning Operations) covers the practices for deploying, monitoring and maintaining machine learning models in production environments.' },
    ],
    status: 'active',
    isFeatured: false,
    seo: {
      metaTitle: 'Machine Learning & MLOps Foundation | YukthiMantra\'s Academy',
      metaDescription: 'Master ML and MLOps for healthcare. Supervised/unsupervised learning, pipelines, deployment. 3–5 months for graduates.',
      keywords: ['machine learning', 'MLOps', 'ML pipelines', 'model deployment', 'healthcare ML'],
    },
  },

  /* ================================================================
   * GROUP B — Medical Coding, Revenue Cycle & Healthcare Operations
   * ================================================================ */
  {
    id: 'prog-07',
    slug: 'cpc-preparation-medical-coding',
    title: 'CPC Preparation – Medical Coding',
    group: 'Group B',
    groupLabel: 'Medical Coding, Revenue Cycle & Healthcare Operations',
    category: 'Medical Coding',
    idealFor: [
      'Graduation-pursuing / final-year or completed graduates',
      'Preferred: life sciences, pharmacy, nursing, allied health and related backgrounds',
    ],
    duration: '3–6 months',
    summary:
      'Comprehensive medical coding preparation covering ICD-10-CM, CPT, HCPCS Level II with exam-oriented practice.',
    description:
      'Prepares learners for the CPC certification examination pathway. Covers medical terminology, anatomy, coding systems (ICD-10-CM, CPT, HCPCS Level II), coding guidelines, compliance and extensive practice cases for exam readiness.',
    learningAreas: [
      'Medical terminology',
      'Anatomy',
      'ICD-10-CM',
      'CPT',
      'HCPCS Level II',
      'Coding guidelines',
      'Compliance',
      'Practice cases',
      'Exam-oriented preparation',
    ],
    curriculum: [
      { phase: 1, title: 'Medical Foundations', topics: ['Medical terminology', 'Human anatomy', 'Physiology essentials'] },
      { phase: 2, title: 'Coding Systems', topics: ['ICD-10-CM coding', 'CPT coding', 'HCPCS Level II'] },
      { phase: 3, title: 'Guidelines & Compliance', topics: ['Coding guidelines', 'Compliance requirements', 'Documentation practices'] },
      { phase: 4, title: 'Exam Preparation', topics: ['Practice cases', 'Mock examinations', 'Exam strategy and time management'] },
    ],
    toolsAndTechnologies: ['ICD-10-CM', 'CPT Manual', 'HCPCS', 'Medical Coding Software'],
    careerOutcomes: [
      'Medical Coding Trainee',
      'Junior Medical Coder',
      'Preparation pathway for CPC certification examination',
    ],
    careerPathway: 'Medical Coding',
    eligibilityRequirements: [
      'Currently pursuing graduation or graduation completed',
      'Life sciences, pharmacy, nursing or allied health background preferred',
      'Eligibility confirmed during counselling',
    ],
    learningModes: ['Online', 'Weekend', 'Classroom'],
    faqs: [
      { question: 'Does this programme include the CPC certification?', answer: 'This programme prepares you for the CPC certification examination. The certification itself is administered separately by the certifying body.' },
      { question: 'Can non-medical graduates apply?', answer: 'Yes. Graduates from any discipline may apply, though life science and allied health backgrounds are preferred.' },
      { question: 'What coding systems will I learn?', answer: 'You will learn ICD-10-CM, CPT, and HCPCS Level II coding systems.' },
    ],
    status: 'active',
    isFeatured: true,
    seo: {
      metaTitle: 'CPC Preparation – Medical Coding Programme | YukthiMantra\'s Academy',
      metaDescription: 'Prepare for CPC certification. Learn ICD-10-CM, CPT, HCPCS coding. 3–6 months. For graduates, especially life science backgrounds.',
      keywords: ['CPC preparation', 'medical coding', 'ICD-10-CM', 'CPT', 'HCPCS', 'healthcare coding'],
    },
  },

  {
    id: 'prog-08',
    slug: 'ccs-preparation-clinical-coding',
    title: 'CCS Preparation – Clinical & Hospital Coding',
    group: 'Group B',
    groupLabel: 'Medical Coding, Revenue Cycle & Healthcare Operations',
    category: 'Medical Coding',
    idealFor: [
      'Graduates with strong medical terminology/anatomy foundation',
      'Preferred: life science, nursing, pharmacy and allied-health graduates',
    ],
    duration: '4–6 months',
    summary:
      'Advanced clinical and hospital coding preparation covering inpatient/outpatient concepts, DRGs and mock assessments.',
    description:
      'An advanced medical coding programme focused on clinical and hospital coding. Covers inpatient and outpatient coding concepts, ICD systems, documentation review, diagnosis-related groups (DRGs), coding guidelines, and intensive mock assessments for CCS certification examination preparation.',
    learningAreas: [
      'Inpatient/outpatient coding concepts',
      'ICD systems',
      'Documentation review',
      'DRGs',
      'Coding guidelines',
      'Mock assessments',
    ],
    curriculum: [
      { phase: 1, title: 'Clinical Coding Foundations', topics: ['Inpatient coding concepts', 'Outpatient coding concepts', 'Documentation review'] },
      { phase: 2, title: 'ICD Systems & DRGs', topics: ['ICD coding systems', 'Diagnosis-related groups', 'Case studies'] },
      { phase: 3, title: 'Advanced Coding', topics: ['Complex case coding', 'Coding guidelines', 'Compliance'] },
      { phase: 4, title: 'Assessment Preparation', topics: ['Mock assessments', 'Case-based practice', 'Exam readiness'] },
    ],
    toolsAndTechnologies: ['ICD-10-CM', 'ICD-10-PCS', 'DRG Groupers', 'Clinical Coding Tools'],
    careerOutcomes: [
      'Hospital Coding Associate',
      'Clinical Coding Trainee',
      'Preparation pathway for CCS certification examination',
    ],
    careerPathway: 'Medical Coding',
    eligibilityRequirements: [
      'Currently pursuing graduation or graduation completed',
      'Strong medical terminology/anatomy foundation preferred',
      'Eligibility confirmed during counselling',
    ],
    learningModes: ['Online', 'Weekend', 'Classroom'],
    faqs: [
      { question: 'How is this different from CPC preparation?', answer: 'CCS focuses on clinical and hospital (inpatient) coding, while CPC covers primarily outpatient and physician-based coding.' },
      { question: 'Does this include the CCS certification?', answer: 'This programme prepares you for the CCS certification examination. The certification is administered separately.' },
    ],
    status: 'active',
    isFeatured: false,
    seo: {
      metaTitle: 'CCS Preparation – Clinical & Hospital Coding | YukthiMantra\'s Academy',
      metaDescription: 'Prepare for CCS certification. Clinical and hospital coding, DRGs, ICD systems. 4–6 months for graduates.',
      keywords: ['CCS preparation', 'clinical coding', 'hospital coding', 'DRGs', 'ICD systems'],
    },
  },

  {
    id: 'prog-09',
    slug: 'medical-billing-revenue-cycle-management',
    title: 'Medical Billing & Revenue Cycle Management',
    group: 'Group B',
    groupLabel: 'Medical Coding, Revenue Cycle & Healthcare Operations',
    category: 'Revenue Cycle Management',
    idealFor: [
      'Graduates or final-year students from any discipline',
      'Preference for healthcare-related backgrounds',
    ],
    duration: '2–4 months',
    summary:
      'Learn the complete medical billing workflow including claims, insurance, denials management and RCM operations.',
    description:
      'A practical programme covering the end-to-end medical billing and revenue cycle management workflow. From claims lifecycle and insurance basics through eligibility verification, charge entry, denials management, AR follow-up, compliance and RCM workflow operations.',
    learningAreas: [
      'Claims lifecycle',
      'Insurance basics',
      'Eligibility verification',
      'Charge entry',
      'Denials management',
      'AR follow-up',
      'Compliance',
      'RCM workflow',
    ],
    curriculum: [
      { phase: 1, title: 'Billing Foundations', topics: ['Healthcare billing overview', 'Insurance basics', 'Eligibility verification'] },
      { phase: 2, title: 'Claims & Charge Entry', topics: ['Claims lifecycle', 'Charge entry', 'Claim submission'] },
      { phase: 3, title: 'Denials & AR', topics: ['Denials management', 'AR follow-up', 'Appeals process'] },
      { phase: 4, title: 'RCM Operations', topics: ['RCM workflow', 'Compliance', 'Reporting and metrics'] },
    ],
    toolsAndTechnologies: ['Billing Software', 'Claims Systems', 'RCM Tools', 'Excel'],
    careerOutcomes: [
      'Medical Billing Associate',
      'RCM Executive',
      'Claims/Denials Associate',
    ],
    careerPathway: 'Revenue Cycle Management',
    eligibilityRequirements: [
      'Currently pursuing graduation or graduation completed',
      'Any discipline accepted',
      'Eligibility confirmed during counselling',
    ],
    learningModes: ['Online', 'Weekend', 'Classroom'],
    faqs: [
      { question: 'Do I need a medical background?', answer: 'No. The programme is open to graduates from any discipline, though healthcare-related backgrounds are preferred.' },
      { question: 'What career options are available after this programme?', answer: 'You can pursue roles such as Medical Billing Associate, RCM Executive, or Claims/Denials Associate.' },
    ],
    status: 'active',
    isFeatured: false,
    seo: {
      metaTitle: 'Medical Billing & Revenue Cycle Management | YukthiMantra\'s Academy',
      metaDescription: 'Master medical billing and RCM. Claims, insurance, denials management. 2–4 months for graduates.',
      keywords: ['medical billing', 'RCM', 'revenue cycle management', 'claims', 'healthcare billing'],
    },
  },

  {
    id: 'prog-10',
    slug: 'healthcare-it-clinical-data-management',
    title: 'Healthcare IT & Clinical Data Management',
    group: 'Group B',
    groupLabel: 'Medical Coding, Revenue Cycle & Healthcare Operations',
    category: 'Healthcare IT & Operations',
    idealFor: [
      'B.Tech, BCA, B.Sc, Nursing, Pharmacy, Life-science graduates',
      'Allied-health graduates',
      'Final-year students',
    ],
    duration: '4–6 months',
    summary:
      'Understand healthcare workflows, EHR/EMR systems, data quality and digital health operations.',
    description:
      'An industry-oriented programme covering healthcare IT infrastructure, EHR/EMR systems, clinical documentation, data quality management, interoperability basics, and digital health operations. Designed for technology and healthcare graduates who want to work in health-tech environments.',
    learningAreas: [
      'Healthcare workflows',
      'EHR/EMR concepts',
      'Data quality',
      'Clinical documentation',
      'Interoperability basics',
      'Reporting',
      'Digital health operations',
    ],
    curriculum: [
      { phase: 1, title: 'Healthcare IT Foundations', topics: ['Healthcare workflows', 'IT in healthcare', 'System architecture basics'] },
      { phase: 2, title: 'EHR/EMR Systems', topics: ['EHR/EMR concepts', 'Clinical documentation', 'Data standards'] },
      { phase: 3, title: 'Data Quality & Interoperability', topics: ['Data quality management', 'Interoperability basics', 'HL7/FHIR introduction'] },
      { phase: 4, title: 'Digital Health Operations', topics: ['Digital health operations', 'Reporting', 'Industry practices'] },
    ],
    toolsAndTechnologies: ['EHR/EMR Systems', 'HL7', 'FHIR', 'Data Quality Tools', 'Excel'],
    careerOutcomes: [
      'Healthcare IT Support Associate',
      'Clinical Data Coordinator',
      'Health Information Associate',
    ],
    careerPathway: 'Healthcare Technology',
    eligibilityRequirements: [
      'Currently pursuing graduation or graduation completed',
      'Technology or healthcare background preferred',
      'Eligibility confirmed during counselling',
    ],
    learningModes: ['Online', 'Weekend', 'Classroom'],
    faqs: [
      { question: 'What is EHR/EMR?', answer: 'Electronic Health Records (EHR) and Electronic Medical Records (EMR) are digital systems used to store and manage patient health information.' },
      { question: 'Is coding knowledge required?', answer: 'No coding is required. The programme focuses on healthcare IT operations and data management concepts.' },
    ],
    status: 'active',
    isFeatured: false,
    seo: {
      metaTitle: 'Healthcare IT & Clinical Data Management | YukthiMantra\'s Academy',
      metaDescription: 'Learn healthcare IT, EHR/EMR systems, clinical data management. 4–6 months for graduates.',
      keywords: ['healthcare IT', 'EHR', 'EMR', 'clinical data', 'health information', 'digital health'],
    },
  },

  {
    id: 'prog-11',
    slug: 'medical-coding-data-analytics-integrated',
    title: 'Medical Coding + Data Analytics Integrated Pathway',
    group: 'Group B',
    groupLabel: 'Medical Coding, Revenue Cycle & Healthcare Operations',
    category: 'Integrated Pathway',
    idealFor: [
      'Graduates or final-year students',
      'Candidates seeking a differentiated technology + healthcare profile',
      'Ideally life science/allied health plus basic computer aptitude',
    ],
    duration: '6–9 months',
    summary:
      'A unique integrated programme combining medical coding fundamentals with data analytics for a differentiated career profile.',
    description:
      'Combines medical coding fundamentals with data analytics capabilities to create a differentiated technology + healthcare professional. Covers medical coding, healthcare revenue cycle, Excel, SQL, Power BI, reporting, data quality, workflow automation, and portfolio projects.',
    learningAreas: [
      'Medical coding fundamentals',
      'Healthcare revenue cycle',
      'Excel / SQL / Power BI',
      'Reporting',
      'Data quality',
      'Workflow automation',
      'Portfolio projects',
    ],
    curriculum: [
      { phase: 1, title: 'Medical Coding Basics', topics: ['Medical terminology', 'Coding fundamentals', 'Healthcare revenue cycle'] },
      { phase: 2, title: 'Data Analytics Foundation', topics: ['Excel for analysis', 'SQL querying', 'Data manipulation'] },
      { phase: 3, title: 'Reporting & Visualisation', topics: ['Power BI dashboards', 'Healthcare reporting', 'Data quality'] },
      { phase: 4, title: 'Integration & Portfolio', topics: ['Workflow automation', 'Integrated projects', 'Portfolio building'] },
    ],
    toolsAndTechnologies: ['ICD-10-CM', 'CPT', 'Excel', 'SQL', 'Power BI'],
    careerOutcomes: [
      'Medical Coding Analyst',
      'RCM Data Analyst',
      'Healthcare Operations Analyst',
    ],
    careerPathway: 'Integrated Career Pathway',
    eligibilityRequirements: [
      'Currently pursuing graduation or graduation completed',
      'Life science/allied health background with basic computer aptitude preferred',
      'Eligibility confirmed during counselling',
    ],
    learningModes: ['Online', 'Weekend', 'Classroom'],
    faqs: [
      { question: 'How is this different from separate coding and analytics programmes?', answer: 'This integrated pathway combines both disciplines into one programme, creating a unique career profile that bridges medical coding with data analytics skills.' },
      { question: 'What kind of portfolio will I build?', answer: 'You will build portfolio projects that demonstrate both medical coding knowledge and data analytics capabilities.' },
    ],
    status: 'active',
    isFeatured: true,
    seo: {
      metaTitle: 'Medical Coding + Data Analytics Integrated Pathway | YukthiMantra\'s Academy',
      metaDescription: 'Combined medical coding and data analytics programme. Excel, SQL, Power BI, coding fundamentals. 6–9 months for graduates.',
      keywords: ['medical coding', 'data analytics', 'integrated pathway', 'healthcare analytics', 'coding analyst'],
    },
  },
];
