import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  badge?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
  badge
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        marginBottom: 'var(--space-16)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg-surface)'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-16) var(--space-24)',
          backgroundColor: isOpen ? 'var(--color-brand-subtle)' : 'var(--color-bg-surface)',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'background-color var(--transition-fast)',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
          <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', lineHeight: 1.4 }}>
            {title}
          </span>
          {badge && (
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                backgroundColor: 'var(--color-bg-surface-secondary)',
                color: 'var(--color-text-secondary)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                whiteSpace: 'nowrap'
              }}
            >
              {badge}
            </span>
          )}
        </div>
        {isOpen ? <ChevronUp size={18} color="var(--color-brand-primary)" /> : <ChevronDown size={18} color="var(--color-text-muted)" />}
      </button>

      {isOpen && (
        <div style={{ padding: 'var(--space-24)', borderTop: '1px solid var(--color-border-light)', backgroundColor: 'var(--color-bg-surface)' }}>
          {children}
        </div>
      )}
    </div>
  );
};
