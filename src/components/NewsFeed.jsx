import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <p className="welcome-banner__intro">Welcome to</p>
        <div className="welcome-banner__logo">
          <span className="welcome-banner__letter welcome-banner__letter--red">S</span>
          <span className="welcome-banner__letter welcome-banner__letter--green">K</span>
          <span className="welcome-banner__letter welcome-banner__letter--blue">I</span>
          <span className="welcome-banner__letter welcome-banner__letter--yellow">V</span>
          <span className="welcome-banner__dot-online">.online</span>
        </div>
        <p className="welcome-banner__tagline">
          The official Website of Sistakaranam IkyaVedika
        </p>
      </div>

      {/* News Section */}
      <div className="news-section">
        <h2 className="news-section__heading">News</h2>

        <div className="news-section__articles">
          {articles.map((article) => (
            <article key={article.id} className="news-card">
              <div className="news-card__image-wrapper">
                <img
                  src={article.images[0]}
                  alt={article.title}
                  className="news-card__image"
                />
              </div>
              <div className="news-card__content">
                <h3 className="news-card__title">{article.title}</h3>
                <span className="news-card__date">{article.date}</span>
                <p className="news-card__excerpt">{article.excerpt}</p>
                <a href="#" className="news-card__read-more">
                  READ MORE..
                </a>
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
