import { useState } from 'react';
import { Send } from 'lucide-react';

const newsCategories = [
  { name: 'Ikyavedika Updates', count: 29 },
  { name: 'Community News', count: 178 },
  { name: 'News - Kharagpur', count: 8 },
  { name: 'News - APSKA', count: 3 },
  { name: 'News - Chhattisgarh', count: 6 },
  { name: 'News - AIPSKA', count: 12 },
  { name: 'News - Odisha', count: 8 },
  { name: 'News - Andhra Pradesh', count: 67 },
  { name: 'News - Rajam', count: 2 },
  { name: 'News - SK Youvatha', count: 11 },
  { name: 'Job Postings', count: 65 },
  { name: 'Our Youtubers', count: 44 },
  { name: 'Youth Portal', count: 9 },
  { name: 'SKIV Dandora', count: 2 }
];

const aboutAvatars = Array(6).fill('/images/avatar1.png');

const Footer = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Contact form submission placeholder
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__columns">
          {/* Column 1: News Categories */}
          <div className="footer__column">
            <h3 className="section-title">NEWS CATEGORIES</h3>
            <ul className="footer__category-list">
              {newsCategories.map((category, index) => (
                <li key={index} className="footer__category-item">
                  <a href="#" className="footer__category-link">
                    <span className="footer__category-arrow">&raquo;</span>
                    <span className="footer__category-name">{category.name}</span>
                    <span className="footer__category-count">{category.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: About */}
          <div className="footer__column">
            <h3 className="section-title">ABOUT SISTAKARANAM IKYAVEDIKA</h3>
            <div className="footer__about-avatars">
              {aboutAvatars.map((src, index) => (
                <div key={index} className="footer__about-avatar">
                  <img src={src} alt={`Community member ${index + 1}`} />
                </div>
              ))}
            </div>
            <p className="footer__about-text">
              As the name suggests, Sistakaranam Ikyavedika is not an association, but a
              platform that brings together all Sistakaranams under one digital roof. Our
              mission is to preserve our heritage, strengthen community bonds, and empower
              the next generation through technology and collaboration.{' '}
              <a href="#" className="footer__read-more">(Read More...)</a>
            </p>
          </div>

          {/* Column 3: Contact Us */}
          <div className="footer__column">
            <h3 className="section-title">CONTACT US</h3>
            <form className="footer__contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-input form-textarea"
                  placeholder="Your Message"
                  rows={4}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                />
              </div>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  required
                />
                <span>
                  I consent to having this website store my submitted information so they
                  can respond to my inquiry.
                </span>
              </label>
              <button type="submit" className="btn btn-primary btn-block">
                <Send size={16} />
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom-bar">
        <p className="footer__copyright">
          &copy; 2025 Sistakaranam Ikyavedika. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
