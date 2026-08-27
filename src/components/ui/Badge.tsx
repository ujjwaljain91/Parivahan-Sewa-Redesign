import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'saffron';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  icon,
  className = '',
  ...props
}) => {
  return (
    <span className={`gov-badge gov-badge-${variant} ${className}`} {...props}>
      {icon && <span style={{ display: 'inline-flex', fontSize: '11px' }}>{icon}</span>}
      {children}
    </span>
  );
};
