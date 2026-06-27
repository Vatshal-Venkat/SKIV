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
      downloads: "182",
      authName: "G. V. Patnaik & Associates, CA"
    },
    {
      id: 2,
      name: "Financial Trust Statement & Donations Ledger 2025",
      category: "Audits",
      date: "15 Jan 2026",
      size: "1.8 MB",
      downloads: "293",
      authName: "K. R. Patnaik, Auditor"
    },
    // Category 4: Real Events Reports from DB
    {
      id: 3,
      name: "Lekha Annual Awards 2024 (లేఖ ఏన్యువల్ అవార్డ్స్ 2024)",
      category: "Events",
      date: "12 Jan 2025",
      size: "3.31 MB",
      downloads: "714",
      authName: "Naraharinath Sekharamantri"
    },
    {
      id: 4,
      name: "Butterfly Meet Report - Jan 2022 (సీతాకోకచిలుక సమావేశ నివేదిక)",
      category: "Events",
      date: "16 Jan 2022",
      size: "2.52 MB",
      downloads: "553",
      authName: "Naraharinath Sekharamantri"
    },
    {
      id: 5,
      name: "Vivaha Vedika & Web Site Launch - Ugadi 2021 (వివాహ వేదిక & వెబ్ సైట్ ఆవిష్కరణ)",
      category: "Events",
      date: "13 Apr 2021",
      size: "1015.39 KB",
      downloads: "563",
      authName: "Naraharinath Sekharamantri"
    },
    {
      id: 6,
      name: "Dasara Sambaralu - దసరా సంబరాలు",
      category: "Events",
      date: "05 Nov 2020",
      size: "6.62 MB",
      downloads: "746",
      authName: "Naraharinath Sekharamantri"
    },
    {
      id: 7,
      name: "Independence Day Report - స్వాతంత్ర్య దిన ఉత్సవ నివేదిక",
      category: "Events",
      date: "17 Aug 2020",
      size: "3.27 MB",
      downloads: "786",
      authName: "Naraharinath Sekharamantri"
    },
    // Category 1: Real Minutes of Meetings from DB
    {
      id: 8,
      name: "Minutes of Meeting - 25-07-2020",
      category: "Meetings",
      date: "25 Jul 2020",
      size: "167.81 KB",
      downloads: "552",
      authName: "Naraharinath Sekharamantri"
    },
    {
      id: 9,
      name: "Minutes of Meeting - 11-07-2020",
      category: "Meetings",
      date: "11 Jul 2020",
      size: "171.44 KB",
      downloads: "454",
      authName: "Naraharinath Sekharamantri"
    },
    {
      id: 10,
      name: "Minutes of Meeting - 04-07-2020",
      category: "Meetings",
      date: "04 Jul 2020",
      size: "172.40 KB",
      downloads: "450",
      authName: "Naraharinath Sekharamantri"
    },
    {
      id: 11,
      name: "Minutes of Meeting - 18-07-2020",
      category: "Meetings",
      date: "18 Jul 2020",
      size: "204.28 KB",
      downloads: "457",
      authName: "Naraharinath Sekharamantri"
    },
    {
      id: 12,
      name: "Minutes of Meeting - 08-08-2020",
      category: "Meetings",
      date: "08 Aug 2020",
      size: "156.27 KB",
      downloads: "433",
      authName: "Naraharinath Sekharamantri"
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
                  <span>Downloads: {doc.downloads}</span>
                </div>
              </div>
            </div>

            {/* Auditor Details & Action */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <span style={{ display: 'block', fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Author</span>
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
