import { VehicleDetail, DrivingLicenceDetail, ChallanRecord, ApplicationTrackingRecord } from '../types';

export const mockVehicleData: Record<string, VehicleDetail> = {
  'DL01AB1234': {
    registrationNo: 'DL 01 AB 1234',
    ownerName: 'RAJESH KUMAR SHARMA',
    makerModel: 'HYUNDAI CRETA 1.5 SX PETROL',
    vehicleClass: 'Motor Car (LMV)',
    fuelType: 'Petrol / BS-VI',
    emissionNorm: 'BHARAT STAGE VI',
    registrationDate: '14-AUG-2021',
    rcStatus: 'ACTIVE',
    fitnessValidUpto: '13-AUG-2036',
    insuranceValidUpto: '10-AUG-2027',
    insuranceCompany: 'ICICI LOMBARD GENERAL INSURANCE CO. LTD.',
    puccValidUpto: '15-OCT-2026',
    puccNumber: 'DL01PUC89214',
    taxValidUpto: 'ONE-TIME LTT PAID',
    financedBy: 'STATE BANK OF INDIA (AUTO LOAN DIV)',
    registeredRto: 'DL-01 (MALL ROAD, NORTH DELHI)',
    state: 'Delhi'
  },
  'MH02CZ5678': {
    registrationNo: 'MH 02 CZ 5678',
    ownerName: 'PRIYA SUNIL DESHMUKH',
    makerModel: 'HONDA ACTIVA 6G 110CC',
    vehicleClass: 'Motor Cycle with Gear (2WN)',
    fuelType: 'Petrol / BS-VI',
    emissionNorm: 'BHARAT STAGE VI',
    registrationDate: '02-FEB-2022',
    rcStatus: 'ACTIVE',
    fitnessValidUpto: '01-FEB-2037',
    insuranceValidUpto: '28-JAN-2027',
    insuranceCompany: 'HDFC ERGO GENERAL INSURANCE',
    puccValidUpto: '04-DEC-2026',
    puccNumber: 'MH02PUC55120',
    taxValidUpto: 'ONE-TIME LTT PAID',
    financedBy: 'NO HYPOTHECATION',
    registeredRto: 'MH-02 (ANDHERI, MUMBAI WEST)',
    state: 'Maharashtra'
  },
  'KA05MN9012': {
    registrationNo: 'KA 05 MN 9012',
    ownerName: 'ARAVIND VENKATESH',
    makerModel: 'TATA NEXON EV MAX EMPOWERED',
    vehicleClass: 'Electric Motor Car (LMV-EV)',
    fuelType: 'Pure Electric / Battery',
    emissionNorm: 'ZERO EMISSION (ELECTRIC)',
    registrationDate: '18-NOV-2023',
    rcStatus: 'ACTIVE',
    fitnessValidUpto: '17-NOV-2038',
    insuranceValidUpto: '15-NOV-2026',
    insuranceCompany: 'TATA AIG GENERAL INSURANCE',
    puccValidUpto: 'EXEMPT (ELECTRIC VEHICLE)',
    puccNumber: 'EV-EXEMPT-CENTRAL',
    taxValidUpto: 'EXEMPT (KARNATAKA EV SUBSIDY)',
    financedBy: 'HDFC BANK AUTO FINANCE',
    registeredRto: 'KA-05 (JAYANAGAR, BENGALURU SOUTH)',
    state: 'Karnataka'
  }
};

export const mockDrivingLicence: DrivingLicenceDetail = {
  dlNumber: 'DL-0420180045612',
  holderName: 'RAJESH KUMAR SHARMA',
  dob: '15-MAY-1988',
  bloodGroup: 'B +ve',
  issueDate: '12-JUN-2018',
  validityNonTransport: '14-MAY-2028',
  validityTransport: 'NA',
  status: 'ACTIVE',
  rtoName: 'DL-04 (JANAKPURI, WEST DELHI)',
  vehicleClasses: [
    { code: 'MCWG', name: 'Motorcycle with Gear', issueDate: '12-JUN-2018' },
    { code: 'LMV', name: 'Light Motor Vehicle (Car/Jeep)', issueDate: '12-JUN-2018' }
  ]
};

export const mockChallans: ChallanRecord[] = [
  {
    challanNo: 'DL89124009214',
    vehicleNo: 'DL 01 AB 1234',
    violationDate: '12-AUG-2026 14:32 IST',
    location: 'Ring Road near Moolchand Underpass, New Delhi',
    offense: 'Exceeding Prescribed Speed Limit (Speed: 78 km/h in 60 km/h Zone)',
    mvActSection: 'Sec 183(1) Motor Vehicles Act 1988',
    amount: 2000,
    status: 'PENDING',
    evidencePhoto: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&auto=format&fit=crop&q=80'
  },
  {
    challanNo: 'DL74102998311',
    vehicleNo: 'DL 01 AB 1234',
    violationDate: '02-JUL-2026 09:15 IST',
    location: 'ITO Intersection Signal, Central Delhi',
    offense: 'Jumping Red Light Signal (Camera Captured)',
    mvActSection: 'Sec 184(c) MV (Amendment) Act 2019',
    amount: 1000,
    status: 'PENDING',
    evidencePhoto: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&auto=format&fit=crop&q=80'
  },
  {
    challanNo: 'DL62091448102',
    vehicleNo: 'DL 01 AB 1234',
    violationDate: '10-JAN-2026 11:20 IST',
    location: 'Connaught Place Outer Circle, New Delhi',
    offense: 'Unauthorized Parking in No Parking Zone',
    mvActSection: 'Sec 177 MV Act 1988',
    amount: 500,
    status: 'PAID',
    paymentDate: '11-JAN-2026',
    transactionId: 'SBI-EPAY-8891204198'
  }
];

export const mockTrackingApplications: Record<string, ApplicationTrackingRecord> = {
  'PARI-2026-123456': {
    applicationNo: 'PARI-2026-123456',
    applicantName: 'RAJESH KUMAR SHARMA',
    serviceName: 'Renewal of Driving Licence',
    submissionDate: '20-AUG-2026',
    currentStage: 4,
    stages: [
      { stageNumber: 1, name: 'Application Submitted', status: 'COMPLETED', completedOn: '20-AUG-2026 10:15 IST', remarks: 'Aadhaar e-KYC verified successfully.' },
      { stageNumber: 2, name: 'Fee Payment Received', status: 'COMPLETED', completedOn: '20-AUG-2026 10:20 IST', remarks: 'Transaction ₹295 confirmed via Bharatkosh.' },
      { stageNumber: 3, name: 'Documents Verification', status: 'COMPLETED', completedOn: '22-AUG-2026 16:45 IST', remarks: 'Form 1A medical certificate verified by RTO Medical Officer.' },
      { stageNumber: 4, name: 'Scrutiny & Approval by MLO', status: 'IN_PROGRESS', remarks: 'Under final approval by Motor Licensing Officer (MLO), Janakpuri RTO.' },
      { stageNumber: 5, name: 'Smart Card Printing', status: 'PENDING' },
      { stageNumber: 6, name: 'Speed Post Dispatch', status: 'PENDING' }
    ],
    rto: 'DL-04 (Janakpuri, Delhi)',
    status: 'IN_PROCESS'
  },
  'PARI-2026-DL-89412': {
    applicationNo: 'PARI-2026-DL-89412',
    applicantName: 'RAJESH KUMAR SHARMA',
    serviceName: 'Renewal of Driving Licence',
    submissionDate: '24-AUG-2026',
    currentStage: 2,
    stages: [
      { stageNumber: 1, name: 'Application Submitted', status: 'COMPLETED', completedOn: '24-AUG-2026', remarks: 'Form data recorded.' },
      { stageNumber: 2, name: 'Fee Payment Received', status: 'COMPLETED', completedOn: '24-AUG-2026', remarks: '₹295 paid successfully.' },
      { stageNumber: 3, name: 'Documents Verification', status: 'IN_PROGRESS', remarks: 'Document queue for RTO scrutiny.' },
      { stageNumber: 4, name: 'Approval by MLO', status: 'PENDING' },
      { stageNumber: 5, name: 'Smart Card Printing', status: 'PENDING' },
      { stageNumber: 6, name: 'Speed Post Dispatch', status: 'PENDING' }
    ],
    rto: 'DL-01 (Mall Road, North Delhi)',
    status: 'IN_PROCESS'
  }
};
