import React, { useState } from 'react';
import { Newspaper, Video, BookOpen, Download, Search, Filter } from 'lucide-react';
import { mediaData } from '../data/mediaData';
import { MediaItem, Language } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface MediaPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const MediaPage: React.FC<MediaPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const years = ['all', '2026', '2025', '2024', '2021', '2020', '2019', '2018'];

  const filteredMedia = mediaData.filter((item) => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesYear = selectedYear === 'all' || item.year.toString() === selectedYear;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesYear && matchesSearch;
  });

  return (
    <div className="gov-container py-48" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'प्रेस एवं मीडिया' : 'Public Media & Archives' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div style={{ marginBottom: 'var(--space-40)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
          {isHi ? 'प्रेस कवरेज, मीडिया एवं समाचार आर्काइव' : 'Public Media, Press & Video Archives'}
        </h1>
        <p className="text-body" style={{ maxWidth: '750px', lineHeight: 1.5 }}>
          {isHi
            ? 'आधिकारिक मीडिया विज्ञप्तियां, नेक्स्ट माइल परिवहन समाचार पत्र, वीडियो सुरक्षा गाइड और संरक्षित ऐतिहासिक प्रेस कवरेज आर्काइव (2018–2026)।'
            : 'Official media releases, Next Mile transport newsletters, video safety guides, and preserved historical press coverage archives (2018–2026).'}
        </p>
      </div>

      {/* Filter and Search Bar */}
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
        <div style={{ flex: 1, minWidth: '260px', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search size={20} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px' }} />
          <input
            type="text"
            className="gov-input"
            style={{ paddingLeft: '44px' }}
            placeholder={isHi ? 'प्रेस विज्ञप्ति या लेख खोजें...' : 'Search press releases or articles...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div style={{ minWidth: '180px' }}>
          <select
            className="gov-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="all">{isHi ? 'सभी वर्ष' : 'All Archive Years'}</option>
            {years.filter((y) => y !== 'all').map((yr) => (
              <option key={yr} value={yr}>
                {isHi ? `वर्ष ${yr}` : `Year ${yr}`}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setSelectedType('all')}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              backgroundColor: selectedType === 'all' ? 'var(--color-brand-primary)' : 'var(--color-bg-page)',
              color: selectedType === 'all' ? '#FFFFFF' : 'var(--color-text-secondary)',
              border: `1px solid ${selectedType === 'all' ? 'var(--color-brand-primary)' : 'var(--color-border)'}`
            }}
          >
            {isHi ? 'सभी मीडिया' : 'All Media'}
          </button>
          <button
            onClick={() => setSelectedType('press')}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              backgroundColor: selectedType === 'press' ? 'var(--color-brand-primary)' : 'var(--color-bg-page)',
              color: selectedType === 'press' ? '#FFFFFF' : 'var(--color-text-secondary)',
              border: `1px solid ${selectedType === 'press' ? 'var(--color-brand-primary)' : 'var(--color-border)'}`
            }}
          >
            {isHi ? 'प्रेस कवरेज' : 'Press Coverage'}
          </button>
          <button
            onClick={() => setSelectedType('newsletter')}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              backgroundColor: selectedType === 'newsletter' ? 'var(--color-brand-primary)' : 'var(--color-bg-page)',
              color: selectedType === 'newsletter' ? '#FFFFFF' : 'var(--color-text-secondary)',
              border: `1px solid ${selectedType === 'newsletter' ? 'var(--color-brand-primary)' : 'var(--color-border)'}`
            }}
          >
            {isHi ? 'नेक्स्ट माइल न्यूज़लेटर' : 'Next Mile Newsletter'}
          </button>
          <button
            onClick={() => setSelectedType('video')}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              backgroundColor: selectedType === 'video' ? 'var(--color-brand-primary)' : 'var(--color-bg-page)',
              color: selectedType === 'video' ? '#FFFFFF' : 'var(--color-text-secondary)',
              border: `1px solid ${selectedType === 'video' ? 'var(--color-brand-primary)' : 'var(--color-border)'}`
            }}
          >
            {isHi ? 'वीडियो ट्यूटोरियल' : 'Video Guides'}
          </button>
        </div>
      </div>

      {/* Media Items Grid */}
      <div className="grid grid-cols-2 gap-24">
        {filteredMedia.map((item) => (
          <Card key={item.id} style={{ padding: 'var(--space-24) var(--space-24)', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 'var(--space-16)', minHeight: '200px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Badge variant={item.type === 'press' ? 'info' : item.type === 'newsletter' ? 'saffron' : 'success'}>
                    {item.category}
                  </Badge>
                  <span className="gov-badge gov-badge-neutral">{item.year}</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{item.date}</span>
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-brand-dark)', lineHeight: 1.4, margin: '0 0 8px' }}>
                {isHi ? item.titleHi : item.title}
              </h3>

              {item.source && (
                <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: 0 }}>
                  {isHi ? 'स्रोत:' : 'Source:'} {item.source}
                </p>
              )}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 'var(--space-16)', borderTop: '1px solid var(--color-border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => alert(`Accessing media artifact: ${item.title}`)}
                icon={<Download size={14} />}
              >
                {item.type === 'newsletter'
                  ? (isHi ? `अंक डाउनलोड करें (${item.fileSize})` : `Download Issue (${item.fileSize})`)
                  : item.type === 'video'
                  ? (isHi ? 'ट्यूटोरियल देखें' : 'Watch Tutorial')
                  : (isHi ? 'लेख पढ़ें' : 'Read Article')}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
