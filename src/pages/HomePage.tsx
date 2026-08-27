import React, { useState } from 'react';
import {
  Search, CreditCard, Car, AlertTriangle, ShieldCheck,
  Repeat, RefreshCw, Trash2, MapPin, Sparkles, ArrowRight,
  TrendingUp, FileText, HelpCircle, BookOpen, Shield,
  Award, CheckCircle2, ChevronRight, Activity, Bell,
  Copy, FileBadge
} from 'lucide-react';
import { Language, UserRole } from '../types';
import { translations } from '../data/translations';
import { citizenTaskIntents } from '../data/intentData';
import { notificationsData } from '../data/notificationsData';
import { nationalDashboardKPIs } from '../data/dashboardData';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ApplicationTracker } from '../components/features/ApplicationTracker';

export interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenSearch, language }) => {
  const t = translations[language];
  const isHi = language === 'hi';
  const [heroInput, setHeroInput] = useState('');

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenSearch();
  };

  return (
    <div id="main-content">
      {/* ----------------------------------------------------------------------
          1. TASK-FIRST HERO SECTION
          ---------------------------------------------------------------------- */}
      <section className="gov-hero-section">
        <div className="gov-container" style={{ textAlign: 'center' }}>
          {/* Government Badge */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="gov-hero-badge">
              <ShieldCheck size={16} color="var(--color-semantic-success)" />
              <span>{isHi ? 'आधिकारिक डिजिटल भारत परिवहन सेवा' : 'Official Digital India Transport Services'}</span>
            </div>
          </div>

          {/* Primary Task Heading */}
          <h1 style={{ maxWidth: '840px', margin: '0 auto var(--space-16)' }}>
            {t.heroTitle}
          </h1>
          <p className="text-body-lg" style={{ maxWidth: '680px', margin: '0 auto var(--space-32)' }}>
            {t.heroSubtitle}
          </p>

          {/* Visually Dominant Search Bar */}
          <form onSubmit={handleHeroSearchSubmit} className="gov-hero-search-box">
            <Search size={24} color="var(--color-brand-primary)" />
            <input
              type="text"
              className="gov-hero-search-input"
              placeholder={isHi ? 'सेवा या कार्य खोजें (उदा. "ड्राइविंग लाइसेंस नवीनीकरण", "कार ट्रांसफर")...' : 'Search for a service... Try "renew driving licence" or "transfer vehicle ownership"'}
              value={heroInput}
              onChange={(e) => setHeroInput(e.target.value)}
              onClick={onOpenSearch}
              aria-label="Search for a transport service"
            />
            <Button variant="primary" type="submit">
              {isHi ? 'खोजें' : 'Search'}
            </Button>
          </form>

          {/* Quick Search Chips */}
          <div className="gov-search-chips">
            <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginRight: '6px' }}>
              {isHi ? 'त्वरित खोज:' : 'Popular Searches:'}
            </span>
            <button className="gov-search-chip" onClick={() => onNavigate('/services/renew-driving-licence')}>
              {isHi ? 'ड्राइविंग लाइसेंस नवीनीकरण' : 'Renew Driving Licence'}
            </button>
            <button className="gov-search-chip" onClick={() => onNavigate('/services/transfer-vehicle-ownership')}>
              {isHi ? 'वाहन ट्रांसफर' : 'Transfer Vehicle'}
            </button>
            <button className="gov-search-chip" onClick={() => onNavigate('/echallan')}>
              {isHi ? 'ई-चालान भरें' : 'Pay eChallan'}
            </button>
            <button className="gov-search-chip" onClick={() => onNavigate('/know-your-vehicle')}>
              {isHi ? 'वाहन विवरण' : 'Know Your Vehicle'}
            </button>
            <button className="gov-search-chip" onClick={() => onNavigate('/vehicle-scrapping')}>
              {isHi ? 'पुरानी कार स्क्रैप करें' : 'Scrap Old Car'}
            </button>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          1.5. NATIONAL TRANSPORT STATS RIBBON
          ---------------------------------------------------------------------- */}
      <section className="gov-stats-strip">
        <div className="gov-container">
          <div className="grid grid-cols-4 gap-24" style={{ textAlign: 'center' }}>
            <div>
              <div className="gov-stat-number" style={{ color: '#FFB74D' }}>35.8 Cr+</div>
              <div className="gov-stat-label">{isHi ? 'पंजीकृत वाहन (VAHAN)' : 'Registered Vehicles Digitized'}</div>
            </div>
            <div>
              <div className="gov-stat-number" style={{ color: '#81C784' }}>16.2 Cr+</div>
              <div className="gov-stat-label">{isHi ? 'सक्रिय ड्राइविंग लाइसेंस (SARATHI)' : 'Active Driving Licences'}</div>
            </div>
            <div>
              <div className="gov-stat-number" style={{ color: '#64B5F6' }}>1,380+</div>
              <div className="gov-stat-label">{isHi ? 'केंद्रीकृत आरटीओ कार्यालय' : 'Connected Automated RTOs'}</div>
            </div>
            <div>
              <div className="gov-stat-number" style={{ color: '#E0E0E0' }}>99.98%</div>
              <div className="gov-stat-label">{isHi ? 'डिजिटल सेवा अपटाइम' : 'Digital Services Uptime'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          2. POPULAR SERVICES QUICK BAR
          ---------------------------------------------------------------------- */}
      <section style={{ backgroundColor: 'var(--color-bg-surface)', padding: 'var(--space-48) 0', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="gov-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-24)' }}>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                {t.popularServices}
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
                {isHi ? 'सीधे ऑनलाइन वर्कफ़्लो के साथ सर्वाधिक उपयोग की जाने वाली नागरिक परिवहन सेवाएं' : 'Most accessed citizen transport services with direct online workflows'}
              </p>
            </div>
            <button
              className="gov-btn gov-btn-ghost gov-btn-sm"
              onClick={() => onNavigate('/services')}
              style={{ color: 'var(--color-brand-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>{isHi ? 'सभी 40+ सेवाएं' : 'View All 40+ Services'}</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-6 gap-24">
            {/* Quick 1: Driving Licence */}
            <Card
              interactive
              onClick={() => onNavigate('/services/renew-driving-licence')}
              style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center', minHeight: '160px' }}
            >
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)' }}>
                <CreditCard size={24} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
                {isHi ? 'ड्राइविंग लाइसेंस' : 'Driving Licence'}
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>
                {isHi ? 'नवीनीकरण, नया LL, डुप्लीकेट' : 'Renew, New LL, Duplicate'}
              </p>
            </Card>

            {/* Quick 2: Vehicle Services */}
            <Card
              interactive
              onClick={() => onNavigate('/services/transfer-vehicle-ownership')}
              style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center', minHeight: '160px' }}
            >
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)' }}>
                <Car size={24} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
                {isHi ? 'वाहन सेवाएं' : 'Vehicle Services'}
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>
                {isHi ? 'ट्रांसफर, आरसी नवीनीकरण' : 'Transfer, RC Renewal, NOC'}
              </p>
            </Card>

            {/* Quick 3: eChallan */}
            <Card
              interactive
              onClick={() => onNavigate('/echallan')}
              style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center', minHeight: '160px' }}
            >
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)', backgroundColor: 'var(--color-semantic-warning-subtle)', color: '#B45309' }}>
                <AlertTriangle size={24} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
                {isHi ? 'ई-चालान' : 'eChallan'}
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>
                {isHi ? 'जांचें व ऑनलाइन भुगतान करें' : 'Check & Clear Pending Fines'}
              </p>
            </Card>

            {/* Quick 4: Track Application */}
            <Card
              interactive
              onClick={() => onNavigate('/track')}
              style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center', minHeight: '160px' }}
            >
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)' }}>
                <Activity size={24} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
                {isHi ? 'आवेदन ट्रैक करें' : 'Track Application'}
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>
                {isHi ? 'वास्तविक समय स्टेज स्थिति' : 'Real-time Processing Status'}
              </p>
            </Card>

            {/* Quick 5: Know Your Vehicle */}
            <Card
              interactive
              onClick={() => onNavigate('/know-your-vehicle')}
              style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center', minHeight: '160px' }}
            >
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)' }}>
                <Search size={24} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
                {isHi ? 'वाहन विवरण' : 'Know Your Vehicle'}
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>
                {isHi ? 'आरसी, बीमा, पीयूसी वैधता' : 'RC, Insurance, PUC & Specs'}
              </p>
            </Card>

            {/* Quick 6: Vehicle Scrapping */}
            <Card
              interactive
              onClick={() => onNavigate('/vehicle-scrapping')}
              style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center', minHeight: '160px' }}
            >
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)', backgroundColor: 'var(--color-semantic-success-subtle)', color: 'var(--color-semantic-success)' }}>
                <Trash2 size={24} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
                {isHi ? 'वाहन स्क्रैपिंग' : 'Vehicle Scrapping'}
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>
                {isHi ? 'स्क्रैप करें व टैक्स छूट पाएं' : 'RVSF Centers & Tax Rebates'}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          3. TASK DISCOVERY GRID ("I WANT TO...")
          ---------------------------------------------------------------------- */}
      <section className="py-64" style={{ backgroundColor: 'var(--color-bg-page)' }}>
        <div className="gov-container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-40)' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {t.taskDiscoveryTitle}
            </h2>
            <p className="text-body" style={{ maxWidth: '640px', margin: '0 auto' }}>
              {t.taskDiscoverySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-24">
            {citizenTaskIntents.map((task) => {
              const getTaskIcon = (taskId: string) => {
                switch (taskId) {
                  case 'task-renew-dl':
                    return {
                      icon: <CreditCard size={24} />,
                      bg: 'var(--color-brand-subtle)',
                      color: 'var(--color-brand-primary)'
                    };
                  case 'task-transfer-vehicle':
                    return {
                      icon: <Repeat size={24} />,
                      bg: 'rgba(79, 70, 229, 0.1)',
                      color: '#4F46E5'
                    };
                  case 'task-check-challan':
                    return {
                      icon: <AlertTriangle size={24} />,
                      bg: 'var(--color-semantic-warning-subtle)',
                      color: '#B45309'
                    };
                  case 'task-know-vehicle':
                    return {
                      icon: <Search size={24} />,
                      bg: 'rgba(14, 165, 233, 0.1)',
                      color: '#0284C7'
                    };
                  case 'task-get-ll':
                    return {
                      icon: <BookOpen size={24} />,
                      bg: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669'
                    };
                  case 'task-renew-rc':
                    return {
                      icon: <RefreshCw size={24} />,
                      bg: 'rgba(11, 79, 108, 0.1)',
                      color: 'var(--color-brand-primary)'
                    };
                  case 'task-scrap-vehicle':
                    return {
                      icon: <Trash2 size={24} />,
                      bg: 'var(--color-semantic-success-subtle)',
                      color: 'var(--color-semantic-success)'
                    };
                  case 'task-find-rto':
                    return {
                      icon: <MapPin size={24} />,
                      bg: 'rgba(147, 51, 234, 0.1)',
                      color: '#9333EA'
                    };
                  case 'task-duplicate-rc':
                    return {
                      icon: <Copy size={24} />,
                      bg: 'rgba(247, 127, 0, 0.1)',
                      color: 'var(--color-accent-saffron)'
                    };
                  default:
                    return {
                      icon: <FileText size={24} />,
                      bg: 'var(--color-brand-subtle)',
                      color: 'var(--color-brand-primary)'
                    };
                }
              };
              const iconConfig = getTaskIcon(task.id);

              return (
                <Card
                  key={task.id}
                  interactive
                  style={{ padding: 'var(--space-24) var(--space-24)' }}
                  onClick={() => {
                    if (task.serviceSlug === 'echallan') onNavigate('/echallan');
                    else if (task.serviceSlug === 'know-your-vehicle') onNavigate('/know-your-vehicle');
                    else if (task.serviceSlug === 'vehicle-scrapping') onNavigate('/vehicle-scrapping');
                    else if (task.serviceSlug === 'rto-locator') onNavigate('/rto-locator');
                    else onNavigate(`/services/${task.serviceSlug}`);
                  }}
                >
                  <div className="gov-card-header">
                    <div className="gov-card-icon" style={{ backgroundColor: iconConfig.bg, color: iconConfig.color }}>
                      {iconConfig.icon}
                    </div>
                    {task.badge && (
                      <Badge variant={task.badge === 'Faceless' || task.badge === 'Tax Benefit' ? 'success' : task.badge === 'Instant' ? 'info' : task.badge === 'Popular' ? 'saffron' : 'neutral'}>
                        {isHi ? (task.badge === 'Faceless' ? 'संपर्क रहित' : task.badge === 'Tax Benefit' ? 'टैक्स छूट' : task.badge === 'Instant' ? 'त्वरित' : task.badge === 'Popular' ? 'लोकप्रिय' : task.badge) : task.badge}
                      </Badge>
                    )}
                  </div>

                  <div className="gov-card-body">
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px', lineHeight: 1.4 }}>
                      {isHi ? task.intentHi : task.intent}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      {isHi ? task.descriptionHi : task.description}
                    </p>
                  </div>

                  <div className="gov-card-footer">
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                      <span>{isHi ? 'प्रक्रिया शुरू करें' : 'Start Task'}</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          4. LIVE APPLICATION TRACKER WIDGET
          ---------------------------------------------------------------------- */}
      <section className="py-64" style={{ backgroundColor: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="gov-container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-32)' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
                {t.trackAppTitle}
              </h2>
              <p className="text-body" style={{ margin: 0 }}>
                {t.trackAppSubtitle}
              </p>
            </div>

            <ApplicationTracker language={language} onNavigate={onNavigate} />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          5. IMPORTANT UPDATES & NOTIFICATIONS FEED (FIXED SPACING)
          ---------------------------------------------------------------------- */}
      <section className="py-64" style={{ backgroundColor: 'var(--color-bg-page)' }}>
        <div className="gov-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-32)', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                {t.importantUpdates}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
                {isHi ? 'आधिकारिक राजपत्र अधिसूचनाएं, प्रारूप नियम, परामर्श और प्रणाली अलर्ट' : 'Official gazette notifications, draft rules, advisories, and system maintenance alerts'}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('/information/notifications')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {t.viewAllUpdates}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-24">
            {notificationsData.slice(0, 3).map((notif) => (
              <Card
                key={notif.id}
                style={{
                  padding: 'var(--space-24) var(--space-24)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 'var(--space-16)',
                  minHeight: '200px'
                }}
              >
                {/* Header: Badge & Date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <Badge variant={notif.category === 'Important' ? 'error' : notif.category === 'Advisory' ? 'info' : notif.category === 'Final' ? 'success' : 'neutral'}>
                    {isHi ? (notif.category === 'Important' ? 'महत्वपूर्ण' : notif.category === 'Advisory' ? 'परामर्श' : notif.category === 'Final' ? 'अंतिम' : notif.category) : notif.category}
                  </Badge>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                    {notif.date}
                  </span>
                </div>

                {/* Content: Title & Description */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', lineHeight: 1.4, margin: 0 }}>
                    {isHi ? notif.titleHi : notif.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {isHi ? (notif.titleHi.length > 50 ? notif.titleHi : notif.description) : notif.description}
                  </p>
                </div>

                {/* Footer: Read Full Link */}
                <div style={{ paddingTop: 'var(--space-16)', borderTop: '1px solid var(--color-border-light)', marginTop: 'auto' }}>
                  <a
                    href="#/information/notifications"
                    onClick={(e) => { e.preventDefault(); onNavigate('/information/notifications'); }}
                    style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <span>{isHi ? 'पूरी अधिसूचना पढ़ें' : 'Read Full Notification'}</span>
                    <ChevronRight size={15} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          6. "NEED TO KNOW SOMETHING?" KNOWLEDGE CARDS
          ---------------------------------------------------------------------- */}
      <section className="py-64" style={{ backgroundColor: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="gov-container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-40)' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
              {t.needToKnowTitle}
            </h2>
            <p className="text-body" style={{ margin: 0 }}>
              {t.needToKnowSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-6 gap-24">
            <Card interactive onClick={() => onNavigate('/information')} style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center' }}>
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)' }}>
                <BookOpen size={22} />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)', margin: 0 }}>
                {isHi ? 'नागरिक मार्गदर्शिका' : 'Citizen Guide'}
              </h4>
            </Card>

            <Card interactive onClick={() => onNavigate('/information/faqs')} style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center' }}>
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)' }}>
                <HelpCircle size={22} />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)', margin: 0 }}>
                {isHi ? 'सामान्य प्रश्न' : 'FAQs'}
              </h4>
            </Card>

            <Card interactive onClick={() => onNavigate('/information/forms')} style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center' }}>
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)' }}>
                <FileText size={22} />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)', margin: 0 }}>
                {isHi ? 'प्रपत्र एवं डाउनलोड' : 'Forms & Downloads'}
              </h4>
            </Card>

            <Card interactive onClick={() => onNavigate('/information')} style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center' }}>
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)' }}>
                <Award size={22} />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)', margin: 0 }}>
                {isHi ? 'शुल्क संरचना' : 'Fees & Charges'}
              </h4>
            </Card>

            <Card interactive onClick={() => onNavigate('/information')} style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center' }}>
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)' }}>
                <Shield size={22} />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)', margin: 0 }}>
                {isHi ? 'अधिनियम एवं नियम' : 'Acts & Rules'}
              </h4>
            </Card>

            <Card interactive onClick={() => onNavigate('/rto-locator')} style={{ padding: 'var(--space-24) var(--space-16)', textAlign: 'center', alignItems: 'center' }}>
              <div className="gov-card-icon" style={{ margin: '0 auto var(--space-12)' }}>
                <MapPin size={22} />
              </div>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)', margin: 0 }}>
                {isHi ? 'आरटीओ निर्देशिका' : 'RTO Directory'}
              </h4>
            </Card>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          7. BUSINESS & INDUSTRY SECTION CALLOUT
          ---------------------------------------------------------------------- */}
      <section className="py-64" style={{ backgroundColor: 'var(--color-brand-subtle)', borderTop: '1px solid #B6D4FE' }}>
        <div className="gov-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-32)', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                {t.forBusinessTitle}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
                {t.forBusinessSubtitle}
              </p>
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={() => onNavigate('/business')}
              icon={<ArrowRight size={14} />}
              iconPosition="right"
            >
              {isHi ? 'व्यवसाय पोर्टल पर जाएं' : 'Access Business Portal'}
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-24">
            <Card interactive onClick={() => onNavigate('/business')} style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-24) var(--space-24)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
                {isHi ? 'ऑटोमोबाइल डीलर' : 'Automobile Dealers'}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                {isHi ? 'ट्रेड सर्टिफिकेट, डीलर पंजीकरण और फॉर्म 20 जमा करें।' : 'Trade Certificates, Dealer Registration, and New Vehicle Form 20 Submissions.'}
              </p>
            </Card>

            <Card interactive onClick={() => onNavigate('/business')} style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-24) var(--space-24)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
                {isHi ? 'वाहन निर्माता (OEM)' : 'Manufacturers (OEM)'}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                {isHi ? 'होमोलोगेशन टाइप अप्रूवल, विनिर्देश रजिस्ट्री और सुरक्षा अनुपालन।' : 'Homologation Type Approval, Vehicle Specification Registry, and Safety compliance.'}
              </p>
            </Card>

            <Card interactive onClick={() => onNavigate('/business')} style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-24) var(--space-24)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
                {isHi ? 'वीएलटीडी एवं एसएलडी निर्माता' : 'VLTD & SLD Makers'}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                {isHi ? 'वाहन ट्रैकिंग (VLTD) और गति नियंत्रक (SLD) डिवाइस प्रमाणन।' : 'Vehicle Location Tracking & Speed Limiting Device certification.'}
              </p>
            </Card>

            <Card interactive onClick={() => onNavigate('/business')} style={{ backgroundColor: '#FFFFFF', padding: 'var(--space-24) var(--space-24)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: '0 0 8px' }}>
                {isHi ? 'आरवीएसएफ स्क्रैपिंग केंद्र' : 'RVSF Scrappage Centers'}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                {isHi ? 'अधिकृत ईएलवी जमा, आरसी रद्दीकरण और जमा प्रमाण पत्र (COD) जारी करना।' : 'Authorized ELV intake, RC Deregistration, and Certificate of Deposit (COD) issuance.'}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          8. TRANSPORT DATA & DASHBOARDS METRICS (FIXED SPACING)
          ---------------------------------------------------------------------- */}
      <section className="py-64" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="gov-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-32)', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                {t.dataMetricsTitle}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
                {t.dataMetricsSubtitle}
              </p>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('/dashboards')}
              icon={<TrendingUp size={14} />}
            >
              {isHi ? 'राष्ट्रीय विश्लेषिकी देखें' : 'Explore National Analytics'}
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-24">
            {nationalDashboardKPIs.map((kpi, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-bg-page)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-24) var(--space-24)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '160px'
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
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{isHi ? (kpi.subtext === 'National Total' ? 'राष्ट्रीय कुल' : kpi.subtext === 'Active on Roads' ? 'सड़कों पर सक्रिय' : kpi.subtext === 'Fines Collected' ? 'जुर्माना राशि' : kpi.subtext) : kpi.subtext}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
