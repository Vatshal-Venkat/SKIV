import HeroCarousel from '../components/HeroCarousel';
import NewsFeed from '../components/NewsFeed';
import RightSidebar from '../components/RightSidebar';

const LandingPage = () => (
  <div className="landing-page">
    <div className="hero-container">
      <HeroCarousel />
    </div>
    <div className="content-layout">
      <main className="main-feed">
        <NewsFeed />
      </main>
      <aside className="sidebar-right">
        <RightSidebar />
      </aside>
    </div>
  </div>
);

export default LandingPage;
