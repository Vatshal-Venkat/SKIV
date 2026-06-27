import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { ExternalLink, Award } from 'lucide-react';

const Youtube = ({ size = 16, fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

const YouTubersPage = () => {
  const creators = [
    {
      id: 1,
      channelName: "Ammamma Chethi Ruchulu",
      host: "Smt. Radha Patnaik",
      location: "Visakhapatnam, AP",
      category: "Food & Cooking",
      subs: "45K Subscribers",
      videos: "340+ Videos",
      description: "Authentic, traditional Andhra recipes, home remedies, and festival snacks taught with simple step-by-step instructions. Re-live the taste of grandma's kitchen.",
      banner: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
      link: "https://youtube.com/example-ammamma"
    },
    {
      id: 2,
      channelName: "Tech & Travel with Vinay",
      host: "Sri Vinay Patnaik",
      location: "Bengaluru, Karnataka",
      category: "Technology & Vlog",
      subs: "120K Subscribers",
      videos: "180+ Videos",
      description: "Tech setups, programming tutorials, product reviews, and visual travel vlogs exploring south India's architectural monuments.",
      banner: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      link: "https://youtube.com/example-vinaytech"
    },
    {
      id: 3,
      channelName: "Sistakaranam Classical Tunes",
      host: "Sri K. Ramakrishna Patnaik",
      location: "Chennai, Tamil Nadu",
      category: "Carnatic Music",
      subs: "12K Subscribers",
      videos: "90+ Videos",
      description: "Classical Carnatic violin and vocal recitals, ragas analysis, and training sessions for beginners. Dedicated to preserving musical heritage.",
      banner: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
      link: "https://youtube.com/example-classicaltunes"
    },
    {
      id: 4,
      channelName: "Karanam Financial Edu",
      host: "Sri G. Venkata Ramana",
      location: "Hyderabad, Telangana",
      category: "Finance & Taxation",
      subs: "28K Subscribers",
      videos: "150+ Videos",
      description: "Explaining income tax filing, corporate finance laws, investment planning, and personal budget metrics in simple Telugu.",
      banner: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
      link: "https://youtube.com/example-karanamfinance"
    }
  ];

  return (
    <PageWrapper 
      title="Our YouTubers" 
      subtitle="Watch, subscribe, and share content from digital creators and channels run by community members."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
        {creators.map(creator => (
          <div 
            key={creator.id} 
            className="glass-panel" 
            style={{ 
              border: '1px solid var(--border)', 
              borderRadius: '20px', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            {/* Banner image */}
            <div style={{ width: '100%', height: '140px', position: 'relative', overflow: 'hidden' }}>
              <img 
                src={creator.banner} 
                alt={creator.channelName} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }} 
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(239, 68, 68, 0.95)',
                color: '#fff',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '0.68rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Youtube size={12} fill="#fff" /> YouTube Creator
              </div>
            </div>

            {/* Details */}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 800, 
                    color: 'var(--accent)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em' 
                  }}>
                    {creator.category}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {creator.subs} • {creator.videos}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif", marginBottom: '8px' }}>
                  {creator.channelName}
                </h3>

                <p style={{ fontSize: '0.82rem', color: '#d4af37', marginBottom: '12px', fontWeight: 600 }}>
                  Host: {creator.host} ({creator.location})
                </p>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                  {creator.description}
                </p>
              </div>

              {/* Action Button */}
              <a 
                href={creator.link} 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px', 
                  padding: '12px',
                  background: 'linear-gradient(135deg, #ef4444 0%, #991b1b 100%)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 15px rgba(239, 68, 68, 0.25)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
              >
                <Youtube size={16} fill="#fff" /> Subscribe Channel <ExternalLink size={12} />
              </a>
            </div>

          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default YouTubersPage;
