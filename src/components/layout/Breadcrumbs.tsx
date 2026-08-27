import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav
      aria-label="Breadcrumb navigation"
      style={{
        padding: 'var(--space-12) 0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '13px',
        color: 'var(--color-text-muted)',
        flexWrap: 'wrap'
      }}
    >
      <a
        href="#/"
        onClick={(e) => { e.preventDefault(); onNavigate('/'); }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          color: 'var(--color-brand-primary)',
          fontWeight: 500
        }}
      >
        <Home size={14} />
        <span>Home</span>
      </a>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight size={14} color="var(--color-text-muted)" />
            {isLast || !item.path ? (
              <span style={{ color: 'var(--color-text-secondary)', fontWeight: 600 }} aria-current="page">
                {item.label}
              </span>
            ) : (
              <a
                href={`#${item.path}`}
                onClick={(e) => { e.preventDefault(); onNavigate(item.path!); }}
                style={{ color: 'var(--color-brand-primary)', fontWeight: 500 }}
              >
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
