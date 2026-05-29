import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Download } from 'lucide-react';
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
          <h4 className="section-title" style={{ color: 'var(--gold)' }}>VIVAHA VEDIKA</h4>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
            Featured matrimonial profile in our community lobby:
          </p>
          <div className="featured-profile">
            <img src="/images/avatar1.png" alt="Featured Profile" className="profile-avatar" />
            <div className="profile-details">
              <span className="profile-name">Sri V. Rahul Karanam</span>
              <span className="profile-meta">28 Yrs • B.Tech (Software Developer) • Bangalore</span>
            </div>
          </div>
          <Link to="/matrimony" className="btn btn-secondary btn-sm btn-block" style={{ marginTop: 'var(--space-4)' }}>
            Browse Matrimony Lobby
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
          <div className="lekha-edition-card" onClick={(e) => { e.preventDefault(); alert('Downloading Telugu Edition...'); }}>
            <div className="lekha-edition-banner-container">
              <img src={lekhaTelugu} alt="Sistakaranam Lekha Telugu" className="lekha-edition-banner-img" />
              <div className="lekha-edition-overlay">
                <Download className="lekha-download-btn-icon" />
                <span className="lekha-download-btn-text">PDF డౌన్‌లోడ్</span>
              </div>
            </div>
            <div className="lekha-edition-meta">
              <span>మే 2026</span>
              <span>సంపుటి 12, సంచిక 4</span>
              <span>28 పేజీలు</span>
            </div>
          </div>

          {/* Lekha Archives Link */}
          <a href="#" className="lekha-archives-link" onClick={(e) => e.preventDefault()}>
            Lekha Archives
          </a>
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
