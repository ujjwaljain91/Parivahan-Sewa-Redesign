import React from 'react';
import { CreditCard, Car, Truck, FileCheck, ShieldCheck, Sparkles, ArrowRight, Trash2 } from 'lucide-react';
import { Language } from '../../types';

export interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  language: Language;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, onNavigate, language }) => {
  if (!isOpen) return null;

  const isHi = language === 'hi';

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div className="gov-megamenu" role="region" aria-label="Services Mega Menu">
      <div className="gov-container">
        <div className="gov-megamenu-grid">
          {/* Pillar 1: Driving Licence */}
          <div>
            <div className="gov-megamenu-column-title">
              <CreditCard size={18} color="var(--color-brand-primary)" />
              <span>{isHi ? 'ड्राइविंग लाइसेंस' : 'Driving Licence'}</span>
            </div>
            <ul className="gov-megamenu-list">
              <li className="gov-megamenu-item">
                <a href="#/services/renew-driving-licence" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/renew-driving-licence'); }}>
                  <strong>{isHi ? 'लाइसेंस का नवीनीकरण' : 'Renew Driving Licence'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'समाप्त हो रहे लाइसेंस हेतु ऑनलाइन आवेदन' : 'Faceless contactless renewal process'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/learners-licence" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/learners-licence'); }}>
                  <strong>{isHi ? "लर्नर (शिक्षार्थी) लाइसेंस" : "Learner's Licence (LL)"}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'घर बैठे ऑनलाइन थ्योरी टेस्ट' : 'Online proctored road safety test'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/permanent-driving-licence" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/permanent-driving-licence'); }}>
                  <strong>{isHi ? 'स्थायी ड्राइविंग लाइसेंस' : 'Permanent Driving Licence'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'आरटीओ टेस्ट ट्रैक स्लॉट बुकिंग' : 'Book practical driving track test'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/duplicate-driving-licence" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/duplicate-driving-licence'); }}>
                  <strong>{isHi ? 'डुप्लीकेट लाइसेंस' : 'Duplicate Driving Licence'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'खोए या क्षतिग्रस्त कार्ड हेतु' : 'Replace lost or damaged DL'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/international-driving-permit" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/international-driving-permit'); }}>
                  <strong>{isHi ? 'अंतर्राष्ट्रीय परमिट (IDP)' : 'International Driving Permit'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? '150+ देशों में वैध ड्राइविंग परमिट' : 'Valid across 150+ countries'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Vehicle Registration */}
          <div>
            <div className="gov-megamenu-column-title">
              <Car size={18} color="var(--color-brand-primary)" />
              <span>{isHi ? 'वाहन पंजीकरण' : 'Vehicle Registration'}</span>
            </div>
            <ul className="gov-megamenu-list">
              <li className="gov-megamenu-item">
                <a href="#/services/transfer-vehicle-ownership" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/transfer-vehicle-ownership'); }}>
                  <strong>{isHi ? 'स्वामित्व हस्तांतरण' : 'Transfer Vehicle Ownership'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'क्रेता-विक्रेता ओटीपी द्वारा आरसी ट्रांसफर' : 'Aadhaar verified buyer-seller transfer'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/renewal-of-rc" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/renewal-of-rc'); }}>
                  <strong>{isHi ? 'आरसी नवीनीकरण (15+ वर्ष)' : 'Renewal of Registration (RC)'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'निजी वाहनों की 5-वर्षीय वैधता वृद्धि' : '5-year extension upon fitness test'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/duplicate-rc" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/duplicate-rc'); }}>
                  <strong>{isHi ? 'डुप्लीकेट आरसी' : 'Duplicate RC Smart Card'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'खोए हुए पंजीकरण प्रमाण पत्र हेतु' : 'Speed post delivery to address'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/no-objection-certificate" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/no-objection-certificate'); }}>
                  <strong>{isHi ? 'अनापत्ति प्रमाण पत्र (NOC)' : 'No Objection Certificate (NOC)'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'अन्य राज्य/आरटीओ स्थानांतरण हेतु' : 'Form 28 inter-state clearance'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/know-your-vehicle" onClick={(e) => { e.preventDefault(); handleLinkClick('/know-your-vehicle'); }}>
                  <strong>{isHi ? 'वाहन विवरण जानें' : 'Know Your Vehicle'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'आरसी, बीमा, पीयूसी और फिटनेस' : 'Instant vehicle specs and validity lookup'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Compliance & Permits */}
          <div>
            <div className="gov-megamenu-column-title">
              <FileCheck size={18} color="var(--color-brand-primary)" />
              <span>{isHi ? 'अनुपालन एवं परमिट' : 'Compliance & Permits'}</span>
            </div>
            <ul className="gov-megamenu-list">
              <li className="gov-megamenu-item">
                <a href="#/echallan" onClick={(e) => { e.preventDefault(); handleLinkClick('/echallan'); }}>
                  <strong>{isHi ? 'ई-चालान भुगतान' : 'eChallan Search & Pay'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'यातायात चालान देखें व रसीद पाएं' : 'Check pending fines with photo proof'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/puc-certificate" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/puc-certificate'); }}>
                  <strong>{isHi ? 'प्रदूषण प्रमाण पत्र (PUCC)' : 'PUC Certificate & Status'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'राष्ट्रीय पीयूसीसी रिकॉर्ड जांचें' : 'Central emission compliance check'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/national-permit" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/national-permit'); }}>
                  <strong>{isHi ? 'राष्ट्रीय परमिट (Goods Permit)' : 'National Permit Authorization'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'अखिल भारतीय वाणिज्यिक संचालन' : 'All-India goods carrier authorization'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/track" onClick={(e) => { e.preventDefault(); handleLinkClick('/track'); }}>
                  <strong>{isHi ? 'आवेदन स्थिति ट्रैक करें' : 'Track Application Status'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'वास्तविक समय स्टेज ट्रैकर' : 'Live multi-stage progress tracker'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Pillar 4: Citizen Initiatives & Scrappage */}
          <div style={{ backgroundColor: 'var(--color-brand-subtle)', padding: 'var(--space-16)', borderRadius: 'var(--radius-md)' }}>
            <div className="gov-megamenu-column-title" style={{ borderBottomColor: 'var(--color-brand-primary)' }}>
              <Sparkles size={18} color="var(--color-accent-saffron)" />
              <span>{isHi ? 'विशेष नागरिक सेवाएं' : 'Key Citizen Services'}</span>
            </div>
            <ul className="gov-megamenu-list">
              <li className="gov-megamenu-item">
                <a href="#/vehicle-scrapping" onClick={(e) => { e.preventDefault(); handleLinkClick('/vehicle-scrapping'); }}>
                  <strong>{isHi ? 'वाहन स्क्रैपेज नीति (RVSF)' : 'Vehicle Scrapping Portal'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? '25% तक रोड टैक्स छूट पाएं' : 'Get COD for road tax concession'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/fancy-number-booking" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/fancy-number-booking'); }}>
                  <strong>{isHi ? 'फैंसी / वीआईपी नंबर नीलामी' : 'Fancy Number e-Auction'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'पसंदीदा नंबर हेतु ऑनलाइन बोली' : 'Bid for special registration numbers'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services" onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} style={{ color: 'var(--color-brand-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>{isHi ? 'सभी 40+ सेवाएं देखें' : 'View All 40+ Services'}</span>
                  <ArrowRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
