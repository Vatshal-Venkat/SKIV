import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Briefcase, Heart, Calendar, Info } from 'lucide-react';
import { apiService } from '../services/api';

const ITEMS_PER_PAGE = 3;

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchLiveArticles = async () => {
      setLoading(true);
      try {
        const liveData = await apiService.getNewsArticles();
        setArticles(liveData);
      } catch (err) {
        console.error("Failed to load live news feed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLiveArticles();
  }, []);

  const totalPages = Math.max(1, Math.ceil(articles.length / ITEMS_PER_PAGE));

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
          <div className="stat-card__value">359 Matches</div>
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

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
            <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '36px', height: '36px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
            Loading latest updates...
          </div>
        ) : articles.length === 0 ? (
          <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
            <Info size={36} style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-2)' }} />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>No announcements published yet</h3>
            <p style={{ fontSize: '0.82rem', marginTop: '4px' }}>Please log in to the admin panel to publish community updates.</p>
          </div>
        ) : (
          <>
            <div className="news-list">
              {currentArticles.map((article) => (
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
                      <span className="news-article__category">{article.category}</span>
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

            {/* Pagination (Only show if multiple pages exist) */}
            {totalPages > 1 && (
              <div className="pagination" style={{ marginTop: 'var(--space-6)' }}>
                <button
                  className="pagination__btn pagination__btn--arrow"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
