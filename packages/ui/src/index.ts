/**
 * YukthiMantra Academy - Shared UI Components Contract
 * Scaffold for future shared components across applications
 */

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface BadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'info';
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
