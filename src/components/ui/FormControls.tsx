import React from 'react';
import { AlertCircle } from 'lucide-react';

interface BaseInputProps {
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  id?: string;
}

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>, BaseInputProps {
  icon?: React.ReactNode;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  required = false,
  helperText,
  error,
  id,
  className = '',
  icon,
  ...props
}) => {
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="gov-form-group">
      {label && (
        <label htmlFor={inputId} className="gov-label">
          {label}
          {required && <span className="gov-label-required" aria-hidden="true">*</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && (
          <span style={{ position: 'absolute', left: '12px', color: 'var(--color-text-muted)', display: 'flex' }}>
            {icon}
          </span>
        )}
        <input
          id={inputId}
          className={`gov-input ${error ? 'gov-input-error' : ''} ${className}`}
          style={icon ? { paddingLeft: '40px' } : {}}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined}
          {...props}
        />
      </div>
      {error && (
        <div id={`${inputId}-error`} className="gov-error-text" role="alert">
          <AlertCircle size={14} />
          <span>{error}</span>
        </div>
      )}
      {!error && helperText && (
        <div id={`${inputId}-help`} className="gov-helper-text">
          {helperText}
        </div>
      )}
    </div>
  );
};

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, BaseInputProps {
  options?: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  required = false,
  helperText,
  error,
  id,
  options,
  children,
  className = '',
  ...props
}) => {
  const selectId = id || (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="gov-form-group">
      {label && (
        <label htmlFor={selectId} className="gov-label">
          {label}
          {required && <span className="gov-label-required" aria-hidden="true">*</span>}
        </label>
      )}
      <select
        id={selectId}
        className={`gov-select ${error ? 'gov-input-error' : ''} ${className}`}
        aria-required={required}
        aria-invalid={!!error}
        {...props}
      >
        {options
          ? options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))
          : children}
      </select>
      {error && (
        <div className="gov-error-text" role="alert">
          <AlertCircle size={14} />
          <span>{error}</span>
        </div>
      )}
      {!error && helperText && <div className="gov-helper-text">{helperText}</div>}
    </div>
  );
};

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, error, id, className = '', ...props }) => {
  const checkId = id || `check-${Math.random().toString(36).substring(2, 7)}`;

  return (
    <div className="gov-form-group" style={{ marginBottom: 'var(--space-12)' }}>
      <label
        htmlFor={checkId}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 'var(--space-8)',
          cursor: 'pointer',
          fontSize: '14px',
          color: 'var(--color-text-secondary)'
        }}
      >
        <input
          type="checkbox"
          id={checkId}
          style={{ width: '18px', height: '18px', marginTop: '2px', accentColor: 'var(--color-brand-primary)' }}
          {...props}
        />
        <span>{label}</span>
      </label>
      {error && (
        <div className="gov-error-text" style={{ paddingLeft: '26px' }}>
          <AlertCircle size={14} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
