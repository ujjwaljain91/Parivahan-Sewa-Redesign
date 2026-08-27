import React, { useState } from 'react';
import { Search, Car, Shield, CheckCircle2, AlertCircle, FileText, ArrowRight, Download, Repeat, RefreshCw, MapPin } from 'lucide-react';
import { mockVehicleData } from '../../data/mockCitizenData';
import { VehicleDetail, Language } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Alert } from '../ui/Alert';

export interface VehicleLookupCardProps {
  language: Language;
  onNavigate: (path: string) => void;
}

export const VehicleLookupCard: React.FC<VehicleLookupCardProps> = ({ language, onNavigate }) => {
  const [regNo, setRegNo] = useState('');
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [vehicle, setVehicle] = useState<VehicleDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (customReg?: string) => {
    const cleanReg = (customReg || regNo).replace(/[\s-]/g, '').toUpperCase();
    if (!cleanReg) {
      setError('Please enter a vehicle registration number (e.g. DL 01 AB 1234)');
      return;
    }

    setError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSearched(true);
      const match = mockVehicleData[cleanReg];
      if (match) {
        setVehicle(match);
      } else {
        // Dynamic fallback record for any typed registration
        setVehicle({
          registrationNo: (customReg || regNo).toUpperCase(),
          ownerName: 'VERIFIED VEHICLE OWNER',
          makerModel: 'MARUTI SUZUKI SWIFT VXI',
          vehicleClass: 'Motor Car (LMV)',
          fuelType: 'Petrol / BS-VI',
          emissionNorm: 'BHARAT STAGE VI',
          registrationDate: '10-MAY-2022',
          rcStatus: 'ACTIVE',
          fitnessValidUpto: '09-MAY-2037',
          insuranceValidUpto: '05-MAY-2027',
          insuranceCompany: 'NEW INDIA ASSURANCE CO. LTD.',
          puccValidUpto: '12-NOV-2026',
          puccNumber: 'PUC-NAT-99014',
          taxValidUpto: 'LTT PAID',
          financedBy: 'NO HYPOTHECATION',
          registeredRto: 'RTO CENTRAL DIVISION',
          state: 'National Transport Register'
        });
      }
    }, 400);
  };

  const handleDemo = (demoPlate: string) => {
    setRegNo(demoPlate);
    handleSearch(demoPlate);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)' }}>
      {/* Lookup Bar */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: 'var(--space-12)' }}>
        <div style={{ flex: 1, minWidth: '260px' }}>
          <input
            type="text"
            className="gov-input"
            style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}
            placeholder="e.g. DL 01 AB 1234"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value.toUpperCase())}
            aria-label="Vehicle registration number"
          />
        </div>
        <Button
          variant="primary"
          onClick={() => handleSearch()}
          loading={loading}
          icon={<Search size={18} />}
        >
          {language === 'hi' ? 'वाहन विवरण खोजें' : 'Search Vehicle'}
        </Button>
      </div>

      {/* Demo shortcuts */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: 'var(--space-24)', fontSize: '12px', color: 'var(--color-text-muted)' }}>
        <span>{language === 'hi' ? 'नमूना वाहन देखें:' : 'Try Sample Vehicles:'}</span>
        <button
          type="button"
          onClick={() => handleDemo('DL 01 AB 1234')}
          style={{ padding: '2px 8px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-brand-subtle)', color: 'var(--color-brand-primary)', border: '1px solid var(--color-border-light)', cursor: 'pointer', fontWeight: 600 }}
        >
          DL 01 AB 1234 (Hyundai Creta)
        </button>
        <button
          type="button"
          onClick={() => handleDemo('MH 02 CZ 5678')}
          style={{ padding: '2px 8px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-brand-subtle)', color: 'var(--color-brand-primary)', border: '1px solid var(--color-border-light)', cursor: 'pointer', fontWeight: 600 }}
        >
          MH 02 CZ 5678 (Honda Activa)
        </button>
        <button
          type="button"
          onClick={() => handleDemo('KA 05 MN 9012')}
          style={{ padding: '2px 8px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-brand-subtle)', color: 'var(--color-brand-primary)', border: '1px solid var(--color-border-light)', cursor: 'pointer', fontWeight: 600 }}
        >
          KA 05 MN 9012 (Tata Nexon EV)
        </button>
      </div>

      {error && <Alert variant="error">{error}</Alert>}

      {/* Vehicle Specification Display */}
      {searched && vehicle && (
        <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: 'var(--space-24)' }}>
          {/* Header Identity Card */}
          <div
            style={{
              padding: 'var(--space-24)',
              backgroundColor: 'var(--color-brand-subtle)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid #B6D4FE',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: 'var(--space-24)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid var(--color-brand-primary)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'monospace',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: 'var(--color-brand-dark)',
                    letterSpacing: '1px'
                  }}
                >
                  {vehicle.registrationNo}
                </span>
                <Badge variant={vehicle.rcStatus === 'ACTIVE' ? 'success' : 'error'}>
                  {language === 'hi' ? (vehicle.rcStatus === 'ACTIVE' ? 'सक्रिय आरसी' : 'अमान्य आरसी') : `RC ${vehicle.rcStatus}`}
                </Badge>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '8px', marginBottom: '2px' }}>
                {vehicle.makerModel}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0 }}>
                {language === 'hi' ? 'मालिक:' : 'Owner:'} <strong>{vehicle.ownerName}</strong> • {language === 'hi' ? 'श्रेणी:' : 'Class:'} <strong>{vehicle.vehicleClass}</strong>
              </p>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => alert(`Downloading official digital Vehicle RC summary for ${vehicle.registrationNo}`)}
              icon={<Download size={14} />}
            >
              {language === 'hi' ? 'आरसी विवरण डाउनलोड करें' : 'Download RC Extract'}
            </Button>
          </div>

          {/* 4 Compliance Cards Grid */}
          <div className="grid grid-cols-4 gap-16 mb-24">
            <div style={{ padding: 'var(--space-16)', backgroundColor: 'var(--color-bg-page)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {language === 'hi' ? 'फिटनेस वैधता' : 'FITNESS VALIDITY'}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '4px' }}>
                {vehicle.fitnessValidUpto}
              </div>
              <Badge variant="success" style={{ marginTop: '8px' }}>
                {language === 'hi' ? 'वैध' : 'Valid'}
              </Badge>
            </div>

            <div style={{ padding: 'var(--space-16)', backgroundColor: 'var(--color-bg-page)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {language === 'hi' ? 'बीमा वैधता' : 'INSURANCE VALIDITY'}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '4px' }}>
                {vehicle.insuranceValidUpto}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {vehicle.insuranceCompany}
              </div>
            </div>

            <div style={{ padding: 'var(--space-16)', backgroundColor: 'var(--color-bg-page)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {language === 'hi' ? 'पीयूसी प्रमाण पत्र' : 'PUC CERTIFICATE'}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '4px' }}>
                {vehicle.puccValidUpto}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                {language === 'hi' ? 'प्रमाणपत्र:' : 'Cert:'} {vehicle.puccNumber}
              </div>
            </div>

            <div style={{ padding: 'var(--space-16)', backgroundColor: 'var(--color-bg-page)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {language === 'hi' ? 'उत्सर्जन / ईंधन' : 'EMISSION / FUEL'}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '4px' }}>
                {vehicle.fuelType}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-semantic-success)', fontWeight: 600, marginTop: '4px' }}>
                {vehicle.emissionNorm}
              </div>
            </div>
          </div>

          {/* Details Table */}
          <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: 'var(--space-24)' }}>
            <table>
              <tbody>
                <tr>
                  <th style={{ width: '30%' }}>{language === 'hi' ? 'पंजीकृत आरटीओ कार्यालय' : 'Registered RTO Office'}</th>
                  <td>{vehicle.registeredRto} ({vehicle.state})</td>
                </tr>
                <tr>
                  <th>{language === 'hi' ? 'पंजीकरण तिथि' : 'Registration Date'}</th>
                  <td>{vehicle.registrationDate}</td>
                </tr>
                <tr>
                  <th>{language === 'hi' ? 'मोटर वाहन कर स्थिति' : 'Motor Vehicle Tax Status'}</th>
                  <td>{language === 'hi' && vehicle.taxValidUpto === 'LTT PAID' ? 'आजीवन कर (LTT) चुकता' : vehicle.taxValidUpto}</td>
                </tr>
                <tr>
                  <th>{language === 'hi' ? 'हाइपोथेकेशन / फाइनेंसर' : 'Hypothecation / Financier'}</th>
                  <td>{language === 'hi' && vehicle.financedBy === 'NO HYPOTHECATION' ? 'कोई ऋण प्रभार नहीं (ऋण-मुक्त)' : vehicle.financedBy}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Contextual Quick Actions for this Vehicle */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-12)' }}>
              {language === 'hi' ? `${vehicle.registrationNo} के लिए उपलब्ध सेवाएं` : `Available Services for ${vehicle.registrationNo}`}
            </h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onNavigate('/services/transfer-vehicle-ownership')}
                icon={<Repeat size={14} />}
              >
                {language === 'hi' ? 'स्वामित्व हस्तांतरण' : 'Transfer Ownership'}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onNavigate('/services/renewal-of-rc')}
                icon={<RefreshCw size={14} />}
              >
                {language === 'hi' ? 'पंजीकरण नवीनीकरण' : 'Renew Registration'}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onNavigate('/echallan')}
                icon={<Shield size={14} />}
              >
                {language === 'hi' ? 'लंबित चालान जांचें' : 'Check Pending Challans'}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onNavigate('/services/duplicate-rc')}
                icon={<FileText size={14} />}
              >
                {language === 'hi' ? 'डुप्लीकेट आरसी ऑर्डर करें' : 'Order Duplicate RC'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
