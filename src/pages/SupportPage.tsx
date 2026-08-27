import React, { useState } from 'react';
import { HelpCircle, Phone, Mail, MessageSquare, AlertCircle, CheckCircle2, User, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface SupportPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  return (
    <div className="gov-container py-48" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'सहायता एवं संपर्क' : 'Help & Support Hub' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div style={{ marginBottom: 'var(--space-40)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
          {isHi ? 'परिवहन सहायता एवं शिकायत निवारण केंद्र' : 'Parivahan Support & Grievance Redressal'}
        </h1>
        <p className="text-body" style={{ maxWidth: '750px', lineHeight: 1.5 }}>
          {isHi
            ? 'आधिकारिक नागरिक सहायता चैनल, राष्ट्रीय टोल-फ्री हेल्पलाइन, वाहन एवं सारथी हेतु तकनीकी सहायता और वेब सूचना प्रबंधक संपर्क।'
            : 'Official citizen support channels, national toll-free helplines, technical support for VAHAN & SARATHI, and dedicated Web Information Manager contacts.'}
        </p>
      </div>

      {/* 3 Contact Channel Cards */}
      <div className="grid grid-cols-3 gap-24 mb-40">
        <Card style={{ padding: 'var(--space-24) var(--space-24)', backgroundColor: 'var(--color-bg-surface)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          <div className="gov-card-icon" style={{ marginBottom: 'var(--space-8)' }}>
            <Phone size={24} />
          </div>
          <Badge variant="info">{isHi ? 'टोल फ्री हेल्पलाइन' : 'Toll Free Helpline'}</Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '4px 0 0' }}>
            {isHi ? 'राष्ट्रीय नागरिक हेल्पलाइन' : 'National Citizen Helpline'}
          </h3>
          <p style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-brand-primary)', margin: '4px 0' }}>
            0120-2459169
          </p>
          <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>
            {isHi
              ? 'कार्य समय: सोम से शनि सुबह 06:00 से रात 10:00 बजे (राष्ट्रीय अवकाशों को छोड़कर)'
              : 'Operational Mon to Sat: 06:00 AM – 10:00 PM IST (Except National Holidays)'}
          </p>
        </Card>

        <Card style={{ padding: 'var(--space-24) var(--space-24)', backgroundColor: 'var(--color-bg-surface)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          <div className="gov-card-icon" style={{ marginBottom: 'var(--space-8)' }}>
            <Mail size={24} />
          </div>
          <Badge variant="success">{isHi ? 'ईमेल सहायता' : 'Email Support'}</Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '4px 0 0' }}>
            {isHi ? 'ईमेल हेल्पडेस्क' : 'Email Helpdesk'}
          </h3>
          <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px', lineHeight: 1.6 }}>
            <div>{isHi ? 'लाइसेंस सहायता:' : 'Licence Help:'} <strong>helpdesk-sarathi@gov.in</strong></div>
            <div>{isHi ? 'वाहन सहायता:' : 'Vehicle Help:'} <strong>helpdesk-vahan@gov.in</strong></div>
          </div>
        </Card>

        <Card style={{ padding: 'var(--space-24) var(--space-24)', backgroundColor: 'var(--color-bg-surface)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          <div className="gov-card-icon" style={{ marginBottom: 'var(--space-8)' }}>
            <ShieldCheck size={24} />
          </div>
          <Badge variant="neutral">{isHi ? 'वैधानिक' : 'Statutory'}</Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '4px 0 0' }}>
            {isHi ? 'वेब सूचना प्रबंधक' : 'Web Information Manager'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '4px 0 0', lineHeight: 1.5 }}>
            {isHi
              ? 'उप निदेशक (आईटी), सड़क परिवहन एवं राजमार्ग मंत्रालय, परिवहन भवन, 1 संसद मार्ग, नई दिल्ली - 110001।'
              : 'Deputy Director (IT), Ministry of Road Transport & Highways, Transport Bhawan, 1 Parliament Street, New Delhi - 110001.'}
          </p>
        </Card>
      </div>

      {/* Citizen Feedback Form */}
      <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-32)', maxWidth: '820px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
          {isHi ? 'सुझाव / शिकायत दर्ज करें' : 'Raise a Concern / Citizen Feedback'}
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)', lineHeight: 1.5 }}>
          {isHi
            ? 'क्या आपके पास कोई सुझाव है या ऑनलाइन परिवहन सेवा में कोई समस्या आ रही है? अपनी प्रतिक्रिया सीधे केंद्रीय गुणवत्ता टीम को भेजें।'
            : 'Have a suggestion or facing an issue with an online transport service? Submit your feedback directly to the central quality team.'}
        </p>

        {feedbackSubmitted ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-32) 0' }}>
            <CheckCircle2 size={52} color="var(--color-semantic-success)" style={{ margin: '0 auto var(--space-16)' }} />
            <h4 style={{ color: 'var(--color-brand-dark)', fontSize: '18px', marginBottom: '8px' }}>
              {isHi ? 'आपकी प्रतिक्रिया के लिए धन्यवाद' : 'Thank you for your feedback'}
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
              {isHi
                ? `टिकट संदर्भ: FDB-2026-${Math.floor(10000 + Math.random() * 90000)}। हमारी टीम आपकी टिप्पणी की समीक्षा करेगी।`
                : `Ticket Reference: FDB-2026-${Math.floor(10000 + Math.random() * 90000)}. Our team will review your remarks.`}
            </p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setFeedbackSubmitted(true); }}>
            <div className="grid grid-cols-2 gap-24 mb-24">
              <div className="gov-form-group" style={{ margin: 0 }}>
                <label className="gov-label">{isHi ? 'आपका पूरा नाम' : 'Your Full Name'} <span className="gov-label-required">*</span></label>
                <input type="text" className="gov-input" required placeholder={isHi ? 'पूरा नाम दर्ज करें' : 'Enter full name'} defaultValue="Rajesh Kumar Sharma" />
              </div>
              <div className="gov-form-group" style={{ margin: 0 }}>
                <label className="gov-label">{isHi ? 'मोबाइल नंबर' : 'Mobile Number'} <span className="gov-label-required">*</span></label>
                <input type="tel" className="gov-input" required placeholder={isHi ? '10 अंकों का मोबाइल नंबर' : '10-digit mobile'} defaultValue="9876543210" />
              </div>
            </div>

            <div className="gov-form-group">
              <label className="gov-label">{isHi ? 'सेवा श्रेणी' : 'Service Category'} <span className="gov-label-required">*</span></label>
              <select className="gov-select">
                <option>{isHi ? 'ड्राइविंग लाइसेंस सेवाएं' : 'Driving Licence Services'}</option>
                <option>{isHi ? 'वाहन पंजीकरण एवं स्वामित्व हस्तांतरण' : 'Vehicle Registration & Transfer'}</option>
                <option>{isHi ? 'ई-चालान एवं भुगतान' : 'eChallan & Payments'}</option>
                <option>{isHi ? 'वाहन स्क्रैपिंग नीति' : 'Vehicle Scrapping Policy'}</option>
                <option>{isHi ? 'पोर्टल उपयोगिता एवं पहुंच' : 'Portal Usability & Accessibility'}</option>
              </select>
            </div>

            <div className="gov-form-group" style={{ marginBottom: 'var(--space-24)' }}>
              <label className="gov-label">{isHi ? 'संदेश / विवरण' : 'Message / Details'} <span className="gov-label-required">*</span></label>
              <textarea className="gov-textarea" rows={4} required placeholder={isHi ? 'अपनी समस्या या सुझाव का विस्तार से विवरण दें...' : 'Describe your concern or feedback...'} />
            </div>

            <Button variant="primary" type="submit">
              {isHi ? 'प्रतिक्रिया जमा करें' : 'Submit Feedback'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
