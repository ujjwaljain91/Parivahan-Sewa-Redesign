import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, FileText, HelpCircle, FileBadge, Sparkles } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { searchIntentKeywords } from '../../data/intentData';
import { formsData } from '../../data/formsData';
import { Language } from '../../types';

export interface UniversalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  language: Language;
}

export const UniversalSearch: React.FC<UniversalSearchProps> = ({
  isOpen,
  onClose,
  onNavigate,
  language
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // 1. Natural Language Intent Matches
  const matchedIntents = searchIntentKeywords.filter((item) =>
    item.queries.some((q) => normalizedQuery.includes(q) || q.includes(normalizedQuery))
  );

  // 2. Direct Service Matches
  const matchedServices = servicesData.filter(
    (srv) =>
      srv.title.toLowerCase().includes(normalizedQuery) ||
      srv.shortDesc.toLowerCase().includes(normalizedQuery) ||
      srv.tags.some((t) => t.includes(normalizedQuery))
  );

  // 3. Form Matches
  const matchedForms = formsData.filter(
    (f) =>
      f.formNo.toLowerCase().includes(normalizedQuery) ||
      f.title.toLowerCase().includes(normalizedQuery) ||
      f.serviceCategory.toLowerCase().includes(normalizedQuery)
  );

  const handleSelectService = (slug: string) => {
    if (slug === 'echallan') onNavigate('/echallan');
    else if (slug === 'know-your-vehicle') onNavigate('/know-your-vehicle');
    else if (slug === 'vehicle-scrapping') onNavigate('/vehicle-scrapping');
    else if (slug === 'track') onNavigate('/track');
    else if (slug === 'rto-locator') onNavigate('/rto-locator');
    else onNavigate(`/services/${slug}`);
    onClose();
  };

  return (
    <div className="gov-search-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="gov-search-modal" onClick={(e) => e.stopPropagation()}>
        {/* Search Header Input */}
        <div className="gov-search-header">
          <Search size={24} color="var(--color-brand-primary)" />
          <input
            ref={inputRef}
            type="text"
            className="gov-search-input"
            placeholder={language === 'hi' ? 'आप क्या करना चाहते हैं? (उदा. लाइसेंस नवीनीकरण, चालान, आरसी ट्रांसफर)...' : 'What do you want to do? (e.g. renew DL, pay challan, transfer car)...'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Universal search query"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ color: 'var(--color-text-muted)', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center' }}
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              padding: '4px 12px',
              backgroundColor: 'var(--color-bg-surface-secondary)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
              border: '1px solid var(--color-border-light)'
            }}
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="gov-search-results">
          {/* Default Quick Recommendations */}
          {!normalizedQuery && (
            <div>
              <div className="gov-search-group-title">
                {language === 'hi' ? 'अक्सर खोजे जाने वाले कार्य' : 'Frequently Searched Tasks'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {searchIntentKeywords.slice(0, 5).map((intent, i) => (
                  <div
                    key={i}
                    className="gov-search-item"
                    onClick={() => handleSelectService(intent.slug)}
                  >
                    <div className="gov-search-item-info">
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'var(--color-accent-saffron-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Sparkles size={18} color="var(--color-accent-saffron)" />
                      </div>
                      <div>
                        <div className="gov-search-item-title">
                          {language === 'hi' ? (intent as any).titleHi || intent.title : intent.title}
                        </div>
                        <div className="gov-search-item-desc">
                          {language === 'hi' ? 'नागरिक सेवा कार्य' : 'Direct Citizen Action'}
                        </div>
                      </div>
                    </div>
                    <ArrowRight size={18} color="var(--color-brand-primary)" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NLP Intent Result */}
          {normalizedQuery && matchedIntents.length > 0 && (
            <div style={{ marginBottom: 'var(--space-16)' }}>
              <div className="gov-search-group-title" style={{ color: 'var(--color-brand-primary)' }}>
                {language === 'hi' ? 'सुझावित सेवा (कार्य मिलान)' : 'Suggested Action (Task Match)'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {matchedIntents.slice(0, 2).map((item, idx) => (
                  <div
                    key={idx}
                    className="gov-search-item"
                    style={{ backgroundColor: 'var(--color-brand-subtle)', border: '1px solid #B6D4FE' }}
                    onClick={() => handleSelectService(item.slug)}
                  >
                    <div className="gov-search-item-info">
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: 'var(--shadow-flat)'
                        }}
                      >
                        <Sparkles size={18} color="var(--color-accent-saffron)" />
                      </div>
                      <div>
                        <div className="gov-search-item-title" style={{ color: 'var(--color-brand-primary)' }}>
                          {language === 'hi' ? (item as any).titleHi || item.title : item.title}
                        </div>
                        <div className="gov-search-item-desc">
                          {language === 'hi' ? `मिलान: "${query}"` : `Matched user intent: "${query}"`}
                        </div>
                      </div>
                    </div>
                    <span className="gov-badge gov-badge-info">
                      {language === 'hi' ? 'सेवा शुरू करें' : 'Start Service'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Services */}
          {normalizedQuery && matchedServices.length > 0 && (
            <div style={{ marginBottom: 'var(--space-16)' }}>
              <div className="gov-search-group-title">
                {language === 'hi' ? `सेवाएं एवं पोर्टल (${matchedServices.length})` : `Services & Portals (${matchedServices.length})`}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {matchedServices.map((srv) => (
                  <div
                    key={srv.id}
                    className="gov-search-item"
                    onClick={() => handleSelectService(srv.slug)}
                  >
                    <div className="gov-search-item-info">
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'var(--color-brand-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <FileBadge size={18} color="var(--color-brand-primary)" />
                      </div>
                      <div>
                        <div className="gov-search-item-title">
                          {language === 'hi' ? srv.titleHi || srv.title : srv.title}
                        </div>
                        <div className="gov-search-item-desc">
                          {language === 'hi' ? srv.shortDescHi || srv.shortDesc : srv.shortDesc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight size={18} color="var(--color-brand-primary)" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matched Forms */}
          {normalizedQuery && matchedForms.length > 0 && (
            <div>
              <div className="gov-search-group-title">
                {language === 'hi' ? `आधिकारिक प्रपत्र एवं डाउनलोड (${matchedForms.length})` : `Official Forms & Downloads (${matchedForms.length})`}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {matchedForms.map((f, i) => (
                  <div
                    key={i}
                    className="gov-search-item"
                    onClick={() => { onNavigate('/information/forms'); onClose(); }}
                  >
                    <div className="gov-search-item-info">
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-full)',
                          backgroundColor: 'var(--color-semantic-success-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <FileText size={18} color="var(--color-semantic-success)" />
                      </div>
                      <div>
                        <div className="gov-search-item-title">
                          {f.formNo} — {language === 'hi' ? (f as any).titleHi || f.title : f.title}
                        </div>
                        <div className="gov-search-item-desc">
                          {language === 'hi' ? (f as any).serviceCategoryHi || f.serviceCategory : f.serviceCategory} • {f.fileSize}
                        </div>
                      </div>
                    </div>
                    <span className="gov-badge gov-badge-neutral">
                      {language === 'hi' ? 'डाउनलोड' : 'Download'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results Fallback */}
          {normalizedQuery && matchedIntents.length === 0 && matchedServices.length === 0 && matchedForms.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--space-48) var(--space-24)' }}>
              <HelpCircle size={44} color="var(--color-text-muted)" style={{ margin: '0 auto var(--space-16)' }} />
              <h4 style={{ color: 'var(--color-brand-dark)', fontSize: '17px', marginBottom: '8px' }}>
                {language === 'hi' ? `"${query}" के लिए कोई परिणाम नहीं मिला` : `No direct match found for "${query}"`}
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', maxWidth: '420px', margin: '0 auto var(--space-24)', lineHeight: 1.5 }}>
                {language === 'hi'
                  ? 'कृपया "लाइसेंस नवीनीकरण", "वाहन ट्रांसफर", "चालान" जैसे सरल शब्दों से खोजें या सेवा सूची देखें।'
                  : 'Try searching with simpler keywords such as "DL Renewal", "Ownership Transfer", "eChallan" or browse our full services catalog.'}
              </p>
              <button
                className="gov-btn gov-btn-secondary gov-btn-sm"
                onClick={() => { onNavigate('/services'); onClose(); }}
              >
                {language === 'hi' ? 'सभी सेवाएं देखें' : 'Browse All Services'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
