import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Search, Info, MapPin } from 'lucide-react';

const IdentitiesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState('All');
  const [selectedGotram, setSelectedGotram] = useState('Atreya');

  const alphabet = ["All", "B", "C", "G", "H", "K", "L", "M", "N", "P", "S", "T", "V"];

  const surnames = [
    { id: 1, name: "Patnaik", telugu: "పట్నాయక్", gotram: "Atreya" },
    { id: 2, name: "Potnuru", telugu: "పొట్నూరు", gotram: "Bharadwaja" },
    { id: 3, name: "Pujari", telugu: "పూజారి", gotram: "Atreya" },
    { id: 4, name: "Pradhan", telugu: "ప్రధాన్", gotram: "Atreya" },
    { id: 5, name: "Behara", telugu: "బెహరా", gotram: "Koundinya" },
    { id: 6, name: "Garnik", telugu: "గర్నిక్", gotram: "Gautama" },
    { id: 7, name: "Karanam", telugu: "కరణం", gotram: "Srivatsa" },
    { id: 8, name: "Mahanthi", telugu: "మహంతి", gotram: "Kasyapa" },
    { id: 9, name: "Locherla", telugu: "లోచర్ల", gotram: "Sandhyla" },
    { id: 10, name: "Sista", telugu: "శిష్టా", gotram: "Bharadwaja" },
    { id: 11, name: "Simhadri", telugu: "సింహాద్రి", gotram: "Kasyapa" },
    { id: 12, name: "Talluri", telugu: "తల్లూరి", gotram: "Angirasa" },
    { id: 13, name: "Vadrevu", telugu: "వాడ్రేవు", gotram: "Angirasa" }
  ];

  const gotramDetails = {
    "Atreya": {
      sage: "Sage Atri",
      origin: "Rig Vedic lineage, representing cosmic wisdom, light, and balance.",
      associatedSurnames: ["Patnaik", "Pujari", "Pradhan"]
    },
    "Bharadwaja": {
      sage: "Sage Bharadwaja",
      origin: "Representing scholarship, design, and administrative expertise in Vedic assemblies.",
      associatedSurnames: ["Potnuru", "Sista"]
    },
    "Koundinya": {
      sage: "Sage Koundinya",
      origin: "Kaundinya gotram, famous for royal scribes and administrators.",
      associatedSurnames: ["Behara"]
    },
    "Gautama": {
      sage: "Sage Gautama",
      origin: "Representing logic, astronomy, and judicial counseling.",
      associatedSurnames: ["Garnik"]
    },
    "Srivatsa": {
      sage: "Sage Srivatsa",
      origin: "Mark of wealth and fortune, lineage of high royal advisors.",
      associatedSurnames: ["Karanam"]
    },
    "Kasyapa": {
      sage: "Sage Kasyapa",
      origin: "Universal father of creation, representing harmony and adaptability.",
      associatedSurnames: ["Mahanthi", "Simhadri"]
    },
    "Angirasa": {
      sage: "Sage Angiras",
      origin: "Lineage of spiritual flame and intellect.",
      associatedSurnames: ["Talluri", "Vadrevu"]
    },
    "Sandhyla": {
      sage: "Sage Sandilya",
      origin: "Representing fire rituals, absolute devotion, and administrative guidance.",
      associatedSurnames: ["Locherla"]
    }
  };

  const filteredSurnames = surnames.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.telugu.includes(searchQuery);
    const matchesLetter = activeLetter === 'All' || item.name.startsWith(activeLetter);
    return matchesSearch && matchesLetter;
  });

  return (
    <PageWrapper 
      title="Surnames & Gotrams Index" 
      subtitle="Search and verify the relationships between community family surnames and Gotram sage ancestries."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
        
        {/* Left Column: Surnames Dictionary */}
        <div className="glass-panel" style={{ padding: '28px', border: '1px solid var(--border)', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#d4af37', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '16px' }}>
            Surnames Dictionary
          </h3>

          {/* Search bar */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text"
              placeholder="Search surname (e.g. Patnaik)..."
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

          {/* Letter Index filter strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
            {alphabet.map(letter => {
              const isActive = activeLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => setActiveLetter(letter)}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: isActive ? 'var(--accent-glow)' : 'transparent',
                    border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                    transition: 'all 0.2s',
                    padding: 0
                  }}
                >
                  {letter}
                </button>
              );
            })}
          </div>

          {/* Dictionary Results List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '360px', overflowY: 'auto', paddingRight: '4px' }} className="wedding-card-scroll">
            {filteredSurnames.length === 0 ? (
              <div style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '20px 0' }}>No matching surnames found.</div>
            ) : (
              filteredSurnames.map(item => (
                <div 
                  key={item.id} 
                  style={{ 
                    padding: '14px 18px', 
                    background: 'rgba(255,255,255,0.01)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{item.name}</strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginLeft: '8px' }}>({item.telugu})</span>
                  </div>
                  <span style={{ 
                    fontSize: '0.72rem', 
                    background: 'rgba(197, 160, 89, 0.1)', 
                    color: '#d4af37', 
                    border: '1px solid rgba(197, 160, 89, 0.25)', 
                    padding: '2px 8px', 
                    borderRadius: '4px',
                    fontWeight: 700
                  }}>
                    Gotram: {item.gotram}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Gotrams Mapper Panel */}
        <div className="glass-panel" style={{ padding: '28px', border: '1px solid var(--border)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#d4af37', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '16px' }}>
              Gotrams Sage Mapper
            </h3>

            {/* Select Gotram Dropdown */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 700 }}>Select Sage / Gotram</label>
              <select 
                value={selectedGotram}
                onChange={(e) => setSelectedGotram(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-input)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  outline: 'none'
                }}
              >
                {Object.keys(gotramDetails).map(g => (
                  <option key={g} value={g}>{g} Gotram</option>
                ))}
              </select>
            </div>

            {/* Sage Details Card */}
            {selectedGotram && gotramDetails[selectedGotram] && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: 'rgba(6, 182, 212, 0.02)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(6, 182, 212, 0.12)' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Root Ancestry</span>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginTop: '2px', marginBottom: '8px' }}>
                    {gotramDetails[selectedGotram].sage}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {gotramDetails[selectedGotram].origin}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: 700 }}>Mapped Surnames</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {gotramDetails[selectedGotram].associatedSurnames.map(surname => (
                      <span 
                        key={surname}
                        style={{ 
                          fontSize: '0.82rem', 
                          background: 'rgba(255, 255, 255, 0.02)', 
                          border: '1px solid var(--border)', 
                          color: 'var(--text-primary)', 
                          padding: '6px 14px', 
                          borderRadius: '8px',
                          fontWeight: 600
                        }}
                      >
                        {surname}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '24px' }}>
            <Info size={14} style={{ color: 'var(--accent)' }} />
            <span>Exogamous marriages within the same Gotram are prohibited under custom.</span>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
};

export default IdentitiesPage;
