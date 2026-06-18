import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import MatrimonyPage from './pages/MatrimonyPage';
import DemoLogin from './components/DemoLogin';
import { apiService } from './services/api';
import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => apiService.getCurrentUser());

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setIsLoginOpen(false);
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
          </Routes>
        </div>
        <Footer />
        {isLoginOpen && (
          <DemoLogin 
            onClose={() => setIsLoginOpen(false)} 
            onLoginSuccess={handleLoginSuccess}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
