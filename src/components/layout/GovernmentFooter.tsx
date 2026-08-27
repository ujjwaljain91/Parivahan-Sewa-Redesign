import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { BrandLogo } from '../common/BrandLogo';

export interface GovernmentFooterProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const GovernmentFooter: React.FC<GovernmentFooterProps> = ({ onNavigate, language }) => {
  const t = translations[language];
  const isHi = language === 'hi';

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="gov-footer" role="contentinfo">
      <div className="gov-container">
        <div className="gov-footer-main">
          {/* Footer Top Brand Statement */}
          <div style={{ paddingBottom: 'var(--space-32)', marginBottom: 'var(--space-32)', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <BrandLogo variant="white" />
            <div style={{ maxWidth: '600px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
              {t.footerAboutParivahan}
            </div>
          </div>

          {/* 6-Column Government Footer Grid */}
          <div className="gov-footer-grid">
            {/* Column 1: Parivahan Portal */}
            <div>
              <h4 className="gov-footer-col-title">{isHi ? 'परिवहन पोर्टल' : 'Parivahan Portal'}</h4>
              <ul className="gov-footer-links">
                <li className="gov-footer-link">
                  <a href="#/information" onClick={(e) => handleNav(e, '/information')}>{isHi ? 'हमारे बारे में' : 'About Parivahan'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/help" onClick={(e) => handleNav(e, '/help')}>{isHi ? 'सहायता केंद्र' : 'Contact & Support'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/media" onClick={(e) => handleNav(e, '/media')}>{isHi ? 'प्रेस एवं मीडिया' : 'Public Media & Press'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/rto-locator" onClick={(e) => handleNav(e, '/rto-locator')}>{isHi ? 'आरटीओ निर्देशिका' : 'RTO Directory'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/sitemap" onClick={(e) => handleNav(e, '/information')}>{isHi ? 'साइटमैप' : 'Sitemap'}</a>
                </li>
              </ul>
            </div>

            {/* Column 2: Citizen Services */}
            <div>
              <h4 className="gov-footer-col-title">{isHi ? 'नागरिक सेवाएं' : 'Citizen Services'}</h4>
              <ul className="gov-footer-links">
                <li className="gov-footer-link">
                  <a href="#/services/renew-driving-licence" onClick={(e) => handleNav(e, '/services/renew-driving-licence')}>{isHi ? 'ड्राइविंग लाइसेंस नवीनीकरण' : 'Driving Licence Renewal'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/services/transfer-vehicle-ownership" onClick={(e) => handleNav(e, '/services/transfer-vehicle-ownership')}>{isHi ? 'वाहन स्वामित्व हस्तांतरण' : 'Vehicle Ownership Transfer'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/echallan" onClick={(e) => handleNav(e, '/echallan')}>{isHi ? 'ई-चालान भुगतान' : 'eChallan Search & Pay'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/vehicle-scrapping" onClick={(e) => handleNav(e, '/vehicle-scrapping')}>{isHi ? 'वाहन स्क्रैपेज नीति (RVSF)' : 'Vehicle Scrapping Portal'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/know-your-vehicle" onClick={(e) => handleNav(e, '/know-your-vehicle')}>{isHi ? 'वाहन विवरण (RC Status)' : 'Know Your Vehicle'}</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Information & Rules */}
            <div>
              <h4 className="gov-footer-col-title">{isHi ? 'सूचना एवं दिशानिर्देश' : 'Information & Rules'}</h4>
              <ul className="gov-footer-links">
                <li className="gov-footer-link">
                  <a href="#/information" onClick={(e) => handleNav(e, '/information')}>{isHi ? 'नागरिक मार्गदर्शिका' : 'Citizen Guide'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/information/forms" onClick={(e) => handleNav(e, '/information/forms')}>{isHi ? 'प्रपत्र एवं डाउनलोड' : 'Forms & Downloads'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/information/faqs" onClick={(e) => handleNav(e, '/information/faqs')}>{isHi ? 'सामान्य प्रश्न (FAQs)' : 'Frequently Asked Questions'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/information/notifications" onClick={(e) => handleNav(e, '/information/notifications')}>{isHi ? 'गजट अधिसूचनाएं' : 'Gazette Notifications'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/information" onClick={(e) => handleNav(e, '/information')}>{isHi ? 'मोटर वाहन अधिनियम 1988' : 'Motor Vehicles Act & Rules'}</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Business & Industry */}
            <div>
              <h4 className="gov-footer-col-title">{isHi ? 'व्यवसाय एवं उद्योग' : 'Business & Industry'}</h4>
              <ul className="gov-footer-links">
                <li className="gov-footer-link">
                  <a href="#/business" onClick={(e) => handleNav(e, '/business')}>{isHi ? 'डीलर सेवाएं' : 'Automobile Dealer Portal'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/business" onClick={(e) => handleNav(e, '/business')}>{isHi ? 'होमोलोगेशन' : 'Homologation & Type Approval'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/business" onClick={(e) => handleNav(e, '/business')}>{isHi ? 'वीएलटीडी एवं एसएलडी' : 'VLTD & SLD Makers'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/business" onClick={(e) => handleNav(e, '/business')}>{isHi ? 'सीएनजी रेट्रोफिटिंग' : 'CNG Retrofitting Agency'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/business" onClick={(e) => handleNav(e, '/business')}>{isHi ? 'आरवीएसएफ स्क्रैपिंग सेंटर' : 'Registered Scrapping (RVSF)'}</a>
                </li>
              </ul>
            </div>

            {/* Column 5: Government Links */}
            <div>
              <h4 className="gov-footer-col-title">{isHi ? 'सरकारी लिंक्स' : 'Government Links'}</h4>
              <ul className="gov-footer-links">
                <li className="gov-footer-link">
                  <a href="https://morth.nic.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <span>MoRTH Portal</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li className="gov-footer-link">
                  <a href="https://nic.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <span>National Informatics Centre (NIC)</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li className="gov-footer-link">
                  <a href="https://india.gov.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <span>National Portal of India</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li className="gov-footer-link">
                  <a href="https://delhitrafficpolice.nic.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <span>Delhi Traffic Police Notice</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li className="gov-footer-link">
                  <a href="https://digilocker.gov.in" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <span>DigiLocker Integration</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 6: Policies & Legal */}
            <div>
              <h4 className="gov-footer-col-title">{isHi ? 'नीतियां एवं नियम' : 'Policies & Legal'}</h4>
              <ul className="gov-footer-links">
                <li className="gov-footer-link">
                  <a href="#/policies" onClick={(e) => handleNav(e, '/policies')}>{isHi ? 'गोपनीयता नीति' : 'Privacy Policy'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/policies" onClick={(e) => handleNav(e, '/policies')}>{isHi ? 'हाइपरलिंक नीति' : 'Hyperlink Policy'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/policies" onClick={(e) => handleNav(e, '/policies')}>{isHi ? 'डेटा साझाकरण नीति' : 'Data Sharing Policy'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/policies" onClick={(e) => handleNav(e, '/policies')}>{isHi ? 'वेबसाइट नीतियां' : 'Website Policies'}</a>
                </li>
                <li className="gov-footer-link">
                  <a href="#/policies" onClick={(e) => handleNav(e, '/policies')}>{isHi ? 'उपयोग की शर्तें' : 'Terms & Conditions'}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="gov-footer-bottom">
        <div className="gov-container">
          <div className="gov-footer-bottom-content">
            <div>
              <span>Designed, Developed and Hosted by <strong>National Informatics Centre (NIC)</strong></span>
              <br />
              <span>Ministry of Road Transport &amp; Highways, Government of India. All Rights Reserved.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span>Version: <strong>PARIVAHAN 4.0 NEXT-GEN</strong></span>
              <span>•</span>
              <span>Compliant with <strong>GIGW 3.0 &amp; WCAG 2.1 AA</strong></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
