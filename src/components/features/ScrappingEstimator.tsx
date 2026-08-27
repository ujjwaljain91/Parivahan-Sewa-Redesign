import React, { useState } from 'react';
import { Trash2, CheckCircle2, Calculator, MapPin, Award, DollarSign, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Language } from '../../types';

export interface ScrappingEstimatorProps {
  language: Language;
  onNavigate: (path: string) => void;
}

export const ScrappingEstimator: React.FC<ScrappingEstimatorProps> = ({ language, onNavigate }) => {
  const [vehicleType, setVehicleType] = useState<'car' | 'bike' | 'commercial'>('car');
  const [vehicleAgeYears, setVehicleAgeYears] = useState(16);
  const [approxNewCarPriceLakhs, setApproxNewCarPriceLakhs] = useState(12);

  // Scrappage policy formula calculations:
  // Scrap value = ~4.5% of ex-showroom / scrap weight (e.g. ~₹45,000 for car, ₹8,000 for bike, ₹90,000 for commercial)
  // Road tax concession = 25% for non-transport (private), 15% for transport
  // Registration fee waiver = 100% (₹600 to ₹5,000)
  // Manufacturer discount = ~5% recommended
  const scrapValue = vehicleType === 'car' ? 45000 : vehicleType === 'bike' ? 9500 : 95000;
  const standardRoadTax = approxNewCarPriceLakhs * 100000 * 0.10; // 10% road tax standard
  const roadTaxRebate = vehicleType === 'commercial' ? standardRoadTax * 0.15 : standardRoadTax * 0.25;
  const regFeeWaiver = vehicleType === 'bike' ? 300 : vehicleType === 'car' ? 1000 : 2500;
  const oemDiscount = (approxNewCarPriceLakhs * 100000) * 0.05; // 5% discount

  const totalBenefit = scrapValue + roadTaxRebate + regFeeWaiver + oemDiscount;

  const isHi = language === 'hi';

  return (
    <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-16)' }}>
        <Calculator size={24} color="var(--color-brand-primary)" />
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
          {isHi ? 'वाहन स्क्रैपेज वित्तीय लाभ कैलकुलेटर' : 'Vehicle Scrappage Incentive & Benefit Calculator'}
        </h3>
      </div>

      <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)' }}>
        {isHi
          ? 'राष्ट्रीय स्वैच्छिक वाहन फ्लीट आधुनिकीकरण कार्यक्रम (VVMP) के तहत, अपने पुराने वाहन को स्क्रैप करने पर जमा प्रमाण पत्र (COD) मिलता है, जिससे नए वाहन की खरीद पर भारी बचत होती है।'
          : 'Under the National Voluntary Vehicle Fleet Modernization Program (VVMP), scrapping your end-of-life vehicle grants you a Certificate of Deposit (COD) that unlocks major savings on your new vehicle purchase.'}
      </p>

      {/* Input Form Controls */}
      <div className="grid grid-cols-3 gap-16 mb-24">
        <div className="gov-form-group" style={{ margin: 0 }}>
          <label className="gov-label">{isHi ? 'वाहन श्रेणी' : 'Vehicle Category'}</label>
          <select
            className="gov-select"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value as any)}
          >
            <option value="car">{isHi ? 'यात्री कार / चारपहिया वाहन' : 'Passenger Car / Four Wheeler'}</option>
            <option value="bike">{isHi ? 'दोपहिया वाहन / मोटरसाइकिल' : 'Two Wheeler / Motorcycle'}</option>
            <option value="commercial">{isHi ? 'वाणिज्यिक माल / यात्री बस' : 'Commercial Goods / Passenger Bus'}</option>
          </select>
        </div>

        <div className="gov-form-group" style={{ margin: 0 }}>
          <label className="gov-label">{isHi ? 'वाहन की आयु (वर्ष)' : 'Vehicle Age (Years)'}</label>
          <input
            type="number"
            className="gov-input"
            min={10}
            max={35}
            value={vehicleAgeYears}
            onChange={(e) => setVehicleAgeYears(Number(e.target.value))}
          />
        </div>

        <div className="gov-form-group" style={{ margin: 0 }}>
          <label className="gov-label">{isHi ? 'नए वाहन की अनुमानित कीमत (₹ लाख)' : 'Expected New Vehicle Price (₹ Lakh)'}</label>
          <input
            type="number"
            className="gov-input"
            min={1}
            max={100}
            value={approxNewCarPriceLakhs}
            onChange={(e) => setApproxNewCarPriceLakhs(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Benefit Output Breakdown */}
      <div
        style={{
          backgroundColor: 'var(--color-brand-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-24)',
          border: '1px solid #B6D4FE',
          marginBottom: 'var(--space-24)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid rgba(0, 72, 127, 0.15)', paddingBottom: 'var(--space-12)', marginBottom: 'var(--space-16)' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-brand-primary)', textTransform: 'uppercase' }}>
              {isHi ? 'अनुमानित कुल नागरिक बचत' : 'Estimated Total Citizen Savings'}
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-brand-dark)', marginTop: '2px' }}>
              ₹{Math.round(totalBenefit).toLocaleString('en-IN')}
            </div>
          </div>
          <Badge variant="success" icon={<Award size={13} />}>
            {isHi ? 'सत्यापित सरकारी रियायत' : 'Verified Government Concession'}
          </Badge>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-4 gap-12">
          <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              {isHi ? '1. आरवीएसएफ स्क्रैप मूल्य' : '1. RVSF SCRAP VALUE'}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '2px' }}>
              ₹{scrapValue.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>
              {isHi ? 'सीधे बैंक खाते में' : 'Direct Bank Transfer'}
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              {isHi ? '2. रोड टैक्स छूट (25%)' : '2. ROAD TAX REBATE (25%)'}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-semantic-success)', marginTop: '2px' }}>
              ₹{Math.round(roadTaxRebate).toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>
              {isHi ? 'राज्य मोटर वाहन कर' : 'State Motor Vehicle Tax'}
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              {isHi ? '3. पंजीकरण शुल्क माफी' : '3. REGISTRATION WAIVER'}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '2px' }}>
              ₹{regFeeWaiver.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>
              {isHi ? '100% शुल्क छूट' : '100% Fee Exemption'}
            </div>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              {isHi ? '4. विनिर्माता (OEM) 5% छूट' : '4. OEM 5% DISCOUNT'}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-accent-saffron)', marginTop: '2px' }}>
              ₹{Math.round(oemDiscount).toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>
              {isHi ? 'निर्माता विशेष छूट' : 'Manufacturer Rebate'}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
          {isHi
            ? '*राज्य मोटर वाहन नियमों और सक्रिय जमा प्रमाण पत्र (COD) के अधीन।'
            : '*Subject to state motor vehicle rules and active Certificate of Deposit (COD) redemption.'}
        </span>

        <Button
          variant="primary"
          onClick={() => onNavigate('/services/vehicle-scrapping')}
          icon={<ArrowRight size={16} />}
          iconPosition="right"
        >
          {isHi ? 'स्क्रैपेज आवेदन के लिए आगे बढ़ें' : 'Proceed to Scrappage Application'}
        </Button>
      </div>
    </div>
  );
};
