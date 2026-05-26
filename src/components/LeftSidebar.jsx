import { useState } from 'react';
import {
  UserPlus,
  Heart,
  Briefcase,
  GitBranch,
  LogIn,
  Eye,
  EyeOff
} from 'lucide-react';

const LeftSidebar = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const avatars = Array(6).fill('/images/avatar1.png');

  return (
    <>
      {/* Login Widget */}
      <div className="sidebar-widget login-widget">
        <h3 className="section-title">WELCOME</h3>
        <div className="sidebar-widget__body">
          <form className="login-widget__form" onSubmit={handleLogin}>
            <input
              type="text"
              className="form-input"
              placeholder="Username or Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <button
                type="button"
                style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
            <label className="form-check">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <button type="submit" className="btn btn-primary btn-block login-widget__submit">
              <LogIn size={14} />
              LOGIN
            </button>
            <div className="login-widget__links">
              <a href="#" className="login-widget__link">Sign up</a>
              <a href="#" className="login-widget__link">Forgot password?</a>
              <a href="#" className="login-widget__link">Resend Activation Email</a>
            </div>
          </form>
        </div>
      </div>

      {/* Sign Up Widget */}
      <div className="sidebar-widget signup-widget">
        <h3 className="section-title">SIGN UP</h3>
        <div className="sidebar-widget__body">
          <div className="signup-widget__illustration">
            <UserPlus size={40} />
          </div>
          <p className="signup-widget__text">
            Join our growing community of Sistakaranams!
          </p>
          <button className="btn btn-primary btn-block" style={{ marginTop: 'var(--space-3)' }}>Create Account</button>
          <p className="signup-widget__text" style={{ marginTop: 'var(--space-3)', fontSize: 'var(--fs-xs)' }}>
            If you have trouble signing up, please send an email to{' '}
            <a href="mailto:support@skiv.online">support@skiv.online</a>
          </p>
        </div>
      </div>

      {/* Vivaha Vedika Widget */}
      <div className="sidebar-widget">
        <h3 className="section-title section-title--gold">VIVAHA VEDIKA</h3>
        <div className="sidebar-widget__body">
          <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
            <Heart size={40} style={{ color: 'var(--gold)' }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--fs-xs)', marginTop: 'var(--space-3)' }}>
              Find your perfect match within our community
            </p>
            <button className="btn btn-secondary btn-block" style={{ marginTop: 'var(--space-3)' }}>Browse Profiles</button>
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
            <button className="btn btn-secondary btn-block" style={{ marginTop: 'var(--space-3)' }}>View Jobs</button>
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
