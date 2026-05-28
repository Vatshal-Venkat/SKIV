import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="badge animate-fade-in">
          <Sparkles size={16} />
          <span>Introducing skiv.online Community Platform</span>
        </div>
        
        <h1 className="hero-title animate-fade-in delay-100">
          <span>Connect, Collaborate, and Grow your </span>
          <span className="highlight">Digital Community</span>
        </h1>
        
        <p className="hero-subtitle animate-fade-in delay-200">
          A sleek, modern community-building ecosystem powered by robust tools and interactive features. Engage your audience like never before.
        </p>
        
        <div className="hero-actions animate-fade-in delay-300">
          <button className="btn btn-primary">
            Get Started Free
            <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary">
            Explore Communities
          </button>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in delay-300">
          <img 
            src="/dashboard_mockup.png" 
            alt="skiv.online Community Dashboard Mockup" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
