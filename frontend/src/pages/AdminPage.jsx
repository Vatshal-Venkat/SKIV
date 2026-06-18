import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, Search, Edit2, Trash2, ShieldAlert, Check, X, 
  Upload, UserCheck, FileText, ChevronRight, RefreshCw, AlertCircle
} from 'lucide-react';
import { apiService } from '../services/api';

const AdminPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('matrimony'); // 'matrimony' | 'news'
  const [currentUser, setCurrentUser] = useState(null);
  
  // Loading & Error states
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Data lists
  const [profiles, setProfiles] = useState([]);
  const [news, setNews] = useState([]);
  
  // Search states
  const [profileSearch, setProfileSearch] = useState('');
  const [newsSearch, setNewsSearch] = useState('');
  
  // Editor/Modal states
  const [activeProfileEditor, setActiveProfileEditor] = useState(null); // null | 'add' | profile_object
  const [activeNewsEditor, setActiveNewsEditor] = useState(null); // null | 'add' | news_object
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); // null | { type: 'profile'|'news', id: number, name: string }

  // Form states - Matrimony Profile
  const [profileForm, setProfileForm] = useState({
    name: '',
    surname: '',
    gender: 'Male',
    dob: '',
    height: "5'5\"",
    gotram: '',
    education: '',
    occupation: '',
    organisation: '',
    workplace: '',
    contact: '',
    preference: '',
    remarks: '',
    photo_url_1: ''
  });

  // Form states - News Article
  const [newsForm, setNewsForm] = useState({
    title: '',
    summary: '',
    body: '',
    category: 'General',
    thumbnail_url: ''
  });

  // Check authentication & load initial data
  useEffect(() => {
    const user = apiService.getCurrentUser();
    if (!user || !user.is_admin) {
      setCurrentUser(null);
      setLoading(false);
      return;
    }
    setCurrentUser(user);
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const profileData = await apiService.getMatrimonyProfiles();
      const newsData = await apiService.getNewsArticles();
      setProfiles(profileData);
      setNews(newsData);
    } catch (err) {
      setErrorMsg('Failed to load database records. Please make sure the backend server is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    setActionLoading(true);
    setErrorMsg('');
    try {
      const response = await apiService.uploadPhoto(file);
      if (type === 'profile') {
        setProfileForm(prev => ({ ...prev, photo_url_1: response.url }));
      } else if (type === 'news') {
        setNewsForm(prev => ({ ...prev, thumbnail_url: response.url }));
      }
    } catch (err) {
      setErrorMsg(err.message || 'Image upload failed. Please verify size and format.');
    } finally {
      setActionLoading(false);
    }
  };

  // Matrimony Profile CRUD Handlers
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    setErrorMsg('');
    
    try {
      if (activeProfileEditor === 'add') {
        await apiService.createProfile(profileForm);
      } else {
        await apiService.updateProfile(activeProfileEditor.id, profileForm);
      }
      setActiveProfileEditor(null);
      await fetchData();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to save profile. Please check that all mandatory fields are valid.');
    } finally {
      setActionLoading(false);
    }
  };

  const openProfileEditor = (profile = null) => {
    setErrorMsg('');
    if (!profile) {
      // Add mode
      setProfileForm({
        name: '',
        surname: '',
        gender: 'Male',
        dob: '',
        height: "5'5\"",
        gotram: '',
        education: '',
        occupation: '',
        organisation: '',
        workplace: '',
        contact: '',
        preference: '',
        remarks: '',
        photo_url_1: ''
      });
      setActiveProfileEditor('add');
    } else {
      // Edit mode
      setProfileForm({
        name: profile.name.split(' ')[0] || '',
        surname: profile.name.split(' ').slice(1).join(' ') || '',
        gender: profile.gender || 'Male',
        dob: profile.dob || '',
        height: profile.height || "5'5\"",
        gotram: profile.gotram || '',
        education: profile.education || '',
        occupation: profile.occupation || '',
        organisation: profile.company || '',
        workplace: profile.location || '',
        contact: profile.contactEmail || '',
        preference: profile.bio || '',
        remarks: profile.remarks || '',
        photo_url_1: profile.avatar || ''
      });
      setActiveProfileEditor(profile);
    }
  };

  // News Article CRUD Handlers
  const handleNewsSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    setErrorMsg('');

    try {
      if (activeNewsEditor === 'add') {
        await apiService.createNewsArticle(newsForm);
      } else {
        await apiService.updateNewsArticle(activeNewsEditor.id, newsForm);
      }
      setActiveNewsEditor(null);
      await fetchData();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to save news article.');
    } finally {
      setActionLoading(false);
    }
  };

  const openNewsEditor = (article = null) => {
    setErrorMsg('');
    if (!article) {
      // Add mode
      setNewsForm({
        title: '',
        summary: '',
        body: '',
        category: 'General',
        thumbnail_url: ''
      });
      setActiveNewsEditor('add');
    } else {
      // Edit mode
      setNewsForm({
        title: article.title || '',
        summary: article.excerpt || '',
        body: article.content || '',
        category: article.category || 'General',
        thumbnail_url: article.images && article.images[0] ? article.images[0] : ''
      });
      setActiveNewsEditor(article);
    }
  };

  // Delete Confirmation Handlers
  const triggerDeleteCheck = (type, item) => {
    const name = type === 'profile' ? item.name : item.title;
    setDeleteConfirmation({ type, id: item.id, name });
  };

  const executeDelete = async () => {
    if (!deleteConfirmation) return;
    const { type, id } = deleteConfirmation;
    
    setActionLoading(true);
    setErrorMsg('');
    try {
      if (type === 'profile') {
        await apiService.deleteProfile(id);
      } else {
        await apiService.deleteNewsArticle(id);
      }
      setDeleteConfirmation(null);
      await fetchData();
    } catch (err) {
      setErrorMsg(`Failed to delete ${type}. Please try again.`);
    } finally {
      setActionLoading(false);
    }
  };

  // Access Control Guard Screen
  if (!loading && !currentUser) {
    return (
      <div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 150px)' }}>
        <div className="glass-panel" style={{ maxWidth: '480px', padding: 'var(--space-8)', textAlign: 'center', border: '1px solid var(--border-strong)' }}>
          <ShieldAlert size={64} style={{ color: '#ff4d4d', margin: '0 auto var(--space-4)' }} />
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>ACCESS DENIED</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: 'var(--space-6)' }}>
            This portal is restricted to authorized administrators. If you possess administrative credentials, please sign in.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/')} style={{ padding: '12px 24px', fontSize: '1rem' }}>
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  // Filtered lists
  const filteredProfiles = profiles.filter(p => 
    p.name.toLowerCase().includes(profileSearch.toLowerCase()) ||
    p.gotram.toLowerCase().includes(profileSearch.toLowerCase()) ||
    p.location.toLowerCase().includes(profileSearch.toLowerCase())
  );

  const filteredNews = news.filter(n => 
    n.title.toLowerCase().includes(newsSearch.toLowerCase()) ||
    n.content.toLowerCase().includes(newsSearch.toLowerCase())
  );

  return (
    <div className="admin-page page-container" style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: 'var(--space-6)' }}>
      
      {/* Title Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-8)', borderBottom: '1px solid var(--border)', paddingBottom: 'var(--space-4)' }}>
        <div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 850, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            Control Dashboard
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '1rem' }}>
            Elderly-Accessible Administration Suite for SKIV Portal
          </p>
        </div>
        <button 
          onClick={fetchData} 
          className="btn btn-secondary" 
          disabled={loading}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', fontSize: '1rem' }}
        >
          <RefreshCw size={18} className={loading ? 'spin' : ''} />
          Reload Database
        </button>
      </div>

      {/* Error Feedback Banner */}
      {errorMsg && (
        <div className="error-banner" style={{ background: 'rgba(255, 77, 77, 0.1)', border: '1px solid rgba(255, 77, 77, 0.25)', padding: 'var(--space-4) var(--space-5)', borderRadius: 'var(--radius-md)', display: 'flex', gap: '12px', alignItems: 'center', color: '#ff6666', marginBottom: 'var(--space-6)', fontSize: '1.05rem' }}>
          <AlertCircle size={24} style={{ flexShrink: 0 }} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Primary Navigation Tabs */}
      <div className="admin-tabs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
        <button 
          onClick={() => { setActiveTab('matrimony'); setActiveProfileEditor(null); }}
          className={`tab-btn ${activeTab === 'matrimony' ? 'active' : ''}`}
          style={{
            padding: '20px 24px',
            fontSize: '1.2rem',
            fontWeight: 800,
            borderRadius: 'var(--radius-lg)',
            border: activeTab === 'matrimony' ? '2px solid var(--accent)' : '1px solid var(--border)',
            background: activeTab === 'matrimony' ? 'var(--accent-glow)' : 'transparent',
            color: activeTab === 'matrimony' ? 'var(--accent)' : 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            boxShadow: activeTab === 'matrimony' ? '0 0 15px var(--accent-glow)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          <UserCheck size={24} />
          Matrimony Profiles ({profiles.length})
        </button>
        <button 
          onClick={() => { setActiveTab('news'); setActiveNewsEditor(null); }}
          className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
          style={{
            padding: '20px 24px',
            fontSize: '1.2rem',
            fontWeight: 800,
            borderRadius: 'var(--radius-lg)',
            border: activeTab === 'news' ? '2px solid var(--accent)' : '1px solid var(--border)',
            background: activeTab === 'news' ? 'var(--accent-glow)' : 'transparent',
            color: activeTab === 'news' ? 'var(--accent)' : 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            boxShadow: activeTab === 'news' ? '0 0 15px var(--accent-glow)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          <FileText size={24} />
          Community News Feed ({news.length})
        </button>
      </div>

      {/* ============================================================
          TAB: MATRIMONY PROFILES
         ============================================================ */}
      {activeTab === 'matrimony' && (
        <div className="tab-pane">
          
          {/* Default List View */}
          {!activeProfileEditor && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              
              {/* Header Search & Create row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
                  <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input 
                    type="text" 
                    placeholder="Search profiles by name, Gotram, location..." 
                    className="form-input" 
                    value={profileSearch}
                    onChange={(e) => setProfileSearch(e.target.value)}
                    style={{ paddingLeft: '48px', height: '48px', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }}
                  />
                </div>
                
                <button 
                  onClick={() => openProfileEditor()}
                  className="btn btn-primary"
                  style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px', fontSize: '1.1rem', fontWeight: 700 }}
                >
                  <Plus size={20} />
                  Add New Matrimony Profile
                </button>
              </div>

              {/* Loader */}
              {loading ? (
                <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-secondary)' }}>
                  <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
                  Loading profiles...
                </div>
              ) : filteredProfiles.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
                  <AlertCircle size={40} style={{ color: 'var(--text-muted)', marginBottom: '10px' }} />
                  <h3>No matches found in your database.</h3>
                </div>
              ) : (
                /* Profile Rows */
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {filteredProfiles.map(p => (
                    <div 
                      key={p.id} 
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'auto 1fr auto', 
                        alignItems: 'center', 
                        gap: '20px', 
                        padding: '16px 20px', 
                        background: 'rgba(255, 255, 255, 0.02)', 
                        border: '1px solid var(--border)', 
                        borderRadius: 'var(--radius-md)', 
                        transition: 'background var(--transition-fast)'
                      }}
                    >
                      <img 
                        src={p.avatar} 
                        alt={p.name} 
                        style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-strong)' }}
                      />
                      <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>{p.name}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                          {p.gender} • Gotram: <strong>{p.gotram}</strong> • Location: <strong>{p.location}</strong>
                        </p>
                      </div>
                      
                      {/* Action buttons (Large and clear) */}
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                          onClick={() => openProfileEditor(p)}
                          className="btn btn-secondary btn-sm"
                          style={{ borderColor: '#3b82f6', color: '#60a5fa', padding: '10px 18px', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button 
                          onClick={() => triggerDeleteCheck('profile', p)}
                          className="btn btn-outline btn-sm"
                          style={{ borderColor: '#ef4444', color: '#f87171', padding: '10px 18px', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Form Editor Panel */}
          {activeProfileEditor && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 'var(--space-5)', color: 'var(--text-primary)' }}>
                {activeProfileEditor === 'add' ? 'Create Matrimony Profile' : `Edit Profile: ${activeProfileEditor.name}`}
              </h2>
              
              <form onSubmit={handleProfileSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                
                {/* Visual Section: Avatar and Photo upload */}
                <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', background: 'rgba(255,255,255,0.01)' }}>
                  <img 
                    src={profileForm.photo_url_1 || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'} 
                    alt="Upload Preview"
                    style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent)' }}
                  />
                  <div>
                    <label style={{ display: 'block', fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Profile Photo</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <input 
                        type="file" 
                        id="profile-photo-upload" 
                        accept="image/*"
                        onChange={(e) => handlePhotoUpload(e, 'profile')}
                        style={{ display: 'none' }}
                      />
                      <label 
                        htmlFor="profile-photo-upload" 
                        className="btn btn-secondary"
                        style={{ padding: '12px 20px', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        <Upload size={16} />
                        Choose Photo File
                      </label>
                      {profileForm.photo_url_1 && <span style={{ color: '#22c55e', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}><Check size={16} /> Uploaded</span>}
                    </div>
                  </div>
                </div>

                {/* Single-Column Sequential Form Fields (Elderly-Friendly Grid) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>First Name / Name *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={profileForm.name} 
                      onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Surname *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={profileForm.surname} 
                      onChange={(e) => setProfileForm({...profileForm, surname: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Gender</label>
                    <select 
                      className="form-input" 
                      value={profileForm.gender} 
                      onChange={(e) => setProfileForm({...profileForm, gender: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem', background: 'var(--bg-input)' }}
                    >
                      <option value="Male">Male (Bridegroom)</option>
                      <option value="Female">Female (Bride)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Date of Birth (e.g. DD/MM/YYYY) *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. 24/08/1995"
                      value={profileForm.dob} 
                      onChange={(e) => setProfileForm({...profileForm, dob: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Gotram *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Bharadwaja, Gautama"
                      value={profileForm.gotram} 
                      onChange={(e) => setProfileForm({...profileForm, gotram: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Height (e.g. 5'7\")</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={profileForm.height} 
                      onChange={(e) => setProfileForm({...profileForm, height: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Education Details</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={profileForm.education} 
                      onChange={(e) => setProfileForm({...profileForm, education: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Occupation / Job Title</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={profileForm.occupation} 
                      onChange={(e) => setProfileForm({...profileForm, occupation: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Organisation / Company Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={profileForm.organisation} 
                      onChange={(e) => setProfileForm({...profileForm, organisation: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Workplace Location (City) *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Bangalore, Mumbai"
                      value={profileForm.workplace} 
                      onChange={(e) => setProfileForm({...profileForm, workplace: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Contact Details (Email/Phone) *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={profileForm.contact} 
                      onChange={(e) => setProfileForm({...profileForm, contact: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>

                </div>

                <div className="form-group">
                  <label style={{ fontSize: '1rem', fontWeight: 700 }}>Partner Preference Requirements</label>
                  <textarea 
                    className="form-input" 
                    rows={4}
                    value={profileForm.preference} 
                    onChange={(e) => setProfileForm({...profileForm, preference: e.target.value})}
                    style={{ fontSize: '1.05rem', padding: '12px' }}
                  />
                </div>

                <div className="form-group">
                  <label style={{ fontSize: '1rem', fontWeight: 700 }}>Admin Remarks / Notes</label>
                  <textarea 
                    className="form-input" 
                    rows={2}
                    value={profileForm.remarks} 
                    onChange={(e) => setProfileForm({...profileForm, remarks: e.target.value})}
                    style={{ fontSize: '1.05rem', padding: '12px' }}
                  />
                </div>

                {/* Submits row */}
                <div style={{ display: 'flex', gap: '15px', marginTop: '10px', flexWrap: 'wrap' }}>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={actionLoading}
                    style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 800 }}
                  >
                    <Check size={20} />
                    {activeProfileEditor === 'add' ? 'Save and Publish Profile' : 'Save Profile Changes'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveProfileEditor(null)}
                    className="btn btn-outline"
                    style={{ borderColor: 'var(--border-strong)', color: 'var(--text-secondary)', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 700 }}
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </div>
          )}

        </div>
      )}

      {/* ============================================================
          TAB: NEWS / CMS
         ============================================================ */}
      {activeTab === 'news' && (
        <div className="tab-pane">
          
          {/* Default List View */}
          {!activeNewsEditor && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              
              {/* Header Search & Create row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
                  <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input 
                    type="text" 
                    placeholder="Search articles by title or keyword..." 
                    className="form-input" 
                    value={newsSearch}
                    onChange={(e) => setNewsSearch(e.target.value)}
                    style={{ paddingLeft: '48px', height: '48px', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }}
                  />
                </div>
                
                <button 
                  onClick={() => openNewsEditor()}
                  className="btn btn-primary"
                  style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px', fontSize: '1.1rem', fontWeight: 700 }}
                >
                  <Plus size={20} />
                  Add New News Article
                </button>
              </div>

              {/* Loader */}
              {loading ? (
                <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-secondary)' }}>
                  <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
                  Loading articles...
                </div>
              ) : filteredNews.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
                  <AlertCircle size={40} style={{ color: 'var(--text-muted)', marginBottom: '10px' }} />
                  <h3>No news articles found in database.</h3>
                </div>
              ) : (
                /* News Rows */
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {filteredNews.map(n => (
                    <div 
                      key={n.id} 
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '100px 1fr auto', 
                        alignItems: 'center', 
                        gap: '20px', 
                        padding: '16px 20px', 
                        background: 'rgba(255, 255, 255, 0.02)', 
                        border: '1px solid var(--border)', 
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      <img 
                        src={n.images && n.images[0] ? n.images[0] : 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'} 
                        alt={n.title} 
                        style={{ width: '80px', height: '60px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', border: '1px solid var(--border-strong)' }}
                      />
                      <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>{n.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                          Category: <strong>{n.category}</strong> • Published: <strong>{n.date}</strong>
                        </p>
                      </div>
                      
                      {/* Action buttons (Large and clear) */}
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                          onClick={() => openNewsEditor(n)}
                          className="btn btn-secondary btn-sm"
                          style={{ borderColor: '#3b82f6', color: '#60a5fa', padding: '10px 18px', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button 
                          onClick={() => triggerDeleteCheck('news', n)}
                          className="btn btn-outline btn-sm"
                          style={{ borderColor: '#ef4444', color: '#f87171', padding: '10px 18px', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Form Editor Panel */}
          {activeNewsEditor && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 'var(--space-5)', color: 'var(--text-primary)' }}>
                {activeNewsEditor === 'add' ? 'Write News Article' : `Edit Article: ${activeNewsEditor.title}`}
              </h2>
              
              <form onSubmit={handleNewsSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                
                {/* Thumbnail image and file upload */}
                <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', background: 'rgba(255,255,255,0.01)' }}>
                  <img 
                    src={newsForm.thumbnail_url || 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80'} 
                    alt="Upload Preview"
                    style={{ width: '140px', height: '90px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', border: '2px solid var(--border-strong)' }}
                  />
                  <div>
                    <label style={{ display: 'block', fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Article Thumbnail Image</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <input 
                        type="file" 
                        id="news-photo-upload" 
                        accept="image/*"
                        onChange={(e) => handlePhotoUpload(e, 'news')}
                        style={{ display: 'none' }}
                      />
                      <label 
                        htmlFor="news-photo-upload" 
                        className="btn btn-secondary"
                        style={{ padding: '12px 20px', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        <Upload size={16} />
                        Choose Image File
                      </label>
                      {newsForm.thumbnail_url && <span style={{ color: '#22c55e', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}><Check size={16} /> Uploaded</span>}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontSize: '1rem', fontWeight: 700 }}>Article Title *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={newsForm.title} 
                    onChange={(e) => setNewsForm({...newsForm, title: e.target.value})}
                    style={{ height: '48px', fontSize: '1.05rem' }} 
                    required 
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Category</label>
                    <select 
                      className="form-input" 
                      value={newsForm.category} 
                      onChange={(e) => setNewsForm({...newsForm, category: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem', background: 'var(--bg-input)' }}
                    >
                      <option value="General">General / Announcements</option>
                      <option value="Events">Events</option>
                      <option value="Help">Help / Request</option>
                      <option value="Sports">Sports</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Short Summary *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Brief excerpt displayed on home feed"
                      value={newsForm.summary} 
                      onChange={(e) => setNewsForm({...newsForm, summary: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontSize: '1rem', fontWeight: 700 }}>Article Body Content *</label>
                  <textarea 
                    className="form-input" 
                    rows={10}
                    placeholder="Write the full body content of your community news update here..."
                    value={newsForm.body} 
                    onChange={(e) => setNewsForm({...newsForm, body: e.target.value})}
                    style={{ fontSize: '1.05rem', padding: '16px', lineHeight: '1.6' }}
                    required
                  />
                </div>

                {/* Submits row */}
                <div style={{ display: 'flex', gap: '15px', marginTop: '10px', flexWrap: 'wrap' }}>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={actionLoading}
                    style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 800 }}
                  >
                    <Check size={20} />
                    {activeNewsEditor === 'add' ? 'Publish Article' : 'Save Article Changes'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveNewsEditor(null)}
                    className="btn btn-outline"
                    style={{ borderColor: 'var(--border-strong)', color: 'var(--text-secondary)', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 700 }}
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </div>
          )}

        </div>
      )}

      {/* ============================================================
          OVERLAY DIALOG: DOUBLE CHECK CONFIRM DELETE (Elderly-Friendly)
         ============================================================ */}
      {deleteConfirmation && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div className="glass-panel" style={{ maxWidth: '500px', width: '90%', padding: 'var(--space-8)', border: '2px solid #ef4444', background: '#1a1012', textAlign: 'center', borderRadius: 'var(--radius-xl)' }}>
            <ShieldAlert size={64} style={{ color: '#ef4444', margin: '0 auto var(--space-4)' }} />
            
            <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff', marginBottom: 'var(--space-3)' }}>
              ARE YOU SURE?
            </h2>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: 'var(--space-6)' }}>
              You are about to permanently delete the {deleteConfirmation.type === 'profile' ? 'matrimony profile' : 'news article'} for:<br />
              <strong style={{ color: '#ffffff', fontSize: '1.25rem', display: 'block', margin: '12px 0' }}>"{deleteConfirmation.name}"</strong>
              This action is permanent and cannot be undone.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                onClick={executeDelete}
                className="btn btn-primary"
                disabled={actionLoading}
                style={{ background: '#ef4444', borderColor: '#ef4444', color: '#ffffff', padding: '16px 20px', fontSize: '1.15rem', fontWeight: 800 }}
              >
                Yes, Delete Permanently
              </button>
              <button 
                onClick={() => setDeleteConfirmation(null)}
                className="btn btn-outline"
                style={{ borderColor: 'var(--border-strong)', color: '#ffffff', padding: '14px 20px', fontSize: '1.1rem', fontWeight: 700 }}
              >
                No, Keep it (Cancel)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminPage;
