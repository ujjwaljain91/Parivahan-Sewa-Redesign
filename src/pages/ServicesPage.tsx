import React, { useState } from 'react';
import {
  Search, CreditCard, Car, Truck, FileCheck, ShieldCheck, Sparkles,
  ArrowRight, Filter, Briefcase, Building, ExternalLink, Zap, AlertTriangle,
  Award, Gauge, Wrench, Cpu, CheckCircle2
} from 'lucide-react';
import { masterOnlineServicesInventory, FeatureRegistryItem } from '../data/featureRegistry';
import { statesAndRtos } from '../data/rtoData';
import { Language } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface ServicesPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const isHi = language === 'hi';

  const categories = [
    { id: 'all', label: isHi ? 'सभी सेवाएं (22)' : 'All Services (22)', count: 22 },
    { id: 'Driving Licence', label: isHi ? 'ड्राइविंग लाइसेंस (1)' : 'Driving Licence (1)', count: 1 },
    { id: 'Vehicle', label: isHi ? 'वाहन सेवाएं (4)' : 'Vehicle (4)', count: 4 },
    { id: 'Permits & Transport', label: isHi ? 'परमिट एवं परिवहन (3)' : 'Permits & Transport (3)', count: 3 },
    { id: 'Compliance & Payments', label: isHi ? 'अनुपालन एवं कर (3)' : 'Compliance & Payments (3)', count: 3 },
    { id: 'Registration & Special Services', label: isHi ? 'विशेष डिजिटल सेवाएं (4)' : 'Registration & Special (4)', count: 4 },
    { id: 'Business & Industry', label: isHi ? 'व्यवसाय एवं उद्योग (5)' : 'Business & Industry (5)', count: 5 },
    { id: 'National Register', label: isHi ? 'राष्ट्रीय रजिस्टर (2)' : 'National Register (2)', count: 2 }
  ];

  const filteredServices = masterOnlineServicesInventory.filter((service) => {
    const matchesCat = selectedCategory === 'all' || service.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      service.name.toLowerCase().includes(q) ||
      service.nameHi.toLowerCase().includes(q) ||
      service.shortDesc.toLowerCase().includes(q) ||
      service.subcategory.toLowerCase().includes(q) ||
      service.underlyingSystem.toLowerCase().includes(q) ||
      service.tags.some((t) => t.includes(q) || q.includes(t));

    return matchesCat && matchesSearch;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard': return <CreditCard size={22} />;
      case 'Car': return <Car size={22} />;
      case 'Truck': return <Truck size={22} />;
      case 'FileCheck': return <FileCheck size={22} />;
      case 'ShieldCheck': return <ShieldCheck size={22} />;
      case 'Gauge': return <Gauge size={22} />;
      case 'AlertTriangle': return <AlertTriangle size={22} />;
      case 'Award': return <Award size={22} />;
      case 'Zap': return <Zap size={22} />;
      case 'Sparkles': return <Sparkles size={22} />;
      case 'Building': return <Building size={22} />;
      case 'Wrench': return <Wrench size={22} />;
      case 'Cpu': return <Cpu size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  const getAudienceBadgeVariant = (audience: string) => {
    switch (audience) {
      case 'Citizen': return 'info';
      case 'Commercial': return 'warning';
      case 'Dealer': return 'saffron';
      case 'Industry': return 'neutral';
      case 'Government / Enterprise': return 'success';
      default: return 'neutral';
    }
  };

  const handleCardClick = (service: FeatureRegistryItem) => {
    if (service.route.startsWith('/business/')) {
      onNavigate(service.route);
    } else if (service.route.startsWith('/services/')) {
      onNavigate(service.route);
    } else {
      onNavigate(service.route);
    }
  };

  return (
    <div className="gov-container py-32" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'सेवाएं' : 'Services' }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div style={{ marginBottom: 'var(--space-32)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Badge variant="success">
            {isHi ? '22 आधिकारिक डिजिटल सेवाएं सत्यापित' : '22 Verified Online Services Active'}
          </Badge>
          <Badge variant="neutral">
            {isHi ? 'केंद्रीय मोटर वाहन नियम (CMVR)' : 'GIGW 3.0 & CMVR Compliant'}
          </Badge>
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
          {isHi ? 'परिवहन ऑनलाइन सेवाएं हब' : 'Parivahan Online Services Ecosystem'}
        </h1>
        <p className="text-body" style={{ maxWidth: '820px', margin: 0, lineHeight: 1.5 }}>
          {isHi
            ? 'भारत के 36 राज्यों एवं केंद्र शासित प्रदेशों में ड्राइविंग लाइसेंस, वाहन पंजीकरण, वाणिज्यिक परमिट, ई-चालान, स्क्रैपिंग और विनिर्माता सेवाओं का एकीकृत संपर्क रहित डिजिटल मंच।'
            : 'Unified national gateway delivering faceless citizen licensing, vehicle titling, national freight permits, automated compliance, clean mobility incentives, and manufacturer registries.'}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-24)',
          marginBottom: 'var(--space-32)',
          boxShadow: 'var(--shadow-subtle)'
        }}
      >
        <div className="grid grid-cols-3 gap-16 mb-16">
          <div className="gov-form-group" style={{ margin: 0 }}>
            <label className="gov-label">{isHi ? 'राज्य / केंद्र शासित प्रदेश द्वारा फ़िल्टर करें' : 'Filter by State / UT'}</label>
            <select
              className="gov-select"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              aria-label="Filter by State or Union Territory"
            >
              <option value="all">{isHi ? 'सभी 36 राज्य और यूटी (केंद्रीय रजिस्ट्री)' : 'All 36 States & UTs (National Registry)'}</option>
              {statesAndRtos.map((st) => (
                <option key={st.code} value={st.code}>
                  {st.name}
                </option>
              ))}
            </select>
          </div>

          <div className="gov-form-group" style={{ margin: 0, gridColumn: 'span 2' }}>
            <label className="gov-label">{isHi ? 'सेवाएं खोजें' : 'Search Services'}</label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Search size={18} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px' }} />
              <input
                type="text"
                className="gov-input"
                style={{ paddingLeft: '42px' }}
                placeholder={isHi ? 'वाहन, लाइसेंस, परमिट या परिवहन सेवा खोजें...' : 'Search vehicle, licence, permit or transport service...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search all verified online services"
              />
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: '1px solid var(--color-border-light)', paddingTop: 'var(--space-16)' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: selectedCategory === cat.id ? 'var(--color-brand-primary)' : 'var(--color-bg-page)',
                color: selectedCategory === cat.id ? '#FFFFFF' : 'var(--color-text-secondary)',
                border: `1px solid ${selectedCategory === cat.id ? 'var(--color-brand-primary)' : 'var(--color-border)'}`,
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header Count */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-20)' }}>
        <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
          {isHi ? (
            <span><strong>{filteredServices.length}</strong> सेवाएं उपलब्ध हैं</span>
          ) : (
            <span>Showing <strong>{filteredServices.length}</strong> of <strong>{masterOnlineServicesInventory.length}</strong> verified online services</span>
          )}
        </div>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="gov-btn gov-btn-ghost gov-btn-sm"
            style={{ fontSize: '12px', color: 'var(--color-brand-primary)' }}
          >
            {isHi ? 'फ़िल्टर रीसेट करें' : 'Clear search query'}
          </button>
        )}
      </div>

      {/* Services Grid (All 22 entries rendered) */}
      <div className="grid grid-cols-3 gap-24">
        {filteredServices.map((service) => (
          <Card
            key={service.id}
            interactive
            onClick={() => handleCardClick(service)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px'
            }}
          >
            <div>
              <div className="gov-card-header" style={{ marginBottom: 'var(--space-12)' }}>
                <div className="gov-card-icon">
                  {getServiceIcon(service.iconName)}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <Badge variant={getAudienceBadgeVariant(service.audience)}>
                    {service.audience}
                  </Badge>
                  {service.status === 'system-linked' ? (
                    <span style={{ fontSize: '10px', color: 'var(--color-brand-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                      <span>System-Linked</span>
                      <ExternalLink size={10} />
                    </span>
                  ) : (
                    <span style={{ fontSize: '10px', color: 'var(--color-semantic-success)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                      <CheckCircle2 size={10} />
                      <span>Direct Faceless</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="gov-card-body">
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-brand-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
                  {service.category} • {isHi ? service.subcategoryHi : service.subcategory}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px', lineHeight: 1.3 }}>
                  {isHi ? service.nameHi : service.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {isHi ? service.shortDescHi : service.shortDesc}
                </p>
              </div>
            </div>

            <div className="gov-card-footer" style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-12)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                  System: {service.underlyingSystem}
                </span>
                {service.estimatedTurnaround && (
                  <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                    ⏱ {service.estimatedTurnaround}
                  </span>
                )}
              </div>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--color-brand-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  flexShrink: 0
                }}
              >
                <span>{service.status === 'system-linked' ? (isHi ? 'पोर्टल एक्सेस करें' : 'Access System') : (isHi ? 'शुरू करें' : 'Open Service')}</span>
                {service.status === 'system-linked' ? <ExternalLink size={13} /> : <ArrowRight size={14} />}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
