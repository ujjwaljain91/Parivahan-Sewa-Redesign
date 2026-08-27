/**
 * PARIVAHAN SEWA — MASTER ONLINE SERVICES FEATURE REGISTRY
 * 
 * Central verified inventory containing all 22 official Online Services.
 * Every item is categorized, assigned an audience, routed to a valid destination,
 * and tracks its underlying government system and operational status.
 */

export type ServiceAudience = 'Citizen' | 'Commercial' | 'Industry' | 'Dealer' | 'Government / Enterprise';
export type ServiceType = 'direct' | 'template' | 'business' | 'external';
export type ServiceStatus = 'implemented' | 'template-backed' | 'system-linked' | 'partial';

export interface FeatureRegistryItem {
  id: string;
  name: string;
  nameHi: string;
  category: 'Driving Licence' | 'Vehicle' | 'Permits & Transport' | 'Compliance & Payments' | 'Registration & Special Services' | 'Business & Industry' | 'National Register';
  subcategory: string;
  subcategoryHi: string;
  audience: ServiceAudience;
  type: ServiceType;
  route: string;
  underlyingSystem: string;
  status: ServiceStatus;
  shortDesc: string;
  shortDescHi: string;
  tags: string[];
  externalUrl?: string;
  iconName: string;
  officialServiceCode?: string;
  statutoryFee?: string;
  estimatedTurnaround?: string;
}

export const masterOnlineServicesInventory: FeatureRegistryItem[] = [
  // --------------------------------------------------------------------------
  // 1. PERMIT / TRANSPORT (3 Entries)
  // --------------------------------------------------------------------------
  {
    id: 'online-all-india-tourist-permit',
    name: 'All India Tourist Permit',
    nameHi: 'अखिल भारतीय पर्यटक परमिट (AITP)',
    category: 'Permits & Transport',
    subcategory: 'Tourist & Passenger Mobility',
    subcategoryHi: 'पर्यटक एवं यात्री गतिशीलता',
    audience: 'Commercial',
    type: 'template',
    route: '/services/all-india-tourist-permit',
    underlyingSystem: 'VAHAN 4.0 AITP Portal',
    status: 'template-backed',
    shortDesc: 'Apply for and download All India Tourist Permit (AITP) and authorization online for seamless interstate tourist passenger vehicle operation.',
    shortDescHi: 'अखिल भारतीय पर्यटक परमिट (AITP) और प्राधिकरण के लिए ऑनलाइन आवेदन करें तथा डाउनलोड करें।',
    tags: ['tourist permit', 'all india tourist permit', 'aitp', 'commercial bus', 'tourist bus', 'passenger permit', 'interstate permit', 'tourist cab'],
    iconName: 'Truck',
    officialServiceCode: 'MORTH-AITP-01',
    statutoryFee: '₹15,000 to ₹25,000 / year (Based on seating)',
    estimatedTurnaround: 'Instant to 24 Hours'
  },
  {
    id: 'online-national-permit-authorization',
    name: 'National Permit Authorization',
    nameHi: 'राष्ट्रीय परमिट प्राधिकरण (Goods Permit)',
    category: 'Permits & Transport',
    subcategory: 'Goods Carrier Mobility',
    subcategoryHi: 'माल वाहक गतिशीलता',
    audience: 'Commercial',
    type: 'template',
    route: '/services/national-permit',
    underlyingSystem: 'VAHAN National Permit Gateway',
    status: 'template-backed',
    shortDesc: 'Online composite national permit authorization for goods carriages operating across India without state border delays.',
    shortDescHi: 'भारत भर में माल वाहक वाहनों के निर्बाध संचालन हेतु राष्ट्रीय परमिट प्राधिकरण ऑनलाइन प्राप्त करें।',
    tags: ['national permit', 'national permit authorization', 'goods permit', 'truck permit', 'commercial carrier', 'form 48', 'national permit fee'],
    iconName: 'Truck',
    officialServiceCode: 'MORTH-NP-02',
    statutoryFee: '₹16,500 + State Authorization',
    estimatedTurnaround: '1–2 Working Days'
  },
  {
    id: 'online-permit-related-services',
    name: 'Permit Related Services',
    nameHi: 'परमिट संबंधित सेवाएं',
    category: 'Permits & Transport',
    subcategory: 'State & Special Permits',
    subcategoryHi: 'राज्य एवं विशेष परमिट',
    audience: 'Commercial',
    type: 'template',
    route: '/services/permit-related-services',
    underlyingSystem: 'VAHAN 4.0 Permits Engine',
    status: 'template-backed',
    shortDesc: 'Comprehensive suite for Stage Carriage, Contract Carriage, Goods, Temporary, and Special Permits issuance and renewal.',
    shortDescHi: 'स्टेज कैरिज, कॉन्ट्रैक्ट कैरिज, माल, अस्थायी एवं विशेष परमिट जारी करने और नवीनीकरण की सेवाएं।',
    tags: ['permit related services', 'permit', 'stage carriage', 'contract carriage', 'temporary permit', 'special permit', 'permit renewal', 'permit surrender'],
    iconName: 'FileCheck',
    officialServiceCode: 'MORTH-PRT-03',
    statutoryFee: 'State Schedule Varies (₹500 - ₹5,000)',
    estimatedTurnaround: '3–7 Working Days'
  },

  // --------------------------------------------------------------------------
  // 2. DRIVING LICENCE (1 Entry)
  // --------------------------------------------------------------------------
  {
    id: 'online-driving-licence-services',
    name: 'Driving Licence Related Services',
    nameHi: 'ड्राइविंग लाइसेंस संबंधित सेवाएं',
    category: 'Driving Licence',
    subcategory: 'Licensing & Testing',
    subcategoryHi: 'लाइसेंसिंग एवं परीक्षण',
    audience: 'Citizen',
    type: 'direct',
    route: '/services/renew-driving-licence',
    underlyingSystem: 'SARATHI 4.0 Central System',
    status: 'implemented',
    shortDesc: 'Faceless and contactless portal for DL Renewal, Learner Licence (LL), Permanent DL, Duplicate DL, International Driving Permit (IDP), and Address Change.',
    shortDescHi: 'ड्राइविंग लाइसेंस नवीनीकरण, लर्नर लाइसेंस, डुप्लीकेट लाइसेंस और आईडीपी हेतु संपर्क रहित डिजिटल सेवा।',
    tags: ['driving licence', 'driving licence related services', 'dl', 'dl renewal', 'learner licence', 'permanent dl', 'duplicate dl', 'idp', 'sarathi', 'driving test'],
    iconName: 'CreditCard',
    officialServiceCode: 'SARATHI-DL-04',
    statutoryFee: '₹200 – ₹1,000',
    estimatedTurnaround: 'Instant (LL) / 7–10 Days (DL)'
  },

  // --------------------------------------------------------------------------
  // 3. VEHICLE (4 Entries)
  // --------------------------------------------------------------------------
  {
    id: 'online-vehicle-related-services',
    name: 'Vehicle Related Services',
    nameHi: 'वाहन संबंधित सेवाएं',
    category: 'Vehicle',
    subcategory: 'Registration & Titling',
    subcategoryHi: 'पंजीकरण एवं स्वामित्व',
    audience: 'Citizen',
    type: 'direct',
    route: '/services/transfer-vehicle-ownership',
    underlyingSystem: 'VAHAN 4.0 Central Registry',
    status: 'implemented',
    shortDesc: 'Complete online workflow for Vehicle Ownership Transfer, Registration (RC) Renewal, NOC, Duplicate RC, Hypothecation Addition/Termination, and Address Update.',
    shortDescHi: 'वाहन स्वामित्व हस्तांतरण, आरसी नवीनीकरण, एनओसी, डुप्लीकेट आरसी और हाइपोथिकेशन समाप्ति की डिजिटल सेवाएं।',
    tags: ['vehicle related services', 'vehicle', 'vahan', 'rc transfer', 'ownership transfer', 'rc renewal', 'duplicate rc', 'noc', 'hypothecation', 'rc smart card'],
    iconName: 'Car',
    officialServiceCode: 'VAHAN-RC-05',
    statutoryFee: '₹150 – ₹1,500',
    estimatedTurnaround: '5–14 Working Days'
  },
  {
    id: 'online-vehicle-fitness-testing',
    name: 'Vehicle Fitness Testing',
    nameHi: 'वाहन फिटनेस परीक्षण (ATS)',
    category: 'Vehicle',
    subcategory: 'Inspection & Roadworthiness',
    subcategoryHi: 'निरीक्षण एवं फिटनेस',
    audience: 'Commercial',
    type: 'template',
    route: '/services/vehicle-fitness-testing',
    underlyingSystem: 'Automated Testing Station (ATS) / VAHAN',
    status: 'template-backed',
    shortDesc: 'Automated test appointment booking, fitness certificate grant, and roadworthiness compliance renewal for transport and non-transport vehicles.',
    shortDescHi: 'स्वचालित परीक्षण स्टेशन (ATS) स्लॉट बुकिंग और फिटनेस प्रमाण पत्र नवीनीकरण।',
    tags: ['fitness', 'vehicle fitness testing', 'fitness test', 'fitness certificate', 'ats', 'automated testing station', 'roadworthiness', 'commercial vehicle fitness'],
    iconName: 'Gauge',
    officialServiceCode: 'VAHAN-FIT-06',
    statutoryFee: '₹600 – ₹1,000',
    estimatedTurnaround: 'Same Day at ATS Center'
  },
  {
    id: 'online-vehicle-recall',
    name: 'Vehicle Recall',
    nameHi: 'वाहन रिकॉल पोर्टल (सुरक्षा दोष)',
    category: 'Vehicle',
    subcategory: 'Safety & Defect Reporting',
    subcategoryHi: 'सुरक्षा एवं दोष रिपोर्टिंग',
    audience: 'Citizen',
    type: 'template',
    route: '/services/vehicle-recall',
    underlyingSystem: 'MoRTH Central Recall Registry',
    status: 'template-backed',
    shortDesc: 'National portal for reporting manufacturing safety defects and checking vehicle recall notices issued by OEMs under Motor Vehicles Amendment Act Section 110A.',
    shortDescHi: 'निर्माताओं द्वारा जारी सुरक्षा रिकॉल नोटिस जांचें अथवा विनिर्माण सुरक्षा दोष रिपोर्ट करें।',
    tags: ['recall', 'vehicle recall', 'safety defect', 'oem recall', 'airbag recall', 'manufacturing defect', 'section 110a'],
    iconName: 'AlertTriangle',
    officialServiceCode: 'MORTH-RCL-07',
    statutoryFee: 'Free of Cost (Citizen Consumer Right)',
    estimatedTurnaround: 'Instant Search & Report'
  },
  {
    id: 'online-trade-certificate',
    name: 'Trade Certificate',
    nameHi: 'व्यापार प्रमाण पत्र (Trade Certificate)',
    category: 'Vehicle',
    subcategory: 'Dealer & Manufacturer Stock',
    subcategoryHi: 'डीलर एवं निर्माता स्टॉक',
    audience: 'Dealer',
    type: 'business',
    route: '/business/trade-certificate',
    underlyingSystem: 'VAHAN 4.0 Trade Module',
    status: 'template-backed',
    shortDesc: 'Issuance and electronic renewal of Trade Certificates (Form 16/17) and trade registration plates for automobile dealers, OEMs, and test agencies.',
    shortDescHi: 'ऑटोमोबाइल डीलरों और निर्माताओं हेतु व्यापार प्रमाण पत्र एवं टीसी नंबर प्लेट का इलेक्ट्रॉनिक आवंटन।',
    tags: ['trade certificate', 'trade cert', 'dealer tc', 'trade plate', 'unregistered vehicle movement', 'form 16', 'dealer plate'],
    iconName: 'Award',
    officialServiceCode: 'VAHAN-TC-08',
    statutoryFee: '₹500 / vehicle category',
    estimatedTurnaround: '3–5 Working Days'
  },

  // --------------------------------------------------------------------------
  // 4. TAX / COMPLIANCE (3 Entries)
  // --------------------------------------------------------------------------
  {
    id: 'online-checkpost-tax',
    name: 'Checkpost Tax',
    nameHi: 'चेकपोस्ट कर भुगतान (Border Tax)',
    category: 'Compliance & Payments',
    subcategory: 'Border Tax & Interstate Movement',
    subcategoryHi: 'सीमा कर एवं अंतर-राज्यीय आवागमन',
    audience: 'Commercial',
    type: 'template',
    route: '/services/checkpost-tax',
    underlyingSystem: 'National Checkpost Tax Portal (Checkpost VAHAN)',
    status: 'system-linked',
    shortDesc: 'Pay border road tax and entry tax online before entering a state boundary for commercial passenger buses, tourist cabs, and goods vehicles.',
    shortDescHi: 'वाणिज्यिक वाहनों हेतु राज्य सीमा में प्रवेश से पूर्व ऑनलाइन चेकपोस्ट व सीमा कर का भुगतान करें।',
    tags: ['checkpost tax', 'border tax', 'checkpost', 'entry tax', 'commercial vehicle tax', 'interstate tax', 'vahan checkpost'],
    iconName: 'CreditCard',
    officialServiceCode: 'VAHAN-CPT-09',
    statutoryFee: 'Calculated per state entry rules',
    estimatedTurnaround: 'Instant Online Receipt'
  },
  {
    id: 'online-pucc',
    name: 'PUCC',
    nameHi: 'प्रदूषण नियंत्रण प्रमाण पत्र (PUCC)',
    category: 'Compliance & Payments',
    subcategory: 'Emission Certification',
    subcategoryHi: 'उत्सर्जन प्रमाणन',
    audience: 'Citizen',
    type: 'template',
    route: '/services/puc-certificate',
    underlyingSystem: 'National PUCC Central Registry',
    status: 'template-backed',
    shortDesc: 'Verify vehicle emission test validity, download digital PUC certificates, and find accredited computerized pollution testing centers across India.',
    shortDescHi: 'राष्ट्रीय पीयूसीसी रिकॉर्ड जांचें, डिजिटल उत्सर्जन प्रमाण पत्र डाउनलोड करें एवं निकटतम जांच केंद्र खोजें।',
    tags: ['pucc', 'puc', 'pollution', 'emission', 'pollution under control', 'emission certificate', 'puc validity', 'smoke test'],
    iconName: 'ShieldCheck',
    officialServiceCode: 'MORTH-PUC-10',
    statutoryFee: '₹60 – ₹150 (At PUCC center)',
    estimatedTurnaround: 'Instant Digital Lookup'
  },
  {
    id: 'online-echallan',
    name: 'eChallan',
    nameHi: 'ई-चालान डिजिटल प्रवर्तन व भुगतान',
    category: 'Compliance & Payments',
    subcategory: 'Traffic Enforcement & Fines',
    subcategoryHi: 'यातायात प्रवर्तन एवं जुर्माना',
    audience: 'Citizen',
    type: 'direct',
    route: '/echallan',
    underlyingSystem: 'eChallan National Enforcement System',
    status: 'implemented',
    shortDesc: 'Unified national portal to search pending traffic violation notices by Vehicle, DL, or Challan number, view camera photo proof, and settle fines securely.',
    shortDescHi: 'वाहन या ड्राइविंग लाइसेंस नंबर द्वारा लंबित यातायात चालान खोजें, फोटो साक्ष्य देखें और ऑनलाइन भुगतान करें।',
    tags: ['echallan', 'challan', 'traffic fine', 'traffic violation', 'fine payment', 'speed ticket', 'camera challan', 'e-challan'],
    iconName: 'AlertTriangle',
    officialServiceCode: 'ECHALLAN-SYS-11',
    statutoryFee: 'Statutory Offense Fine',
    estimatedTurnaround: 'Instant Settlement'
  },

  // --------------------------------------------------------------------------
  // 5. SPECIAL / DIGITAL SERVICES (4 Entries)
  // --------------------------------------------------------------------------
  {
    id: 'online-vahan-green-sewa',
    name: 'Vahan Green Sewa',
    nameHi: 'वाहन ग्रीन सेवा (स्वच्छ गतिशीलता)',
    category: 'Registration & Special Services',
    subcategory: 'Clean Mobility & EV Ecosystem',
    subcategoryHi: 'स्वच्छ गतिशीलता एवं ईवी',
    audience: 'Citizen',
    type: 'template',
    route: '/services/vahan-green-sewa',
    underlyingSystem: 'VAHAN Green Mobility Framework',
    status: 'template-backed',
    shortDesc: 'Dedicated digital platform for Electric Vehicle (EV), Hybrid, and alternate fuel incentives, green tax rebates, and state subsidy tracking.',
    shortDescHi: 'इलेक्ट्रिक वाहन सब्सिडी, ग्रीन टैक्स छूट एवं स्वच्छ ऊर्जा गतिशीलता हेतु समर्पित डिजिटल मंच।',
    tags: ['vahan green sewa', 'green sewa', 'green', 'ev subsidy', 'electric vehicle', 'green tax', 'clean mobility', 'hybrid subsidy', 'fame incentive'],
    iconName: 'Zap',
    officialServiceCode: 'VAHAN-GRN-12',
    statutoryFee: 'Zero / Rebate Enabled',
    estimatedTurnaround: 'Direct Digital Processing'
  },
  {
    id: 'online-vehicle-scrapping',
    name: 'Vehicle Scrapping',
    nameHi: 'वाहन स्क्रैपिंग नीति (RVSF)',
    category: 'Registration & Special Services',
    subcategory: 'End-of-Life Vehicles & RVSF',
    subcategoryHi: 'पुराने वाहन एवं स्क्रैपेज',
    audience: 'Citizen',
    type: 'direct',
    route: '/vehicle-scrapping',
    underlyingSystem: 'RVSF Central Voluntary Scrapping Portal',
    status: 'implemented',
    shortDesc: 'Deposit End-of-Life Vehicles (ELV) at Registered Vehicle Scrapping Facilities (RVSF), deregister RC, and obtain Certificate of Deposit (COD) for up to 25% road tax rebate.',
    shortDescHi: 'पंजीकृत स्क्रैपिंग केंद्र पर पुराने वाहन स्क्रैप करें, आरसी रद्द कराएं और 25% तक रोड टैक्स छूट का जमा प्रमाण पत्र (COD) पाएं।',
    tags: ['vehicle scrapping', 'scrap car', 'scrap', 'scrapping', 'rvsf', 'certificate of deposit', 'cod', 'scrappage policy', 'tax rebate', 'old car scrap'],
    iconName: 'Zap',
    officialServiceCode: 'MORTH-RVSF-13',
    statutoryFee: 'Earn Scrap Value + Tax Rebate',
    estimatedTurnaround: '3–5 Days for COD Issuance'
  },
  {
    id: 'online-fancy-number-booking',
    name: 'Fancy Number Booking',
    nameHi: 'फैंसी नंबर बुकिंग एवं ई-नीलामी',
    category: 'Registration & Special Services',
    subcategory: 'VIP Number e-Auction',
    subcategoryHi: 'वीआईपी नंबर ई-नीलामी',
    audience: 'Citizen',
    type: 'template',
    route: '/services/fancy-number-booking',
    underlyingSystem: 'Fancy Number Central e-Auction Gateway',
    status: 'template-backed',
    shortDesc: 'Search available VIP, attractive, and customized vehicle registration numbers, participate in transparent e-auctions, and secure choice numbers.',
    shortDescHi: 'पसंदीदा एवं वीआईपी वाहन पंजीकरण नंबर खोजें, पारदर्शी ऑनलाइन ई-नीलामी में भाग लें।',
    tags: ['fancy number booking', 'fancy', 'vip number', 'fancy number', 'choice number', 'e-auction number', 'special registration', '0001', 'custom number'],
    iconName: 'Sparkles',
    officialServiceCode: 'VAHAN-FNC-14',
    statutoryFee: 'Reserve Base Price (₹5,000 to ₹5,00,000+)',
    estimatedTurnaround: 'Instant Booking / Auction Schedule'
  },
  {
    id: 'online-national-transport-repository',
    name: 'National Transport Repository',
    nameHi: 'राष्ट्रीय परिवहन डेटा रिपॉजिटरी (NTR)',
    category: 'Registration & Special Services',
    subcategory: 'National Registry Data & Analytics',
    subcategoryHi: 'राष्ट्रीय रजिस्ट्री डेटा एवं विश्लेषिकी',
    audience: 'Government / Enterprise',
    type: 'template',
    route: '/services/national-transport-repository',
    underlyingSystem: 'MoRTH National Transport Data Lake & Open Repository',
    status: 'system-linked',
    shortDesc: 'Centralized repository of national vehicle registrations, driver licencing metrics, road safety trends, and open data APIs for policy research and enterprise integration.',
    shortDescHi: 'राष्ट्रीय वाहन एवं चालक डेटाबेस, सड़क सुरक्षा रुझान और ओपन डेटा एपीआई का केंद्रीय भंडार।',
    tags: ['national transport repository', 'repository', 'ntr', 'transport data', 'open data', 'morth repository', 'national dataset', 'transport analytics'],
    iconName: 'Building',
    officialServiceCode: 'MORTH-NTR-15',
    statutoryFee: 'Open Public Data / Enterprise Licensing',
    estimatedTurnaround: 'Real-Time Stream Access'
  },

  // --------------------------------------------------------------------------
  // 6. INDUSTRY / MANUFACTURER (4 Entries)
  // --------------------------------------------------------------------------
  {
    id: 'online-cng-maker',
    name: 'CNG Maker',
    nameHi: 'सीएनजी किट निर्माता एवं रेट्रोफिटिंग',
    category: 'Business & Industry',
    subcategory: 'Manufacturer Services',
    subcategoryHi: 'निर्माता सेवाएं',
    audience: 'Industry',
    type: 'business',
    route: '/business/cng-maker',
    underlyingSystem: 'VAHAN CNG Retrofit Testing Network',
    status: 'system-linked',
    shortDesc: 'Online authorization, kit model endorsement, cylinder testing validation, and retrofit approval portal for CNG/LPG kit manufacturers and workshops.',
    shortDescHi: 'सीएनजी/एलपीजी किट निर्माताओं एवं रेट्रोफिटिंग कार्यशालाओं हेतु अनुमोदन और सिलेंडर परीक्षण सत्यापन।',
    tags: ['cng maker', 'cng', 'cng kit', 'cng retrofit', 'cng cylinder testing', 'gas kit approval', 'retrofit manufacturer'],
    iconName: 'Wrench',
    officialServiceCode: 'VAHAN-CNG-16',
    statutoryFee: 'Statutory Type Endorsement Fee',
    estimatedTurnaround: '5–10 Working Days'
  },
  {
    id: 'online-sld-maker',
    name: 'SLD Maker',
    nameHi: 'गति नियंत्रक उपकरण निर्माता (SLD Maker)',
    category: 'Business & Industry',
    subcategory: 'Manufacturer Services',
    subcategoryHi: 'निर्माता सेवाएं',
    audience: 'Industry',
    type: 'business',
    route: '/business/sld-maker',
    underlyingSystem: 'Speed Limiting Device Central Authorization Portal',
    status: 'system-linked',
    shortDesc: 'Portal for Speed Limiting Device (SLD / Speed Governor) manufacturers to upload type approval certificates, register authorized fitment centers, and manage device serials.',
    shortDescHi: 'गति नियंत्रक (स्पीड गवर्नर) निर्माताओं हेतु मॉडल पंजीकरण, फिटमेंट केंद्र प्राधिकरण एवं डिवाइस सत्यापन।',
    tags: ['sld maker', 'sld', 'speed limiting device', 'speed limiter', 'speed governor', 'speed limiter manufacturer', 'ais-018'],
    iconName: 'Gauge',
    officialServiceCode: 'MORTH-SLD-17',
    statutoryFee: 'Certification & Device Sync Fee',
    estimatedTurnaround: '2–4 Working Days'
  },
  {
    id: 'online-vltd-maker',
    name: 'VLTD Maker',
    nameHi: 'वाहन ट्रैकिंग उपकरण निर्माता (VLTD Maker)',
    category: 'Business & Industry',
    subcategory: 'Manufacturer Services',
    subcategoryHi: 'निर्माता सेवाएं',
    audience: 'Industry',
    type: 'business',
    route: '/business/vltd-maker',
    underlyingSystem: 'AIS-140 National VLTD Backend',
    status: 'system-linked',
    shortDesc: 'Registration, model homologation mapping, panic button backend integration, and IMEI-chassis activation portal for AIS-140 Vehicle Location Tracking Device (VLTD) manufacturers.',
    shortDescHi: 'AIS-140 वाहन लोकेशन ट्रैकिंग डिवाइस (VLTD) निर्माताओं हेतु डिवाइस प्रमाणीकरण एवं आईएमईआई मैपिंग पोर्टल।',
    tags: ['vltd maker', 'vltd', 'vldt', 'vehicle location tracking device', 'ais-140', 'panic button', 'gps tracking', 'vltd manufacturer', 'emergency button'],
    iconName: 'Cpu',
    officialServiceCode: 'MORTH-VLTD-18',
    statutoryFee: 'Backend Verification Standard',
    estimatedTurnaround: 'Real-Time Device Handshake'
  },
  {
    id: 'online-homologation',
    name: 'Homologation',
    nameHi: 'होमोलोगेशन एवं टाइप अप्रूवल पोर्टल',
    category: 'Business & Industry',
    subcategory: 'OEM Vehicle Type Approval',
    subcategoryHi: 'ओईएम वाहन टाइप अप्रूवल',
    audience: 'Industry',
    type: 'business',
    route: '/business/homologation',
    underlyingSystem: 'MoRTH National Homologation & Type Approval Gateway',
    status: 'system-linked',
    shortDesc: 'Centralized registry for Automobile Manufacturers (OEMs) and test agencies (ARAI, ICAT, GARC, CIRT) to upload vehicle homologation certificates, CMVR specs, and component approvals.',
    shortDescHi: 'ऑटोमोबाइल निर्माताओं (ओईएम) और परीक्षण एजेंसियों (ARAI, ICAT) हेतु वाहन होमोलोगेशन एवं सीएमवीआर विनिर्देश रजिस्ट्री।',
    tags: ['homologation', 'type approval', 'oem', 'arai', 'icat', 'cmvr type approval', 'vehicle specification', 'safety certification', 'homologation portal'],
    iconName: 'Building',
    officialServiceCode: 'MORTH-HML-19',
    statutoryFee: 'Statutory Testing & Registry Schedule',
    estimatedTurnaround: 'Official Testing Lifecycle'
  },

  // --------------------------------------------------------------------------
  // 7. DEALER / AUTHORIZED SERVICES (1 Entry)
  // --------------------------------------------------------------------------
  {
    id: 'online-dealer-authorization-certificate',
    name: 'Dealer Authorization Certificate',
    nameHi: 'डीलर प्राधिकरण प्रमाण पत्र (DAC)',
    category: 'Business & Industry',
    subcategory: 'Dealer Network',
    subcategoryHi: 'डीलर नेटवर्क',
    audience: 'Dealer',
    type: 'business',
    route: '/business/dealer-authorization-certificate',
    underlyingSystem: 'VAHAN 4.0 Dealer Point Registration System',
    status: 'system-linked',
    shortDesc: 'Online accreditation, OEM principal endorsement, dealer point registration (DPR) clearance, and electronic Dealer Authorization Certificate generation.',
    shortDescHi: 'ऑटोमोबाइल डीलरों हेतु अधिकृत डीलर प्रमाण पत्र, ओईएम संबद्धता एवं डीलर पॉइंट पंजीकरण (DPR)।',
    tags: ['dealer authorization certificate', 'dealer authorization', 'dac', 'dealer', 'automobile dealer', 'dealer registration', 'dpr', 'form 20 dealer'],
    iconName: 'Award',
    officialServiceCode: 'VAHAN-DAC-20',
    statutoryFee: '₹1,000 – ₹5,000 / Jurisdiction',
    estimatedTurnaround: '3–5 Working Days'
  },

  // --------------------------------------------------------------------------
  // 8. NATIONAL REGISTER (2 Entries)
  // --------------------------------------------------------------------------
  {
    id: 'online-nr-services',
    name: 'NR Services',
    nameHi: 'राष्ट्रीय रजिस्टर सार्वजनिक सेवाएं (NR Services)',
    category: 'National Register',
    subcategory: 'Citizen Registry Search',
    subcategoryHi: 'नागरिक रजिस्ट्री खोज',
    audience: 'Citizen',
    type: 'template',
    route: '/services/nr-services',
    underlyingSystem: 'National Register (NR) Central Query Hub',
    status: 'system-linked',
    shortDesc: 'Public citizen query interface to verify driving licence genuineness, vehicle registration status, and national interstate validity across all Indian RTOs.',
    shortDescHi: 'ड्राइविंग लाइसेंस और वाहन पंजीकरण की राष्ट्रीय स्तर पर प्रामाणिकता एवं वैधता जांचने की सार्वजनिक सेवा।',
    tags: ['nr services', 'nr', 'national register', 'national registry', 'dl verification', 'rc verification', 'all india search', 'national register search'],
    iconName: 'Search',
    officialServiceCode: 'MORTH-NR-21',
    statutoryFee: 'Free of Cost',
    estimatedTurnaround: 'Instant Verification'
  },
  {
    id: 'online-paid-nr-services',
    name: 'Paid NR Services',
    nameHi: 'सशुल्क राष्ट्रीय रजिस्टर सेवाएं (Bulk Enterprise NR)',
    category: 'National Register',
    subcategory: 'Enterprise Commercial Verification',
    subcategoryHi: 'उद्यम व्यावसायिक सत्यापन',
    audience: 'Government / Enterprise',
    type: 'template',
    route: '/services/paid-nr-services',
    underlyingSystem: 'MoRTH Paid NR Commercial API Suite',
    status: 'system-linked',
    shortDesc: 'Commercial high-volume API and web portal for Banks, NBFCs, Insurance Providers, and Law Enforcement agencies for verified batch DL/RC data extraction.',
    shortDescHi: 'बैंकों, बीमा कंपनियों एवं वित्तीय संस्थानों हेतु बड़े पैमाने पर डीएल/आरसी डेटा सत्यापन की सशुल्क व्यावसायिक एपीआई सेवा।',
    tags: ['paid nr services', 'paid nr', 'commercial nr', 'bulk verification', 'enterprise nr', 'bank rc verification', 'insurance nr api', 'bulk dl search'],
    iconName: 'Building',
    officialServiceCode: 'MORTH-PNR-22',
    statutoryFee: 'Per Query Tier Schedule (₹5 – ₹50 / request)',
    estimatedTurnaround: 'Sub-second API SLA'
  }
];

/**
 * Programmatic Helper Functions for Feature Completeness Verification
 */
export const getAllVerifiedOnlineServices = (): FeatureRegistryItem[] => {
  return masterOnlineServicesInventory;
};

export const getVerifiedServiceById = (id: string): FeatureRegistryItem | undefined => {
  return masterOnlineServicesInventory.find((item) => item.id === id);
};

export const getVerifiedServiceByName = (name: string): FeatureRegistryItem | undefined => {
  const norm = name.toLowerCase().trim();
  return masterOnlineServicesInventory.find((item) => item.name.toLowerCase().trim() === norm);
};

export const getServicesByCategory = (category: string): FeatureRegistryItem[] => {
  if (category === 'all') return masterOnlineServicesInventory;
  return masterOnlineServicesInventory.filter((item) => item.category.toLowerCase() === category.toLowerCase());
};

export const searchVerifiedServices = (query: string): FeatureRegistryItem[] => {
  const q = query.toLowerCase().trim();
  if (!q) return masterOnlineServicesInventory;
  return masterOnlineServicesInventory.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.nameHi.toLowerCase().includes(q) ||
      item.shortDesc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.tags.some((tag) => tag.includes(q) || q.includes(tag))
  );
};
