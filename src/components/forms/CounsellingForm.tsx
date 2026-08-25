'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { programmes } from '@/data/programmes';
import { submitCounsellingForm } from '@/services/counselling';
import type { CounsellingFormData } from '@/types/counselling';
import { Button } from '@/components/shared/Button';
import styles from './CounsellingForm.module.css';
import { cn } from '@/lib/utils/cn';

const initialFormData: CounsellingFormData = {
  fullName: '',
  mobileNumber: '',
  whatsappNumber: '',
  emailId: '',
  city: '',
  state: '',
  graduationStatus: '',
  degree: '',
  specialisation: '',
  collegeUniversity: '',
  yearOfStudyOrPassing: '',
  preferredProgramme: '',
  preferredLearningMode: '',
  consentForCommunication: true,
};

interface CounsellingFormProps {
  defaultProgrammeSlug?: string;
  className?: string;
}

export const CounsellingForm: React.FC<CounsellingFormProps> = ({
  defaultProgrammeSlug,
  className,
}) => {
  const defaultProg = defaultProgrammeSlug
    ? programmes.find((p) => p.slug === defaultProgrammeSlug)?.title || ''
    : '';

  const [formData, setFormData] = useState<CounsellingFormData>({
    ...initialFormData,
    preferredProgramme: defaultProg,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.mobileNumber.replace(/\s+/g, ''))) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp number is required';
    }

    if (!formData.emailId.trim()) {
      newErrors.emailId = 'Email ID is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId)) {
      newErrors.emailId = 'Enter a valid email address';
    }

    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.graduationStatus) {
      newErrors.graduationStatus = 'Select whether you are pursuing or have completed graduation';
    }
    if (!formData.degree.trim()) newErrors.degree = 'Degree is required (e.g. B.Tech, B.Sc, B.Pharm)';
    if (!formData.specialisation.trim()) newErrors.specialisation = 'Specialisation is required';
    if (!formData.collegeUniversity.trim()) newErrors.collegeUniversity = 'College/University name is required';
    if (!formData.yearOfStudyOrPassing.trim()) newErrors.yearOfStudyOrPassing = 'Year of study or passing is required';
    if (!formData.preferredProgramme) newErrors.preferredProgramme = 'Select a preferred programme';
    if (!formData.preferredLearningMode) newErrors.preferredLearningMode = 'Select preferred learning mode';
    if (!formData.consentForCommunication) {
      newErrors.consentForCommunication = 'Consent is required to receive counselling guidance';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

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
      const res = await submitCounsellingForm(formData);
      setSubmitResult(res);
      if (res.success) {
        setFormData(initialFormData);
      }
    } catch {
      setSubmitResult({
        success: false,
        message: 'A network error occurred. Please try submitting again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn(styles.formCard, className)}>
      <div className={styles.formHeader}>
        <span className="badge-pill badge-pill-accent">Free Academic Evaluation</span>
        <h3 className={styles.formTitle}>Book Free Career Counselling</h3>
        <p className={styles.formSubtitle}>
          YukthiMantra’s Academy programmes are designed for candidates pursuing or having completed graduation. Submit your details to verify eligibility and receive personalised programme recommendations.
        </p>
      </div>

      {submitResult && (
        <div
          className={cn(
            styles.alertBanner,
            submitResult.success ? styles.alertSuccess : styles.alertError
          )}
        >
          {submitResult.success ? (
            <CheckCircle2 size={24} className={styles.alertIcon} />
          ) : (
            <AlertCircle size={24} className={styles.alertIcon} />
          )}
          <p>{submitResult.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        {/* Section 1: Contact Information */}
        <div className={styles.fieldSection}>
          <h4 className={styles.sectionHeading}>1. Contact Information</h4>
          <div className={styles.grid2}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.label}>
                Full Name <span className={styles.req}>*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={cn(styles.input, errors.fullName && styles.inputError)}
              />
              {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="emailId" className={styles.label}>
                Email ID <span className={styles.req}>*</span>
              </label>
              <input
                id="emailId"
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                placeholder="name@example.com"
                className={cn(styles.input, errors.emailId && styles.inputError)}
              />
              {errors.emailId && <span className={styles.errorText}>{errors.emailId}</span>}
            </div>
          </div>

          <div className={styles.grid2}>
            <div className={styles.formGroup}>
              <label htmlFor="mobileNumber" className={styles.label}>
                Mobile Number <span className={styles.req}>*</span>
              </label>
              <input
                id="mobileNumber"
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={cn(styles.input, errors.mobileNumber && styles.inputError)}
              />
              {errors.mobileNumber && <span className={styles.errorText}>{errors.mobileNumber}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="whatsappNumber" className={styles.label}>
                WhatsApp Number <span className={styles.req}>*</span>
              </label>
              <input
                id="whatsappNumber"
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="WhatsApp contact number"
                className={cn(styles.input, errors.whatsappNumber && styles.inputError)}
              />
              {errors.whatsappNumber && <span className={styles.errorText}>{errors.whatsappNumber}</span>}
            </div>
          </div>

          <div className={styles.grid2}>
            <div className={styles.formGroup}>
              <label htmlFor="city" className={styles.label}>
                City <span className={styles.req}>*</span>
              </label>
              <input
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your city"
                className={cn(styles.input, errors.city && styles.inputError)}
              />
              {errors.city && <span className={styles.errorText}>{errors.city}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="state" className={styles.label}>
                State <span className={styles.req}>*</span>
              </label>
              <input
                id="state"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Your state"
                className={cn(styles.input, errors.state && styles.inputError)}
              />
              {errors.state && <span className={styles.errorText}>{errors.state}</span>}
            </div>
          </div>
        </div>

        {/* Section 2: Academic & Graduation Eligibility */}
        <div className={styles.fieldSection}>
          <h4 className={styles.sectionHeading}>2. Academic & Graduation Status</h4>
          
          <div className={styles.formGroup}>
            <label htmlFor="graduationStatus" className={styles.label}>
              Graduation Status <span className={styles.req}>*</span>
            </label>
            <select
              id="graduationStatus"
              name="graduationStatus"
              value={formData.graduationStatus}
              onChange={handleChange}
              className={cn(styles.select, errors.graduationStatus && styles.inputError)}
            >
              <option value="">-- Select Status --</option>
              <option value="pursuing">Currently Pursuing Graduation (Bachelor&apos;s Degree)</option>
              <option value="completed">Graduation Completed (Bachelor&apos;s Degree)</option>
            </select>
            {errors.graduationStatus && <span className={styles.errorText}>{errors.graduationStatus}</span>}
          </div>

          <div className={styles.grid2}>
            <div className={styles.formGroup}>
              <label htmlFor="degree" className={styles.label}>
                Degree <span className={styles.req}>*</span>
              </label>
              <input
                id="degree"
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="e.g. B.Tech, B.Sc, BCA, B.Pharm, B.Com"
                className={cn(styles.input, errors.degree && styles.inputError)}
              />
              {errors.degree && <span className={styles.errorText}>{errors.degree}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="specialisation" className={styles.label}>
                Specialisation / Branch <span className={styles.req}>*</span>
              </label>
              <input
                id="specialisation"
                type="text"
                name="specialisation"
                value={formData.specialisation}
                onChange={handleChange}
                placeholder="e.g. Computer Science, Biotechnology, Pharmacy"
                className={cn(styles.input, errors.specialisation && styles.inputError)}
              />
              {errors.specialisation && <span className={styles.errorText}>{errors.specialisation}</span>}
            </div>
          </div>

          <div className={styles.grid2}>
            <div className={styles.formGroup}>
              <label htmlFor="collegeUniversity" className={styles.label}>
                College / University <span className={styles.req}>*</span>
              </label>
              <input
                id="collegeUniversity"
                type="text"
                name="collegeUniversity"
                value={formData.collegeUniversity}
                onChange={handleChange}
                placeholder="College or University name"
                className={cn(styles.input, errors.collegeUniversity && styles.inputError)}
              />
              {errors.collegeUniversity && <span className={styles.errorText}>{errors.collegeUniversity}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="yearOfStudyOrPassing" className={styles.label}>
                Year of Study / Passing <span className={styles.req}>*</span>
              </label>
              <input
                id="yearOfStudyOrPassing"
                type="text"
                name="yearOfStudyOrPassing"
                value={formData.yearOfStudyOrPassing}
                onChange={handleChange}
                placeholder="e.g. 3rd Year / Passed 2024"
                className={cn(styles.input, errors.yearOfStudyOrPassing && styles.inputError)}
              />
              {errors.yearOfStudyOrPassing && <span className={styles.errorText}>{errors.yearOfStudyOrPassing}</span>}
            </div>
          </div>
        </div>

        {/* Section 3: Programme Preferences */}
        <div className={styles.fieldSection}>
          <h4 className={styles.sectionHeading}>3. Programme & Learning Mode Preference</h4>
          <div className={styles.grid2}>
            <div className={styles.formGroup}>
              <label htmlFor="preferredProgramme" className={styles.label}>
                Preferred Programme <span className={styles.req}>*</span>
              </label>
              <select
                id="preferredProgramme"
                name="preferredProgramme"
                value={formData.preferredProgramme}
                onChange={handleChange}
                className={cn(styles.select, errors.preferredProgramme && styles.inputError)}
              >
                <option value="">-- Select a Programme --</option>
                {programmes.map((prog) => (
                  <option key={prog.id} value={prog.title}>
                    {prog.title} ({prog.duration})
                  </option>
                ))}
              </select>
              {errors.preferredProgramme && <span className={styles.errorText}>{errors.preferredProgramme}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="preferredLearningMode" className={styles.label}>
                Preferred Learning Mode <span className={styles.req}>*</span>
              </label>
              <select
                id="preferredLearningMode"
                name="preferredLearningMode"
                value={formData.preferredLearningMode}
                onChange={handleChange}
                className={cn(styles.select, errors.preferredLearningMode && styles.inputError)}
              >
                <option value="">-- Select Mode --</option>
                <option value="online">Online Interactive</option>
                <option value="weekend">Weekend Batch</option>
                <option value="classroom">Classroom (Subject to city availability)</option>
              </select>
              {errors.preferredLearningMode && <span className={styles.errorText}>{errors.preferredLearningMode}</span>}
            </div>
          </div>
        </div>

        {/* Section 4: Consent */}
        <div className={styles.consentGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="consentForCommunication"
              checked={formData.consentForCommunication}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <span className={styles.checkboxText}>
              I confirm that I am currently pursuing graduation or have completed graduation, and I consent to receive career counselling calls, WhatsApp updates and batch details from YukthiMantra&apos;s Academy.
            </span>
          </label>
          {errors.consentForCommunication && (
            <span className={styles.errorText}>{errors.consentForCommunication}</span>
          )}
        </div>

        {/* Submit */}
        <div className={styles.submitWrapper}>
          <Button
            type="submit"
            variant="accent"
            size="lg"
            disabled={isSubmitting}
            fullWidth
            icon={isSubmitting ? <Loader2 className={styles.spinner} size={18} /> : <Send size={18} />}
          >
            {isSubmitting ? 'Submitting Evaluation...' : 'Submit for Free Counselling Assessment'}
          </Button>
          <p className={styles.securityNote}>
            🔒 Your information is confidential and used exclusively for academic counselling and eligibility assessment.
          </p>
        </div>
      </form>
    </div>
  );
};
