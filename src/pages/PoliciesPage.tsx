import React, { useState } from 'react';
import { ShieldCheck, FileText, Lock } from 'lucide-react';
import { Language } from '../types';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface PoliciesPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';
  const [selectedPolicy, setSelectedPolicy] = useState<'privacy' | 'hyperlink' | 'datasharing' | 'terms'>('privacy');

  return (
    <div className="gov-container py-32" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'नीतियां' : 'Website Policies' }]}
        onNavigate={onNavigate}
      />

      <div style={{ marginBottom: 'var(--space-32)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
          {isHi ? 'वेबसाइट नीतियां एवं कानूनी प्रावधान' : 'Official Portal Policies & Terms of Use'}
        </h1>
        <p className="text-body" style={{ maxWidth: '750px' }}>
          {isHi
            ? 'परिवहन सेवा पोर्टल पर डेटा सुरक्षा, नागरिक गोपनीयता, बाहरी हाइपरलिंक और सेवा की शर्तों को नियंत्रित करने वाली आधिकारिक नीतियां।'
            : 'Official policies governing data protection, citizen privacy, external hyperlinks, and terms of service on the Parivahan Sewa portal.'}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '8px', borderBottom: '2px solid var(--color-border-light)', marginBottom: 'var(--space-24)' }}>
        <button
          onClick={() => setSelectedPolicy('privacy')}
          style={{
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 600,
            color: selectedPolicy === 'privacy' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
            borderBottom: selectedPolicy === 'privacy' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
            marginBottom: '-2px',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          {isHi ? 'गोपनीयता नीति' : 'Privacy Policy'}
        </button>
        <button
          onClick={() => setSelectedPolicy('hyperlink')}
          style={{
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 600,
            color: selectedPolicy === 'hyperlink' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
            borderBottom: selectedPolicy === 'hyperlink' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
            marginBottom: '-2px',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          {isHi ? 'हाइपरलिंक नीति' : 'Hyperlink Policy'}
        </button>
        <button
          onClick={() => setSelectedPolicy('datasharing')}
          style={{
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 600,
            color: selectedPolicy === 'datasharing' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
            borderBottom: selectedPolicy === 'datasharing' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
            marginBottom: '-2px',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          {isHi ? 'डेटा साझाकरण एवं सुरक्षा नीति' : 'Data Sharing & Security Policy'}
        </button>
        <button
          onClick={() => setSelectedPolicy('terms')}
          style={{
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 600,
            color: selectedPolicy === 'terms' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
            borderBottom: selectedPolicy === 'terms' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
            marginBottom: '-2px',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }}
        >
          {isHi ? 'उपयोग की शर्तें' : 'Terms of Use'}
        </button>
      </div>

      <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-32)', maxWidth: '880px' }}>
        {selectedPolicy === 'privacy' && (
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '12px' }}>
              {isHi ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy'}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              {isHi
                ? 'यह पोर्टल आपके बारे में विशिष्ट व्यक्तिगत जानकारी (जैसे नाम, फोन नंबर या ईमेल पता) स्वचालित रूप से एकत्र नहीं करता है, जब तक कि आप सेवा आवेदन के दौरान स्वेच्छा से ऐसी जानकारी प्रदान नहीं करते हैं।'
                : 'This portal does not capture specific personal information about you (like name, phone number or e-mail address) that allows us to identify you individually, unless you choose to provide such information during service application.'}
            </p>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {isHi
                ? 'डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम 2023 के तहत सभी आधार सत्यापन, भुगतान लेनदेन और पहचान प्रमाण प्रमाणित एंड-टू-एंड एन्क्रिप्टेड गेटवे (UIDAI e-KYC एवं भारकोष NTRP) के माध्यम से संसाधित किए जाते हैं।'
                : 'All Aadhaar verification, payment transactions, and identity proofs are handled through certified end-to-end encrypted gateways (UIDAI e-KYC and Bharatkosh NTRP) under the Digital Personal Data Protection Act 2023.'}
            </p>
          </div>
        )}

        {selectedPolicy === 'hyperlink' && (
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '12px' }}>
              {isHi ? 'हाइपरलिंक नीति (Hyperlink Policy)' : 'Hyperlink Policy'}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              {isHi
                ? 'हमें इस साइट पर होस्ट की गई जानकारी से सीधे लिंक करने पर कोई आपत्ति नहीं है और इसके लिए किसी पूर्व अनुमति की आवश्यकता नहीं है। हालांकि, हम अपने पृष्ठों को आपकी साइट पर फ्रेम में लोड करने की अनुमति नहीं देते हैं।'
                : 'We do not object to you linking directly to the information that is hosted on this site and no prior permission is required for the same. However, we do not permit our pages to be loaded into frames on your site.'}
            </p>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {isHi
                ? 'तृतीय-पक्ष सरकारी विभागों (उदा. एनआईसी, राज्य परिवहन विभाग, यातायात पुलिस) के बाहरी लिंक केवल नागरिक सुविधा के लिए प्रदान किए जाते हैं।'
                : 'External links to third-party government departments (e.g. NIC, State Transport Departments, Traffic Police) are provided for citizen convenience only.'}
            </p>
          </div>
        )}

        {selectedPolicy === 'datasharing' && (
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '12px' }}>
              {isHi ? 'राष्ट्रीय डेटा साझाकरण एवं सुरक्षा नीति' : 'National Data Sharing & Security Policy'}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              {isHi
                ? 'वाहन और सारथी में राष्ट्रीय परिवहन रजिस्ट्री डेटा सीईआरटी-इन ऑडिटेड सुरक्षा नियंत्रणों के साथ टियर-4 राष्ट्रीय डेटा केंद्रों में बनाए रखा जाता है। सार्वजनिक डेटा को राष्ट्रीय डेटा साझाकरण और पहुंच नीति (NDSAP) के अनुसार अज्ञात और समेकित किया जाता है।'
                : 'National Transport Registry data in Vahan and Sarathi is maintained in Tier-4 National Data Centres with CERT-In audited security controls. Public data is anonymized and aggregated in accordance with the National Data Sharing and Accessibility Policy (NDSAP).'}
            </p>
          </div>
        )}

        {selectedPolicy === 'terms' && (
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '12px' }}>
              {isHi ? 'उपयोग की शर्तें (Terms of Use)' : 'Terms of Use'}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              {isHi
                ? 'यद्यपि इस वेबसाइट की सामग्री की सटीकता सुनिश्चित करने के लिए सभी प्रयास किए गए हैं, फिर भी इसे कानून के बयान के रूप में नहीं माना जाना चाहिए। किसी भी अस्पष्टता या संदेह की स्थिति में, उपयोगकर्ताओं को संबंधित विभाग से पुष्टि करने की सलाह दी जाती है।'
                : 'Though all efforts have been made to ensure the accuracy and currency of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the Department(s) and/or other source(s), and to obtain appropriate professional advice.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
