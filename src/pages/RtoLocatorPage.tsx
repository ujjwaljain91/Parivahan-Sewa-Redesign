import React from 'react';
import { MapPin } from 'lucide-react';
import { Language } from '../types';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { RtoLocator } from '../components/features/RtoLocatorModal';

export interface RtoLocatorPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const RtoLocatorPage: React.FC<RtoLocatorPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';

  return (
    <div className="gov-container py-32" id="main-content">
      <Breadcrumbs
        items={[
          { label: isHi ? 'सूचना केंद्र' : 'Information', path: '/information' },
          { label: isHi ? 'आरटीओ निर्देशिका' : 'RTO Directory' }
        ]}
        onNavigate={onNavigate}
      />

      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-32)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--color-brand-subtle)', padding: '8px 16px', borderRadius: 'var(--radius-full)', color: 'var(--color-brand-primary)', fontSize: '13px', fontWeight: 600, marginBottom: 'var(--space-12)' }}>
            <MapPin size={16} />
            <span>{isHi ? 'राष्ट्रीय रजिस्टर निर्देशिका' : 'National Register Directory'}</span>
          </div>

          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'क्षेत्रीय परिवहन कार्यालय (RTO) खोजें' : 'Jurisdictional RTO Office Directory'}
          </h1>
          <p className="text-body" style={{ maxWidth: '640px', margin: '0 auto' }}>
            {isHi
              ? 'सभी 36 राज्यों और केंद्र शासित प्रदेशों में क्षेत्रीय परिवहन कार्यालयों के आधिकारिक संपर्क विवरण, पते, टेलीफोन हेल्पडेस्क और अधिकारी ईमेल खोजें।'
              : 'Find official contact details, addresses, telephone helpdesks, and officer email addresses for Regional Transport Offices across all 36 States and Union Territories.'}
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)' }}>
          <RtoLocator language={language} />
        </div>
      </div>
    </div>
  );
};
