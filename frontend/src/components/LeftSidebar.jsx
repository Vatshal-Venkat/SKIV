import { Link } from 'react-router-dom';
import {
  Heart,
  Briefcase,
  GitBranch
} from 'lucide-react';

const LeftSidebar = () => {
  const avatars = Array(6).fill('/images/avatar1.png');

  return (
    <>
      {/* Vivaha Vedika Widget */}
      <div className="sidebar-widget">
        <h3 className="section-title section-title--gold">VIVAHA VEDIKA</h3>
        <div className="sidebar-widget__body">
          <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
            <Heart size={40} style={{ color: 'var(--gold)' }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-xs)', marginTop: 'var(--space-3)' }}>
              Find your perfect match within our community
            </p>
            <Link to="/matrimony" className="btn btn-secondary btn-block" style={{ display: 'block', marginTop: 'var(--space-3)', textDecoration: 'none' }}>Browse Profiles</Link>
          </div>
        </div>
      </div>

      {/* Job Postings Widget */}
      <div className="sidebar-widget">
        <h3 className="section-title">JOB POSTINGS</h3>
        <div className="sidebar-widget__body">
          <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
            <Briefcase size={40} style={{ color: 'var(--accent)' }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-xs)', marginTop: 'var(--space-3)' }}>
              Latest career opportunities shared by community members
            </p>
            <Link to="/jobs" className="btn btn-secondary btn-block" style={{ display: 'block', marginTop: 'var(--space-3)', textDecoration: 'none' }}>View Jobs</Link>
          </div>
        </div>
      </div>

      {/* YouTubers Widget */}
      <div className="sidebar-widget">
        <h3 className="section-title">OUR YOUTUBERS</h3>
        <div className="sidebar-widget__body">
          <div className="youtubers-widget__grid">
            {avatars.map((src, index) => (
              <div key={index} className="youtubers-widget__item">
                <img src={src} alt={`YouTuber ${index + 1}`} className="youtubers-widget__thumb" />
              </div>
            ))}
          </div>
          <a href="#" style={{ display: 'block', textAlign: 'center', marginTop: 'var(--space-3)', fontSize: 'var(--fs-xs)', color: 'var(--accent)' }}>
            View All Creators
          </a>
        </div>
      </div>

      {/* Family Tree Widget */}
      <div className="sidebar-widget">
        <h3 className="section-title">MY FAMILY TREE</h3>
        <div className="sidebar-widget__body">
          <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
            <GitBranch size={40} style={{ color: 'var(--accent)' }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-xs)', marginTop: 'var(--space-3)' }}>
              Trace and build your family connections
            </p>
            <button className="btn btn-secondary btn-block" style={{ marginTop: 'var(--space-3)' }}>Explore</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
