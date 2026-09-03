/**
 * Contact Service Layer
 *
 * Current: simulates submission (no backend).
 * Future: POST to /api/v1/contact
 */

import type { ContactFormData, ContactSubmissionResult } from '@/types/counselling';

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  // Future: return apiClient.post('/contact', data);

  await new Promise((resolve) => setTimeout(resolve, 1200));

  if (!data.name || !data.email || !data.message) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    };
  }

  // eslint-disable-next-line no-console
  console.log('[Contact Submission]', data);

  return {
    success: true,
    message:
      'Thank you for reaching out. Our team will get back to you shortly.',
  };
}
