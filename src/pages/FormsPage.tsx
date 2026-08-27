import React, { useState } from 'react';
import { FileText, Search, Download, Eye, Filter } from 'lucide-react';
import { formsData } from '../data/formsData';
import { FormItem, Language } from '../types';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface FormsPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const FormsPage: React.FC<FormsPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('ALL');

  const filteredForms = formsData.filter((f) => {
    const matchesCat = selectedCat === 'ALL' || f.serviceCategory === selectedCat;
    const matchesSearch =
      f.formNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="gov-container py-48" id="main-content">
      <Breadcrumbs
        items={[
          { label: isHi ? 'सूचना केंद्र' : 'Information', path: '/information' },
          { label: isHi ? 'प्रपत्र एवं डाउनलोड' : 'Forms & Downloads' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div style={{ marginBottom: 'var(--space-40)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
          {isHi ? 'आधिकारिक प्रपत्र एवं डाउनलोड' : 'Official Statutory Forms & Downloads'}
        </h1>
        <p className="text-body" style={{ maxWidth: '750px', lineHeight: 1.5 }}>
          {isHi
            ? 'केंद्रीय मोटर वाहन नियम 1989 के तहत निर्धारित आधिकारिक द्विभाषी (हिंदी एवं अंग्रेजी) वैधानिक आवेदन प्रपत्र डाउनलोड करें।'
            : 'Download official bilingual (Hindi & English) statutory application forms prescribed under the Central Motor Vehicles Rules 1989.'}
        </p>
      </div>

      {/* Search & Filter */}
      <div
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-24) var(--space-24)',
          marginBottom: 'var(--space-32)',
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ flex: 1, minWidth: '280px', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search size={20} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            className="gov-input"
            style={{ paddingLeft: '44px' }}
            placeholder={isHi ? 'फॉर्म संख्या या कीवर्ड द्वारा खोजें (उदा. Form 1A, Form 29, NOC, Medical)...' : 'Search forms by number or keyword (e.g. Form 1A, Form 29, NOC, Medical)...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div style={{ minWidth: '240px' }}>
          <select
            className="gov-select"
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
          >
            <option value="ALL">{isHi ? 'सभी श्रेणियां' : 'All Categories'}</option>
            <option value="Driving Licence">{isHi ? 'ड्राइविंग लाइसेंस प्रपत्र' : 'Driving Licence Forms'}</option>
            <option value="Vehicle Registration">{isHi ? 'वाहन पंजीकरण प्रपत्र' : 'Vehicle Registration Forms'}</option>
          </select>
        </div>
      </div>

      {/* Forms List Table */}
      <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <table>
          <thead>
            <tr>
              <th style={{ width: '15%', padding: '16px 24px' }}>{isHi ? 'प्रपत्र सं' : 'Form No'}</th>
              <th style={{ width: '45%', padding: '16px 24px' }}>{isHi ? 'शीर्षक एवं वैधानिक विवरण' : 'Title & Statutory Description'}</th>
              <th style={{ width: '20%', padding: '16px 24px' }}>{isHi ? 'श्रेणी' : 'Category'}</th>
              <th style={{ width: '20%', textAlign: 'right', padding: '16px 24px' }}>{isHi ? 'कार्य' : 'Actions'}</th>
            </tr>
          </thead>
          <tbody>
            {filteredForms.map((form, idx) => (
              <tr key={idx}>
                <td style={{ padding: '16px 24px' }}>
                  <span
                    style={{
                      backgroundColor: 'var(--color-brand-subtle)',
                      color: 'var(--color-brand-primary)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 700,
                      fontSize: '13px',
                      display: 'inline-block'
                    }}
                  >
                    {form.formNo}
                  </span>
                </td>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-brand-dark)' }}>
                    {isHi ? form.titleHi : form.title}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                    {form.description}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    {form.pages} {isHi ? 'पृष्ठ' : 'Pages'} • {isHi ? 'आकार:' : 'Size:'} {form.fileSize} • {isHi ? 'द्विभाषी (हिंदी/अंग्रेजी)' : 'Bilingual (EN/HI)'}
                  </div>
                </td>
                <td style={{ padding: '16px 24px' }}>
                  <Badge variant={form.serviceCategory === 'Driving Licence' ? 'info' : 'success'}>
                    {isHi ? (form.serviceCategory === 'Driving Licence' ? 'ड्राइविंग लाइसेंस' : 'वाहन पंजीकरण') : form.serviceCategory}
                  </Badge>
                </td>
                <td style={{ textAlign: 'right', padding: '16px 24px' }}>
                  <div style={{ display: 'inline-flex', gap: '8px' }}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => alert(`Downloading official PDF copy of ${form.formNo} (${form.title})`)}
                      icon={<Download size={14} />}
                    >
                      {isHi ? 'पीडीएफ डाउनलोड' : 'Download PDF'}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
