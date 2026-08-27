import React, { useState, useEffect } from 'react';
import { Language, TextSize, UserRole } from './types';
import { GovernmentHeader } from './components/layout/GovernmentHeader';
import { MainHeader } from './components/layout/MainHeader';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { GovernmentFooter } from './components/layout/GovernmentFooter';
import { UniversalSearch } from './components/features/UniversalSearch';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ApplicationFlowPage } from './pages/ApplicationFlowPage';
import { TrackPage } from './pages/TrackPage';
import { KnowYourVehiclePage } from './pages/KnowYourVehiclePage';
import { EChallanPage } from './pages/EChallanPage';
import { VehicleScrappingPage } from './pages/VehicleScrappingPage';
import { MyParivahanPage } from './pages/MyParivahanPage';
import { AuthPage } from './pages/AuthPage';
import { BusinessPortalPage } from './pages/BusinessPortalPage';
import { StaffPortalPage } from './pages/StaffPortalPage';
import { DashboardsPage } from './pages/DashboardsPage';
import { InformationHubPage } from './pages/InformationHubPage';
import { FormsPage } from './pages/FormsPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { MediaPage } from './pages/MediaPage';
import { FaqsPage } from './pages/FaqsPage';
import { SupportPage } from './pages/SupportPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { RtoLocatorPage } from './pages/RtoLocatorPage';

export const App: React.FC = () => {
  // Global States
  const [language, setLanguage] = useState<Language>('en');
  const [textSize, setTextSize] = useState<TextSize>('normal');
  const [userRole, setUserRole] = useState<UserRole>('citizen');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Router State
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  });

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setCurrentRoute(hash || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut for Universal Search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync Text Size DOM Attribute & clear any legacy theme
  useEffect(() => {
    document.documentElement.setAttribute('data-text-size', textSize);
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('parivahan-theme');
  }, [textSize]);

  // Page Routing Logic
  const renderRoute = () => {
    if (currentRoute === '/' || currentRoute === '') {
      return (
        <HomePage
          onNavigate={navigate}
          onOpenSearch={() => setSearchOpen(true)}
          language={language}
        />
      );
    }

    if (currentRoute === '/services') {
      return <ServicesPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute.startsWith('/services/')) {
      const slug = currentRoute.replace('/services/', '');
      return <ServiceDetailPage slug={slug} onNavigate={navigate} language={language} />;
    }

    if (currentRoute.startsWith('/apply/')) {
      const slug = currentRoute.replace('/apply/', '');
      return <ApplicationFlowPage slug={slug} onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/track') {
      return <TrackPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/know-your-vehicle') {
      return <KnowYourVehiclePage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/echallan') {
      return <EChallanPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/vehicle-scrapping') {
      return <VehicleScrappingPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/my-parivahan') {
      return <MyParivahanPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/login') {
      return <AuthPage onLogin={(role: UserRole) => setUserRole(role)} onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/business' || currentRoute.startsWith('/business/')) {
      const subSlug = currentRoute.startsWith('/business/') ? currentRoute.replace('/business/', '') : undefined;
      return <BusinessPortalPage subSlug={subSlug} onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/staff') {
      return <StaffPortalPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/dashboards') {
      return <DashboardsPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/information') {
      return <InformationHubPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/information/forms') {
      return <FormsPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/information/notifications') {
      return <NotificationsPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/information/faqs') {
      return <FaqsPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/media') {
      return <MediaPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/help') {
      return <SupportPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/policies') {
      return <PoliciesPage onNavigate={navigate} language={language} />;
    }

    if (currentRoute === '/rto-locator') {
      return <RtoLocatorPage onNavigate={navigate} language={language} />;
    }

    // Default Fallback to Homepage
    return (
      <HomePage
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
        language={language}
      />
    );
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Top Government Identity Strip */}
      <GovernmentHeader
        language={language}
        onLanguageChange={setLanguage}
        textSize={textSize}
        onTextSizeChange={setTextSize}
      />

      {/* 2. Main Navigation Header */}
      <MainHeader
        currentPath={currentRoute}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        language={language}
        userRole={userRole}
        onSignOut={() => setUserRole(null)}
      />

      {/* 3. Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
        language={language}
        userRole={userRole}
        onSignOut={() => setUserRole(null)}
      />

      {/* 4. Universal Intent-Driven Search Dialog (Ctrl+K) */}
      <UniversalSearch
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigate}
        language={language}
      />

      {/* 5. Main Content Area */}
      <main style={{ flex: 1 }}>
        {renderRoute()}
      </main>

      {/* 6. Comprehensive 6-Column Government Footer */}
      <GovernmentFooter onNavigate={navigate} language={language} />
    </div>
  );
};

export default App;
