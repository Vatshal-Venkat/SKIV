import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Download, BookOpen, Calendar, ArrowRight, X, Info } from 'lucide-react';
import { apiService } from '../services/api';

const LekhaNewslettersPage = () => {
  const [selectedYear, setSelectedYear] = useState('2022');
  const [readModal, setReadModal] = useState(null); // newsletter object
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewslettersList = async () => {
      setLoading(true);
      try {
        const data = await apiService.getNewsletters();
        setNewsletters(data);
      } catch (err) {
        console.error("Failed to load newsletters:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNewslettersList();
  }, []);

  const handleDownload = async (issue) => {
    try {
      const updated = await apiService.trackNewsletterDownload(issue.id);
      setNewsletters(prev => prev.map(item => item.id === issue.id ? updated : item));
      if (issue.file_url) {
        window.open(issue.file_url, '_blank');
      } else {
        alert("No PDF file URL attached.");
      }
    } catch (err) {
      console.error("Download tracking failed:", err);
      if (issue.file_url) {
        window.open(issue.file_url, '_blank');
      }
    }
  };

  const filteredNewsletters = newsletters.filter(item => {
    if (selectedYear === 'Archived') {
      return item.year !== '2022' && item.year !== '2021';
    }
    return item.year === selectedYear;
  });

  return (
    <PageWrapper 
      title="Lekha Newsletters" 
      subtitle="Explore historical and recent editions of our monthly print and digital newsletter containing regional updates."
    >
      {/* Year Filter Strip */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '32px',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '12px'
      }}>
        {["2022", "2021", "Archived"].map(year => {
          const isActive = selectedYear === year;
          return (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              style={{
                background: 'none',
                border: 'none',
                color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                padding: '8px 16px',
                position: 'relative',
                transition: 'color 0.2s'
              }}
            >
              {year}
              {isActive && (
                <div style={{
                  position: 'absolute',
                  bottom: '-13px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--accent)',
                  boxShadow: '0 0 10px var(--accent)'
                }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Grid Layout */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
          <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '36px', height: '36px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
          Loading newsletters...
        </div>
      ) : filteredNewsletters.length === 0 ? (
        <div style={{ color: 'var(--text-secondary)', padding: '60px 0', textAlign: 'center' }}>
          No newsletter files uploaded for the year {selectedYear}.
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredNewsletters.map(issue => (
            <div 
              key={issue.id} 
              className="glass-panel" 
              style={{ 
                border: '1px solid var(--border)', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                transition: 'all 0.25s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {/* Document Cover Preview Mockup */}
              <div style={{ 
                height: '180px', 
                background: issue.coverBg, 
                padding: '20px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border)'
              }}>
                <div>
                  <span style={{ fontSize: '0.62rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sistakaranam Ikyavedika</span>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#fff', marginTop: '4px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>LEKHA</h4>
                </div>
                <div style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                  <p style={{ fontSize: '0.85rem', color: '#d4af37', fontWeight: 700 }}>{issue.title.replace('Lekha', '').replace('లేఖ', '').trim()}</p>
                  <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>{issue.publishedDate}</p>
                </div>
              </div>

              {/* Cover Details */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: '8px', fontWeight: 700 }}>Key Stories</h4>
                  <ul style={{ paddingLeft: '16px', margin: '0 0 20px', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {issue.mainStories.map((story, idx) => (
                      <li key={idx}>{story}</li>
                    ))}
                  </ul>
                </div>

                {/* Footer details & Action */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    <span>PDF • {issue.size}</span>
                    <span>{issue.downloads} Downloads</span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      onClick={() => setReadModal(issue)}
                      className="btn btn-outline btn-sm" 
                      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem' }}
                    >
                      <BookOpen size={12} /> Read
                    </button>
                    <button 
                      onClick={() => handleDownload(issue)}
                      className="btn btn-secondary btn-sm" 
                      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem' }}
                    >
                      <Download size={12} /> Download
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* In-app PDF Mock modal */}
      {readModal && (
        <div className="demo-login__overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 1000 }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '640px', background: '#080a10', border: '1px solid rgba(197, 160, 89, 0.4)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--border)', background: 'rgba(21, 25, 38, 0.6)' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#d4af37', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {readModal.title}
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Published: {readModal.publishedDate}</span>
              </div>
              <button 
                onClick={() => setReadModal(null)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body / Page Reader Mock */}
            <div style={{ padding: '32px 24px', height: '400px', overflowY: 'auto', background: '#111420', color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', lineHeight: '1.7' }}>
              <div style={{ maxWidth: '540px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#fff', fontFamily: "'Space Grotesk', sans-serif", borderBottom: '2px solid #d4af37', paddingBottom: '12px', marginBottom: '24px' }}>
                  LEKHA NEWSLETTER
                </h1>
                
                <p style={{ fontStyle: 'italic', color: '#d4af37', textAlign: 'center', marginBottom: '20px' }}>
                  Sistakaranam Ikyavedika Monthly Bulletin • {readModal.publishedDate}
                </p>

                <h3 style={{ color: 'var(--accent)', fontWeight: 800, borderLeft: '3px solid var(--accent)', paddingLeft: '8px', marginBottom: '12px' }}>
                  1. Editorial: Community Matchmaking & Meet-ups
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  We are delighted to report the success of our latest matrimonial gathering. With over 300 active participants representing gotrams like Atreya, Bharadwaja, and Koundinya, the event resulted in 24 confirmed matches. The board thanks the President and coordinators for hosting the delegation in Visakhapatnam.
                </p>

                <h3 style={{ color: 'var(--accent)', fontWeight: 800, borderLeft: '3px solid var(--accent)', paddingLeft: '8px', marginBottom: '12px' }}>
                  2. Financial Status & Audit Releases
                </h3>
                <p style={{ marginBottom: '24px' }}>
                  The annual audits of the Telangana State Association are complete. A digital balance sheet for FY 2025-26 has been published on the reports page. Members are requested to inspect the records to ensure absolute transparency.
                </p>

                <h3 style={{ color: 'var(--accent)', fontWeight: 800, borderLeft: '3px solid var(--accent)', paddingLeft: '8px', marginBottom: '12px' }}>
                  3. Historical Gotrams & Surnames
                </h3>
                <p>
                  As part of our community heritage project, we have started compiling mappings of regional surnames to their Gotrams. An interactive lookup tool is now available on the resources menu, mapping over 200 surnames dynamically.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 24px', borderTop: '1px solid var(--border)', background: 'rgba(21, 25, 38, 0.6)' }}>
              <button className="btn btn-secondary btn-sm" onClick={() => { handleDownload(readModal); setReadModal(null); }}>
                <Download size={14} /> Download PDF File
              </button>
            </div>

          </div>
        </div>
      )}

    </PageWrapper>
  );
};

export default LekhaNewslettersPage;
