import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, FileText, Sparkles, ExternalLink, ShieldCheck, CreditCard, Car, Truck, Briefcase } from 'lucide-react';
import { masterOnlineServicesInventory, FeatureRegistryItem } from '../../data/featureRegistry';
import { searchIntentKeywords } from '../../data/intentData';
import { formsData } from '../../data/formsData';
import { Language } from '../../types';
import { Badge } from '../ui/Badge';

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

  const isHi = language === 'hi';

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
  const matchedIntents = normalizedQuery
    ? searchIntentKeywords.filter((item) =>
        item.queries.some((q) => normalizedQuery.includes(q) || q.includes(normalizedQuery))
      )
    : [];

  // 2. Direct Feature Registry Matches (All 22 Verified Online Services)
  const matchedServices = normalizedQuery
    ? masterOnlineServicesInventory.filter(
        (srv) =>
          srv.name.toLowerCase().includes(normalizedQuery) ||
          srv.nameHi.toLowerCase().includes(normalizedQuery) ||
          srv.shortDesc.toLowerCase().includes(normalizedQuery) ||
          srv.category.toLowerCase().includes(normalizedQuery) ||
          srv.subcategory.toLowerCase().includes(normalizedQuery) ||
          srv.underlyingSystem.toLowerCase().includes(normalizedQuery) ||
          srv.tags.some((t) => t.includes(normalizedQuery) || normalizedQuery.includes(t))
      )
    : [];

  // 3. Form Matches
  const matchedForms = normalizedQuery
    ? formsData.filter(
        (f) =>
          f.formNo.toLowerCase().includes(normalizedQuery) ||
          f.title.toLowerCase().includes(normalizedQuery) ||
          f.serviceCategory.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const handleSelectService = (route: string) => {
    onNavigate(route);
    onClose();
  };

  const handleSelectSlug = (slug: string) => {
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
            placeholder={isHi ? 'सेवा, लाइसेंस, वाहन, परमिट, वीएलटीडी या चालान खोजें...' : 'Search vehicle, licence, permit, VLTD, NR, or challan service...'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Universal search query"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ color: 'var(--color-text-muted)', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center' }}
              aria-label="Clear search input"
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
          {/* Default Quick Recommendations when query is empty */}
          {!normalizedQuery && (
            <div>
              <div className="gov-search-group-title">
                {isHi ? 'अक्सर खोजी जाने वाली ऑनलाइन सेवाएं' : 'Popular Online Services'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {masterOnlineServicesInventory.slice(0, 6).map((service) => (
                  <div
                    key={service.id}
                    className="gov-search-item"
                    onClick={() => handleSelectService(service.route)}
                  >
                    <div className="gov-search-item-info">
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'var(--color-brand-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: 'var(--color-brand-primary)'
                        }}
                      >
                        <Sparkles size={18} />
                      </div>
                      <div>
                        <div className="gov-search-item-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>{isHi ? service.nameHi : service.name}</span>
                          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                            ({service.category})
                          </span>
                        </div>
                        <div className="gov-search-item-desc">
                          {isHi ? service.shortDescHi : service.shortDesc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight size={18} color="var(--color-brand-primary)" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results when searching */}
          {normalizedQuery && (
            <div>
              {/* Matched Online Services from 22 Master Inventory */}
              {matchedServices.length > 0 && (
                <div style={{ marginBottom: 'var(--space-20)' }}>
                  <div className="gov-search-group-title">
                    {isHi ? `सत्यापित ऑनलाइन सेवाएं (${matchedServices.length})` : `Verified Online Services (${matchedServices.length})`}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {matchedServices.map((service) => (
                      <div
                        key={service.id}
                        className="gov-search-item"
                        onClick={() => handleSelectService(service.route)}
                      >
                        <div className="gov-search-item-info">
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: 'var(--radius-md)',
                              backgroundColor: service.status === 'system-linked' ? 'rgba(0, 64, 128, 0.08)' : 'var(--color-brand-subtle)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              color: 'var(--color-brand-primary)'
                            }}
                          >
                            {service.status === 'system-linked' ? <ExternalLink size={18} /> : <ShieldCheck size={18} />}
                          </div>
                          <div>
                            <div className="gov-search-item-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                              <span>{isHi ? service.nameHi : service.name}</span>
                              <Badge variant={service.status === 'system-linked' ? 'neutral' : 'success'}>
                                {service.status === 'system-linked' ? 'System-Linked' : 'Direct Faceless'}
                              </Badge>
                              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>
                                • {service.underlyingSystem}
                              </span>
                            </div>
                            <div className="gov-search-item-desc">
                              {isHi ? service.shortDescHi : service.shortDesc}
                            </div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-brand-primary)', fontWeight: 600, fontSize: '13px', flexShrink: 0 }}>
                          <span>{service.status === 'system-linked' ? 'Access' : 'Open'}</span>
                          {service.status === 'system-linked' ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Citizen Task Intents */}
              {matchedIntents.length > 0 && (
                <div style={{ marginBottom: 'var(--space-20)' }}>
                  <div className="gov-search-group-title">
                    {isHi ? 'नागरिक कार्य और समाधान' : 'Citizen Tasks & Actions'}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {matchedIntents.map((intent, i) => (
                      <div
                        key={i}
                        className="gov-search-item"
                        onClick={() => handleSelectSlug(intent.slug)}
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
                              {intent.title}
                            </div>
                            <div className="gov-search-item-desc">
                              {intent.queries[0]}
                            </div>
                          </div>
                        </div>
                        <ArrowRight size={18} color="var(--color-brand-primary)" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Downloadable Forms */}
              {matchedForms.length > 0 && (
                <div style={{ marginBottom: 'var(--space-20)' }}>
                  <div className="gov-search-group-title">
                    {isHi ? `संबंधित आधिकारिक प्रपत्र (Forms: ${matchedForms.length})` : `Official Transport Forms (${matchedForms.length})`}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {matchedForms.map((form) => (
                      <div
                        key={form.formNo}
                        className="gov-search-item"
                        onClick={() => {
                          onNavigate('/information/forms');
                          onClose();
                        }}
                      >
                        <div className="gov-search-item-info">
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: 'var(--radius-md)',
                              backgroundColor: 'var(--color-brand-subtle)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            <FileText size={18} color="var(--color-brand-primary)" />
                          </div>
                          <div>
                            <div className="gov-search-item-title">
                              {form.formNo} — {isHi ? form.titleHi : form.title}
                            </div>
                            <div className="gov-search-item-desc">
                              {form.serviceCategory} • {form.description}
                            </div>
                          </div>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-brand-primary)' }}>
                          PDF
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results State */}
              {matchedServices.length === 0 && matchedIntents.length === 0 && matchedForms.length === 0 && (
                <div style={{ textAlign: 'center', padding: 'var(--space-48) var(--space-16)' }}>
                  <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
                    {isHi ? `"${query}" के लिए कोई परिणाम नहीं मिला` : `No direct results found for "${query}"`}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', maxWidth: '400px', margin: '0 auto var(--space-20)' }}>
                    {isHi ? 'कृपया वाहन, लाइसेंस, वीएलटीडी, एनआर या चालान जैसे शब्दों से खोजें।' : 'Try searching for terms like "driving licence", "VLTD", "fitness", "NR", or "eChallan".'}
                  </p>
                  <button
                    onClick={() => {
                      onNavigate('/services');
                      onClose();
                    }}
                    className="gov-btn gov-btn-primary gov-btn-sm"
                  >
                    {isHi ? 'सभी 22 सेवाएं देखें' : 'Browse All 22 Services'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
