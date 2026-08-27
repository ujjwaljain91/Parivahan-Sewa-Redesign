import { CitizenTaskIntent } from '../types';

export const citizenTaskIntents: CitizenTaskIntent[] = [
  {
    id: 'task-renew-dl',
    intent: 'Renew my driving licence',
    intentHi: 'अपना ड्राइविंग लाइसेंस नवीनीकृत करें',
    serviceSlug: 'renew-driving-licence',
    category: 'Driving Licence',
    iconName: 'CreditCard',
    description: 'Expiring or expired DL? Apply online with contactless Aadhaar verification.',
    descriptionHi: 'लाइसेंस समाप्ति पर घर बैठे ऑनलाइन नवीनीकरण करें।',
    badge: 'Popular'
  },
  {
    id: 'task-transfer-vehicle',
    intent: 'Transfer vehicle ownership',
    intentHi: 'वाहन का स्वामित्व बदलें (बेचें/खरीदें)',
    serviceSlug: 'transfer-vehicle-ownership',
    category: 'Vehicle Services',
    iconName: 'Repeat',
    description: 'Bought or sold a vehicle? Complete legal ownership transfer with buyer-seller OTP.',
    descriptionHi: 'क्रेता-विक्रेता ओटीपी सत्यापन के साथ कानूनी रूप से आरसी ट्रांसफर करें।',
    badge: 'Contactless'
  },
  {
    id: 'task-check-challan',
    intent: 'Check & pay my traffic challans',
    intentHi: 'यातायात ई-चालान जांचें एवं भरें',
    serviceSlug: 'echallan',
    category: 'Compliance',
    iconName: 'AlertTriangle',
    description: 'Look up pending violation notices, view photo evidence, and clear fines.',
    descriptionHi: 'वाहन पर लगे चालान देखें और डिजिटल रसीद के साथ भुगतान करें।',
    badge: 'Instant'
  },
  {
    id: 'task-know-vehicle',
    intent: 'Find my vehicle RC & insurance details',
    intentHi: 'वाहन पंजीकरण एवं बीमा विवरण जानें',
    serviceSlug: 'know-your-vehicle',
    category: 'Vehicle Services',
    iconName: 'Search',
    description: 'Instant lookup of RC validity, BS-VI status, PUC, insurance, and road tax.',
    descriptionHi: 'आरसी, पीयूसी, बीमा और फिटनेस का संपूर्ण विवरण प्राप्त करें।'
  },
  {
    id: 'task-get-ll',
    intent: 'Get a new Learner Licence',
    intentHi: 'नया लर्नर (शिक्षार्थी) लाइसेंस बनवाएं',
    serviceSlug: 'learners-licence',
    category: 'Driving Licence',
    iconName: 'FileBadge',
    description: 'Take the proctored theory road safety test online from home and get instant LL.',
    descriptionHi: 'घर बैठे ऑनलाइन टेस्ट दें और तुरंत शिक्षार्थी लाइसेंस डाउनलोड करें।'
  },
  {
    id: 'task-renew-rc',
    intent: 'Renew my vehicle RC (15+ Years)',
    intentHi: '15 वर्ष पुराने वाहन की आरसी नवीनीकृत करें',
    serviceSlug: 'renewal-of-rc',
    category: 'Vehicle Services',
    iconName: 'RefreshCw',
    description: 'Book automated vehicle fitness inspection for 5-year registration extension.',
    descriptionHi: 'फिटनेस जांच बुक करें और 5 साल के लिए आरसी आगे बढ़ाएं।'
  },
  {
    id: 'task-scrap-vehicle',
    intent: 'Scrap my old/unfit vehicle',
    intentHi: 'पुराना वाहन स्क्रैप करें व टैक्स छूट पाएं',
    serviceSlug: 'vehicle-scrapping',
    category: 'Scrappage Policy',
    iconName: 'Trash2',
    description: 'Scrap ELV at authorized RVSF center and get up to 25% road tax rebate on new car.',
    descriptionHi: 'अधिकृत स्क्रैपिंग केंद्र पर वाहन जमा कर नए वाहन पर भारी टैक्स छूट पाएं।',
    badge: 'Tax Benefit'
  },
  {
    id: 'task-find-rto',
    intent: 'Find my jurisdiction RTO office',
    intentHi: 'अपना क्षेत्रीय परिवहन कार्यालय (RTO) खोजें',
    serviceSlug: 'rto-locator',
    category: 'Information',
    iconName: 'MapPin',
    description: 'Locate your regional transport office address, phone number, and helpdesk email.',
    descriptionHi: 'अपने नजदीकी आरटीओ का पता, फोन और संपर्क सूत्र देखें।'
  },
  {
    id: 'task-duplicate-rc',
    intent: 'Order duplicate RC / Lost RC',
    intentHi: 'खोई या फटी हुई आरसी दोबारा मंगवाएं',
    serviceSlug: 'duplicate-rc',
    category: 'Vehicle Services',
    iconName: 'Copy',
    description: 'Lost your vehicle smart card? Apply for official duplicate RC delivery.',
    descriptionHi: 'आरसी खोने पर आधिकारिक डुप्लीकेट कार्ड स्पीड पोस्ट से घर मंगाएं।'
  }
];

export const searchIntentKeywords = [
  { queries: ['renew dl', 'renew driving licence', 'dl renewal', 'licence expire', 'driving license renew', 'renewal'], slug: 'renew-driving-licence', title: 'Renew Driving Licence' },
  { queries: ['transfer vehicle', 'car ownership transfer', 'sell car', 'rc transfer', 'buyer seller transfer', 'ownership'], slug: 'transfer-vehicle-ownership', title: 'Transfer Vehicle Ownership' },
  { queries: ['challan', 'echallan', 'traffic fine', 'speeding fine', 'pay challan', 'pending challan'], slug: 'echallan', title: 'eChallan Search & Payment' },
  { queries: ['vehicle details', 'know your vehicle', 'rc details', 'car info', 'insurance check', 'owner details'], slug: 'know-your-vehicle', title: 'Know Your Vehicle' },
  { queries: ['learner licence', 'll apply', 'learn driving', 'learning test', 'theory test'], slug: 'learners-licence', title: "Apply for Learner's Licence" },
  { queries: ['scrap car', 'scrapping', 'rvsf', 'old vehicle scrap', 'vehicle scrappage policy', 'tax rebate'], slug: 'vehicle-scrapping', title: 'Vehicle Scrapping Portal' },
  { queries: ['duplicate rc', 'lost rc', 'lost registration', 'rc replacement'], slug: 'duplicate-rc', title: 'Duplicate Registration Certificate' },
  { queries: ['noc', 'state transfer', 'form 28', 'vehicle noc', 'rto noc'], slug: 'no-objection-certificate', title: 'No Objection Certificate (NOC)' },
  { queries: ['pucc', 'puc', 'pollution certificate', 'emission status', 'puc validity'], slug: 'puc-certificate', title: 'PUC Certificate & Status' },
  { queries: ['track', 'application status', 'check status', 'track dl', 'track rc'], slug: 'track', title: 'Track Application Status' },
  { queries: ['rto', 'find rto', 'rto address', 'rto office locator', 'rto phone'], slug: 'rto-locator', title: 'RTO Office Locator' }
];
