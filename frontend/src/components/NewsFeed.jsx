import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Briefcase, Heart, Calendar } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'A Cricket Tournament to Remember',
    excerpt:
      'The vibrant celebration of Shivaratri overnight recreation was successfully organised by Sistakaranam Ikyavedika. The highlight of the night was the Cricket Tournament.',
    images: ['/images/event1.png'],
    date: 'March 15, 2025'
  },
  {
    id: 2,
    title: 'Delhi Sistakaranam Families Picnic',
    excerpt:
      'Delhi Picnic of our Sistakaranam families was organised by Sri D.S.Bharat, in what turned out to be a notable team effort.',
    images: ['/images/event3.png'],
    date: 'February 28, 2025'
  },
  {
    id: 3,
    title: 'Kharagpur Association Picnic',
    excerpt:
      'Visuals are from the Kharagpur Picnic organized by Sistakarana Youth, Womens Wing and Lakshmi Ganesh Temple Subcommittee.',
    images: ['/images/event2.png'],
    date: 'February 10, 2025'
  },
  {
    id: 4,
    title: 'Get-Together Mania 2025 - Nagpur',
    excerpt:
      'The Nagpur Sistakaranam Association successfully organized Get-Together Mania 2025 on 14 December 2025 at the picturesque Ghogra Madav temple.',
    images: ['/images/event4.png'],
    date: 'December 14, 2025'
  },
  {
    id: 5,
    title: 'Sistakaranams in Republic Day Celebrations',
    excerpt:
      'Sistakaranams celebrated Republic Day on January 26 at several places across the country with great enthusiasm.',
    images: ['/images/event4.png'],
    date: 'January 26, 2025'
  }
];

const TOTAL_PAGES = 10;

const NewsFeed = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= TOTAL_PAGES) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="news-feed">
      {/* Interactive Stats Dashboard */}
      <div className="stats-dashboard">
        <div className="stat-card">
          <div className="stat-card__icon" style={{ color: 'var(--accent)' }}>
            <Users size={20} />
          </div>
          <div className="stat-card__value">4,850+</div>
          <div className="stat-card__label">Members</div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon" style={{ color: 'var(--success)' }}>
            <Briefcase size={20} />
          </div>
          <div className="stat-card__value">28 Active</div>
          <div className="stat-card__label">Jobs Portal</div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon" style={{ color: 'var(--gold)' }}>
            <Heart size={20} />
          </div>
          <div className="stat-card__value">112 Matches</div>
          <div className="stat-card__label">Matrimony</div>
        </div>

        <div className="stat-card">
          <div className="stat-card__icon" style={{ color: 'var(--danger)' }}>
            <Calendar size={20} />
          </div>
          <div className="stat-card__value">3 Events</div>
          <div className="stat-card__label">Scheduled</div>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="welcome-banner">
        <p className="welcome-banner__label">Welcome to</p>
        <div className="welcome-banner__logo">
          <span className="welcome-banner__letter welcome-banner__letter--s">S</span>
          <span className="welcome-banner__letter welcome-banner__letter--k">K</span>
          <span className="welcome-banner__letter welcome-banner__letter--i">I</span>
          <span className="welcome-banner__letter welcome-banner__letter--v">V</span>
          <span className="welcome-banner__domain">.online</span>
        </div>
        <p className="welcome-banner__tagline">
          The official Website of Sistakaranam IkyaVedika
        </p>
      </div>

      {/* News Section */}
      <div className="news-section">
        <h2 className="section-title">NEWS & UPDATES</h2>

        <div className="news-list">
          {articles.map((article) => (
            <article key={article.id} className="news-article">
              <div className="news-article__image">
                <img
                  src={article.images[0]}
                  alt={article.title}
                  className="news-article__thumb"
                />
              </div>
              <div className="news-article__content">
                <div className="news-article__meta">
                  <span className="news-article__category">Community Update</span>
                  <span className="news-article__date">{article.date}</span>
                </div>
                <h3 className="news-article__title">{article.title}</h3>
                <p className="news-article__excerpt">{article.excerpt}</p>
                <div className="news-article__footer">
                  <a href="#" className="news-article__read-more">
                    READ MORE..
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className="pagination__btn pagination__btn--arrow"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination__btn ${
                page === currentPage ? 'pagination__btn--active' : ''
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="pagination__btn pagination__btn--arrow"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === TOTAL_PAGES}
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
