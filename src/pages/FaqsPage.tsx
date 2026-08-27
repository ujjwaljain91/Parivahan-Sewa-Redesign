import React, { useState } from 'react';
import { HelpCircle, Search } from 'lucide-react';
import { Language } from '../types';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { AccordionItem } from '../components/ui/Accordion';

export interface FaqsPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const faqs = [
    {
      category: 'Driving Licence',
      categoryHi: 'ड्राइविंग लाइसेंस',
      question: 'How long can I drive with an expired Driving Licence before penalties apply?',
      questionHi: 'ड्राइविंग लाइसेंस समाप्त (एक्सपायर) होने के बाद जुर्माने से पहले नवीनीकरण के लिए कितना समय मिलता है?',
      answer: 'Under Section 14 of the Motor Vehicles Act, a permanent Driving Licence remains valid for renewal up to 1 year after the expiry date without having to re-appear in the practical driving test. However, driving on public roads with an expired licence is an offense.',
      answerHi: 'मोटर वाहन अधिनियम की धारा 14 के अनुसार, स्थाई ड्राइविंग लाइसेंस समाप्ति तिथि के 1 वर्ष बाद तक बिना पुनः प्रैक्टिकल ड्राइविंग टेस्ट दिए नवीनीकृत किया जा सकता है। हालांकि, एक्सपायर लाइसेंस के साथ वाहन चलाना दंडनीय है।'
    },
    {
      category: 'Driving Licence',
      categoryHi: 'ड्राइविंग लाइसेंस',
      question: 'Who needs to submit Form 1A Medical Certificate for DL renewal?',
      questionHi: 'डीएल नवीनीकरण के लिए फॉर्म 1A मेडिकल सर्टिफिकेट किसे जमा करना आवश्यक है?',
      answer: 'Form 1A medical certificate certified by a Registered Medical Practitioner is mandatory for any applicant who is 40 years of age or older, or anyone applying for / renewing a commercial transport vehicle driving licence.',
      answerHi: 'पंजीकृत चिकित्सक द्वारा प्रमाणित फॉर्म 1A मेडिकल सर्टिफिकेट 40 वर्ष या उससे अधिक आयु के किसी भी आवेदक या वाणिज्यिक परिवहन वाहन ड्राइविंग लाइसेंस के लिए अनिवार्य है।'
    },
    {
      category: 'Vehicle Registration',
      categoryHi: 'वाहन पंजीकरण',
      question: 'What is the procedure for transferring vehicle ownership to a buyer?',
      questionHi: 'खरीदार को वाहन स्वामित्व हस्तांतरण करने की प्रक्रिया क्या है?',
      answer: 'Under Section 50 of the Motor Vehicles Act, the seller and buyer authenticate their identity via Aadhaar OTP, submit Form 29 (Notice of Transfer) and Form 30 (Application for Transfer), upload valid Insurance and PUC, pay the government fee (₹300 for cars, ₹150 for bikes), and the updated RC is dispatched.',
      answerHi: 'मोटर वाहन अधिनियम की धारा 50 के तहत, विक्रेता और खरीदार आधार ओटीपी से प्रमाणीकरण करते हैं, फॉर्म 29 और फॉर्म 30 जमा करते हैं, वैध बीमा और पीयूसी अपलोड करते हैं, सरकारी शुल्क जमा करते हैं और अद्यतन आरसी जारी की जाती है।'
    },
    {
      category: 'Vehicle Registration',
      categoryHi: 'वाहन पंजीकरण',
      question: 'What is the validity of private vehicle registration in India?',
      questionHi: 'भारत में निजी (गैर-परिवहन) वाहन पंजीकरण की वैधता अवधि कितनी होती है?',
      answer: 'A new non-transport (private) motor vehicle is registered for an initial block of 15 years. After 15 years, the owner must apply for Renewal of Registration (Form 25) for successive blocks of 5 years upon passing automated vehicle fitness testing.',
      answerHi: 'एक नया निजी वाहन प्रारंभिक रूप से 15 वर्षों के लिए पंजीकृत होता है। 15 वर्ष बाद, स्वचालित फिटनेस परीक्षण पास करने पर अगले 5-5 वर्षों के ब्लॉक के लिए पंजीकरण नवीनीकरण (फॉर्म 25) कराना होता है।'
    },
    {
      category: 'eChallan',
      categoryHi: 'ई-चालान',
      question: 'How do I contest an incorrect or cloned number plate traffic challan?',
      questionHi: 'गलत या क्लोन नंबर प्लेट वाले ट्रैफिक चालान को कैसे चुनौती दें?',
      answer: 'You can select the challan in the eChallan portal and click "Raise Dispute / Grievance". Specify the grievance category, attach photo evidence or statement, and the Virtual Traffic Court will review and resolve the dispute.',
      answerHi: 'आप ई-चालान पोर्टल में चालान चुनकर "आपत्ति / शिकायत दर्ज करें" पर क्लिक कर सकते हैं। शिकायत श्रेणी चुनें, फोटो साक्ष्य संलग्न करें और वर्चुअल ट्रैफिक कोर्ट इसका निवारण करेगी।'
    },
    {
      category: 'Vehicle Scrapping',
      categoryHi: 'वाहन स्क्रैपिंग',
      question: 'What is a Certificate of Deposit (COD) under the Scrappage Policy?',
      questionHi: 'स्क्रैपेज नीति के तहत जमा प्रमाण पत्र (COD) क्या होता है?',
      answer: 'A Certificate of Deposit (COD) is a digital certificate issued by a Registered Vehicle Scrapping Facility (RVSF) upon handing over an end-of-life vehicle. Presenting this COD gives up to a 25% road tax discount and 100% registration fee exemption on your next new vehicle purchase.',
      answerHi: 'जमा प्रमाण पत्र (COD) पुराने वाहन को सौंपने पर अधिकृत आरवीएसएफ द्वारा जारी डिजिटल प्रमाणपत्र है। इसे प्रस्तुत करने पर नए वाहन की खरीद पर 25% तक रोड टैक्स छूट और 100% पंजीकरण शुल्क माफी मिलती है।'
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = activeCategory === 'ALL' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (faq.questionHi && faq.questionHi.includes(searchQuery)) ||
      (faq.answerHi && faq.answerHi.includes(searchQuery));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="gov-container py-48" id="main-content">
      <Breadcrumbs
        items={[
          { label: isHi ? 'सूचना केंद्र' : 'Information', path: '/information' },
          { label: isHi ? 'सामान्य प्रश्न (FAQs)' : 'Frequently Asked Questions' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div style={{ marginBottom: 'var(--space-40)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
          {isHi ? 'अक्सर पूछे जाने वाले प्रश्न (FAQs)' : 'Frequently Asked Questions (FAQs)'}
        </h1>
        <p className="text-body" style={{ maxWidth: '720px', lineHeight: 1.5 }}>
          {isHi
            ? 'ड्राइविंग लाइसेंस, वाहन पंजीकरण, संपर्क रहित ऑनलाइन टेस्ट और ट्रैफिक चालान से संबंधित सामान्य नागरिक प्रश्नों के तत्काल उत्तर प्राप्त करें।'
            : 'Find instant answers to common citizen questions regarding driving licences, vehicle registration, contactless tests, and traffic fines.'}
        </p>
      </div>

      {/* Search & Filter */}
      <div
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-24) var(--space-24)',
          marginBottom: 'var(--space-32)'
        }}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: 'var(--space-24)' }}>
          <Search size={20} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            className="gov-input"
            style={{ paddingLeft: '44px' }}
            placeholder={isHi ? 'प्रश्नोत्तरी खोजें (उदा. नवीनीकरण, ट्रांसफर, मेडिकल, फिटनेस, चालान)...' : 'Search FAQs (e.g. renewal, transfer, medical, fitness, challan)...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['ALL', 'Driving Licence', 'Vehicle Registration', 'eChallan', 'Vehicle Scrapping'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: activeCategory === cat ? 'var(--color-brand-primary)' : 'var(--color-bg-page)',
                color: activeCategory === cat ? '#FFFFFF' : 'var(--color-text-secondary)',
                border: `1px solid ${activeCategory === cat ? 'var(--color-brand-primary)' : 'var(--color-border)'}`,
                transition: 'all var(--transition-fast)'
              }}
            >
              {isHi
                ? (cat === 'ALL' ? 'सभी प्रश्न' : cat === 'Driving Licence' ? 'ड्राइविंग लाइसेंस' : cat === 'Vehicle Registration' ? 'वाहन पंजीकरण' : cat === 'eChallan' ? 'ई-चालान' : cat === 'Vehicle Scrapping' ? 'वाहन स्क्रैपिंग' : cat)
                : (cat === 'ALL' ? 'All Questions' : cat)}
            </button>
          ))}
        </div>
      </div>

      {/* Accordions */}
      <div style={{ maxWidth: '880px' }}>
        {filteredFaqs.map((faq, i) => (
          <AccordionItem
            key={i}
            title={isHi ? (faq.questionHi || faq.question) : faq.question}
            badge={isHi ? (faq.categoryHi || faq.category) : faq.category}
            defaultOpen={i === 0}
          >
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              {isHi ? (faq.answerHi || faq.answer) : faq.answer}
            </p>
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};
