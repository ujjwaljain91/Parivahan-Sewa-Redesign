export type Language = 'en' | 'hi';
export type TextSize = 'normal' | 'large' | 'extra-large';

export type UserRole = 'citizen' | 'dealer' | 'staff' | null;

export interface ServiceStep {
  stepNumber: number;
  title: string;
  titleHi?: string;
  description: string;
  descriptionHi?: string;
}

export interface RequiredDoc {
  name: string;
  nameHi?: string;
  description: string;
  mandatory: boolean;
  sampleUrl?: string;
}

export interface FeeItem {
  label: string;
  labelHi?: string;
  amount: number;
}

export interface ServiceItem {
  id: string;
  category: 'driving-licence' | 'vehicle' | 'permits' | 'compliance' | 'other' | 'business' | 'national-register' | 'special';
  categoryLabel: string;
  categoryLabelHi: string;
  title: string;
  titleHi: string;
  slug: string;
  shortDesc: string;
  shortDescHi: string;
  fullDesc: string;
  fullDescHi: string;
  eligibility: string[];
  eligibilityHi?: string[];
  documents: RequiredDoc[];
  steps: ServiceStep[];
  fees: FeeItem[];
  estimatedDays: string;
  tags: string[];
  popular?: boolean;
  onlineAvailable: boolean;
  iconName: string;
}

export interface CitizenTaskIntent {
  id: string;
  intent: string;
  intentHi: string;
  serviceSlug: string;
  category: string;
  iconName: string;
  description: string;
  descriptionHi: string;
  badge?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  titleHi: string;
  category: 'Important' | 'Advisory' | 'Service Update' | 'Policy' | 'Draft' | 'Final';
  date: string;
  fileSize?: string;
  gazetteNumber?: string;
  pdfUrl: string;
  description: string;
}

export interface FormItem {
  formNo: string;
  title: string;
  titleHi: string;
  serviceCategory: string;
  pages: number;
  fileSize: string;
  description: string;
  pdfUrl: string;
}

export interface MediaItem {
  id: string;
  type: 'press' | 'circular' | 'newsletter' | 'video';
  title: string;
  titleHi: string;
  date: string;
  year: number;
  category: string;
  source?: string;
  thumbnailUrl?: string;
  fileSize?: string;
}

export interface VehicleDetail {
  registrationNo: string;
  ownerName: string;
  makerModel: string;
  vehicleClass: string;
  fuelType: string;
  emissionNorm: string;
  registrationDate: string;
  rcStatus: 'ACTIVE' | 'EXPIRED' | 'SUSPENDED';
  fitnessValidUpto: string;
  insuranceValidUpto: string;
  insuranceCompany: string;
  puccValidUpto: string;
  puccNumber: string;
  taxValidUpto: string;
  financedBy: string;
  registeredRto: string;
  state: string;
}

export interface DrivingLicenceDetail {
  dlNumber: string;
  holderName: string;
  dob: string;
  bloodGroup: string;
  issueDate: string;
  validityNonTransport: string;
  validityTransport: string;
  status: 'ACTIVE' | 'EXPIRED' | 'RENEWAL_DUE';
  rtoName: string;
  vehicleClasses: { code: string; name: string; issueDate: string }[];
}

export interface ChallanRecord {
  challanNo: string;
  vehicleNo: string;
  violationDate: string;
  location: string;
  offense: string;
  mvActSection: string;
  amount: number;
  status: 'PENDING' | 'PAID' | 'DISPUTED';
  paymentDate?: string;
  transactionId?: string;
  evidencePhoto?: string;
}

export interface ApplicationTrackingRecord {
  applicationNo: string;
  applicantName: string;
  serviceName: string;
  submissionDate: string;
  currentStage: number; // 1 to 6
  stages: {
    stageNumber: number;
    name: string;
    status: 'COMPLETED' | 'IN_PROGRESS' | 'PENDING';
    completedOn?: string;
    remarks?: string;
  }[];
  rto: string;
  status: 'IN_PROCESS' | 'APPROVED' | 'REJECTED' | 'DISPATCHED';
}

export interface RtoLocation {
  code: string;
  name: string;
  stateCode: string;
  stateName: string;
  address: string;
  phone: string;
  email: string;
}
