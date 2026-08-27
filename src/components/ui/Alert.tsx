import React from 'react';
import { Info, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  icon?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  title,
  icon,
  className = '',
  ...props
}) => {
  const getDefaultIcon = () => {
    switch (variant) {
      case 'success': return <CheckCircle2 size={20} color="var(--color-semantic-success)" />;
      case 'warning': return <AlertTriangle size={20} color="#B45309" />;
      case 'error': return <AlertCircle size={20} color="var(--color-semantic-error)" />;
      case 'info':
      default: return <Info size={20} color="var(--color-semantic-info)" />;
    }
  };

  return (
    <div className={`gov-alert gov-alert-${variant} ${className}`} role="alert" {...props}>
      <div className="gov-alert-icon">
        {icon || getDefaultIcon()}
      </div>
      <div className="gov-alert-content">
        {title && <div className="gov-alert-title">{title}</div>}
        <div className="text-body-sm">{children}</div>
      </div>
    </div>
  );
};
