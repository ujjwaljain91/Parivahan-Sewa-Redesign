import React, { useState } from 'react';
import { MapPin, Phone, Mail, Search, Check } from 'lucide-react';
import { statesAndRtos } from '../../data/rtoData';
import { RtoLocation, Language } from '../../types';
import { Button } from '../ui/Button';

export interface RtoLocatorProps {
  onSelectRto?: (rto: RtoLocation) => void;
  language?: Language;
}

export const RtoLocator: React.FC<RtoLocatorProps> = ({ onSelectRto, language }) => {
  const [selectedStateCode, setSelectedStateCode] = useState('DL');
  const [searchQuery, setSearchQuery] = useState('');

  const currentState = statesAndRtos.find((s) => s.code === selectedStateCode) || statesAndRtos[0];

  const filteredRtos = currentState.rtos.filter(
    (r) =>
      r.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isHi = language === 'hi';

  return (
    <div>
      <div className="grid grid-cols-2 gap-16 mb-24">
        <div className="gov-form-group" style={{ margin: 0 }}>
          <label className="gov-label">{isHi ? 'राज्य / केंद्र शासित प्रदेश चुनें' : 'Select State / Union Territory'}</label>
          <select
            className="gov-select"
            value={selectedStateCode}
            onChange={(e) => setSelectedStateCode(e.target.value)}
          >
            {statesAndRtos.map((st) => (
              <option key={st.code} value={st.code}>
                {st.name} ({st.code})
              </option>
            ))}
          </select>
        </div>

        <div className="gov-form-group" style={{ margin: 0 }}>
          <label className="gov-label">{isHi ? 'शहर या कोड द्वारा आरटीओ खोजें' : 'Search RTO by City / Code'}</label>
          <input
            type="text"
            className="gov-input"
            placeholder={isHi ? 'उदा. जनकपुरी या DL-04...' : 'e.g. Janakpuri or DL-04...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '420px', overflowY: 'auto' }}>
        {filteredRtos.map((rto) => (
          <div
            key={rto.code}
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-16)',
              backgroundColor: 'var(--color-bg-surface)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    backgroundColor: 'var(--color-brand-primary)',
                    color: '#FFFFFF',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '12px',
                    fontWeight: 700
                  }}
                >
                  {rto.code}
                </span>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                  {rto.name}
                </h4>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '6px 0 4px', display: 'flex', alignItems: 'flex-start', gap: '4px' }}>
                <MapPin size={14} color="var(--color-text-muted)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>{rto.address}</span>
              </p>

              <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Phone size={12} /> {rto.phone}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Mail size={12} /> {rto.email}
                </span>
              </div>
            </div>

            {onSelectRto && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSelectRto(rto)}
                icon={<Check size={14} />}
              >
                {isHi ? 'आरटीओ चुनें' : 'Select RTO'}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
