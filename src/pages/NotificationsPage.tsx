import React, { useState } from 'react';
import { Shield, Search, Download, Filter, Calendar } from 'lucide-react';
import { notificationsData } from '../data/notificationsData';
import { NotificationItem, Language } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface NotificationsPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const NotificationsPage: React.FC<NotificationsPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'Important', 'Advisory', 'Draft', 'Final', 'Policy', 'Service Update'];

  const filteredNotifications = notificationsData.filter((item) => {
    const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.gazetteNumber && item.gazetteNumber.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="gov-container py-48" id="main-content">
      <Breadcrumbs
        items={[
          { label: isHi ? 'सूचना केंद्र' : 'Information', path: '/information' },
          { label: isHi ? 'अधिसूचनाएं एवं परिपत्र' : 'Gazette Notifications & Advisories' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div style={{ marginBottom: 'var(--space-40)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
          {isHi ? 'मंत्रालय अधिसूचनाएं एवं सार्वजनिक परिपत्र' : 'Official Gazette Notifications & Advisories'}
        </h1>
        <p className="text-body" style={{ maxWidth: '750px', lineHeight: 1.5 }}>
          {isHi
            ? 'सड़क परिवहन एवं राजमार्ग मंत्रालय द्वारा प्रकाशित आधिकारिक परिपत्र, वैधानिक राजपत्र अधिसूचनाएं, जनता से सुझाव आमंत्रित करने वाले मसौदा नियम और नीतिगत दिशानिर्देश खोजें एवं पढ़ें।'
            : 'Search and review official circulars, statutory gazette notifications, draft rules inviting public feedback, and policy guidelines published by the Ministry of Road Transport & Highways.'}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-24) var(--space-24)',
          marginBottom: 'var(--space-32)'
        }}
      >
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: 'var(--space-24)' }}>
          <div style={{ flex: 1, minWidth: '280px', position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={20} color="var(--color-text-muted)" style={{ position: 'absolute', left: '14px' }} />
            <input
              type="text"
              className="gov-input"
              style={{ paddingLeft: '44px' }}
              placeholder={isHi ? 'अधिसूचना शीर्षक, राजपत्र संख्या (उदा. G.S.R., एडवाइजरी, स्क्रैपेज) द्वारा खोजें...' : 'Search notifications by title, gazette number (e.g. G.S.R., Advisory, Scrappage)...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                backgroundColor: selectedCategory === cat ? 'var(--color-brand-primary)' : 'var(--color-bg-page)',
                color: selectedCategory === cat ? '#FFFFFF' : 'var(--color-text-secondary)',
                border: `1px solid ${selectedCategory === cat ? 'var(--color-brand-primary)' : 'var(--color-border)'}`,
                transition: 'all var(--transition-fast)'
              }}
            >
              {isHi
                ? (cat === 'ALL' ? 'सभी प्रकार' : cat === 'Important' ? 'महत्वपूर्ण' : cat === 'Advisory' ? 'परामर्श' : cat === 'Draft' ? 'प्रारूप' : cat === 'Final' ? 'अंतिम' : cat === 'Policy' ? 'नीति' : cat === 'Service Update' ? 'सेवा अद्यतन' : cat)
                : (cat === 'ALL' ? 'All Types' : cat)}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {filteredNotifications.map((notif) => (
          <div
            key={notif.id}
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-24) var(--space-32)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            <div style={{ maxWidth: '820px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <Badge variant={notif.category === 'Important' ? 'error' : notif.category === 'Advisory' ? 'info' : notif.category === 'Final' ? 'success' : 'neutral'}>
                  {isHi
                    ? (notif.category === 'Important' ? 'महत्वपूर्ण' : notif.category === 'Advisory' ? 'परामर्श' : notif.category === 'Final' ? 'अंतिम आदेश' : notif.category === 'Draft' ? 'प्रारूप' : notif.category)
                    : notif.category}
                </Badge>
                {notif.gazetteNumber && (
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-brand-primary)' }}>
                    {isHi ? 'राजपत्र सं:' : 'Gazette No:'} {notif.gazetteNumber}
                  </span>
                )}
                <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  • {isHi ? 'दिनांक:' : 'Date:'} {notif.date}
                </span>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', lineHeight: 1.4, marginBottom: '8px' }}>
                {isHi ? notif.titleHi : notif.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {notif.description}
              </p>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => alert(`Downloading official Gazette Notification PDF (${notif.gazetteNumber || notif.id})`)}
              icon={<Download size={14} />}
            >
              PDF ({notif.fileSize || '350 KB'})
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
