import React, { useState } from 'react';
import {
  CheckCircle2, ArrowRight, ArrowLeft, Download, ShieldCheck,
  CreditCard, FileText, UploadCloud, User, AlertCircle, RefreshCw, Eye
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { statesAndRtos } from '../data/rtoData';
import { Language } from '../types';
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
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form State
  const [stateCode, setStateCode] = useState('DL');
  const [rtoCode, setRtoCode] = useState('DL-01');
  const [identifierNo, setIdentifierNo] = useState(
    service.category === 'driving-licence' ? 'DL-0420180045612' : 'DL 01 AB 1234'
  );
  const [dob, setDob] = useState('1988-05-15');
  const [otpValue, setOtpValue] = useState('');
  const [otpSent, setOtpSent] = useState(true);
  const [otpVerified, setOtpVerified] = useState(true);
  const [medicalDeclared, setMedicalDeclared] = useState(true);
  const [organDonor, setOrganDonor] = useState(true);
  const [paymentGateway, setPaymentGateway] = useState('BHARATKOSH');
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  // Generated Application Identifier upon completion
  const generatedAppId = service.category === 'driving-licence' ? 'PARI-2026-DL-89412' : 'PARI-2026-RC-44109';
  const generatedTxnId = `TXN-PARI-${Math.floor(100000000 + Math.random() * 900000000)}`;

  const currentState = statesAndRtos.find((s) => s.code === stateCode) || statesAndRtos[0];

  const totalFee = service.fees.reduce((sum, f) => sum + f.amount, 0);

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
    }, 250);
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
    }, 600);
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="info">{isHi ? service.categoryLabelHi : service.categoryLabel}</Badge>
          <Badge variant="success">{isHi ? 'फेसलेस इलेक्ट्रॉनिक वर्कफ़्लो' : 'Faceless Electronic Workflow'}</Badge>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: 0 }}>
          {isHi ? service.titleHi : service.title}
        </h1>
      </div>

      {/* Universal 7-Stage Process Stepper */}
      <Stepper steps={stepsList} currentStep={currentStep} />

      {/* Main Application Container */}
      <div
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-32)',
          boxShadow: 'var(--shadow-raised)',
          maxWidth: '860px',
          margin: '0 auto'
        }}
      >
        {/* ==================================================================
            STEP 1: DETAILS & JURISDICTION SELECTION
            ================================================================== */}
        {currentStep === 1 && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'चरण 1: अधिकार क्षेत्र एवं रिकॉर्ड चयन' : 'Step 1: Jurisdiction & Record Selection'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
              {isHi
                ? 'यह सुनिश्चित करने के लिए कि रिकॉर्ड सही पंजीकरण प्राधिकरण को भेजे जाएं, वह स्थान चुनें जहां आपका दस्तावेज पंजीकृत था।'
                : 'Select where your document was registered to ensure records route to the correct Registering Authority.'}
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

            <div className="gov-form-group" style={{ marginBottom: 'var(--space-24)' }}>
              <label className="gov-label" htmlFor="app-identifier">
                {service.category === 'driving-licence'
                  ? (isHi ? 'ड्राइविंग लाइसेंस संख्या' : 'Driving Licence Number')
                  : (isHi ? 'वाहन पंजीकरण संख्या' : 'Vehicle Registration Number')}
                <span className="gov-label-required">*</span>
              </label>
              <input
                id="app-identifier"
                type="text"
                className="gov-input"
                style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}
                value={identifierNo}
                onChange={(e) => setIdentifierNo(e.target.value.toUpperCase())}
                placeholder={service.category === 'driving-licence' ? 'e.g. DL-0420180045612' : 'e.g. DL 01 AB 1234'}
              />
              <span className="gov-helper-text">
                {isHi ? 'केंद्रीय सारथी / वाहन राष्ट्रीय डेटाबेस से मिलान किया जाता है।' : 'Matches central Sarathi / Vahan national database repository.'}
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
              {isHi ? 'चरण 2: पहचान एवं संपर्क रहित आधार ई-केवाईसी' : 'Step 2: Identity & Contactless Aadhaar e-KYC'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
              {isHi
                ? 'केंद्रीय मोटर वाहन नियमों के तहत आधार ई-केवाईसी द्वारा बिना आरटीओ कार्यालय जाए संपर्क रहित सेवा प्राप्त की जा सकती है।'
                : 'Under Central Motor Vehicle Rules, Aadhaar e-KYC enables faceless service without visiting the RTO office.'}
            </p>

            <Alert variant="info" title={isHi ? 'फेसलेस संपर्क रहित सेवा' : 'Faceless Contactless Service'}>
              {isHi
                ? 'आपका नाम, फोटो, हस्ताक्षर और पता यूआईडीएआई आधार ई-केवाईसी का उपयोग करके सुरक्षित रूप से प्रमाणित किया जाएगा।'
                : 'Your name, photo, signature and address will be securely authenticated using UIDAI Aadhaar e-KYC.'}
            </Alert>

            <div className="grid grid-cols-2 gap-24 mb-24">
              <div className="gov-form-group">
                <label className="gov-label" htmlFor="app-dob">
                  {isHi ? 'जन्म तिथि' : 'Date of Birth'} <span className="gov-label-required">*</span>
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
                    placeholder={isHi ? '6-अंकों का ओटीपी दर्ज करें' : 'Enter 6-digit OTP'}
                    maxLength={6}
                    value={otpValue || '894120'}
                    onChange={(e) => setOtpValue(e.target.value)}
                  />
                  <Button variant="outline" size="sm" type="button">
                    {isHi ? 'पुनः भेजें' : 'Resend'}
                  </Button>
                </div>
                <span className="gov-helper-text">
                  {isHi ? 'डेमो ओटीपी आधार से जुड़े मोबाइल (******4109) पर भेजा गया' : 'Demo OTP sent to Aadhaar-linked mobile (******4109)'}
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
                  {isHi ? 'लिंग: पुरुष • जन्म तिथि: 15-मई-1988 • पता: बी-402, टैगोर गार्डन एक्सटेंशन, नई दिल्ली - 110027' : 'Gender: Male • DOB: 15-May-1988 • Address: B-402, Tagore Garden Extension, New Delhi - 110027'}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="ghost" onClick={handlePrevStep} icon={<ArrowLeft size={16} />}>
                {isHi ? 'पीछे' : 'Back'}
              </Button>
              <Button variant="primary" onClick={handleNextStep} loading={loading} icon={<ArrowRight size={16} />} iconPosition="right">
                {isHi ? 'आवेदन विवरण भरें' : 'Continue to Application'}
              </Button>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 3: APPLICATION DETAILS & DECLARATIONS
            ================================================================== */}
        {currentStep === 3 && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'चरण 3: सेवा विवरण एवं स्व-घोषणा' : 'Step 3: Service Details & Declarations'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
              {isHi
                ? 'अपने वाहन श्रेणियों, बायोमेट्रिक प्राथमिकताओं और शारीरिक फिटनेस स्व-घोषणा की पुष्टि करें।'
                : 'Confirm your vehicle classes, biometric preferences, and physical fitness self-declaration.'}
            </p>

            <div style={{ backgroundColor: 'var(--color-bg-page)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)', marginBottom: 'var(--space-24)' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
                {isHi ? 'नवीनीकृत की जाने वाली वाहन श्रेणियां:' : 'Vehicle Classes to be Renewed:'}
              </h4>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <span className="gov-badge gov-badge-info">{isHi ? 'मोटरसाइकिल गियर सहित (MCWG)' : 'Motorcycle with Gear (MCWG)'}</span>
                <span className="gov-badge gov-badge-info">{isHi ? 'हल्का मोटर वाहन (LMV / कार)' : 'Light Motor Vehicle (LMV / Car)'}</span>
              </div>
            </div>

            {/* Medical Self-Declaration Form 1 */}
            <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-24)', marginBottom: 'var(--space-24)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '12px' }}>
                {isHi ? 'फॉर्म 1 (शारीरिक स्वास्थ्य घोषणा):' : 'Form 1 (Physical Fitness Declaration):'}
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

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
            STEP 4: DOCUMENTS UPLOAD
            ================================================================== */}
        {currentStep === 4 && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'चरण 4: आवश्यक दस्तावेज अपलोड करें' : 'Step 4: Upload Required Documents'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
              {isHi
                ? 'निर्धारित वैधानिक प्रपत्रों की स्पष्ट स्कैन की गई प्रतियां या फोटो अपलोड करें। अधिकतम फ़ाइल आकार प्रति दस्तावेज़ 2MB।'
                : 'Upload clear scanned copies or photos of the required statutory forms. Maximum file size 2MB per document.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: 'var(--space-24)' }}>
              <FileUpload
                label={isHi ? 'मौजूदा ड्राइविंग लाइसेंस / आरसी कार्ड (आगे एवं पीछे)' : 'Existing Driving Licence / RC Card (Front & Back)'}
                required
                helperText={isHi ? 'मूल स्मार्ट कार्ड छवि अपलोड करें (PDF / JPG)' : 'Upload original smart card image (PDF / JPG)'}
              />

              <FileUpload
                label={isHi ? 'फॉर्म 1A मेडिकल सर्टिफिकेट' : 'Form 1A Medical Certificate'}
                required
                helperText={isHi ? 'पंजीकृत चिकित्सक द्वारा हस्ताक्षरित एवं मुहरबंद (40+ आयु के लिए)' : 'Signed and stamped by Registered Medical Doctor (for age 40+)'}
              />

              <FileUpload
                label={isHi ? 'वर्तमान पते का प्रमाण' : 'Proof of Present Address'}
                helperText={isHi ? 'आधार / पासपोर्ट / बिजली बिल (यदि आधार ई-केवाईसी उपयोग किया गया है तो वैकल्पिक)' : 'Aadhaar / Passport / Utility Bill (Optional if Aadhaar e-KYC used)'}
              />
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
            STEP 5: REVIEW & FINAL CONFIRMATION
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
              <table>
                <tbody>
                  <tr>
                    <th style={{ width: '35%' }}>{isHi ? 'आवेदक का नाम' : 'Applicant Name'}</th>
                    <td><strong>{isHi ? 'राजेश कुमार शर्मा' : 'RAJESH KUMAR SHARMA'}</strong></td>
                  </tr>
                  <tr>
                    <th>{isHi ? 'आवेदित सेवा' : 'Service Applied'}</th>
                    <td><strong>{isHi ? service.titleHi : service.title}</strong></td>
                  </tr>
                  <tr>
                    <th>{isHi ? 'लाइसेंस / वाहन संख्या' : 'Licence / Vehicle Number'}</th>
                    <td>{identifierNo}</td>
                  </tr>
                  <tr>
                    <th>{isHi ? 'संबंधित आरटीओ' : 'Jurisdiction RTO'}</th>
                    <td>{rtoCode} — {currentState.name}</td>
                  </tr>
                  <tr>
                    <th>{isHi ? 'प्रमाणीकरण विधि' : 'Authentication Mode'}</th>
                    <td><Badge variant="success">{isHi ? 'आधार ई-केवाईसी सत्यापित' : 'Aadhaar e-KYC Verified'}</Badge></td>
                  </tr>
                  <tr>
                    <th>{isHi ? 'अपलोड किए गए दस्तावेज' : 'Uploaded Documents'}</th>
                    <td>
                      {isHi
                        ? 'मौजूदा डीएल प्रति (सत्यापित), फॉर्म 1A मेडिकल सर्टिफिकेट (संलग्न)'
                        : 'Existing DL Copy (Verified), Form 1A Medical Certificate (Attached)'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Fee Summary Box */}
            <div style={{ backgroundColor: 'var(--color-brand-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16) var(--space-24)', border: '1px solid #B6D4FE', marginBottom: 'var(--space-24)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                    {isHi ? 'कुल देय राशि:' : 'Total Amount to Pay:'}
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-brand-primary)' }}>
                    ₹{totalFee.toLocaleString('en-IN')}
                  </div>
                </div>
                <Badge variant="info">{isHi ? 'स्मार्ट कार्ड एवं स्पीड पोस्ट शुल्क शामिल' : 'Includes Smart Card & Speed Post'}</Badge>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="ghost" onClick={handlePrevStep} icon={<ArrowLeft size={16} />}>
                {isHi ? 'पीछे' : 'Back'}
              </Button>
              <Button variant="saffron" onClick={handleNextStep} loading={loading} icon={<CreditCard size={16} />}>
                {isHi ? `भुगतान के लिए आगे बढ़ें (₹${totalFee})` : `Proceed to Payment (₹${totalFee})`}
              </Button>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 6: PAYMENT GATEWAY SIMULATION
            ================================================================== */}
        {currentStep === 6 && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
              {isHi ? 'चरण 6: सरकारी शुल्क भुगतान' : 'Step 6: Government Fee Payment'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
              {isHi
                ? 'आधिकारिक गैर-कर रसीद पोर्टल (एनटीआरपी / भारतकोश पेमेंट गेटवे)।'
                : 'Official Non-Tax Receipt Portal (NTRP / Bharatkosh Gateway).'}
            </p>

            <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-24)', marginBottom: 'var(--space-24)' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '12px' }}>
                {isHi ? 'भुगतान विधि चुनें:' : 'Select Payment Mode:'}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', backgroundColor: paymentGateway === 'BHARATKOSH' ? 'var(--color-brand-subtle)' : 'transparent' }}>
                  <input type="radio" name="gateway" checked={paymentGateway === 'BHARATKOSH'} onChange={() => setPaymentGateway('BHARATKOSH')} style={{ accentColor: 'var(--color-brand-primary)' }} />
                  <div>
                    <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>
                      {isHi ? 'भारतकोश / एसबीआई ई-पे (यूपीआई, कार्ड, नेट बैंकिंग)' : 'Bharatkosh / SBI ePay (UPI, Cards, Net Banking)'}
                    </strong>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                      {isHi ? 'भारत सरकार का आधिकारिक राजकोषीय गेटवे (शून्य सुविधा शुल्क)' : 'Official Government of India Treasury Gateway (Zero convenience fee)'}
                    </div>
                  </div>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', backgroundColor: paymentGateway === 'PAYGOV' ? 'var(--color-brand-subtle)' : 'transparent' }}>
                  <input type="radio" name="gateway" checked={paymentGateway === 'PAYGOV'} onChange={() => setPaymentGateway('PAYGOV')} style={{ accentColor: 'var(--color-brand-primary)' }} />
                  <div>
                    <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>
                      {isHi ? 'पे-गव इंडिया गेटवे' : 'PayGov India Gateway'}
                    </strong>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                      {isHi ? 'एनआईसी द्वारा राष्ट्रीय भुगतान गेटवे' : 'National Payment Gateway by NIC'}
                    </div>
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
                icon={<ShieldCheck size={18} />}
              >
                {paymentProcessing
                  ? (isHi ? 'लेनदेन संसाधित हो रहा है...' : 'Processing Transaction...')
                  : (isHi ? `₹${totalFee} का सुरक्षित भुगतान करें` : `Pay ₹${totalFee} Securely`)}
              </Button>
            </div>
          </div>
        )}

        {/* ==================================================================
            STEP 7: APPLICATION SUBMITTED SUCCESS STATE
            ================================================================== */}
        {currentStep === 7 && (
          <div style={{ textAlign: 'center' }}>
            <CheckCircle2 size={64} color="var(--color-semantic-success)" style={{ margin: '0 auto var(--space-16)' }} />

            <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'आवेदन सफलतापूर्वक जमा हो गया!' : 'Application Submitted Successfully!'}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', maxWidth: '540px', margin: '0 auto var(--space-24)' }}>
              {isHi
                ? `आपका आवेदन प्राप्त हो गया है और ${currentState.name} परिवहन विभाग में पंजीकृत है।`
                : `Your application has been received and registered at ${currentState.name} Transport Department.`}
            </p>

            {/* Generated Identifiers Card */}
            <div
              style={{
                backgroundColor: 'var(--color-brand-subtle)',
                border: '1px solid #B6D4FE',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-24)',
                maxWidth: '520px',
                margin: '0 auto var(--space-24)',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: '1px solid rgba(0,72,127,0.1)' }}>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>{isHi ? 'आवेदन संख्या:' : 'Application Number:'}</span>
                <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-brand-primary)' }}>{generatedAppId}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(0,72,127,0.1)' }}>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>{isHi ? 'लेनदेन संदर्भ:' : 'Transaction Reference:'}</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)' }}>{generatedTxnId}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(0,72,127,0.1)' }}>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>{isHi ? 'भुगतान की गई राशि:' : 'Amount Paid:'}</span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-semantic-success)' }}>₹{totalFee} ({isHi ? 'सफल' : 'Success'})</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>{isHi ? 'अनुमानित डिलीवरी:' : 'Estimated Delivery:'}</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)' }}>{isHi ? '7–10 कार्य दिवस (स्पीड पोस्ट)' : '7–10 Working Days (Speed Post)'}</span>
              </div>
            </div>

            {/* Next Steps Timeline Roadmap */}
            <div style={{ backgroundColor: 'var(--color-bg-page)', borderRadius: 'var(--radius-md)', padding: 'var(--space-16)', maxWidth: '520px', margin: '0 auto var(--space-24)', textAlign: 'left', border: '1px solid var(--color-border-light)' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
                {isHi ? 'आगे क्या प्रक्रिया होगी?' : 'What Happens Next?'}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>{isHi ? '1. आरटीओ संवीक्षा अधिकारी फॉर्म 1A मेडिकल फिटनेस प्रमाण पत्र का सत्यापन करेंगे।' : '1. RTO Scrutiny Officer verifies Form 1A medical fitness certificate.'}</li>
                <li>{isHi ? '2. मोटर लाइसेंसिंग अधिकारी (MLO) इलेक्ट्रॉनिक मंजूरी प्रदान करेंगे।' : '2. Motor Licensing Officer (MLO) grants electronic approval.'}</li>
                <li>{isHi ? '3. स्मार्ट कार्ड मुद्रित किया जाएगा और भारतीय डाक द्वारा आपके पंजीकृत पते पर भेजा जाएगा।' : '3. Smart Card is printed and dispatched to your registered address via India Post.'}</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Button
                variant="outline"
                onClick={() => alert(`Downloading official PDF payment receipt for ${generatedAppId}`)}
                icon={<Download size={16} />}
              >
                {isHi ? 'रसीद डाउनलोड करें (PDF)' : 'Download Receipt (PDF)'}
              </Button>

              <Button
                variant="primary"
                onClick={() => onNavigate('/track')}
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                {isHi ? 'आवेदन लाइव ट्रैक करें' : 'Track Live Application'}
              </Button>

              <Button
                variant="secondary"
                onClick={() => onNavigate('/my-parivahan')}
              >
                {isHi ? 'मेरा परिवहन पर जाएं' : 'Go to My Parivahan'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
