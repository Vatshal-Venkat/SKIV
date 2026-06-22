import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Users, MapPin, Tag, Phone, Globe, ShieldAlert, AlertTriangle } from 'lucide-react';
import { apiService } from '../services/api';

const DirectoryPage = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGotram, setSelectedGotram] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [activeContactMember, setActiveContactMember] = useState(null);

  useEffect(() => {
    fetchDirectory();
  }, []);

  const fetchDirectory = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await apiService.getDirectory();
      setMembers(data);
    } catch (err) {
      setError("Failed to fetch community directory from database.");
    } finally {
      setLoading(false);
    }
  };

  const locations = ['All', ...new Set(members.map(m => m.location.split(',')[0].trim()))];
  const gotrams = ['All', ...new Set(members.map(m => m.gotram).filter(Boolean))];

  const filteredMembers = members.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          m.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (m.specialization && m.specialization.toLowerCase().includes(searchTerm.toLowerCase()));
                          
    const matchesGotram = selectedGotram === 'All' || m.gotram === selectedGotram;
    
    const matchesLocation = selectedLocation === 'All' || m.location.includes(selectedLocation);
    
    return matchesSearch && matchesGotram && matchesLocation;
  });


  return (
    <div className="page-container directory-page" style={{ maxWidth: 'var(--content-max-width)', margin: '40px auto', padding: '0 var(--space-6) var(--space-10)' }}>
      {/* Header navigation */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <button 
          onClick={() => navigate('/')} 
          className="btn btn-secondary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.9rem', fontWeight: 700 }}
        >
          <ArrowLeft size={16} />
          Back to Homepage
        </button>
      </div>

      {/* Title */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 850, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          Community Directory
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '1rem' }}>
          Find, connect, and network with active members, professionals, and advisory board elders of the Sistakaranam community.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="glass-panel" style={{ padding: 'var(--space-5)', border: '1px solid var(--border)', marginBottom: 'var(--space-6)', display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search directory by name, profession, or expertise..." 
            className="form-input" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '44px', height: '44px', fontSize: '0.95rem' }}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {/* Gotram Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Gotram:</span>
            <select 
              className="form-input" 
              value={selectedGotram}
              onChange={e => setSelectedGotram(e.target.value)}
              style={{ height: '38px', fontSize: '0.85rem', width: '160px', padding: '0 8px', background: 'var(--bg-input)' }}
            >
              {gotrams.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          {/* Region Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Region:</span>
            <select 
              className="form-input" 
              value={selectedLocation}
              onChange={e => setSelectedLocation(e.target.value)}
              style={{ height: '38px', fontSize: '0.85rem', width: '160px', padding: '0 8px', background: 'var(--bg-input)' }}
            >
              {locations.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
          <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
          Loading directory...
        </div>
      ) : error ? (
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
          <AlertTriangle size={36} style={{ color: '#ef4444', marginBottom: '12px' }} />
          <p>{error}</p>
        </div>
      ) : filteredMembers.length === 0 ? (
        <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
          <ShieldAlert size={40} style={{ color: 'var(--text-muted)', marginBottom: '12px' }} />
          <h3>No directory matches found.</h3>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {filteredMembers.map(m => (
            <div 
              key={m.id} 
              className="glass-panel"
              style={{ 
                padding: 'var(--space-5)', 
                border: '1px solid var(--border)', 
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color var(--transition-fast)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {m.name}
                  </h3>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, background: 'var(--accent-glow)', color: 'var(--accent)', padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>
                    {m.gotram}
                  </span>
                </div>

                <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  {m.profession}
                </p>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                  <MapPin size={12} style={{ color: 'var(--text-muted)' }} />
                  {m.location}
                </p>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.55', borderTop: '1px solid var(--border)', paddingTop: '10px', marginBottom: '16px' }}>
                  <strong>Focus:</strong> {m.specialization}
                </p>
              </div>

              <div>
                <button 
                  onClick={() => setActiveContactMember(m)}
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '10px', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <Phone size={14} /> Contact Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal: Contact Details card */}
      {activeContactMember && (
        <div className="welcome-dialogue-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="glass-panel" style={{ maxWidth: '440px', width: '100%', padding: 'var(--space-6)', border: '1px solid var(--border-strong)', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px', color: 'var(--text-primary)' }}>Member Contact Card</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Verify identity when connecting to maintain security and trust.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'rgba(255,255,255,0.01)', padding: '16px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Full Name</span>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>{activeContactMember.name}</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Gotram</span>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>{activeContactMember.gotram}</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Location</span>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>{activeContactMember.location}</div>
                </div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Email Address</span>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={14} /> {activeContactMember.contact}
                </div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Phone Number</span>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={14} /> {activeContactMember.phone}
                </div>
              </div>
            </div>

            <button className="btn btn-primary" onClick={() => setActiveContactMember(null)} style={{ width: '100%', padding: '12px' }}>
              Close Card
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default DirectoryPage;
