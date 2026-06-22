import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Briefcase, MapPin, DollarSign, Calendar, Plus, Check, Info, AlertTriangle } from 'lucide-react';
import { apiService } from '../services/api';

const JobsPage = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Applier state
  const [activeApplyJob, setActiveApplyJob] = useState(null);
  const [applyForm, setApplyForm] = useState({ name: '', email: '', phone: '', cvName: '' });
  const [applySuccess, setApplySuccess] = useState(false);
  
  // Poster state
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [postForm, setPostForm] = useState({
    title: '', company: '', category: 'IT / Tech', location: '', salary: '', experience: '', skills: '', description: ''
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await apiService.getJobs();
      setJobs(data);
    } catch (err) {
      setError("Failed to fetch jobs from database.");
    } finally {
      setLoading(false);
    }
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setActiveApplyJob(null);
      setApplyForm({ name: '', email: '', phone: '', cvName: '' });
    }, 2500);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const newJob = {
      title: postForm.title,
      company: postForm.company,
      category: postForm.category,
      location: postForm.location,
      salary: postForm.salary || "Negotiable",
      posted: "Just now",
      type: "Full-Time",
      experience: postForm.experience || "Any",
      skills: postForm.skills, // Will be split by comma in backend API helper
      description: postForm.description
    };
    
    try {
      await apiService.createJob(newJob);
      setIsPostOpen(false);
      setPostForm({ title: '', company: '', category: 'IT / Tech', location: '', salary: '', experience: '', skills: '', description: '' });
      await fetchJobs();
    } catch (err) {
      alert("Failed to submit job posting: " + err.message);
    }
  };


  const categories = ['All', 'IT / Tech', 'Accounts / Finance', 'Management', 'Office Admin'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container jobs-page" style={{ maxWidth: 'var(--content-max-width)', margin: '40px auto', padding: '0 var(--space-6) var(--space-10)' }}>
      {/* Header Back navigation */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: 'var(--space-8)' }}>
        <button 
          onClick={() => navigate('/')} 
          className="btn btn-secondary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.9rem', fontWeight: 700 }}
        >
          <ArrowLeft size={16} />
          Back to Homepage
        </button>

        <button 
          onClick={() => setIsPostOpen(true)}
          className="btn btn-primary"
          style={{ background: '#22c55e', borderColor: '#22c55e', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', fontSize: '0.95rem', fontWeight: 700 }}
        >
          <Plus size={18} />
          Post a Job Vacancy
        </button>
      </div>

      {/* Title */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 850, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          Community Jobs Portal
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '1rem' }}>
          Connect with professional opportunities offered by our community business owners and members.
        </p>
      </div>

      {/* Filters & Search row */}
      <div className="glass-panel" style={{ padding: 'var(--space-5)', border: '1px solid var(--border)', marginBottom: 'var(--space-6)', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
          <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search by job title, company, or skills..." 
            className="form-input" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '44px', height: '44px', fontSize: '0.95rem' }}
          />
        </div>
        
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '10px 16px', fontSize: '0.85rem', fontWeight: 700 }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Jobs list */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
          <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
          Loading jobs...
        </div>
      ) : error ? (
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
          <AlertTriangle size={36} style={{ color: '#ef4444', marginBottom: '12px' }} />
          <p>{error}</p>
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
          <Info size={40} style={{ color: 'var(--text-muted)', marginBottom: '12px' }} />
          <h3>No active job openings match your query.</h3>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filteredJobs.map(job => (
            <div 
              key={job.id} 
              className="glass-panel"
              style={{ 
                padding: 'var(--space-6)', 
                border: '1px solid var(--border)', 
                borderRadius: 'var(--radius-lg)', 
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '24px',
                alignItems: 'start'
              }}
            >
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', background: 'var(--accent-glow)', color: 'var(--accent)', padding: '4px 10px', borderRadius: 'var(--radius-sm)' }}>
                    {job.category}
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', padding: '4px 10px', borderRadius: 'var(--radius-sm)' }}>
                    {job.type}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {job.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '16px' }}>
                  {job.company}
                </p>

                {/* Metadata row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={14} />{job.location}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><DollarSign size={14} />{job.salary}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Briefcase size={14} />Exp: {job.experience}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} />Posted {job.posted}</span>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                  {job.description}
                </p>

                {/* Skills tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {job.skills.map((skill, sIdx) => (
                    <span key={sIdx} style={{ fontSize: '0.75rem', fontWeight: 600, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', padding: '4px 8px', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div style={{ alignSelf: 'center' }}>
                <button 
                  onClick={() => setActiveApplyJob(job)}
                  className="btn btn-primary"
                  style={{ padding: '14px 28px', fontSize: '1rem', fontWeight: 800 }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal: Job Applicator */}
      {activeApplyJob && (
        <div className="welcome-dialogue-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="glass-panel" style={{ maxWidth: '500px', width: '100%', padding: 'var(--space-6)', border: '1px solid var(--border-strong)', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '4px', color: 'var(--text-primary)' }}>Apply for Role</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Submit your referral details for <strong>{activeApplyJob.title}</strong> at <strong>{activeApplyJob.company}</strong>.
            </p>

            {applySuccess ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <div style={{ display: 'inline-flex', width: '48px', height: '48px', borderRadius: '50%', background: '#22c55e', alignItems: 'center', justifyContent: 'center', color: '#ffffff', marginBottom: '12px' }}>
                  <Check size={24} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>Application Sent!</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>The business owner will contact you directly via phone or email.</p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Your Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={applyForm.name} 
                    onChange={e => setApplyForm({...applyForm, name: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Email Address *</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    value={applyForm.email} 
                    onChange={e => setApplyForm({...applyForm, email: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Phone Number *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={applyForm.phone} 
                    onChange={e => setApplyForm({...applyForm, phone: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Upload CV Resume (Optional)</label>
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    onChange={e => setApplyForm({...applyForm, cvName: e.target.files[0]?.name || ''})}
                    style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}
                  />
                </div>
                
                <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: '12px' }}>Submit Application</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setActiveApplyJob(null)} style={{ padding: '12px' }}>Cancel</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Modal: Post a Job */}
      {isPostOpen && (
        <div className="welcome-dialogue-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="glass-panel" style={{ maxWidth: '600px', width: '100%', padding: 'var(--space-6)', border: '1px solid var(--border-strong)', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '4px', color: 'var(--text-primary)' }}>Post Job opening</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Fill in the job details. The listing will be published directly in the community feed.
            </p>

            <form onSubmit={handlePostSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Job Title *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Accountant"
                    value={postForm.title} 
                    onChange={e => setPostForm({...postForm, title: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Company/Firm Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Patnaik Agency"
                    value={postForm.company} 
                    onChange={e => setPostForm({...postForm, company: e.target.value})} 
                    required 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Industry Category</label>
                  <select 
                    className="form-input" 
                    value={postForm.category} 
                    onChange={e => setPostForm({...postForm, category: e.target.value})}
                  >
                    <option value="IT / Tech">IT / Tech</option>
                    <option value="Accounts / Finance">Accounts / Finance</option>
                    <option value="Management">Management</option>
                    <option value="Office Admin">Office Admin</option>
                  </select>
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Location (City) *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Visakhapatnam"
                    value={postForm.location} 
                    onChange={e => setPostForm({...postForm, location: e.target.value})} 
                    required 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Salary Package Range</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. ₹5L - ₹8L / year"
                    value={postForm.salary} 
                    onChange={e => setPostForm({...postForm, salary: e.target.value})} 
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Required Experience</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. 2+ Years"
                    value={postForm.experience} 
                    onChange={e => setPostForm({...postForm, experience: e.target.value})} 
                  />
                </div>
              </div>

              <div className="form-group">
                <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Key Skills Required (Comma-separated)</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. React, Tally, Excel"
                  value={postForm.skills} 
                  onChange={e => setPostForm({...postForm, skills: e.target.value})} 
                />
              </div>

              <div className="form-group">
                <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Role Description *</label>
                <textarea 
                  className="form-input" 
                  rows={3}
                  value={postForm.description} 
                  onChange={e => setPostForm({...postForm, description: e.target.value})} 
                  required 
                />
              </div>
              
              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: '12px' }}>Post Job</button>
                <button type="button" className="btn btn-secondary" onClick={() => setIsPostOpen(false)} style={{ padding: '12px' }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default JobsPage;
