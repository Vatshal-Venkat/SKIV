import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Download, Heart } from 'lucide-react';
import lekhaEnglish from '../assets/lekha_english.png';
import lekhaTelugu from '../assets/lekha_telugu.png';

const formalAssociations = [
  'All India Sistakarana Association',
  'Sista Karana Association, Kharagpur',
  'Sistakaranam Association of Durg-Bhilai-Charoda',
  'AIPSKA',
  'Rajam Sistakarana Sangham',
  'Sistakaran Association, Bhubaneswar, Odisha',
  'Karunagari Youth Welfare Association',
  'Sistakaranam Welfare Association, Hyderabad',
  'Sista Karanam Yuvatha, Andhra Pradesh',
  'Sistakaranam Association, Chhattisgarh',
  'ISSKA'
];

const publications = [
  'Sistakaranam Charitra',
  'Kula Deepika Monthly',
  'Sista Vaani Quarterly',
  'Heritage & Identity Journal',
  'Community Chronicles Digest'
];

const familyIdentifiers = [
  'Surnames (Inti Perlu)',
  'Gotramulu Directories',
  'Sistakaranams Origins - ARK Rao',
  'Gotram Guide & Lineages'
];

const RightSidebar = () => {
  const [activeTab, setActiveTab] = useState('associations');

  const creators = Array(4).fill('/images/avatar1.png');

  return (
    <div className="sidebar-right">
      {/* Dynamic Community Hub Switcher */}
      <div className="sidebar-widget">
        <div className="sidebar-widget__body">
          <h4 className="section-title">COMMUNITY DIRECTORY</h4>
          
          <div className="tab-switcher">
            <button
              className={`tab-btn ${activeTab === 'associations' ? 'tab-btn--active' : ''}`}
              onClick={() => setActiveTab('associations')}
            >
              Associations
            </button>
            <button
              className={`tab-btn ${activeTab === 'literature' ? 'tab-btn--active' : ''}`}
              onClick={() => setActiveTab('literature')}
            >
              Literature
            </button>
            <button
              className={`tab-btn ${activeTab === 'identities' ? 'tab-btn--active' : ''}`}
              onClick={() => setActiveTab('identities')}
            >
              Identities
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'associations' && (
              <div className="tab-list">
                {formalAssociations.slice(0, 6).map((name, index) => (
                  <div key={index} className="tab-list-item">
                    <ChevronRight size={14} className="tab-list-arrow" />
                    <a href="#" className="tab-list-link">{name}</a>
                  </div>
                ))}
                <a href="#" style={{ display: 'block', textAlign: 'right', fontSize: '0.75rem', marginTop: 'var(--space-2)', color: 'var(--accent-hover)', fontWeight: 'bold' }}>
                  View All Associations ({formalAssociations.length}) →
                </a>
              </div>
            )}

            {activeTab === 'literature' && (
              <div className="tab-list">
                {publications.map((name, index) => (
                  <div key={index} className="tab-list-item">
                    <ChevronRight size={14} className="tab-list-arrow" />
                    <a href="#" className="tab-list-link">{name}</a>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'identities' && (
              <div className="tab-list">
                {familyIdentifiers.map((name, index) => (
                  <div key={index} className="tab-list-item">
                    <ChevronRight size={14} className="tab-list-arrow" />
                    <a href="#" className="tab-list-link">{name}</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Matrimonial Match (Vivaha Vedika) */}
      <div className="sidebar-widget">
        <div className="sidebar-widget__body">
          <h4 className="section-title" style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Heart size={15} fill="var(--gold)" style={{ color: 'var(--gold)' }} /> VIVAHA VEDIKA
          </h4>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
            Connect with verified profiles within the Sistakaranam fraternity.
          </p>
          
          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            marginBottom: '12px',
            height: '140px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5), 0 0 15px rgba(197, 160, 89, 0.15)'
          }}>
            <img 
              src="/wedding.jpeg" 
              alt="Vivaha Vedika Matrimony" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
            {/* Elegant overlay gradient */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(8, 10, 16, 0.95) 0%, rgba(8, 10, 16, 0.2) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '12px'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#d4af37', fontFamily: "'Space Grotesk', sans-serif" }}>
                Vivaha Vedika Registry
              </span>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-secondary)' }}>
                350+ Verified Profiles Live
              </span>
            </div>
          </div>

          <Link 
            to="/matrimony" 
            className="btn btn-secondary btn-sm btn-block" 
            style={{ 
              marginTop: '8px', 
              color: '#d4af37', 
              borderColor: 'rgba(197, 160, 89, 0.45)', 
              background: 'rgba(197, 160, 89, 0.05)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '6px',
              fontSize: '0.8rem',
              fontWeight: 750
            }}
          >
            <Heart size={12} fill="#d4af37" /> Enter Matrimony Lobby
          </Link>
        </div>
      </div>

      {/* Download Latest Lekha */}
      <div className="sidebar-widget lekha-download-panel">
        <div className="lekha-download-header">
          <h4 className="lekha-download-header-title">Download Latest "Lekha"</h4>
        </div>
        <div className="lekha-download-content">
          {/* English Edition */}
          <div className="lekha-edition-card" onClick={(e) => { e.preventDefault(); alert('Downloading English Edition...'); }}>
            <div className="lekha-edition-banner-container">
              <img src={lekhaEnglish} alt="Sistakaranam Lekha English" className="lekha-edition-banner-img" />
              <div className="lekha-edition-overlay">
                <Download className="lekha-download-btn-icon" />
                <span className="lekha-download-btn-text">Download PDF</span>
              </div>
            </div>
            <div className="lekha-edition-meta">
              <span>May 2026</span>
              <span>Vol 12, Issue 4</span>
              <span>32 Pages</span>
            </div>
          </div>

          {/* Telugu Edition */}
          <Link to="/lekha-newsletters" className="lekha-edition-card" style={{ textDecoration: 'none' }}>
            <div className="lekha-edition-banner-container">
              <img src={lekhaTelugu} alt="Sistakaranam Lekha Telugu" className="lekha-edition-banner-img" />
              <div className="lekha-edition-overlay">
                <Download className="lekha-download-btn-icon" />
                <span className="lekha-download-btn-text">Open Lekha Portal</span>
              </div>
            </div>
            <div className="lekha-edition-meta">
              <span>మే 2026</span>
              <span>సంపుటి 12, సంచిక 4</span>
              <span>28 పేజీలు</span>
            </div>
          </Link>

          {/* Lekha Archives Link */}
          <Link to="/lekha-newsletters" className="lekha-archives-link">
            Lekha Archives
          </Link>
        </div>
      </div>

      {/* Community YouTubers / Creators */}
      <div className="sidebar-widget">
        <div className="sidebar-widget__body">
          <h4 className="section-title">OUR CREATORS</h4>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            Latest content creator profiles from our fraternity:
          </p>
          <div className="creators-grid">
            {creators.map((src, index) => (
              <div key={index} className="creator-item">
                <img src={src} alt={`Creator ${index + 1}`} />
              </div>
            ))}
          </div>
          <a href="#" style={{ display: 'block', textAlign: 'center', fontSize: '0.75rem', marginTop: 'var(--space-3)', color: 'var(--accent-hover)', fontWeight: 'bold' }}>
            View All Creators (44) →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
