import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Newspaper, Mail, Phone, ExternalLink, Award } from 'lucide-react';

const JournalistsPage = () => {
  const journalists = [
    {
      id: 1,
      name: "Sri Rama Rao Patnaik",
      role: "Senior Editor & Bureau Chief",
      outlet: "Eenadu Daily Newspaper",
      location: "Visakhapatnam, AP",
      focus: "State Politics, Regional Development, Caste Welfare Policies",
      experience: "25+ Years in Journalism",
      email: "ramarao.patnaik@example.com",
      phone: "+91 94405 11223",
      articles: "https://example.com/editorial-archive-ramarao"
    },
    {
      id: 2,
      name: "Sri Satish Kumar Patnaik",
      role: "Senior Crime Correspondent",
      outlet: "Deccan Chronicle",
      location: "Hyderabad, Telangana",
      focus: "Urban Affairs, Investigative Crime Reporting",
      experience: "15+ Years in Journalism",
      email: "satish.patnaik@example.com",
      phone: "+91 98492 55667",
      articles: "https://example.com/editorial-archive-satish"
    },
    {
      id: 3,
      name: "Smt. Arundhati Sista",
      role: "Sub-Editor & Columns Writer",
      outlet: "Sakshi Telugu Daily",
      location: "Bhubaneswar, Odisha",
      focus: "Socio-Cultural histories, Women welfare, Education reforms",
      experience: "12 Years in Journalism",
      email: "arundhati.s@example.com",
      phone: "+91 99370 77889",
      articles: ""
    },
    {
      id: 4,
      name: "Sri Ramesh Karanam",
      role: "Local Press Coordinator & Freelancer",
      outlet: "Andhra Jyothi",
      location: "Srikakulam, AP",
      focus: "Rural welfare programs, Sistakaranam community assemblies updates",
      experience: "8 Years in Journalism",
      email: "ramesh.k@example.com",
      phone: "+91 89420 54321",
      articles: ""
    }
  ];

  return (
    <PageWrapper 
      title="Media & Journalism Desk" 
      subtitle="Connecting you with editorial coordinators, regional writers, and local press coordinators from our community."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
        {journalists.map(j => (
          <div 
            key={j.id} 
            className="glass-panel" 
            style={{ 
              padding: '28px', 
              border: '1px solid var(--border)', 
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              {/* Top Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ 
                  fontSize: '0.68rem', 
                  border: '1px solid rgba(197, 160, 89, 0.45)', 
                  color: '#d4af37', 
                  padding: '2px 8px', 
                  borderRadius: '4px',
                  fontWeight: 700,
                  background: 'rgba(197, 160, 89, 0.05)'
                }}>
                  {j.experience}
                </span>
                <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem' }}>
                  <Newspaper size={14} style={{ color: 'var(--accent)' }} /> {j.outlet}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '4px' }}>
                {j.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-hover)', fontWeight: 600, marginBottom: '16px' }}>
                {j.role}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                <div>
                  <strong>Base City:</strong> {j.location}
                </div>
                <div>
                  <strong>Primary Focus:</strong> {j.focus}
                </div>
              </div>
            </div>

            {/* Actions / Contact Tray */}
            <div style={{ display: 'flex', borderTop: '1px solid var(--border)', paddingTop: '16px', gap: '16px', flexWrap: 'wrap' }}>
              <a href={`tel:${j.phone}`} style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', textDecoration: 'none' }}>
                <Phone size={14} style={{ color: 'var(--accent)' }} /> Call
              </a>
              <a href={`mailto:${j.email}`} style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', textDecoration: 'none' }}>
                <Mail size={14} style={{ color: 'var(--accent)' }} /> Email
              </a>
              {j.articles && (
                <a href={j.articles} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', textDecoration: 'none', marginLeft: 'auto' }}>
                  Publications <ExternalLink size={12} style={{ color: 'var(--accent)' }} />
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default JournalistsPage;
