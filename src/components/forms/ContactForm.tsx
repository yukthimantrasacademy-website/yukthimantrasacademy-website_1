'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from '@/components/icons/GoogleIcons';
import { submitContactForm } from '@/services/contact';
import type { ContactFormData } from '@/types/counselling';
import { Button } from '@/components/shared/Button';
import styles from './ContactForm.module.css';
import { cn } from '@/lib/utils/cn';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export const ContactForm: React.FC<{ className?: string }> = ({ className }) => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await submitContactForm(formData);
      setSubmitResult(res);
      if (res.success) {
        setFormData(initialFormData);
      }
    } catch {
      setSubmitResult({
        success: false,
        message: 'Unable to submit enquiry. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn(styles.formCard, className)}>
      <h3 className={styles.formTitle}>Send a Message</h3>
      <p className={styles.formSubtitle}>
        Have questions regarding batch schedules, eligibility criteria, or admission counselling? Write to us and our advisors will respond.
      </p>

      {submitResult && (
        <div
          className={cn(
            styles.alertBanner,
            submitResult.success ? styles.alertSuccess : styles.alertError
          )}
        >
          {submitResult.success ? (
            <CheckCircle2 size={20} className={styles.alertIcon} />
          ) : (
            <AlertCircle size={20} className={styles.alertIcon} />
          )}
          <p>{submitResult.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.grid2}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Your Name <span className={styles.req}>*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={cn(styles.input, errors.name && styles.inputError)}
            />
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address <span className={styles.req}>*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={cn(styles.input, errors.email && styles.inputError)}
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>
        </div>

        <div className={styles.grid2}>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Optional contact number"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>
              Subject <span className={styles.req}>*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={cn(styles.select, errors.subject && styles.inputError)}
            >
              <option value="">-- Select Subject --</option>
              <option value="Admission & Eligibility Enquiry">Admission & Eligibility Enquiry</option>
              <option value="Programme Syllabus & Details">Programme Syllabus & Details</option>
              <option value="Batch Schedule & Timings">Batch Schedule & Timings</option>
              <option value="Academic Counselling Request">Academic Counselling Request</option>
              <option value="Other">Other Query</option>
            </select>
            {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message <span className={styles.req}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="How can our academic team assist you?"
            className={cn(styles.textarea, errors.message && styles.inputError)}
          />
          {errors.message && <span className={styles.errorText}>{errors.message}</span>}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          fullWidth
          icon={isSubmitting ? <Loader2 className={styles.spinner} size={18} /> : <Send size={18} />}
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};
