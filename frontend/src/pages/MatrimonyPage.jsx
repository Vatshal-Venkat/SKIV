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
        <div className="demo-login__overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="demo-login__card" style={{ maxWidth: '520px', width: '90%', position: 'relative' }}>
            <button 
              className="demo-login__close"
              onClick={() => { setSelectedProfile(null); setRequestStatus(null); }}
              style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            {/* Photo Gallery (JeevanSaathi / Hinge style) */}
            {selectedProfile.photo_urls && selectedProfile.photo_urls.length > 0 && (
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <div style={{ width: '100%', height: '280px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border)', position: 'relative' }}>
                  <img 
                    src={selectedProfile.photo_urls[activePhotoIndex]} 
                    alt={selectedProfile.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  {selectedProfile.photo_urls.length > 1 && (
                    <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.6)', padding: '2px 8px', borderRadius: '10px', color: '#fff', fontSize: '0.68rem', fontWeight: 600 }}>
                      {activePhotoIndex + 1} / {selectedProfile.photo_urls.length}
                    </div>
                  )}
                </div>
                {/* Thumbnails */}
                {selectedProfile.photo_urls.length > 1 && (
                  <div style={{ display: 'flex', gap: '8px', marginTop: '8px', overflowX: 'auto', paddingBottom: '6px' }}>
                    {selectedProfile.photo_urls.map((url, idx) => (
                      <img
                        key={idx}
                        src={url}
                        alt={`Thumbnail ${idx + 1}`}
                        onClick={() => setActivePhotoIndex(idx)}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: 'var(--radius-sm)',
                          objectFit: 'cover',
                          cursor: 'pointer',
                          border: activePhotoIndex === idx ? '2px solid var(--accent)' : '2px solid transparent',
                          opacity: activePhotoIndex === idx ? 1 : 0.6,
                          transition: 'all 0.2s'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Header info */}
            <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
              <div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 700 }}>{selectedProfile.name}</h2>
                <p style={{ color: 'var(--accent-hover)', fontSize: '0.85rem', fontWeight: 600 }}>
                  {selectedProfile.gender} • {selectedProfile.age} Years • {selectedProfile.height}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <MapPin size={12} /> {selectedProfile.location}
                </p>
              </div>
            </div>

            {/* Details */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: 'var(--space-5)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Gotram</strong>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedProfile.gotram}</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Education</strong>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedProfile.education}</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Occupation</strong>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedProfile.occupation}</span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Organization</strong>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{selectedProfile.company}</span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '10px' }}>
                <strong style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>About</strong>
                <p style={{ lineHeight: '1.45' }}>"{selectedProfile.bio}"</p>
              </div>
            </div>

            {/* Contact Request Form */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--space-4)' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Heart size={14} style={{ color: 'var(--accent)' }} /> Request Contact Details
              </h4>
              
              {requestStatus ? (
                <div style={{ padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: requestStatus.success ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', border: `1px solid ${requestStatus.success ? 'var(--success)' : 'var(--danger)'}`, color: requestStatus.success ? 'var(--success)' : 'var(--danger)', fontSize: '0.8rem', textAlign: 'center' }}>
                  {requestStatus.message}
                </div>
              ) : (
                <form onSubmit={handleContactRequestSubmit} style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="Enter your registered email ID" 
                    value={requestEmail}
                    onChange={(e) => setRequestEmail(e.target.value)}
                    required
                    style={{ flex: 1, fontSize: '0.8rem' }}
                  />
                  <button type="submit" className="btn btn-primary btn-sm">
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatrimonyPage;
