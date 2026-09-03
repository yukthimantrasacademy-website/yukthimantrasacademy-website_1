import React from 'react';

/**
 * YukthiMantra Academy - Shared UI Components
 */

// ==========================================
// Button
// ==========================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  style,
  ...props
}) => {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontWeight: 600,
    borderRadius: '9999px',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    border: 'none',
    opacity: props.disabled ? 0.6 : 1,
    ...style,
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: '8px 16px', fontSize: '13px', minHeight: '36px' },
    md: { padding: '12px 24px', fontSize: '15px', minHeight: '46px' },
    lg: { padding: '16px 32px', fontSize: '16px', minHeight: '54px' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: '#1676b0',
      color: '#ffffff',
      boxShadow: '0 4px 14px rgba(22, 118, 176, 0.3)',
    },
    secondary: {
      backgroundColor: '#0f172a',
      color: '#ffffff',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#1676b0',
      border: '1.5px solid #1676b0',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#101010',
    },
    accent: {
      backgroundColor: '#c0f050',
      color: '#101010',
      boxShadow: '0 4px 14px rgba(192, 240, 80, 0.35)',
    },
  };

  return (
    <button
      className={className}
      style={{ ...baseStyle, ...sizeStyles[size], ...variantStyles[variant] }}
      {...props}
    >
      {children}
    </button>
  );
};

// ==========================================
// Badge
// ==========================================

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  className = '',
  style,
  ...props
}) => {
  const badgeStyles: Record<string, React.CSSProperties> = {
    default: { backgroundColor: '#f1f5f9', color: '#475569' },
    accent: { backgroundColor: '#eefcce', color: '#3f6212' },
    success: { backgroundColor: '#dcfce7', color: '#15803d' },
    warning: { backgroundColor: '#fef3c7', color: '#b45309' },
    info: { backgroundColor: '#e0f2fe', color: '#0369a1' },
  };

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 10px',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        ...badgeStyles[variant],
        ...style,
      }}
      {...props}
    >
      {label}
    </span>
  );
};

// ==========================================
// Card
// ==========================================

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  elevated?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  elevated = false,
  className = '',
  style,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid rgba(16, 16, 16, 0.08)',
        padding: '24px',
        boxShadow: elevated
          ? '0 12px 32px rgba(16, 16, 16, 0.08)'
          : '0 2px 6px rgba(16, 16, 16, 0.04)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// ==========================================
// Modal
// ==========================================

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '16px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          maxWidth: '560px',
          width: '100%',
          padding: '32px',
          boxShadow: '0 24px 60px rgba(16, 16, 16, 0.2)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: '20px',
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              color: '#101010',
            }}
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#5c6670',
            }}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

// ==========================================
// Accordion
// ==========================================

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenId }) => {
  const [openId, setOpenId] = React.useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            style={{
              border: '1px solid rgba(16, 16, 16, 0.08)',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
            }}
          >
            <button
              onClick={() => toggle(item.id)}
              style={{
                width: '100%',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '16px',
                fontWeight: 600,
                color: '#101010',
              }}
            >
              <span>{item.title}</span>
              <span
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                  fontSize: '18px',
                }}
              >
                ▼
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  padding: '0 20px 16px 20px',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#5c6670',
                }}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
