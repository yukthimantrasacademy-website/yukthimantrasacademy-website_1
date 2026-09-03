/**
 * YukthiMantra Academy - Shared Type Definitions
 */

// ==========================================
// Programme & Academic Types
// ==========================================

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
  duration?: string;
  description?: string;
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

// ==========================================
// Career Pathways
// ==========================================

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

// ==========================================
// Events Platform Types
// ==========================================

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  type: 'Workshop' | 'Seminar' | 'Hackathon' | 'Masterclass' | 'Community Meetup';
  date: string;
  time: string;
  speaker?: {
    name: string;
    role: string;
    company: string;
    avatarUrl?: string;
  };
  description: string;
  location: string;
  isOnline: boolean;
  registrationOpen: boolean;
  capacity?: number;
}

export interface EventRegistration {
  eventId: string;
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  registeredAt: string;
}

// ==========================================
// Candidate, Mentor & Platform Types
// ==========================================

export interface CandidateProfile {
  id: string;
  fullName: string;
  email: string;
  mobileNumber?: string;
  graduationStatus: 'pursuing' | 'completed';
  degree?: string;
  specialisation?: string;
  enrolledProgrammes: string[];
  createdAt: string;
}

export interface MentorProfile {
  id: string;
  name: string;
  headline: string;
  company: string;
  experienceYears: number;
  expertise: string[];
  bio: string;
  avatarUrl?: string;
}

export interface WaitlistSubmission {
  email: string;
  role?: 'candidate' | 'mentor' | 'attendee' | 'general';
  sourceApp: 'platform' | 'events' | 'website';
  timestamp?: string;
}

// ==========================================
// Counselling & Contact Intake Forms
// ==========================================

export interface CounsellingFormData {
  fullName: string;
  mobileNumber: string;
  whatsappNumber: string;
  emailId: string;
  city: string;
  state: string;
  graduationStatus: 'pursuing' | 'completed' | '';
  degree: string;
  specialisation: string;
  collegeUniversity: string;
  yearOfStudyOrPassing: string;
  preferredProgramme: string;
  preferredLearningMode: 'online' | 'weekend' | 'classroom' | '';
  consentForCommunication: boolean;
}

export interface CounsellingSubmissionResult {
  success: boolean;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
}

// ==========================================
// API & Infrastructure
// ==========================================

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface SiteConfig {
  name: string;
  brand: string;
  tagline: string;
  description: string;
  url: string;
  platformUrl: string;
  apiBaseUrl: string;
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
  };
  social: {
    linkedin: string;
    instagram: string;
    youtube: string;
  };
  businessHours: string;
}
