import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Search, MapPin, Phone, Mail, Award, ArrowRight } from 'lucide-react';

const FraternityPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All'); // All, Registered, Informal

  const associations = [
    {
      id: 1,
      name: "All India Sistakaranam Association (AISKA)",
      type: "Registered",
      region: "National",
      regNo: "Regd. No. 445/2012",
      president: "Sri K. Mohana Rao Patnaik",
      secretary: "Sri P. S. N. Murthy Patnaik",
      phone: "+91 94401 23456",
      email: "info@aiska.org",
      established: "2012",
      location: "Visakhapatnam, AP"
    },
    {
      id: 2,
      name: "Telangana State Sistakaranam Association",
      type: "Registered",
      region: "South",
      regNo: "Regd. No. 120/2016",
      president: "Sri D. M. K. Prasada Rao",
      secretary: "Sri G. Venkata Ramana",
      phone: "+91 98480 98765",
      email: "tg@sistakaranam.org",
      established: "2016",
      location: "Hyderabad, Telangana"
    },
    {
      id: 3,
      name: "Odisha Karan & Sistakaranam Welfare Board",
      type: "Registered",
      region: "East",
      regNo: "Regd. No. OR-8839/2014",
      president: "Sri Sarat Chandra Patnaik",
      secretary: "Sri Rabindra Kumar Pujari",
      phone: "+91 99370 12121",
      email: "odisha@sistakaranam.org",
      established: "2014",
      location: "Bhubaneswar, Odisha"
    },
    {
      id: 4,
      name: "Chennai Sistakaranam Sabha",
      type: "Registered",
      region: "South",
      regNo: "Regd. No. TN-332/1998",
      president: "Sri M. S. R. K. Prasad",
      secretary: "Sri B. Srinivasa Rao Karanam",
      phone: "+91 91760 11223",
      email: "chennai@sistakaranam.org",
      established: "1998",
      location: "Chennai, Tamil Nadu"
    },
    {
      id: 5,
      name: "Karnataka Sistakaranam Association",
      type: "Registered",
      region: "South",
      regNo: "Regd. No. KA-1029/2021",
      president: "Sri Venkat Rao Patnaik",
      secretary: "Sri R. K. Ganesh",
      phone: "+91 96630 55443",
      email: "blr@sistakaranam.org",
      established: "2021",
      location: "Bengaluru, Karnataka"
    },
    {
      id: 6,
      name: "Vizianagaram Mandala Sistakaranam Sangham",
      type: "Registered",
      region: "South",
      regNo: "Regd. No. VZM-82/1985",
      president: "Sri Potnuru Appala Naidu",
      secretary: "Sri Potnuru Narasinga Rao",
      phone: "+91 89222 34455",
      email: "vzm@sistakaranam.org",
      established: "1985",
      location: "Vizianagaram, AP"
    }
  ];

  const informalGroups = [
    {
      id: 1,
      name: "Kalam Snehithulu (Telugu Writers & Poets)",
      purpose: "Preserving Sistakaranam literature, organizing monthly poetry events, and digital publications.",
      members: "45 active members",
      lead: "Dr. Radha Patnaik (Vizag)",
      link: "https://chat.whatsapp.com/example-kalam"
    },
    {
      id: 2,
      name: "Bengaluru Karanalu Network",
      purpose: "Social meetup group for tech professionals and families settled in Bengaluru.",
      members: "180+ members",
      lead: "Vinay Patnaik",
      link: "https://chat.whatsapp.com/example-blr"
    },
    {
      id: 3,
      name: "Sistakaranam Business Leaders Forum",
      purpose: "B2B referral and support network for business owners and consultants.",
      members: "90+ corporate owners",
      lead: "Prasad Patnaik (Bhubaneswar)",
      link: "https://t.me/example-business"
    }
  ];

  const filteredAssociations = associations.filter(assoc => {
    const matchesSearch = assoc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          assoc.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || selectedFilter === 'Registered';
    return matchesSearch && matchesFilter;
  });

  return (
    <PageWrapper 
      title="Our Fraternity" 
      subtitle="Connecting Sistakaranams globally across 13 regional bodies and cultural circles."
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
          {['All', 'Registered Associations', 'Informal Circles'].map((filter) => {
            const shortFilter = filter.split(' ')[0];
            const isActive = selectedFilter === shortFilter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(shortFilter)}
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
                {filter}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text"
            placeholder="Search association..."
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

      {/* Registered Associations Block */}
      {selectedFilter !== 'Informal' && (
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.25rem', color: '#d4af37', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid rgba(197, 160, 89, 0.15)', paddingBottom: '6px' }}>
            Registered Associations
          </h2>
          {filteredAssociations.length === 0 ? (
            <div style={{ color: 'var(--text-secondary)', padding: '24px', textAlign: 'center' }}>No registered associations found.</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
              {filteredAssociations.map(assoc => (
                <div key={assoc.id} className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.2s' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.7rem', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent)', border: '1px solid rgba(6, 182, 212, 0.25)', padding: '2px 8px', borderRadius: '4px', fontWeight: 700, letterSpacing: '0.05em' }}>
                        {assoc.regNo}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Estd. {assoc.established}</span>
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: '1.4' }}>
                      {assoc.name}
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={14} style={{ color: 'var(--accent)' }} />
                        <span>{assoc.location}</span>
                      </div>
                      <div style={{ borderTop: '1px dashed var(--border)', margin: '8px 0', paddingSelf: '4px' }}></div>
                      <div>
                        <strong>President:</strong> {assoc.president}
                      </div>
                      <div>
                        <strong>Secretary:</strong> {assoc.secretary}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a 
                      href={`tel:${assoc.phone.replace(/\s+/g, '')}`} 
                      className="btn btn-outline btn-sm" 
                      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem' }}
                    >
                      <Phone size={12} /> Call
                    </a>
                    <a 
                      href={`mailto:${assoc.email}`} 
                      className="btn btn-secondary btn-sm" 
                      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem' }}
                    >
                      <Mail size={12} /> Email
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Informal Circles Section */}
      {selectedFilter !== 'Registered' && (
        <section>
          <h2 style={{ fontSize: '1.25rem', color: '#d4af37', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid rgba(197, 160, 89, 0.15)', paddingBottom: '6px' }}>
            Informal Circles & Special Groups
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
            {informalGroups.map(group => (
              <div key={group.id} className="glass-panel" style={{ padding: '24px', border: '1px solid var(--border)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    {group.name}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    <strong>Coordinator:</strong> {group.lead} • {group.members}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                    {group.purpose}
                  </p>
                </div>

                <a 
                  href={group.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.82rem', width: '100%' }}
                >
                  Join Community Circle <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>
      )}
    </PageWrapper>
  );
};

export default FraternityPage;
