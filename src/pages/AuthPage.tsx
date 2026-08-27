import React, { useState } from 'react';
import {
  User, Briefcase, Shield, ArrowRight, HelpCircle, Lock,
  Smartphone, KeyRound, CheckCircle2, RefreshCw, AlertCircle,
  Building2, FileText, Check, ShieldCheck, ChevronRight
} from 'lucide-react';
import { UserRole, Language } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { Alert } from '../components/ui/Alert';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface AuthPageProps {
  onLogin: (role: UserRole) => void;
  onNavigate: (path: string) => void;
  language: Language;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onLogin, onNavigate, language }) => {
  const isHi = language === 'hi';

  // Help Modal State
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Active Auth Modal: null | 'citizen' | 'dealer' | 'staff'
  const [activeAuthModal, setActiveAuthModal] = useState<'citizen' | 'dealer' | 'staff' | null>(null);

  // ----------------------------------------------------
  // CITIZEN AUTH STATE
  // ----------------------------------------------------
  const [citizenMethod, setCitizenMethod] = useState<'aadhaar' | 'mobile' | 'digilocker'>('aadhaar');
  const [citizenStep, setCitizenStep] = useState<1 | 2 | 3>(1);
  const [aadhaarNumber, setAadhaarNumber] = useState('5489 1234 8941');
  const [mobileNumber, setMobileNumber] = useState('9876543210');
  const [citizenOtp, setCitizenOtp] = useState('894120');
  const [digilockerPin, setDigilockerPin] = useState('123456');
  const [citizenConsent, setCitizenConsent] = useState(true);
  const [citizenLoading, setCitizenLoading] = useState(false);

  // ----------------------------------------------------
  // BUSINESS / DEALER AUTH STATE
  // ----------------------------------------------------
  const [dealerStep, setDealerStep] = useState<1 | 2 | 3>(1);
  const [dealerCategory, setDealerCategory] = useState('Authorized Automobile Dealership');
  const [dealerOrgName, setDealerOrgName] = useState('Apex Automobiles Pvt. Ltd.');
  const [dealerTradeCert, setDealerTradeCert] = useState('DL-DLR-2024-88410');
  const [dealerSignatoryMobile, setDealerSignatoryMobile] = useState('9811223344');
  const [dealerOtp, setDealerOtp] = useState('440912');
  const [dealerLoading, setDealerLoading] = useState(false);

  // ----------------------------------------------------
  // GOVERNMENT / STAFF AUTH STATE
  // ----------------------------------------------------
  const [staffStep, setStaffStep] = useState<1 | 2 | 3>(1);
  const [staffDept, setStaffDept] = useState('Delhi Transport Department - DL-04 Janakpuri');
  const [staffRole, setStaffRole] = useState('Motor Licensing Officer (MLO)');
  const [staffGovId, setStaffGovId] = useState('GOV_MLO_DL04_891');
  const [staffPassword, setStaffPassword] = useState('••••••••••••');
  const [staffAuthMode, setStaffAuthMode] = useState<'pki' | 'otp'>('pki');
  const [staffDscPin, setStaffDscPin] = useState('908123');
  const [staffLoading, setStaffLoading] = useState(false);

  // Handlers for Citizen Auth
  const handleCitizenSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setCitizenLoading(true);
    setTimeout(() => {
      setCitizenLoading(false);
      setCitizenStep(2);
    }, 600);
  };

  const handleCitizenVerifyOtp = () => {
    setCitizenLoading(true);
    setTimeout(() => {
      setCitizenLoading(false);
      setCitizenStep(3);
      setTimeout(() => {
        setActiveAuthModal(null);
        setCitizenStep(1);
        onLogin('citizen');
        onNavigate('/my-parivahan');
      }, 1000);
    }, 600);
  };

  // Handlers for Dealer Auth
  const handleDealerSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setDealerLoading(true);
    setTimeout(() => {
      setDealerLoading(false);
      setDealerStep(2);
    }, 600);
  };

  const handleDealerVerifyOtp = () => {
    setDealerLoading(true);
    setTimeout(() => {
      setDealerLoading(false);
      setDealerStep(3);
      setTimeout(() => {
        setActiveAuthModal(null);
        setDealerStep(1);
        onLogin('dealer');
        onNavigate('/business');
      }, 1000);
    }, 600);
  };

  // Handlers for Staff Auth
  const handleStaffSubmitCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    setStaffLoading(true);
    setTimeout(() => {
      setStaffLoading(false);
      setStaffStep(2);
    }, 600);
  };

  const handleStaffVerifyPki = () => {
    setStaffLoading(true);
    setTimeout(() => {
      setStaffLoading(false);
      setStaffStep(3);
      setTimeout(() => {
        setActiveAuthModal(null);
        setStaffStep(1);
        onLogin('staff');
        onNavigate('/staff');
      }, 1000);
    }, 600);
  };

  return (
    <div className="gov-container py-48" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'साइन इन' : 'Sign In' }]}
        onNavigate={onNavigate}
      />

      <div style={{ maxWidth: '880px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-48)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--color-brand-subtle)', padding: '8px 16px', borderRadius: 'var(--radius-full)', color: 'var(--color-brand-primary)', fontSize: '13px', fontWeight: 600, marginBottom: 'var(--space-16)' }}>
            <Lock size={16} />
            <span>{isHi ? 'एकीकृत परिवहन प्रमाणीकरण गेटवे' : 'Unified Parivahan Authentication Gateway'}</span>
          </div>

          <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '12px' }}>
            {isHi ? 'परिवहन सेवा में साइन इन करें' : 'Sign in to Parivahan'}
          </h1>
          <p className="text-body" style={{ maxWidth: '560px', margin: '0 auto', lineHeight: 1.5 }}>
            {isHi
              ? 'नागरिक रिकॉर्ड, डीलर वर्कस्पेस या अधिकृत सरकारी सिस्टम तक पहुंचने के लिए अपने खाते का प्रकार चुनें।'
              : 'Choose your account type to access citizen records, dealer workspaces, or authorized government systems.'}
          </p>
        </div>

        {/* 3 Audience Cards Grid */}
        <div className="grid grid-cols-3 gap-24 mb-40">
          {/* Option 1: Citizen (My Parivahan) */}
          <Card
            style={{
              padding: 'var(--space-32) var(--space-24)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '2px solid var(--color-brand-primary)',
              boxShadow: 'var(--shadow-raised)',
              minHeight: '320px'
            }}
          >
            <div>
              <div className="gov-card-icon" style={{ backgroundColor: 'var(--color-brand-subtle)', color: 'var(--color-brand-primary)', marginBottom: 'var(--space-24)' }}>
                <User size={28} />
              </div>
              <Badge variant="info" style={{ marginBottom: '12px' }}>
                {isHi ? 'नागरिक सेवा' : 'Citizen Service'}
              </Badge>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '4px 0 8px' }}>
                {isHi ? 'नागरिक (मेरा परिवहन)' : 'Citizen (My Parivahan)'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {isHi
                  ? 'अपने व्यक्तिगत वाहनों, ड्राइविंग लाइसेंस, सक्रिय आवेदनों, लंबित चालानों और डिजीलॉकर दस्तावेजों तक पहुंचें।'
                  : 'Access your personal vehicles, driving licence, active applications, pending challans, and DigiLocker documents.'}
              </p>
            </div>

            <div style={{ marginTop: 'var(--space-24)' }}>
              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  setActiveAuthModal('citizen');
                  setCitizenStep(1);
                }}
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                {isHi ? 'नागरिक के रूप में लॉगिन करें' : 'Sign In as Citizen'}
              </Button>
            </div>
          </Card>

          {/* Option 2: Business / Dealer */}
          <Card
            style={{
              padding: 'var(--space-32) var(--space-24)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '320px'
            }}
          >
            <div>
              <div className="gov-card-icon" style={{ backgroundColor: 'var(--color-bg-surface-secondary)', color: 'var(--color-brand-dark)', marginBottom: 'var(--space-24)' }}>
                <Briefcase size={28} />
              </div>
              <Badge variant="neutral" style={{ marginBottom: '12px' }}>
                {isHi ? 'वाणिज्यिक / उद्योग' : 'Commercial / Industry'}
              </Badge>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '4px 0 8px' }}>
                {isHi ? 'व्यवसाय एवं डीलर' : 'Business & Dealer'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {isHi
                  ? 'व्यापार प्रमाण पत्र, डीलर पंजीकरण, होमोलोगेशन, वीएलटीडी/एसएलडी सेवाएं और आरवीएसएफ स्क्रैपिंग पोर्टल।'
                  : 'Access Trade Certificates, Dealer Registration, Homologation, VLTD/SLD Maker services, and RVSF Scrapping portals.'}
              </p>
            </div>

            <div style={{ marginTop: 'var(--space-24)' }}>
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  setActiveAuthModal('dealer');
                  setDealerStep(1);
                }}
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                {isHi ? 'व्यवसाय लॉगिन' : 'Business Sign In'}
              </Button>
            </div>
          </Card>

          {/* Option 3: Government / RTO Staff */}
          <Card
            style={{
              padding: 'var(--space-32) var(--space-24)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '320px'
            }}
          >
            <div>
              <div className="gov-card-icon" style={{ backgroundColor: 'var(--color-bg-surface-secondary)', color: 'var(--color-brand-dark)', marginBottom: 'var(--space-24)' }}>
                <Shield size={28} />
              </div>
              <Badge variant="saffron" style={{ marginBottom: '12px' }}>
                {isHi ? 'केवल अधिकृत कर्मचारी' : 'Authorized Staff Only'}
              </Badge>
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '4px 0 8px' }}>
                {isHi ? 'सरकारी / आरटीओ स्टाफ' : 'Government / RTO Staff'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {isHi
                  ? 'परिचालन प्रणालियों तक सुरक्षित अधिकृत पहुंच: वाहन 4.0, सारथी 4.0, वाहन बैकलॉग और राष्ट्रीय रजिस्टर एमआईएस।'
                  : 'Secure authorized access to operational systems: VAHAN 4.0, SARATHI 4.0, VAHAN Backlog, and National Register MIS.'}
              </p>
            </div>

            <div style={{ marginTop: 'var(--space-24)' }}>
              <Button
                variant="outline"
                fullWidth
                onClick={() => {
                  setActiveAuthModal('staff');
                  setStaffStep(1);
                }}
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                {isHi ? 'अधिकारी लॉगिन' : 'Staff PKI Access'}
              </Button>
            </div>
          </Card>
        </div>

        {/* "Not sure which option to choose?" Helper */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setShowHelpModal(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-brand-primary)',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            <HelpCircle size={16} />
            <span>{isHi ? 'निश्चित नहीं हैं कि कौन सा विकल्प चुनें? मार्गदर्शन के लिए यहां क्लिक करें' : 'Not sure which option to choose? Click here for guidance'}</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          MODAL 1: CITIZEN AUTHENTICATION MODAL (AADHAAR / MOBILE / DIGILOCKER)
          ========================================================================= */}
      <Modal
        isOpen={activeAuthModal === 'citizen'}
        onClose={() => setActiveAuthModal(null)}
        title={isHi ? 'नागरिक प्रमाणीकरण (मेरा परिवहन)' : 'Citizen Sign In (My Parivahan)'}
        subtitle={isHi ? 'आधार ई-केवाईसी या मोबाइल नंबर ओटीपी द्वारा सुरक्षित प्रमाणीकरण' : 'Secure authentication via Aadhaar e-KYC or Mobile OTP'}
        maxWidth="580px"
      >
        {/* Step 1: Input Credentials */}
        {citizenStep === 1 && (
          <form onSubmit={handleCitizenSendOtp}>
            {/* Method Tabs */}
            <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--color-border-light)', marginBottom: 'var(--space-20)' }}>
              <button
                type="button"
                onClick={() => setCitizenMethod('aadhaar')}
                style={{
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: citizenMethod === 'aadhaar' ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)',
                  borderBottom: citizenMethod === 'aadhaar' ? '2px solid var(--color-brand-primary)' : '2px solid transparent',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                {isHi ? 'आधार संख्या (UIDAI e-KYC)' : 'Aadhaar Number (e-KYC)'}
              </button>
              <button
                type="button"
                onClick={() => setCitizenMethod('mobile')}
                style={{
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: citizenMethod === 'mobile' ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)',
                  borderBottom: citizenMethod === 'mobile' ? '2px solid var(--color-brand-primary)' : '2px solid transparent',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                {isHi ? 'पंजीकृत मोबाइल नंबर' : 'Mobile Number OTP'}
              </button>
              <button
                type="button"
                onClick={() => setCitizenMethod('digilocker')}
                style={{
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: citizenMethod === 'digilocker' ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)',
                  borderBottom: citizenMethod === 'digilocker' ? '2px solid var(--color-brand-primary)' : '2px solid transparent',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                {isHi ? 'डिजीलॉकर साइन इन' : 'DigiLocker SSO'}
              </button>
            </div>

            {citizenMethod === 'aadhaar' && (
              <div className="gov-form-group">
                <label className="gov-label" htmlFor="citizen-aadhaar">
                  {isHi ? '12-अंकों की आधार संख्या' : '12-Digit Aadhaar Number'} <span className="gov-label-required">*</span>
                </label>
                <input
                  id="citizen-aadhaar"
                  type="text"
                  className="gov-input"
                  required
                  maxLength={14}
                  value={aadhaarNumber}
                  onChange={(e) => setAadhaarNumber(e.target.value)}
                  placeholder="XXXX XXXX 8941"
                  style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '1px' }}
                />
                <span className="gov-helper-text">
                  {isHi ? 'ओटीपी आपके आधार से जुड़े मोबाइल नंबर पर भेजा जाएगा।' : 'OTP will be sent to the mobile number registered with your Aadhaar.'}
                </span>
              </div>
            )}

            {citizenMethod === 'mobile' && (
              <div className="gov-form-group">
                <label className="gov-label" htmlFor="citizen-mobile">
                  {isHi ? '10-अंकों का मोबाइल नंबर' : '10-Digit Mobile Number'} <span className="gov-label-required">*</span>
                </label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ padding: '0 12px', height: '42px', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-bg-page)', border: '1px solid var(--color-border)', borderRight: 'none', borderRadius: 'var(--radius-md) 0 0 var(--radius-md)', fontSize: '14px', fontWeight: 600 }}>
                    +91
                  </span>
                  <input
                    id="citizen-mobile"
                    type="tel"
                    className="gov-input"
                    required
                    maxLength={10}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="9876543210"
                    style={{ borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}
                  />
                </div>
              </div>
            )}

            {citizenMethod === 'digilocker' && (
              <div style={{ marginBottom: 'var(--space-20)' }}>
                <div style={{ padding: 'var(--space-16)', backgroundColor: '#EBF4FF', borderRadius: 'var(--radius-md)', border: '1px solid #B6D4FE', marginBottom: 'var(--space-16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00487F', fontWeight: 700, fontSize: '15px' }}>
                    <ShieldCheck size={20} />
                    <span>{isHi ? 'आधिकारिक डिजीलॉकर सिंगल साइन-ऑन' : 'Official DigiLocker Single Sign-On'}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '6px 0 0', lineHeight: 1.4 }}>
                    {isHi ? 'अपने डिजीलॉकर खाते से सीधे जुड़ें और आरसी, डीएल और बीमा दस्तावेज सिंक करें।' : 'Directly connect your DigiLocker account to automatically sync RC, DL, and PUC certificates.'}
                  </p>
                </div>

                <div className="gov-form-group">
                  <label className="gov-label">{isHi ? 'डिजीलॉकर 6-अंकों का सुरक्षा पिन' : 'DigiLocker 6-Digit Security PIN'} <span className="gov-label-required">*</span></label>
                  <input
                    type="password"
                    className="gov-input"
                    required
                    maxLength={6}
                    value={digilockerPin}
                    onChange={(e) => setDigilockerPin(e.target.value)}
                    placeholder="••••••"
                    style={{ letterSpacing: '4px', fontSize: '18px' }}
                  />
                </div>
              </div>
            )}

            {/* Consent Checkbox */}
            <div style={{ marginBottom: 'var(--space-24)' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={citizenConsent}
                  onChange={(e) => setCitizenConsent(e.target.checked)}
                  required
                  style={{ accentColor: 'var(--color-brand-primary)', marginTop: '2px' }}
                />
                <span>
                  {isHi
                    ? 'मैं सड़क परिवहन एवं राजमार्ग मंत्रालय (MoRTH) को पहचान प्रमाणीकरण के लिए आधार/मोबाइल विवरण का उपयोग करने की सहमति देता/देती हूं।'
                    : 'I consent to MoRTH / NIC using my credentials to verify identity under the Digital Personal Data Protection Act 2023.'}
                </span>
              </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <Button variant="outline" type="button" onClick={() => setActiveAuthModal(null)}>
                {isHi ? 'रद्द करें' : 'Cancel'}
              </Button>
              <Button variant="primary" type="submit" loading={citizenLoading} icon={<ArrowRight size={16} />} iconPosition="right">
                {citizenMethod === 'digilocker' ? (isHi ? 'डिजीलॉकर से लॉगिन करें' : 'Authenticate DigiLocker') : (isHi ? 'ओटीपी प्राप्त करें' : 'Get OTP')}
              </Button>
            </div>
          </form>
        )}

        {/* Step 2: Enter OTP */}
        {citizenStep === 2 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-20)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-brand-subtle)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-12)' }}>
                <Smartphone size={24} />
              </div>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 4px' }}>
                {isHi ? 'ओटीपी सत्यापन कोड दर्ज करें' : 'Enter One Time Password (OTP)'}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0 }}>
                {isHi ? '6-अंकों का ओटीपी पंजीकृत मोबाइल +91-98*****109 पर भेजा गया है' : '6-digit OTP sent to registered mobile ending with +91-98*****109'}
              </p>
            </div>

            <div className="gov-form-group" style={{ textAlign: 'center', marginBottom: 'var(--space-20)' }}>
              <input
                type="text"
                className="gov-input"
                maxLength={6}
                value={citizenOtp}
                onChange={(e) => setCitizenOtp(e.target.value)}
                placeholder="894120"
                style={{ fontSize: '22px', fontWeight: 800, textAlign: 'center', letterSpacing: '8px', maxWidth: '240px', margin: '0 auto' }}
              />
              <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                {isHi ? 'ओटीपी प्राप्त नहीं हुआ?' : "Didn't receive OTP?"}{' '}
                <button type="button" style={{ color: 'var(--color-brand-primary)', fontWeight: 600, border: 'none', background: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                  {isHi ? 'पुनः भेजें (00:45)' : 'Resend (00:45)'}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <Button variant="ghost" type="button" onClick={() => setCitizenStep(1)}>
                {isHi ? 'पीछे' : 'Back'}
              </Button>
              <Button variant="primary" type="button" loading={citizenLoading} onClick={handleCitizenVerifyOtp} icon={<Check size={16} />}>
                {isHi ? 'सत्यापित करें एवं डैशबोर्ड खोलें' : 'Verify & Open My Parivahan'}
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Success Animation State */}
        {citizenStep === 3 && (
          <div style={{ textAlign: 'center', padding: 'var(--space-24) 0' }}>
            <CheckCircle2 size={56} color="var(--color-semantic-success)" style={{ margin: '0 auto var(--space-16)' }} />
            <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'प्रमाणीकरण सफल!' : 'Authentication Successful!'}
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
              {isHi ? 'स्वागत है, राजेश कुमार शर्मा। डैशबोर्ड लोड हो रहा है...' : 'Welcome back, RAJESH KUMAR SHARMA. Redirecting to workspace...'}
            </p>
          </div>
        )}
      </Modal>

      {/* =========================================================================
          MODAL 2: BUSINESS & DEALER AUTHENTICATION MODAL (TRADE CERT / 2FA)
          ========================================================================= */}
      <Modal
        isOpen={activeAuthModal === 'dealer'}
        onClose={() => setActiveAuthModal(null)}
        title={isHi ? 'व्यवसाय एवं डीलर लॉगिन' : 'Business & Dealer Gateway Sign In'}
        subtitle={isHi ? 'अधिकृत ऑटोमोबाइल डीलरशिप, विनिर्माता एवं स्क्रैपिंग संचालक' : 'Authorized automobile dealerships, OEMs, makers, and scrapping facilities'}
        maxWidth="600px"
      >
        {dealerStep === 1 && (
          <form onSubmit={handleDealerSendOtp}>
            <div className="gov-form-group">
              <label className="gov-label">
                {isHi ? 'व्यवसाय श्रेणी' : 'Business Entity Category'} <span className="gov-label-required">*</span>
              </label>
              <select
                className="gov-select"
                value={dealerCategory}
                onChange={(e) => setDealerCategory(e.target.value)}
              >
                <option value="Authorized Automobile Dealership">{isHi ? 'अधिकृत ऑटोमोबाइल डीलरशिप (व्यापार प्रमाण पत्र)' : 'Authorized Automobile Dealership (Trade Certificate)'}</option>
                <option value="Automobile Manufacturer / OEM">{isHi ? 'वाहन निर्माता / होमोलोगेशन (OEM)' : 'Automobile Manufacturer / Homologation (OEM)'}</option>
                <option value="VLTD & Speed Limiting Device Maker">{isHi ? 'वीएलटीडी एवं एसएलडी निर्माता / रेट्रोफिटर' : 'VLTD & Speed Limiting Device Maker / Retrofitter'}</option>
                <option value="Registered Vehicle Scrapping Facility (RVSF)">{isHi ? 'पंजीकृत वाहन स्क्रैपिंग सुविधा (RVSF संचालक)' : 'Registered Vehicle Scrapping Facility (RVSF Portal)'}</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-16 mb-16">
              <div className="gov-form-group" style={{ margin: 0 }}>
                <label className="gov-label">
                  {isHi ? 'डीलरशिप / संस्था का नाम' : 'Organization Name'} <span className="gov-label-required">*</span>
                </label>
                <input
                  type="text"
                  className="gov-input"
                  required
                  value={dealerOrgName}
                  onChange={(e) => setDealerOrgName(e.target.value)}
                />
              </div>

              <div className="gov-form-group" style={{ margin: 0 }}>
                <label className="gov-label">
                  {isHi ? 'ट्रेड सर्टिफिकेट / पोर्टल आईडी' : 'Trade Cert / Portal ID'} <span className="gov-label-required">*</span>
                </label>
                <input
                  type="text"
                  className="gov-input"
                  required
                  value={dealerTradeCert}
                  onChange={(e) => setDealerTradeCert(e.target.value)}
                  style={{ textTransform: 'uppercase', fontWeight: 600 }}
                />
              </div>
            </div>

            <div className="gov-form-group" style={{ marginBottom: 'var(--space-24)' }}>
              <label className="gov-label">
                {isHi ? 'अधिकृत प्रतिनिधि मोबाइल नंबर' : 'Authorized Signatory Mobile (2FA)'} <span className="gov-label-required">*</span>
              </label>
              <input
                type="tel"
                className="gov-input"
                required
                maxLength={10}
                value={dealerSignatoryMobile}
                onChange={(e) => setDealerSignatoryMobile(e.target.value)}
              />
              <span className="gov-helper-text">
                {isHi ? 'सुरक्षा सत्यापन कोड इस पंजीकृत कॉर्पोरेट मोबाइल पर भेजा जाएगा।' : 'Security 2FA token will be dispatched to this registered business mobile.'}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <Button variant="outline" type="button" onClick={() => setActiveAuthModal(null)}>
                {isHi ? 'रद्द करें' : 'Cancel'}
              </Button>
              <Button variant="primary" type="submit" loading={dealerLoading} icon={<ArrowRight size={16} />} iconPosition="right">
                {isHi ? '2FA कोड प्राप्त करें' : 'Send 2FA Security Code'}
              </Button>
            </div>
          </form>
        )}

        {dealerStep === 2 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-20)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-brand-subtle)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-12)' }}>
                <KeyRound size={24} />
              </div>
              <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 4px' }}>
                {isHi ? 'कॉर्पोरेट 2FA सुरक्षा कोड दर्ज करें' : 'Enter Business 2FA Security Token'}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0 }}>
                {isHi ? 'सुरक्षा कोड मोबाइल +91-98*****344 पर भेजा गया है' : 'Security token sent to +91-98*****344 (Apex Automobiles Pvt. Ltd.)'}
              </p>
            </div>

            <div className="gov-form-group" style={{ textAlign: 'center', marginBottom: 'var(--space-20)' }}>
              <input
                type="text"
                className="gov-input"
                maxLength={6}
                value={dealerOtp}
                onChange={(e) => setDealerOtp(e.target.value)}
                placeholder="440912"
                style={{ fontSize: '22px', fontWeight: 800, textAlign: 'center', letterSpacing: '8px', maxWidth: '240px', margin: '0 auto' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <Button variant="ghost" type="button" onClick={() => setDealerStep(1)}>
                {isHi ? 'पीछे' : 'Back'}
              </Button>
              <Button variant="primary" type="button" loading={dealerLoading} onClick={handleDealerVerifyOtp} icon={<Check size={16} />}>
                {isHi ? 'सत्यापित करें एवं पोर्टल खोलें' : 'Verify & Open Dealer Workspace'}
              </Button>
            </div>
          </div>
        )}

        {dealerStep === 3 && (
          <div style={{ textAlign: 'center', padding: 'var(--space-24) 0' }}>
            <CheckCircle2 size={56} color="var(--color-semantic-success)" style={{ margin: '0 auto var(--space-16)' }} />
            <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'डीलरशिप सफलतापूर्वक सत्यापित!' : 'Dealership Verified Successfully!'}
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
              {isHi ? 'व्यापार प्रमाणपत्र सक्रिय: Apex Automobiles। पोर्टल लोड हो रहा है...' : 'Trade Certificate DL-DLR-2024-88410 active. Loading portal...'}
            </p>
          </div>
        )}
      </Modal>

      {/* =========================================================================
          MODAL 3: GOVERNMENT / STAFF AUTHENTICATION MODAL (PKI DSC / MLO)
          ========================================================================= */}
      <Modal
        isOpen={activeAuthModal === 'staff'}
        onClose={() => setActiveAuthModal(null)}
        title={isHi ? 'विभागीय एवं आरटीओ स्टाफ प्रमाणीकरण' : 'Authorized Departmental & RTO Staff Sign In'}
        subtitle={isHi ? 'मोटर लाइसेंसिंग अधिकारी (MLO) एवं मोटर वाहन निरीक्षक (MVI)' : 'Motor Licensing Officers (MLO) and Motor Vehicle Inspectors (MVI)'}
        maxWidth="620px"
      >
        {staffStep === 1 && (
          <form onSubmit={handleStaffSubmitCredentials}>
            <Alert variant="warning" title={isHi ? 'प्रतिबंधित सरकारी परिचालन प्रणाली' : 'Restricted Government Operational Environment'}>
              {isHi
                ? 'यह लॉगिन केवल अधिकृत परिवहन अधिकारियों के लिए है। सभी गतिविधियां आईटी अधिनियम 2000 के तहत रिकॉर्ड की जाती हैं।'
                : 'Authorized transport officials only. Access is monitored and audited under the Information Technology Act 2000.'}
            </Alert>

            <div className="gov-form-group">
              <label className="gov-label">
                {isHi ? 'संबंधित परिवहन विभाग / आरटीओ जोन' : 'Jurisdictional Transport Authority / RTO'} <span className="gov-label-required">*</span>
              </label>
              <select
                className="gov-select"
                value={staffDept}
                onChange={(e) => setStaffDept(e.target.value)}
              >
                <option value="Delhi Transport Department - DL-04 Janakpuri">Delhi Transport Department — DL-04 (Janakpuri RTO Zone)</option>
                <option value="Maharashtra Motor Vehicles Dept - MH-01 Mumbai">Maharashtra Motor Vehicles Dept — MH-01 (Mumbai Central)</option>
                <option value="Karnataka Transport Dept - KA-01 Koramangala">Karnataka Transport Dept — KA-01 (Bengaluru Central)</option>
                <option value="Uttar Pradesh Transport Dept - UP-16 Noida">Uttar Pradesh Transport Dept — UP-16 (Gautam Buddha Nagar)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-16 mb-16">
              <div className="gov-form-group" style={{ margin: 0 }}>
                <label className="gov-label">
                  {isHi ? 'अधिकारी पदनाम' : 'Officer Role / Designation'} <span className="gov-label-required">*</span>
                </label>
                <select
                  className="gov-select"
                  value={staffRole}
                  onChange={(e) => setStaffRole(e.target.value)}
                >
                  <option value="Motor Licensing Officer (MLO)">Motor Licensing Officer (MLO)</option>
                  <option value="Motor Vehicle Inspector (MVI)">Motor Vehicle Inspector (MVI)</option>
                  <option value="State Transport Commissioner">State Transport Commissioner</option>
                  <option value="VAHAN Backlog Record Custodian">VAHAN Backlog Record Custodian</option>
                </select>
              </div>

              <div className="gov-form-group" style={{ margin: 0 }}>
                <label className="gov-label">
                  {isHi ? 'सरकारी स्टाफ यूजर आईडी' : 'Gov Staff User ID'} <span className="gov-label-required">*</span>
                </label>
                <input
                  type="text"
                  className="gov-input"
                  required
                  value={staffGovId}
                  onChange={(e) => setStaffGovId(e.target.value)}
                  style={{ textTransform: 'uppercase', fontWeight: 600 }}
                />
              </div>
            </div>

            <div className="gov-form-group" style={{ marginBottom: 'var(--space-24)' }}>
              <label className="gov-label">
                {isHi ? 'विभागीय पासवर्ड' : 'Departmental Password'} <span className="gov-label-required">*</span>
              </label>
              <input
                type="password"
                className="gov-input"
                required
                value={staffPassword}
                onChange={(e) => setStaffPassword(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <Button variant="outline" type="button" onClick={() => setActiveAuthModal(null)}>
                {isHi ? 'रद्द करें' : 'Cancel'}
              </Button>
              <Button variant="saffron" type="submit" loading={staffLoading} icon={<ShieldCheck size={16} />}>
                {isHi ? 'पीकेआई टोकन सत्यापित करें' : 'Proceed to PKI DSC Validation'}
              </Button>
            </div>
          </form>
        )}

        {staffStep === 2 && (
          <div>
            <div style={{ backgroundColor: 'var(--color-bg-page)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)', marginBottom: 'var(--space-20)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShieldCheck size={28} color="var(--color-semantic-success)" />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
                    {isHi ? 'हार्डवेयर डीएससी टोकन पहचाना गया: Class-3 ePass2003' : 'Hardware DSC Token Detected: Class-3 ePass2003 (NIC CA)'}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                    {isHi ? 'प्रमाणपत्र धारक: आर. के. शर्मा (MLO, DL-04 Janakpuri)' : 'Certificate Subject: R. K. Sharma (MLO, DL-04 Janakpuri) • Valid till Nov 2027'}
                  </div>
                </div>
              </div>
            </div>

            <div className="gov-form-group" style={{ textAlign: 'center', marginBottom: 'var(--space-24)' }}>
              <label className="gov-label" style={{ marginBottom: '8px' }}>
                {isHi ? 'डिजिटल हस्ताक्षर टोकन पिन दर्ज करें' : 'Enter 6-Digit DSC Token PIN'} <span className="gov-label-required">*</span>
              </label>
              <input
                type="password"
                className="gov-input"
                maxLength={6}
                value={staffDscPin}
                onChange={(e) => setStaffDscPin(e.target.value)}
                placeholder="••••••"
                style={{ fontSize: '22px', fontWeight: 800, textAlign: 'center', letterSpacing: '8px', maxWidth: '220px', margin: '0 auto' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <Button variant="ghost" type="button" onClick={() => setStaffStep(1)}>
                {isHi ? 'पीछे' : 'Back'}
              </Button>
              <Button variant="saffron" type="button" loading={staffLoading} onClick={handleStaffVerifyPki} icon={<Lock size={16} />}>
                {isHi ? 'अधिकारी सत्र प्रारंभ करें' : 'Authenticate & Sign In to VAHAN/SARATHI'}
              </Button>
            </div>
          </div>
        )}

        {staffStep === 3 && (
          <div style={{ textAlign: 'center', padding: 'var(--space-24) 0' }}>
            <CheckCircle2 size={56} color="var(--color-semantic-success)" style={{ margin: '0 auto var(--space-16)' }} />
            <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'अधिकारी सत्र प्रमाणित!' : 'Officer Session Authenticated!'}
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
              {isHi ? 'पीकेआई सत्र स्थापित। आरटीओ बैकएंड कंसोल लोड हो रहा है...' : 'PKI session established for MLO DL-04. Loading operational console...'}
            </p>
          </div>
        )}
      </Modal>

      {/* =========================================================================
          GUIDANCE MODAL
          ========================================================================= */}
      <Modal
        isOpen={showHelpModal}
        onClose={() => setShowHelpModal(false)}
        title={isHi ? 'प्रमाणीकरण खाता प्रकार मार्गदर्शन' : 'Authentication Account Types Guidance'}
        subtitle={isHi ? 'परिवहन उपयोगकर्ता भूमिकाओं के बीच अंतर को समझें' : 'Understanding the distinction between Parivahan user roles'}
        footer={
          <Button variant="primary" size="sm" onClick={() => setShowHelpModal(false)}>
            {isHi ? 'समझ गया' : 'Understood'}
          </Button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ padding: 'var(--space-16) var(--space-24)', backgroundColor: 'var(--color-bg-page)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-primary)', margin: '0 0 8px' }}>
              {isHi ? '1. नागरिक (मेरा परिवहन)' : '1. Citizen (My Parivahan)'}
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              {isHi
                ? 'वाहन मालिकों, चालकों और आवेदकों के लिए। व्यक्तिगत आरसी, डीएल, चालान प्रबंधित करने और आवेदनों को ट्रैक करने के लिए आधार या मोबाइल ओटीपी से लॉग इन करें।'
                : 'For vehicle owners, drivers, and applicants. Log in using your Aadhaar or Mobile Number with OTP to manage personal RC, DL, challans, and track in-flight requests.'}
            </p>
          </div>

          <div style={{ padding: 'var(--space-16) var(--space-24)', backgroundColor: 'var(--color-bg-page)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
              {isHi ? '2. व्यवसाय एवं डीलर' : '2. Business & Dealer'}
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              {isHi
                ? 'अधिकृत वाहन डीलरशिप, ऑटोमोबाइल निर्माताओं (OEMs), उपकरण परीक्षण एजेंसियों, सीएनजी रेट्रोफिटर और पंजीकृत स्क्रैपिंग सुविधाओं (RVSF) के लिए।'
                : 'For authorized vehicle dealerships, automobile manufacturers (OEMs), device testing agencies, CNG retrofitters, and registered vehicle scrapping facilities (RVSF).'}
            </p>
          </div>

          <div style={{ padding: 'var(--space-16) var(--space-24)', backgroundColor: 'var(--color-bg-page)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#B45309', margin: '0 0 8px' }}>
              {isHi ? '3. सरकारी / आरटीओ स्टाफ' : '3. Government / RTO Staff'}
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              {isHi
                ? 'वैध सरकारी क्रेडेंशियल और डिजिटल सिग्नेचर टोकन (DSC) रखने वाले अधिकृत मंत्रालय (MoRTH), राज्य परिवहन विभाग और आरटीओ कर्मचारियों तक सीमित।'
                : 'Restricted to authorized Ministry (MoRTH), State Transport Department, and RTO staff carrying valid government credentials and digital signature tokens (DSC).'}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};
