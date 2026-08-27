import React, { useState } from 'react';
import {
  Briefcase, Car, Truck, FileText, CheckCircle2, Shield,
  ArrowRight, Award, Wrench, Building, ExternalLink, Download,
  Search, RefreshCw, AlertTriangle, Check, Sparkles, Printer,
  Cpu, Zap, Gauge, FileCheck, HelpCircle
} from 'lucide-react';
import { Language } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface BusinessPortalPageProps {
  subSlug?: string;
  onNavigate: (path: string) => void;
  language: Language;
}

type ModalType =
  | 'dealer-auth'
  | 'trade-certs'
  | 'dpr-workspace'
  | 'homologation'
  | 'spec-matrix'
  | 'file-recall'
  | 'vltd-management'
  | 'sld-register'
  | 'retrofit-approval'
  | 'scrappage-intake'
  | 'rvsf-registration'
  | null;

export const BusinessPortalPage: React.FC<BusinessPortalPageProps> = ({ subSlug, onNavigate, language }) => {
  const isHi = language === 'hi';
  const [activeCategory, setActiveCategory] = useState<'dealer' | 'oem' | 'testing' | 'scrapping'>('dealer');
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [submittedResult, setSubmittedResult] = useState<any | null>(null);

  React.useEffect(() => {
    if (!subSlug) return;
    if (subSlug === 'dealer-authorization-certificate') {
      setActiveCategory('dealer');
      setActiveModal('dealer-auth');
    } else if (subSlug === 'trade-certificate') {
      setActiveCategory('dealer');
      setActiveModal('trade-certs');
    } else if (subSlug === 'homologation') {
      setActiveCategory('oem');
      setActiveModal('homologation');
    } else if (subSlug === 'vltd-maker') {
      setActiveCategory('testing');
      setActiveModal('vltd-management');
    } else if (subSlug === 'sld-maker') {
      setActiveCategory('testing');
      setActiveModal('sld-register');
    } else if (subSlug === 'cng-maker') {
      setActiveCategory('testing');
      setActiveModal('retrofit-approval');
    }
  }, [subSlug]);

  // Form States for interactive modals
  // 1. Dealer Auth
  const [dealerForm, setDealerForm] = useState({
    name: 'Apex Motor Corp Dealership',
    oem: 'Tata Motors',
    state: 'DL',
    gstin: '07AAAAA0000A1Z5',
    category: '4W',
    rto: 'DL-01 North Delhi (Mall Road)'
  });

  // 2. Trade Cert
  const [tradeCertSearch, setTradeCertSearch] = useState('DL-01-TC-8841');
  const [tradeCertPlates, setTradeCertPlates] = useState(12);

  // 3. DPR Workspace
  const [dprForm, setDprForm] = useState({
    chassis: 'MAT622194P123490',
    engine: 'K12N8823194',
    model: 'Maruti Suzuki Swift ZXi+ DualJet',
    buyerName: 'Aarav Sharma',
    buyerAadhaar: '9842 **** 1120',
    rto: 'DL-04 Janakpuri RTO',
    exShowroom: 820000
  });

  // 4. Homologation
  const [homologationForm, setHomologationForm] = useState({
    oem: 'Tata Motors Passenger Vehicles',
    model: 'Harrier EV 75kWh Dual Motor',
    category: 'M1 - Passenger Vehicle',
    agency: 'ARAI Pune (Automotive Research Association of India)',
    tacNumber: 'ARAI/TAC/2026/9042'
  });

  // 5. Spec Matrix Search & Filter
  const [specSearch, setSpecSearch] = useState('');
  const [specFuelFilter, setSpecFuelFilter] = useState('ALL');

  const sampleSpecs = [
    { model: 'Tata Nexon EV Max', make: 'Tata Motors', fuel: 'Electric (EV)', power: '105 kW (143 PS)', battery: '40.5 kWh', gvw: '1780 kg', seating: '5 Seater', bs: 'Zero Emission' },
    { model: 'Mahindra XUV700 AX7L', make: 'Mahindra', fuel: 'Diesel', power: '136 kW (185 PS)', battery: 'N/A', gvw: '2280 kg', seating: '7 Seater', bs: 'BS-VI Stage 2' },
    { model: 'Maruti Suzuki Brezza ZXi', make: 'Maruti Suzuki', fuel: 'CNG / Petrol', power: '76 kW (103 PS)', battery: 'N/A', gvw: '1640 kg', seating: '5 Seater', bs: 'BS-VI Stage 2' },
    { model: 'Hyundai Ioniq 5', make: 'Hyundai', fuel: 'Electric (EV)', power: '160 kW (217 PS)', battery: '72.6 kWh', gvw: '2430 kg', seating: '5 Seater', bs: 'Zero Emission' },
    { model: 'Ashok Leyland Dost+', make: 'Ashok Leyland', fuel: 'Diesel', power: '51 kW (70 PS)', battery: 'N/A', gvw: '2805 kg', seating: '2 Seater (LCV)', bs: 'BS-VI Stage 2' }
  ];

  const filteredSpecs = sampleSpecs.filter(s => {
    const matchSearch = s.model.toLowerCase().includes(specSearch.toLowerCase()) || s.make.toLowerCase().includes(specSearch.toLowerCase());
    const matchFuel = specFuelFilter === 'ALL' || (specFuelFilter === 'EV' && s.fuel.includes('Electric')) || (specFuelFilter === 'CNG' && s.fuel.includes('CNG')) || (specFuelFilter === 'Diesel' && s.fuel.includes('Diesel'));
    return matchSearch && matchFuel;
  });

  // 6. Voluntary Recall
  const [recallForm, setRecallForm] = useState({
    oem: 'Mahindra & Mahindra Ltd',
    model: 'Scorpio-N (Z8 & Z8L Variants)',
    defect: 'Inspection and re-torquing of steering column tie-rod assembly bolt',
    affectedUnits: '14,250 Units',
    dateRange: 'Jan 2025 – Nov 2025',
    actionPlan: 'Free inspection and replacement at authorized dealerships within 48 hours.'
  });

  // 7. VLTD Testing
  const [vltdForm, setVltdForm] = useState({
    maker: 'Minda Telematics Solutions Ltd',
    model: 'MT-AIS140-Pro G4',
    tac: 'ICAT/AIS140/2026/8819',
    ip: '164.100.78.22',
    port: '9000'
  });
  const [pingStatus, setPingStatus] = useState<'idle' | 'testing' | 'success'>('idle');

  // 8. SLD Register
  const [sldForm, setSldForm] = useState({
    brand: 'Rosmerta SpeedSafe 80',
    serial: 'SLD-2026-90412',
    vehicleReg: 'DL-1GC-4921 (Tata Prima 4028)',
    speedLimit: '80 km/h',
    calibrationAgency: 'Central Motor Research Lab'
  });

  // 9. Retrofit Form
  const [retrofitForm, setRetrofitForm] = useState({
    workshop: 'GreenDrive Eco-Kits & Retrofitters',
    rtoLicense: 'DL-RTO-RETRO-442',
    vehicleReg: 'DL-3CAB-1029',
    conversionType: 'Sequential CNG Kit (BS-VI Approved)',
    kitBrand: 'Lovato Smart Ex BS6'
  });

  // 10. Scrappage Intake
  const [scrappageSearch, setScrappageSearch] = useState('DL-2CA-4819');
  const [scrappedVehicle, setScrappedVehicle] = useState({
    reg: 'DL-2CA-4819',
    owner: 'Rameshwar Lal',
    model: 'Maruti 800 DX (2006 Model)',
    weightKg: 850,
    metalRate: 38,
    calculatedPayout: 32300,
    status: 'End-of-Life Vehicle (19.5 Years)'
  });

  // 11. RVSF Setup Application
  const [rvsfForm, setRvsfForm] = useState({
    facilityName: 'National EcoRecycle RVSF Center LLP',
    state: 'Haryana',
    district: 'Gurugram (Manesar Industrial Area)',
    landArea: '6.5 Acres',
    pollutionConsent: 'HSPCB/CTE/2026/5129',
    annualCapacity: '25,000 Vehicles/Year'
  });

  const handleOpenModal = (type: ModalType) => {
    setActiveModal(type);
    setSubmittedResult(null);
    setPingStatus('idle');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setSubmittedResult(null);
  };

  return (
    <div className="gov-container py-32" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'व्यवसाय एवं उद्योग' : 'Business & Industry Portal' }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div
        style={{
          backgroundColor: 'var(--color-brand-dark)',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-32)',
          marginBottom: 'var(--space-32)',
          borderBottom: '4px solid var(--color-accent-saffron)'
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-12)' }}>
            <span className="gov-badge gov-badge-saffron">
              {isHi ? 'वाणिज्यिक एवं उद्योग गेटवे' : 'Commercial & Industry Gateway'}
            </span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
              {isHi ? 'सड़क परिवहन एवं राजमार्ग मंत्रालय उद्योग सेवाएं' : 'MoRTH Industry Services'}
            </span>
          </div>

          <h1 style={{ fontSize: '30px', fontWeight: 800, color: '#FFFFFF', marginBottom: 'var(--space-12)' }}>
            {isHi ? 'परिवहन व्यवसाय एवं उद्योग पोर्टल' : 'Parivahan Business & Industry Workspace'}
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
            {isHi
              ? 'ऑटोमोबाइल डीलरशिप, वाहन विनिर्माता (OEM), परीक्षण एजेंसियों, रेट्रोफिटर और पंजीकृत स्क्रैपिंग केंद्रों के लिए समर्पित डिजिटल सेवाएं।'
              : 'Dedicated digital services for Automobile Dealerships, Vehicle Manufacturers (OEMs), Component Testing Agencies, Retrofitters, and Registered Scrapping Facilities.'}
          </p>
        </div>
      </div>

      {/* Segment Tabs */}
      <div style={{ display: 'flex', gap: '8px', borderBottom: '2px solid var(--color-border-light)', marginBottom: 'var(--space-24)', overflowX: 'auto' }}>
        <button
          onClick={() => setActiveCategory('dealer')}
          style={{
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 600,
            color: activeCategory === 'dealer' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
            borderBottom: activeCategory === 'dealer' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
            marginBottom: '-2px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          {isHi ? 'ऑटोमोबाइल डीलर एवं व्यापार प्रमाण पत्र' : 'Automobile Dealers & Trade Certificates'}
        </button>
        <button
          onClick={() => setActiveCategory('oem')}
          style={{
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 600,
            color: activeCategory === 'oem' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
            borderBottom: activeCategory === 'oem' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
            marginBottom: '-2px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          {isHi ? 'वाहन निर्माता एवं होमोलोगेशन' : 'Manufacturers & Homologation'}
        </button>
        <button
          onClick={() => setActiveCategory('testing')}
          style={{
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 600,
            color: activeCategory === 'testing' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
            borderBottom: activeCategory === 'testing' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
            marginBottom: '-2px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          {isHi ? 'वीएलटीडी, एसएलडी एवं रेट्रोफिटिंग' : 'VLTD, SLD & CNG Retrofitting'}
        </button>
        <button
          onClick={() => setActiveCategory('scrapping')}
          style={{
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 600,
            color: activeCategory === 'scrapping' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
            borderBottom: activeCategory === 'scrapping' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
            marginBottom: '-2px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          {isHi ? 'आरवीएसएफ स्क्रैपेज संचालक' : 'RVSF Scrappage Operators'}
        </button>
      </div>

      {/* Segment 1: Automobile Dealers */}
      {activeCategory === 'dealer' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <Card style={{ padding: 'var(--space-24)' }}>
            <Badge variant="info" style={{ marginBottom: '8px' }}>
              {isHi ? 'डीलर पंजीकरण' : 'Dealer Registration'}
            </Badge>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'डीलर प्राधिकरण प्रमाण पत्र' : 'Dealer Authorization Certificate'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi ? 'राज्य आरटीओ के साथ नए ऑटोमोबाइल डीलर पंजीकरण या डीलरशिप प्राधिकरण कोड के नवीनीकरण हेतु आवेदन करें।' : 'Apply for new automobile dealer registration or renew dealership authorization code with State RTOs.'}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleOpenModal('dealer-auth')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'प्रमाण पत्र आवेदन' : 'Apply Certificate'}
            </Button>
          </Card>

          <Card style={{ padding: 'var(--space-24)' }}>
            <Badge variant="info" style={{ marginBottom: '8px' }}>
              {isHi ? 'ट्रेड मार्क' : 'Trade Mark'}
            </Badge>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'व्यापार प्रमाण पत्र एवं नवीनीकरण' : 'Trade Certificate & Renewal'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi ? 'अपंजीकृत वाहनों के प्रदर्शन और पारगमन हेतु डीलर व्यापार प्रमाण पत्र जारी व नवीनीकृत करें।' : 'Issue and renew dealer trade certificates for demonstration and transit of unregistered vehicles.'}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleOpenModal('trade-certs')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'प्रमाण पत्र प्रबंधित करें' : 'Manage Trade Certs'}
            </Button>
          </Card>

          <Card style={{ padding: 'var(--space-24)' }}>
            <Badge variant="success" style={{ marginBottom: '8px' }}>
              {isHi ? 'फॉर्म 20 प्रणाली' : 'Form 20 System'}
            </Badge>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'डीलर पॉइंट पंजीकरण (DPR)' : 'Dealer Point Registration (DPR)'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi ? 'बिक्री के बिंदु पर प्रत्यक्ष ऑनलाइन स्थायी वाहन पंजीकरण एवं नंबर प्लेट आवंटन।' : 'Direct online permanent vehicle registration and number plate allocation at point of sale.'}
            </p>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleOpenModal('dpr-workspace')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'डीपीआर वर्कस्पेस खोलें' : 'Open DPR Workspace'}
            </Button>
          </Card>
        </div>
      )}

      {/* Segment 2: Manufacturers & Homologation */}
      {activeCategory === 'oem' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <Card style={{ padding: 'var(--space-24)' }}>
            <Badge variant="info" style={{ marginBottom: '8px' }}>
              {isHi ? 'टाइप अनुमोदन' : 'Type Approval'}
            </Badge>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'होमोलोगेशन पोर्टल (फॉर्म 22)' : 'Homologation Portal (Form 22)'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi ? 'वाहन मॉडल अनुमोदन हेतु ARAI, ICAT और CIRT से परीक्षण एजेंसी अनुपालन प्रमाणपत्र अपलोड करें।' : 'Upload test agency compliance certificates from ARAI, ICAT, and CIRT for vehicle model approval.'}
            </p>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleOpenModal('homologation')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'होमोलोगेशन अपलोड करें' : 'Upload Homologation'}
            </Button>
          </Card>

          <Card style={{ padding: 'var(--space-24)' }}>
            <Badge variant="neutral" style={{ marginBottom: '8px' }}>
              {isHi ? 'विशिष्टता रजिस्ट्री' : 'Spec Registry'}
            </Badge>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'मूल वाहन विशिष्टता मैट्रिक्स' : 'Base Vehicle Specification Matrix'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi ? 'वाहन सेंट्रल मास्टर में तकनीकी इंजन, बैठने की क्षमता, ईंधन उत्सर्जन और एक्सल वजन विनिर्देश प्रबंधित करें।' : 'Manage technical engine, seating, fuel emission, and axle weight specifications in Vahan central master.'}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleOpenModal('spec-matrix')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'मैट्रिक्स देखें' : 'View Matrix'}
            </Button>
          </Card>

          <Card style={{ padding: 'var(--space-24)' }}>
            <Badge variant="warning" style={{ marginBottom: '8px' }}>
              {isHi ? 'वापसी पोर्टल' : 'Recall Portal'}
            </Badge>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'स्वैच्छिक वाहन वापसी रजिस्टर' : 'Voluntary Vehicle Recall Register'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi ? 'मोटर वाहन अधिनियम की धारा 110A के तहत स्वैच्छिक निर्माता रिकॉल नोटिस जमा करें।' : 'Submit voluntary manufacturer recall notices under Section 110A of the Motor Vehicles Act.'}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleOpenModal('file-recall')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'रिकॉल नोटिस दर्ज करें' : 'File Recall Notice'}
            </Button>
          </Card>
        </div>
      )}

      {/* Segment 3: Testing Agencies & Retrofitters */}
      {activeCategory === 'testing' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <Card style={{ padding: 'var(--space-24)' }}>
            <Badge variant="info" style={{ marginBottom: '8px' }}>AIS 140</Badge>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'वीएलटीडी उपकरण निर्माता पंजीकरण' : 'VLTD Device Maker Registration'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi ? 'वाहन स्थान ट्रैकिंग डिवाइस निर्माता ऑनबोर्डिंग और बैकएंड सर्वर प्रमाणन।' : 'Vehicle Location Tracking Device manufacturer onboarding and backend server certification.'}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleOpenModal('vltd-management')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'वीएलटीडी प्रबंधन' : 'VLTD Management'}
            </Button>
          </Card>

          <Card style={{ padding: 'var(--space-24)' }}>
            <Badge variant="info" style={{ marginBottom: '8px' }}>
              {isHi ? 'नियम 118' : 'Rule 118'}
            </Badge>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'गति सीमक उपकरण (SLD) निर्माता' : 'Speed Limiting Device (SLD) Maker'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi ? 'वाणिज्यिक परिवहन बेड़े के लिए एसएलडी प्रकार अनुमोदन एवं अंशांकन परीक्षण रिपोर्ट पंजीकृत करें।' : 'Register SLD type approvals and calibration test reports for commercial transport vehicle fleets.'}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleOpenModal('sld-register')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'एसएलडी रजिस्टर' : 'SLD Register'}
            </Button>
          </Card>

          <Card style={{ padding: 'var(--space-24)' }}>
            <Badge variant="success" style={{ marginBottom: '8px' }}>
              {isHi ? 'स्वच्छ ईंधन' : 'Clean Fuel'}
            </Badge>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'सीएनजी / ईवी रेट्रोफिटिंग कार्यशाला' : 'CNG / EV Retrofitting Workshop'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi ? 'सीएनजी ईंधन किट और इलेक्ट्रिक रूपांतरण पावरट्रेन के लिए मान्यता प्राप्त रेट्रोफिटिंग केंद्रों का प्राधिकरण।' : 'Authorization for accredited retrofitting centers for CNG fuel kits and electric conversion powertrains.'}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleOpenModal('retrofit-approval')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'रेट्रोफिट अनुमोदन' : 'Retrofit Approval'}
            </Button>
          </Card>
        </div>
      )}

      {/* Segment 4: RVSF Scrappage Operators */}
      {activeCategory === 'scrapping' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <Card style={{ padding: 'var(--space-24)' }}>
            <Badge variant="success" style={{ marginBottom: '8px' }}>
              {isHi ? 'आरवीएसएफ संचालक' : 'RVSF Operator'}
            </Badge>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'स्क्रैपेज इनटेक एवं सीओडी जारी करना' : 'Scrappage Intake & COD Issuance'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi ? 'पुराने वाहनों का इनटेक दर्ज करें, स्वचालित आरसी रद्दीकरण शुरू करें और डिजिटल सीओडी जारी करें।' : 'Record intake of end-of-life vehicles, initiate automated RC deregistration, and issue digital CODs.'}
            </p>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleOpenModal('scrappage-intake')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'ऑपरेटर हब खोलें' : 'Open Operator Hub'}
            </Button>
          </Card>

          <Card style={{ padding: 'var(--space-24)' }}>
            <Badge variant="info" style={{ marginBottom: '8px' }}>
              {isHi ? 'आरवीएसएफ स्थापना' : 'RVSF Setup'}
            </Badge>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {isHi ? 'नई आरवीएसएफ प्राधिकरण हेतु आवेदन' : 'Apply for New RVSF Authorization'}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
              {isHi ? 'अधिकृत सुविधा स्थापित करने के लिए राज्य परिवहन विभाग को एकल-खिड़की आवेदन प्रस्तुत करें।' : 'Submit single-window application to State Transport Department for setting up an authorized facility.'}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleOpenModal('rvsf-registration')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'आरवीएसएफ पंजीकरण' : 'RVSF Registration'}
            </Button>
          </Card>
        </div>
      )}

      {/* =========================================================================
          INTERACTIVE MODALS FOR ALL BUSINESS WORKSPACES (PROPERLY SPACED)
         ========================================================================= */}

      {/* 1. Dealer Authorization Certificate Modal */}
      <Modal
        isOpen={activeModal === 'dealer-auth'}
        onClose={handleCloseModal}
        title="Apply for Dealer Authorization Certificate"
        subtitle="Form 19 - Application for Dealership Registration under Central Motor Vehicles Rules"
        maxWidth="680px"
      >
        {submittedResult ? (
          <div style={{ textAlign: 'center', padding: '16px 8px' }}>
            <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-semantic-success-subtle)', color: 'var(--color-semantic-success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle2 size={34} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: '0 0 10px' }}>
              Application Successfully Registered!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '28px', lineHeight: 1.5 }}>
              Your application has been assigned to the Zonal Transport Officer for physical facility inspection.
            </p>

            <div style={{
              backgroundColor: 'var(--color-bg-page)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '24px 28px',
              textAlign: 'left',
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Application Ref No:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{submittedResult.refNo}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Dealership Name:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{dealerForm.name}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Authorized OEM:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{dealerForm.oem}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Jurisdiction:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{dealerForm.rto}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
              <Button variant="primary" onClick={() => alert(`Downloading Acknowledgment Receipt: ${submittedResult.refNo}.pdf`)} icon={<Download size={14} />}>
                Download Form 19 ACK
              </Button>
              <Button variant="outline" onClick={handleCloseModal}>
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmittedResult({ refNo: `DL-AUTH-2026-${Math.floor(10000 + Math.random() * 90000)}` });
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Dealership Enterprise Legal Name</label>
                <input
                  type="text"
                  className="gov-input"
                  value={dealerForm.name}
                  onChange={(e) => setDealerForm({ ...dealerForm, name: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>OEM Affiliation</label>
                  <select
                    className="gov-select"
                    value={dealerForm.oem}
                    onChange={(e) => setDealerForm({ ...dealerForm, oem: e.target.value })}
                  >
                    <option value="Tata Motors">Tata Motors Ltd</option>
                    <option value="Maruti Suzuki">Maruti Suzuki India Ltd</option>
                    <option value="Mahindra">Mahindra &amp; Mahindra</option>
                    <option value="Hyundai">Hyundai Motor India</option>
                    <option value="Hero MotoCorp">Hero MotoCorp (2W)</option>
                    <option value="Ashok Leyland">Ashok Leyland (Commercial)</option>
                  </select>
                </div>

                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Dealership Category</label>
                  <select
                    className="gov-select"
                    value={dealerForm.category}
                    onChange={(e) => setDealerForm({ ...dealerForm, category: e.target.value })}
                  >
                    <option value="4W">Four Wheeler (Passenger Cars)</option>
                    <option value="2W">Two Wheeler (Motorcycles/Scooters)</option>
                    <option value="COMM">Commercial Transport Fleet</option>
                    <option value="EV">Electric Vehicle Exclusive Showroom</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>GSTIN Number</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={dealerForm.gstin}
                    onChange={(e) => setDealerForm({ ...dealerForm, gstin: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>State RTO Authority</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={dealerForm.rto}
                    onChange={(e) => setDealerForm({ ...dealerForm, rto: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--color-bg-surface-secondary)', border: '1px dashed var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px 24px', margin: '6px 0' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>Required Attachments:</div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  ✓ Valid OEM Dealership Principal Agreement<br />
                  ✓ Showroom / Workshop Municipal Fire &amp; Trade License<br />
                  ✓ Authorized Signatory PAN &amp; Aadhaar Card
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', marginTop: '28px', paddingTop: '18px', borderTop: '1px solid var(--color-border-light)' }}>
                <Button variant="outline" type="button" onClick={handleCloseModal}>Cancel</Button>
                <Button variant="primary" type="submit">Submit Dealer Registration</Button>
              </div>
            </div>
          </form>
        )}
      </Modal>

      {/* 2. Trade Certificate Management Modal */}
      <Modal
        isOpen={activeModal === 'trade-certs'}
        onClose={handleCloseModal}
        title="Trade Certificate Management & Allotment"
        subtitle="Manage active dealer demonstration plates & transit validity under Rule 35"
        maxWidth="720px"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <input
              type="text"
              className="gov-input"
              value={tradeCertSearch}
              onChange={(e) => setTradeCertSearch(e.target.value)}
              placeholder="Enter Trade Certificate No (e.g. DL-01-TC-8841)"
              style={{ flex: 1 }}
            />
            <Button variant="outline" onClick={() => alert('Refreshing Trade Certificate records from Central Vahan Registry')}>
              <RefreshCw size={14} /> Refresh
            </Button>
          </div>

          {/* Certificate Detail Card with generous padding */}
          <div style={{ backgroundColor: 'var(--color-bg-page)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '28px 30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
              <div>
                <span className="gov-badge gov-badge-success" style={{ marginBottom: '6px' }}>Active &amp; Valid</span>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: 0 }}>
                  Certificate: {tradeCertSearch}
                </h4>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Valid Through:</span>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-semantic-success)', marginTop: '2px' }}>31-Dec-2026</div>
              </div>
            </div>

            {/* 3 Metrics Cards with guaranteed gap */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '6px' }}>Allotted Trade Plates:</span>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-brand-primary)' }}>{tradeCertPlates} Plates</div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '6px' }}>Class of Vehicles:</span>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>Motor Car (LMV)</div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '6px' }}>Issuing RTO:</span>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>DL-01 Mall Road</div>
              </div>
            </div>

            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '22px 0 12px' }}>
              Registered Trade Plates (Red Background with White Lettering):
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {Array.from({ length: Math.min(tradeCertPlates, 8) }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: '#B91C1C',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '12px',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    letterSpacing: '0.05em'
                  }}
                >
                  DL-01-TC-8841/{i + 1}
                </span>
              ))}
              {tradeCertPlates > 8 && (
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', alignSelf: 'center', fontWeight: 600 }}>
                  +{tradeCertPlates - 8} more
                </span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', borderTop: '1px solid var(--color-border-light)', marginTop: '24px', paddingTop: '20px' }}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setTradeCertPlates(prev => prev + 2);
                  alert('Added 2 additional Trade Plate allotments! Total plates: ' + (tradeCertPlates + 2));
                }}
              >
                + Request 2 More Plates
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => alert(`Downloading Trade Certificate PDF for ${tradeCertSearch}`)}
                icon={<Download size={14} />}
              >
                Download Form 17 (e-TC)
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      {/* 3. Dealer Point Registration (DPR - Form 20) Modal */}
      <Modal
        isOpen={activeModal === 'dpr-workspace'}
        onClose={handleCloseModal}
        title="Dealer Point Registration (DPR Workspace)"
        subtitle="Form 20 - Direct Point-of-Sale Permanent Registration & HSRP Allocation"
        maxWidth="720px"
      >
        {submittedResult ? (
          <div style={{ textAlign: 'center', padding: '16px 8px' }}>
            <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-semantic-success-subtle)', color: 'var(--color-semantic-success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle2 size={34} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: '0 0 10px' }}>
              Vehicle Registration &amp; Number Plate Allocated!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '28px', lineHeight: 1.5 }}>
              Permanent Registration mark assigned and HSRP laser tracking code dispatched to OEM stamping unit.
            </p>

            <div style={{ backgroundColor: 'var(--color-bg-page)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '26px 28px', textAlign: 'left', marginBottom: '32px' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>ALLOTTED REGISTRATION MARK</div>
                <div style={{ display: 'inline-block', backgroundColor: '#FEF08A', border: '2px solid #000', padding: '8px 24px', borderRadius: '6px', fontSize: '22px', fontWeight: 900, color: '#000', marginTop: '8px', letterSpacing: '0.1em' }}>
                  {submittedResult.regNo}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', fontSize: '13px' }}>
                <div><span style={{ color: 'var(--color-text-muted)' }}>Buyer Name:</span> <strong>{dprForm.buyerName}</strong></div>
                <div><span style={{ color: 'var(--color-text-muted)' }}>Vehicle Model:</span> <strong>{dprForm.model}</strong></div>
                <div><span style={{ color: 'var(--color-text-muted)' }}>Chassis Number:</span> <strong>{dprForm.chassis}</strong></div>
                <div><span style={{ color: 'var(--color-text-muted)' }}>Engine Number:</span> <strong>{dprForm.engine}</strong></div>
                <div><span style={{ color: 'var(--color-text-muted)' }}>Road Tax Paid:</span> <strong style={{ color: 'var(--color-semantic-success)' }}>₹65,600 (Paid via DPR)</strong></div>
                <div><span style={{ color: 'var(--color-text-muted)' }}>HSRP Laser ID:</span> <strong>AA20268894109</strong></div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
              <Button variant="primary" onClick={() => alert(`Printing Official Form 20 & Tax Invoice for ${submittedResult.regNo}`)} icon={<Printer size={14} />}>
                Print Form 20 &amp; Temp RC
              </Button>
              <Button variant="outline" onClick={handleCloseModal}>
                Close Workspace
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmittedResult({
                regNo: `DL-04-CB-${Math.floor(1000 + Math.random() * 9000)}`
              });
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Chassis (VIN) Number</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={dprForm.chassis}
                    onChange={(e) => setDprForm({ ...dprForm, chassis: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Engine Number</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={dprForm.engine}
                    onChange={(e) => setDprForm({ ...dprForm, engine: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Vehicle Model &amp; Variant</label>
                <input
                  type="text"
                  className="gov-input"
                  value={dprForm.model}
                  onChange={(e) => setDprForm({ ...dprForm, model: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Purchaser Full Name</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={dprForm.buyerName}
                    onChange={(e) => setDprForm({ ...dprForm, buyerName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Aadhaar e-KYC Verification</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={dprForm.buyerAadhaar}
                    disabled
                    style={{ backgroundColor: 'var(--color-bg-page)' }}
                  />
                </div>
              </div>

              {/* Live Fee Calculator with generous padding */}
              <div style={{ backgroundColor: 'var(--color-bg-surface-secondary)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px 28px', margin: '6px 0' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '14px' }}>
                  Statutory Tax &amp; Fee Breakdown (Delhi NCT Schedule):
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px' }}>
                  <span>State One-Time Road Tax (8% of Ex-Showroom):</span>
                  <strong>₹65,600</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px' }}>
                  <span>Registration Fee (Rule 81) + Smart Card Fee:</span>
                  <strong>₹800</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px' }}>
                  <span>High Security Registration Plates (HSRP Set):</span>
                  <strong>₹850</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 800, borderTop: '1px solid var(--color-border-light)', paddingTop: '12px', marginTop: '6px', color: 'var(--color-brand-primary)' }}>
                  <span>Total Amount Payable:</span>
                  <span>₹67,250</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', marginTop: '28px', paddingTop: '18px', borderTop: '1px solid var(--color-border-light)' }}>
                <Button variant="outline" type="button" onClick={handleCloseModal}>Cancel</Button>
                <Button variant="primary" type="submit">Submit &amp; Allot Number Plate</Button>
              </div>
            </div>
          </form>
        )}
      </Modal>

      {/* 4. Homologation Portal (Form 22) Modal */}
      <Modal
        isOpen={activeModal === 'homologation'}
        onClose={handleCloseModal}
        title="Upload Homologation & Type Approval (Form 22)"
        subtitle="Central Master Sync for Certified Vehicle Models & Sub-assemblies"
        maxWidth="680px"
      >
        {submittedResult ? (
          <div style={{ textAlign: 'center', padding: '16px 8px' }}>
            <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-semantic-success-subtle)', color: 'var(--color-semantic-success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle2 size={34} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: '0 0 10px' }}>
              Homologation Record Synced to Central Vahan!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '28px', lineHeight: 1.5 }}>
              Vehicle type approval certificate verified against testing agency key repository. All RTOs can now register this model.
            </p>

            <div style={{
              backgroundColor: 'var(--color-bg-page)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '24px 28px',
              textAlign: 'left',
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Vahan TAC Master ID:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{submittedResult.tacId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Model Name:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{homologationForm.model}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Accredited Agency:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{homologationForm.agency}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px' }}>
              <Button variant="primary" onClick={handleCloseModal}>Done</Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmittedResult({ tacId: `TAC-IND-2026-${Math.floor(10000 + Math.random() * 90000)}` });
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Manufacturer (OEM) Name</label>
                <input
                  type="text"
                  className="gov-input"
                  value={homologationForm.oem}
                  onChange={(e) => setHomologationForm({ ...homologationForm, oem: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Commercial Model &amp; Variant</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={homologationForm.model}
                    onChange={(e) => setHomologationForm({ ...homologationForm, model: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Vehicle Category</label>
                  <select
                    className="gov-select"
                    value={homologationForm.category}
                    onChange={(e) => setHomologationForm({ ...homologationForm, category: e.target.value })}
                  >
                    <option value="M1 - Passenger Vehicle">M1 - Passenger Vehicle (up to 8 seats)</option>
                    <option value="L2 - Two Wheeler">L2 - Two Wheeler (Motorcycle / EV)</option>
                    <option value="N2 - Commercial Goods">N2 - Commercial Goods Carrier (3.5T - 12T)</option>
                    <option value="M3 - Heavy Passenger">M3 - Heavy Passenger Bus</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Testing &amp; Certification Agency</label>
                  <select
                    className="gov-select"
                    value={homologationForm.agency}
                    onChange={(e) => setHomologationForm({ ...homologationForm, agency: e.target.value })}
                  >
                    <option value="ARAI Pune">ARAI Pune (Automotive Research Association of India)</option>
                    <option value="ICAT Manesar">ICAT Manesar (International Centre for Automotive Technology)</option>
                    <option value="CIRT Pune">CIRT Pune (Central Institute of Road Transport)</option>
                    <option value="VRDE Ahmednagar">VRDE Ahmednagar (Vehicles Research &amp; Dev Est)</option>
                  </select>
                </div>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>TAC Certificate No</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={homologationForm.tacNumber}
                    onChange={(e) => setHomologationForm({ ...homologationForm, tacNumber: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Upload Box with generous padding */}
              <div style={{ border: '2px dashed var(--color-border)', borderRadius: 'var(--radius-md)', padding: '36px 28px', textAlign: 'center', backgroundColor: 'var(--color-bg-page)', margin: '8px 0' }}>
                <FileCheck size={32} color="var(--color-brand-primary)" style={{ margin: '0 auto 12px' }} />
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '6px' }}>Upload Form 22 Type Approval Certificate &amp; Technical Specs (PDF / XML)</div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Digitally signed certificate issued by accredited test agency (Max 15MB)</div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', marginTop: '28px', paddingTop: '18px', borderTop: '1px solid var(--color-border-light)' }}>
                <Button variant="outline" type="button" onClick={handleCloseModal}>Cancel</Button>
                <Button variant="primary" type="submit">Submit to Central Vahan Master</Button>
              </div>
            </div>
          </form>
        )}
      </Modal>

      {/* 5. Base Vehicle Specification Matrix Modal */}
      <Modal
        isOpen={activeModal === 'spec-matrix'}
        onClose={handleCloseModal}
        title="Base Vehicle Specification Matrix (Central Vahan Master)"
        subtitle="Standardized technical parameters, BS-VI emission standards, and powertrain specifications"
        maxWidth="840px"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', minWidth: '280px', flex: 1 }}>
              <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                className="gov-input"
                placeholder="Search model, manufacturer..."
                value={specSearch}
                onChange={(e) => setSpecSearch(e.target.value)}
                style={{ paddingLeft: '34px' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <select
                className="gov-select"
                value={specFuelFilter}
                onChange={(e) => setSpecFuelFilter(e.target.value)}
                style={{ minWidth: '150px' }}
              >
                <option value="ALL">All Fuel Types</option>
                <option value="EV">Electric (EV)</option>
                <option value="CNG">CNG / Hybrid</option>
                <option value="Diesel">Diesel</option>
              </select>
              <Button
                variant="outline"
                size="sm"
                onClick={() => alert('Exporting full 4,500+ Vehicle Spec Matrix in CSV format')}
                icon={<Download size={14} />}
              >
                Export CSV
              </Button>
            </div>
          </div>

          <div style={{ overflowX: 'auto', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-bg-surface-secondary)', borderBottom: '1px solid var(--color-border)' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Model &amp; OEM</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Fuel / Powertrain</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Max Power / Battery</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Gross Weight (GVW)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Emission Standard</th>
                </tr>
              </thead>
              <tbody>
                {filteredSpecs.map((s, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--color-border-light)' }}>
                    <td style={{ padding: '12px 16px' }}>
                      <strong style={{ color: 'var(--color-brand-dark)' }}>{s.model}</strong>
                      <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{s.make}</div>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <span className={`gov-badge ${s.fuel.includes('Electric') ? 'gov-badge-success' : 'gov-badge-info'}`}>
                        {s.fuel}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      {s.power} {s.battery !== 'N/A' && `• ${s.battery}`}
                    </td>
                    <td style={{ padding: '12px 16px' }}>{s.gvw} ({s.seating})</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span className="gov-badge gov-badge-neutral">{s.bs}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>

      {/* 6. Voluntary Vehicle Recall Register Modal */}
      <Modal
        isOpen={activeModal === 'file-recall'}
        onClose={handleCloseModal}
        title="File Voluntary Vehicle Safety Recall"
        subtitle="Mandatory Reporting under Section 110A of the Motor Vehicles (Amendment) Act"
        maxWidth="680px"
      >
        {submittedResult ? (
          <div style={{ textAlign: 'center', padding: '16px 8px' }}>
            <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-semantic-warning-subtle)', color: '#B45309', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <AlertTriangle size={34} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: '0 0 10px' }}>
              Voluntary Recall Notice Published!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '28px', lineHeight: 1.5 }}>
              Recall notice has been lodged in the MoRTH Public Safety Register and dispatched to registered vehicle owners via SMS &amp; Digilocker.
            </p>

            <div style={{
              backgroundColor: 'var(--color-bg-page)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '24px 28px',
              textAlign: 'left',
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>MoRTH Recall Reference:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{submittedResult.recallId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Affected Model:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{recallForm.model}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Total Units:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{recallForm.affectedUnits}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px' }}>
              <Button variant="primary" onClick={handleCloseModal}>Done</Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmittedResult({ recallId: `MoRTH/VR/2026/${Math.floor(1000 + Math.random() * 9000)}` });
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Manufacturer</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={recallForm.oem}
                    onChange={(e) => setRecallForm({ ...recallForm, oem: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Affected Model &amp; Variant</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={recallForm.model}
                    onChange={(e) => setRecallForm({ ...recallForm, model: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Total Affected Production Units</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={recallForm.affectedUnits}
                    onChange={(e) => setRecallForm({ ...recallForm, affectedUnits: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Manufacturing Date Range</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={recallForm.dateRange}
                    onChange={(e) => setRecallForm({ ...recallForm, dateRange: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Safety Defect Description</label>
                <textarea
                  className="gov-input"
                  rows={2}
                  value={recallForm.defect}
                  onChange={(e) => setRecallForm({ ...recallForm, defect: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Customer Remedial Action Plan</label>
                <textarea
                  className="gov-input"
                  rows={2}
                  value={recallForm.actionPlan}
                  onChange={(e) => setRecallForm({ ...recallForm, actionPlan: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', marginTop: '28px', paddingTop: '18px', borderTop: '1px solid var(--color-border-light)' }}>
                <Button variant="outline" type="button" onClick={handleCloseModal}>Cancel</Button>
                <Button variant="primary" type="submit">Publish Recall Notice</Button>
              </div>
            </div>
          </form>
        )}
      </Modal>

      {/* 7. VLTD Device Maker Registration Modal */}
      <Modal
        isOpen={activeModal === 'vltd-management'}
        onClose={handleCloseModal}
        title="AIS 140 VLTD Device Maker Gateway"
        subtitle="Vehicle Location Tracking Device Backend Server Onboarding & Telemetry Health"
        maxWidth="680px"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div>
              <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>VLTD Device Manufacturer</label>
              <input
                type="text"
                className="gov-input"
                value={vltdForm.maker}
                onChange={(e) => setVltdForm({ ...vltdForm, maker: e.target.value })}
              />
            </div>
            <div>
              <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Hardware Model</label>
              <input
                type="text"
                className="gov-input"
                value={vltdForm.model}
                onChange={(e) => setVltdForm({ ...vltdForm, model: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <div>
              <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Primary Telemetry Server IP</label>
              <input
                type="text"
                className="gov-input"
                value={vltdForm.ip}
                onChange={(e) => setVltdForm({ ...vltdForm, ip: e.target.value })}
              />
            </div>
            <div>
              <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Port (UDP / TCP)</label>
              <input
                type="text"
                className="gov-input"
                value={vltdForm.port}
                onChange={(e) => setVltdForm({ ...vltdForm, port: e.target.value })}
              />
            </div>
          </div>

          {/* Realtime Gateway Test with generous padding */}
          <div style={{ backgroundColor: 'var(--color-bg-page)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px 28px', margin: '4px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
                Live Packet &amp; SOS Gateway Ping Test
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setPingStatus('testing');
                  setTimeout(() => setPingStatus('success'), 1200);
                }}
                disabled={pingStatus === 'testing'}
              >
                {pingStatus === 'testing' ? 'Testing Telemetry...' : 'Test Backend Gateway'}
              </Button>
            </div>

            {pingStatus === 'testing' && (
              <div style={{ color: 'var(--color-brand-primary)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 0' }}>
                <RefreshCw size={14} className="spin" /> Sending AIS 140 test packet to {vltdForm.ip}:{vltdForm.port}...
              </div>
            )}

            {pingStatus === 'success' && (
              <div style={{ backgroundColor: 'var(--color-semantic-success-subtle)', padding: '16px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid #BADBCC', marginTop: '10px' }}>
                <div style={{ color: 'var(--color-semantic-success)', fontWeight: 700, fontSize: '13px', marginBottom: '6px' }}>
                  ✓ AIS 140 Gateway Connection Active (Latency: 24ms)
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Header: $AIS140, IMEI: 864219084129481, Lat: 28.6139°N, Lon: 77.2090°E, SOS: Normal, Battery: 98%
                </div>
              </div>
            )}

            {pingStatus === 'idle' && (
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Click "Test Backend Gateway" to verify socket communication and emergency panic button payload parsing.
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', marginTop: '28px', paddingTop: '18px', borderTop: '1px solid var(--color-border-light)' }}>
            <Button variant="outline" onClick={handleCloseModal}>Close</Button>
            <Button
              variant="primary"
              onClick={() => alert(`Backend Authorization Key generated for ${vltdForm.maker}: VAHAN-AIS140-KEY-984210`)}
            >
              Generate Backend Auth Key
            </Button>
          </div>
        </div>
      </Modal>

      {/* 8. SLD Register Modal */}
      <Modal
        isOpen={activeModal === 'sld-register'}
        onClose={handleCloseModal}
        title="Speed Limiting Device (Rule 118) Calibration Portal"
        subtitle="Issue Digital Calibration Certificate for Commercial Transport Vehicles"
        maxWidth="650px"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Digital Calibration Certificate issued for Vehicle ${sldForm.vehicleReg}! Valid for 1 Year.`);
            handleCloseModal();
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>SLD Brand / Model</label>
                <input
                  type="text"
                  className="gov-input"
                  value={sldForm.brand}
                  onChange={(e) => setSldForm({ ...sldForm, brand: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Device Serial Number</label>
                <input
                  type="text"
                  className="gov-input"
                  value={sldForm.serial}
                  onChange={(e) => setSldForm({ ...sldForm, serial: e.target.value })}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Target Vehicle Reg No</label>
                <input
                  type="text"
                  className="gov-input"
                  value={sldForm.vehicleReg}
                  onChange={(e) => setSldForm({ ...sldForm, vehicleReg: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Fixed Speed Cutoff Limit</label>
                <select
                  className="gov-select"
                  value={sldForm.speedLimit}
                  onChange={(e) => setSldForm({ ...sldForm, speedLimit: e.target.value })}
                >
                  <option value="80 km/h">80 km/h (Commercial Goods / Taxi)</option>
                  <option value="60 km/h">60 km/h (School Bus / Hazardous Cargo)</option>
                  <option value="40 km/h">40 km/h (Dumpers / Mining Vehicles)</option>
                </select>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-bg-page)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px 24px', margin: '4px 0' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '6px' }}>
                Calibration Seal &amp; Tamper Proof Verification
              </div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Sealing Wire Serial: <strong>SEAL-2026-9901</strong> • Test Bench Calibration Error: <strong>±0.5% (Within AIS 018 limits)</strong>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', marginTop: '28px', paddingTop: '18px', borderTop: '1px solid var(--color-border-light)' }}>
              <Button variant="outline" type="button" onClick={handleCloseModal}>Cancel</Button>
              <Button variant="primary" type="submit">Issue Calibration Certificate</Button>
            </div>
          </div>
        </form>
      </Modal>

      {/* 9. Retrofit Approval Modal */}
      <Modal
        isOpen={activeModal === 'retrofit-approval'}
        onClose={handleCloseModal}
        title="CNG / EV Retrofitting Workshop Authorization"
        subtitle="Endorse Kit Conversion on Central Vahan Vehicle Registry (Form 22-B)"
        maxWidth="650px"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Fuel type endorsement for ${retrofitForm.vehicleReg} submitted to RTO! Form 22-B Generated.`);
            handleCloseModal();
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Accredited Workshop Name</label>
                <input
                  type="text"
                  className="gov-input"
                  value={retrofitForm.workshop}
                  onChange={(e) => setRetrofitForm({ ...retrofitForm, workshop: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Workshop RTO License No</label>
                <input
                  type="text"
                  className="gov-input"
                  value={retrofitForm.rtoLicense}
                  onChange={(e) => setRetrofitForm({ ...retrofitForm, rtoLicense: e.target.value })}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Vehicle Registration Number</label>
                <input
                  type="text"
                  className="gov-input"
                  value={retrofitForm.vehicleReg}
                  onChange={(e) => setRetrofitForm({ ...retrofitForm, vehicleReg: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Conversion / Kit Type</label>
                <select
                  className="gov-select"
                  value={retrofitForm.conversionType}
                  onChange={(e) => setRetrofitForm({ ...retrofitForm, conversionType: e.target.value })}
                >
                  <option value="Sequential CNG Kit (BS-VI Approved)">Sequential CNG Kit (BS-VI Approved)</option>
                  <option value="EV Powertrain Conversion (Electric)">EV Powertrain Conversion (Electric)</option>
                  <option value="Auto LPG Closed Loop Kit">Auto LPG Closed Loop Kit</option>
                </select>
              </div>
            </div>

            <div>
              <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Type Approved Kit Brand / Serial No</label>
              <input
                type="text"
                className="gov-input"
                value={retrofitForm.kitBrand}
                onChange={(e) => setRetrofitForm({ ...retrofitForm, kitBrand: e.target.value })}
                required
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', marginTop: '28px', paddingTop: '18px', borderTop: '1px solid var(--color-border-light)' }}>
              <Button variant="outline" type="button" onClick={handleCloseModal}>Cancel</Button>
              <Button variant="primary" type="submit">Endorse on Vahan RC</Button>
            </div>
          </div>
        </form>
      </Modal>

      {/* 10. Scrappage Intake & COD Issuance Modal */}
      <Modal
        isOpen={activeModal === 'scrappage-intake'}
        onClose={handleCloseModal}
        title="RVSF Operator Scrappage Intake & COD Issuance"
        subtitle="Automated RC Deregistration & Digital Certificate of Deposit (COD) Generation"
        maxWidth="720px"
      >
        {submittedResult ? (
          <div style={{ textAlign: 'center', padding: '16px 8px' }}>
            <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-semantic-success-subtle)', color: 'var(--color-semantic-success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle2 size={34} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: '0 0 10px' }}>
              Certificate of Deposit (COD) Issued!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '28px', lineHeight: 1.5 }}>
              Vehicle {scrappedVehicle.reg} has been permanently deregistered in Vahan. The digital COD voucher entitles the owner to up to 25% motor vehicle road tax concession.
            </p>

            <div style={{
              backgroundColor: 'var(--color-bg-page)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '24px 28px',
              textAlign: 'left',
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>COD Voucher Token:</span>
                <strong style={{ color: 'var(--color-brand-primary)', fontSize: '15px' }}>{submittedResult.codToken}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Owner Payout Disbursed:</span>
                <strong style={{ color: 'var(--color-semantic-success)', fontSize: '15px' }}>₹{scrappedVehicle.calculatedPayout.toLocaleString('en-IN')}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>RC Status:</span>
                <strong style={{ fontSize: '13px', color: 'var(--color-brand-dark)' }}>CANCELLED (SCRAPPED AT RVSF)</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
              <Button variant="primary" onClick={() => alert(`Downloading Digital COD Certificate: ${submittedResult.codToken}.pdf`)} icon={<Download size={14} />}>
                Download Digital COD
              </Button>
              <Button variant="outline" onClick={handleCloseModal}>Done</Button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '14px' }}>
              <input
                type="text"
                className="gov-input"
                value={scrappageSearch}
                onChange={(e) => setScrappageSearch(e.target.value)}
                placeholder="Enter Vehicle Registration No (e.g. DL-2CA-4819)"
                style={{ flex: 1 }}
              />
              <Button variant="outline" onClick={() => alert('Vehicle records retrieved from Central Vahan!')}>
                Lookup
              </Button>
            </div>

            {/* Scrapped Vehicle Card with generous padding */}
            <div style={{ backgroundColor: 'var(--color-bg-page)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '26px 28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div>
                  <span className="gov-badge gov-badge-warning" style={{ marginBottom: '6px' }}>{scrappedVehicle.status}</span>
                  <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: 0 }}>
                    {scrappedVehicle.reg} • {scrappedVehicle.model}
                  </h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Registered Owner:</span>
                  <div style={{ fontSize: '14px', fontWeight: 700, marginTop: '2px' }}>{scrappedVehicle.owner}</div>
                </div>
              </div>

              {/* 3 Metrics Cards with guaranteed gap */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '16px 0 20px' }}>
                <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>Unladen Weight:</span>
                  <div style={{ fontWeight: 800, fontSize: '15px' }}>{scrappedVehicle.weightKg} kg</div>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>Scrap Metal Rate:</span>
                  <div style={{ fontWeight: 800, fontSize: '15px' }}>₹{scrappedVehicle.metalRate} / kg</div>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'block', marginBottom: '4px' }}>Calculated Scrap Payout:</span>
                  <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--color-semantic-success)' }}>₹{scrappedVehicle.calculatedPayout.toLocaleString('en-IN')}</div>
                </div>
              </div>

              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.6, padding: '12px 16px', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
                ✓ Physical chassis number verified against Vahan master.<br />
                ✓ Hazardous fluid (engine oil, coolant, refrigerant) de-pollution complete.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--color-border-light)' }}>
              <Button variant="outline" onClick={handleCloseModal}>Cancel</Button>
              <Button
                variant="primary"
                onClick={() => {
                  setSubmittedResult({ codToken: `COD-DL-2026-${Math.floor(10000 + Math.random() * 90000)}` });
                }}
              >
                Issue COD &amp; Cancel RC
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* 11. Apply for New RVSF Authorization Modal */}
      <Modal
        isOpen={activeModal === 'rvsf-registration'}
        onClose={handleCloseModal}
        title="Single Window RVSF Facility Authorization"
        subtitle="Establish a Registered Vehicle Scrapping Facility under Motor Vehicles (RVSF) Rules"
        maxWidth="680px"
      >
        {submittedResult ? (
          <div style={{ textAlign: 'center', padding: '16px 8px' }}>
            <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-semantic-success-subtle)', color: 'var(--color-semantic-success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle2 size={34} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: '0 0 10px' }}>
              RVSF Application Submitted!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '28px', lineHeight: 1.5 }}>
              Your application has been routed to the State Transport Authority and State Pollution Control Board for joint technical site audit.
            </p>

            <div style={{
              backgroundColor: 'var(--color-bg-page)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '24px 28px',
              textAlign: 'left',
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Single Window Tracking ID:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{submittedResult.appId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Proposed Location:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{rvsfForm.district}, {rvsfForm.state}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>Facility Area:</span>
                <strong style={{ fontSize: '14px', color: 'var(--color-brand-dark)' }}>{rvsfForm.landArea}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px' }}>
              <Button variant="primary" onClick={handleCloseModal}>Done</Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmittedResult({ appId: `RVSF-APP-2026-${Math.floor(1000 + Math.random() * 9000)}` });
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Proposed RVSF Enterprise Name</label>
                <input
                  type="text"
                  className="gov-input"
                  value={rvsfForm.facilityName}
                  onChange={(e) => setRvsfForm({ ...rvsfForm, facilityName: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>State / Union Territory</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={rvsfForm.state}
                    onChange={(e) => setRvsfForm({ ...rvsfForm, state: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>District &amp; Industrial Area</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={rvsfForm.district}
                    onChange={(e) => setRvsfForm({ ...rvsfForm, district: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Industrial Land Parcel Area</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={rvsfForm.landArea}
                    onChange={(e) => setRvsfForm({ ...rvsfForm, landArea: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="gov-label" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '13px' }}>Pollution Board Consent (CTE)</label>
                  <input
                    type="text"
                    className="gov-input"
                    value={rvsfForm.pollutionConsent}
                    onChange={(e) => setRvsfForm({ ...rvsfForm, pollutionConsent: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', marginTop: '28px', paddingTop: '18px', borderTop: '1px solid var(--color-border-light)' }}>
                <Button variant="outline" type="button" onClick={handleCloseModal}>Cancel</Button>
                <Button variant="primary" type="submit">Submit RVSF Registration</Button>
              </div>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
