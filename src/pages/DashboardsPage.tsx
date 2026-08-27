import React, { useState } from 'react';
import {
  TrendingUp, BarChart3, Download, Filter, Car,
  CreditCard, ShieldCheck, Activity, Award
} from 'lucide-react';
import { nationalDashboardKPIs, registrationFuelShare, stateRegistrationsRank } from '../data/dashboardData';
import { statesAndRtos } from '../data/rtoData';
import { Language } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface DashboardsPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const DashboardsPage: React.FC<DashboardsPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';
  const [selectedState, setSelectedState] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  return (
    <div className="gov-container py-48" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'डैशबोर्ड एवं डेटा' : 'Transport Data & Dashboards' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', marginBottom: 'var(--space-40)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Badge variant="info">
              {isHi ? 'वाहन 4.0 एवं सारथी 4.0 केंद्रीय डेटा' : 'VAHAN 4.0 & SARATHI 4.0 Central Data Stream'}
            </Badge>
            <Badge variant="success">
              {isHi ? 'दैनिक अद्यतन' : 'Updated Daily'}
            </Badge>
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: 0 }}>
            {isHi ? 'राष्ट्रीय परिवहन सांख्यिकी एवं विश्लेषिकी' : 'National Transport Analytics & Insights'}
          </h1>
          <p className="text-body" style={{ maxWidth: '720px', margin: '6px 0 0', lineHeight: 1.5 }}>
            {isHi
              ? 'भारत भर में मोटर वाहन पंजीकरण, ड्राइविंग लाइसेंस, स्वच्छ इलेक्ट्रिक वाहन और इलेक्ट्रॉनिक यातायात प्रवर्तन पर वास्तविक समय सार्वजनिक डैशबोर्ड।'
              : 'Real-time public dashboard on motor vehicle registrations, driving licences issued, clean electric vehicle transition, and electronic traffic enforcement across India.'}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => alert('Exporting national dataset in CSV format')}
            icon={<Download size={14} />}
          >
            {isHi ? 'सीएसवी निर्यात' : 'Export CSV'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => alert('Exporting executive report in PDF format')}
            icon={<Download size={14} />}
          >
            {isHi ? 'रिपोर्ट (PDF)' : 'Report (PDF)'}
          </Button>
        </div>
      </div>

      {/* Top Filter Bar */}
      <div
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-24) var(--space-24)',
          marginBottom: 'var(--space-32)',
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: 'var(--color-brand-dark)', fontSize: '14px' }}>
          <Filter size={18} color="var(--color-brand-primary)" />
          <span>{isHi ? 'फ़िल्टर:' : 'Filters:'}</span>
        </div>

        <div style={{ minWidth: '200px' }}>
          <select
            className="gov-select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="ALL">{isHi ? 'सभी राज्य एवं यूटी' : 'All States & UTs'}</option>
            {statesAndRtos.map((st) => (
              <option key={st.code} value={st.code}>
                {st.name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ minWidth: '160px' }}>
          <select
            className="gov-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2026">{isHi ? 'वर्ष 2026' : 'Year 2026 (CY)'}</option>
            <option value="2025">{isHi ? 'वर्ष 2025' : 'Year 2025'}</option>
            <option value="2024">{isHi ? 'वर्ष 2024' : 'Year 2024'}</option>
            <option value="2023">{isHi ? 'वर्ष 2023' : 'Year 2023'}</option>
          </select>
        </div>

        <div style={{ minWidth: '180px' }}>
          <select
            className="gov-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="ALL">{isHi ? 'सभी वाहन श्रेणियां' : 'All Vehicle Classes'}</option>
            <option value="2W">{isHi ? 'दोपहिया वाहन (2W)' : 'Two Wheelers (2W)'}</option>
            <option value="4W">{isHi ? 'चारपहिया वाहन (कार)' : 'Four Wheelers (Cars)'}</option>
            <option value="COMM">{isHi ? 'वाणिज्यिक परिवहन' : 'Commercial Transport'}</option>
          </select>
        </div>
      </div>

      {/* 4 KPI Metric Cards (Generously Spaced) */}
      <div className="grid grid-cols-4 gap-24 mb-40">
        {nationalDashboardKPIs.map((kpi, idx) => (
          <Card
            key={idx}
            style={{
              padding: 'var(--space-24) var(--space-24)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '155px'
            }}
          >
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)' }}>
              {isHi ? kpi.titleHi : kpi.title}
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', letterSpacing: '-0.02em', margin: 'var(--space-4) 0 var(--space-12)' }}>
              {kpi.value}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto' }}>
              <span className="gov-badge gov-badge-success" style={{ fontWeight: 700, borderRadius: '4px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {kpi.change}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                • {isHi ? (kpi.subtext === 'National Total' ? 'राष्ट्रीय कुल' : kpi.subtext === 'Active on Roads' ? 'सड़कों पर सक्रिय' : kpi.subtext === 'Fines Collected' ? 'जुर्माना राशि' : kpi.subtext) : kpi.subtext}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Visual Fuel & EV Adoption Distribution */}
      <div className="grid grid-cols-2 gap-32 mb-40">
        <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-32)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-24)' }}>
            {isHi ? 'ईंधन प्रकार एवं पावरट्रेन वितरण (राष्ट्रीय हिस्सा)' : 'Fuel Type & Powertrain Distribution (National Share)'}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {registrationFuelShare.map((f, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                  <span>{isHi && f.category === 'Petrol' ? 'पेट्रोल' : isHi && f.category === 'Diesel' ? 'डीजल' : isHi && f.category.includes('EV') ? 'इलेक्ट्रिक (EV)' : isHi && f.category.includes('CNG') ? 'सीएनजी / हाइब्रिड' : f.category} ({f.count})</span>
                  <span>{f.share}%</span>
                </div>
                <div style={{ width: '100%', height: '12px', backgroundColor: 'var(--color-bg-surface-secondary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${f.share}%`,
                      height: '100%',
                      backgroundColor: f.color,
                      borderRadius: 'var(--radius-full)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-32)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-12)' }}>
              {isHi ? 'इलेक्ट्रिक वाहन (EV) अपनाने की गति' : 'Electric Vehicle (EV) Transition Momentum'}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-24)', lineHeight: 1.5 }}>
              {isHi
                ? 'फेम-II और राज्य ईवी नीतियों के तहत कुल 48.9 लाख इलेक्ट्रिक वाहन पंजीकृत हुए। ईवी पंजीकरण में 42.8% की वार्षिक वृद्धि दर्ज की गई।'
                : 'Total of 48.9 Lakh Electric Vehicles registered under FAME-II and State EV policies. EV registrations saw a 42.8% year-on-year growth.'}
            </p>

            <div style={{ backgroundColor: 'var(--color-semantic-success-subtle)', padding: 'var(--space-24)', borderRadius: 'var(--radius-md)', border: '1px solid #BADBCC' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-semantic-success)' }}>
                {isHi ? 'शीर्ष ईवी अपनाने वाले राज्य:' : 'TOP EV PENETRATION STATES:'}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', marginTop: '6px' }}>
                {isHi ? '1. दिल्ली (14.5%) • 2. उत्तर प्रदेश (12.4%) • 3. कर्नाटक (11.6%)' : '1. Delhi (14.5%) • 2. Uttar Pradesh (12.4%) • 3. Karnataka (11.6%)'}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-24)' }}>
            <Button
              variant="outline"
              size="sm"
              fullWidth
              onClick={() => alert('Accessing Central Vahan Green Analytics')}
            >
              {isHi ? 'हरित गतिशीलता डैशबोर्ड देखें' : 'Explore Green Mobility Dashboard'}
            </Button>
          </div>
        </div>
      </div>

      {/* State-wise Comparative Registry Table */}
      <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-32)' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-24)' }}>
          {isHi ? 'राज्यवार पंजीकरण एवं लाइसेंसिंग रैंकिंग' : 'State-wise Registrations & Licensing Ranking'}
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th style={{ padding: '16px 20px' }}>{isHi ? 'राज्य / केंद्र शासित प्रदेश' : 'State / Union Territory'}</th>
                <th style={{ padding: '16px 20px' }}>{isHi ? 'राज्य कोड' : 'State Code'}</th>
                <th style={{ padding: '16px 20px' }}>{isHi ? 'कुल पंजीकृत वाहन' : 'Total Registered Vehicles'}</th>
                <th style={{ padding: '16px 20px' }}>{isHi ? 'ईवी अपनाने का हिस्सा' : 'EV Adoption Share'}</th>
                <th style={{ padding: '16px 20px' }}>{isHi ? 'सक्रिय ड्राइविंग लाइसेंस' : 'Active Driving Licences'}</th>
              </tr>
            </thead>
            <tbody>
              {stateRegistrationsRank.map((st, i) => (
                <tr key={i}>
                  <td style={{ padding: '16px 20px' }}><strong>{st.state}</strong></td>
                  <td style={{ padding: '16px 20px' }}><span className="gov-badge gov-badge-neutral">{st.code}</span></td>
                  <td style={{ padding: '16px 20px' }}>{st.vehicles}</td>
                  <td style={{ padding: '16px 20px' }}><span style={{ color: 'var(--color-semantic-success)', fontWeight: 600 }}>{st.evShare}</span></td>
                  <td style={{ padding: '16px 20px' }}>{st.dls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
