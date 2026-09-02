/**
 * YukthiMantra Academy - Shared Type Definitions
 */

export interface Programme {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  format: 'Cohort-based' | 'Self-paced' | 'Hybrid';
  curriculum: CurriculumModule[];
  outcomes: string[];
  tags: string[];
}

export interface CurriculumModule {
  title: string;
  description: string;
  duration: string;
  topics: string[];
}

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
  role: 'candidate' | 'mentor' | 'attendee' | 'general';
  sourceApp: 'platform' | 'events' | 'website';
  timestamp: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  urls: {
    main: string;
    app: string;
    events: string;
  };
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    youtube?: string;
    instagram?: string;
  };
}
