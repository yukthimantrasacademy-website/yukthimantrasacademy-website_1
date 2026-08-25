/**
 * Counselling Service Layer
 *
 * Current: simulates submission (no backend).
 * Future: POST to /api/v1/counselling
 */

import type { CounsellingFormData, CounsellingSubmissionResult } from '@/types/counselling';

export async function submitCounsellingForm(
  data: CounsellingFormData
): Promise<CounsellingSubmissionResult> {
  // Future: return apiClient.post('/counselling', data);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Basic validation
  if (!data.fullName || !data.mobileNumber || !data.emailId || !data.graduationStatus) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    };
  }

  if (data.graduationStatus !== 'pursuing' && data.graduationStatus !== 'completed') {
    return {
      success: false,
      message: 'Admission is open only to candidates pursuing or having completed graduation.',
    };
  }

  // eslint-disable-next-line no-console
  console.log('[Counselling Submission]', data);

  return {
    success: true,
    message:
      'Thank you for your interest! Our academic counsellor will contact you within 24–48 hours to discuss your eligibility and recommend the most suitable programme.',
  };
}
