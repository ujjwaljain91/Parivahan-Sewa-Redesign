import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  elevation?: 'flat' | 'raised';
}

export const Card: React.FC<CardProps> = ({
  children,
  interactive = false,
  elevation = 'flat',
  className = '',
  ...props
}) => {
  const interactiveClass = interactive ? 'gov-card-interactive' : '';
  const elevationStyle = elevation === 'raised' ? { boxShadow: 'var(--shadow-raised)' } : {};

  return (
    <div
      className={`gov-card ${interactiveClass} ${className}`}
      style={elevationStyle}
      {...props}
    >
      {children}
    </div>
  );
};
