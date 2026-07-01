import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, Search, Edit2, Trash2, ShieldAlert, Check, X, 
  Upload, UserCheck, FileText, ChevronRight, RefreshCw, AlertCircle,
  Briefcase, Calendar, Users, BookOpen
} from 'lucide-react';
import { apiService } from '../services/api';

const AdminPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('matrimony'); // 'matrimony' | 'news' | 'events' | 'jobs' | 'directory' | 'newsletters'
  const [currentUser, setCurrentUser] = useState(null);
  
  // Loading & Error states
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Data lists
  const [profiles, setProfiles] = useState([]);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [directory, setDirectory] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  
  // Search states
  const [profileSearch, setProfileSearch] = useState('');
  const [newsSearch, setNewsSearch] = useState('');
  const [eventsSearch, setEventsSearch] = useState('');
  const [jobsSearch, setJobsSearch] = useState('');
  const [directorySearch, setDirectorySearch] = useState('');
  const [newslettersSearch, setNewslettersSearch] = useState('');
  
  // Editor/Modal states
  const [activeProfileEditor, setActiveProfileEditor] = useState(null);
  const [activeNewsEditor, setActiveNewsEditor] = useState(null);
  const [activeEventEditor, setActiveEventEditor] = useState(null);
  const [activeJobEditor, setActiveJobEditor] = useState(null);
  const [activeDirectoryEditor, setActiveDirectoryEditor] = useState(null);
  const [activeNewsletterEditor, setActiveNewsletterEditor] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); // null | { type: 'profile'|'news'|'event'|'job'|'member'|'newsletter', id: number, name: string }

  // Form states - Newsletter
  const [newsletterForm, setNewsletterForm] = useState({
    title: '',
    author: 'Sri Dwarapu Srinivasa Rao',
    year: '2022',
    published_date: '',
    size: '5.0 MB',
    cover_bg: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    mainStories: '',
    file_url: ''
  });

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

  // Form states - Event
  const [eventForm, setEventForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    organizer: '',
    description: '',
    registrations: 0,
    status: 'Open'
  });

  // Form states - Job Posting
  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    category: 'IT / Tech',
    location: '',
    salary: '',
    posted: 'Just now',
    type: 'Full-Time',
    experience: '',
    skills: '',
    description: ''
  });

  // Form states - Directory Member
  const [directoryForm, setDirectoryForm] = useState({
    name: '',
    gotram: '',
    profession: '',
    location: '',
    specialization: '',
    contact: '',
    phone: ''
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
      const eventData = await apiService.getEvents();
      const jobData = await apiService.getJobs();
      const directoryData = await apiService.getDirectory();
      const newsletterData = await apiService.getNewsletters();
      
      setProfiles(profileData);
      setNews(newsData);
      setEvents(eventData);
      setJobs(jobData);
      setDirectory(directoryData);
      setNewsletters(newsletterData);
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
      } else if (type === 'newsletter') {
        setNewsletterForm(prev => ({ ...prev, file_url: response.url, size: `${(file.size / (1024 * 1024)).toFixed(2)} MB` }));
      }
    } catch (err) {
      setErrorMsg(err.message || 'File upload failed. Please verify size and format.');
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

  // Events CRUD Handlers
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    setErrorMsg('');
    try {
      if (activeEventEditor === 'add') {
        await apiService.createEvent(eventForm);
      } else {
        await apiService.updateEvent(activeEventEditor.id, eventForm);
      }
      setActiveEventEditor(null);
      await fetchData();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to save event.');
    } finally {
      setActionLoading(false);
    }
  };

  const openEventEditor = (eventItem = null) => {
    setErrorMsg('');
    if (!eventItem) {
      setEventForm({
        title: '',
        date: '',
        time: '',
        location: '',
        organizer: '',
        description: '',
        registrations: 0,
        status: 'Open'
      });
      setActiveEventEditor('add');
    } else {
      setEventForm({
        title: eventItem.title || '',
        date: eventItem.date || '',
        time: eventItem.time || '',
        location: eventItem.location || '',
        organizer: eventItem.organizer || '',
        description: eventItem.description || '',
        registrations: eventItem.registrations || 0,
        status: eventItem.status || 'Open'
      });
      setActiveEventEditor(eventItem);
    }
  };

  // Jobs CRUD Handlers
  const handleJobSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    setErrorMsg('');
    try {
      if (activeJobEditor === 'add') {
        await apiService.createJob(jobForm);
      } else {
        await apiService.updateJob(activeJobEditor.id, jobForm);
      }
      setActiveJobEditor(null);
      await fetchData();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to save job posting.');
    } finally {
      setActionLoading(false);
    }
  };

  const openJobEditor = (jobItem = null) => {
    setErrorMsg('');
    if (!jobItem) {
      setJobForm({
        title: '',
        company: '',
        category: 'IT / Tech',
        location: '',
        salary: '',
        posted: 'Just now',
        type: 'Full-Time',
        experience: '',
        skills: '',
        description: ''
      });
      setActiveJobEditor('add');
    } else {
      setJobForm({
        title: jobItem.title || '',
        company: jobItem.company || '',
        category: jobItem.category || 'IT / Tech',
        location: jobItem.location || '',
        salary: jobItem.salary || '',
        posted: jobItem.posted || 'Just now',
        type: jobItem.type || 'Full-Time',
        experience: jobItem.experience || '',
        skills: Array.isArray(jobItem.skills) ? jobItem.skills.join(', ') : (jobItem.skills || ''),
        description: jobItem.description || ''
      });
      setActiveJobEditor(jobItem);
    }
  };

  // Directory CRUD Handlers
  const handleDirectorySubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    setErrorMsg('');
    try {
      if (activeDirectoryEditor === 'add') {
        await apiService.createDirectoryMember(directoryForm);
      } else {
        await apiService.updateDirectoryMember(activeDirectoryEditor.id, directoryForm);
      }
      setActiveDirectoryEditor(null);
      await fetchData();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to save directory member.');
    } finally {
      setActionLoading(false);
    }
  };

  const openDirectoryEditor = (memberItem = null) => {
    setErrorMsg('');
    if (!memberItem) {
      setDirectoryForm({
        name: '',
        gotram: '',
        profession: '',
        location: '',
        specialization: '',
        contact: '',
        phone: ''
      });
      setActiveDirectoryEditor('add');
    } else {
      setDirectoryForm({
        name: memberItem.name || '',
        gotram: memberItem.gotram || '',
        profession: memberItem.profession || '',
        location: memberItem.location || '',
        specialization: memberItem.specialization || '',
        contact: memberItem.contact || '',
        phone: memberItem.phone || ''
      });
      setActiveDirectoryEditor(memberItem);
    }
  };

  // Newsletter CRUD Handlers
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    setErrorMsg('');

    try {
      if (activeNewsletterEditor === 'add') {
        await apiService.createNewsletter(newsletterForm);
      }
      setActiveNewsletterEditor(null);
      await fetchData();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to save newsletter.');
    } finally {
      setActionLoading(false);
    }
  };

  const openNewsletterEditor = () => {
    setErrorMsg('');
    setNewsletterForm({
      title: '',
      author: 'Sri Dwarapu Srinivasa Rao',
      year: '2022',
      published_date: new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }),
      size: '0.0 MB',
      cover_bg: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      mainStories: '',
      file_url: ''
    });
    setActiveNewsletterEditor('add');
  };

  // Delete Confirmation Handlers
  const triggerDeleteCheck = (type, item) => {
    const name = (type === 'profile' || type === 'member') ? item.name : item.title;
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
      } else if (type === 'news') {
        await apiService.deleteNewsArticle(id);
      } else if (type === 'event') {
        await apiService.deleteEvent(id);
      } else if (type === 'job') {
        await apiService.deleteJob(id);
      } else if (type === 'member') {
        await apiService.deleteDirectoryMember(id);
      } else if (type === 'newsletter') {
        await apiService.deleteNewsletter(id);
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

  const filteredEvents = events.filter(e => 
    e.title.toLowerCase().includes(eventsSearch.toLowerCase()) ||
    e.location.toLowerCase().includes(eventsSearch.toLowerCase()) ||
    (e.organizer && e.organizer.toLowerCase().includes(eventsSearch.toLowerCase()))
  );

  const filteredJobs = jobs.filter(j => 
    j.title.toLowerCase().includes(jobsSearch.toLowerCase()) ||
    j.company.toLowerCase().includes(jobsSearch.toLowerCase()) ||
    j.location.toLowerCase().includes(jobsSearch.toLowerCase())
  );

  const filteredDirectory = directory.filter(m => 
    m.name.toLowerCase().includes(directorySearch.toLowerCase()) ||
    (m.gotram && m.gotram.toLowerCase().includes(directorySearch.toLowerCase())) ||
    m.profession.toLowerCase().includes(directorySearch.toLowerCase()) ||
    m.location.toLowerCase().includes(directorySearch.toLowerCase())
  );

  const filteredNewslettersList = newsletters.filter(n => 
    n.title.toLowerCase().includes(newslettersSearch.toLowerCase()) ||
    n.year.toLowerCase().includes(newslettersSearch.toLowerCase())
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
      <div className="admin-tabs" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
        <button 
          onClick={() => { setActiveTab('matrimony'); setActiveProfileEditor(null); }}
          className={`tab-btn ${activeTab === 'matrimony' ? 'active' : ''}`}
          style={{
            padding: '16px',
            fontSize: '1.05rem',
            fontWeight: 800,
            borderRadius: 'var(--radius-md)',
            border: activeTab === 'matrimony' ? '2px solid var(--accent)' : '1px solid var(--border)',
            background: activeTab === 'matrimony' ? 'var(--accent-glow)' : 'transparent',
            color: activeTab === 'matrimony' ? 'var(--accent)' : 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: activeTab === 'matrimony' ? '0 0 10px var(--accent-glow)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          <UserCheck size={20} />
          Matrimony ({profiles.length})
        </button>
        <button 
          onClick={() => { setActiveTab('news'); setActiveNewsEditor(null); }}
          className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
          style={{
            padding: '16px',
            fontSize: '1.05rem',
            fontWeight: 800,
            borderRadius: 'var(--radius-md)',
            border: activeTab === 'news' ? '2px solid var(--accent)' : '1px solid var(--border)',
            background: activeTab === 'news' ? 'var(--accent-glow)' : 'transparent',
            color: activeTab === 'news' ? 'var(--accent)' : 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: activeTab === 'news' ? '0 0 10px var(--accent-glow)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          <FileText size={20} />
          News ({news.length})
        </button>
        <button 
          onClick={() => { setActiveTab('events'); setActiveEventEditor(null); }}
          className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
          style={{
            padding: '16px',
            fontSize: '1.05rem',
            fontWeight: 800,
            borderRadius: 'var(--radius-md)',
            border: activeTab === 'events' ? '2px solid var(--accent)' : '1px solid var(--border)',
            background: activeTab === 'events' ? 'var(--accent-glow)' : 'transparent',
            color: activeTab === 'events' ? 'var(--accent)' : 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: activeTab === 'events' ? '0 0 10px var(--accent-glow)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          <Calendar size={20} />
          Events ({events.length})
        </button>
        <button 
          onClick={() => { setActiveTab('jobs'); setActiveJobEditor(null); }}
          className={`tab-btn ${activeTab === 'jobs' ? 'active' : ''}`}
          style={{
            padding: '16px',
            fontSize: '1.05rem',
            fontWeight: 800,
            borderRadius: 'var(--radius-md)',
            border: activeTab === 'jobs' ? '2px solid var(--accent)' : '1px solid var(--border)',
            background: activeTab === 'jobs' ? 'var(--accent-glow)' : 'transparent',
            color: activeTab === 'jobs' ? 'var(--accent)' : 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: activeTab === 'jobs' ? '0 0 10px var(--accent-glow)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          <Briefcase size={20} />
          Jobs ({jobs.length})
        </button>
        <button 
          onClick={() => { setActiveTab('directory'); setActiveDirectoryEditor(null); }}
          className={`tab-btn ${activeTab === 'directory' ? 'active' : ''}`}
          style={{
            padding: '16px',
            fontSize: '1.05rem',
            fontWeight: 800,
            borderRadius: 'var(--radius-md)',
            border: activeTab === 'directory' ? '2px solid var(--accent)' : '1px solid var(--border)',
            background: activeTab === 'directory' ? 'var(--accent-glow)' : 'transparent',
            color: activeTab === 'directory' ? 'var(--accent)' : 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: activeTab === 'directory' ? '0 0 10px var(--accent-glow)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          <Users size={20} />
          Directory ({directory.length})
        </button>
        <button 
          onClick={() => { setActiveTab('newsletters'); setActiveNewsletterEditor(null); }}
          className={`tab-btn ${activeTab === 'newsletters' ? 'active' : ''}`}
          style={{
            padding: '16px',
            fontSize: '1.05rem',
            fontWeight: 800,
            borderRadius: 'var(--radius-md)',
            border: activeTab === 'newsletters' ? '2px solid var(--accent)' : '1px solid var(--border)',
            background: activeTab === 'newsletters' ? 'var(--accent-glow)' : 'transparent',
            color: activeTab === 'newsletters' ? 'var(--accent)' : 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: activeTab === 'newsletters' ? '0 0 10px var(--accent-glow)' : 'none',
            transition: 'all 0.2s'
          }}
        >
          <BookOpen size={20} />
          Publications ({newsletters.length})
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
          TAB: EVENTS
         ============================================================ */}
      {activeTab === 'events' && (
        <div className="tab-pane">
          {!activeEventEditor && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
                  <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input 
                    type="text" 
                    placeholder="Search events by title, organizer, location..." 
                    className="form-input" 
                    value={eventsSearch}
                    onChange={(e) => setEventsSearch(e.target.value)}
                    style={{ paddingLeft: '48px', height: '48px', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }}
                  />
                </div>
                
                <button 
                  onClick={() => openEventEditor()}
                  className="btn btn-primary"
                  style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px', fontSize: '1.1rem', fontWeight: 700 }}
                >
                  <Plus size={20} />
                  Add New Event
                </button>
              </div>

              {loading ? (
                <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-secondary)' }}>
                  <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
                  Loading events...
                </div>
              ) : filteredEvents.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
                  <AlertCircle size={40} style={{ color: 'var(--text-muted)', marginBottom: '10px' }} />
                  <h3>No events found.</h3>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {filteredEvents.map(ev => (
                    <div 
                      key={ev.id} 
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr auto', 
                        alignItems: 'center', 
                        gap: '20px', 
                        padding: '16px 20px', 
                        background: 'rgba(255, 255, 255, 0.02)', 
                        border: '1px solid var(--border)', 
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>{ev.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                          Date: <strong>{ev.date}</strong> • Location: <strong>{ev.location}</strong> • Registrations: <strong>{ev.registrations}</strong>
                        </p>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                          onClick={() => openEventEditor(ev)}
                          className="btn btn-secondary btn-sm"
                          style={{ borderColor: '#3b82f6', color: '#60a5fa', padding: '10px 18px', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button 
                          onClick={() => triggerDeleteCheck('event', ev)}
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

          {activeEventEditor && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 'var(--space-5)', color: 'var(--text-primary)' }}>
                {activeEventEditor === 'add' ? 'Create Event' : `Edit Event: ${activeEventEditor.title}`}
              </h2>
              
              <form onSubmit={handleEventSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                <div className="form-group">
                  <label style={{ fontSize: '1rem', fontWeight: 700 }}>Event Title *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={eventForm.title} 
                    onChange={(e) => setEventForm({...eventForm, title: e.target.value})}
                    style={{ height: '48px', fontSize: '1.05rem' }} 
                    required 
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Date (e.g. July 12, 2026) *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={eventForm.date} 
                      onChange={(e) => setEventForm({...eventForm, date: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Time (e.g. 10:00 AM - 5:00 PM)</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={eventForm.time} 
                      onChange={(e) => setEventForm({...eventForm, time: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Location *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={eventForm.location} 
                      onChange={(e) => setEventForm({...eventForm, location: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Organizer</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={eventForm.organizer} 
                      onChange={(e) => setEventForm({...eventForm, organizer: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Registration RSVP Count</label>
                    <input 
                      type="number" 
                      className="form-input" 
                      value={eventForm.registrations} 
                      onChange={(e) => setEventForm({...eventForm, registrations: parseInt(e.target.value) || 0})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Status</label>
                    <select 
                      className="form-input" 
                      value={eventForm.status} 
                      onChange={(e) => setEventForm({...eventForm, status: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem', background: 'var(--bg-input)' }}
                    >
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontSize: '1rem', fontWeight: 700 }}>Event Description</label>
                  <textarea 
                    className="form-input" 
                    rows={6}
                    value={eventForm.description} 
                    onChange={(e) => setEventForm({...eventForm, description: e.target.value})}
                    style={{ fontSize: '1.05rem', padding: '16px', lineHeight: '1.6' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '15px', marginTop: '10px', flexWrap: 'wrap' }}>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={actionLoading}
                    style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 800 }}
                  >
                    <Check size={20} />
                    {activeEventEditor === 'add' ? 'Create Event' : 'Save Changes'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveEventEditor(null)}
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
          TAB: JOBS
         ============================================================ */}
      {activeTab === 'jobs' && (
        <div className="tab-pane">
          {!activeJobEditor && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
                  <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input 
                    type="text" 
                    placeholder="Search job postings by title, company, location..." 
                    className="form-input" 
                    value={jobsSearch}
                    onChange={(e) => setJobsSearch(e.target.value)}
                    style={{ paddingLeft: '48px', height: '48px', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }}
                  />
                </div>
                
                <button 
                  onClick={() => openJobEditor()}
                  className="btn btn-primary"
                  style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px', fontSize: '1.1rem', fontWeight: 700 }}
                >
                  <Plus size={20} />
                  Add New Job Vacancy
                </button>
              </div>

              {loading ? (
                <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-secondary)' }}>
                  <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
                  Loading jobs...
                </div>
              ) : filteredJobs.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
                  <AlertCircle size={40} style={{ color: 'var(--text-muted)', marginBottom: '10px' }} />
                  <h3>No jobs found.</h3>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {filteredJobs.map(job => (
                    <div 
                      key={job.id} 
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr auto', 
                        alignItems: 'center', 
                        gap: '20px', 
                        padding: '16px 20px', 
                        background: 'rgba(255, 255, 255, 0.02)', 
                        border: '1px solid var(--border)', 
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>{job.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                          Company: <strong>{job.company}</strong> • Category: <strong>{job.category}</strong> • Location: <strong>{job.location}</strong>
                        </p>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                          onClick={() => openJobEditor(job)}
                          className="btn btn-secondary btn-sm"
                          style={{ borderColor: '#3b82f6', color: '#60a5fa', padding: '10px 18px', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button 
                          onClick={() => triggerDeleteCheck('job', job)}
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

          {activeJobEditor && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 'var(--space-5)', color: 'var(--text-primary)' }}>
                {activeJobEditor === 'add' ? 'Create Job posting' : `Edit Job Posting: ${activeJobEditor.title}`}
              </h2>
              
              <form onSubmit={handleJobSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Job Title *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={jobForm.title} 
                      onChange={(e) => setJobForm({...jobForm, title: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Company / Organization *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={jobForm.company} 
                      onChange={(e) => setJobForm({...jobForm, company: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Category</label>
                    <select 
                      className="form-input" 
                      value={jobForm.category} 
                      onChange={(e) => setJobForm({...jobForm, category: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem', background: 'var(--bg-input)' }}
                    >
                      <option value="IT / Tech">IT / Tech</option>
                      <option value="Accounts / Finance">Accounts / Finance</option>
                      <option value="Management">Management</option>
                      <option value="Office Admin">Office Admin</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Job Type</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Full-Time, Part-Time, Internship"
                      value={jobForm.type} 
                      onChange={(e) => setJobForm({...jobForm, type: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Location *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Hyderabad, TS (Hybrid)"
                      value={jobForm.location} 
                      onChange={(e) => setJobForm({...jobForm, location: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Salary Range</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. ₹8,00,000 - ₹12,00,000 / year"
                      value={jobForm.salary} 
                      onChange={(e) => setJobForm({...jobForm, salary: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Required Experience</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. 3+ Years, Freshers Welcome"
                      value={jobForm.experience} 
                      onChange={(e) => setJobForm({...jobForm, experience: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Skills required (comma-separated)</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. React, Python, SQL"
                      value={jobForm.skills} 
                      onChange={(e) => setJobForm({...jobForm, skills: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontSize: '1rem', fontWeight: 700 }}>Job Description</label>
                  <textarea 
                    className="form-input" 
                    rows={6}
                    value={jobForm.description} 
                    onChange={(e) => setJobForm({...jobForm, description: e.target.value})}
                    style={{ fontSize: '1.05rem', padding: '16px', lineHeight: '1.6' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '15px', marginTop: '10px', flexWrap: 'wrap' }}>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={actionLoading}
                    style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 800 }}
                  >
                    <Check size={20} />
                    {activeJobEditor === 'add' ? 'Post Vacancy' : 'Save Changes'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveJobEditor(null)}
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
          TAB: DIRECTORY MEMBERS
         ============================================================ */}
      {activeTab === 'directory' && (
        <div className="tab-pane">
          {!activeDirectoryEditor && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
                  <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input 
                    type="text" 
                    placeholder="Search directory by name, Gotram, profession..." 
                    className="form-input" 
                    value={directorySearch}
                    onChange={(e) => setDirectorySearch(e.target.value)}
                    style={{ paddingLeft: '48px', height: '48px', fontSize: '1.05rem', borderRadius: 'var(--radius-md)' }}
                  />
                </div>
                
                <button 
                  onClick={() => openDirectoryEditor()}
                  className="btn btn-primary"
                  style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px', fontSize: '1.1rem', fontWeight: 700 }}
                >
                  <Plus size={20} />
                  Add Directory Member
                </button>
              </div>

              {loading ? (
                <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-secondary)' }}>
                  <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
                  Loading directory...
                </div>
              ) : filteredDirectory.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
                  <AlertCircle size={40} style={{ color: 'var(--text-muted)', marginBottom: '10px' }} />
                  <h3>No members found.</h3>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {filteredDirectory.map(m => (
                    <div 
                      key={m.id} 
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr auto', 
                        alignItems: 'center', 
                        gap: '20px', 
                        padding: '16px 20px', 
                        background: 'rgba(255, 255, 255, 0.02)', 
                        border: '1px solid var(--border)', 
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>{m.name}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                          Gotram: <strong>{m.gotram || 'Unknown'}</strong> • Profession: <strong>{m.profession}</strong> • Location: <strong>{m.location}</strong>
                        </p>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                          onClick={() => openDirectoryEditor(m)}
                          className="btn btn-secondary btn-sm"
                          style={{ borderColor: '#3b82f6', color: '#60a5fa', padding: '10px 18px', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <Edit2 size={16} />
                          Edit
                        </button>
                        <button 
                          onClick={() => triggerDeleteCheck('member', m)}
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

          {activeDirectoryEditor && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 'var(--space-5)', color: 'var(--text-primary)' }}>
                {activeDirectoryEditor === 'add' ? 'Add Member' : `Edit Member: ${activeDirectoryEditor.name}`}
              </h2>
              
              <form onSubmit={handleDirectorySubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Full Name *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={directoryForm.name} 
                      onChange={(e) => setDirectoryForm({...directoryForm, name: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Gotram</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={directoryForm.gotram} 
                      onChange={(e) => setDirectoryForm({...directoryForm, gotram: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Profession / Title *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Retired Professor, Senior Accountant"
                      value={directoryForm.profession} 
                      onChange={(e) => setDirectoryForm({...directoryForm, profession: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Location *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Visakhapatnam, AP"
                      value={directoryForm.location} 
                      onChange={(e) => setDirectoryForm({...directoryForm, location: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Contact Email</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      value={directoryForm.contact} 
                      onChange={(e) => setDirectoryForm({...directoryForm, contact: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Phone Number</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. +91 94401 XXXXX"
                      value={directoryForm.phone} 
                      onChange={(e) => setDirectoryForm({...directoryForm, phone: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontSize: '1rem', fontWeight: 700 }}>Specialization / Area of Focus</label>
                  <textarea 
                    className="form-input" 
                    rows={4}
                    placeholder="e.g. Educational Counselling, Small Scale Industries"
                    value={directoryForm.specialization} 
                    onChange={(e) => setDirectoryForm({...directoryForm, specialization: e.target.value})}
                    style={{ fontSize: '1.05rem', padding: '16px', lineHeight: '1.6' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '15px', marginTop: '10px', flexWrap: 'wrap' }}>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={actionLoading}
                    style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 800 }}
                  >
                    <Check size={20} />
                    {activeDirectoryEditor === 'add' ? 'Add Member' : 'Save Changes'}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveDirectoryEditor(null)}
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
          TAB: NEWSLETTERS / PUBLICATIONS
         ============================================================ */}
      {activeTab === 'newsletters' && (
        <div className="tab-pane">
          
          {/* Default List View */}
          {!activeNewsletterEditor && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              
              {/* Header Search & Create row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
                  <Search size={18} style={{ position: 'absolute', left: '16px', top: '15px', color: 'var(--text-muted)' }} />
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Search publications by title or year..."
                    value={newslettersSearch}
                    onChange={(e) => setNewslettersSearch(e.target.value)}
                    style={{ paddingLeft: '48px', height: '48px', fontSize: '1.05rem' }}
                  />
                </div>
                
                <button 
                  onClick={openNewsletterEditor}
                  className="btn btn-primary"
                  style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 24px', fontSize: '1rem', fontWeight: 800 }}
                >
                  <Plus size={20} />
                  Add New Publication
                </button>
              </div>

              {/* Data Table / List */}
              {filteredNewslettersList.length === 0 ? (
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '40px 0' }}>No matching publications found.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {filteredNewslettersList.map(n => (
                    <div 
                      key={n.id} 
                      style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap',
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        padding: '20px', 
                        background: 'rgba(255,255,255,0.01)', 
                        border: '1px solid var(--border)', 
                        borderRadius: '12px',
                        gap: '16px'
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>{n.title}</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                          Year: <strong>{n.year}</strong> • Date: <strong>{n.published_date}</strong> • Size: <strong>{n.size}</strong> • Downloads: <strong style={{ color: 'var(--success)' }}>{n.downloads}</strong>
                        </p>
                      </div>
                      
                      {/* Action buttons */}
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                          onClick={() => triggerDeleteCheck('newsletter', n)}
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

          {/* Form Panel (Add Mode Only) */}
          {activeNewsletterEditor === 'add' && (
            <div className="glass-panel" style={{ padding: 'var(--space-6)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Add New Publication</h2>
                <button 
                  onClick={() => setActiveNewsletterEditor(null)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleNewsletterSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                
                {/* File Upload Field */}
                <div className="form-group" style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '24px', border: '1px dashed var(--border-strong)', borderRadius: '12px', textAlign: 'center' }}>
                  <label style={{ fontSize: '1.1rem', fontWeight: 800, display: 'block', marginBottom: '12px' }}>Upload PDF Newsletter File *</label>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                    <input 
                      type="file" 
                      id="newsletter-pdf-file" 
                      accept=".pdf" 
                      onChange={(e) => handlePhotoUpload(e, 'newsletter')} 
                      style={{ display: 'none' }} 
                    />
                    <label 
                      htmlFor="newsletter-pdf-file"
                      className="btn btn-secondary"
                      style={{ padding: '12px 24px', fontSize: '1rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                    >
                      <Upload size={18} />
                      Choose PDF File
                    </label>
                    {newsletterForm.file_url ? (
                      <span style={{ color: 'var(--success)', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={18} /> File Uploaded: {newsletterForm.size}
                      </span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Only PDF files are supported. Max size 5MB.</span>
                    )}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Publication Title *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Lekha March 2022 Edition"
                      value={newsletterForm.title} 
                      onChange={(e) => setNewsletterForm({...newsletterForm, title: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Author / Editor *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Sri Dwarapu Srinivasa Rao"
                      value={newsletterForm.author} 
                      onChange={(e) => setNewsletterForm({...newsletterForm, author: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Publication Year *</label>
                    <select 
                      className="form-input" 
                      value={newsletterForm.year} 
                      onChange={(e) => setNewsletterForm({...newsletterForm, year: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem', background: 'var(--bg-input)' }} 
                      required
                    >
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="Archived">Archived (Older)</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Published Date *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. 06 Feb 2022"
                      value={newsletterForm.published_date} 
                      onChange={(e) => setNewsletterForm({...newsletterForm, published_date: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem' }} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label style={{ fontSize: '1rem', fontWeight: 700 }}>Gradient Cover Style *</label>
                    <select 
                      className="form-input" 
                      value={newsletterForm.cover_bg} 
                      onChange={(e) => setNewsletterForm({...newsletterForm, cover_bg: e.target.value})}
                      style={{ height: '48px', fontSize: '1.05rem', background: 'var(--bg-input)' }} 
                      required
                    >
                      <option value="linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)">Deep Navy</option>
                      <option value="linear-gradient(135deg, #0f172a 0%, #064e3b 100%)">Forest Green</option>
                      <option value="linear-gradient(135deg, #0f172a 0%, #311042 100%)">Midnight Violet</option>
                      <option value="linear-gradient(135deg, #0f172a 0%, #581c87 100%)">Royal Purple</option>
                      <option value="linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)">Cobalt Blue</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ fontSize: '1rem', fontWeight: 700 }}>Key Stories * (Separated by commas)</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Youth Welfare Schemes, Cultural Meet updates, Annual reports"
                    value={newsletterForm.mainStories} 
                    onChange={(e) => setNewsletterForm({...newsletterForm, mainStories: e.target.value})}
                    style={{ height: '48px', fontSize: '1.05rem' }} 
                    required 
                  />
                </div>

                <div style={{ display: 'flex', gap: '15px', marginTop: '10px', flexWrap: 'wrap' }}>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={actionLoading || !newsletterForm.file_url}
                    style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 800 }}
                  >
                    <Check size={20} />
                    Publish Publication
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveNewsletterEditor(null)}
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
              You are about to permanently delete the {deleteConfirmation.type === 'profile' ? 'matrimony profile' : deleteConfirmation.type === 'news' ? 'news article' : deleteConfirmation.type === 'event' ? 'event' : deleteConfirmation.type === 'job' ? 'job vacancy' : 'directory member'} for:<br />
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
