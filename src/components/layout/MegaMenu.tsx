import React from 'react';
import { CreditCard, Car, FileCheck, Briefcase, ArrowRight, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
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
                  <strong>{isHi ? 'लाइसेंस नवीनीकरण' : 'Renew Licence'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'ऑनलाइन संपर्क रहित आरटीओ नवीनीकरण' : 'Faceless contactless renewal'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/learners-licence" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/learners-licence'); }}>
                  <strong>{isHi ? 'शिक्षार्थी (लर्नर) लाइसेंस' : 'Learner Licence'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'घर बैठे ऑनलाइन थ्योरी टेस्ट' : 'Online proctored theory test'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/duplicate-driving-licence" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/duplicate-driving-licence'); }}>
                  <strong>{isHi ? 'डुप्लीकेट लाइसेंस' : 'Duplicate Licence'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'खोए या क्षतिग्रस्त कार्ड हेतु' : 'Replace lost / damaged card'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/permanent-driving-licence" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/permanent-driving-licence'); }}>
                  <strong>{isHi ? 'स्थायी लाइसेंस / वर्ग जोड़ें' : 'Permanent Licence / Add Class'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'आरटीओ ड्राइविंग टेस्ट ट्रैक स्लॉट' : 'Book practical driving slot'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item" style={{ marginTop: '4px', borderTop: '1px solid var(--color-border-light)', paddingTop: '6px' }}>
                <a href="#/services" onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} style={{ color: 'var(--color-brand-primary)', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>{isHi ? 'सभी ड्राइविंग लाइसेंस सेवाएं →' : 'View all Driving Licence services →'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Vehicle */}
          <div>
            <div className="gov-megamenu-column-title">
              <Car size={18} color="var(--color-brand-primary)" />
              <span>{isHi ? 'वाहन सेवाएं' : 'Vehicle Services'}</span>
            </div>
            <ul className="gov-megamenu-list">
              <li className="gov-megamenu-item">
                <a href="#/services/transfer-vehicle-ownership" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/transfer-vehicle-ownership'); }}>
                  <strong>{isHi ? 'स्वामित्व हस्तांतरण' : 'Ownership Transfer'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'क्रेता-विक्रेता ओटीपी द्वारा आरसी ट्रांसफर' : 'Buyer-seller OTP transfer'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/renewal-of-rc" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/renewal-of-rc'); }}>
                  <strong>{isHi ? 'आरसी नवीनीकरण (15+ वर्ष)' : 'RC Renewal'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? '5-वर्षीय फिटनेस विस्तार' : '5-year extension upon fitness'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/duplicate-rc" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/duplicate-rc'); }}>
                  <strong>{isHi ? 'डुप्लीकेट आरसी' : 'Duplicate RC'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'खोए पंजीकरण प्रमाण पत्र हेतु' : 'Replacement smart card'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/know-your-vehicle" onClick={(e) => { e.preventDefault(); handleLinkClick('/know-your-vehicle'); }}>
                  <strong>{isHi ? 'वाहन विवरण (RC Status)' : 'Vehicle Details'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'आरसी, बीमा, पीयूसी और फिटनेस' : 'Instant vehicle specs & status'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item" style={{ marginTop: '4px', borderTop: '1px solid var(--color-border-light)', paddingTop: '6px' }}>
                <a href="#/services" onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} style={{ color: 'var(--color-brand-primary)', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>{isHi ? 'सभी वाहन सेवाएं →' : 'View all Vehicle services →'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Compliance & Payments */}
          <div>
            <div className="gov-megamenu-column-title">
              <FileCheck size={18} color="var(--color-brand-primary)" />
              <span>{isHi ? 'अनुपालन एवं कर' : 'Compliance & Tax'}</span>
            </div>
            <ul className="gov-megamenu-list">
              <li className="gov-megamenu-item">
                <a href="#/echallan" onClick={(e) => { e.preventDefault(); handleLinkClick('/echallan'); }}>
                  <strong>{isHi ? 'ई-चालान भुगतान' : 'eChallan'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'यातायात जुर्माना देखें व ऑनलाइन भरें' : 'Search & clear traffic fines'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/puc-certificate" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/puc-certificate'); }}>
                  <strong>{isHi ? 'प्रदूषण प्रमाण पत्र (PUCC)' : 'PUCC'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'उत्सर्जन रिकॉर्ड व केंद्र जांचें' : 'Emission records & testing'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/vehicle-fitness-testing" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/vehicle-fitness-testing'); }}>
                  <strong>{isHi ? 'वाहन फिटनेस (ATS)' : 'Vehicle Fitness'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'स्वचालित परीक्षण स्टेशन स्लॉट' : 'ATS slot booking & renewal'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/services/checkpost-tax" onClick={(e) => { e.preventDefault(); handleLinkClick('/services/checkpost-tax'); }}>
                  <strong>{isHi ? 'चेकपोस्ट सीमा कर' : 'Checkpost Tax'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'अंतर-राज्यीय सीमा कर भुगतान' : 'Border entry tax clearance'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item" style={{ marginTop: '4px', borderTop: '1px solid var(--color-border-light)', paddingTop: '6px' }}>
                <a href="#/services" onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} style={{ color: 'var(--color-brand-primary)', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>{isHi ? 'सभी अनुपालन सेवाएं →' : 'View all Compliance services →'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Pillar 4: Business & Industry */}
          <div style={{ backgroundColor: 'var(--color-brand-subtle)', padding: 'var(--space-16)', borderRadius: 'var(--radius-md)' }}>
            <div className="gov-megamenu-column-title" style={{ borderBottomColor: 'var(--color-brand-primary)' }}>
              <Briefcase size={18} color="var(--color-brand-primary)" />
              <span>{isHi ? 'व्यवसाय एवं उद्योग' : 'Business & Industry'}</span>
            </div>
            <ul className="gov-megamenu-list">
              <li className="gov-megamenu-item">
                <a href="#/business/dealer-authorization-certificate" onClick={(e) => { e.preventDefault(); handleLinkClick('/business/dealer-authorization-certificate'); }}>
                  <strong>{isHi ? 'डीलर प्राधिकरण (DAC)' : 'Dealer Authorization'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'डीलर पंजीकरण एवं फॉर्म 20' : 'Accreditation & DPR clearance'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/business/homologation" onClick={(e) => { e.preventDefault(); handleLinkClick('/business/homologation'); }}>
                  <strong>{isHi ? 'होमोलोगेशन' : 'Homologation'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'ओईएम वाहन टाइप अप्रूवल' : 'OEM Type Approval & CMVR'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/business/vltd-maker" onClick={(e) => { e.preventDefault(); handleLinkClick('/business/vltd-maker'); }}>
                  <strong>{isHi ? 'वीएलटीडी निर्माता (VLTD)' : 'VLTD Maker'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'AIS-140 ट्रैकिंग डिवाइस मैपिंग' : 'AIS-140 location device portal'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item">
                <a href="#/business/sld-maker" onClick={(e) => { e.preventDefault(); handleLinkClick('/business/sld-maker'); }}>
                  <strong>{isHi ? 'गति नियंत्रक (SLD)' : 'SLD Maker'}</strong>
                  <span className="gov-megamenu-item-desc">{isHi ? 'स्पीड गवर्नर मॉडल अनुमोदन' : 'Speed limiter validation'}</span>
                </a>
              </li>
              <li className="gov-megamenu-item" style={{ marginTop: '4px', borderTop: '1px solid #D0E2F5', paddingTop: '6px' }}>
                <a href="#/business" onClick={(e) => { e.preventDefault(); handleLinkClick('/business'); }} style={{ color: 'var(--color-brand-primary)', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>{isHi ? 'सभी व्यवसाय सेवाएं →' : 'View all Business services →'}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Footer Ribbon */}
        <div style={{ marginTop: 'var(--space-20)', paddingTop: 'var(--space-16)', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
            <Sparkles size={16} color="var(--color-accent-saffron)" />
            <span>{isHi ? 'सभी 22 आधिकारिक डिजिटल सेवाएं सत्यापित एवं क्रियाशील हैं' : 'All 22 verified official transport capabilities active across India'}</span>
          </div>

          <a
            href="#/services"
            onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }}
            className="gov-btn gov-btn-primary gov-btn-sm"
            style={{ fontWeight: 700 }}
          >
            <span>{isHi ? 'सभी 22 सेवाएं देखें (Services Hub)' : 'View all 22 Services →'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
