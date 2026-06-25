import { useState, useEffect } from 'react';
import { Search, MapPin, Award, Heart, MessageSquare, Info, X, Filter } from 'lucide-react';
import { apiService } from '../services/api';

const MatrimonyPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [requestEmail, setRequestEmail] = useState('');
  const [requestStatus, setRequestStatus] = useState(null);
  
  // Filters state
  const [genderFilter, setGenderFilter] = useState('');
  const [gotramFilter, setGotramFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch profiles based on filters
  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      try {
        const data = await apiService.getMatrimonyProfiles({
          gender: genderFilter,
          gotram: gotramFilter,
          location: locationFilter,
          search: searchQuery
        });
        setProfiles(data);
      } catch (err) {
        console.error("Failed to load profiles", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [genderFilter, gotramFilter, locationFilter, searchQuery]);

  const handleContactRequestSubmit = async (e) => {
    e.preventDefault();
    if (!requestEmail) return;

    try {
      const response = await apiService.submitMatrimonyRequest(selectedProfile.id, requestEmail);
      setRequestStatus({ success: true, message: response.message });
      setRequestEmail('');
      setTimeout(() => {
        setRequestStatus(null);
        setSelectedProfile(null);
      }, 3000);
    } catch (err) {
      setRequestStatus({ success: false, message: "Something went wrong. Please try again." });
    }
  };

  return (
    <div className="matrimony-page page-container" style={{ padding: 'var(--space-6) var(--space-6)', maxWidth: 'var(--content-max-width)', margin: '0 auto' }}>
      {/* Page Header */}
      <div className="page-header" style={{ marginBottom: 'var(--space-8)', textAlign: 'center', position: 'relative' }}>
        <h1 className="page-title" style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
          VIVAHA VEDIKA
        </h1>
        <p className="page-subtitle" style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-2)', fontSize: '0.95rem' }}>
          Connecting hearts within the Sistakaranam fraternity. Search verified profiles.
        </p>
      </div>

      <div className="matrimony-layout" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 'var(--space-6)', alignItems: 'start' }}>
        
        {/* Filters Sidebar */}
        <aside className="filters-sidebar glass-panel" style={{ padding: 'var(--space-5)', position: 'sticky', top: 'calc(var(--navbar-height) + 20px)' }}>
          <div className="filter-header" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--border)', paddingBottom: 'var(--space-2)' }}>
            <Filter size={18} style={{ color: 'var(--accent-hover)' }} />
            <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Filter Profiles</h3>
          </div>

          <div className="filter-group" style={{ marginBottom: 'var(--space-4)' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Search</label>
            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                className="form-input" 
                placeholder="Search name, job, college..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '34px' }}
              />
            </div>
          </div>

          <div className="filter-group" style={{ marginBottom: 'var(--space-4)' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Gender</label>
            <select 
              className="form-input"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              style={{ background: 'var(--bg-input)', color: 'var(--text-primary)' }}
            >
              <option value="">All Genders</option>
              <option value="Male">Bridegrooms (Male)</option>
              <option value="Female">Brides (Female)</option>
            </select>
          </div>

          <div className="filter-group" style={{ marginBottom: 'var(--space-4)' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Gotram</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Gautama, Bharadwaja" 
              value={gotramFilter}
              onChange={(e) => setGotramFilter(e.target.value)}
            />
          </div>

          <div className="filter-group" style={{ marginBottom: 'var(--space-5)' }}>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Location</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Bangalore, Hyderabad" 
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            />
          </div>

          <button 
            className="btn btn-secondary btn-block btn-sm"
            onClick={() => {
              setGenderFilter('');
              setGotramFilter('');
              setLocationFilter('');
              setSearchQuery('');
            }}
          >
            Reset Filters
          </button>
        </aside>

        {/* Profile Lobby Grid */}
        <main className="profile-lobby">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--text-secondary)' }}>
              <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
              Loading matches...
            </div>
          ) : profiles.length === 0 ? (
            <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <Info size={40} style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-3)' }} />
              <h3>No matching profiles found</h3>
              <p style={{ fontSize: '0.85rem', marginTop: 'var(--space-2)' }}>Try adjusting your filters or search keywords.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-5)' }}>
              {profiles.map(profile => (
                <div key={profile.id} className="matrimony-card glass-panel" style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', transition: 'all var(--transition)' }}>
                  
                  {/* Avatar & Basic Info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                    <img 
                      src={profile.avatar} 
                      alt={profile.name} 
                      style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent)' }} 
                    />
                    <div>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{profile.name}</h3>
                      <p style={{ fontSize: '0.75rem', color: 'var(--accent-hover)', marginTop: '2px' }}>
                        {profile.age} Yrs • {profile.height}
                      </p>
                    </div>
                  </div>

                  {/* Profile Details List */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)', borderBottom: '1px solid var(--border)', paddingBottom: 'var(--space-4)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={14} style={{ color: 'var(--text-muted)' }} />
                      <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{profile.education}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MessageSquare size={14} style={{ color: 'var(--text-muted)' }} />
                      <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{profile.occupation} at {profile.company}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={14} style={{ color: 'var(--text-muted)' }} />
                      <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{profile.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                      <span style={{ fontSize: '0.72rem', background: 'var(--accent-subtle)', color: 'var(--accent-hover)', padding: '2px 8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--accent-glow)' }}>
                        Gotram: {profile.gotram}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    className="btn btn-primary btn-sm btn-block"
                    onClick={() => { setSelectedProfile(profile); setActivePhotoIndex(0); }}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Profile Detail Modal */}
      {selectedProfile && (
        <div className="demo-login__overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div 
            className="wedding-card-container" 
            style={{ 
              maxWidth: '860px', 
              width: '100%', 
              background: '#0c0f1d', 
              border: '1px solid rgba(197, 160, 89, 0.45)', 
              borderRadius: '24px', 
              padding: isMobile ? '24px' : '40px', 
              position: 'relative', 
              boxShadow: '0 24px 80px rgba(0,0,0,0.85), 0 0 50px rgba(197, 160, 89, 0.08)',
              overflow: 'hidden'
            }}
          >
            {/* Elegant Double Border / Frame Inset */}
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              right: '12px',
              bottom: '12px',
              border: '1px solid rgba(197, 160, 89, 0.15)',
              borderRadius: '16px',
              pointerEvents: 'none'
            }} />

            {/* Close Button */}
            <button 
              className="demo-login__close"
              onClick={() => { setSelectedProfile(null); setRequestStatus(null); }}
              style={{ 
                border: 'none', 
                background: 'rgba(197, 160, 89, 0.08)', 
                cursor: 'pointer',
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(197, 160, 89, 0.8)',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                transition: 'all 0.2s',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(197, 160, 89, 0.2)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(197, 160, 89, 0.08)';
                e.currentTarget.style.color = 'rgba(197, 160, 89, 0.8)';
              }}
            >
              <X size={18} />
            </button>

            {/* Main Content Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : '320px 1fr', 
              gap: '32px',
              position: 'relative',
              zIndex: 2
            }}>
              
              {/* Left Column: Elegant Arch Photo Frame & Gallery */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                {selectedProfile.photo_urls && selectedProfile.photo_urls.length > 0 && (
                  <div style={{ width: '100%' }}>
                    {/* Royal Arch Frame */}
                    <div style={{ 
                      width: '100%', 
                      height: isMobile ? '300px' : '390px', 
                      borderTopLeftRadius: '160px', 
                      borderTopRightRadius: '160px', 
                      borderBottomLeftRadius: '16px',
                      borderBottomRightRadius: '16px',
                      overflow: 'hidden', 
                      border: '2px solid rgba(197, 160, 89, 0.65)', 
                      position: 'relative',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
                    }}>
                      <img 
                        src={selectedProfile.photo_urls[activePhotoIndex]} 
                        alt={selectedProfile.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      {selectedProfile.photo_urls.length > 1 && (
                        <div style={{ 
                          position: 'absolute', 
                          bottom: '12px', 
                          left: '50%', 
                          transform: 'translateX(-50%)', 
                          background: 'rgba(12, 15, 29, 0.85)', 
                          padding: '3px 10px', 
                          borderRadius: '20px', 
                          color: '#d4af37', 
                          fontSize: '0.7rem', 
                          fontWeight: 700,
                          border: '1px solid rgba(197, 160, 89, 0.3)',
                          letterSpacing: '0.05em'
                        }}>
                          {activePhotoIndex + 1} / {selectedProfile.photo_urls.length}
                        </div>
                      )}
                    </div>
                    
                    {/* Gallery Thumbnails */}
                    {selectedProfile.photo_urls.length > 1 && (
                      <div style={{ display: 'flex', gap: '8px', marginTop: '12px', justifyContent: 'center', overflowX: 'auto', paddingBottom: '4px' }}>
                        {selectedProfile.photo_urls.map((url, idx) => (
                          <img
                            key={idx}
                            src={url}
                            alt={`Thumbnail ${idx + 1}`}
                            onClick={() => setActivePhotoIndex(idx)}
                            style={{
                              width: '46px',
                              height: '46px',
                              borderRadius: '8px',
                              objectFit: 'cover',
                              cursor: 'pointer',
                              border: activePhotoIndex === idx ? '2px solid #d4af37' : '2px solid transparent',
                              boxShadow: activePhotoIndex === idx ? '0 0 8px rgba(197,160,89,0.5)' : 'none',
                              opacity: activePhotoIndex === idx ? 1 : 0.5,
                              transition: 'all 0.2s'
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column: Invitation details */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                
                {/* Header Section */}
                <div>
                  <h2 style={{ 
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif", 
                    fontSize: isMobile ? '2.1rem' : '2.6rem', 
                    fontWeight: 600, 
                    color: '#d4af37', 
                    lineHeight: 1.15,
                    marginBottom: '6px'
                  }}>
                    {selectedProfile.name}
                  </h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ 
                      fontSize: '0.82rem', 
                      fontWeight: 700, 
                      letterSpacing: '0.08em', 
                      textTransform: 'uppercase', 
                      color: 'var(--text-primary)',
                      background: 'rgba(197, 160, 89, 0.1)',
                      border: '1px solid rgba(197, 160, 89, 0.25)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}>
                      {selectedProfile.gender}
                    </span>
                    <span style={{ color: 'rgba(197, 160, 89, 0.65)', fontSize: '0.85rem' }}>•</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
                      {selectedProfile.age} Years
                    </span>
                    <span style={{ color: 'rgba(197, 160, 89, 0.65)', fontSize: '0.85rem' }}>•</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
                      {selectedProfile.height}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    <MapPin size={14} style={{ color: '#d4af37' }} /> {selectedProfile.location}
                  </p>
                </div>

                {/* Elegant Separator */}
                <div style={{ 
                  height: '1px', 
                  background: 'linear-gradient(to right, rgba(197, 160, 89, 0), rgba(197, 160, 89, 0.35) 15%, rgba(197, 160, 89, 0.35) 85%, rgba(197, 160, 89, 0))', 
                  margin: '20px 0' 
                }} />

                {/* Information Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                  
                  {/* Personal Block */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <h3 style={{ fontSize: '0.85rem', color: '#d4af37', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' }}>
                      Kundali & Family
                    </h3>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Gotram</strong>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.92rem' }}>{selectedProfile.gotram}</span>
                    </div>
                  </div>

                  {/* Professional Block */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <h3 style={{ fontSize: '0.85rem', color: '#d4af37', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' }}>
                      Education & Career
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Education</strong>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.92rem' }}>{selectedProfile.education}</span>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Occupation</strong>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.92rem' }}>{selectedProfile.occupation}</span>
                      </div>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Organization</strong>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.92rem' }}>{selectedProfile.company}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Profile */}
                <div style={{ background: 'rgba(197, 160, 89, 0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(197, 160, 89, 0.12)', marginBottom: '24px' }}>
                  <strong style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', color: '#d4af37', letterSpacing: '0.08em', marginBottom: '6px' }}>About Candidate</strong>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    "{selectedProfile.bio}"
                  </p>
                </div>

                {/* Contact Request Section */}
                <div style={{ background: 'rgba(6, 182, 212, 0.02)', border: '1px solid rgba(6, 182, 212, 0.15)', padding: '20px', borderRadius: '16px' }}>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Heart size={16} style={{ color: 'var(--accent)', fill: 'rgba(6, 182, 212, 0.2)' }} /> Request Contact Details
                  </h4>
                  
                  {requestStatus ? (
                    <div style={{ 
                      padding: '12px 16px', 
                      borderRadius: '8px', 
                      background: requestStatus.success ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)', 
                      border: `1px solid ${requestStatus.success ? 'var(--success)' : 'var(--danger)'}`, 
                      color: requestStatus.success ? 'var(--success)' : 'var(--danger)', 
                      fontSize: '0.85rem', 
                      fontWeight: 500,
                      textAlign: 'center' 
                    }}>
                      {requestStatus.message}
                    </div>
                  ) : (
                    <form onSubmit={handleContactRequestSubmit} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '12px' }}>
                      <input 
                        type="email" 
                        className="form-input" 
                        placeholder="Enter your registered email ID" 
                        value={requestEmail}
                        onChange={(e) => setRequestEmail(e.target.value)}
                        required
                        style={{ 
                          flex: 1, 
                          fontSize: '0.85rem', 
                          background: 'rgba(8, 10, 16, 0.4)', 
                          border: '1px solid rgba(197, 160, 89, 0.25)',
                          borderRadius: '8px',
                          color: '#fff',
                          padding: '12px 16px'
                        }}
                      />
                      <button 
                        type="submit" 
                        className="btn btn-primary"
                        style={{ 
                          padding: '12px 24px', 
                          fontSize: '0.85rem', 
                          fontWeight: 700, 
                          borderRadius: '8px',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Submit Request
                      </button>
                    </form>
                  )}
                </div>

              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default MatrimonyPage;
