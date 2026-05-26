import HeroCarousel from '../components/HeroCarousel';
import LeftSidebar from '../components/LeftSidebar';
import NewsFeed from '../components/NewsFeed';
import RightSidebar from '../components/RightSidebar';

const LandingPage = () => (
  <div className="landing-page">
    <HeroCarousel />
    <div className="content-layout">
      <aside className="sidebar-left">
        <LeftSidebar />
      </aside>
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
