import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PageWrapper = ({ title, subtitle, children }) => {
  const navigate = useNavigate();

  return (
    <div className="page-container" style={{ padding: 'var(--space-8) 0 var(--space-12)', position: 'relative' }}>
      {/* Background Aurora Teal/Indigo radial glow */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.08) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(0,0,0,0) 100%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: '0 var(--space-6)', position: 'relative', zIndex: 1 }}>
        
        {/* Navigation Breadcrumb */}
        <button 
          onClick={() => navigate(-1)} 
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '8px 0',
            marginBottom: 'var(--space-6)',
            transition: 'color var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <ArrowLeft size={16} /> Back to Previous
        </button>

        {/* Dynamic Glowing Header */}
        <header className="page-header" style={{ marginBottom: 'var(--space-8)', position: 'relative' }}>
          <span 
            style={{ 
              display: 'block', 
              fontSize: '0.72rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.12em', 
              color: 'var(--accent)', 
              fontWeight: 800, 
              marginBottom: '6px' 
            }}
          >
            SKIV Portal Directory & Archives
          </span>
          <h1 
            style={{ 
              fontSize: '2.4rem', 
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: 'var(--space-3)', 
              background: 'var(--accent-gradient)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              display: 'inline-block',
              fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif"
            }}
          >
            {title}
          </h1>
          <p 
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem', 
              maxWidth: '700px', 
              lineHeight: '1.6',
              fontWeight: 500
            }}
          >
            {subtitle}
          </p>
        </header>

        {/* Dynamic Page Content */}
        <main className="page-content" style={{ position: 'relative' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;
