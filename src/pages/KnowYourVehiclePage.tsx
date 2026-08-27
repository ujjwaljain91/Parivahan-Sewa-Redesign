import React from 'react';
import { Search, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { VehicleLookupCard } from '../components/features/VehicleLookupCard';

export interface KnowYourVehiclePageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const KnowYourVehiclePage: React.FC<KnowYourVehiclePageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';

  return (
    <div className="gov-container py-32" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'वाहन विवरण' : 'Know Your Vehicle' }]}
        onNavigate={onNavigate}
      />

      <div style={{ maxWidth: '880px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-32)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--color-brand-subtle)', padding: '8px 16px', borderRadius: 'var(--radius-full)', color: 'var(--color-brand-primary)', fontSize: '13px', fontWeight: 600, marginBottom: 'var(--space-12)' }}>
            <ShieldCheck size={16} color="var(--color-semantic-success)" />
            <span>{isHi ? 'राष्ट्रीय वाहन केंद्रीय रजिस्ट्री (VAHAN 4.0)' : 'National Vahan Central Registry'}</span>
          </div>

          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'अपने वाहन का विवरण जानें' : 'Know Your Vehicle Details'}
          </h1>
          <p className="text-body" style={{ maxWidth: '640px', margin: '0 auto' }}>
            {isHi
              ? 'किसी भी मोटर वाहन की वास्तविक पंजीकरण स्थिति, फिटनेस वैधता, बीमा पॉलिसी समाप्ति, प्रदूषण प्रमाण पत्र (PUCC) और वित्तपोषण विवरण जानने के लिए वाहन नंबर दर्ज करें।'
              : 'Enter any motor vehicle registration number to retrieve authentic registration status, fitness validity, insurance policy expiry, pollution compliance (PUCC), and financier hypothecation.'}
          </p>
        </div>

        <VehicleLookupCard language={language} onNavigate={onNavigate} />
      </div>
    </div>
  );
};
