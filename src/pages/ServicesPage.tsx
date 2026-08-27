import React, { useState } from 'react';
import { Search, CreditCard, Car, Truck, ShieldCheck, Sparkles, ArrowRight, Filter } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { statesAndRtos } from '../data/rtoData';
import { Language } from '../types';
import { translations } from '../data/translations';
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
    { id: 'all', label: isHi ? 'सभी सेवाएं' : 'All Services' },
    { id: 'driving-licence', label: isHi ? 'ड्राइविंग लाइसेंस' : 'Driving Licence' },
    { id: 'vehicle', label: isHi ? 'वाहन पंजीकरण' : 'Vehicle Registration' },
    { id: 'permits', label: isHi ? 'वाणिज्यिक परमिट' : 'Commercial Permits' },
    { id: 'compliance', label: isHi ? 'अनुपालन एवं चालान' : 'Compliance & Challan' },
    { id: 'other', label: isHi ? 'अन्य नागरिक सेवाएं' : 'Other Citizen Services' }
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesCat = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some((t) => t.includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="gov-container py-32" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'सेवाएं' : 'Services' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div style={{ marginBottom: 'var(--space-32)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
          {isHi ? 'परिवहन नागरिक सेवाएं' : 'Transport Citizen Services Directory'}
        </h1>
        <p className="text-body" style={{ maxWidth: '750px' }}>
          {isHi
            ? 'भारतीय राज्यों एवं केंद्र शासित प्रदेशों में सभी आधिकारिक संपर्क रहित व डिजिटल परिवहन सेवाओं का लाभ उठाएं। आवश्यकताओं को देखने और आवेदन शुरू करने के लिए नीचे दी गई सेवा चुनें।'
            : 'Access all official faceless and contactless transport services across Indian States and Union Territories. Select a service below to view requirements and initiate your application.'}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-24)',
          marginBottom: 'var(--space-32)'
        }}
      >
        <div className="grid grid-cols-3 gap-16 mb-16">
          <div className="gov-form-group" style={{ margin: 0 }}>
            <label className="gov-label">{isHi ? 'राज्य / केंद्र शासित प्रदेश द्वारा फ़िल्टर करें' : 'Filter by State / UT'}</label>
            <select
              className="gov-select"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="all">{isHi ? 'सभी राज्य और यूटी (केंद्रीय रजिस्ट्री)' : 'All States & UTs (National Registry)'}</option>
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
              <Search size={18} color="var(--color-text-muted)" style={{ position: 'absolute', left: '12px' }} />
              <input
                type="text"
                className="gov-input"
                style={{ paddingLeft: '40px' }}
                placeholder={isHi ? 'नाम, दस्तावेज या कीवर्ड द्वारा खोजें (उदा. ट्रांसफर, लाइसेंस, चालान)...' : 'Search by name, document, or keyword (e.g. transfer, licence, challan)...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Services Grid */}
      <div className="grid grid-cols-3 gap-24">
        {filteredServices.map((service) => (
          <Card
            key={service.id}
            interactive
            onClick={() => {
              if (service.slug === 'echallan') onNavigate('/echallan');
              else if (service.slug === 'know-your-vehicle') onNavigate('/know-your-vehicle');
              else if (service.slug === 'vehicle-scrapping') onNavigate('/vehicle-scrapping');
              else onNavigate(`/services/${service.slug}`);
            }}
          >
            <div className="gov-card-header">
              <div className="gov-card-icon">
                {service.category === 'driving-licence' && <CreditCard size={22} />}
                {service.category === 'vehicle' && <Car size={22} />}
                {service.category === 'permits' && <Truck size={22} />}
                {service.category === 'compliance' && <ShieldCheck size={22} />}
                {service.category === 'other' && <Sparkles size={22} />}
              </div>
              <Badge variant={service.onlineAvailable ? 'success' : 'neutral'}>
                {service.onlineAvailable ? (isHi ? 'संपर्क रहित' : 'Contactless') : (isHi ? 'आरटीओ ट्रैक' : 'RTO Track')}
              </Badge>
            </div>

            <div className="gov-card-body">
              <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-brand-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                {isHi ? service.categoryLabelHi : service.categoryLabel}
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
                {isHi ? service.titleHi : service.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {isHi ? service.shortDescHi : service.shortDesc}
              </p>
            </div>

            <div className="gov-card-footer">
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                {isHi && service.estimatedDays.includes('Instant')
                  ? 'तत्काल डिजिटल'
                  : isHi && service.estimatedDays.includes('Days')
                  ? service.estimatedDays.replace('Days', 'दिन').replace('Day', 'दिन')
                  : service.estimatedDays}
              </span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span>{isHi ? 'विवरण देखें' : 'View Details'}</span>
                <ArrowRight size={14} />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
