import React from 'react';
import { Shield, Lock, Server, Database, FileSpreadsheet, Key, AlertCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Alert } from '../components/ui/Alert';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export interface StaffPortalPageProps {
  onNavigate: (path: string) => void;
  language: Language;
}

export const StaffPortalPage: React.FC<StaffPortalPageProps> = ({ onNavigate, language }) => {
  const isHi = language === 'hi';

  return (
    <div className="gov-container py-32" id="main-content">
      <Breadcrumbs
        items={[{ label: isHi ? 'अधिकारी पोर्टल' : 'Authorized Staff Portal' }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div
        style={{
          backgroundColor: '#111E2E',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-32)',
          marginBottom: 'var(--space-32)',
          borderBottom: '4px solid var(--color-semantic-warning)'
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-12)' }}>
            <Badge variant="warning" icon={<Lock size={13} />}>
              {isHi ? 'प्रतिबंधित सरकारी परिचालन वातावरण' : 'RESTRICTED GOVERNMENT OPERATIONAL ENVIRONMENT'}
            </Badge>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
              {isHi ? 'सड़क परिवहन मंत्रालय एवं राज्य आरटीओ आंतरिक प्रणाली' : 'MoRTH & State RTO Internal Systems'}
            </span>
          </div>

          <h1 style={{ fontSize: '30px', fontWeight: 800, color: '#FFFFFF', marginBottom: 'var(--space-12)' }}>
            {isHi ? 'अधिकृत विभागीय एवं आरटीओ स्टाफ पोर्टल' : 'Authorized Departmental & RTO Staff Portal'}
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
            {isHi
              ? 'मोटर लाइसेंसिंग अधिकारियों (MLO), मोटर वाहन निरीक्षकों (MVI) और राज्य परिवहन आयुक्तों के लिए एकीकृत सिंगल-साइन-ऑन। इसके लिए वैध पीकेआई डिजिटल हस्ताक्षर प्रमाणपत्र (DSC) आवश्यक है।'
              : 'Unified single-sign-on access for Motor Licensing Officers (MLO), Motor Vehicle Inspectors (MVI), and State Transport Commissioners. Requires valid PKI Digital Signature Certificate (DSC).'}
          </p>
        </div>
      </div>

      <Alert variant="warning" title={isHi ? 'सुरक्षा अनुपालन सूचना' : 'Security Compliance Notice'}>
        {isHi
          ? 'इन बैकएंड सिस्टमों तक पहुंच सूचना प्रौद्योगिकी अधिनियम 2000 के तहत रिकॉर्ड और ऑडिट की जाती है। अनधिकृत पहुंच का प्रयास दंडनीय अपराध है।'
          : 'Access to these backend operational systems is logged and audited under the Information Technology Act 2000. Unauthorized access attempts are strictly prohibited.'}
      </Alert>

      {/* Operational Systems Grid */}
      <div className="grid grid-cols-3 gap-24 mb-32">
        {/* System 1: VAHAN 4.0 */}
        <Card style={{ padding: 'var(--space-24)', backgroundColor: 'var(--color-bg-surface)' }}>
          <div className="gov-card-icon" style={{ backgroundColor: 'var(--color-brand-subtle)', color: 'var(--color-brand-primary)', marginBottom: 'var(--space-16)' }}>
            <Server size={24} />
          </div>
          <Badge variant="info" style={{ marginBottom: '8px' }}>
            {isHi ? 'वाहन रजिस्ट्री' : 'Vehicle Registry'}
          </Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'वाहन 4.0 केंद्रीय प्रणाली' : 'VAHAN 4.0 Central'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
            {isHi ? 'आरटीओ कर्मचारियों हेतु वाहन पंजीकरण संवीक्षा, कर ऑडिट, फिटनेस अनुमोदन और बंधक मंजूरी।' : 'Vehicle registration scrutiny, tax audit, fitness test approvals, and hypothecation approvals for RTO staff.'}
          </p>
          <Button variant="primary" fullWidth size="sm" onClick={() => alert('Redirecting to VAHAN 4.0 PKI Login Gateway')}>
            {isHi ? 'वाहन 4.0 में प्रवेश करें' : 'Access VAHAN 4.0'}
          </Button>
        </Card>

        {/* System 2: SARATHI 4.0 */}
        <Card style={{ padding: 'var(--space-24)', backgroundColor: 'var(--color-bg-surface)' }}>
          <div className="gov-card-icon" style={{ backgroundColor: 'var(--color-brand-subtle)', color: 'var(--color-brand-primary)', marginBottom: 'var(--space-16)' }}>
            <Database size={24} />
          </div>
          <Badge variant="info" style={{ marginBottom: '8px' }}>
            {isHi ? 'लाइसेंसिंग प्राधिकरण' : 'Licensing Authority'}
          </Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'सारथी 4.0 केंद्रीय प्रणाली' : 'SARATHI 4.0 Central'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
            {isHi ? 'ड्राइविंग लाइसेंस अनुमोदन, प्रॉक्टर्ड टेस्ट परिणाम, स्वचालित ट्रैक मूल्यांकन और बायोमेट्रिक मिलान।' : 'Driving licence approvals, proctored test results, automated track evaluation, and biometric matching.'}
          </p>
          <Button variant="primary" fullWidth size="sm" onClick={() => alert('Redirecting to SARATHI 4.0 PKI Login Gateway')}>
            {isHi ? 'सारथी 4.0 में प्रवेश करें' : 'Access SARATHI 4.0'}
          </Button>
        </Card>

        {/* System 3: VAHAN Backlog Entry */}
        <Card style={{ padding: 'var(--space-24)', backgroundColor: 'var(--color-bg-surface)' }}>
          <div className="gov-card-icon" style={{ backgroundColor: 'var(--color-bg-surface-secondary)', color: 'var(--color-brand-dark)', marginBottom: 'var(--space-16)' }}>
            <FileSpreadsheet size={24} />
          </div>
          <Badge variant="neutral" style={{ marginBottom: '8px' }}>
            {isHi ? 'पुरातन डिजिटलीकरण' : 'Legacy Digitization'}
          </Badge>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '8px' }}>
            {isHi ? 'वाहन बैकलॉग पोर्टल' : 'VAHAN Backlog Portal'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: '0 0 var(--space-16)' }}>
            {isHi ? '2015 से पूर्व के भौतिक परिवहन अभिलेखों का डिजिटलीकरण और सत्यापन टूल।' : 'Legacy record digitization and verification tool for pre-2015 physical transport department archives.'}
          </p>
          <Button variant="outline" fullWidth size="sm" onClick={() => alert('Accessing VAHAN Backlog Module')}>
            {isHi ? 'बैकलॉग सिस्टम खोलें' : 'Access Backlog System'}
          </Button>
        </Card>
      </div>

      {/* Reports & MIS */}
      <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand-dark)', marginBottom: '12px' }}>
          {isHi ? 'राष्ट्रीय रजिस्टर (NR) सेवाएं एवं एमआईएस एनालिटिक्स' : 'National Register (NR) Services & MIS Analytics'}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-16)' }}>
          {isHi
            ? 'राष्ट्रीय रजिस्टर की सशुल्क सेवाओं, राज्य राजस्व डैशबोर्ड और कानून प्रवर्तन एकीकरण तक अधिकृत पहुंच।'
            : 'Authorized access to National Register paid services, State revenue dashboards, and law enforcement integrations.'}
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="outline" size="sm" onClick={() => onNavigate('/dashboards')}>
            {isHi ? 'सार्वजनिक डैशबोर्ड देखें' : 'View Public Dashboards'}
          </Button>
          <Button variant="outline" size="sm" onClick={() => alert('Opening State MIS Reports Console')}>
            {isHi ? 'कार्यकारी एमआईएस रिपोर्ट' : 'Executive MIS Reports'}
          </Button>
          <Button variant="outline" size="sm" onClick={() => alert('Opening National Register Services')}>
            {isHi ? 'सशुल्क एनआर गेटवे' : 'Paid NR Gateway'}
          </Button>
        </div>
      </div>
    </div>
  );
};
