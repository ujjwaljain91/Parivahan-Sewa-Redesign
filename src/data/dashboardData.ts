export interface DashboardMetric {
  title: string;
  titleHi: string;
  value: string;
  change: string;
  positive: boolean;
  subtext: string;
}

export const nationalDashboardKPIs: DashboardMetric[] = [
  {
    title: 'Total Registered Vehicles',
    titleHi: 'कुल पंजीकृत वाहन',
    value: '38.42 Crore',
    change: '+7.4% YoY',
    positive: true,
    subtext: 'Digitized in Central Vahan 4.0'
  },
  {
    title: 'Active Driving Licences',
    titleHi: 'सक्रिय ड्राइविंग लाइसेंस',
    value: '22.18 Crore',
    change: '+5.2% YoY',
    positive: true,
    subtext: 'Digitized in Central Sarathi 4.0'
  },
  {
    title: 'Electric Vehicles (EVs)',
    titleHi: 'इलेक्ट्रिक वाहन (EV)',
    value: '48.9 Lakh',
    change: '+42.8% YoY',
    positive: true,
    subtext: 'Green Mobility Adoption'
  },
  {
    title: 'eChallans Processed',
    titleHi: 'निपटारे किए गए ई-चालान',
    value: '14.2 Crore',
    change: '+18.1% YoY',
    positive: true,
    subtext: 'Digital Court & Online Portals'
  }
];

export const registrationFuelShare = [
  { category: 'Petrol / Hybrid', share: 58.2, count: '2.23 Cr', color: '#00487F' },
  { category: 'Diesel', share: 24.6, count: '94.5 L', color: '#1E4567' },
  { category: 'Electric (EV)', share: 8.4, count: '32.2 L', color: '#198754' },
  { category: 'CNG / Clean Gas', share: 8.8, count: '33.8 L', color: '#F28C28' }
];

export const stateRegistrationsRank = [
  { state: 'Maharashtra', code: 'MH', vehicles: '3.92 Cr', evShare: '9.2%', dls: '2.45 Cr' },
  { state: 'Uttar Pradesh', code: 'UP', vehicles: '4.15 Cr', evShare: '12.4%', dls: '2.80 Cr' },
  { state: 'Tamil Nadu', code: 'TN', vehicles: '3.42 Cr', evShare: '8.1%', dls: '2.10 Cr' },
  { state: 'Karnataka', code: 'KA', vehicles: '2.88 Cr', evShare: '11.6%', dls: '1.95 Cr' },
  { state: 'Gujarat', code: 'GJ', vehicles: '2.64 Cr', evShare: '7.8%', dls: '1.74 Cr' },
  { state: 'Delhi (NCT)', code: 'DL', vehicles: '1.42 Cr', evShare: '14.5%', dls: '1.12 Cr' }
];
