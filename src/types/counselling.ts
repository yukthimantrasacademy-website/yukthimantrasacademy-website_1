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
