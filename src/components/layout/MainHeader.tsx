import React, { useState } from 'react';
import { Search, ChevronDown, Menu, User, LogIn, ExternalLink } from 'lucide-react';
import { Language, UserRole } from '../../types';
import { translations } from '../../data/translations';
import { BrandLogo } from '../common/BrandLogo';
import { Button } from '../ui/Button';
import { MegaMenu } from './MegaMenu';

export interface MainHeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
  language: Language;
  userRole: UserRole;
  onSignOut: () => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  onOpenMobileMenu,
  language,
  userRole,
  onSignOut
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeoutRef = React.useRef<number | null>(null);
  const menuContainerRef = React.useRef<HTMLDivElement | null>(null);
  const buttonRef = React.useRef<HTMLDivElement | null>(null);
  const t = translations[language];

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 250);
  };

  const handleCloseImmediately = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(false);
  };

  const handleToggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen((prev) => !prev);
  };

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isServicesOpen &&
        menuContainerRef.current &&
        !menuContainerRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isServicesOpen) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [isServicesOpen]);

  return (
    <header className="gov-main-header">
      <div className="gov-container">
        <div className="gov-header-content">
          {/* Official Brand Identity */}
          <a
            href="#/"
            className="gov-brand-group"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            title="Parivahan Sewa Homepage"
          >
            <BrandLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="gov-desktop-nav desktop-only" aria-label="Main Navigation">
            {/* Services with MegaMenu */}
            <div
              ref={buttonRef}
              style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`gov-nav-link ${currentPath.startsWith('/services') || isServicesOpen ? 'active' : ''}`}
                onClick={handleToggleMenu}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                style={{ cursor: 'pointer' }}
              >
                <span>{t.navServices}</span>
                <ChevronDown size={14} style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }} />
              </button>
            </div>

            {/* Track Application */}
            <a
              href="#/track"
              className={`gov-nav-link ${currentPath === '/track' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/track');
              }}
            >
              {t.navTrack}
            </a>

            {/* Information Center */}
            <a
              href="#/information"
              className={`gov-nav-link ${currentPath.startsWith('/information') ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/information');
              }}
            >
              {t.navInfo}
            </a>

            {/* Business & Industry */}
            <a
              href="#/business"
              className={`gov-nav-link ${currentPath === '/business' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/business');
              }}
            >
              {t.navBusiness}
            </a>

            {/* Data & Dashboards */}
            <a
              href="#/dashboards"
              className={`gov-nav-link ${currentPath === '/dashboards' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/dashboards');
              }}
            >
              {t.navDashboards}
            </a>

            {/* Help & Support */}
            <a
              href="#/help"
              className={`gov-nav-link ${currentPath === '/help' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/help');
              }}
            >
              {t.navHelp}
            </a>
          </nav>

          {/* Right Action Utilities */}
          <div className="gov-header-actions">
            {/* Universal Search Button */}
            <button
              className="gov-tool-btn"
              style={{
                backgroundColor: 'var(--color-bg-page)',
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
                padding: '6px 12px',
                fontSize: '13px',
                borderRadius: 'var(--radius-md)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                minHeight: '38px',
                cursor: 'pointer'
              }}
              onClick={onOpenSearch}
              title="Search Services (Ctrl+K)"
              aria-label="Search Services"
            >
              <Search size={15} color="var(--color-brand-primary)" />
              <span className="desktop-only" style={{ fontSize: '13px', fontWeight: 500 }}>
                {language === 'hi' ? 'खोजें...' : 'Search...'}
              </span>
              <kbd
                className="desktop-only"
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  backgroundColor: 'var(--color-bg-surface-secondary)',
                  color: 'var(--color-text-muted)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  border: '1px solid var(--color-border-light)',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap'
                }}
              >
                Ctrl K
              </kbd>
            </button>

            {/* My Parivahan Citizen Button */}
            <Button
              variant="secondary"
              size="sm"
              className="desktop-only"
              onClick={() => onNavigate('/my-parivahan')}
              icon={<User size={15} />}
            >
              {t.myParivahan}
            </Button>

            {/* Sign In / User Status */}
            {userRole ? (
              <Button
                variant="outline"
                size="sm"
                className="desktop-only"
                onClick={onSignOut}
              >
                {t.signOut}
              </Button>
            ) : (
              <Button
                variant="primary"
                size="sm"
                className="desktop-only"
                onClick={() => onNavigate('/login')}
                icon={<LogIn size={15} />}
              >
                {t.signIn}
              </Button>
            )}

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-only"
              onClick={onOpenMobileMenu}
              aria-label="Open mobile navigation"
              style={{
                padding: '8px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-brand-subtle)',
                color: 'var(--color-brand-primary)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Services Mega Menu Overlay */}
      <div
        ref={menuContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenu
          isOpen={isServicesOpen}
          onClose={handleCloseImmediately}
          onNavigate={onNavigate}
          language={language}
        />
      </div>
    </header>
  );
};
