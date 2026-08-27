import React, { useState } from 'react';
import {
  User, Car, CreditCard, Clock, AlertTriangle, FileText,
  Calendar, CheckCircle2, Download, ShieldCheck, Repeat, RefreshCw,
  ExternalLink, ChevronRight, ArrowRight
} from 'lucide-react';
import { mockDrivingLicence, mockVehicleData, mockChallans, mockTrackingApplications } from '../data/mockCitizenData';
import { Language } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Timeline } from '../components/ui/Timeline';

export interface MyParivahanPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const MyParivahanPage: React.FC<MyParivahanPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';
  const [activeTab, setActiveTab] = useState<'vehicles' | 'dl' | 'applications' | 'challans' | 'documents' | 'appointments'>('vehicles');

  const myVehicle = mockVehicleData['DL01AB1234'];
  const myDl = mockDrivingLicence;
  const myApp = mockTrackingApplications['PARI-2026-123456'];
  const pendingChallans = mockChallans.filter((c) => c.status === 'PENDING');

  return (
    <div className="gov-container py-48" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'मेरा परिवहन' : 'My Parivahan Dashboard' }]}
        onNavigate={onNavigate}
      />

      {/* Citizen Welcome Header */}
      <div
        style={{
          backgroundColor: 'var(--color-brand-dark)',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-32) var(--space-32)',
          marginBottom: 'var(--space-40)',
          borderBottom: '4px solid var(--color-accent-saffron)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span className="gov-badge gov-badge-saffron">
                {isHi ? 'डिजीलॉकर एवं आधार सत्यापित' : 'DigiLocker & Aadhaar Synced'}
              </span>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>
                {isHi ? 'नागरिक आईडी:' : 'Citizen ID:'} IN-DL-894120
              </span>
            </div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
              {isHi ? 'स्वागत है, राजेश कुमार शर्मा' : 'Welcome back, RAJESH KUMAR SHARMA'}
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', margin: '6px 0 0' }}>
              {isHi
                ? 'पंजीकृत मोबाइल: +91-98*****109 • अधिकार क्षेत्र: DL-04 (जनकपुरी आरटीओ, दिल्ली)'
                : 'Registered Mobile: +91-98*****109 • Jurisdiction: DL-04 (Janakpuri RTO, Delhi)'}
            </p>
          </div>

          <Button
            variant="saffron"
            size="sm"
            onClick={() => onNavigate('/services/renew-driving-licence')}
            icon={<RefreshCw size={14} />}
          >
            {isHi ? 'समाप्त हो रहे डीएल का नवीनीकरण करें' : 'Renew Expiring DL'}
          </Button>
        </div>
      </div>

      {/* 6 Metric KPI Cards (Enhanced Spacing) */}
      <div className="grid grid-cols-6 gap-24 mb-40">
        <Card
          interactive
          onClick={() => setActiveTab('vehicles')}
          style={{
            padding: 'var(--space-24)',
            backgroundColor: activeTab === 'vehicles' ? 'var(--color-brand-subtle)' : 'var(--color-bg-surface)',
            border: activeTab === 'vehicles' ? '2px solid var(--color-brand-primary)' : '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '140px'
          }}
        >
          <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 700 }}>
            {isHi ? 'मेरे वाहन' : 'MY VEHICLES'}
          </div>
          <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: '4px 0' }}>
            {isHi ? '1 सक्रिय' : '1 Active'}
          </div>
          <Badge variant="success">{isHi ? 'सक्रिय आरसी' : 'RC Active'}</Badge>
        </Card>

        <Card
          interactive
          onClick={() => setActiveTab('dl')}
          style={{
            padding: 'var(--space-24)',
            backgroundColor: activeTab === 'dl' ? 'var(--color-brand-subtle)' : 'var(--color-bg-surface)',
            border: activeTab === 'dl' ? '2px solid var(--color-brand-primary)' : '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '140px'
          }}
        >
          <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 700 }}>
            {isHi ? 'ड्राइविंग लाइसेंस' : 'DRIVING LICENCE'}
          </div>
          <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: '4px 0' }}>
            {isHi ? 'वैध' : 'Valid'}
          </div>
          <Badge variant="info">{isHi ? '2028 तक' : 'Till 2028'}</Badge>
        </Card>

        <Card
          interactive
          onClick={() => setActiveTab('applications')}
          style={{
            padding: 'var(--space-24)',
            backgroundColor: activeTab === 'applications' ? 'var(--color-brand-subtle)' : 'var(--color-bg-surface)',
            border: activeTab === 'applications' ? '2px solid var(--color-brand-primary)' : '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '140px'
          }}
        >
          <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 700 }}>
            {isHi ? 'आवेदन' : 'APPLICATIONS'}
          </div>
          <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-brand-primary)', margin: '4px 0' }}>
            {isHi ? '1 सक्रिय' : '1 Active'}
          </div>
          <Badge variant="info">{isHi ? 'चरण 4 / 6' : 'Stage 4 of 6'}</Badge>
        </Card>

        <Card
          interactive
          onClick={() => setActiveTab('challans')}
          style={{
            padding: 'var(--space-24)',
            backgroundColor: activeTab === 'challans' ? 'var(--color-brand-subtle)' : 'var(--color-bg-surface)',
            border: activeTab === 'challans' ? '2px solid var(--color-brand-primary)' : '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '140px'
          }}
        >
          <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 700 }}>
            {isHi ? 'चालान' : 'CHALLANS'}
          </div>
          <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-semantic-error)', margin: '4px 0' }}>
            {isHi ? '2 लंबित' : '2 Pending'}
          </div>
          <Badge variant="error">{isHi ? '₹3,000 देय' : '₹3,000 Due'}</Badge>
        </Card>

        <Card
          interactive
          onClick={() => setActiveTab('documents')}
          style={{
            padding: 'var(--space-24)',
            backgroundColor: activeTab === 'documents' ? 'var(--color-brand-subtle)' : 'var(--color-bg-surface)',
            border: activeTab === 'documents' ? '2px solid var(--color-brand-primary)' : '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '140px'
          }}
        >
          <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 700 }}>
            {isHi ? 'डिजीलॉकर' : 'DIGILOCKER'}
          </div>
          <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: '4px 0' }}>
            {isHi ? '4 सिंक' : '4 Synced'}
          </div>
          <Badge variant="success">{isHi ? 'सत्यापित' : 'Verified'}</Badge>
        </Card>

        <Card
          interactive
          onClick={() => setActiveTab('appointments')}
          style={{
            padding: 'var(--space-24)',
            backgroundColor: activeTab === 'appointments' ? 'var(--color-brand-subtle)' : 'var(--color-bg-surface)',
            border: activeTab === 'appointments' ? '2px solid var(--color-brand-primary)' : '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '140px'
          }}
        >
          <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 700 }}>
            {isHi ? 'अपॉइंटमेंट' : 'APPOINTMENTS'}
          </div>
          <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: '4px 0' }}>
            {isHi ? 'कोई नहीं' : 'None'}
          </div>
          <Badge variant="neutral">{isHi ? 'स्लॉट बुक करें' : 'Book Slot'}</Badge>
        </Card>
      </div>

      {/* Tab Content Areas */}

      {/* TAB 1: MY VEHICLES */}
      {activeTab === 'vehicles' && (
        <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-32)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-24)', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                {isHi ? `आपके नाम पर पंजीकृत वाहन (${1})` : `Registered Vehicles in your name (${1})`}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
                {isHi
                  ? 'दिल्ली एनसीआर में आपके आधार आईडी के तहत पंजीकृत सभी निजी मोटर वाहन'
                  : 'All private motor vehicles registered under your Aadhaar ID in Delhi NCR'}
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => onNavigate('/services/transfer-vehicle-ownership')}>
              {isHi ? '+ अन्य वाहन जोड़ें / ट्रांसफर करें' : '+ Add / Transfer Another Vehicle'}
            </Button>
          </div>

          {/* Vehicle Card */}
          <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24) var(--space-24)', backgroundColor: 'var(--color-bg-page)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', marginBottom: 'var(--space-24)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ backgroundColor: 'var(--color-bg-surface)', border: '2px solid var(--color-brand-primary)', padding: '4px 12px', borderRadius: 'var(--radius-sm)', fontFamily: 'monospace', fontSize: '18px', fontWeight: 800, color: 'var(--color-brand-dark)' }}>
                    {myVehicle.registrationNo}
                  </span>
                  <Badge variant="success">{isHi ? 'सक्रिय आरसी' : 'RC ACTIVE'}</Badge>
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '8px', marginBottom: '2px' }}>
                  {myVehicle.makerModel}
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0 }}>
                  {isHi ? 'आरटीओ:' : 'RTO:'} {myVehicle.registeredRto} • {isHi ? 'उत्सर्जन:' : 'Emission:'} {myVehicle.emissionNorm}
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => onNavigate('/know-your-vehicle')}
                icon={<ExternalLink size={14} />}
              >
                {isHi ? 'पूरा विवरण देखें' : 'View Full Specs'}
              </Button>
            </div>

            {/* Health indicators */}
            <div className="grid grid-cols-4 gap-16 mb-24">
              <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{isHi ? 'आरसी वैधता' : 'RC Expiry'}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '2px' }}>{myVehicle.fitnessValidUpto}</div>
              </div>
              <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{isHi ? 'बीमा वैधता' : 'Insurance Expiry'}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '2px' }}>{myVehicle.insuranceValidUpto}</div>
              </div>
              <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{isHi ? 'पीयूसी वैधता' : 'PUC Expiry'}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '2px' }}>{myVehicle.puccValidUpto}</div>
              </div>
              <div style={{ backgroundColor: 'var(--color-bg-surface)', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-light)' }}>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{isHi ? 'रोड टैक्स' : 'Road Tax'}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-semantic-success)', marginTop: '2px' }}>{myVehicle.taxValidUpto}</div>
              </div>
            </div>

            {/* Quick Actions for this Vehicle */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="primary" size="sm" onClick={() => onNavigate('/services/transfer-vehicle-ownership')}>
                {isHi ? 'स्वामित्व हस्तांतरण' : 'Transfer Ownership'}
              </Button>
              <Button variant="secondary" size="sm" onClick={() => onNavigate('/services/renewal-of-rc')}>
                {isHi ? 'आरसी नवीनीकरण' : 'Renew RC'}
              </Button>
              <Button variant="secondary" size="sm" onClick={() => onNavigate('/echallan')}>
                {isHi ? 'चालान जांचें' : 'Check Challans'}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => alert('Downloading official digital Registration Certificate (RC)')} icon={<Download size={14} />}>
                {isHi ? 'आरसी डाउनलोड' : 'Download RC'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DRIVING LICENCE */}
      {activeTab === 'dl' && (
        <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-32)' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-24)' }}>
            {isHi ? 'डिजिटल ड्राइविंग लाइसेंस कार्ड' : 'Digital Driving Licence Card'}
          </h3>

          <div style={{ maxWidth: '560px', backgroundColor: '#00487F', color: '#FFFFFF', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)', boxShadow: 'var(--shadow-raised)', marginBottom: 'var(--space-24)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '14px', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                  {isHi ? 'भारत संघ • ड्राइविंग लाइसेंस' : 'UNION OF INDIA • DRIVING LICENCE'}
                </div>
                <div style={{ fontSize: '17px', fontWeight: 800, color: '#FFCC00', marginTop: '2px' }}>{myDl.dlNumber}</div>
              </div>
              <span className="gov-badge gov-badge-success">{isHi ? 'सक्रिय' : 'ACTIVE'}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF' }}>{myDl.holderName}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', marginTop: '6px' }}>
                  {isHi ? 'जन्म तिथि:' : 'DOB:'} {myDl.dob} • {isHi ? 'रक्त समूह:' : 'Blood Group:'} {myDl.bloodGroup}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', marginTop: '2px' }}>
                  {isHi ? 'वैधता:' : 'Valid Upto:'} <strong>{myDl.validityNonTransport}</strong>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginTop: '8px' }}>
                  {isHi ? 'आरटीओ:' : 'RTO:'} {myDl.rtoName}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                  {isHi ? 'वाहन श्रेणियां:' : 'Vehicle Classes:'}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFCC00', marginTop: '4px' }}>MCWG • LMV</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={() => onNavigate('/services/renew-driving-licence')}>
              {isHi ? 'ड्राइविंग लाइसेंस नवीनीकरण' : 'Renew Driving Licence'}
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('/services/duplicate-driving-licence')}>
              {isHi ? 'डुप्लीकेट कार्ड ऑर्डर करें' : 'Order Duplicate Card'}
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('/services/international-driving-permit')}>
              {isHi ? 'अंतर्राष्ट्रीय परमिट (IDP)' : 'Apply for IDP'}
            </Button>
            <Button variant="outline" onClick={() => alert('Downloading official digital DL extract')} icon={<Download size={14} />}>
              {isHi ? 'डीएल उद्धरण डाउनलोड करें' : 'Download DL Extract'}
            </Button>
          </div>
        </div>
      )}

      {/* TAB 3: ACTIVE APPLICATIONS */}
      {activeTab === 'applications' && (
        <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-32)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-24)' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                {isHi ? `सक्रिय आवेदन: ${myApp.applicationNo}` : `Live In-Flight Application: ${myApp.applicationNo}`}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
                {isHi ? 'सारथी पोर्टल से रीयल-टाइम स्थिति के साथ आवेदन ट्रैकिंग' : 'Application tracking with real-time stage updates from Sarathi portal'}
              </p>
            </div>
            <Badge variant="info">{isHi ? 'चरण 4 / 6 (प्रगति पर)' : 'Stage 4 of 6 (In Progress)'}</Badge>
          </div>

          <div style={{ backgroundColor: 'var(--color-brand-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-24)', marginBottom: 'var(--space-32)', border: '1px solid #B6D4FE' }}>
            <strong>{isHi ? 'सेवा:' : 'Service:'}</strong> {myApp.serviceName} • <strong>{isHi ? 'जमा करने की तिथि:' : 'Submission Date:'}</strong> {myApp.submissionDate} • <strong>{isHi ? 'संबंधित आरटीओ:' : 'Assigned RTO:'}</strong> {myApp.rto}
          </div>

          <Timeline stages={myApp.stages} />
        </div>
      )}

      {/* TAB 4: CHALLANS */}
      {activeTab === 'challans' && (
        <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-32)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-24)' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                {isHi ? 'यातायात उल्लंघन एवं नोटिस' : 'Traffic Violations & Notices'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
                {isHi ? 'आपके वाहन नंबर पर लंबित यातायात नोटिस एवं वर्चुअल कोर्ट समन' : 'Pending traffic notices and virtual court summons under your vehicle plates'}
              </p>
            </div>
            <Button variant="primary" size="sm" onClick={() => onNavigate('/echallan')}>
              {isHi ? 'ई-चालान गेटवे खोलें' : 'Open eChallan Gateway'}
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {pendingChallans.map((ch) => (
              <div key={ch.challanNo} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-24) var(--space-24)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>{ch.challanNo}</span>
                    <Badge variant="warning">{isHi ? 'लंबित' : 'PENDING'}</Badge>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-primary)', marginTop: '4px' }}>{ch.offense}</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    {isHi ? 'दिनांक:' : 'Date:'} {ch.violationDate} • {isHi ? 'स्थान:' : 'Location:'} {ch.location}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-semantic-error)' }}>₹{ch.amount}</span>
                  <Button variant="saffron" size="sm" onClick={() => onNavigate('/echallan')}>
                    {isHi ? 'जुर्माना भरें' : 'Pay Fine'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: DIGILOCKER DOCUMENTS */}
      {activeTab === 'documents' && (
        <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-32)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-24)' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                {isHi ? 'सत्यापित डिजिटल परिवहन दस्तावेज (डिजीलॉकर)' : 'Verified Digital Transport Documents (DigiLocker)'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
                {isHi ? 'सीएमवीआर के नियम 139 के तहत पूरे भारत में कानूनी रूप से मान्य डिजिटल प्रमाणपत्र।' : 'Legally valid digital certificates recognized across India under Rule 139 of CMVR.'}
              </p>
            </div>
            <Badge variant="success">{isHi ? 'डिजीलॉकर एकीकृत' : 'DigiLocker Integrated'}</Badge>
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-24) var(--space-24)', backgroundColor: 'var(--color-bg-page)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
                    {isHi ? 'ड्राइविंग लाइसेंस (DL)' : 'Driving Licence (DL)'}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    DL-0420180045612 • {isHi ? '2028 तक वैध' : 'Valid till 2028'}
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => alert('Viewing digital verified DL card')}>
                  {isHi ? 'देखें' : 'View'}
                </Button>
              </div>
            </div>

            <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-24) var(--space-24)', backgroundColor: 'var(--color-bg-page)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
                    {isHi ? 'पंजीकरण प्रमाण पत्र (RC)' : 'Registration Certificate (RC)'}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    DL 01 AB 1234 • {isHi ? '2036 तक वैध' : 'Valid till 2036'}
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => alert('Viewing digital verified RC card')}>
                  {isHi ? 'देखें' : 'View'}
                </Button>
              </div>
            </div>

            <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-24) var(--space-24)', backgroundColor: 'var(--color-bg-page)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
                    {isHi ? 'पीयूसी प्रमाण पत्र (PUCC)' : 'PUC Certificate'}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    DL01PUC89214 • {isHi ? 'अक्टूबर 2026 तक वैध' : 'Valid till Oct 2026'}
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => alert('Viewing digital verified PUCC')}>
                  {isHi ? 'देखें' : 'View'}
                </Button>
              </div>
            </div>

            <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-md)', padding: 'var(--space-24) var(--space-24)', backgroundColor: 'var(--color-bg-page)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
                    {isHi ? 'बीमा प्रमाण पत्र' : 'Insurance Certificate'}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    ICICI Lombard • {isHi ? 'अगस्त 2027 तक वैध' : 'Valid till Aug 2027'}
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => alert('Viewing digital verified Insurance')}>
                  {isHi ? 'देखें' : 'View'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: APPOINTMENTS */}
      {activeTab === 'appointments' && (
        <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-48) var(--space-32)', textAlign: 'center' }}>
          <Calendar size={52} color="var(--color-brand-primary)" style={{ margin: '0 auto var(--space-16)' }} />
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'कोई सक्रिय आरटीओ अपॉइंटमेंट बुक नहीं है' : 'No Active RTO Appointments Booked'}
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', maxWidth: '520px', margin: '0 auto var(--space-24)', lineHeight: 1.5 }}>
            {isHi
              ? 'अधिकांश परिवहन नागरिक सेवाएं पूरी तरह से फेसलेस और संपर्क रहित हैं। यदि आपको स्वचालित ड्राइविंग टेस्ट ट्रैक या भौतिक वाहन निरीक्षण की आवश्यकता है, तो नीचे स्लॉट बुक करें।'
              : 'Most Parivahan citizen services are completely faceless and contactless. If you require an automated driving test track or physical vehicle inspection, book your slot below.'}
          </p>
          <Button variant="primary" onClick={() => onNavigate('/services/permanent-driving-licence')}>
            {isHi ? 'ड्राइविंग टेस्ट ट्रैक स्लॉट बुक करें' : 'Book Driving Test Track Slot'}
          </Button>
        </div>
      )}
    </div>
  );
};
