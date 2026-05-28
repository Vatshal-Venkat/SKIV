import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import DemoLogin from './components/DemoLogin';
import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Router>
      <div className="app-layout">
        <Navbar onLoginClick={() => setIsLoginOpen(true)} />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
        <Footer />
        {isLoginOpen && <DemoLogin onClose={() => setIsLoginOpen(false)} />}
      </div>
    </Router>
  );
}

export default App;
