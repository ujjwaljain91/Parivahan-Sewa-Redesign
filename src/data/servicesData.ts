import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  // --------------------------------------------------------------------------
  // DRIVING LICENCE SERVICES
  // --------------------------------------------------------------------------
  {
    id: 'dl-renew',
    category: 'driving-licence',
    categoryLabel: 'Driving Licence',
    categoryLabelHi: 'ड्राइविंग लाइसेंस',
    title: 'Renew Driving Licence',
    titleHi: 'ड्राइविंग लाइसेंस का नवीनीकरण',
    slug: 'renew-driving-licence',
    shortDesc: 'Renew an expiring or expired permanent driving licence online with contactless RTO verification.',
    shortDescHi: 'ऑनलाइन प्रक्रिया के माध्यम से अपने समाप्त हो रहे ड्राइविंग लाइसेंस का नवीनीकरण करें।',
    fullDesc: 'Apply for renewal of your existing Driving Licence. Licences can be renewed from 1 year before expiry up to 1 year after expiry without re-test under Central Motor Vehicle Rules.',
    fullDescHi: 'अपने मौजूदा ड्राइविंग लाइसेंस के नवीनीकरण के लिए आवेदन करें। केंद्रीय मोटर वाहन नियमों के अनुसार लाइसेंस समाप्ति के 1 वर्ष पूर्व या 1 वर्ष बाद तक आवेदन संभव है।',
    eligibility: [
      'Must hold a valid or recently expired (within 1 year) Driving Licence',
      'Applicant age 40 years or above must submit Form 1A Medical Certificate signed by a registered doctor',
      'No pending suspension or disqualification order on the licence'
    ],
    documents: [
      { name: 'Form 1A (Medical Certificate)', description: 'Signed and stamped by Registered Medical Practitioner (for age 40+)', mandatory: true },
      { name: 'Original Driving Licence Copy', description: 'Clear front and back scan or photo of current DL', mandatory: true },
      { name: 'Proof of Present Address', description: 'Aadhaar / Passport / Voter ID / Utility bill in applicant name', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'State & RTO Selection', description: 'Select your state and jurisdiction RTO office' },
      { stepNumber: 2, title: 'Identity Verification', description: 'Authenticate via DL number, Date of Birth, and Aadhaar OTP' },
      { stepNumber: 3, title: 'Medical Declaration', description: 'Self-declaration Form 1 and upload Form 1A if 40+ years' },
      { stepNumber: 4, title: 'Upload Documents', description: 'Upload scan of current DL and address proof' },
      { stepNumber: 5, title: 'Fee Payment', description: 'Pay government renewal fee securely online' },
      { stepNumber: 6, title: 'Confirmation & Tracking', description: 'Receive application acknowledgment and track live dispatch' }
    ],
    fees: [
      { label: 'Government Renewal Fee', amount: 200 },
      { label: 'Smart Card / Form 7 Fee', amount: 200 },
      { label: 'Postal Dispatch Charge', amount: 50 }
    ],
    estimatedDays: '7–10 Working Days',
    tags: ['dl', 'renew', 'licence', 'driving', 'rto', 'sarathi'],
    popular: true,
    onlineAvailable: true,
    iconName: 'CreditCard'
  },
  {
    id: 'dl-learner',
    category: 'driving-licence',
    categoryLabel: 'Driving Licence',
    categoryLabelHi: 'ड्राइविंग लाइसेंस',
    title: "Learner's Licence (LL)",
    titleHi: 'लर्नर (शिक्षार्थी) लाइसेंस',
    slug: 'learners-licence',
    shortDesc: 'Apply for a new Learner Licence with online contactless proctored theory test from home.',
    shortDescHi: 'घर बैठे ऑनलाइन थ्योरी टेस्ट देकर नया शिक्षार्थी लाइसेंस प्राप्त करें।',
    fullDesc: 'A Learner Licence is the primary legal permit to learn driving on public roads under supervision. Eligible citizens can take an online contactless video-proctored test directly.',
    fullDescHi: 'शिक्षार्थी लाइसेंस सार्वजनिक सड़कों पर देखरेख में वाहन चलाने का प्राथमिक कानूनी परमिट है।',
    eligibility: [
      'Minimum age 16 years for MCWOG (Motorcycle without Gear up to 50cc)',
      'Minimum age 18 years for LMV (Light Motor Vehicle) and MCWG',
      'Minimum age 20 years for Commercial / Transport vehicle'
    ],
    documents: [
      { name: 'Proof of Age', description: 'Birth Certificate / 10th Marksheet / Passport', mandatory: true },
      { name: 'Proof of Address', description: 'Aadhaar Card / Voter ID / Passport', mandatory: true },
      { name: 'Medical Certificate (Form 1/1A)', description: 'Self declaration Form 1 for non-transport', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Select Jurisdiction', description: 'Choose your State and nearest RTO' },
      { stepNumber: 2, title: 'Applicant Details', description: 'Fill personal, address, and class of vehicle details' },
      { stepNumber: 3, title: 'Document Upload', description: 'Upload photo, signature, and address proof' },
      { stepNumber: 4, title: 'Fee Payment', description: 'Pay government test and issue fee' },
      { stepNumber: 5, title: 'Online LL Test', description: 'Take 15-minute proctored road safety test online' },
      { stepNumber: 6, title: 'Instant Download', description: 'Download approved Learner Licence immediately' }
    ],
    fees: [
      { label: 'LL Application Fee (per class)', amount: 150 },
      { label: 'Online Test Fee', amount: 50 }
    ],
    estimatedDays: 'Same Day (Instant upon passing test)',
    tags: ['ll', 'learner', 'new licence', 'test', 'driving test'],
    popular: true,
    onlineAvailable: true,
    iconName: 'FileBadge'
  },
  {
    id: 'dl-permanent',
    category: 'driving-licence',
    categoryLabel: 'Driving Licence',
    categoryLabelHi: 'ड्राइविंग लाइसेंस',
    title: 'Permanent Driving Licence',
    titleHi: 'स्थायी ड्राइविंग लाइसेंस',
    slug: 'permanent-driving-licence',
    shortDesc: 'Apply for permanent licence after completing 30 days of holding an active Learner Licence.',
    shortDescHi: 'लर्नर लाइसेंस के 30 दिन पूरे होने पर स्थायी ड्राइविंग लाइसेंस हेतु आवेदन करें।',
    fullDesc: 'Convert your valid Learner Licence into a Permanent Driving Licence by booking an automated driving test track appointment at your jurisdictional RTO.',
    fullDescHi: 'अपने शिक्षार्थी लाइसेंस को आरटीओ में ड्राइविंग टेस्ट देकर स्थायी लाइसेंस में बदलें।',
    eligibility: [
      'Must hold an active Learner Licence valid for at least 30 days and not older than 180 days',
      'Pass practical driving test at the designated RTO test track'
    ],
    documents: [
      { name: 'Learner Licence', description: 'Active Learner Licence number', mandatory: true },
      { name: 'Driving School Certificate (Form 5)', description: 'Mandatory for commercial transport class', mandatory: false }
    ],
    steps: [
      { stepNumber: 1, title: 'Learner Details', description: 'Enter LL number and date of birth' },
      { stepNumber: 2, title: 'Book Driving Slot', description: 'Select date and time slot for practical driving test' },
      { stepNumber: 3, title: 'Fee Payment', description: 'Pay driving test and smart card fee' },
      { stepNumber: 4, title: 'Attend Test', description: 'Visit RTO track on appointed date for evaluation' },
      { stepNumber: 5, title: 'Dispatch', description: 'Smart card DL dispatched to registered address' }
    ],
    fees: [
      { label: 'Driving Test Fee', amount: 300 },
      { label: 'Driving Licence Issue Fee', amount: 200 },
      { label: 'Smart Card & Postage', amount: 250 }
    ],
    estimatedDays: '7–14 Working Days',
    tags: ['permanent dl', 'driving test', 'licence appointment'],
    popular: true,
    onlineAvailable: true,
    iconName: 'Award'
  },
  {
    id: 'dl-duplicate',
    category: 'driving-licence',
    categoryLabel: 'Driving Licence',
    categoryLabelHi: 'ड्राइविंग लाइसेंस',
    title: 'Duplicate Driving Licence',
    titleHi: 'डुप्लीकेट ड्राइविंग लाइसेंस',
    slug: 'duplicate-driving-licence',
    shortDesc: 'Apply for a replacement licence if your original card is lost, torn, defaced, or stolen.',
    shortDescHi: 'लाइसेंस खोने, चोरी होने या क्षतिग्रस्त होने पर डुप्लीकेट कार्ड प्राप्त करें।',
    fullDesc: 'Order an official duplicate Driving Licence card online. In case of loss or theft, an online police non-cognizable report (NCR/FIR) is submitted.',
    fullDescHi: 'खोए हुए या क्षतिग्रस्त ड्राइविंग लाइसेंस के स्थान पर आधिकारिक डुप्लीकेट कार्ड के लिए आवेदन करें।',
    eligibility: ['Must hold an active registered DL on Sarathi database'],
    documents: [
      { name: 'Police NCR / FIR Loss Report', description: 'Required if DL was lost or stolen', mandatory: true },
      { name: 'Affidavit / Loss Declaration', description: 'Signed self-declaration of lost card', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Verify DL', description: 'Enter DL number and DOB' },
      { stepNumber: 2, title: 'Select Reason', description: 'Lost / Damaged / Defaced' },
      { stepNumber: 3, title: 'Upload NCR', description: 'Upload police report copy' },
      { stepNumber: 4, title: 'Pay Fee', description: 'Pay ₹400 replacement charges' }
    ],
    fees: [{ label: 'Duplicate Issue & Smart Card Fee', amount: 400 }],
    estimatedDays: '7–10 Working Days',
    tags: ['duplicate dl', 'lost licence', 'replace dl'],
    onlineAvailable: true,
    iconName: 'Copy'
  },
  {
    id: 'dl-idp',
    category: 'driving-licence',
    categoryLabel: 'Driving Licence',
    categoryLabelHi: 'ड्राइविंग लाइसेंस',
    title: 'International Driving Permit (IDP)',
    titleHi: 'अंतर्राष्ट्रीय ड्राइविंग परमिट (IDP)',
    slug: 'international-driving-permit',
    shortDesc: 'Get an International Driving Permit valid across 150+ countries signatory to the Geneva Convention.',
    shortDescHi: 'विदेश में वाहन चलाने हेतु अंतर्राष्ट्रीय ड्राइविंग परमिट प्राप्त करें।',
    fullDesc: 'The International Driving Permit (IDP) authorizes Indian citizens to drive motor vehicles in overseas jurisdictions under the 1949 Geneva Convention on Road Traffic.',
    fullDescHi: 'विदेशों में वैध ड्राइविंग हेतु भारत सरकार द्वारा जारी आधिकारिक अंतर्राष्ट्रीय परमिट।',
    eligibility: [
      'Must hold a valid Indian Permanent Driving Licence',
      'Must have valid Indian Passport and Visa for destination country'
    ],
    documents: [
      { name: 'Valid Indian Passport', description: 'Copy of passport with validity min 1 year', mandatory: true },
      { name: 'Valid Visa / Air Ticket', description: 'Proof of travel and destination entry', mandatory: true },
      { name: 'Medical Certificate (Form 1A)', description: 'Certified by registered doctor', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Passport & Visa Details', description: 'Enter travel details and passport number' },
      { stepNumber: 2, title: 'Upload Documents', description: 'Upload passport, visa, flight ticket, and medical cert' },
      { stepNumber: 3, title: 'Pay Fee', description: 'Pay standard government fee ₹1000' },
      { stepNumber: 4, title: 'Download / Collect', description: 'Digital IDP issued within 3 working days' }
    ],
    fees: [{ label: 'IDP Processing Fee', amount: 1000 }],
    estimatedDays: '3–5 Working Days',
    tags: ['idp', 'international licence', 'foreign driving', 'visa'],
    onlineAvailable: true,
    iconName: 'Globe'
  },

  // --------------------------------------------------------------------------
  // VEHICLE REGISTRATION SERVICES
  // --------------------------------------------------------------------------
  {
    id: 'rc-transfer',
    category: 'vehicle',
    categoryLabel: 'Vehicle Registration',
    categoryLabelHi: 'वाहन पंजीकरण',
    title: 'Transfer Vehicle Ownership',
    titleHi: 'वाहन का स्वामित्व हस्तांतरण',
    slug: 'transfer-vehicle-ownership',
    shortDesc: 'Transfer legal ownership of a vehicle to a new buyer (sale, inheritance, or auction).',
    shortDescHi: 'वाहन क्रय-विक्रय या उत्तराधिकार के बाद कानूनी स्वामित्व का हस्तांतरण करें।',
    fullDesc: 'Transfer registration certificate (RC) of a vehicle from seller to buyer under Sections 50 & 51 of the Motor Vehicles Act. Fully Aadhaar OTP-verified contactless process.',
    fullDescHi: 'मोटर वाहन अधिनियम की धारा 50 एवं 51 के अंतर्गत क्रेता-विक्रेता आधार सत्यापन द्वारा स्वामित्व बदलें।',
    eligibility: [
      'Vehicle must have active RC, valid Insurance, and valid PUC certificate',
      'No pending eChallan or police hypothecation lock',
      'Aadhaar of both Buyer and Seller must be linked to active mobile numbers'
    ],
    documents: [
      { name: 'Form 29 (Notice of Transfer)', description: 'Signed transfer intimation form', mandatory: true },
      { name: 'Form 30 (Application for Transfer)', description: 'Confirmation of transfer from both parties', mandatory: true },
      { name: 'Valid Insurance & PUC', description: 'Active policy certificate', mandatory: true },
      { name: 'NOC from Financier', description: 'Required only if vehicle was on bank loan', mandatory: false }
    ],
    steps: [
      { stepNumber: 1, title: 'Vehicle Lookup', description: 'Enter Registration Number and last 5 digits of Chassis' },
      { stepNumber: 2, title: 'Buyer & Seller OTP', description: 'Aadhaar e-KYC authentication of both parties' },
      { stepNumber: 3, title: 'Upload Forms', description: 'Upload Form 29, 30 and sale agreement' },
      { stepNumber: 4, title: 'Fee Payment', description: 'Pay government transfer fee online' },
      { stepNumber: 5, title: 'RTO Approval', description: 'Jurisdiction RTO verifies records and approves' },
      { stepNumber: 6, title: 'Updated RC Issued', description: 'Updated Smart Card RC delivered to buyer address' }
    ],
    fees: [
      { label: 'Transfer Fee (Two Wheeler)', amount: 150 },
      { label: 'Transfer Fee (Four Wheeler / Car)', amount: 300 },
      { label: 'Smart Card & Postal Fee', amount: 230 }
    ],
    estimatedDays: '10–14 Working Days',
    tags: ['ownership transfer', 'rc transfer', 'sell car', 'buy bike', 'vahan'],
    popular: true,
    onlineAvailable: true,
    iconName: 'Repeat'
  },
  {
    id: 'rc-renew',
    category: 'vehicle',
    categoryLabel: 'Vehicle Registration',
    categoryLabelHi: 'वाहन पंजीकरण',
    title: 'Renewal of Registration (RC)',
    titleHi: 'पंजीकरण प्रमाण पत्र (RC) का नवीनीकरण',
    slug: 'renewal-of-rc',
    shortDesc: 'Renew vehicle registration for private vehicles completing 15 years from initial registration.',
    shortDescHi: '15 वर्ष पूरे कर चुके निजी वाहनों के पंजीकरण प्रमाण पत्र का नवीनीकरण कराएं।',
    fullDesc: 'Private motor vehicles are initially registered for 15 years. Renew RC for successive blocks of 5 years upon passing vehicle fitness inspection at an Automated Testing Station (ATS) or RTO.',
    fullDescHi: '15 वर्ष पुराने वाहनों की फिटनेस जांच कराकर 5 वर्ष की अतिरिक्त अवधि हेतु आरसी नवीनीकृत कराएं।',
    eligibility: [
      'Vehicle age 15 years reached (apply up to 60 days before expiry)',
      'Vehicle must pass physical fitness test at designated ATS/RTO'
    ],
    documents: [
      { name: 'Original Registration Certificate', description: 'Physical or digital RC copy', mandatory: true },
      { name: 'Valid Insurance Certificate', description: 'Comprehensive / Third Party policy', mandatory: true },
      { name: 'Valid PUC Certificate', description: 'Emission test report', mandatory: true },
      { name: 'Form 25 Application', description: 'Renewal of RC form', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Vehicle Authentication', description: 'Enter Reg No and Chassis number' },
      { stepNumber: 2, title: 'Fitness Slot Booking', description: 'Book appointment at automated testing station' },
      { stepNumber: 3, title: 'Pay Green Tax & Fee', description: 'Pay statutory green tax and renewal fees' },
      { stepNumber: 4, title: 'Vehicle Inspection', description: 'Present vehicle for automated testing' },
      { stepNumber: 5, title: 'RC Renewal Dispatch', description: 'Updated RC issued with 5-year extended validity' }
    ],
    fees: [
      { label: 'RC Renewal Fee (Two Wheeler)', amount: 1000 },
      { label: 'RC Renewal Fee (Car / LMV)', amount: 5000 },
      { label: 'Green Tax (State specific)', amount: 1500 }
    ],
    estimatedDays: '10–15 Working Days',
    tags: ['rc renew', '15 years rc', 'green tax', 'fitness test', 'car fitness'],
    popular: true,
    onlineAvailable: true,
    iconName: 'RefreshCw'
  },
  {
    id: 'rc-duplicate',
    category: 'vehicle',
    categoryLabel: 'Vehicle Registration',
    categoryLabelHi: 'वाहन पंजीकरण',
    title: 'Duplicate Registration Certificate',
    titleHi: 'डुप्लीकेट पंजीकरण प्रमाण पत्र',
    slug: 'duplicate-rc',
    shortDesc: 'Apply for a replacement RC if the physical card is lost, mutilated, or destroyed.',
    shortDescHi: 'पंजीकरण प्रमाण पत्र खोने या क्षतिग्रस्त होने पर डुप्लीकेट आरसी प्राप्त करें।',
    fullDesc: 'Get an official duplicate Registration Certificate issued by your registering authority with verified smart card security chips.',
    fullDescHi: 'खोई या क्षतिग्रस्त आरसी के स्थान पर नया स्मार्ट कार्ड आरसी प्राप्त करने की सरल ऑनलाइन प्रक्रिया।',
    eligibility: ['Active RC registered on National Vahan Register'],
    documents: [
      { name: 'Police Loss Intimation (NCR)', description: 'Police acknowledgment for lost RC', mandatory: true },
      { name: 'Form 26', description: 'Application for duplicate certificate', mandatory: true },
      { name: 'Insurance & PUC', description: 'Active validity proof', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Vehicle Search', description: 'Enter vehicle registration details' },
      { stepNumber: 2, title: 'Upload Police NCR', description: 'Upload police lost article report' },
      { stepNumber: 3, title: 'Fee Payment', description: 'Pay ₹300–₹500 duplicate card fee' },
      { stepNumber: 4, title: 'Home Delivery', description: 'Speed post delivery to owner address' }
    ],
    fees: [{ label: 'Duplicate RC Fee', amount: 350 }],
    estimatedDays: '7–10 Working Days',
    tags: ['duplicate rc', 'lost rc', 'replace rc'],
    onlineAvailable: true,
    iconName: 'FileText'
  },
  {
    id: 'rc-noc',
    category: 'vehicle',
    categoryLabel: 'Vehicle Registration',
    categoryLabelHi: 'वाहन पंजीकरण',
    title: 'No Objection Certificate (NOC)',
    titleHi: 'अनापत्ति प्रमाण पत्र (NOC)',
    slug: 'no-objection-certificate',
    shortDesc: 'Obtain RTO NOC to re-register your vehicle or transfer ownership to another State/RTO.',
    shortDescHi: 'वाहन को दूसरे राज्य में स्थानांतरित या पंजीकृत करने हेतु आरटीओ अनापत्ति प्रमाण पत्र प्राप्त करें।',
    fullDesc: 'Form 28 clearance certificate required under Section 48 of the Motor Vehicles Act when moving vehicle to another state permanently.',
    fullDescHi: 'वाहन को दूसरे राज्य में स्थायी रूप से ले जाने पर आरटीओ द्वारा जारी की जाने वाली आधिकारिक एनओसी।',
    eligibility: ['Vehicle tax must be cleared; no pending theft or court cases on vehicle'],
    documents: [
      { name: 'Form 28 (Triplicate)', description: 'NOC application form', mandatory: true },
      { name: 'Police Clearance Certificate', description: 'NCRB crime check report', mandatory: true },
      { name: 'Chassis Pencil Print', description: 'Imprint of engine/chassis number', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Destination State', description: 'Specify destination state and new RTO' },
      { stepNumber: 2, title: 'Automated Crime Check', description: 'National crime records bureau clearance' },
      { stepNumber: 3, title: 'Fee Payment', description: 'Pay ₹100 NOC application charge' },
      { stepNumber: 4, title: 'Download NOC', description: 'Digital digitally-signed Form 28 issued' }
    ],
    fees: [{ label: 'NOC Application Fee', amount: 100 }],
    estimatedDays: '3–5 Working Days',
    tags: ['noc', 'state transfer', 'form 28', 'vehicle relocation'],
    onlineAvailable: true,
    iconName: 'ShieldCheck'
  },

  // --------------------------------------------------------------------------
  // COMPLIANCE & CHALLANS
  // --------------------------------------------------------------------------
  {
    id: 'echallan',
    category: 'compliance',
    categoryLabel: 'Compliance & Challan',
    categoryLabelHi: 'अनुपालन एवं ई-चालान',
    title: 'eChallan Search & Payment',
    titleHi: 'ई-चालान खोज एवं भुगतान',
    slug: 'echallan',
    shortDesc: 'Search, review photo evidence, and pay pending traffic violation challans across India.',
    shortDescHi: 'देशभर में लंबित यातायात चालानों को देखें, फोटो साक्ष्य जांचें और ऑनलाइन भुगतान करें।',
    fullDesc: 'Unified national eChallan gateway connected to state traffic police, CCTV cameras, and speed detection radars. Instant digital payment receipt and clearance.',
    fullDescHi: 'यातायात पुलिस और कैमरों द्वारा जारी चालानों का त्वरित ऑनलाइन निपटान और रसीद डाउनलोड।',
    eligibility: ['Any vehicle or driving licence with registered notices'],
    documents: [],
    steps: [
      { stepNumber: 1, title: 'Enter Vehicle / Challan No', description: 'Search notices by vehicle registration or challan ID' },
      { stepNumber: 2, title: 'Review Offense & Photo', description: 'Inspect timestamp, GPS coordinates, and camera snapshot' },
      { stepNumber: 3, title: 'Online Payment', description: 'Pay via UPI, Debit Card, Credit Card, or Net Banking' },
      { stepNumber: 4, title: 'Instant Receipt', description: 'Download official digital court/police payment voucher' }
    ],
    fees: [{ label: 'Violation Fine (as per MV Act)', amount: 0 }],
    estimatedDays: 'Instant Online Clearance',
    tags: ['challan', 'echallan', 'traffic fine', 'fine payment', 'speeding fine'],
    popular: true,
    onlineAvailable: true,
    iconName: 'AlertTriangle'
  },
  {
    id: 'pucc-check',
    category: 'compliance',
    categoryLabel: 'Compliance & Fitness',
    categoryLabelHi: 'अनुपालन एवं फिटनेस',
    title: 'PUC Certificate & Status',
    titleHi: 'प्रदूषण नियंत्रण प्रमाण पत्र (PUCC)',
    slug: 'puc-certificate',
    shortDesc: 'Check Pollution Under Control Certificate validity, test history, or locate nearby testing centers.',
    shortDescHi: 'अपने वाहन के प्रदूषण प्रमाण पत्र की वैधता जांचें और नजदीकी जांच केंद्र खोजें।',
    fullDesc: 'Verify national online emission test records directly from the central PUCC server. View carbon monoxide (CO) and hydrocarbon (HC) emission readings.',
    fullDescHi: 'राष्ट्रीय उत्सर्जन डेटाबेस से पीयूसीसी स्थिति की जांच और डिजिटल प्रमाणपत्र डाउनलोड।',
    eligibility: ['All active registered motor vehicles'],
    documents: [],
    steps: [
      { stepNumber: 1, title: 'Search Vehicle', description: 'Enter registration number and last 5 chars of chassis' },
      { stepNumber: 2, title: 'View Status', description: 'Check expiry date and testing center location' },
      { stepNumber: 3, title: 'Download Certificate', description: 'Download digitally generated Green PUC receipt' }
    ],
    fees: [{ label: 'Status Verification', amount: 0 }],
    estimatedDays: 'Instant Record Check',
    tags: ['puc', 'pucc', 'pollution test', 'emission certificate'],
    onlineAvailable: true,
    iconName: 'Activity'
  },

  // --------------------------------------------------------------------------
  // VEHICLE SCRAPPING POLICY
  // --------------------------------------------------------------------------
  {
    id: 'v-scrap',
    category: 'other',
    categoryLabel: 'Citizen Services',
    categoryLabelHi: 'नागरिक सेवाएं',
    title: 'Vehicle Scrapping & RVSF Portal',
    titleHi: 'राष्ट्रीय वाहन स्क्रैपेज नीति',
    slug: 'vehicle-scrapping',
    shortDesc: 'Scrap unfit or 15+ year old vehicles at authorized RVSF centers and earn up to 25% road tax rebate.',
    shortDescHi: 'अधिकृत केंद्रों पर पुराने वाहन को स्क्रैप करें और नए वाहन पर 25% तक रोड टैक्स छूट पाएं।',
    fullDesc: 'Under the National Voluntary Vehicle Fleet Modernization Program (VVMP), citizens can scrap end-of-life vehicles (ELVs) eco-friendly at Registered Vehicle Scrapping Facilities (RVSF) and receive a Certificate of Deposit (COD) granting major concessions on new vehicle purchases.',
    fullDescHi: 'राष्ट्रीय वाहन स्क्रैपिंग नीति के तहत अनफिट वाहनों का पर्यावरण-अनुकूल निस्तारण और टैक्स छूट का लाभ।',
    eligibility: [
      'Private vehicles aged 15+ years or commercial vehicles aged 10+ years that fail fitness',
      'Declared total loss / accidental vehicles / abandoned vehicles'
    ],
    documents: [
      { name: 'Original Registration Certificate', description: 'Physical RC for surrender and deregistration', mandatory: true },
      { name: 'Identity & Bank Account Details', description: 'Aadhaar and canceled cheque for scrap value payout', mandatory: true },
      { name: 'No Lien / NOC from Bank', description: 'Required if loan was active', mandatory: false }
    ],
    steps: [
      { stepNumber: 1, title: 'Check Scrappage Eligibility', description: 'Enter vehicle registration to calculate scrap incentive' },
      { stepNumber: 2, title: 'Locate Authorized RVSF', description: 'Select nearest government-certified scrapping facility' },
      { stepNumber: 3, title: 'Submit Vehicle', description: 'Hand over vehicle and surrender RC for deregistration' },
      { stepNumber: 4, title: 'Receive Scrap Value', description: 'Direct bank transfer of scrap metal valuation (4–6% of ex-showroom price)' },
      { stepNumber: 5, title: 'Get Certificate of Deposit (COD)', description: 'Use digital COD for up to 25% road tax rebate and registration waiver on new car' }
    ],
    fees: [{ label: 'Scrappage Application', amount: 0 }],
    estimatedDays: '3–5 Days for COD Issuance',
    tags: ['scrap', 'scrapping', 'rvsf', 'cod', 'scrap old car', 'tax rebate'],
    popular: true,
    onlineAvailable: true,
    iconName: 'Trash2'
  },

  // --------------------------------------------------------------------------
  // PERMITS
  // --------------------------------------------------------------------------
  {
    id: 'permit-national',
    category: 'permits',
    categoryLabel: 'Commercial Permits',
    categoryLabelHi: 'वाणिज्यिक परमिट',
    title: 'National Permit (Goods Carriage)',
    titleHi: 'राष्ट्रीय परमिट (माल ढुलाई)',
    slug: 'national-permit',
    shortDesc: 'Apply for and renew National Permit Authorization to operate goods transport vehicles across all States.',
    shortDescHi: 'देशभर में माल ढुलाई वाहनों के संचालन हेतु राष्ट्रीय परमिट प्राधिकरण प्राप्त करें।',
    fullDesc: 'Seamless all-India authorization for commercial goods carriers under National Permit System Rule 86. Instant online Composite Fee payment.',
    fullDescHi: 'मालवाहक वाहनों के लिए अखिल भारतीय राष्ट्रीय परमिट और समेकित शुल्क भुगतान।',
    eligibility: ['Goods carriage vehicle with valid Fitness, Tax, and Insurance'],
    documents: [
      { name: 'Valid Fitness Certificate', description: 'Vehicle fitness record', mandatory: true },
      { name: 'Green Tax / Road Tax Clearance', description: 'State tax receipt', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Vehicle Verification', description: 'Check commercial vehicle parameters' },
      { stepNumber: 2, title: 'Pay Composite Fee', description: 'Annual consolidated fee ₹16,500' },
      { stepNumber: 3, title: 'Instant Authorization', description: 'Download Form 47 National Permit Authorization' }
    ],
    fees: [{ label: 'Consolidated National Composite Fee (Annual)', amount: 16500 }],
    estimatedDays: 'Instant Online Generation',
    tags: ['national permit', 'truck permit', 'goods carrier', 'aitp'],
    onlineAvailable: true,
    iconName: 'Truck'
  },
  {
    id: 'fancy-number',
    category: 'other',
    categoryLabel: 'Citizen Services',
    categoryLabelHi: 'नागरिक सेवाएं',
    title: 'Fancy / Choice Number Auction',
    titleHi: 'पसंदीदा / वीआईपी वाहन नंबर नीलामी',
    slug: 'fancy-number-booking',
    shortDesc: 'Participate in e-Auction to bid for VIP and fancy vehicle registration numbers.',
    shortDescHi: 'वीआईपी और विशिष्ट वाहन पंजीकरण नंबरों के लिए ई-नीलामी में भाग लें।',
    fullDesc: 'Public e-Auction portal for booking attractive registration marks (e.g. 0001, 9999, 0007). Fair and transparent online bidding mechanism.',
    fullDescHi: 'मनपसंद वाहन पंजीकरण संख्या प्राप्त करने के लिए आधिकारिक ई-नीलामी पोर्टल।',
    eligibility: ['Any citizen planning to register a new vehicle'],
    documents: [{ name: 'Identity Proof', description: 'Aadhaar Card', mandatory: true }],
    steps: [
      { stepNumber: 1, title: 'Number Selection', description: 'Search available numbers in ongoing series' },
      { stepNumber: 2, title: 'Registration & EMD', description: 'Register and pay earnest money deposit' },
      { stepNumber: 3, title: 'Bid Online', description: 'Participate in 3-day round bidding' },
      { stepNumber: 4, title: 'Allotment Letter', description: 'Download allotment voucher for RTO registration' }
    ],
    fees: [{ label: 'Base Category Fee (Starting from)', amount: 10000 }],
    estimatedDays: '3–5 Days Auction Window',
    tags: ['fancy number', 'vip number', 'choice number', '0001 number'],
    onlineAvailable: true,
    iconName: 'Sparkles'
  },
  {
    id: 'aitp-service',
    category: 'permits',
    categoryLabel: 'Permits & Transport',
    categoryLabelHi: 'परमिट एवं परिवहन',
    title: 'All India Tourist Permit (AITP)',
    titleHi: 'अखिल भारतीय पर्यटक परमिट (AITP)',
    slug: 'all-india-tourist-permit',
    shortDesc: 'Apply for and download All India Tourist Permit (AITP) and authorization online for seamless interstate tourist passenger vehicle operation.',
    shortDescHi: 'अखिल भारतीय पर्यटक परमिट (AITP) और प्राधिकरण के लिए ऑनलाइन आवेदन करें तथा डाउनलोड करें।',
    fullDesc: 'The All India Tourist Vehicles (Permit) Rules provide an online mechanism for tourist vehicle operators to obtain all-India tourist authorizations without physically visiting state border checkpoints. Authorization is generated electronically upon payment of consolidated tourist vehicle permit fees.',
    fullDescHi: 'अखिल भारतीय पर्यटक वाहन नियम के तहत पर्यटक वाहन संचालकों हेतु बिना किसी राज्य सीमा पर रुके अखिल भारतीय परमिट प्राधिकरण ऑनलाइन जारी किया जाता है।',
    eligibility: [
      'Vehicle must be registered as a Tourist Vehicle (Motor Cab, Maxi Cab, or Tourist Bus)',
      'Vehicle must possess a valid Certificate of Fitness and valid PUCC',
      'Vehicle must be equipped with compliant AIS-140 Vehicle Location Tracking Device (VLTD) and panic buttons'
    ],
    documents: [
      { name: 'Vehicle Registration Certificate (RC)', description: 'Valid tourist class RC', mandatory: true },
      { name: 'Certificate of Fitness', description: 'Valid fitness certificate from authorized ATS/RTO', mandatory: true },
      { name: 'Valid Insurance & PUCC', description: 'Comprehensive commercial insurance and pollution certificate', mandatory: true },
      { name: 'AIS-140 VLTD Installation Certificate', description: 'Certified VLTD fitment report', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Vehicle Authentication', description: 'Enter registration number and chassis last 5 digits' },
      { stepNumber: 2, title: 'Select Permit Duration', description: 'Choose 1 Year or 3 Months permit authorization' },
      { stepNumber: 3, title: 'Fee Calculation & Payment', description: 'Pay statutory composite permit fee online via Bharatkosh / Parivahan' },
      { stepNumber: 4, title: 'Instant Download', description: 'Download QR-coded Form 2 All India Tourist Permit' }
    ],
    fees: [
      { label: 'Tourist Motor Cab (< 5 seater, Annual)', amount: 15000 },
      { label: 'Tourist Maxi Cab (6-9 seater, Annual)', amount: 25000 },
      { label: 'Tourist Bus (10+ seater, Annual)', amount: 75000 }
    ],
    estimatedDays: 'Instant Online Generation',
    tags: ['tourist permit', 'all india tourist permit', 'aitp', 'commercial bus', 'tourist cab', 'interstate permit'],
    popular: true,
    onlineAvailable: true,
    iconName: 'Truck'
  },
  {
    id: 'permit-related',
    category: 'permits',
    categoryLabel: 'Permits & Transport',
    categoryLabelHi: 'परमिट एवं परिवहन',
    title: 'Permit Related Services',
    titleHi: 'परमिट संबंधित सेवाएं',
    slug: 'permit-related-services',
    shortDesc: 'Apply for Stage Carriage, Contract Carriage, Goods, Temporary, and Special Permits issuance and renewal.',
    shortDescHi: 'स्टेज कैरिज, कॉन्ट्रैक्ट कैरिज, माल, अस्थायी एवं विशेष परमिट जारी करने और नवीनीकरण की सेवाएं।',
    fullDesc: 'Unified gateway for transport and commercial fleet owners to apply for Fresh Permits, Permit Renewal, Transfer of Permit, Temporary / Special Permits, and Permit Surrender under State Motor Vehicle Rules.',
    fullDescHi: 'वाणिज्यिक वाहनों हेतु फ्रेश परमिट, परमिट नवीनीकरण, परमिट ट्रांसफर और अस्थायी परमिट के लिए एकीकृत डिजिटल पोर्टल।',
    eligibility: [
      'Commercial transport vehicle registered in the respective state jurisdiction',
      'Clearance of all pending tax dues and challans'
    ],
    documents: [
      { name: 'Registration Certificate (RC)', description: 'Commercial vehicle RC', mandatory: true },
      { name: 'Fitness & Tax Clearance', description: 'Proof of up-to-date road tax and fitness', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Select Jurisdiction & Permit Type', description: 'Choose state, RTO, and required permit category' },
      { stepNumber: 2, title: 'Route Details', description: 'Enter operating route or area of operation' },
      { stepNumber: 3, title: 'Document Upload & Fee', description: 'Upload vehicle credentials and pay statutory fee' },
      { stepNumber: 4, title: 'RTO Verification & Issue', description: 'RTO approval and digital permit issuance' }
    ],
    fees: [
      { label: 'Permit Application Fee', amount: 1000 },
      { label: 'Permit Grant Fee (Varies by class)', amount: 2500 }
    ],
    estimatedDays: '3–7 Working Days',
    tags: ['permit related services', 'permit', 'stage carriage', 'contract carriage', 'temporary permit', 'special permit'],
    onlineAvailable: true,
    iconName: 'FileCheck'
  },
  {
    id: 'driving-licence-portal',
    category: 'driving-licence',
    categoryLabel: 'Driving Licence',
    categoryLabelHi: 'ड्राइविंग लाइसेंस',
    title: 'Driving Licence Related Services',
    titleHi: 'ड्राइविंग लाइसेंस संबंधित सेवाएं',
    slug: 'driving-licence-services',
    shortDesc: 'Unified contactless hub for DL Renewal, Learner Licence, Permanent DL, Duplicate DL, and International Driving Permit.',
    shortDescHi: 'ड्राइविंग लाइसेंस नवीनीकरण, नया लर्नर लाइसेंस, डुप्लीकेट एवं आईडीपी हेतु एकीकृत पोर्टल।',
    fullDesc: 'Access all Sarathi 4.0 citizen services including application submission, photo/signature upload, driving test slot booking, medical certificate submission, and live status tracking.',
    fullDescHi: 'सारथी 4.0 की सभी नागरिक सेवाओं तक पहुंच, जिसमें आवेदन, स्लॉट बुकिंग, दस्तावेज अपलोड और लाइव ट्रैकिंग शामिल है।',
    eligibility: ['Indian citizens meeting minimum age criteria under MV Act'],
    documents: [
      { name: 'Proof of Age & Address', description: 'Aadhaar / Passport / Voter ID', mandatory: true },
      { name: 'Medical Certificate (Form 1A)', description: 'Required for commercial DL or age 40+', mandatory: false }
    ],
    steps: [
      { stepNumber: 1, title: 'Select DL Service', description: 'Choose renewal, new LL, replacement, or endorsement' },
      { stepNumber: 2, title: 'Aadhaar Authentication', description: 'Faceless e-KYC validation' },
      { stepNumber: 3, title: 'Upload & Pay', description: 'Upload credentials and pay government fee' },
      { stepNumber: 4, title: 'Issue / Dispatch', description: 'Instant digital DL on DigiLocker / Smart card speed post' }
    ],
    fees: [{ label: 'Statutory Service Schedule', amount: 400 }],
    estimatedDays: 'Instant (LL) / 7–10 Days (DL)',
    tags: ['driving licence related services', 'dl', 'sarathi', 'renew dl', 'learner licence'],
    popular: true,
    onlineAvailable: true,
    iconName: 'CreditCard'
  },
  {
    id: 'vehicle-related-portal',
    category: 'vehicle',
    categoryLabel: 'Vehicle Services',
    categoryLabelHi: 'वाहन सेवाएं',
    title: 'Vehicle Related Services',
    titleHi: 'वाहन संबंधित सेवाएं',
    slug: 'vehicle-related-services',
    shortDesc: 'Complete online workflow for Vehicle Ownership Transfer, Registration Renewal, Duplicate RC, NOC, and Hypothecation.',
    shortDescHi: 'वाहन स्वामित्व हस्तांतरण, आरसी नवीनीकरण, डुप्लीकेट आरसी, एनओसी और हाइपोथिकेशन समाप्ति।',
    fullDesc: 'VAHAN 4.0 digital portal enabling contactless processing of vehicle registration lifecycle services with Aadhaar buyer-seller OTP validation and home delivery of smart cards.',
    fullDescHi: 'वाहन 4.0 डिजिटल पोर्टल जिसके माध्यम से वाहन पंजीकरण से जुड़ी सभी सेवाएं संपर्क रहित तरीके से पूर्ण की जा सकती हैं।',
    eligibility: ['Registered vehicle owners on National VAHAN Registry'],
    documents: [
      { name: 'Registration Certificate (RC)', description: 'Current RC copy', mandatory: true },
      { name: 'Valid Insurance & PUCC', description: 'Active policy and emission record', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Vehicle Identification', description: 'Verify vehicle via Reg No. and Chassis No.' },
      { stepNumber: 2, title: 'Service Selection', description: 'Select Transfer / Renewal / Duplicate / NOC' },
      { stepNumber: 3, title: 'Aadhaar e-KYC', description: 'Authenticate buyer and seller' },
      { stepNumber: 4, title: 'Fee Payment & Dispatch', description: 'Pay fees and track new RC smart card' }
    ],
    fees: [{ label: 'Statutory Service Fee', amount: 500 }],
    estimatedDays: '5–14 Working Days',
    tags: ['vehicle related services', 'vahan', 'rc transfer', 'ownership transfer', 'rc renewal', 'duplicate rc'],
    popular: true,
    onlineAvailable: true,
    iconName: 'Car'
  },
  {
    id: 'fitness-testing-service',
    category: 'vehicle',
    categoryLabel: 'Vehicle Services',
    categoryLabelHi: 'वाहन सेवाएं',
    title: 'Vehicle Fitness Testing',
    titleHi: 'वाहन फिटनेस परीक्षण (ATS)',
    slug: 'vehicle-fitness-testing',
    shortDesc: 'Automated test appointment booking, fitness certificate grant, and roadworthiness compliance renewal.',
    shortDescHi: 'स्वचालित परीक्षण स्टेशन (ATS) स्लॉट बुकिंग और फिटनेस प्रमाण पत्र नवीनीकरण।',
    fullDesc: 'Schedule vehicle inspection at Automated Testing Stations (ATS) or jurisdictional RTO test facilities. Mandatory for all commercial transport vehicles annually/biennially and non-transport vehicles after 15 years.',
    fullDescHi: 'स्वचालित परीक्षण स्टेशनों पर वाहन निरीक्षण स्लॉट बुक करें और फिटनेस प्रमाण पत्र प्राप्त करें।',
    eligibility: ['All transport vehicles and private vehicles completed 15 years'],
    documents: [
      { name: 'Vehicle Registration Certificate', description: 'Original RC', mandatory: true },
      { name: 'Tax Clearance & PUCC', description: 'Proof of all road taxes paid and valid PUCC', mandatory: true },
      { name: 'Speed Governor & VLTD Fitment', description: 'Calibration certificates (for transport class)', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Slot Booking', description: 'Select nearest ATS / RTO inspection track and date' },
      { stepNumber: 2, title: 'Pay Inspection Fee', description: 'Pay statutory fitness test and grant fees' },
      { stepNumber: 3, title: 'Automated Vehicle Test', description: 'Brake, headlight, emission, suspension, and steering automated evaluation' },
      { stepNumber: 4, title: 'Certificate Grant', description: 'Instant digital Form 38 Fitness Certificate generation' }
    ],
    fees: [
      { label: 'Automated Fitness Test Fee', amount: 600 },
      { label: 'Fitness Certificate Grant Fee', amount: 200 }
    ],
    estimatedDays: 'Same Day at ATS Center',
    tags: ['fitness', 'vehicle fitness testing', 'fitness test', 'ats', 'fitness certificate', 'roadworthiness'],
    onlineAvailable: true,
    iconName: 'Gauge'
  },
  {
    id: 'vehicle-recall-service',
    category: 'vehicle',
    categoryLabel: 'Vehicle Services',
    categoryLabelHi: 'वाहन सेवाएं',
    title: 'Vehicle Recall',
    titleHi: 'वाहन रिकॉल पोर्टल (सुरक्षा दोष)',
    slug: 'vehicle-recall',
    shortDesc: 'National portal for reporting manufacturing safety defects and checking vehicle recall notices issued by OEMs.',
    shortDescHi: 'निर्माताओं द्वारा जारी सुरक्षा रिकॉल नोटिस जांचें अथवा विनिर्माण सुरक्षा दोष रिपोर्ट करें।',
    fullDesc: 'Under Section 110A of the Motor Vehicles Act, vehicle owners can check if their vehicle identification number (VIN) is subject to a manufacturer safety recall or report systemic safety defects for government investigation.',
    fullDescHi: 'वाहन मालिक अपने वाहन का चेसिस नंबर दर्ज कर सुरक्षा रिकॉल नोटिस जांच सकते हैं अथवा वाहन सुरक्षा दोष रिपोर्ट कर सकते हैं।',
    eligibility: ['Any motor vehicle owner in India'],
    documents: [{ name: 'Registration Certificate (RC)', description: 'Chassis / VIN number', mandatory: true }],
    steps: [
      { stepNumber: 1, title: 'Enter Vehicle VIN / Chassis', description: 'Search central manufacturer defect database' },
      { stepNumber: 2, title: 'Recall Status Lookup', description: 'View active recall campaigns, affected components, and rectification guidelines' },
      { stepNumber: 3, title: 'Report Defect (Optional)', description: 'Submit structured report for unaddressed safety flaws' }
    ],
    fees: [{ label: 'Citizen Consumer Right', amount: 0 }],
    estimatedDays: 'Instant Lookup',
    tags: ['vehicle recall', 'recall', 'safety defect', 'oem recall', 'airbag defect'],
    onlineAvailable: true,
    iconName: 'AlertTriangle'
  },
  {
    id: 'checkpost-tax-service',
    category: 'compliance',
    categoryLabel: 'Compliance & Payments',
    categoryLabelHi: 'अनुपालन एवं भुगतान',
    title: 'Checkpost Tax',
    titleHi: 'चेकपोस्ट कर भुगतान (Border Tax)',
    slug: 'checkpost-tax',
    shortDesc: 'Pay border road tax and state entry tax online before entering a state boundary for commercial vehicles.',
    shortDescHi: 'वाणिज्यिक वाहनों हेतु राज्य सीमा में प्रवेश से पूर्व ऑनलाइन चेकपोस्ट व सीमा कर का भुगतान करें।',
    fullDesc: 'National Checkpost Tax Portal allows commercial vehicle operators (goods trucks, contract cabs, tourist buses) to calculate and remit state entry tax and passenger tax in advance, avoiding border congestion.',
    fullDescHi: 'वाणिज्यिक वाहन चालकों हेतु राज्य सीमा कर का अग्रिम डिजिटल भुगतान पोर्टल।',
    eligibility: ['Commercial transport vehicles operating on interstate routes'],
    documents: [
      { name: 'Vehicle Registration No.', description: 'Active VAHAN record', mandatory: true },
      { name: 'Permit & Fitness Details', description: 'Valid commercial permit', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Select Visiting State & Checkpost', description: 'Choose entry point and visiting duration' },
      { stepNumber: 2, title: 'Automatic Tax Assessment', description: 'System computes tax based on seating / gross vehicle weight' },
      { stepNumber: 3, title: 'Pay Online', description: 'Secure payment via NetBanking / UPI / Cards' },
      { stepNumber: 4, title: 'Digital Receipt', description: 'Download QR-coded border tax clearance receipt' }
    ],
    fees: [{ label: 'State Computed Border Tax', amount: 500 }],
    estimatedDays: 'Instant Online Receipt',
    tags: ['checkpost tax', 'border tax', 'entry tax', 'checkpost', 'commercial vehicle tax'],
    onlineAvailable: true,
    iconName: 'CreditCard'
  },
  {
    id: 'vahan-green-sewa-service',
    category: 'special',
    categoryLabel: 'Special & Digital Services',
    categoryLabelHi: 'विशेष एवं डिजिटल सेवाएं',
    title: 'Vahan Green Sewa',
    titleHi: 'वाहन ग्रीन सेवा (स्वच्छ गतिशीलता)',
    slug: 'vahan-green-sewa',
    shortDesc: 'Dedicated digital platform for Electric Vehicle (EV), Hybrid incentives, green tax rebates, and state subsidy tracking.',
    shortDescHi: 'इलेक्ट्रिक वाहन सब्सिडी, ग्रीन टैक्स छूट एवं स्वच्छ ऊर्जा गतिशीलता हेतु समर्पित डिजिटल मंच।',
    fullDesc: 'Vahan Green Sewa integrates state EV policies, central FAME/EMPS incentives, road tax exemptions on zero-emission vehicles, and green registration plate allocations.',
    fullDescHi: 'इलेक्ट्रिक एवं हाइब्रिड वाहनों के लिए सब्सिडी, टैक्स छूट एवं ग्रीन नंबर प्लेट जारी करने की एकीकृत सेवा।',
    eligibility: ['Purchasers and owners of battery electric vehicles (BEV), strong hybrid, or alternate fuel vehicles'],
    documents: [
      { name: 'Vehicle Purchase Invoice', description: 'OEM authorized bill', mandatory: true },
      { name: 'Bank Account Details', description: 'For direct DBT subsidy transfer', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Vehicle Identification', description: 'Verify electric vehicle chassis and model approval' },
      { stepNumber: 2, title: 'State Policy Mapping', description: 'Auto-calculate applicable state EV purchase subsidy and tax waiver' },
      { stepNumber: 3, title: 'Submit DBT Claim', description: 'Direct beneficiary transfer processing' }
    ],
    fees: [{ label: 'Green Initiative (Subsidy Enabled)', amount: 0 }],
    estimatedDays: 'Direct Processing',
    tags: ['vahan green sewa', 'green sewa', 'green', 'ev subsidy', 'electric vehicle', 'green tax'],
    onlineAvailable: true,
    iconName: 'Zap'
  },
  {
    id: 'ntr-service',
    category: 'special',
    categoryLabel: 'Special & Digital Services',
    categoryLabelHi: 'विशेष एवं डिजिटल सेवाएं',
    title: 'National Transport Repository',
    titleHi: 'राष्ट्रीय परिवहन डेटा रिपॉजिटरी (NTR)',
    slug: 'national-transport-repository',
    shortDesc: 'Centralized repository of national vehicle registrations, driver licencing metrics, and open data APIs.',
    shortDescHi: 'राष्ट्रीय वाहन एवं चालक डेटाबेस, सड़क सुरक्षा रुझान और ओपन डेटा एपीआई का केंद्रीय भंडार।',
    fullDesc: 'MoRTH National Transport Data Lake and Open Repository provides researchers, academic institutions, and enterprise developers access to anonymized national mobility datasets, vehicle population trends, and fuel transition analytics.',
    fullDescHi: 'सड़क परिवहन एवं राजमार्ग मंत्रालय का राष्ट्रीय ओपन डेटा भंडार एवं विश्लेषिकी पोर्टल।',
    eligibility: ['Open public access for statistical dashboards; API registration for developers'],
    documents: [{ name: 'Organization / Developer Credentials', description: 'Required for API access token', mandatory: false }],
    steps: [
      { stepNumber: 1, title: 'Explore Open Datasets', description: 'Browse national transport indicators and metrics' },
      { stepNumber: 2, title: 'Select Data Category', description: 'Vehicle registrations, licence issuance, safety statistics' },
      { stepNumber: 3, title: 'Export / API Access', description: 'Download open CSV/JSON or subscribe to public APIs' }
    ],
    fees: [{ label: 'Public Open Data', amount: 0 }],
    estimatedDays: 'Instant Access',
    tags: ['national transport repository', 'repository', 'ntr', 'transport data', 'open data'],
    onlineAvailable: true,
    iconName: 'Building'
  },
  {
    id: 'nr-services-public',
    category: 'national-register',
    categoryLabel: 'National Register',
    categoryLabelHi: 'राष्ट्रीय रजिस्टर',
    title: 'NR Services',
    titleHi: 'राष्ट्रीय रजिस्टर सार्वजनिक सेवाएं (NR Services)',
    slug: 'nr-services',
    shortDesc: 'Public citizen query interface to verify driving licence genuineness and vehicle registration status across India.',
    shortDescHi: 'ड्राइविंग लाइसेंस और वाहन पंजीकरण की राष्ट्रीय स्तर पर प्रामाणिकता एवं वैधता जांचने की सार्वजनिक सेवा।',
    fullDesc: 'Access the National Register (NR) database uniting all State Transport Departments. Check all-India validity of licences and registration certificates.',
    fullDescHi: 'अखिल भारतीय स्तर पर ड्राइविंग लाइसेंस एवं वाहन आरसी की प्रामाणिकता जांचने हेतु केंद्रीय राष्ट्रीय रजिस्टर सेवा।',
    eligibility: ['Open public citizen inquiry'],
    documents: [{ name: 'DL Number or Vehicle Registration Number', description: 'Identifier to query', mandatory: true }],
    steps: [
      { stepNumber: 1, title: 'Select Search Type', description: 'Driving Licence / Vehicle RC' },
      { stepNumber: 2, title: 'Enter Number & Captcha', description: 'Provide registered number' },
      { stepNumber: 3, title: 'Instant Verification', description: 'View genuine issuance record and validity status' }
    ],
    fees: [{ label: 'Public Query', amount: 0 }],
    estimatedDays: 'Instant Query',
    tags: ['nr services', 'nr', 'national register', 'national registry search', 'dl verification', 'rc verification'],
    onlineAvailable: true,
    iconName: 'Search'
  },
  {
    id: 'paid-nr-services-bulk',
    category: 'national-register',
    categoryLabel: 'National Register',
    categoryLabelHi: 'राष्ट्रीय रजिस्टर',
    title: 'Paid NR Services',
    titleHi: 'सशुल्क राष्ट्रीय रजिस्टर सेवाएं (Bulk Enterprise NR)',
    slug: 'paid-nr-services',
    shortDesc: 'Commercial high-volume API and web portal for Banks, NBFCs, Insurance Providers, and Law Enforcement agencies.',
    shortDescHi: 'बैंकों, बीमा कंपनियों एवं वित्तीय संस्थानों हेतु बड़े पैमाने पर डीएल/आरसी डेटा सत्यापन की सशुल्क व्यावसायिक एपीआई सेवा।',
    fullDesc: 'Enterprise B2B gateway providing high-throughput verified vehicle and driver record verification APIs with SLA guarantees for banking loan verification, insurance underwriting, and background verification.',
    fullDescHi: 'बैंकों और बीमा प्रदाताओं के लिए उच्च स्तरीय सुरक्षित थोक डीएल/आरसी सत्यापन एपीआई सेवा।',
    eligibility: ['Registered commercial enterprises, financial institutions, and authorized government agencies'],
    documents: [
      { name: 'Corporate Registration & GSTIN', description: 'Company credentials', mandatory: true },
      { name: 'Authorized Signatory Undertaking', description: 'Data protection and DPDP compliance commitment', mandatory: true }
    ],
    steps: [
      { stepNumber: 1, title: 'Enterprise Onboarding', description: 'Register organization account and verify credentials' },
      { stepNumber: 2, title: 'Select API Tier / Bulk Wallet', description: 'Choose query volume package' },
      { stepNumber: 3, title: 'Integration & Live Queries', description: 'Access REST APIs or upload batch CSV files for verification' }
    ],
    fees: [{ label: 'Commercial Tier Pricing (Per query basis)', amount: 10 }],
    estimatedDays: 'Sub-second API Execution',
    tags: ['paid nr services', 'paid nr', 'commercial nr', 'bulk verification', 'enterprise nr', 'insurance nr api'],
    onlineAvailable: true,
    iconName: 'Building'
  }
];

