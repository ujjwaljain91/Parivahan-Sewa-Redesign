import React from 'react';
import {
  X, User, LogIn, ChevronRight, CreditCard, Car,
  AlertTriangle, ShieldCheck, HelpCircle, FileText,
  TrendingUp, Search, ExternalLink, Globe
} from 'lucide-react';
import { Language, UserRole } from '../../types';
import { translations } from '../../data/translations';
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
  if (!isOpen) return null;

  const t = translations[language];

  const handleLink = (path: string) => {
    onNavigate(path);
    onClose();
  };

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
          width: '85%',
          maxWidth: '360px',
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
            aria-label="Close navigation"
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
            <span>{language === 'hi' ? 'सेवा खोजें...' : 'Search for a service...'}</span>
          </button>
        </div>

        {/* Nav Links */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-16)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={() => handleLink('/services')}
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
              <span>{t.navServices}</span>
              <ChevronRight size={18} color="var(--color-text-muted)" />
            </button>

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
