import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Search, Download, FileCheck, ShieldAlert, Award } from 'lucide-react';

const GovNotificationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All');

  const notifications = [
    {
      id: 1,
      title: "G.O. Ms No. 13 Department of BC Welfare (Andhra Pradesh)",
      state: "Andhra Pradesh",
      date: "12-05-1997",
      dept: "Department of Backward Classes Welfare",
      regNo: "G.O.Ms.No. 13",
      summary: [
        "Formally declares the Sistakaranam community under the Backward Classes Group-D (BC-D) category.",
        "Allows educational reservations in all state board institutes and colleges.",
        "Authorizes employment reservations in AP state government offices and public sector units."
      ]
    },
    {
      id: 2,
      title: "G.O. Ms No. 24 Welfare of Backward Classes (Telangana State)",
      state: "Telangana",
      date: "02-06-2014",
      dept: "Welfare of Backward Classes Department",
      regNo: "G.O.Ms.No. 24",
      summary: [
        "Confirms caste status validation post-bifurcation of states.",
        "Sistakaranam community continues to receive BC-D category recognition in Telangana state boundaries.",
        "Specifies local candidate criteria and certification procedures."
      ]
    },
    {
      id: 3,
      title: "Central Gazette Notification on Backward Class List Updates",
      state: "Central",
      date: "21-09-2004",
      dept: "Ministry of Social Justice and Empowerment (Government of India)",
      regNo: "No. 12011/68/93-BCC(C)",
      summary: [
        "Confirms inclusion criteria and updates on Central OBC lists.",
        "Provides guidelines on the Non-Creamy Layer (NCL) certificate rules for central jobs and UPSC admissions."
      ]
    }
  ];

  const filteredNotifications = notifications.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.dept.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = selectedState === 'All' || item.state === selectedState;
    return matchesSearch && matchesState;
  });

  return (
    <PageWrapper 
      title="Government Notifications" 
      subtitle="Reference repository of official Government Orders (G.O.s) and gazettes issued by AP, Telangana, and Central authorities."
    >
      {/* Search and Filters Bar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '32px',
        background: 'rgba(21, 25, 38, 0.4)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '16px 24px'
      }}>
        {/* Pills */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {['All', 'Andhra Pradesh', 'Telangana', 'Central'].map((state) => {
            const isActive = selectedState === state;
            return (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '30px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
                  background: isActive ? 'var(--accent-glow)' : 'transparent',
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  transition: 'all 0.25s'
                }}
              >
                {state}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text"
            placeholder="Search gazette or G.O..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 16px 10px 38px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--bg-input)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem'
            }}
          />
        </div>
      </div>

      {/* Gazette List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredNotifications.map(item => (
          <div 
            key={item.id} 
            className="glass-panel" 
            style={{ 
              padding: '28px', 
              border: '1px solid var(--border)', 
              borderRadius: '16px',
              position: 'relative'
            }}
          >
            {/* Tag / Icon Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ 
                fontSize: '0.7rem', 
                border: '1px solid var(--accent)', 
                color: 'var(--accent)', 
                padding: '2px 8px', 
                borderRadius: '4px',
                fontWeight: 700,
                background: 'rgba(6, 182, 212, 0.05)',
                letterSpacing: '0.05em'
              }}>
                {item.regNo}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Date: {item.date}</span>
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '8px', lineHeight: '1.4' }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#d4af37', fontWeight: 600, marginBottom: '16px' }}>
              Issued by: {item.dept}
            </p>

            <div style={{ background: 'rgba(255,255,255,0.01)', padding: '16px 20px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.03)', marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileCheck size={14} style={{ color: 'var(--accent)' }} /> G.O. Provisions & Impact
              </h4>
              <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                {item.summary.map((point, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => alert("Gazette PDF download started.")}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', padding: '10px 18px' }}
              >
                <Download size={14} /> Download Official Gazette (PDF)
              </button>
              <button 
                className="btn btn-outline btn-sm"
                onClick={() => alert("Verification link copied.")}
                style={{ fontSize: '0.82rem', padding: '10px 18px' }}
              >
                Copy Reference Link
              </button>
            </div>

          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default GovNotificationsPage;
