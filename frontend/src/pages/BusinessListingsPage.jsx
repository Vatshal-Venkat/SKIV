import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Search, Globe, Phone, Plus, MessageSquare, MapPin, X } from 'lucide-react';

const BusinessListingsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [newBiz, setNewBiz] = useState({ name: '', tagline: '', category: 'Tech Services', owner: '', location: '', description: '', phone: '', website: '' });

  const categories = ["All", "Tech Services", "Real Estate", "Consulting", "Retail & Food", "Healthcare"];

  const [businesses, setBusinesses] = useState([
    {
      id: 1,
      name: "Patnaik Solutions & Consultancy",
      tagline: "Custom software development and cloud operations",
      category: "Tech Services",
      owner: "Muralidhara Patnaik",
      location: "Bhubaneswar, Odisha",
      description: "We provide high-quality scalable web applications, enterprise software integrations, and technical consulting services for local and international brands.",
      website: "https://example.com/patnaiksolutions",
      phone: "+91 99880 11223"
    },
    {
      id: 2,
      name: "Sista Real Estate & Builders",
      tagline: "Secured properties, commercial buildings, and land layouts",
      category: "Real Estate",
      owner: "Srinivasa Rao Sista",
      location: "Visakhapatnam, AP",
      description: "Over 25 years of trust in coastal Andhra. Providing affordable housing plans, layout assessments, gated communities, and real estate brokerage.",
      website: "https://example.com/sistarealty",
      phone: "+91 94411 22334"
    },
    {
      id: 3,
      name: "Karanam Financial Advisories",
      tagline: "Tax filing, wealth audits, and corporate accounting",
      category: "Consulting",
      owner: "Ganesh Karanam, CA",
      location: "Hyderabad, Telangana",
      description: "Personal and corporate bookkeeping, auditing support, legal consultations, and portfolio planning packages. Direct consultations available.",
      website: "",
      phone: "+91 98490 55667"
    },
    {
      id: 4,
      name: "Laxmi Sweets & Home Foods",
      tagline: "Authentic Karanam recipes and catering services",
      category: "Retail & Food",
      owner: "Smt. Shanti Behara",
      location: "Vizianagaram, AP",
      description: "Delivering traditional Sistakaranam delicacies, home-made pickles, festival sweets, and catering support for weddings, thread ceremonies, and events.",
      website: "",
      phone: "+91 89220 54321"
    },
    {
      id: 5,
      name: "Patnaik Diagnostic & Clinic Centre",
      tagline: "Advanced laboratory testings and family healthcare",
      category: "Healthcare",
      owner: "Dr. K. R. Patnaik",
      location: "Srikakulam, AP",
      description: "State-of-the-art diagnostic care, blood checkups, general physician support, and pediatric counseling services. Serving since 2005.",
      website: "https://example.com/patnaikclinic",
      phone: "+91 89420 98765"
    }
  ]);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const id = businesses.length + 1;
    setBusinesses([...businesses, { ...newBiz, id }]);
    setSuccessMsg("Business registered successfully! Review pending from admin.");
    setNewBiz({ name: '', tagline: '', category: 'Tech Services', owner: '', location: '', description: '', phone: '', website: '' });
    setTimeout(() => {
      setSuccessMsg('');
      setModalOpen(false);
    }, 2000);
  };

  const filteredBusinesses = businesses.filter(biz => {
    const matchesSearch = biz.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          biz.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          biz.owner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' || biz.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <PageWrapper 
      title="Business Listings" 
      subtitle="Discover, support, and collaborate with enterprises led by our community members."
    >
      {/* Top action block */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '32px'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text"
            placeholder="Search category, legal, retail..."
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

        {/* Categories Grid and Button */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
            {categories.map(cat => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: isActive ? 'var(--accent-glow)' : 'transparent',
                    border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <button 
            className="btn btn-primary"
            onClick={() => setModalOpen(true)}
            style={{ 
              padding: '10px 20px', 
              fontSize: '0.82rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              border: '1px solid rgba(197, 160, 89, 0.45)', 
              borderRadius: '8px' 
            }}
          >
            <Plus size={16} /> Register Business
          </button>
        </div>
      </div>

      {/* Directory Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
        {filteredBusinesses.map(biz => (
          <div 
            key={biz.id} 
            className="glass-panel" 
            style={{ 
              padding: '24px', 
              border: '1px solid var(--border)', 
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                <span style={{ 
                  fontSize: '0.68rem', 
                  border: '1px solid var(--accent)', 
                  color: 'var(--accent)', 
                  padding: '2px 8px', 
                  borderRadius: '100px', 
                  fontWeight: 700,
                  background: 'rgba(6, 182, 212, 0.05)'
                }}>
                  {biz.category}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={12} /> {biz.location}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '4px' }}>
                {biz.name}
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#d4af37', fontStyle: 'italic', marginBottom: '16px' }}>
                "{biz.tagline}"
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                {biz.description}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                <strong>Owner:</strong> {biz.owner}
              </p>
            </div>

            {/* Action Tray */}
            <div style={{ display: 'flex', borderTop: '1px solid var(--border)', paddingTop: '16px', gap: '16px' }}>
              {biz.website && (
                <a href={biz.website} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', textDecoration: 'none' }}>
                  <Globe size={14} style={{ color: 'var(--accent)' }} /> Website
                </a>
              )}
              <a href={`tel:${biz.phone}`} style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', textDecoration: 'none' }}>
                <Phone size={14} style={{ color: 'var(--accent)' }} /> Call
              </a>
              <a href={`https://wa.me/${biz.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', textDecoration: 'none' }}>
                <Plus size={14} style={{ color: 'var(--accent)' }} /> WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Registration Modal */}
      {modalOpen && (
        <div className="demo-login__overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 1000 }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', background: '#0c0f1d', border: '1px solid rgba(197, 160, 89, 0.4)', borderRadius: '24px', padding: '32px', position: 'relative' }}>
            <button 
              onClick={() => setModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#d4af37', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '16px' }}>
              Register Your Enterprise
            </h3>

            {successMsg ? (
              <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid var(--success)', color: 'var(--success)', borderRadius: '8px', fontSize: '0.85rem', textAlign: 'center', margin: '20px 0' }}>
                {successMsg}
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>Business Name</label>
                  <input type="text" className="form-input" required value={newBiz.name} onChange={(e) => setNewBiz({ ...newBiz, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>Tagline</label>
                  <input type="text" className="form-input" required value={newBiz.tagline} onChange={(e) => setNewBiz({ ...newBiz, tagline: e.target.value })} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>Category</label>
                    <select className="form-input" value={newBiz.category} onChange={(e) => setNewBiz({ ...newBiz, category: e.target.value })} style={{ background: 'var(--bg-input)', color: '#fff' }}>
                      {categories.slice(1).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>Location</label>
                    <input type="text" className="form-input" required value={newBiz.location} onChange={(e) => setNewBiz({ ...newBiz, location: e.target.value })} placeholder="e.g. Visakhapatnam, AP" />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>Owner Name</label>
                    <input type="text" className="form-input" required value={newBiz.owner} onChange={(e) => setNewBiz({ ...newBiz, owner: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>Phone / WhatsApp</label>
                    <input type="text" className="form-input" required value={newBiz.phone} onChange={(e) => setNewBiz({ ...newBiz, phone: e.target.value })} placeholder="e.g. +91 99887 76655" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '4px' }}>Description</label>
                  <textarea className="form-input" rows="3" required value={newBiz.description} onChange={(e) => setNewBiz({ ...newBiz, description: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', padding: '12px' }}>Submit Registration</button>
              </form>
            )}
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default BusinessListingsPage;
