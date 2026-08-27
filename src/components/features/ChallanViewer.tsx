import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle2, ShieldAlert, Download, CreditCard, Eye, HelpCircle } from 'lucide-react';
import { mockChallans } from '../../data/mockCitizenData';
import { ChallanRecord, Language } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Alert } from '../ui/Alert';
import { Modal } from '../ui/Modal';

export interface ChallanViewerProps {
  language: Language;
}

export const ChallanViewer: React.FC<ChallanViewerProps> = ({ language }) => {
  const [queryType, setQueryType] = useState<'vehicle' | 'challan'>('vehicle');
  const [queryVal, setQueryVal] = useState('DL 01 AB 1234');
  const [activeTab, setActiveTab] = useState<'PENDING' | 'PAID'>('PENDING');
  const [challans, setChallans] = useState<ChallanRecord[]>(mockChallans);
  const [searched, setSearched] = useState(true);
  const [loading, setLoading] = useState(false);

  // Selected Challan Modal state
  const [selectedChallan, setSelectedChallan] = useState<ChallanRecord | null>(null);
  const [paymentModalChallan, setPaymentModalChallan] = useState<ChallanRecord | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [disputeModalChallan, setDisputeModalChallan] = useState<ChallanRecord | null>(null);
  const [disputeSubmitted, setDisputeSubmitted] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
      setChallans(mockChallans);
    }, 300);
  };

  const handlePayChallan = (challan: ChallanRecord) => {
    setPaymentModalChallan(challan);
    setPaymentSuccess(false);
  };

  const handleCompletePayment = () => {
    if (paymentModalChallan) {
      setChallans((prev) =>
        prev.map((c) =>
          c.challanNo === paymentModalChallan.challanNo
            ? { ...c, status: 'PAID', paymentDate: '24-AUG-2026', transactionId: `TXN-${Math.floor(100000000 + Math.random() * 900000000)}` }
            : c
        )
      );
      setPaymentSuccess(true);
    }
  };

  const filteredChallans = challans.filter((c) => c.status === activeTab);
  const totalPendingAmount = challans
    .filter((c) => c.status === 'PENDING')
    .reduce((sum, c) => sum + c.amount, 0);

  const isHi = language === 'hi';

  const translateOffense = (offense: string) => {
    if (!isHi) return offense;
    if (offense.includes('Speed')) return 'गति सीमा का उल्लंघन (ओवर-स्पीडिंग)';
    if (offense.includes('Red Light') || offense.includes('Signal')) return 'लाल बत्ती / सिग्नल का उल्लंघन';
    if (offense.includes('Helmet')) return 'बिना हेलमेट दोपहिया वाहन चलाना';
    if (offense.includes('Seat Belt')) return 'बिना सीट बेल्ट कार चलाना';
    if (offense.includes('Parking')) return 'अनाधिकृत स्थान पर नो-पार्किंग उल्लंघन';
    if (offense.includes('PUC') || offense.includes('Pollution')) return 'अमान्य प्रदूषण नियंत्रण प्रमाण पत्र (PUCC)';
    return offense;
  };

  return (
    <div>
      {/* Search Filter Card */}
      <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)', marginBottom: 'var(--space-24)' }}>
        <div style={{ display: 'flex', gap: '16px', marginBottom: 'var(--space-16)' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', color: 'var(--color-brand-dark)' }}>
            <input
              type="radio"
              name="queryType"
              checked={queryType === 'vehicle'}
              onChange={() => setQueryType('vehicle')}
              style={{ accentColor: 'var(--color-brand-primary)' }}
            />
            <span>{isHi ? 'वाहन पंजीकरण संख्या' : 'Vehicle Registration Number'}</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', color: 'var(--color-brand-dark)' }}>
            <input
              type="radio"
              name="queryType"
              checked={queryType === 'challan'}
              onChange={() => setQueryType('challan')}
              style={{ accentColor: 'var(--color-brand-primary)' }}
            />
            <span>{isHi ? 'चालान संख्या' : 'Challan Number'}</span>
          </label>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <input
              type="text"
              className="gov-input"
              style={{ fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}
              placeholder={queryType === 'vehicle' ? (isHi ? 'उदा. DL 01 AB 1234' : 'e.g. DL 01 AB 1234') : (isHi ? 'उदा. DL89124009214' : 'e.g. DL89124009214')}
              value={queryVal}
              onChange={(e) => setQueryVal(e.target.value.toUpperCase())}
            />
          </div>
          <Button
            variant="primary"
            onClick={handleSearch}
            loading={loading}
            icon={<Search size={18} />}
          >
            {isHi ? 'चालान विवरण खोजें' : 'Get Challan Details'}
          </Button>
        </div>
      </div>

      {/* Results Header & Tabs */}
      {searched && (
        <div style={{ backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-24)' }}>
          {/* Pending Summary Strip */}
          <div
            style={{
              padding: 'var(--space-16) var(--space-24)',
              backgroundColor: totalPendingAmount > 0 ? 'var(--color-semantic-warning-subtle)' : 'var(--color-semantic-success-subtle)',
              borderRadius: 'var(--radius-md)',
              border: `1px solid ${totalPendingAmount > 0 ? '#FFECB5' : '#BADBCC'}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: 'var(--space-24)'
            }}
          >
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                {isHi ? 'वाहन:' : 'Vehicle:'} <strong>{queryVal}</strong>
              </div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: totalPendingAmount > 0 ? '#B45309' : 'var(--color-semantic-success)', marginTop: '2px' }}>
                {totalPendingAmount > 0
                  ? (isHi
                      ? `${challans.filter((c) => c.status === 'PENDING').length} लंबित चालान मिले (कुल जुर्माना: ₹${totalPendingAmount.toLocaleString('en-IN')})`
                      : `${challans.filter((c) => c.status === 'PENDING').length} Pending Challan(s) found (Total: ₹${totalPendingAmount.toLocaleString('en-IN')})`)
                  : (isHi ? 'कोई लंबित चालान नहीं! सभी भुगतान पूर्ण हैं।' : 'No pending traffic violations! All challans cleared.')}
              </div>
            </div>

            {totalPendingAmount > 0 && (
              <Button
                variant="saffron"
                size="sm"
                onClick={() => handlePayChallan(challans.filter((c) => c.status === 'PENDING')[0])}
                icon={<CreditCard size={15} />}
              >
                {isHi ? 'लंबित चालान भरें' : 'Pay Pending Challan'}
              </Button>
            )}
          </div>

          {/* Tab Navigation */}
          <div style={{ display: 'flex', gap: '8px', borderBottom: '2px solid var(--color-border-light)', marginBottom: 'var(--space-24)' }}>
            <button
              onClick={() => setActiveTab('PENDING')}
              style={{
                padding: '10px 18px',
                fontSize: '14px',
                fontWeight: 600,
                color: activeTab === 'PENDING' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
                borderBottom: activeTab === 'PENDING' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
                marginBottom: '-2px',
                backgroundColor: 'transparent',
                cursor: 'pointer'
              }}
            >
              {isHi ? `लंबित चालान (${challans.filter((c) => c.status === 'PENDING').length})` : `Pending Challans (${challans.filter((c) => c.status === 'PENDING').length})`}
            </button>
            <button
              onClick={() => setActiveTab('PAID')}
              style={{
                padding: '10px 18px',
                fontSize: '14px',
                fontWeight: 600,
                color: activeTab === 'PAID' ? 'var(--color-brand-primary)' : 'var(--color-text-muted)',
                borderBottom: activeTab === 'PAID' ? '3px solid var(--color-brand-primary)' : '3px solid transparent',
                marginBottom: '-2px',
                backgroundColor: 'transparent',
                cursor: 'pointer'
              }}
            >
              {isHi ? `भुगतान इतिहास (${challans.filter((c) => c.status === 'PAID').length})` : `Payment History (${challans.filter((c) => c.status === 'PAID').length})`}
            </button>
          </div>

          {/* Challans List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filteredChallans.map((challan) => (
              <div
                key={challan.challanNo}
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-16) var(--space-24)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px',
                  backgroundColor: 'var(--color-bg-surface)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
                      {challan.challanNo}
                    </span>
                    <Badge variant={challan.status === 'PAID' ? 'success' : 'warning'}>
                      {isHi ? (challan.status === 'PAID' ? 'भुगतान पूर्ण' : 'लंबित') : challan.status}
                    </Badge>
                  </div>

                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-primary)', margin: '4px 0 2px' }}>
                    {translateOffense(challan.offense)}
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0 }}>
                    {isHi ? 'दिनांक:' : 'Date:'} <strong>{challan.violationDate}</strong> • {isHi ? 'स्थान:' : 'Location:'} <strong>{challan.location}</strong> • {isHi ? 'धारा:' : 'Section:'} <strong>{challan.mvActSection}</strong>
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{isHi ? 'जुर्माना राशि' : 'Fine Amount'}</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: challan.status === 'PAID' ? 'var(--color-semantic-success)' : 'var(--color-semantic-error)' }}>
                      ₹{challan.amount.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedChallan(challan)}
                      icon={<Eye size={14} />}
                    >
                      {isHi ? 'साक्ष्य व विवरण' : 'Evidence & Details'}
                    </Button>

                    {challan.status === 'PENDING' ? (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handlePayChallan(challan)}
                        icon={<CreditCard size={14} />}
                      >
                        {isHi ? 'भुगतान करें' : 'Pay Now'}
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => alert(`Downloading payment receipt for Challan ${challan.challanNo}`)}
                        icon={<Download size={14} />}
                      >
                        {isHi ? 'रसीद' : 'Receipt'}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {filteredChallans.length === 0 && (
              <div style={{ textAlign: 'center', padding: 'var(--space-32) 0' }}>
                <CheckCircle2 size={40} color="var(--color-semantic-success)" style={{ margin: '0 auto var(--space-8)' }} />
                <h4 style={{ color: 'var(--color-brand-dark)' }}>
                  {isHi ? `कोई ${activeTab === 'PENDING' ? 'लंबित' : 'भुगतान किया हुआ'} चालान नहीं मिला` : `No ${activeTab.toLowerCase()} challans found`}
                </h4>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Violation Details & Evidence Modal */}
      {selectedChallan && (
        <Modal
          isOpen={!!selectedChallan}
          onClose={() => setSelectedChallan(null)}
          title={isHi ? `उल्लंघन विवरण — ${selectedChallan.challanNo}` : `Violation Details — ${selectedChallan.challanNo}`}
          subtitle={`${isHi ? 'वाहन' : 'Vehicle'}: ${selectedChallan.vehicleNo}`}
          footer={
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  const ch = selectedChallan;
                  setSelectedChallan(null);
                  setDisputeModalChallan(ch);
                }}
                icon={<HelpCircle size={14} />}
              >
                {isHi ? 'आपत्ति / शिकायत दर्ज करें' : 'Raise Dispute / Grievance'}
              </Button>
              {selectedChallan.status === 'PENDING' ? (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    const ch = selectedChallan;
                    setSelectedChallan(null);
                    handlePayChallan(ch);
                  }}
                  icon={<CreditCard size={14} />}
                >
                  {isHi ? `भुगतान ₹${selectedChallan.amount}` : `Pay ₹${selectedChallan.amount}`}
                </Button>
              ) : (
                <Button variant="outline" size="sm" onClick={() => setSelectedChallan(null)}>
                  {isHi ? 'बंद करें' : 'Close'}
                </Button>
              )}
            </>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {selectedChallan.evidencePhoto && (
              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-brand-dark)', display: 'block', marginBottom: '8px' }}>
                  {isHi ? 'कैमरा रडार साक्ष्य स्नैपशॉट:' : 'Camera Radar Snapshot Evidence:'}
                </label>
                <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <img
                    src={selectedChallan.evidencePhoto}
                    alt="Violation Evidence"
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            )}

            <div style={{ border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <table>
                <tbody>
                  <tr>
                    <th style={{ width: '35%' }}>{isHi ? 'उल्लंघन विवरण' : 'Offense Description'}</th>
                    <td><strong>{translateOffense(selectedChallan.offense)}</strong></td>
                  </tr>
                  <tr>
                    <th>{isHi ? 'एमवी एक्ट धारा' : 'Statutory Provision'}</th>
                    <td>{selectedChallan.mvActSection}</td>
                  </tr>
                  <tr>
                    <th>{isHi ? 'समय' : 'Timestamp'}</th>
                    <td>{selectedChallan.violationDate}</td>
                  </tr>
                  <tr>
                    <th>{isHi ? 'जीपीएस स्थान' : 'GPS Location'}</th>
                    <td>{selectedChallan.location}</td>
                  </tr>
                  <tr>
                    <th>{isHi ? 'प्रवर्तन प्राधिकरण' : 'Enforcing Authority'}</th>
                    <td>{isHi ? 'ट्रैफिक पुलिस / वर्चुअल कोर्ट स्वचालित प्रणाली' : 'Traffic Police / Virtual Court Automated System'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Modal>
      )}

      {/* Instant Payment Simulation Modal */}
      {paymentModalChallan && (
        <Modal
          isOpen={!!paymentModalChallan}
          onClose={() => setPaymentModalChallan(null)}
          title={paymentSuccess ? (isHi ? 'भुगतान सफल' : 'Payment Successful') : (isHi ? 'ई-चालान जुर्माना भुगतान' : 'Pay Traffic Violation Challan')}
          subtitle={`${isHi ? 'चालान सं' : 'Challan'}: ${paymentModalChallan.challanNo}`}
          footer={
            paymentSuccess ? (
              <Button variant="primary" size="sm" onClick={() => setPaymentModalChallan(null)}>
                {isHi ? 'पूर्ण' : 'Done'}
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => setPaymentModalChallan(null)}>
                  {isHi ? 'रद्द करें' : 'Cancel'}
                </Button>
                <Button variant="saffron" size="sm" onClick={handleCompletePayment} icon={<CreditCard size={15} />}>
                  {isHi ? `भुगतान की पुष्टि करें ₹${paymentModalChallan.amount}` : `Confirm & Pay ₹${paymentModalChallan.amount}`}
                </Button>
              </>
            )
          }
        >
          {paymentSuccess ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-16) 0' }}>
              <CheckCircle2 size={48} color="var(--color-semantic-success)" style={{ margin: '0 auto var(--space-12)' }} />
              <h3 style={{ color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
                {isHi ? 'चालान सफलतापूर्वक चुकता किया गया' : 'Challan Settled Successfully'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-16)' }}>
                {isHi ? 'आपका जुर्माना केंद्रीय ई-चालान रिपॉजिटरी में दर्ज कर दिया गया है।' : 'Your fine has been recorded in the central eChallan repository.'}
              </p>
              <div style={{ backgroundColor: 'var(--color-bg-page)', padding: 'var(--space-12)', borderRadius: 'var(--radius-md)', textAlign: 'left', fontSize: '13px', border: '1px solid var(--color-border-light)' }}>
                <div>{isHi ? 'चालान सं:' : 'Challan No:'} <strong>{paymentModalChallan.challanNo}</strong></div>
                <div>{isHi ? 'भुगतान राशि:' : 'Amount Paid:'} <strong>₹{paymentModalChallan.amount}</strong></div>
                <div>{isHi ? 'भुगतान माध्यम:' : 'Payment Mode:'} <strong>UPI / Bharatkosh Gateway</strong></div>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ backgroundColor: 'var(--color-brand-subtle)', padding: 'var(--space-16)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-16)' }}>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>{isHi ? 'कुल देय जुर्माना:' : 'Total Payable Fine:'}</div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-brand-primary)' }}>
                  ₹{paymentModalChallan.amount.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                  {translateOffense(paymentModalChallan.offense)}
                </div>
              </div>

              <div className="gov-form-group">
                <label className="gov-label">{isHi ? 'भुगतान गेटवे चुनें' : 'Select Payment Gateway'}</label>
                <select className="gov-select">
                  <option>{isHi ? 'भारतकोश / एसबीआई ई-पे (UPI, कार्ड, नेट बैंकिंग)' : 'Bharatkosh / SBI ePay (UPI, Cards, Net Banking)'}</option>
                  <option>{isHi ? 'पे-गव केंद्रीय गेटवे' : 'PayGov Central Gateway'}</option>
                  <option>PayTM / PhonePe UPI</option>
                </select>
              </div>

              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                {isHi ? 'लेनदेन स्वीकृति के तुरंत बाद डिजिटल हस्ताक्षर युक्त आधिकारिक रसीद उत्पन्न होगी।' : 'Official receipt with digital signature will be generated immediately after transaction approval.'}
              </p>
            </div>
          )}
        </Modal>
      )}

      {/* Dispute Modal */}
      {disputeModalChallan && (
        <Modal
          isOpen={!!disputeModalChallan}
          onClose={() => { setDisputeModalChallan(null); setDisputeSubmitted(false); }}
          title={isHi ? 'चालान पर आपत्ति / शिकायत दर्ज करें' : 'Raise Grievance / Dispute on Challan'}
          subtitle={`${isHi ? 'चालान सं' : 'Challan No'}: ${disputeModalChallan.challanNo}`}
          footer={
            disputeSubmitted ? (
              <Button variant="primary" size="sm" onClick={() => { setDisputeModalChallan(null); setDisputeSubmitted(false); }}>
                {isHi ? 'पूर्ण' : 'Done'}
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => setDisputeModalChallan(null)}>
                  {isHi ? 'रद्द करें' : 'Cancel'}
                </Button>
                <Button variant="primary" size="sm" onClick={() => setDisputeSubmitted(true)}>
                  {isHi ? 'शिकायत जमा करें' : 'Submit Grievance'}
                </Button>
              </>
            )
          }
        >
          {disputeSubmitted ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-16) 0' }}>
              <CheckCircle2 size={48} color="var(--color-semantic-success)" style={{ margin: '0 auto var(--space-12)' }} />
              <h3 style={{ color: 'var(--color-brand-dark)', marginBottom: '4px' }}>
                {isHi ? 'शिकायत सफलतापूर्वक दर्ज' : 'Grievance Registered'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                {isHi
                  ? `शिकायत संदर्भ: GRV-2026-CH-${Math.floor(10000 + Math.random() * 90000)}। ट्रैफिक पुलिस वर्चुअल कोर्ट 7 कार्य दिवसों में समीक्षा करेगी।`
                  : `Grievance Reference: GRV-2026-CH-${Math.floor(10000 + Math.random() * 90000)}. The Traffic Police Virtual Court will review your submission within 7 working days.`}
              </p>
            </div>
          ) : (
            <div>
              <div className="gov-form-group">
                <label className="gov-label">{isHi ? 'आपत्ति का कारण' : 'Reason for Dispute'}</label>
                <select className="gov-select">
                  <option>{isHi ? 'गलत वाहन नंबर / क्लोन नंबर प्लेट' : 'Incorrect vehicle number / Cloned number plate'}</option>
                  <option>{isHi ? 'उल्लंघन तिथि से पूर्व वाहन बेचा जा चुका था' : 'Vehicle was sold prior to violation date'}</option>
                  <option>{isHi ? 'आपातकालीन वाहन / चिकित्सीय आपात स्थिति' : 'Emergency vehicle / Medical emergency'}</option>
                  <option>{isHi ? 'गलत स्थान / रडार रीडिंग त्रुटि' : 'Wrong location / Inaccurate radar reading'}</option>
                </select>
              </div>

              <div className="gov-form-group">
                <label className="gov-label">{isHi ? 'आवेदक का विवरण' : 'Applicant Statement'}</label>
                <textarea
                  className="gov-textarea"
                  rows={3}
                  placeholder={isHi ? 'बताएं कि आप इस नोटिस पर क्यों आपत्ति कर रहे हैं...' : 'Explain why you are disputing this notice...'}
                />
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};
