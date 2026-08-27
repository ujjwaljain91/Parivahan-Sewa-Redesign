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
  }
];
