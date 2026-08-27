import React, { useState } from 'react';
import {
  X, User, LogIn, ChevronRight, ChevronDown, CreditCard, Car,
  AlertTriangle, ShieldCheck, HelpCircle, FileText,
  TrendingUp, Search, ExternalLink, Globe, Briefcase, Truck, Sparkles, Building
} from 'lucide-react';
import { Language, UserRole } from '../../types';
import { translations } from '../../data/translations';
import { masterOnlineServicesInventory } from '../../data/featureRegistry';
import { BrandLogo } from '../common/BrandLogo';
import { Button } from '../ui/Button';

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  language: Language;
  userRole: UserRole;
  onSignOut?: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenSearch,
  language,
  userRole,
  onSignOut = () => {}
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('services');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const t = translations[language];
  const isHi = language === 'hi';

  const handleLink = (path: string) => {
    onNavigate(path);
    onClose();
  };

  const toggleCategory = (cat: string) => {
    setExpandedCategory((prev) => (prev === cat ? null : cat));
  };

  // Group services by category for the accordion
  const dlServices = masterOnlineServicesInventory.filter((s) => s.category === 'Driving Licence');
  const vehicleServices = masterOnlineServicesInventory.filter((s) => s.category === 'Vehicle');
  const permitServices = masterOnlineServicesInventory.filter((s) => s.category === 'Permits & Transport');
  const complianceServices = masterOnlineServicesInventory.filter((s) => s.category === 'Compliance & Payments');
  const businessServices = masterOnlineServicesInventory.filter((s) => s.category === 'Business & Industry');
  const specialServices = masterOnlineServicesInventory.filter(
    (s) => s.category === 'Registration & Special Services' || s.category === 'National Register'
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
        backdropFilter: 'blur(2px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '88%',
          maxWidth: '380px',
          height: '100%',
          backgroundColor: 'var(--color-bg-surface)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-overlay)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: 'var(--space-16)',
            borderBottom: '1px solid var(--color-border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--color-bg-surface-secondary)'
          }}
        >
          <BrandLogo variant="compact" />
          <button
            onClick={onClose}
            aria-label="Close navigation drawer"
            style={{
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer Quick Search */}
        <div style={{ padding: 'var(--space-16)', borderBottom: '1px solid var(--color-border-light)' }}>
          <button
            onClick={() => { onClose(); onOpenSearch(); }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: 'var(--color-bg-page)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--color-text-muted)',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            <Search size={16} />
            <span>{isHi ? 'सेवा या कार्य खोजें...' : 'Search for a service...'}</span>
          </button>
        </div>

        {/* Nav Links / Accordion */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-16)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {/* Services Accordion Header */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  color: 'var(--color-brand-primary)',
                  fontSize: '15px',
                  backgroundColor: 'var(--color-brand-subtle)',
                  cursor: 'pointer'
                }}
                onClick={() => setExpandedSection((prev) => (prev === 'services' ? null : 'services'))}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={18} />
                  <span>{t.navServices} ({masterOnlineServicesInventory.length})</span>
                </div>
                {expandedSection === 'services' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </div>

              {expandedSection === 'services' && (
                <div style={{ paddingLeft: '8px', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {/* Category 1: Driving Licence */}
                  <div>
                    <div
                      onClick={() => toggleCategory('dl')}
                      style={{
                        padding: '10px 12px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--color-brand-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CreditCard size={15} color="var(--color-brand-primary)" />
                        <span>Driving Licence</span>
                      </div>
                      <ChevronDown size={14} style={{ transform: expandedCategory === 'dl' ? 'rotate(180deg)' : 'none' }} />
                    </div>
                    {expandedCategory === 'dl' && (
                      <div style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {dlServices.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleLink(s.route)}
                            style={{ textAlign: 'left', padding: '8px 8px', fontSize: '13px', color: 'var(--color-text-secondary)', borderRadius: '4px' }}
                          >
                            {isHi ? s.nameHi : s.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Category 2: Vehicle */}
                  <div>
                    <div
                      onClick={() => toggleCategory('veh')}
                      style={{
                        padding: '10px 12px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--color-brand-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Car size={15} color="var(--color-brand-primary)" />
                        <span>Vehicle Services</span>
                      </div>
                      <ChevronDown size={14} style={{ transform: expandedCategory === 'veh' ? 'rotate(180deg)' : 'none' }} />
                    </div>
                    {expandedCategory === 'veh' && (
                      <div style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {vehicleServices.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleLink(s.route)}
                            style={{ textAlign: 'left', padding: '8px 8px', fontSize: '13px', color: 'var(--color-text-secondary)', borderRadius: '4px' }}
                          >
                            {isHi ? s.nameHi : s.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Category 3: Permits & Transport */}
                  <div>
                    <div
                      onClick={() => toggleCategory('perm')}
                      style={{
                        padding: '10px 12px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--color-brand-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Truck size={15} color="var(--color-brand-primary)" />
                        <span>Permits & Transport</span>
                      </div>
                      <ChevronDown size={14} style={{ transform: expandedCategory === 'perm' ? 'rotate(180deg)' : 'none' }} />
                    </div>
                    {expandedCategory === 'perm' && (
                      <div style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {permitServices.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleLink(s.route)}
                            style={{ textAlign: 'left', padding: '8px 8px', fontSize: '13px', color: 'var(--color-text-secondary)', borderRadius: '4px' }}
                          >
                            {isHi ? s.nameHi : s.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Category 4: Compliance & Payments */}
                  <div>
                    <div
                      onClick={() => toggleCategory('comp')}
                      style={{
                        padding: '10px 12px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--color-brand-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <ShieldCheck size={15} color="var(--color-brand-primary)" />
                        <span>Compliance & Payments</span>
                      </div>
                      <ChevronDown size={14} style={{ transform: expandedCategory === 'comp' ? 'rotate(180deg)' : 'none' }} />
                    </div>
                    {expandedCategory === 'comp' && (
                      <div style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {complianceServices.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleLink(s.route)}
                            style={{ textAlign: 'left', padding: '8px 8px', fontSize: '13px', color: 'var(--color-text-secondary)', borderRadius: '4px' }}
                          >
                            {isHi ? s.nameHi : s.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Category 5: Business & Industry */}
                  <div>
                    <div
                      onClick={() => toggleCategory('biz')}
                      style={{
                        padding: '10px 12px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--color-brand-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Briefcase size={15} color="var(--color-brand-primary)" />
                        <span>Business & Industry</span>
                      </div>
                      <ChevronDown size={14} style={{ transform: expandedCategory === 'biz' ? 'rotate(180deg)' : 'none' }} />
                    </div>
                    {expandedCategory === 'biz' && (
                      <div style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {businessServices.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleLink(s.route)}
                            style={{ textAlign: 'left', padding: '8px 8px', fontSize: '13px', color: 'var(--color-text-secondary)', borderRadius: '4px' }}
                          >
                            {isHi ? s.nameHi : s.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Category 6: Special & National Register */}
                  <div>
                    <div
                      onClick={() => toggleCategory('spec')}
                      style={{
                        padding: '10px 12px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--color-brand-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Building size={15} color="var(--color-brand-primary)" />
                        <span>Special & National Register</span>
                      </div>
                      <ChevronDown size={14} style={{ transform: expandedCategory === 'spec' ? 'rotate(180deg)' : 'none' }} />
                    </div>
                    {expandedCategory === 'spec' && (
                      <div style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {specialServices.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => handleLink(s.route)}
                            style={{ textAlign: 'left', padding: '8px 8px', fontSize: '13px', color: 'var(--color-text-secondary)', borderRadius: '4px' }}
                          >
                            {isHi ? s.nameHi : s.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* All Services Hub Link */}
                  <button
                    onClick={() => handleLink('/services')}
                    style={{
                      marginTop: '4px',
                      padding: '8px 12px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--color-brand-primary)',
                      textAlign: 'left'
                    }}
                  >
                    {isHi ? '→ सभी 22 ऑनलाइन सेवाएं खोलें' : '→ View All 22 Online Services Hub'}
                  </button>
                </div>
              )}
            </div>

            {/* Other Main Navigation Links */}
            <button
              onClick={() => handleLink('/track')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                color: 'var(--color-brand-dark)',
                fontSize: '15px',
                textAlign: 'left'
              }}
            >
              <span>{t.navTrack}</span>
              <ChevronRight size={18} color="var(--color-text-muted)" />
            </button>

            <button
              onClick={() => handleLink('/echallan')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                color: 'var(--color-brand-dark)',
                fontSize: '15px',
                textAlign: 'left'
              }}
            >
              <span>{t.checkChallan}</span>
              <ChevronRight size={18} color="var(--color-text-muted)" />
            </button>

            <button
              onClick={() => handleLink('/know-your-vehicle')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                color: 'var(--color-brand-dark)',
                fontSize: '15px',
                textAlign: 'left'
              }}
            >
              <span>{t.knowYourVehicle}</span>
              <ChevronRight size={18} color="var(--color-text-muted)" />
            </button>

            <button
              onClick={() => handleLink('/vehicle-scrapping')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                color: 'var(--color-brand-dark)',
                fontSize: '15px',
                textAlign: 'left'
              }}
            >
              <span>{t.scrapVehicle}</span>
              <ChevronRight size={18} color="var(--color-text-muted)" />
            </button>

            <div style={{ height: '1px', backgroundColor: 'var(--color-border-light)', margin: '8px 0' }} />

            <button
              onClick={() => handleLink('/information')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                color: 'var(--color-brand-dark)',
                fontSize: '15px',
                textAlign: 'left'
              }}
            >
              <span>{t.navInfo}</span>
              <ChevronRight size={18} color="var(--color-text-muted)" />
            </button>

            <button
              onClick={() => handleLink('/business')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                color: 'var(--color-brand-dark)',
                fontSize: '15px',
                textAlign: 'left'
              }}
            >
              <span>{t.navBusiness}</span>
              <ChevronRight size={18} color="var(--color-text-muted)" />
            </button>

            <button
              onClick={() => handleLink('/dashboards')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                color: 'var(--color-brand-dark)',
                fontSize: '15px',
                textAlign: 'left'
              }}
            >
              <span>{t.navDashboards}</span>
              <ChevronRight size={18} color="var(--color-text-muted)" />
            </button>

            <button
              onClick={() => handleLink('/help')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                color: 'var(--color-brand-dark)',
                fontSize: '15px',
                textAlign: 'left'
              }}
            >
              <span>{t.navHelp}</span>
              <ChevronRight size={18} color="var(--color-text-muted)" />
            </button>
          </div>
        </div>

        {/* Drawer Auth Actions */}
        <div
          style={{
            padding: 'var(--space-16)',
            borderTop: '1px solid var(--color-border-light)',
            backgroundColor: 'var(--color-bg-surface-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <Button
            variant="primary"
            fullWidth
            onClick={() => handleLink('/my-parivahan')}
            icon={<User size={16} />}
          >
            {t.myParivahan}
          </Button>

          <Button
            variant="outline"
            fullWidth
            onClick={() => handleLink('/login')}
          >
            {userRole ? t.signOut : t.signIn}
          </Button>
        </div>
      </div>
    </div>
  );
};
