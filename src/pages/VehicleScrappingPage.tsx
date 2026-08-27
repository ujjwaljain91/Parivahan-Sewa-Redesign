import React, { useState } from 'react';
import { Trash2, Award, ShieldCheck, MapPin, CheckCircle2, DollarSign, ArrowRight, FileText, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ScrappingEstimator } from '../components/features/ScrappingEstimator';

export interface VehicleScrappingPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const VehicleScrappingPage: React.FC<VehicleScrappingPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';
  const [activeTab, setActiveTab] = useState<'calculator' | 'rvsf' | 'policy'>('calculator');

  const rvsfCenters = [
    { name: 'Maruti Suzuki Toyotsu India RVSF', city: 'Noida (Sector 80), Uttar Pradesh', code: 'UP-RVSF-001', capacity: '24,000 Vehicles/Year', phone: '1800-102-1800' },
    { name: 'Tata Motors Re.Wi.Re Facility', city: 'Jaipur, Rajasthan', code: 'RJ-RVSF-002', capacity: '15,000 Vehicles/Year', phone: '1800-209-7979' },
    { name: 'Mahindra CERO Scrapping Center', city: 'Greater Noida & Pune', code: 'MH-RVSF-003', capacity: '20,000 Vehicles/Year', phone: '1800-209-8080' },
    { name: 'Bharat Metal Recovery RVSF', city: 'Manesar, Haryana', code: 'HR-RVSF-004', capacity: '12,000 Vehicles/Year', phone: '0124-4902100' }
  ];

  return (
    <div className="gov-container py-32" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'वाहन स्क्रैपिंग' : 'Vehicle Scrapping Policy' }]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-32)',
          marginBottom: 'var(--space-32)',
          boxShadow: 'var(--shadow-raised)'
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-12)' }}>
            <Badge variant="success" icon={<Award size={13} />}>
              {isHi ? 'राष्ट्रीय वाहन फ्लीट आधुनिकीकरण कार्यक्रम (VVMP)' : 'National Voluntary Vehicle Fleet Modernization Program (VVMP)'}
            </Badge>
            <Badge variant="info">
              {isHi ? 'जमा प्रमाण पत्र (COD)' : 'Certificate of Deposit (COD)'}
            </Badge>
          </div>

          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-12)' }}>
            {isHi ? 'राष्ट्रीय वाहन स्क्रैपेज नीति एवं आरवीएसएफ पोर्टल' : 'National Vehicle Scrappage Policy & RVSF Portal'}
          </h1>

          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
            {isHi
              ? 'अपने 15+ वर्ष पुराने या अनफिट वाहन को अधिकृत पंजीकृत वाहन स्क्रैपिंग सुविधाओं (RVSF) में स्क्रैप करें। धातु का उचित बाजार मूल्य पाएं, जमा प्रमाण पत्र (COD) प्राप्त करें, और नए वाहन खरीद पर 25% तक रोड टैक्स छूट व पंजीकरण शुल्क माफी का लाभ उठाएं।'
              : 'Scrap your 15+ year old or unfit vehicle at authorized Registered Vehicle Scrapping Facilities (RVSF). Earn fair scrap metal market value, receive a Certificate of Deposit (COD), and unlock up to 25% road tax rebate and registration fee exemption on new vehicle purchase.'}
          </p>
        </div>
      </div>

      {/* 5-Step Journey Stepper Banner */}
      <div style={{ backgroundColor: 'var(--color-brand-subtle)', border: '1px solid #B6D4FE', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)', marginBottom: 'var(--space-32)' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-16)' }}>
          {isHi ? '5-चरणीय स्क्रैपिंग एवं लाभ प्रक्रिया' : 'The 5-Step Scrapping & Benefit Journey'}
        </h3>

        <div className="grid grid-cols-5 gap-12">
          <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-brand-primary)' }}>{isHi ? 'चरण 1' : 'STEP 1'}</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)', marginTop: '2px' }}>
              {isHi ? 'पात्रता जांचें' : 'Check Eligibility'}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
              {isHi ? 'आयु 15+ या फिटनेस अनुत्तीर्ण' : 'Age 15+ or failed fitness'}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-brand-primary)' }}>{isHi ? 'चरण 2' : 'STEP 2'}</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)', marginTop: '2px' }}>
              {isHi ? 'आरवीएसएफ खोजें' : 'Locate RVSF'}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
              {isHi ? 'अधिकृत केंद्र चुनें' : 'Select authorized center'}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-brand-primary)' }}>{isHi ? 'चरण 3' : 'STEP 3'}</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)', marginTop: '2px' }}>
              {isHi ? 'वाहन सुपुर्द करें' : 'Surrender Vehicle'}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
              {isHi ? 'रद्दीकरण हेतु आरसी जमा करें' : 'Surrender RC for deregistration'}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-brand-primary)' }}>{isHi ? 'चरण 4' : 'STEP 4'}</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)', marginTop: '2px' }}>
              {isHi ? 'स्क्रैप मूल्य पाएं' : 'Get Scrap Value'}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
              {isHi ? 'सीधे बैंक खाते में (4-6%)' : 'Direct Bank Transfer (4-6%)'}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-semantic-success)' }}>{isHi ? 'चरण 5' : 'STEP 5'}</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)', marginTop: '2px' }}>
              {isHi ? 'सीओडी प्राप्त करें' : 'Receive COD'}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
              {isHi ? '25% टैक्स छूट पाएं' : 'Redeem 25% tax discount'}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', borderBottom: '2px solid var(--color-border-light)', marginBottom: 'var(--space-24)' }}>
        <button
          onClick={() => setActiveTab('calculator')}
          style={{
            padding: '10px 18px',
            fontSize: '15px',
            fontWeight: 600,
            color: activeTab === 'calculator' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
            borderBottom: activeTab === 'calculator' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
            marginBottom: '-2px',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          {isHi ? 'वित्तीय बचत कैलकुलेटर' : 'Financial Savings Calculator'}
        </button>
        <button
          onClick={() => setActiveTab('rvsf')}
          style={{
            padding: '10px 18px',
            fontSize: '15px',
            fontWeight: 600,
            color: activeTab === 'rvsf' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
            borderBottom: activeTab === 'rvsf' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
            marginBottom: '-2px',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          {isHi ? `अधिकृत आरवीएसएफ निर्देशिका (${rvsfCenters.length})` : `Authorized RVSF Directory (${rvsfCenters.length})`}
        </button>
      </div>

      {/* Tab 1: Calculator */}
      {activeTab === 'calculator' && (
        <ScrappingEstimator language={language} onNavigate={onNavigate} />
      )}

      {/* Tab 2: RVSF Centers Directory */}
      {activeTab === 'rvsf' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {rvsfCenters.map((center) => (
            <div
              key={center.code}
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-24)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Badge variant="success">{isHi ? 'सरकारी प्रमाणित आरवीएसएफ' : 'Govt Certified RVSF'}</Badge>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{isHi ? 'कोड:' : 'Code:'} {center.code}</span>
                </div>

                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '6px', marginBottom: '2px' }}>
                  {center.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} color="var(--color-text-muted)" />
                  <span>{center.city} • {isHi ? 'क्षमता:' : 'Capacity:'} {center.capacity}</span>
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert(`Connecting with ${center.name} Helpdesk at ${center.phone}`)}
                >
                  {isHi ? 'केंद्र से संपर्क करें' : 'Contact Facility'}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onNavigate('/apply/vehicle-scrapping')}
                >
                  {isHi ? 'स्लॉट बुक करें' : 'Book Slot'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
