import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface GoogleIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: number | string;
  fill?: boolean | string;
  weight?: number;
  grade?: number;
  opticalSize?: number;
  color?: string;
  className?: string;
}

export const GoogleIcon: React.FC<GoogleIconProps> = ({
  name,
  size = 20,
  fill = false,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  color,
  className,
  style,
  ...props
}) => {
  const sizeValue = typeof size === 'number' ? `${size}px` : size;
  const isFilled = fill === true || fill === 'currentColor' || fill === '1' || fill === 'true';

  return (
    <span
      className={cn('material-symbols-outlined', className)}
      style={{
        fontSize: sizeValue,
        width: sizeValue,
        height: sizeValue,
        minWidth: sizeValue,
        minHeight: sizeValue,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        userSelect: 'none',
        lineHeight: 1,
        color: color,
        fontVariationSettings: `'FILL' ${isFilled ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      {name}
    </span>
  );
};
