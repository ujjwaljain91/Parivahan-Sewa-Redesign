import { RtoLocation } from '../types';

export interface StateData {
  code: string;
  name: string;
  nameHi: string;
  rtos: RtoLocation[];
}

export const statesAndRtos: StateData[] = [
  {
    code: 'DL',
    name: 'Delhi (NCT)',
    nameHi: 'दिल्ली (राष्ट्रीय राजधानी क्षेत्र)',
    rtos: [
      { code: 'DL-01', name: 'Mall Road, North Delhi', stateCode: 'DL', stateName: 'Delhi', address: '5/9 Under Hill Road, Civil Lines, Delhi - 110054', phone: '011-23970220', email: 'mlo.north-dot@delhi.gov.in' },
      { code: 'DL-02', name: 'IP Depot, New Delhi', stateCode: 'DL', stateName: 'Delhi', address: 'Indraprastha Estate, Near ITO, New Delhi - 110002', phone: '011-23378905', email: 'mlo.ip-dot@delhi.gov.in' },
      { code: 'DL-03', name: 'Sheikh Sarai, South Delhi', stateCode: 'DL', stateName: 'Delhi', address: 'DDA Commercial Complex, Sheikh Sarai Phase II, New Delhi - 110017', phone: '011-29255866', email: 'mlo.south-dot@delhi.gov.in' },
      { code: 'DL-04', name: 'Janakpuri, West Delhi', stateCode: 'DL', stateName: 'Delhi', address: 'Block C2D, Janakpuri, New Delhi - 110058', phone: '011-25599818', email: 'mlo.west-dot@delhi.gov.in' },
      { code: 'DL-05', name: 'Loni Road, North East Delhi', stateCode: 'DL', stateName: 'Delhi', address: 'Near DTC Depot, Loni Road, Shahdara, Delhi - 110093', phone: '011-22812233', email: 'mlo.ne-dot@delhi.gov.in' },
      { code: 'DL-06', name: 'Sarai Kale Khan, South East Delhi', stateCode: 'DL', stateName: 'Delhi', address: 'ISBT Complex, Sarai Kale Khan, New Delhi - 110013', phone: '011-24355522', email: 'mlo.se-dot@delhi.gov.in' }
    ]
  },
  {
    code: 'MH',
    name: 'Maharashtra',
    nameHi: 'महाराष्ट्र',
    rtos: [
      { code: 'MH-01', name: 'Mumbai (South / Tardeo)', stateCode: 'MH', stateName: 'Maharashtra', address: 'Old Bodyguard Lane, Tulsiwadi, Tardeo, Mumbai - 400034', phone: '022-23532337', email: 'rto.mumbaisouth@mahatranscom.in' },
      { code: 'MH-02', name: 'Mumbai (West / Andheri)', stateCode: 'MH', stateName: 'Maharashtra', address: 'D/111, Ambivali Village, Versova Road, Andheri West, Mumbai - 400053', phone: '022-26366952', email: 'rto.mumbaiwest@mahatranscom.in' },
      { code: 'MH-03', name: 'Mumbai (East / Wadala)', stateCode: 'MH', stateName: 'Maharashtra', address: 'Truck Terminal, Wadala Road, Mumbai - 400037', phone: '022-24036472', email: 'rto.mumbaieast@mahatranscom.in' },
      { code: 'MH-12', name: 'Pune Regional Transport Office', stateCode: 'MH', stateName: 'Maharashtra', address: '38, Dr. Ambedkar Road, Sangamvadi, Pune - 411001', phone: '020-26058080', email: 'rto.pune@mahatranscom.in' },
      { code: 'MH-14', name: 'Pimpri-Chinchwad', stateCode: 'MH', stateName: 'Maharashtra', address: 'Sector 6, PCNTDA, Bhosari, Pune - 411026', phone: '020-27122712', email: 'rto.pcmc@mahatranscom.in' },
      { code: 'MH-31', name: 'Nagpur (Urban)', stateCode: 'MH', stateName: 'Maharashtra', address: 'Giripeth, Civil Lines, Nagpur - 440001', phone: '0712-2560555', email: 'rto.nagpur@mahatranscom.in' }
    ]
  },
  {
    code: 'KA',
    name: 'Karnataka',
    nameHi: 'कर्नाटक',
    rtos: [
      { code: 'KA-01', name: 'Bengaluru Central (Koramangala)', stateCode: 'KA', stateName: 'Karnataka', address: 'BDA Shopping Complex, Koramangala, Bengaluru - 560034', phone: '080-25533525', email: 'rto-kor-ka@nic.in' },
      { code: 'KA-02', name: 'Bengaluru West (Rajajinagar)', stateCode: 'KA', stateName: 'Karnataka', address: '2nd Block, Rajajinagar, Bengaluru - 560010', phone: '080-23324545', email: 'rto-raj-ka@nic.in' },
      { code: 'KA-03', name: 'Bengaluru East (Indiranagar)', stateCode: 'KA', stateName: 'Karnataka', address: 'Binnamangala, 2nd Stage, Indiranagar, Bengaluru - 560038', phone: '080-25253838', email: 'rto-ind-ka@nic.in' },
      { code: 'KA-05', name: 'Bengaluru South (Jayanagar)', stateCode: 'KA', stateName: 'Karnataka', address: 'Shopping Complex, 4th Block, Jayanagar, Bengaluru - 560011', phone: '080-26630808', email: 'rto-jay-ka@nic.in' }
    ]
  },
  {
    code: 'UP',
    name: 'Uttar Pradesh',
    nameHi: 'उत्तर प्रदेश',
    rtos: [
      { code: 'UP-16', name: 'Noida / Gautam Buddha Nagar', stateCode: 'UP', stateName: 'Uttar Pradesh', address: 'Sector 32, Near City Centre Metro, Noida - 201301', phone: '0120-2505500', email: 'arot-gbn-up@nic.in' },
      { code: 'UP-14', name: 'Ghaziabad', stateCode: 'UP', stateName: 'Uttar Pradesh', address: 'Bulandshahr Road Industrial Area, Ghaziabad - 201009', phone: '0120-2700100', email: 'arot-gzb-up@nic.in' },
      { code: 'UP-32', name: 'Lucknow (Transport Nagar)', stateCode: 'UP', stateName: 'Uttar Pradesh', address: 'Transport Nagar, Kanpur Road, Lucknow - 226012', phone: '0522-2436000', email: 'rto-lko-up@nic.in' }
    ]
  },
  {
    code: 'TN',
    name: 'Tamil Nadu',
    nameHi: 'तमिलनाडु',
    rtos: [
      { code: 'TN-01', name: 'Chennai Central (Ayanavaram)', stateCode: 'TN', stateName: 'Tamil Nadu', address: 'Medavakkam Tank Road, Kellys, Chennai - 600010', phone: '044-26425100', email: 'rto.chncen@tn.gov.in' },
      { code: 'TN-02', name: 'Chennai North West (Anna Nagar)', stateCode: 'TN', stateName: 'Tamil Nadu', address: 'Plot 3110, Anna Nagar West, Chennai - 600040', phone: '044-26154100', email: 'rto.chnnw@tn.gov.in' },
      { code: 'TN-07', name: 'Chennai South (Thiruvanmiyur)', stateCode: 'TN', stateName: 'Tamil Nadu', address: 'East Coast Road, Thiruvanmiyur, Chennai - 600041', phone: '044-24412200', email: 'rto.chnst@tn.gov.in' }
    ]
  }
];
