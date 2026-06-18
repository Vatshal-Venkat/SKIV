import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import MatrimonyPage from './pages/MatrimonyPage';
import AdminPage from './pages/AdminPage';
import NewsDetailPage from './pages/NewsDetailPage';
import JobsPage from './pages/JobsPage';
import EventsPage from './pages/EventsPage';
import DirectoryPage from './pages/DirectoryPage';
import DemoLogin from './components/DemoLogin';
import { apiService } from './services/api';
import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => apiService.getCurrentUser());
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setIsLoginOpen(false);
    
    // Show a beautiful welcome toast for 2.5 seconds
    setWelcomeMessage(`Hello, ${user.display_name || user.username}`);
    setTimeout(() => {
      setWelcomeMessage('');
    }, 2500);
  };

  const handleLogout = () => {
    apiService.logout();
    setCurrentUser(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar 
          onLoginClick={() => setIsLoginOpen(true)} 
          currentUser={currentUser}
          onLogout={handleLogout}
        />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/matrimony" element={<MatrimonyPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
          </Routes>
        </div>

        <Footer />
        {isLoginOpen && (
          <DemoLogin 
            onClose={() => setIsLoginOpen(false)} 
            onLoginSuccess={handleLoginSuccess}
          />
        )}
        
        {/* Welcome Message Toast / Dialogue box */}
        {welcomeMessage && (
          <div className="welcome-dialogue-overlay">
            <div className="welcome-dialogue-card">
              <div className="welcome-dialogue-icon">
                <UserCheck size={20} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent)', fontWeight: 700 }}>
                  System Notification
                </h4>
                <p style={{ fontSize: '1rem', fontWeight: 600, marginTop: '2px', color: '#ffffff' }}>
                  {welcomeMessage}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
