import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, Download, ArrowRight, AlertCircle, FileText } from 'lucide-react';
import { mockTrackingApplications } from '../../data/mockCitizenData';
import { ApplicationTrackingRecord, Language } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Alert } from '../ui/Alert';
import { Timeline } from '../ui/Timeline';

export interface ApplicationTrackerProps {
  initialAppNo?: string;
  language: Language;
  onNavigate?: (path: string) => void;
}

export const ApplicationTracker: React.FC<ApplicationTrackerProps> = ({
  initialAppNo = '',
  language,
  onNavigate
}) => {
  const [appNo, setAppNo] = useState(initialAppNo);
  const [dob, setDob] = useState('');
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApplicationTrackingRecord | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTrack = (queryAppNo?: string) => {
    const targetNo = (queryAppNo || appNo).trim().toUpperCase();
    if (!targetNo) {
      setError('Please enter a valid Application Number');
      return;
    }

    setError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSearched(true);
      const match = mockTrackingApplications[targetNo];
      if (match) {
        setResult(match);
      } else {
        // Fallback demo record for any typed query
        setResult({
          applicationNo: targetNo,
          applicantName: 'CITIZEN APPLICANT',
          serviceName: 'Transport Application Service',
          submissionDate: '24-AUG-2026',
          currentStage: 3,
          stages: [
            { stageNumber: 1, name: 'Application Received & Recorded', status: 'COMPLETED', completedOn: '24-AUG-2026 10:00 IST', remarks: 'Aadhaar e-KYC verified.' },
            { stageNumber: 2, name: 'Fee Payment Verified', status: 'COMPLETED', completedOn: '24-AUG-2026 10:05 IST', remarks: 'Online transaction approved.' },
            { stageNumber: 3, name: 'Document Scrutiny', status: 'IN_PROGRESS', remarks: 'Documents under review by jurisdictional authority.' },
            { stageNumber: 4, name: 'Final MLO Approval', status: 'PENDING' },
            { stageNumber: 5, name: 'Printing & Smart Card Encoding', status: 'PENDING' },
            { stageNumber: 6, name: 'Dispatch via Speed Post', status: 'PENDING' }
          ],
          rto: 'National Register Central Processing Cell',
          status: 'IN_PROCESS'
        });
      }
    }, 400);
  };

  const handleLoadDemo = (demoId: string) => {
    setAppNo(demoId);
    handleTrack(demoId);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)' }}>
      {/* Search Input Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-16)', alignItems: 'flex-end', marginBottom: 'var(--space-16)' }}>
        <div className="gov-form-group" style={{ margin: 0 }}>
          <label className="gov-label" htmlFor="track-app-no">
            {language === 'hi' ? 'आवेदन संख्या' : 'Application Number'} <span className="gov-label-required">*</span>
          </label>
          <input
            id="track-app-no"
            type="text"
            className="gov-input"
            placeholder={language === 'hi' ? 'उदा. PARI-2026-123456' : 'e.g. PARI-2026-123456'}
            value={appNo}
            onChange={(e) => setAppNo(e.target.value.toUpperCase())}
          />
        </div>

        <div className="gov-form-group" style={{ margin: 0 }}>
          <label className="gov-label" htmlFor="track-dob">
            {language === 'hi' ? 'जन्म तिथि (वैकल्पिक सत्यापन)' : 'Date of Birth (Optional verification)'}
          </label>
          <input
            id="track-dob"
            type="date"
            className="gov-input"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div>
          <Button
            variant="primary"
            fullWidth
            onClick={() => handleTrack()}
            loading={loading}
            icon={<Search size={16} />}
          >
            {language === 'hi' ? 'स्थिति ट्रैक करें' : 'Track Status'}
          </Button>
        </div>
      </div>

      {/* Demo helper shortcuts */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: 'var(--space-24)', fontSize: '12px', color: 'var(--color-text-muted)' }}>
        <span>{language === 'hi' ? 'नमूना आवेदन आज़माएं:' : 'Try Demo Application:'}</span>
        <button
          type="button"
          onClick={() => handleLoadDemo('PARI-2026-123456')}
          style={{ padding: '2px 8px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-brand-subtle)', color: 'var(--color-brand-primary)', border: '1px solid var(--color-border-light)', cursor: 'pointer', fontWeight: 600 }}
        >
          {language === 'hi' ? 'PARI-2026-123456 (डीएल नवीनीकरण)' : 'PARI-2026-123456 (DL Renewal)'}
        </button>
        <button
          type="button"
          onClick={() => handleLoadDemo('PARI-2026-DL-89412')}
          style={{ padding: '2px 8px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-brand-subtle)', color: 'var(--color-brand-primary)', border: '1px solid var(--color-border-light)', cursor: 'pointer', fontWeight: 600 }}
        >
          {language === 'hi' ? 'PARI-2026-DL-89412 (आज जमा किया गया)' : 'PARI-2026-DL-89412 (Submitted Today)'}
        </button>
      </div>

      {error && <Alert variant="error">{error}</Alert>}

      {/* Result View */}
      {searched && result && (
        <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: 'var(--space-24)', marginTop: 'var(--space-16)' }}>
          {/* Header Summary Box */}
          <div
            style={{
              padding: 'var(--space-16) var(--space-24)',
              backgroundColor: 'var(--color-brand-subtle)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid #B6D4FE',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: 'var(--space-24)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', margin: 0 }}>
                  {language === 'hi' && result.serviceName.includes('Renewal') ? 'ड्राइविंग लाइसेंस का नवीनीकरण' : result.serviceName}
                </h3>
                <Badge variant="info">{language === 'hi' ? 'प्रक्रियाधीन' : 'In Process'}</Badge>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '4px 0 0' }}>
                {language === 'hi' ? 'आवेदन सं:' : 'Application No:'} <strong>{result.applicationNo}</strong> • {language === 'hi' ? 'आवेदक:' : 'Applicant:'} <strong>{result.applicantName}</strong> • {language === 'hi' ? 'आरटीओ:' : 'RTO:'} <strong>{result.rto}</strong>
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => alert(`Downloading official acknowledgment receipt for application ${result.applicationNo}`)}
                icon={<Download size={14} />}
              >
                {language === 'hi' ? 'रसीद' : 'Receipt'}
              </Button>
            </div>
          </div>

          {/* Interactive Multi-Stage Timeline */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: 'var(--space-24)' }}>
              {language === 'hi' ? 'आवेदन प्रसंस्करण प्रगति रोडमैप' : 'Application Processing Roadmap'}
            </h4>
            <Timeline stages={result.stages} language={language} />
          </div>
        </div>
      )}
    </div>
  );
};
