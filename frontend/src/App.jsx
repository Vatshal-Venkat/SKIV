import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import MatrimonyPage from './pages/MatrimonyPage';
import DemoLogin from './components/DemoLogin';
import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar onLoginClick={() => setIsLoginOpen(true)} />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/matrimony" element={<MatrimonyPage />} />
          </Routes>
        </div>
        <Footer />
        {isLoginOpen && <DemoLogin onClose={() => setIsLoginOpen(false)} />}
      </div>
    </Router>
  );
}

export default App;
