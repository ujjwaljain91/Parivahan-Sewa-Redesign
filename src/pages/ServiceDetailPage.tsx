import React from 'react';
import {
  CreditCard, Car, Truck, ShieldCheck, CheckCircle2,
  FileText, Clock, Award, ArrowRight, Download, HelpCircle, AlertCircle
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { Language } from '../types';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Alert } from '../components/ui/Alert';
import { Card } from '../components/ui/Card';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  language: Language;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate, language }) => {
  const isHi = language === 'hi';
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];

  const totalGovFee = service.fees.reduce((sum, f) => sum + f.amount, 0);

  return (
    <div className="gov-container py-32" id="main-content">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: isHi ? 'सेवाएं' : 'Services', path: '/services' },
          { label: isHi ? service.categoryLabelHi : service.categoryLabel, path: '/services' },
          { label: isHi ? service.titleHi : service.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Main Service Header Strip */}
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ maxWidth: '750px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-12)' }}>
              <Badge variant="info">{isHi ? service.categoryLabelHi : service.categoryLabel}</Badge>
              {service.onlineAvailable && (
                <Badge variant="success">
                  {isHi ? '100% संपर्क रहित / फेसलेस' : '100% Contactless / Faceless'}
                </Badge>
              )}
              <Badge variant="neutral">
                {isHi ? 'केंद्रीय मोटर वाहन नियम' : 'Central Motor Vehicle Rules'}
              </Badge>
            </div>

            <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-12)', letterSpacing: '-0.02em' }}>
              {isHi ? service.titleHi : service.title}
            </h1>

            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              {isHi ? service.fullDescHi : service.fullDesc}
            </p>
          </div>

          {/* Action Box */}
          <div
            style={{
              backgroundColor: 'var(--color-brand-subtle)',
              border: '1px solid #B6D4FE',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-24)',
              minWidth: '260px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              {isHi ? 'वैधानिक सरकारी शुल्क' : 'Statutory Government Fee'}
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-brand-primary)', margin: '4px 0' }}>
              ₹{totalGovFee.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-16)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
              <Clock size={13} />
              <span>
                {isHi
                  ? `अनुमानित: ${service.estimatedDays.includes('Days') ? service.estimatedDays.replace('Days', 'दिन').replace('Day', 'दिन') : service.estimatedDays}`
                  : `Est: ${service.estimatedDays}`}
              </span>
            </div>

            <Button
              variant="saffron"
              fullWidth
              size="lg"
              onClick={() => onNavigate(`/apply/${service.slug}`)}
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              {isHi ? 'आवेदन प्रारंभ करें' : 'Start Application'}
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-32">
        {/* Left Column: Requirements & Steps (8 cols) */}
        <div style={{ gridColumn: 'span 8' }}>
          {/* Section 1: Before you begin & Eligibility */}
          <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)', marginBottom: 'var(--space-24)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-16)' }}>
              {isHi ? 'शुरू करने से पहले (पात्रता शर्तें)' : 'Before you begin — Eligibility'}
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0 }}>
              {service.eligibility.map((el, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                  <CheckCircle2 size={18} color="var(--color-semantic-success)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{el}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Required Documents */}
          <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)', marginBottom: 'var(--space-24)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-16)' }}>
              {isHi ? 'आवश्यक दस्तावेज सूची' : 'Required Documents Checklist'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {service.documents.map((doc, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 'var(--space-12) var(--space-16)',
                    backgroundColor: 'var(--color-bg-page)',
                    border: '1px solid var(--color-border-light)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <FileText size={20} color="var(--color-brand-primary)" />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)' }}>
                        {doc.name}
                        {doc.mandatory && <span style={{ color: 'var(--color-semantic-error)', marginLeft: '4px' }}>*</span>}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                        {doc.description}
                      </div>
                    </div>
                  </div>
                  <Badge variant={doc.mandatory ? 'warning' : 'neutral'}>
                    {isHi ? (doc.mandatory ? 'अनिवार्य' : 'वैकल्पिक') : (doc.mandatory ? 'Mandatory' : 'Optional')}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: How it Works (Step by Step Roadmap) */}
          <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-24)' }}>
              {isHi ? 'यह प्रक्रिया कैसे कार्य करती है' : 'How it works — Application Stages'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {service.steps.map((st) => (
                <div key={st.stepNumber} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-brand-subtle)',
                      border: '2px solid var(--color-brand-primary)',
                      color: 'var(--color-brand-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '14px',
                      flexShrink: 0
                    }}
                  >
                    {st.stepNumber}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-brand-dark)', margin: 0 }}>
                      {st.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '2px 0 0' }}>
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Fee Structure & Helpdesk (4 cols) */}
        <div style={{ gridColumn: 'span 4' }}>
          {/* Fee Schedule Card */}
          <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)', marginBottom: 'var(--space-24)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-16)' }}>
              {isHi ? 'वैधानिक शुल्क विवरण' : 'Statutory Fee Breakdown'}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: 'var(--space-16)' }}>
              {service.fees.map((fee, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                  <span>{fee.label}</span>
                  <span style={{ fontWeight: 600, color: 'var(--color-brand-dark)' }}>₹{fee.amount}</span>
                </div>
              ))}
              <div style={{ height: '1px', backgroundColor: 'var(--color-border-light)', margin: '4px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-primary)' }}>
                <span>{isHi ? 'कुल देय राशि' : 'Total Payable'}</span>
                <span>₹{totalGovFee}</span>
              </div>
            </div>

            <Button
              variant="primary"
              fullWidth
              onClick={() => onNavigate(`/apply/${service.slug}`)}
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              {isHi ? 'आवेदन प्रारंभ करें' : 'Start Application'}
            </Button>
          </div>

          {/* Helpdesk Callout */}
          <div style={{ backgroundColor: 'var(--color-bg-page)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'इस सेवा में सहायता चाहिए?' : 'Need Help with this Service?'}
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-12)' }}>
              {isHi ? 'हमारा आधिकारिक राष्ट्रीय सहायता केंद्र सोम–शनि सुबह 09:00 से शाम 06:00 तक उपलब्ध है।' : 'Our official National Helpdesk is available Mon–Sat 09:00 AM to 06:00 PM.'}
            </p>
            <div style={{ fontSize: '13px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
              {isHi ? 'टोल फ्री:' : 'Toll Free:'} 0120-2459169
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
              {isHi ? 'ईमेल:' : 'Email:'} helpdesk-sarathi@gov.in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
