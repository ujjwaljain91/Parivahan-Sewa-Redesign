import React from 'react';
import { Activity, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ApplicationTracker } from '../components/features/ApplicationTracker';

export interface TrackPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const TrackPage: React.FC<TrackPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';

  return (
    <div className="gov-container py-32" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'ट्रैक करें' : 'Track Application' }]}
        onNavigate={onNavigate}
      />

      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-32)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--color-brand-subtle)', padding: '8px 16px', borderRadius: 'var(--radius-full)', color: 'var(--color-brand-primary)', fontSize: '13px', fontWeight: 600, marginBottom: 'var(--space-12)' }}>
            <Activity size={16} />
            <span>{isHi ? 'राष्ट्रीय केंद्रीय ट्रैकिंग रिपॉजिटरी' : 'National Central Tracking Repository'}</span>
          </div>

          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'अपने आवेदन की वास्तविक स्थिति ट्रैक करें' : 'Track Application Status'}
          </h1>
          <p className="text-body" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {isHi
              ? 'लाइव बहु-चरणीय प्रसंस्करण रोडमैप, अधिकारी संवीक्षा स्थिति और स्पीड पोस्ट ट्रैकिंग विवरण देखने के लिए अपनी आवेदन संख्या दर्ज करें।'
              : 'Enter your Application Number and Date of Birth to view the live multi-stage processing roadmap, officer scrutiny status, and Speed Post tracking details.'}
          </p>
        </div>

        <ApplicationTracker initialAppNo="PARI-2026-123456" language={language} onNavigate={onNavigate} />
      </div>
    </div>
  );
};
