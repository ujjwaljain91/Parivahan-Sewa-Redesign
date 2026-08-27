import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ChallanViewer } from '../components/features/ChallanViewer';

export interface EChallanPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const EChallanPage: React.FC<EChallanPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';

  return (
    <div className="gov-container py-32" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'ई-चालान' : 'eChallan Search & Pay' }]}
        onNavigate={onNavigate}
      />

      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-32)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--color-semantic-warning-subtle)', padding: '8px 16px', borderRadius: 'var(--radius-full)', color: '#B45309', fontSize: '13px', fontWeight: 600, marginBottom: 'var(--space-12)' }}>
            <AlertTriangle size={16} />
            <span>{isHi ? 'राष्ट्रीय इलेक्ट्रॉनिक यातायात प्रवर्तन प्रणाली' : 'National Electronic Traffic Enforcement Gateway'}</span>
          </div>

          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'ई-चालान खोज एवं ऑनलाइन भुगतान' : 'eChallan Search & Instant Payment'}
          </h1>
          <p className="text-body" style={{ maxWidth: '680px', margin: '0 auto' }}>
            {isHi
              ? 'भारत भर में ट्रैफिक पुलिस और वर्चुअल कोर्ट के लंबित चालानों की जांच करें। मोटर वाहन अधिनियम के तहत उल्लंघन विवरण देखें, सुरक्षित रूप से जुर्माना भरें या आपत्ति दर्ज करें।'
              : 'Check pending traffic notices across Traffic Police and Virtual Courts in India. Review camera snapshots, statutory violations under the Motor Vehicles Act, pay fines securely, or raise a dispute.'}
          </p>
        </div>

        <ChallanViewer language={language} />
      </div>
    </div>
  );
};
