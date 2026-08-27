import React from 'react';
import { Volume2, Globe } from 'lucide-react';
import { Language, TextSize } from '../../types';
import { translations } from '../../data/translations';

export interface GovernmentHeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  textSize: TextSize;
  onTextSizeChange: (size: TextSize) => void;
}

export const GovernmentHeader: React.FC<GovernmentHeaderProps> = ({
  language,
  onLanguageChange,
  textSize,
  onTextSizeChange
}) => {
  const t = translations[language];

  return (
    <header className="gov-topbar" role="banner">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <div className="gov-container">
        <div className="gov-topbar-content">
          {/* Government Identity */}
          <div className="gov-identity-strip">
            {/* National Tricolor SVG */}
            <svg className="gov-flag-icon" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="6.67" fill="#FF9933" />
              <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
              <rect y="13.34" width="30" height="6.67" fill="#128807" />
              <circle cx="15" cy="10" r="2.5" stroke="#000088" strokeWidth="0.6" fill="none" />
            </svg>
            <span>{t.govIndia}</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span className="desktop-only">{t.morth}</span>
          </div>

          {/* Accessibility & Language Controls */}
          <div className="gov-topbar-tools">
            {/* Screen Reader Trigger */}
            <button
              className="gov-tool-btn desktop-only"
              onClick={() => alert('Screen reader accessibility mode is active. ARIA live regions and semantic landmarks are enabled.')}
              title="Screen Reader Access"
              aria-label="Screen Reader Access"
            >
              <Volume2 size={12} />
              <span>Screen Reader</span>
            </button>

            {/* Text Sizing Controls */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }} role="group" aria-label="Text Size Controls">
              <button
                className="gov-tool-btn"
                onClick={() => onTextSizeChange('normal')}
                style={{ fontWeight: textSize === 'normal' ? 800 : 400, backgroundColor: textSize === 'normal' ? 'rgba(255,255,255,0.2)' : 'transparent' }}
                title="Normal Text Size"
              >
                A-
              </button>
              <button
                className="gov-tool-btn"
                onClick={() => onTextSizeChange('large')}
                style={{ fontWeight: textSize === 'large' ? 800 : 400, backgroundColor: textSize === 'large' ? 'rgba(255,255,255,0.2)' : 'transparent' }}
                title="Large Text Size"
              >
                A
              </button>
              <button
                className="gov-tool-btn"
                onClick={() => onTextSizeChange('extra-large')}
                style={{ fontWeight: textSize === 'extra-large' ? 800 : 400, backgroundColor: textSize === 'extra-large' ? 'rgba(255,255,255,0.2)' : 'transparent' }}
                title="Extra Large Text Size"
              >
                A+
              </button>
            </div>

            {/* Language Switcher */}
            <button
              className="gov-tool-btn"
              onClick={() => onLanguageChange(language === 'en' ? 'hi' : 'en')}
              style={{ backgroundColor: 'var(--color-accent-saffron)', borderColor: 'var(--color-accent-saffron)', color: '#FFFFFF', fontWeight: 700 }}
              title="Switch Language / भाषा बदलें"
              aria-label="Switch Language"
            >
              <Globe size={12} />
              <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
