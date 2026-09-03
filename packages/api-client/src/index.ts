/**
 * YukthiMantra Academy - Shared API Client Abstraction
 */

import type {
  ApiResponse,
  CounsellingFormData,
  CounsellingSubmissionResult,
  ContactFormData,
  ContactSubmissionResult,
  WaitlistSubmission,
  EventRegistration,
} from '@yukthimantra/types';

export interface ApiClientConfig {
  baseUrl?: string;
  timeoutMs?: number;
  headers?: Record<string, string>;
}

export class AcademyApiClient {
  private baseUrl: string;
  private timeoutMs: number;
  private defaultHeaders: Record<string, string>;

  constructor(config: ApiClientConfig = {}) {
    this.baseUrl = config.baseUrl || process.env.NEXT_PUBLIC_API_BASE_URL || '';
    this.timeoutMs = config.timeoutMs || 10000;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...config.headers,
    };
  }

  /**
   * Submit an admission counselling intake lead
   */
  async submitCounselling(data: CounsellingFormData): Promise<ApiResponse<CounsellingSubmissionResult>> {
    if (!this.baseUrl) {
      // Graceful local development simulation
      return {
        success: true,
        data: {
          success: true,
          message: `Thank you, ${data.fullName}! Your counselling request has been received. Our academic advisors will connect with you within 24 hours.`,
        },
      };
    }

    return this.post<CounsellingSubmissionResult>('/api/counselling', data);
  }

  /**
   * Submit general contact inquiry
   */
  async submitContact(data: ContactFormData): Promise<ApiResponse<ContactSubmissionResult>> {
    if (!this.baseUrl) {
      return {
        success: true,
        data: {
          success: true,
          message: `Thank you, ${data.name}! We have received your message and will respond shortly.`,
        },
      };
    }

    return this.post<ContactSubmissionResult>('/api/contact', data);
  }

  /**
   * Submit early-access / waitlist email capture
   */
  async submitWaitlist(data: WaitlistSubmission): Promise<ApiResponse<{ id: string }>> {
    if (!this.baseUrl) {
      return {
        success: true,
        data: {
          id: `sim_${Date.now()}`,
        },
        message: 'Successfully registered for early access!',
      };
    }

    return this.post<{ id: string }>('/api/waitlist', data);
  }

  /**
   * Register attendee for an event or masterclass
   */
  async registerEvent(data: EventRegistration): Promise<ApiResponse<{ registrationId: string }>> {
    if (!this.baseUrl) {
      return {
        success: true,
        data: {
          registrationId: `reg_${Date.now()}`,
        },
        message: 'Event registration confirmed!',
      };
    }

    return this.post<{ registrationId: string }>('/api/events/register', data);
  }

  private async post<T>(endpoint: string, body: unknown): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: this.defaultHeaders,
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Server error');
        return {
          success: false,
          error: errorText || `HTTP error ${response.status}`,
        };
      }

      const json = (await response.json()) as T;
      return {
        success: true,
        data: json,
      };
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      const message = err instanceof Error ? err.message : 'Unknown network error';
      return {
        success: false,
        error: message,
      };
    }
  }
}

/**
 * Singleton API client instance initialized with environment configuration
 */
export const apiClient = new AcademyApiClient();
