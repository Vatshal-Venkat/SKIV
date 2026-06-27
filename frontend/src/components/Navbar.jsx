import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Crown,
  Rss,
  Search,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

const Facebook = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

const navLinks = [
  { label: 'HOME', href: '/', dropdown: null },
  {
    label: 'COMMUNITY',
    href: '#',
    dropdown: [
      { label: 'Events Hub', href: '/events' },
      { label: 'Jobs & Careers', href: '/jobs' },
      { label: 'Business Listings', href: '/business-listings' },
      { label: 'Our YouTubers', href: '/youtubers' },
      { label: 'Our Journalists', href: '/journalists' }
    ]
  },
  {
    label: 'CHRONICLES',
    href: '#',
    dropdown: [
      { label: 'Lekha Newsletters', href: '/lekha-newsletters' },
      { label: 'Official Reports', href: '/reports' },
      { label: 'Photo Gallery', href: '/gallery' }
    ]
  },
  {
    label: 'RESOURCES',
    href: '#',
    dropdown: [
      { label: 'Government Notifications', href: '/gov-notifications' },
      { label: 'Historical Profile', href: '/history' },
      { label: 'Surnames & Gotrams', href: '/identities' }
    ]
  },
  {
    label: 'PEOPLE',
    href: '#',
    dropdown: [
      { label: 'Matrimony Registry', href: '/matrimony' },
      { label: 'Community Directory', href: '/directory' },
      { label: 'Our Fraternity', href: '/fraternity' }
    ]
  }
];

const Navbar = ({ onLoginClick, currentUser, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (index) => setActiveDropdown(index);
  const handleDropdownLeave = () => setActiveDropdown(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Brand/Logo */}
        <Link to="/" className="navbar__brand">
          <div className="navbar__emblem">
            <Crown size={20} />
          </div>
          <div className="navbar__brand-text">
            <h1 className="navbar__title">Sistakaranam Ikyavedika</h1>
            <p className="navbar__tagline">One Digital Platform for all Sistakaranams</p>
          </div>
        </Link>

        {/* Center Nav Links */}
        <div className="navbar__nav hide-mobile">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className={`navbar__item ${activeDropdown === index ? 'navbar__item--open' : ''}`}
              onMouseEnter={() => link.dropdown && handleDropdownEnter(index)}
              onMouseLeave={() => link.dropdown && handleDropdownLeave()}
            >
              {link.href.startsWith('/') ? (
                <Link
                  to={link.href}
                  className={`navbar__link ${link.href === '/' ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={10} className="navbar__link-chevron" />}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={`navbar__link ${link.href === '/' ? 'navbar__link--active' : ''}`}
                  onClick={(e) => {
                    if (link.dropdown) e.preventDefault();
                  }}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={10} className="navbar__link-chevron" />}
                </a>
              )}

              {link.dropdown && (
                <div className="navbar__dropdown">
                  {link.dropdown.map((item, subIndex) => 
                    item.href.startsWith('/') ? (
                      <Link
                        key={subIndex}
                        to={item.href}
                        className="navbar__dropdown-link"
                        style={item.accent ? { color: 'var(--gold)' } : {}}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={subIndex}
                        href={item.href}
                        className="navbar__dropdown-link"
                        style={item.accent ? { color: 'var(--gold)' } : {}}
                      >
                        {item.label}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="navbar__actions">
          <form className="navbar__search hide-mobile" onSubmit={handleSearchSubmit}>
            <Search size={14} className="navbar__search-icon" />
            <input
              type="text"
              className="navbar__search-input"
              placeholder="Search portal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* Auth Button */}
          <div className="navbar__auth" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            {currentUser ? (
              <>
                {currentUser.is_admin && (
                  <Link to="/admin" className="btn btn-secondary btn-sm" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                    Admin Panel
                  </Link>
                )}
                <button className="btn btn-outline btn-sm" onClick={onLogout}>Logout</button>
              </>
            ) : (
              <button className="btn btn-primary btn-sm" onClick={onLoginClick}>Login</button>
            )}
          </div>

          <button
            className="navbar__hamburger show-mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {navLinks.map((link, index) => (
          <div key={index} className="navbar__item">
            {link.href.startsWith('/') ? (
              <Link
                to={link.href}
                className="navbar__link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => { if (!link.dropdown) setMobileMenuOpen(false); }}
              >
                {link.label}
              </a>
            )}
            
            {link.dropdown && (
              <div className="navbar__dropdown">
                {link.dropdown.map((item, subIndex) => 
                  item.href.startsWith('/') ? (
                    <Link
                      key={subIndex}
                      to={item.href}
                      className="navbar__dropdown-link"
                      onClick={() => setMobileMenuOpen(false)}
                      style={item.accent ? { color: 'var(--gold)' } : {}}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={subIndex}
                      href={item.href}
                      className="navbar__dropdown-link"
                      onClick={() => setMobileMenuOpen(false)}
                      style={item.accent ? { color: 'var(--gold)' } : {}}
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        ))}
        
        <div className="navbar__mobile-auth" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
          {currentUser ? (
            <>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                Hello, <strong>{currentUser.display_name || currentUser.username}</strong>
              </span>
              {currentUser.is_admin && (
                <Link to="/admin" className="btn btn-secondary btn-sm" onClick={() => setMobileMenuOpen(false)}>
                  Admin Panel
                </Link>
              )}
              <button className="btn btn-outline btn-sm" onClick={() => { onLogout(); setMobileMenuOpen(false); }}>Logout</button>
            </>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={() => { onLoginClick(); setMobileMenuOpen(false); }}>Login</button>
          )}
        </div>

        <div className="navbar__mobile-social">
          <a href="#" className="navbar__social-link navbar__social-link--rss"><Rss size={16} /></a>
          <a href="#" className="navbar__social-link navbar__social-link--fb"><Facebook size={16} /></a>
          <a href="#" className="navbar__social-link navbar__social-link--x"><Twitter size={16} /></a>
          <a href="#" className="navbar__social-link navbar__social-link--insta"><Instagram size={16} /></a>
          <a href="#" className="navbar__social-link navbar__social-link--yt"><Youtube size={16} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
