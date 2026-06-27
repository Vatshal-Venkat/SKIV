import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { FileText, Download, Calendar, Shield, Users } from 'lucide-react';

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState('Audits'); // Audits, Events, Meetings

  const reportDocs = [
    {
      id: 1,
      name: "Audited Balance Sheet & Revenue FY 2025-26",
      category: "Audits",
      date: "30 Apr 2026",
      size: "2.1 MB",
      signatory: "Sistakaranam Ikyavedika (Central Board)",
      authName: "G. V. Patnaik & Associates, Chartered Accountants"
    },
    {
      id: 2,
      name: "Financial Trust Statement & Donations Ledger 2025",
      category: "Audits",
      date: "15 Jan 2026",
      size: "1.8 MB",
      signatory: "AISKA Welfare Trust",
      authName: "K. R. Patnaik, Auditor"
    },
    {
      id: 3,
      name: "Ikyavedika Matrimony Meet-2026 Event Report",
      category: "Events",
      date: "10 Jun 2026",
      size: "3.4 MB",
      signatory: "Matrimonial Sub-Committee",
      authName: "Rama Devi Patnaik, Convener"
    },
    {
      id: 4,
      name: "AISKA Golden Jubilee Convention Wrap-up & Financials",
      category: "Events",
      date: "25 Oct 2025",
      size: "4.5 MB",
      signatory: "AISKA National Committee",
      authName: "S. C. Patnaik, President"
    },
    {
      id: 5,
      name: "Minutes of General Body Meeting - Hyderabad Chapter",
      category: "Meetings",
      date: "12 May 2026",
      size: "820 KB",
      signatory: "Telangana State Executive Council",
      authName: "G. Venkata Ramana, Secretary"
    },
    {
      id: 6,
      name: "Resolutions on Reservation Category BC-D Caste Certs",
      category: "Meetings",
      date: "08 Mar 2026",
      size: "1.2 MB",
      signatory: "Joint Action Committee (JAC)",
      authName: "K. Mohana Rao Patnaik, Convener"
    }
  ];

  const filteredDocs = reportDocs.filter(doc => doc.category === activeTab);

  return (
    <PageWrapper 
      title="Official Reports & Audits" 
      subtitle="Ensuring absolute transparency and accountability in all financial audits, assemblies, and official resolutions."
    >
      {/* Tab Controller */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '32px',
        background: 'rgba(21, 25, 38, 0.4)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '8px'
      }}>
        {[
          { key: 'Audits', label: 'Financial Audits', icon: <Shield size={14} /> },
          { key: 'Events', label: 'Ikyavedika Events', icon: <Calendar size={14} /> },
          { key: 'Meetings', label: 'Minutes of Meetings (MoM)', icon: <Users size={14} /> }
        ].map(tab => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                background: isActive ? 'var(--accent-glow)' : 'transparent',
                border: isActive ? '1px solid var(--accent)' : '1px solid transparent',
                color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s'
              }}
            >
              {tab.icon} {tab.label}
            </button>
          );
        })}
      </div>

      {/* Reports Directory Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
        {filteredDocs.map(doc => (
          <div 
            key={doc.id} 
            className="glass-panel" 
            style={{ 
              padding: '24px', 
              border: '1px solid var(--border)', 
              borderRadius: '16px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'transform 0.2s'
            }}
          >
            {/* Document Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: '280px' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '10px', 
                background: 'rgba(6, 182, 212, 0.08)', 
                border: '1px solid rgba(6, 182, 212, 0.25)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--accent)',
                flexShrink: 0
              }}>
                <FileText size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px', lineHeight: '1.4' }}>
                  {doc.name}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <span>Published: {doc.date}</span>
                  <span>•</span>
                  <span>Size: {doc.size}</span>
                  <span>•</span>
                  <span>Signatory: {doc.signatory}</span>
                </div>
              </div>
            </div>

            {/* Auditor Details & Action */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <span style={{ display: 'block', fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Certified By</span>
                <strong>{doc.authName}</strong>
              </div>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => alert("PDF download started in background.")}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', padding: '10px 18px' }}
              >
                <Download size={14} /> Download PDF
              </button>
            </div>

          </div>
        ))}
      </div>

    </PageWrapper>
  );
};

export default ReportsPage;
