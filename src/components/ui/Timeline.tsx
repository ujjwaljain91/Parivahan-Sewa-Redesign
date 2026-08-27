import React from 'react';
import { CheckCircle2, Clock, CircleAlert, Check, Circle } from 'lucide-react';
import { Badge } from './Badge';
import { Language } from '../../types';

export interface TimelineStage {
  stageNumber: number;
  name: string;
  nameHi?: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PENDING';
  completedOn?: string;
  remarks?: string;
  remarksHi?: string;
}

export interface TimelineProps {
  stages: TimelineStage[];
  language?: Language;
}

export const Timeline: React.FC<TimelineProps> = ({ stages, language = 'en' }) => {
  const isHi = language === 'hi';

  const translateStageName = (name: string) => {
    if (!isHi) return name;
    if (name.includes('Application Received')) return 'आवेदन प्राप्त एवं दर्ज किया गया';
    if (name.includes('Fee Payment')) return 'शुल्क भुगतान सत्यापित';
    if (name.includes('Document Scrutiny')) return 'दस्तावेज संवीक्षा (जांच)';
    if (name.includes('MLO Approval') || name.includes('Approval')) return 'अंतिम अनुमोदन (प्राधिकारी द्वारा)';
    if (name.includes('Printing') || name.includes('Smart Card')) return 'स्मार्ट कार्ड प्रिंटिंग एवं एन्कोडिंग';
    if (name.includes('Dispatch') || name.includes('Speed Post')) return 'स्पीड पोस्ट द्वारा प्रेषण';
    return name;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative' }}>
      {stages.map((stg, idx) => {
        const isLast = idx === stages.length - 1;
        const isCompleted = stg.status === 'COMPLETED';
        const isInProgress = stg.status === 'IN_PROGRESS';

        return (
          <div key={stg.stageNumber} style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            {/* Left Line & Icon */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '32px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isCompleted
                    ? 'var(--color-semantic-success)'
                    : isInProgress
                    ? 'var(--color-brand-primary)'
                    : 'var(--color-bg-surface-secondary)',
                  color: isCompleted || isInProgress ? '#FFFFFF' : 'var(--color-text-muted)',
                  border: isInProgress ? '2px solid var(--color-brand-primary)' : '1px solid var(--color-border)',
                  zIndex: 2
                }}
              >
                {isCompleted ? <Check size={16} /> : isInProgress ? <Clock size={16} /> : <Circle size={12} />}
              </div>

              {!isLast && (
                <div
                  style={{
                    width: '2px',
                    flex: 1,
                    minHeight: '48px',
                    backgroundColor: isCompleted ? 'var(--color-semantic-success)' : 'var(--color-border-light)',
                    margin: '4px 0'
                  }}
                />
              )}
            </div>

            {/* Content Details */}
            <div style={{ paddingBottom: isLast ? '0' : '24px', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: isInProgress ? 'var(--color-brand-primary)' : 'var(--color-brand-dark)', margin: 0 }}>
                  {isHi ? `चरण ${stg.stageNumber}: ` : `Stage ${stg.stageNumber}: `}
                  {stg.nameHi || translateStageName(stg.name)}
                </h4>
                {isCompleted && <Badge variant="success">{isHi ? 'पूर्ण' : 'Completed'}</Badge>}
                {isInProgress && <Badge variant="info">{isHi ? 'प्रक्रियाधीन' : 'In Progress'}</Badge>}
                {stg.status === 'PENDING' && <Badge variant="neutral">{isHi ? 'लंबित' : 'Pending'}</Badge>}
              </div>

              {stg.completedOn && (
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: '4px 0 0' }}>
                  {isHi ? 'समय:' : 'Timestamp:'} {stg.completedOn}
                </p>
              )}

              {stg.remarks && (
                <div
                  style={{
                    marginTop: '12px',
                    padding: '12px 16px',
                    backgroundColor: 'var(--color-bg-surface-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    borderLeft: `3px solid ${isCompleted ? 'var(--color-semantic-success)' : 'var(--color-brand-primary)'}`,
                    lineHeight: 1.5
                  }}
                >
                  <strong>{isHi ? 'अधिकारी टिप्पणी:' : 'Officer Remarks:'}</strong> {stg.remarksHi || (isHi && stg.remarks.includes('Aadhaar') ? 'आधार ई-केवाईसी सत्यापित।' : isHi && stg.remarks.includes('Online transaction') ? 'ऑनलाइन लेन-देन स्वीकृत।' : isHi && stg.remarks.includes('under review') ? 'दस्तावेजों की संबंधित प्राधिकारी द्वारा जांच जारी है।' : stg.remarks)}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export interface TabsProps {
  tabs: { id: string; label: string; icon?: React.ReactNode }[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div
      role="tablist"
      style={{
        display: 'flex',
        borderBottom: '2px solid var(--color-border-light)',
        gap: '8px',
        overflowX: 'auto',
        marginBottom: 'var(--space-24)'
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: 600,
              color: isActive ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)',
              borderBottom: isActive ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
              marginBottom: '-2px',
              backgroundColor: isActive ? 'var(--color-brand-subtle)' : 'transparent',
              borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all var(--transition-fast)'
            }}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
