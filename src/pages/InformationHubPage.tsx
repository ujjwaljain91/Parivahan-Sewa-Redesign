import React from 'react';
import { BookOpen, FileText, HelpCircle, Shield, Award, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface InformationHubPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const InformationHubPage: React.FC<InformationHubPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';

  return (
    <div className="gov-container py-32" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'सूचना केंद्र' : 'Information Hub' }]}
        onNavigate={onNavigate}
      />

      <div style={{ marginBottom: 'var(--space-32)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
          {isHi ? 'परिवहन सूचना एवं वैधानिक दिशानिर्देश' : 'Transport Information & Citizen Knowledge Hub'}
        </h1>
        <p className="text-body" style={{ maxWidth: '750px' }}>
          {isHi
            ? 'नागरिक गाइड, वैधानिक मोटर वाहन नियम, मानक शुल्क अनुसूची, आधिकारिक डाउनलोड करने योग्य फॉर्म और क्षेत्रीय आरटीओ कार्यालय निर्देशिका का संपूर्ण भंडार।'
            : 'Comprehensive repository of citizen guides, statutory motor vehicle rules, standard user fee schedules, official downloadable forms, and regional office directories.'}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-24 mb-32">
        {/* Card 1: Citizen Guide */}
        <Card interactive onClick={() => alert('Opening Citizen Guide interactive handbook')}>
          <div className="gov-card-icon" style={{ marginBottom: 'var(--space-16)' }}>
            <BookOpen size={24} />
          </div>
          <Badge variant="info" style={{ marginBottom: '8px' }}>
            {isHi ? 'हैंडबुक' : 'Handbook'}
          </Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'नागरिक सेवा गाइड' : 'Citizen Service Guide'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
            {isHi ? 'लाइसेंस प्राप्त करने और वाहनों के पंजीकरण के लिए कानूनी आवश्यकताओं, दस्तावेजों और प्रक्रियाओं की सरल भाषा में व्याख्या।' : 'Plain-language explanations of legal requirements, documents, and workflows for obtaining licences and registering vehicles.'}
          </p>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span>{isHi ? 'नागरिक गाइड पढ़ें' : 'Read Citizen Guide'}</span>
            <ArrowRight size={14} />
          </span>
        </Card>

        {/* Card 2: Forms & Downloads */}
        <Card interactive onClick={() => onNavigate('/information/forms')}>
          <div className="gov-card-icon" style={{ marginBottom: 'var(--space-16)' }}>
            <FileText size={24} />
          </div>
          <Badge variant="success" style={{ marginBottom: '8px' }}>
            {isHi ? 'कैटलॉग' : 'Catalog'}
          </Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'आधिकारिक प्रपत्र एवं डाउनलोड' : 'Official Forms & Downloads'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
            {isHi ? 'अंग्रेजी और हिंदी में सभी वैधानिक परिवहन प्रपत्रों (फॉर्म 1A, फॉर्म 20, 26, 28, 29, 30 आदि) का खोज योग्य संग्रह।' : 'Searchable repository of all statutory transport forms (Form 1A, Form 20, 26, 28, 29, 30, etc.) in English and Hindi.'}
          </p>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span>{isHi ? 'सभी प्रपत्र देखें' : 'Browse All Forms'}</span>
            <ArrowRight size={14} />
          </span>
        </Card>

        {/* Card 3: Frequently Asked Questions */}
        <Card interactive onClick={() => onNavigate('/information/faqs')}>
          <div className="gov-card-icon" style={{ marginBottom: 'var(--space-16)' }}>
            <HelpCircle size={24} />
          </div>
          <Badge variant="neutral" style={{ marginBottom: '8px' }}>
            {isHi ? 'सहायता केंद्र' : 'Help Center'}
          </Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'अक्सर पूछे जाने वाले प्रश्न (FAQ)' : 'Frequently Asked Questions (FAQs)'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
            {isHi ? 'ड्राइविंग लाइसेंस वैधता, संपर्क रहित परीक्षण, वाहन स्वामित्व हस्तांतरण और चालान भुगतान से संबंधित उत्तर।' : 'Searchable answers covering driving licence validity, contactless tests, vehicle ownership transfer, and challan payments.'}
          </p>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span>{isHi ? 'प्रश्नोत्तरी खोजें' : 'Search FAQs'}</span>
            <ArrowRight size={14} />
          </span>
        </Card>

        {/* Card 4: Gazette Notifications */}
        <Card interactive onClick={() => onNavigate('/information/notifications')}>
          <div className="gov-card-icon" style={{ marginBottom: 'var(--space-16)' }}>
            <Shield size={24} />
          </div>
          <Badge variant="saffron" style={{ marginBottom: '8px' }}>
            {isHi ? 'राजपत्र' : 'Gazette'}
          </Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'राजपत्र अधिसूचनाएं एवं परिपत्र' : 'Gazette Notifications & Circulars'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
            {isHi ? 'सड़क परिवहन एवं राजमार्ग मंत्रालय द्वारा जारी आधिकारिक नियामक आदेश, मसौदा नियम, अंतिम राजपत्र अधिसूचनाएं और सलाह।' : 'Official regulatory orders, draft rules, final gazette notifications, and advisory circulars issued by MoRTH.'}
          </p>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span>{isHi ? 'अधिसूचनाएं देखें' : 'View Notifications'}</span>
            <ArrowRight size={14} />
          </span>
        </Card>

        {/* Card 5: Acts & Rules */}
        <Card interactive onClick={() => alert('Accessing Central Motor Vehicles Act 1988 & CMVR 1989')}>
          <div className="gov-card-icon" style={{ marginBottom: 'var(--space-16)' }}>
            <Award size={24} />
          </div>
          <Badge variant="neutral" style={{ marginBottom: '8px' }}>
            {isHi ? 'विधान' : 'Legislation'}
          </Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'मोटर वाहन अधिनियम एवं सीएमवीआर' : 'Motor Vehicles Act & CMVR Rules'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
            {isHi ? 'मोटर वाहन अधिनियम 1988, एमवी (संशोधन) अधिनियम 2019 और केंद्रीय मोटर वाहन नियम 1989 का संपूर्ण कानूनी पाठ।' : 'Complete legal text of Motor Vehicles Act 1988, MV (Amendment) Act 2019, and Central Motor Vehicle Rules 1989.'}
          </p>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span>{isHi ? 'कानूनी नियम पढ़ें' : 'Read Legislation'}</span>
            <ArrowRight size={14} />
          </span>
        </Card>

        {/* Card 6: RTO Directory */}
        <Card interactive onClick={() => onNavigate('/rto-locator')}>
          <div className="gov-card-icon" style={{ marginBottom: 'var(--space-16)' }}>
            <MapPin size={24} />
          </div>
          <Badge variant="info" style={{ marginBottom: '8px' }}>
            {isHi ? 'निर्देशिका' : 'Directory'}
          </Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'क्षेत्रीय आरटीओ लोकेटर' : 'Jurisdictional RTO Locator'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
            {isHi ? 'सभी 36 राज्यों और केंद्र शासित प्रदेशों में आधिकारिक पते, फोन और ईमेल के साथ क्षेत्रीय परिवहन कार्यालयों की सूची।' : 'Directory of Regional Transport Offices across all 36 States & UTs with official address, phone and email.'}
          </p>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span>{isHi ? 'अपना आरटीओ खोजें' : 'Find Your RTO'}</span>
            <ArrowRight size={14} />
          </span>
        </Card>
      </div>
    </div>
  );
};
