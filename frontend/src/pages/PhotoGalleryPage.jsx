import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Image, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const PhotoGalleryPage = () => {
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const albums = [
    {
      id: 1,
      title: "Sistakaranam Annual Matrimony Meet 2026",
      year: "2026",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
      photos: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      title: "Ugadi Cultural Festival & Arts Assembly",
      year: "2026",
      thumbnail: "https://images.unsplash.com/photo-1610123598147-f63251994a1b?auto=format&fit=crop&w=600&q=80",
      photos: [
        "https://images.unsplash.com/photo-1610123598147-f63251994a1b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      title: "Youth Scholarship & Merit Awards Ceremony",
      year: "2025",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
      photos: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      title: "Historical Temple Preservation Meeting - Vizag",
      year: "2025",
      thumbnail: "https://images.unsplash.com/photo-1609137144813-2d20d2046db4?auto=format&fit=crop&w=600&q=80",
      photos: [
        "https://images.unsplash.com/photo-1609137144813-2d20d2046db4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const handleOpenAlbum = (album) => {
    setActiveAlbum(album);
    setActivePhotoIndex(0);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActivePhotoIndex(prev => prev === 0 ? activeAlbum.photos.length - 1 : prev - 1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActivePhotoIndex(prev => prev === activeAlbum.photos.length - 1 ? 0 : prev + 1);
  };

  return (
    <PageWrapper 
      title="Photo Gallery" 
      subtitle="Reliving moments of celebration, cultural assemblies, and community gatherings."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
        {albums.map(album => (
          <div 
            key={album.id}
            onClick={() => handleOpenAlbum(album)}
            className="glass-panel"
            style={{ 
              borderRadius: '16px', 
              overflow: 'hidden', 
              cursor: 'pointer',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            {/* Thumbnail */}
            <div style={{ height: '180px', width: '100%', position: 'relative', overflow: 'hidden' }}>
              <img 
                src={album.thumbnail} 
                alt={album.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(8, 10, 16, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.2s'
              }}
              className="gallery-hover-overlay"
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(12, 15, 29, 0.85)', padding: '8px 16px', borderRadius: '30px', border: '1px solid rgba(197,160,89,0.3)', color: '#d4af37', fontSize: '0.8rem', fontWeight: 700 }}>
                  <Eye size={14} /> Open Album
                </div>
              </div>
            </div>

            {/* Meta */}
            <div style={{ padding: '16px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Album Year: {album.year}
              </span>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '4px', lineHeight: '1.4' }}>
                {album.title}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                <Image size={12} /> {album.photos.length} Photo records
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Carousel */}
      {activeAlbum && (
        <div className="demo-login__overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 1000 }}>
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ 
              width: '100%', 
              maxWidth: '860px', 
              background: '#080a10', 
              border: '1px solid rgba(197, 160, 89, 0.45)', 
              borderRadius: '24px', 
              padding: '24px', 
              position: 'relative',
              boxShadow: '0 24px 80px rgba(0,0,0,0.85)'
            }}
          >
            {/* Close */}
            <button 
              onClick={() => setActiveAlbum(null)}
              style={{ 
                position: 'absolute', 
                top: '20px', 
                right: '20px', 
                border: 'none', 
                background: 'rgba(197, 160, 89, 0.1)', 
                color: '#d4af37', 
                borderRadius: '50%', 
                width: '36px', 
                height: '36px', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <X size={18} />
            </button>

            {/* Title */}
            <div style={{ marginBottom: '16px', maxWidth: '780px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#d4af37', fontFamily: "'Space Grotesk', sans-serif" }}>
                {activeAlbum.title}
              </h3>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Album Year: {activeAlbum.year}</span>
            </div>

            {/* Slider */}
            <div style={{ 
              width: '100%', 
              height: '420px', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              background: '#02040a',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={activeAlbum.photos[activePhotoIndex]} 
                alt={`Photo ${activePhotoIndex + 1}`} 
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
              />

              {/* Prev */}
              <button 
                onClick={handlePrev}
                style={{ 
                  position: 'absolute', 
                  left: '16px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  background: 'rgba(8, 10, 16, 0.75)', 
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#fff', 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next */}
              <button 
                onClick={handleNext}
                style={{ 
                  position: 'absolute', 
                  right: '16px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  background: 'rgba(8, 10, 16, 0.75)', 
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#fff', 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicators */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '16px' }}>
              {activeAlbum.photos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIndex(idx)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: 'none',
                    background: activePhotoIndex === idx ? '#d4af37' : 'rgba(255,255,255,0.15)',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                />
              ))}
            </div>

          </div>
        </div>
      )}

    </PageWrapper>
  );
};

export default PhotoGalleryPage;
