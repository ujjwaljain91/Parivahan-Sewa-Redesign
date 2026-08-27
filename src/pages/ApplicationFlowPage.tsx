import React, { useState, useEffect } from 'react';
import {
  CheckCircle2, ArrowRight, ArrowLeft, Download, ShieldCheck,
  CreditCard, FileText, UploadCloud, User, AlertCircle, RefreshCw,
  Eye, Calendar, Clock, MapPin, Building, Sparkles, Check, Car,
  Truck, AlertTriangle, Zap, Printer, Lock, ChevronRight, HelpCircle
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { masterOnlineServicesInventory, FeatureRegistryItem } from '../data/featureRegistry';
import { statesAndRtos } from '../data/rtoData';
import { Language, ServiceItem } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Alert } from '../components/ui/Alert';
import { Stepper } from '../components/ui/Stepper';
import { FileUpload } from '../components/ui/FileUpload';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface ApplicationFlowPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  language: Language;
}

export const ApplicationFlowPage: React.FC<ApplicationFlowPageProps> = ({ slug, onNavigate, language }) => {
  const isHi = language === 'hi';

  const service: ServiceItem = servicesData.find((s) => s.slug === slug) || {
    id: `custom-${slug}`,
    category: 'other',
    categoryLabel: 'Citizen Services',
    categoryLabelHi: 'नागरिक सेवाएं',
    title: slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    titleHi: 'परिवहन ऑनलाइन सेवा',
    slug,
    shortDesc: 'Official online transport service application workflow.',
    shortDescHi: 'आधिकारिक ऑनलाइन परिवहन सेवा आवेदन प्रक्रिया।',
    fullDesc: 'Faceless and contactless electronic processing under Central Motor Vehicle Rules.',
    fullDescHi: 'केंद्रीय मोटर वाहन नियमों के तहत संपर्क रहित डिजिटल सेवा।',
    eligibility: ['Registered citizen / vehicle owner meeting CMVR statutory requirements'],
    documents: [
      { name: 'Identity Proof', description: 'Aadhaar / Passport / Voter ID', mandatory: true },
      { name: 'Vehicle / Licence Document', description: 'Current valid document', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Identity Verification', description: 'Aadhaar e-KYC' },
      { stepNumber: 2, title: 'Application Details', description: 'Fill form' },
      { stepNumber: 3, title: 'Document Upload', description: 'Upload scans' },
      { stepNumber: 4, title: 'Fee Payment', description: 'Pay statutory fees' }
    ],
    fees: [{ label: 'Statutory Processing Fee', amount: 350 }],
    estimatedDays: '3–7 Working Days',
    tags: [slug],
    onlineAvailable: true,
    iconName: 'CreditCard'
  };

  const registryItem: FeatureRegistryItem | undefined = masterOnlineServicesInventory.find(
    (item) => item.route === `/services/${slug}` || item.id.includes(slug)
  );

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Common State
  const [stateCode, setStateCode] = useState('DL');
  const [rtoCode, setRtoCode] = useState('DL-01');
  const [dob, setDob] = useState('1988-05-15');
  const [mobileNo, setMobileNo] = useState('9876544109');
  const [otpValue, setOtpValue] = useState('894120');
  const [otpSent, setOtpSent] = useState(true);
  const [paymentGateway, setPaymentGateway] = useState<'BHARATKOSH' | 'SBI_EPAY' | 'UPI'>('BHARATKOSH');
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  // Service Specific Form States
  // 1. DL Renewal Specifics
  const [dlNo, setDlNo] = useState('DL-0420180045612');
  const [renewClasses, setRenewClasses] = useState<string[]>(['MCWG', 'LMV']);
  const [changeAddress, setChangeAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({ line1: 'Flat 402, Tagore Garden', city: 'New Delhi', pincode: '110027' });
  const [medicalDeclared, setMedicalDeclared] = useState(true);
  const [organDonor, setOrganDonor] = useState(true);

  // 2. Learner's Licence (LL) Specifics
  const [fatherName, setFatherName] = useState('Shri Ramesh Kumar Sharma');
  const [educationQual, setEducationQual] = useState('10+2 / Higher Secondary');
  const [bloodGroup, setBloodGroup] = useState('B+');
  const [identMark, setIdentMark] = useState('Mole on right side of neck');
  const [llClasses, setLlClasses] = useState<string[]>(['LMV', 'MCWG']);
  const [testMode, setTestMode] = useState<'ONLINE_HOME' | 'RTO_TRACK'>('ONLINE_HOME');
  const [guardianConsent, setGuardianConsent] = useState(true);

  // 3. Permanent DL Specifics
  const [llNo, setLlNo] = useState('LL-DL01-2026-004521');
  const [testSlotDate, setTestSlotDate] = useState('2026-09-05');
  const [testSlotTime, setTestSlotTime] = useState('09:30 AM - 11:30 AM (14 Slots Available)');
  const [testVehicleClass, setTestVehicleClass] = useState('LMV (Car / Light Motor Vehicle)');
  const [adtcCertified, setAdtcCertified] = useState(true);

  // 4. Duplicate DL Specifics
  const [duplicateReason, setDuplicateReason] = useState('Lost / Stolen');
  const [policeNcrNo, setPoliceNcrNo] = useState('NCR/2026/DEL/78219');
  const [lossDate, setLossDate] = useState('2026-08-10');
  const [lossLocation, setLossLocation] = useState('Near Rajiv Chowk Metro, New Delhi');

  // 5. International Driving Permit (IDP) Specifics
  const [passportNo, setPassportNo] = useState('Z4819204');
  const [destCountry, setDestCountry] = useState('United States of America (USA)');
  const [visaType, setVisaType] = useState('Tourist / B1/B2');
  const [departureDate, setDepartureDate] = useState('2026-10-15');

  // 6. Transfer of Vehicle Ownership Specifics
  const [regNo, setRegNo] = useState('DL 01 AB 1234');
  const [chassisNo, setChassisNo] = useState('MA3E1234567');
  const [transferType, setTransferType] = useState('Normal Sale / Transfer');
  const [buyerName, setBuyerName] = useState('Vikramaditya Verma');
  const [buyerFather, setBuyerFather] = useState('Shri S. P. Verma');
  const [buyerAadhaar, setBuyerAadhaar] = useState('5481-9204-1189');
  const [buyerMobile, setBuyerMobile] = useState('9811223344');
  const [buyerAddress, setBuyerAddress] = useState('House No. 12, Sector 15, Rohini, New Delhi - 110085');
  const [salePrice, setSalePrice] = useState('4,50,000');
  const [saleDate, setSaleDate] = useState('2026-08-20');
  const [odometerKm, setOdometerKm] = useState('38,450');

  // 7. RC Renewal 15+ Years Specifics
  const [greenTaxPaid, setGreenTaxPaid] = useState(true);
  const [inspectionDate, setInspectionDate] = useState('2026-09-08');
  const [inspectionSlot, setInspectionSlot] = useState('10:00 AM - 12:00 PM');

  // 8. No Objection Certificate (NOC) Specifics
  const [destState, setDestState] = useState('MH');
  const [destRto, setDestRto] = useState('MH-02 Mumbai West (Andheri)');
  const [nocReason, setNocReason] = useState('Permanent Residence Relocation');

  // 9. All India Tourist Permit (AITP) Specifics
  const [touristClass, setTouristClass] = useState('Tourist Bus (10+ Seater)');
  const [seatingCap, setSeatingCap] = useState('24 Passengers');
  const [permitDuration, setPermitDuration] = useState('1 Year (Annual Composite)');
  const [vltdImei, setVltdImei] = useState('864192049812345');

  // 10. Fancy Number Booking Specifics
  const [choiceNumber, setChoiceNumber] = useState('0001');
  const [numberTier, setNumberTier] = useState('Category 1 (Super VIP) — Reserve Price ₹5,00,000');
  const [auctionAgreement, setAuctionAgreement] = useState(true);

  // 11. Vehicle Fitness Testing Specifics
  const [atsCenter, setAtsCenter] = useState('Delhi ATS Automated Center 01 (Burari)');
  const [sldCertNo, setSldCertNo] = useState('SLD-AIS018-99412');
  const [atsSlotTime, setAtsSlotTime] = useState('11:00 AM - 01:00 PM');

  // 12. Vehicle Recall Specifics
  const [vinNumber, setVinNumber] = useState('MAT622194P123490');
  const [defectCategory, setDefectCategory] = useState('Braking System / ABS Sensor Malfunction');
  const [defectDescription, setDefectDescription] = useState('Intermittent loss of brake pedal pressure during low-speed deceleration in rainy conditions.');

  // 13. Vahan Green Sewa Specifics
  const [evTechType, setEvTechType] = useState('Battery Electric Vehicle (BEV)');
  const [bankAccNo, setBankAccNo] = useState('91802004128914');
  const [bankIfsc, setBankIfsc] = useState('SBIN0001234');

  // 14. Checkpost Tax Specifics
  const [visitingState, setVisitingState] = useState('Rajasthan (RJ)');
  const [checkpostPoint, setCheckpostPoint] = useState('Shahjahanpur Border Checkpost (NH-48)');
  const [durationDays, setDurationDays] = useState('7 Days');

  // Generated IDs
  const generatedAppId = `PARI-2026-${slug.substring(0, 3).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;
  const generatedTxnId = `TXN-PARI-${Math.floor(100000000 + Math.random() * 900000000)}`;

  const currentState = statesAndRtos.find((s) => s.code === stateCode) || statesAndRtos[0];
  const totalFee = service.fees?.reduce((sum, f) => sum + f.amount, 0) || 350;

  const stepsList = [
    { number: 1, label: isHi ? 'अधिकार क्षेत्र' : 'Jurisdiction' },
    { number: 2, label: isHi ? 'सत्यापन' : 'Verification' },
    { number: 3, label: isHi ? 'आवेदन विवरण' : 'Application' },
    { number: 4, label: isHi ? 'दस्तावेज' : 'Documents' },
    { number: 5, label: isHi ? 'समीक्षा' : 'Review' },
    { number: 6, label: isHi ? 'शुल्क भुगतान' : 'Payment' },
    { number: 7, label: isHi ? 'पुष्टिकरण' : 'Confirmation' }
  ];

  const handleNextStep = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCurrentStep((prev) => Math.min(prev + 1, 7));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExecutePayment = () => {
    setPaymentProcessing(true);
    setTimeout(() => {
      setPaymentProcessing(false);
      setCurrentStep(7);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="gov-container py-32" id="main-content">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: isHi ? 'सेवाएं' : 'Services', path: '/services' },
          { label: isHi ? service.titleHi : service.title, path: `/services/${service.slug}` },
          { label: isHi ? 'ऑनलाइन आवेदन' : 'Online Application' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Process Header */}
      <div style={{ marginBottom: 'var(--space-24)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <Badge variant="info">{isHi ? service.categoryLabelHi : service.categoryLabel}</Badge>
          <Badge variant="success">{isHi ? 'फेसलेस इलेक्ट्रॉनिक वर्कफ़्लो' : 'Faceless Electronic Workflow'}</Badge>
          {registryItem?.underlyingSystem && (
            <Badge variant="neutral">
              System: {registryItem.underlyingSystem}
            </Badge>
          )}
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: 0 }}>
          {isHi ? `${service.titleHi} — ऑनलाइन आवेदन` : `Application for ${service.title}`}
        </h1>
      </div>

      {/* 7-Stage Process Stepper */}
      <Stepper steps={stepsList} currentStep={currentStep} />

      {/* Main Application Container */}
      <div
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-32)',
          boxShadow: 'var(--shadow-raised)',
          maxWidth: '880px',
          margin: '0 auto'
        }}
      >
        {/* ==================================================================
            STEP 1: JURISDICTION & RECORD IDENTIFIER
            ================================================================== */}
        {currentStep === 1 && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'चरण 1: अधिकार क्षेत्र एवं रिकॉर्ड चयन' : 'Step 1: Jurisdiction & Record Identification'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
              {isHi
                ? 'यह सुनिश्चित करने के लिए कि आपका आवेदन सही परिवहन प्राधिकरण तक पहुंचे, राज्य और संबंधित आरटीओ का चयन करें।'
                : 'Select the registering authority and enter your primary identifier to route your application correctly.'}
            </p>

            <div className="grid grid-cols-2 gap-24 mb-24">
              <div className="gov-form-group">
                <label className="gov-label" htmlFor="app-state">
                  {isHi ? 'राज्य / केंद्र शासित प्रदेश' : 'State / Union Territory'} <span className="gov-label-required">*</span>
                </label>
                <select
                  id="app-state"
                  className="gov-select"
                  value={stateCode}
                  onChange={(e) => {
                    setStateCode(e.target.value);
                    const st = statesAndRtos.find((s) => s.code === e.target.value);
                    if (st && st.rtos[0]) setRtoCode(st.rtos[0].code);
                  }}
                >
                  {statesAndRtos.map((st) => (
                    <option key={st.code} value={st.code}>
                      {st.name} ({st.code})
                    </option>
                  ))}
                </select>
              </div>

              <div className="gov-form-group">
                <label className="gov-label" htmlFor="app-rto">
                  {isHi ? 'संबंधित आरटीओ कार्यालय' : 'Jurisdictional RTO Office'} <span className="gov-label-required">*</span>
                </label>
                <select
                  id="app-rto"
                  className="gov-select"
                  value={rtoCode}
                  onChange={(e) => setRtoCode(e.target.value)}
                >
                  {currentState.rtos.map((rto) => (
                    <option key={rto.code} value={rto.code}>
                      {rto.code} — {rto.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Service-Specific Identifier Input */}
            <div className="gov-form-group" style={{ marginBottom: 'var(--space-24)' }}>
              <label className="gov-label" htmlFor="app-identifier">
                {slug.includes('learners')
                  ? (isHi ? 'आवेदक आधार / पहचान संख्या' : 'Applicant Aadhaar / Identity Number')
                  : slug.includes('permanent-driving')
                  ? (isHi ? 'सक्रिय शिक्षार्थी (लर्नर) लाइसेंस संख्या' : 'Active Learner Licence (LL) Number')
                  : slug.includes('driving-licence') || slug.includes('dl') || slug.includes('international')
                  ? (isHi ? 'मौजूदा ड्राइविंग लाइसेंस संख्या' : 'Existing Driving Licence Number')
                  : slug.includes('recall')
                  ? (isHi ? 'वाहन चेसिस / वीआईएन संख्या (17-अंक)' : 'Vehicle VIN / Chassis Number (17-digit)')
                  : (isHi ? 'वाहन पंजीकरण संख्या (RC No.)' : 'Vehicle Registration Number (RC No.)')}
                <span className="gov-label-required">*</span>
              </label>
              <input
                id="app-identifier"
                type="text"
                className="gov-input"
                style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}
                value={
                  slug.includes('permanent-driving')
                    ? llNo
                    : slug.includes('driving-licence') || slug.includes('dl') || slug.includes('international')
                    ? dlNo
                    : slug.includes('recall')
                    ? vinNumber
                    : regNo
                }
                onChange={(e) => {
                  const val = e.target.value.toUpperCase();
                  if (slug.includes('permanent-driving')) setLlNo(val);
                  else if (slug.includes('driving-licence') || slug.includes('dl') || slug.includes('international')) setDlNo(val);
                  else if (slug.includes('recall')) setVinNumber(val);
                  else setRegNo(val);
                }}
                placeholder={
                  slug.includes('permanent-driving')
                    ? 'e.g. LL-DL01-2026-004521'
                    : slug.includes('driving-licence') || slug.includes('dl')
                    ? 'e.g. DL-0420180045612'
                    : slug.includes('recall')
                    ? 'e.g. MAT622194P123490'
                    : 'e.g. DL 01 AB 1234'
                }
              />
              <span className="gov-helper-text">
                {isHi ? 'राष्ट्रीय वाहन / सारथी 4.0 केंद्रीय रजिस्ट्री से स्वचालित सत्यापन।' : 'Validated directly against national VAHAN / SARATHI 4.0 registry.'}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="primary"
                onClick={handleNextStep}
                loading={loading}
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                {isHi ? 'सत्यापन के लिए आगे बढ़ें' : 'Proceed to Verification'}
              </Button>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 2: IDENTITY & AADHAAR OTP AUTHENTICATION
            ================================================================== */}
        {currentStep === 2 && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'चरण 2: पहचान एवं संपर्क रहित ई-केवाईसी सत्यापन' : 'Step 2: Identity & Contactless e-KYC Verification'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
              {isHi
                ? 'आधार ई-केवाईसी द्वारा आवेदक की पहचान, फोटो और पते का सुरक्षित सत्यापन।'
                : 'Aadhaar e-KYC enables 100% faceless authentication without physical visits to transport offices.'}
            </p>

            <Alert variant="info" title={isHi ? 'सुरक्षित संपर्क रहित सेवा' : 'UIDAI Verified Contactless Stream'}>
              {isHi
                ? 'सत्यापन कोड आधार से जुड़े मोबाइल नंबर (******4109) पर भेजा गया है।'
                : 'One-time authentication passcode (OTP) has been dispatched to your Aadhaar-linked mobile (******4109).'}
            </Alert>

            <div className="grid grid-cols-2 gap-24 mb-24">
              <div className="gov-form-group">
                <label className="gov-label" htmlFor="app-dob">
                  {isHi ? 'जन्म तिथि (DOB)' : 'Date of Birth (DOB)'} <span className="gov-label-required">*</span>
                </label>
                <input
                  id="app-dob"
                  type="date"
                  className="gov-input"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div className="gov-form-group">
                <label className="gov-label" htmlFor="app-otp">
                  {isHi ? '6 अंकों का ओटीपी दर्ज करें' : 'Enter 6-Digit OTP'} <span className="gov-label-required">*</span>
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    id="app-otp"
                    type="text"
                    className="gov-input"
                    placeholder="894120"
                    maxLength={6}
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value)}
                  />
                  <Button variant="outline" size="sm" type="button">
                    {isHi ? 'पुनः भेजें' : 'Resend'}
                  </Button>
                </div>
                <span className="gov-helper-text">
                  Demo OTP pre-filled: <strong>894120</strong>
                </span>
              </div>
            </div>

            {/* Verified Profile Card */}
            <div
              style={{
                backgroundColor: 'var(--color-semantic-success-subtle)',
                border: '1px solid #BADBCC',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-16)',
                marginBottom: 'var(--space-24)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <CheckCircle2 size={32} color="var(--color-semantic-success)" />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
                  {isHi ? 'आधार ई-केवाईसी प्रमाणित: राजेश कुमार शर्मा' : 'Aadhaar e-KYC Authenticated: RAJESH KUMAR SHARMA'}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                  {isHi
                    ? 'पिता: रमेश कुमार शर्मा • लिंग: पुरुष • जन्म तिथि: 15-मई-1988 • पता: बी-402, टैगोर गार्डन एक्सटेंशन, नई दिल्ली - 110027'
                    : 'Father: Ramesh Kumar Sharma • Gender: Male • DOB: 15-May-1988 • Address: B-402, Tagore Garden Extension, New Delhi - 110027'}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="ghost" onClick={handlePrevStep} icon={<ArrowLeft size={16} />}>
                {isHi ? 'पीछे' : 'Back'}
              </Button>
              <Button variant="primary" onClick={handleNextStep} loading={loading} icon={<ArrowRight size={16} />} iconPosition="right">
                {isHi ? 'आवेदन विवरण भरें' : 'Continue to Application Details'}
              </Button>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 3: TAILORED SERVICE-SPECIFIC APPLICATION FORM
            ================================================================== */}
        {currentStep === 3 && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? `चरण 3: ${service.titleHi} — विशिष्ट विवरण` : `Step 3: ${service.title} — Specific Details`}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
              {isHi
                ? 'इस सेवा के लिए आवश्यक सभी विशिष्ट पैरामीटर, घोषणाएं एवं प्राथमिकताएं दर्ज करें।'
                : 'Enter all statutory parameters, operational choices, and self-declarations tailored to this service.'}
            </p>

            {/* -------------------------------------------------------------
                FORM VARIANT A: RENEW DRIVING LICENCE
                ------------------------------------------------------------- */}
            {(slug === 'renew-driving-licence' || slug === 'driving-licence-services') && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ backgroundColor: 'var(--color-bg-page)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
                    {isHi ? 'नवीनीकृत की जाने वाली वाहन श्रेणियां (Vehicle Classes):' : 'Select Vehicle Classes to Renew:'}
                  </h4>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {['MCWG (Motorcycle with Gear)', 'LMV (Light Motor Vehicle / Car)', 'TRANS (Transport / Commercial)'].map((cls) => {
                      const code = cls.split(' ')[0];
                      const checked = renewClasses.includes(code);
                      return (
                        <label key={cls} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', backgroundColor: 'var(--color-bg-surface)', border: `1px solid ${checked ? 'var(--color-brand-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => {
                              if (checked) setRenewClasses(renewClasses.filter((c) => c !== code));
                              else setRenewClasses([...renewClasses, code]);
                            }}
                          />
                          <span style={{ fontSize: '13px', fontWeight: 600 }}>{cls}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Change of Address Checkbox */}
                <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
                    <input type="checkbox" checked={changeAddress} onChange={(e) => setChangeAddress(e.target.checked)} />
                    <span>{isHi ? 'क्या आप ड्राइविंग लाइसेंस पर अपना पता बदलना चाहते हैं?' : 'I want to update / change my residential address on the new DL'}</span>
                  </label>
                  {changeAddress && (
                    <div className="grid grid-cols-2 gap-16" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--color-border-light)' }}>
                      <div className="gov-form-group" style={{ margin: 0 }}>
                        <label className="gov-label">{isHi ? 'नया मकान / पता' : 'New House / Flat & Street'}</label>
                        <input type="text" className="gov-input" value={newAddress.line1} onChange={(e) => setNewAddress({ ...newAddress, line1: e.target.value })} />
                      </div>
                      <div className="gov-form-group" style={{ margin: 0 }}>
                        <label className="gov-label">{isHi ? 'पिनकोड' : 'Pincode'}</label>
                        <input type="text" className="gov-input" value={newAddress.pincode} onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Form 1 Medical Fitness Declaration */}
                <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-20)' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '12px' }}>
                    {isHi ? 'फॉर्म 1 (शारीरिक स्वास्थ्य घोषणा):' : 'Form 1 (Statutory Physical Fitness Declaration):'}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
                      <input type="checkbox" checked={medicalDeclared} onChange={(e) => setMedicalDeclared(e.target.checked)} style={{ accentColor: 'var(--color-brand-primary)', marginTop: '2px' }} />
                      <span>
                        {isHi
                          ? 'मैं घोषणा करता/करती हूं कि मैं मिर्गी, चक्कर आने, वर्णांधता (Color blindness) या रतौंधी से पीड़ित नहीं हूं।'
                          : 'I declare that I do not suffer from epilepsy, sudden attacks of giddiness, color blindness, or night blindness.'}
                      </span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
                      <input type="checkbox" checked={organDonor} onChange={(e) => setOrganDonor(e.target.checked)} style={{ accentColor: 'var(--color-brand-primary)', marginTop: '2px' }} />
                      <span>
                        {isHi
                          ? 'मैं आकस्मिक मृत्यु की स्थिति में <strong>अंग दाता (Organ Donor)</strong> के रूप में पंजीकरण कराना चाहता/चाहती हूं (डीएल कार्ड पर मुद्रित)।'
                          : 'I wish to register as an Organ Donor in case of accidental death (Printed on DL card).'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                FORM VARIANT B: LEARNER'S LICENCE (LL)
                ------------------------------------------------------------- */}
            {slug === 'learners-licence' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="grid grid-cols-2 gap-16">
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'पिता / अभिभावक का नाम' : "Father's / Guardian's Full Name"}</label>
                    <input type="text" className="gov-input" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'शैक्षणिक योग्यता' : 'Educational Qualification'}</label>
                    <select className="gov-select" value={educationQual} onChange={(e) => setEducationQual(e.target.value)}>
                      <option value="10+2 / Higher Secondary">10+2 / Higher Secondary</option>
                      <option value="10th Standard / SSC">10th Standard / SSC</option>
                      <option value="Graduate / Post-Graduate">Graduate / Post-Graduate</option>
                      <option value="8th Standard Pass">8th Standard Pass</option>
                    </select>
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'रक्त समूह (Blood Group)' : 'Blood Group'}</label>
                    <select className="gov-select" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
                      <option value="B+">B Positive (B+)</option>
                      <option value="O+">O Positive (O+)</option>
                      <option value="A+">A Positive (A+)</option>
                      <option value="AB+">AB Positive (AB+)</option>
                      <option value="O-">O Negative (O-)</option>
                    </select>
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'पहचान चिह्न (Identification Mark)' : 'Identification Mark'}</label>
                    <input type="text" className="gov-input" value={identMark} onChange={(e) => setIdentMark(e.target.value)} />
                  </div>
                </div>

                {/* Online Test Preference */}
                <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)', backgroundColor: 'var(--color-bg-page)' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
                    {isHi ? 'लर्नर लाइसेंस थ्योरी टेस्ट का प्रकार चुनें:' : 'Choose Learner Licence Proctored Test Mode:'}
                  </h4>
                  <div className="grid grid-cols-2 gap-16">
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '12px', backgroundColor: 'var(--color-bg-surface)', border: `2px solid ${testMode === 'ONLINE_HOME' ? 'var(--color-brand-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                      <input type="radio" name="testMode" checked={testMode === 'ONLINE_HOME'} onChange={() => setTestMode('ONLINE_HOME')} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--color-brand-dark)' }}>
                          {isHi ? 'घर से ऑनलाइन वीडियो टेस्ट' : 'Online Contactless Test (From Home)'}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                          AI video proctored 15-minute road safety quiz. Instant download upon passing.
                        </div>
                      </div>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '12px', backgroundColor: 'var(--color-bg-surface)', border: `2px solid ${testMode === 'RTO_TRACK' ? 'var(--color-brand-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                      <input type="radio" name="testMode" checked={testMode === 'RTO_TRACK'} onChange={() => setTestMode('RTO_TRACK')} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--color-brand-dark)' }}>
                          {isHi ? 'आरटीओ परीक्षा केंद्र पर टेस्ट' : 'RTO Test Center Appointment'}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                          In-person computer test at jurisdictional RTO counter.
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                FORM VARIANT C: PERMANENT DRIVING LICENCE
                ------------------------------------------------------------- */}
            {slug === 'permanent-driving-licence' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ backgroundColor: 'var(--color-brand-subtle)', padding: 'var(--space-16)', borderRadius: 'var(--radius-md)', border: '1px solid #B6D4FE' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-brand-primary)' }}>
                    Active Learner Licence Found: {llNo}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                    Issued on: 12-Jul-2026 • Valid Upto: 11-Jan-2027 • Eligible for Automated Track Test
                  </div>
                </div>

                <div className="gov-form-group" style={{ margin: 0 }}>
                  <label className="gov-label">{isHi ? 'ड्राइविंग टेस्ट हेतु वाहन वर्ग' : 'Vehicle Class for Practical Driving Test'}</label>
                  <select className="gov-select" value={testVehicleClass} onChange={(e) => setTestVehicleClass(e.target.value)}>
                    <option value="LMV (Car / Light Motor Vehicle)">LMV (Car / Light Motor Vehicle)</option>
                    <option value="MCWG (Motorcycle with Gear)">MCWG (Motorcycle with Gear)</option>
                    <option value="Both MCWG and LMV (Combined Test)">Both MCWG and LMV (Combined Test)</option>
                  </select>
                </div>

                {/* Automated Test Track Slot Picker */}
                <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={18} color="var(--color-brand-primary)" />
                    <span>{isHi ? 'ऑटोमेटेड ड्राइविंग टेस्ट ट्रैक (ADTT) स्लॉट बुकिंग' : 'Automated Driving Test Track (ADTT) Appointment Slot'}</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-16">
                    <div className="gov-form-group" style={{ margin: 0 }}>
                      <label className="gov-label">{isHi ? 'टेस्ट तिथि चुनें' : 'Select Test Date'}</label>
                      <input type="date" className="gov-input" value={testSlotDate} onChange={(e) => setTestSlotDate(e.target.value)} />
                    </div>
                    <div className="gov-form-group" style={{ margin: 0 }}>
                      <label className="gov-label">{isHi ? 'समय स्लॉट' : 'Time Window'}</label>
                      <select className="gov-select" value={testSlotTime} onChange={(e) => setTestSlotTime(e.target.value)}>
                        <option value="09:30 AM - 11:30 AM (14 Slots Available)">09:30 AM - 11:30 AM (14 Slots Available)</option>
                        <option value="11:30 AM - 01:30 PM (8 Slots Available)">11:30 AM - 01:30 PM (8 Slots Available)</option>
                        <option value="02:30 PM - 04:30 PM (21 Slots Available)">02:30 PM - 04:30 PM (21 Slots Available)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                FORM VARIANT D: TRANSFER OF VEHICLE OWNERSHIP
                ------------------------------------------------------------- */}
            {(slug === 'transfer-vehicle-ownership' || slug === 'vehicle-related-services') && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="grid grid-cols-2 gap-16">
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'हस्तांतरण का प्रकार' : 'Transfer Category'}</label>
                    <select className="gov-select" value={transferType} onChange={(e) => setTransferType(e.target.value)}>
                      <option value="Normal Sale / Transfer">Normal Sale / Transfer</option>
                      <option value="Transfer due to Death of Owner (Succession)">Transfer due to Death of Owner (Succession)</option>
                      <option value="Public Auction Purchase">Public Auction Purchase</option>
                    </select>
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'बिक्री मूल्य (₹)' : 'Sale Consideration Amount (₹)'}</label>
                    <input type="text" className="gov-input" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
                  </div>
                </div>

                {/* Buyer Information Section */}
                <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)', backgroundColor: 'var(--color-bg-page)' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '12px' }}>
                    {isHi ? 'क्रेता (नया मालिक) का विवरण:' : 'Buyer (New Transferee Owner) Information:'}
                  </h4>
                  <div className="grid grid-cols-2 gap-16 mb-16">
                    <div className="gov-form-group" style={{ margin: 0 }}>
                      <label className="gov-label">{isHi ? 'क्रेता का पूरा नाम' : 'Buyer Full Name'}</label>
                      <input type="text" className="gov-input" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
                    </div>
                    <div className="gov-form-group" style={{ margin: 0 }}>
                      <label className="gov-label">{isHi ? 'क्रेता के पिता / पति का नाम' : "Buyer's Father / Spouse Name"}</label>
                      <input type="text" className="gov-input" value={buyerFather} onChange={(e) => setBuyerFather(e.target.value)} />
                    </div>
                    <div className="gov-form-group" style={{ margin: 0 }}>
                      <label className="gov-label">{isHi ? 'क्रेता का आधार / पैन' : "Buyer's Aadhaar / PAN"}</label>
                      <input type="text" className="gov-input" value={buyerAadhaar} onChange={(e) => setBuyerAadhaar(e.target.value)} />
                    </div>
                    <div className="gov-form-group" style={{ margin: 0 }}>
                      <label className="gov-label">{isHi ? 'क्रेता का मोबाइल नंबर' : "Buyer's Mobile Number"}</label>
                      <input type="text" className="gov-input" value={buyerMobile} onChange={(e) => setBuyerMobile(e.target.value)} />
                    </div>
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'क्रेता का आवासीय पता (आरसी पर मुद्रित होगा)' : 'Buyer Residential Address (Printed on New Smart Card)'}</label>
                    <input type="text" className="gov-input" value={buyerAddress} onChange={(e) => setBuyerAddress(e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                FORM VARIANT E: ALL INDIA TOURIST PERMIT (AITP)
                ------------------------------------------------------------- */}
            {slug === 'all-india-tourist-permit' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="grid grid-cols-2 gap-16">
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'पर्यटक वाहन श्रेणी' : 'Tourist Vehicle Category'}</label>
                    <select className="gov-select" value={touristClass} onChange={(e) => setTouristClass(e.target.value)}>
                      <option value="Tourist Bus (10+ Seater)">Tourist Bus (10+ Seater)</option>
                      <option value="Tourist Maxi Cab (6-9 Seater)">Tourist Maxi Cab (6-9 Seater)</option>
                      <option value="Tourist Motor Cab (<5 Seater)">Tourist Motor Cab (&lt;5 Seater)</option>
                    </select>
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'परमिट अवधि' : 'Permit Duration'}</label>
                    <select className="gov-select" value={permitDuration} onChange={(e) => setPermitDuration(e.target.value)}>
                      <option value="1 Year (Annual Composite)">1 Year (Annual Composite Authorization)</option>
                      <option value="3 Months (Quarterly Composite)">3 Months (Quarterly Composite)</option>
                    </select>
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'स्वीकृत बैठने की क्षमता' : 'Seating Capacity'}</label>
                    <input type="text" className="gov-input" value={seatingCap} onChange={(e) => setSeatingCap(e.target.value)} />
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'AIS-140 वीएलटीडी आईएमईआई संख्या' : 'AIS-140 VLTD Device IMEI'}</label>
                    <input type="text" className="gov-input" value={vltdImei} onChange={(e) => setVltdImei(e.target.value)} />
                  </div>
                </div>

                <Alert variant="info" title="Tourist Permit Rule 2023 Compliance">
                  Vehicle must be equipped with compliant AIS-140 GPS, working panic buttons, and display the official yellow tourist registration plate.
                </Alert>
              </div>
            )}

            {/* -------------------------------------------------------------
                FORM VARIANT F: FANCY NUMBER BOOKING
                ------------------------------------------------------------- */}
            {slug === 'fancy-number-booking' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="grid grid-cols-2 gap-16">
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'पसंदीदा नंबर दर्ज करें' : 'Desired VIP / Choice Number'}</label>
                    <input type="text" className="gov-input" style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-brand-primary)' }} value={choiceNumber} onChange={(e) => setChoiceNumber(e.target.value)} />
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'श्रेणी एवं आधार मूल्य' : 'Category & Reserve Base Price'}</label>
                    <select className="gov-select" value={numberTier} onChange={(e) => setNumberTier(e.target.value)}>
                      <option value="Category 1 (Super VIP) — Reserve Price ₹5,00,000">Category 1 (0001) — ₹5,00,000</option>
                      <option value="Category 2 (VIP 0002-0009, 0786) — Reserve Price ₹3,00,000">Category 2 (0002-0009, 0786) — ₹3,00,000</option>
                      <option value="Category 3 (1111, 9999, 8055) — Reserve Price ₹2,00,000">Category 3 (1111, 9999) — ₹2,00,000</option>
                      <option value="Category 4 (Any other choice number) — Reserve Price ₹25,000">Category 4 (Any choice) — ₹25,000</option>
                    </select>
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-accent-saffron-subtle)', padding: 'var(--space-16)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-accent-saffron)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-brand-dark)', fontSize: '14px' }}>
                    Live e-Auction Series: DL-01-CU
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                    Registration closes on Friday 05:00 PM. Online bidding commences Saturday 09:00 AM.
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                FORM VARIANT G: CHECKPOST TAX
                ------------------------------------------------------------- */}
            {slug === 'checkpost-tax' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="grid grid-cols-2 gap-16">
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'प्रवेश करने वाला राज्य' : 'Visiting State'}</label>
                    <select className="gov-select" value={visitingState} onChange={(e) => setVisitingState(e.target.value)}>
                      <option value="Rajasthan (RJ)">Rajasthan (RJ)</option>
                      <option value="Uttar Pradesh (UP)">Uttar Pradesh (UP)</option>
                      <option value="Haryana (HR)">Haryana (HR)</option>
                      <option value="Maharashtra (MH)">Maharashtra (MH)</option>
                      <option value="Gujarat (GJ)">Gujarat (GJ)</option>
                    </select>
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'बॉर्डर चेकपोस्ट पॉइंट' : 'Border Entry Checkpost'}</label>
                    <select className="gov-select" value={checkpostPoint} onChange={(e) => setCheckpostPoint(e.target.value)}>
                      <option value="Shahjahanpur Border Checkpost (NH-48)">Shahjahanpur Border (NH-48)</option>
                      <option value="Kundli Border Checkpost">Kundli Border Checkpost</option>
                      <option value="Badarpur Border Point">Badarpur Border Point</option>
                      <option value="KMP Expressway Entry Checkpost">KMP Expressway Entry</option>
                    </select>
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'अवधि' : 'Stay / Transit Duration'}</label>
                    <select className="gov-select" value={durationDays} onChange={(e) => setDurationDays(e.target.value)}>
                      <option value="Single Day (24 Hours)">Single Day (24 Hours)</option>
                      <option value="7 Days (Weekly Permit)">7 Days (Weekly Permit)</option>
                      <option value="30 Days (Monthly Pass)">30 Days (Monthly Pass)</option>
                    </select>
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'वाहन सकल भार (GVW) / सीटें' : 'Gross Vehicle Weight / Seating'}</label>
                    <input type="text" className="gov-input" value="16,200 kg / 3-Axle Freight" readOnly />
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------
                FALLBACK GENERIC VARIANT FOR OTHER SERVICES
                ------------------------------------------------------------- */}
            {!['renew-driving-licence', 'driving-licence-services', 'learners-licence', 'permanent-driving-licence', 'transfer-vehicle-ownership', 'vehicle-related-services', 'all-india-tourist-permit', 'fancy-number-booking', 'checkpost-tax'].includes(slug) && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="grid grid-cols-2 gap-16">
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'आवेदक का पूरा नाम' : 'Applicant Full Name'}</label>
                    <input type="text" className="gov-input" defaultValue="Rajesh Kumar Sharma" />
                  </div>
                  <div className="gov-form-group" style={{ margin: 0 }}>
                    <label className="gov-label">{isHi ? 'संपर्क मोबाइल' : 'Contact Mobile'}</label>
                    <input type="text" className="gov-input" defaultValue="9876544109" />
                  </div>
                </div>
                <div className="gov-form-group" style={{ margin: 0 }}>
                  <label className="gov-label">{isHi ? 'आवेदन टिप्पणी / विशेष विवरण' : 'Application Remarks / Specific Details'}</label>
                  <textarea className="gov-textarea" rows={3} defaultValue="Applying under Central Motor Vehicle Rules standard faceless electronic process." />
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-24)' }}>
              <Button variant="ghost" onClick={handlePrevStep} icon={<ArrowLeft size={16} />}>
                {isHi ? 'पीछे' : 'Back'}
              </Button>
              <Button variant="primary" onClick={handleNextStep} loading={loading} icon={<ArrowRight size={16} />} iconPosition="right">
                {isHi ? 'दस्तावेज अपलोड के लिए आगे बढ़ें' : 'Proceed to Document Upload'}
              </Button>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 4: DOCUMENTS UPLOAD (TAILORED TO SERVICE)
            ================================================================== */}
        {currentStep === 4 && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'चरण 4: आवश्यक वैधानिक दस्तावेज अपलोड करें' : 'Step 4: Upload Required Statutory Documents'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
              {isHi
                ? `${service.titleHi} के लिए आवश्यक स्व-हस्ताक्षरित प्रपत्रों की प्रतियां अपलोड करें (अधिकतम 2MB प्रति फ़ाइल)।`
                : `Upload certified scanned copies specifically required for ${service.title} (PDF/JPG, Max 2MB).`}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: 'var(--space-24)' }}>
              {service.documents?.map((doc, idx) => (
                <FileUpload
                  key={idx}
                  label={`${doc.name} ${isHi && doc.mandatory ? '(अनिवार्य)' : doc.mandatory ? '(Mandatory)' : '(Optional)'}`}
                  required={doc.mandatory}
                  helperText={doc.description}
                />
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="ghost" onClick={handlePrevStep} icon={<ArrowLeft size={16} />}>
                {isHi ? 'पीछे' : 'Back'}
              </Button>
              <Button variant="primary" onClick={handleNextStep} loading={loading} icon={<ArrowRight size={16} />} iconPosition="right">
                {isHi ? 'आवेदन की समीक्षा करें' : 'Review Application'}
              </Button>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 5: REVIEW APPLICATION SUMMARY
            ================================================================== */}
        {currentStep === 5 && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'चरण 5: आवेदन सारांश की समीक्षा करें' : 'Step 5: Review Application Summary'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
              {isHi
                ? 'वैधानिक सरकारी शुल्क भुगतान के लिए आगे बढ़ने से पहले कृपया सभी विवरणों को ध्यानपूर्वक सत्यापित करें।'
                : 'Please carefully verify all details prior to proceeding to statutory government fee payment.'}
            </p>

            <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: 'var(--space-24)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <th style={{ width: '38%', padding: '12px 16px', textAlign: 'left', backgroundColor: 'var(--color-bg-page)', borderBottom: '1px solid var(--color-border-light)' }}>
                      {isHi ? 'आवेदित सेवा' : 'Service Applied'}
                    </th>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border-light)' }}>
                      <strong>{isHi ? service.titleHi : service.title}</strong>
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: '12px 16px', textAlign: 'left', backgroundColor: 'var(--color-bg-page)', borderBottom: '1px solid var(--color-border-light)' }}>
                      {isHi ? 'आवेदक का नाम' : 'Applicant Name'}
                    </th>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border-light)' }}>
                      Rajesh Kumar Sharma
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: '12px 16px', textAlign: 'left', backgroundColor: 'var(--color-bg-page)', borderBottom: '1px solid var(--color-border-light)' }}>
                      {isHi ? 'अधिकार क्षेत्र आरटीओ' : 'Jurisdiction RTO'}
                    </th>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border-light)' }}>
                      {rtoCode} — {currentState.name}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: '12px 16px', textAlign: 'left', backgroundColor: 'var(--color-bg-page)', borderBottom: '1px solid var(--color-border-light)' }}>
                      {isHi ? 'पहचान / रिकॉर्ड संदर्भ' : 'Record Identifier'}
                    </th>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border-light)' }}>
                      <span style={{ fontFamily: 'monospace', fontWeight: 700 }}>
                        {slug.includes('permanent-driving')
                          ? llNo
                          : slug.includes('driving-licence') || slug.includes('dl')
                          ? dlNo
                          : slug.includes('recall')
                          ? vinNumber
                          : regNo}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: '12px 16px', textAlign: 'left', backgroundColor: 'var(--color-bg-page)', borderBottom: '1px solid var(--color-border-light)' }}>
                      {isHi ? 'प्रमाणीकरण स्थिति' : 'Authentication Mode'}
                    </th>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border-light)' }}>
                      <Badge variant="success">Aadhaar e-KYC Verified (Faceless)</Badge>
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: '12px 16px', textAlign: 'left', backgroundColor: 'var(--color-bg-page)' }}>
                      {isHi ? 'कुल वैधानिक देय शुल्क' : 'Total Statutory Fee'}
                    </th>
                    <td style={{ padding: '12px 16px' }}>
                      <strong style={{ color: 'var(--color-brand-primary)', fontSize: '16px' }}>
                        ₹{totalFee.toLocaleString('en-IN')}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="ghost" onClick={handlePrevStep} icon={<ArrowLeft size={16} />}>
                {isHi ? 'पीछे' : 'Back'}
              </Button>
              <Button variant="saffron" onClick={handleNextStep} loading={loading} icon={<ArrowRight size={16} />} iconPosition="right">
                {isHi ? 'शुल्क भुगतान के लिए आगे बढ़ें' : 'Proceed to Payment'}
              </Button>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 6: SECURE STATUTORY FEE PAYMENT
            ================================================================== */}
        {currentStep === 6 && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'चरण 6: सुरक्षित सरकारी शुल्क भुगतान' : 'Step 6: Statutory Government Fee Payment'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
              {isHi
                ? 'भारत सरकार के आधिकारिक गेटवे (Bharatkosh / SBI ePay) द्वारा सुरक्षित भुगतान करें।'
                : 'Process your payment securely via official Government of India treasury gateways.'}
            </p>

            {/* Fee Breakdown Card */}
            <div style={{ backgroundColor: 'var(--color-bg-page)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-20)', marginBottom: 'var(--space-24)' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '12px' }}>
                {isHi ? 'शुल्क विवरण:' : 'Itemized Fee Breakdown:'}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {service.fees?.map((fee, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                    <span>{fee.label}</span>
                    <span style={{ fontWeight: 600, color: 'var(--color-brand-dark)' }}>₹{fee.amount.toLocaleString('en-IN')}</span>
                  </div>
                ))}
                <div style={{ paddingTop: '12px', marginTop: '4px', borderTop: '2px dashed var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
                    {isHi ? 'कुल देय राशि' : 'Total Amount Payable'}
                  </span>
                  <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-brand-primary)' }}>
                    ₹{totalFee.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Gateway Options */}
            <div style={{ marginBottom: 'var(--space-24)' }}>
              <label className="gov-label" style={{ marginBottom: '8px' }}>
                {isHi ? 'भुगतान गेटवे चुनें' : 'Select Official Payment Gateway'}
              </label>
              <div className="grid grid-cols-3 gap-16">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: 'var(--color-bg-surface)', border: `2px solid ${paymentGateway === 'BHARATKOSH' ? 'var(--color-brand-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                  <input type="radio" name="pg" checked={paymentGateway === 'BHARATKOSH'} onChange={() => setPaymentGateway('BHARATKOSH')} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '13px' }}>Bharatkosh Portal</div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Gov of India Central Treasury</div>
                  </div>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: 'var(--color-bg-surface)', border: `2px solid ${paymentGateway === 'SBI_EPAY' ? 'var(--color-brand-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                  <input type="radio" name="pg" checked={paymentGateway === 'SBI_EPAY'} onChange={() => setPaymentGateway('SBI_EPAY')} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '13px' }}>SBI ePay</div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Cards / NetBanking</div>
                  </div>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: 'var(--color-bg-surface)', border: `2px solid ${paymentGateway === 'UPI' ? 'var(--color-brand-primary)' : 'var(--color-border)'}`, borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                  <input type="radio" name="pg" checked={paymentGateway === 'UPI'} onChange={() => setPaymentGateway('UPI')} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '13px' }}>Unified UPI</div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>BHIM / GPay / PhonePe</div>
                  </div>
                </label>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="ghost" onClick={handlePrevStep} icon={<ArrowLeft size={16} />}>
                {isHi ? 'पीछे' : 'Back'}
              </Button>
              <Button
                variant="saffron"
                onClick={handleExecutePayment}
                loading={paymentProcessing}
                icon={<Lock size={16} />}
              >
                {isHi ? `₹${totalFee.toLocaleString('en-IN')} का सुरक्षित भुगतान करें` : `Pay ₹${totalFee.toLocaleString('en-IN')} Securely`}
              </Button>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 7: OFFICIAL CONFIRMATION & PRINTABLE ACKNOWLEDGMENT
            ================================================================== */}
        {currentStep === 7 && (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-semantic-success-subtle)',
                color: 'var(--color-semantic-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-16)'
              }}
            >
              <CheckCircle2 size={38} />
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'आवेदन सफलतापूर्वक जमा हुआ!' : 'Application Successfully Submitted!'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto var(--space-24)', lineHeight: 1.5 }}>
              {isHi
                ? `आपका आवेदन संदर्भ क्रमांक <strong>${generatedAppId}</strong> सफलतापूर्वक जनरेट किया गया है। एसएमएस द्वारा रसीद प्रेषित कर दी गई है।`
                : `Your official application reference number <strong>${generatedAppId}</strong> has been generated and dispatched to your registered mobile.`}
            </p>

            {/* Official Digital Receipt Card */}
            <div
              style={{
                border: '2px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-24)',
                backgroundColor: 'var(--color-bg-page)',
                textAlign: 'left',
                marginBottom: 'var(--space-24)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border-light)', paddingBottom: 'var(--space-12)', marginBottom: 'var(--space-16)' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-brand-primary)', textTransform: 'uppercase' }}>
                    Government of India • Ministry of Road Transport &amp; Highways
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-brand-dark)' }}>
                    {isHi ? service.titleHi : service.title} Receipt
                  </div>
                </div>
                <Badge variant="success">Payment Verified</Badge>
              </div>

              <div className="grid grid-cols-2 gap-16 mb-16">
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 600 }}>APPLICATION NUMBER</div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-brand-primary)', fontFamily: 'monospace' }}>{generatedAppId}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 600 }}>TRANSACTION ID</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-dark)', fontFamily: 'monospace' }}>{generatedTxnId}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 600 }}>JURISDICTION RTO</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-dark)' }}>{rtoCode} — {currentState.name}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 600 }}>TOTAL AMOUNT PAID</div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-semantic-success)' }}>₹{totalFee.toLocaleString('en-IN')}</div>
                </div>
              </div>

              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', borderTop: '1px dashed var(--color-border)', paddingTop: '10px' }}>
                Estimated Service Completion: <strong>{service.estimatedDays}</strong>. You can track real-time progress on the Live Tracker.
              </div>
            </div>

            {/* Final Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                onClick={() => alert(`Downloading official PDF acknowledgment for ${generatedAppId}`)}
                icon={<Download size={16} />}
              >
                {isHi ? 'पावती डाउनलोड करें (PDF)' : 'Download Receipt (PDF)'}
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate('/track')}
                icon={<Eye size={16} />}
              >
                {isHi ? 'लाइव स्थिति ट्रैक करें' : 'Track Application Status'}
              </Button>
              <Button
                variant="ghost"
                onClick={() => onNavigate('/services')}
              >
                {isHi ? 'अन्य सेवाएं देखें' : 'Back to Services Hub'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
