import React from 'react';
import {
  CreditCard, Car, Truck, ShieldCheck, CheckCircle2,
  FileText, Clock, Award, ArrowRight, Download, HelpCircle,
  AlertCircle, ExternalLink, Building, Sparkles, User, Info
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { masterOnlineServicesInventory, FeatureRegistryItem } from '../data/featureRegistry';
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

  // Check matching item in servicesData or featureRegistry
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];
  const registryItem: FeatureRegistryItem | undefined = masterOnlineServicesInventory.find(
    (item) => item.route === `/services/${slug}` || item.id.includes(slug)
  );

  const totalGovFee = service.fees?.reduce((sum, f) => sum + f.amount, 0) || 0;
  const isSystemLinked = registryItem?.status === 'system-linked';

  const handlePrimaryAction = () => {
    if (slug === 'echallan') {
      onNavigate('/echallan');
    } else if (slug === 'know-your-vehicle') {
      onNavigate('/know-your-vehicle');
    } else if (slug === 'vehicle-scrapping') {
      onNavigate('/vehicle-scrapping');
    } else if (isSystemLinked) {
      alert(`[Official Gateway Connection] You are being redirected to the official government system: ${registryItem?.underlyingSystem}.`);
    } else {
      onNavigate(`/apply/${service.slug}`);
    }
  };

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

      {/* System-Linked Advisory Banner if applicable */}
      {isSystemLinked && (
        <Alert
          variant="info"
          title={isHi ? 'आधिकारिक सरकारी प्रणाली संबद्ध सेवा' : 'Official Government System-Linked Service'}
        >
          {isHi
            ? `यह सेवा आधिकारिक केंद्रीय बैकएंड (${registryItem?.underlyingSystem}) से संबद्ध है। डिजिटल भारत सुरक्षा मानकों के अनुसार सुरक्षित सरकारी गेटवे पर अग्रेषित किया जाएगा।`
            : `This service operates directly through the official national backend (${registryItem?.underlyingSystem}). You will be connected to the dedicated government processing gateway.`}
        </Alert>
      )}

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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-12)', flexWrap: 'wrap' }}>
              <Badge variant="info">{isHi ? service.categoryLabelHi : service.categoryLabel}</Badge>
              {registryItem?.audience && (
                <Badge variant="neutral">
                  For: {registryItem.audience}
                </Badge>
              )}
              {service.onlineAvailable && (
                <Badge variant="success">
                  {isHi ? '100% संपर्क रहित / फेसलेस' : '100% Contactless / Faceless'}
                </Badge>
              )}
              {registryItem?.underlyingSystem && (
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                  Underlying System: <strong>{registryItem.underlyingSystem}</strong>
                </span>
              )}
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
              minWidth: '280px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              {isHi ? 'वैधानिक सरकारी शुल्क' : 'Statutory Government Fee'}
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-brand-primary)', margin: '4px 0' }}>
              {totalGovFee > 0 ? `₹${totalGovFee.toLocaleString('en-IN')}` : (isHi ? 'निःशुल्क / रियायती' : 'Free / Rule Exempt')}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-16)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
              <Clock size={13} />
              <span>
                {isHi
                  ? `अनुमानित समय: ${service.estimatedDays}`
                  : `Est: ${service.estimatedDays}`}
              </span>
            </div>

            <Button
              variant={isSystemLinked ? 'primary' : 'saffron'}
              fullWidth
              size="lg"
              onClick={handlePrimaryAction}
              icon={isSystemLinked ? <ExternalLink size={18} /> : <ArrowRight size={18} />}
              iconPosition="right"
            >
              {isSystemLinked
                ? (isHi ? 'सरकारी पोर्टल एक्सेस करें' : 'Access Official System')
                : (isHi ? 'आवेदन प्रारंभ करें' : 'Start Application')}
            </Button>

            {isSystemLinked && (
              <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <ShieldCheck size={12} color="var(--color-semantic-success)" />
                <span>Verified Government Gateway</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-32">
        {/* Left Column: Requirements & Steps (8 cols) */}
        <div style={{ gridColumn: 'span 8' }}>
          {/* Section 0: Who is this for? */}
          <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)', marginBottom: 'var(--space-24)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-12)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <User size={20} color="var(--color-brand-primary)" />
              <span>{isHi ? 'यह सेवा किसके लिए है?' : 'Who is this for?'}</span>
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              {isHi
                ? `यह सेवा ${registryItem?.audience || 'नागरिकों'} एवं परिवहन हितधारकों के लिए केंद्रीय मोटर वाहन नियमों (CMVR) के तहत अधिसूचित है।`
                : `Targeted at ${registryItem?.audience || 'Citizens'} and transport operators operating in compliance with Central Motor Vehicles Rules and MoRTH directives.`}
            </p>
          </div>

          {/* Section 1: Before you begin & Eligibility */}
          <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)', marginBottom: 'var(--space-24)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-16)' }}>
              {isHi ? 'शुरू करने से पहले (पात्रता शर्तें)' : 'What you will need — Eligibility & Prerequisites'}
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0 }}>
              {service.eligibility?.map((el, i) => (
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
              {isHi ? 'आवश्यक दस्तावेज' : 'Required Documents (Self-Attested)'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {service.documents?.map((doc, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    padding: 'var(--space-12) var(--space-16)',
                    backgroundColor: 'var(--color-bg-page)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-light)',
                    gap: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <FileText size={18} color="var(--color-brand-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)' }}>
                        {doc.name}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                        {doc.description}
                      </div>
                    </div>
                  </div>
                  <Badge variant={doc.mandatory ? 'error' : 'neutral'}>
                    {doc.mandatory ? (isHi ? 'अनिवार्य' : 'Mandatory') : (isHi ? 'वैकल्पिक' : 'Optional')}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: How it Works Step-by-Step */}
          <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-20)' }}>
              {isHi ? 'प्रक्रिया कैसे काम करती है (चरण-दर-चरण)' : 'How it works — Application Process'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {service.steps?.map((st) => (
                <div key={st.stepNumber} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-brand-primary)',
                      color: '#FFFFFF',
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
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                      {st.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '2px 0 0', lineHeight: 1.4 }}>
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Fee Structure, Related Services & Helpdesk (4 cols) */}
        <div style={{ gridColumn: 'span 4' }}>
          {/* Fee Schedule Card */}
          <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)', marginBottom: 'var(--space-24)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-16)' }}>
              {isHi ? 'वैधानिक शुल्क विवरण' : 'Statutory Fee Breakdown'}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: 'var(--space-16)' }}>
              {service.fees?.map((fee, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                  <span>{fee.label}</span>
                  <span style={{ fontWeight: 600, color: 'var(--color-brand-dark)' }}>
                    ₹{fee.amount.toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: 'var(--space-12)', borderTop: '2px dashed var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
                {isHi ? 'कुल देय राशि' : 'Total Amount Payable'}
              </span>
              <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-brand-primary)' }}>
                ₹{totalGovFee.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Related Services */}
          <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)', marginBottom: 'var(--space-24)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-12)' }}>
              {isHi ? 'संबंधित ऑनलाइन सेवाएं' : 'Related Online Services'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {masterOnlineServicesInventory
                .filter((s) => s.category === registryItem?.category && s.route !== `/services/${slug}`)
                .slice(0, 3)
                .map((related) => (
                  <button
                    key={related.id}
                    onClick={() => onNavigate(related.route)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      backgroundColor: 'var(--color-bg-page)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border-light)',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-dark)' }}>
                      {isHi ? related.nameHi : related.name}
                    </span>
                    <ArrowRight size={14} color="var(--color-brand-primary)" />
                  </button>
                ))}
            </div>
          </div>

          {/* Support Helpline Card */}
          <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-12)' }}>
              <HelpCircle size={24} color="var(--color-brand-primary)" />
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                {isHi ? 'नागरिक सहायता' : 'Need Assistance?'}
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi
                ? 'परिवहन सेवा हेल्पलाइन प्रातः 06:00 से रात्रि 10:00 तक उपलब्ध है।'
                : 'National Transport Portal Support Desk is available from 06:00 AM to 10:00 PM.'}
            </p>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-brand-primary)', marginBottom: '8px' }}>
              📞 1800-180-0124 (Toll-Free)
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              ✉️ helpdesk-vahan@gov.in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
