import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { BookOpen, Download, X, ExternalLink } from 'lucide-react';

const HistoryPage = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "Sistakaranamula Sampoorna Charitra",
      author: "Kondavalasa Chalapathi Rao Patnaik",
      year: "1982",
      format: "PDF Book (High Scan Quality)",
      size: "24.5 MB",
      coverColor: "#7c2d12", // dark orange-brown
      description: "A comprehensive treatise documenting the origins of Sistakaranams, historical migration routes from Gajapati kingdom in Odisha to north Andhra, gotrams mapping, and prominent family lineage genealogies.",
      chapters: [
        "Chapter 1: The Gajapati Kingdom and historical administrators",
        "Chapter 2: Administrative Karana titles and Surnames origins",
        "Chapter 3: Gotra ancestries and Rig Vedic lineage mappings",
        "Chapter 4: Migration routes to Kalinga, Srikakulam, and Vizag"
      ]
    },
    {
      id: 2,
      title: "Sista Karana Charitra & Genealogy Records",
      author: "Sri D. N. Rao Patnaik",
      year: "1995",
      format: "PDF (Digital Archive)",
      size: "18.2 MB",
      coverColor: "#064e3b", // dark green
      description: "An in-depth study of Kalinga admin hierarchies, gotram tables, regional sub-castes, and family histories of southern Odisha and northeastern Andhra districts.",
      chapters: [
        "Chapter 1: Administrative roles in medieval royal assemblies",
        "Chapter 2: Surnames analysis (Patnaik, Potnuru, Pujari, Behara)",
        "Chapter 3: Gotram linkages with sages (Kasyapa, Gautama, Atreya)"
      ]
    },
    {
      id: 3,
      title: "Karana Janmulu & Cultural Contributions",
      author: "Sri B. S. Ganesh Patnaik",
      year: "2010",
      format: "E-Pub / PDF",
      size: "12.4 MB",
      coverColor: "#1e3a8a", // dark blue
      description: "A celebration of prominent scholars, poets, judges, and administrators from the community who contributed to literature, law, and arts.",
      chapters: [
        "Chapter 1: Poets of the Gajapati Court",
        "Chapter 2: Administrators under East India Company & British Rule",
        "Chapter 3: Modern pioneers in education and law"
      ]
    }
  ];

  const articles = [
    {
      id: 1,
      title: "The Gajapati Connection: Sistakaranams as Royal Scribes",
      author: "Dr. K. Prasad Patnaik",
      source: "SKIV Heritage Journal",
      link: "#"
    },
    {
      id: 2,
      title: "Understanding Gotrams & Exogamy Rules in Sistakaranams",
      author: "Sri Sarat Chandra Patnaik",
      source: "AISKA Publications",
      link: "#"
    }
  ];

  return (
    <PageWrapper 
      title="Historical Profile & Publications" 
      subtitle="Preserving community histories, genealogy books, and research articles for future generations."
    >
      {/* Bookshelf Render */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#d4af37', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, marginBottom: '24px', borderBottom: '1px solid rgba(197, 160, 89, 0.15)', paddingBottom: '6px' }}>
          Digitized Literature & Publications
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
          {books.map(book => (
            <div 
              key={book.id} 
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
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {/* Stand Book Spine/Display Cover */}
              <div style={{
                height: '200px',
                background: book.coverColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                borderBottom: '4px solid #d4af37',
                position: 'relative'
              }}>
                {/* Book texture lines */}
                <div style={{ position: 'absolute', left: '16px', top: 0, bottom: 0, width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '3px', background: 'rgba(255,255,255,0.05)' }}></div>
                
                <div style={{ textAlign: 'center', color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, fontFamily: "Georgia, serif", lineHeight: '1.3', marginBottom: '8px' }}>
                    {book.title}
                  </h4>
                  <p style={{ fontSize: '0.72rem', color: '#d4af37', fontStyle: 'italic' }}>
                    {book.author}
                  </p>
                </div>
              </div>

              {/* Book Info Details */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                    <span>Estd. {book.year}</span>
                    <span>{book.size}</span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                    {book.description.substring(0, 110)}...
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={() => setSelectedBook(book)}
                    className="btn btn-outline btn-sm" 
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem' }}
                  >
                    <BookOpen size={12} /> Read
                  </button>
                  <button 
                    onClick={() => alert("Book PDF download started.")}
                    className="btn btn-secondary btn-sm" 
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem' }}
                  >
                    <Download size={12} /> Download
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Historical Blogs & Essays */}
      <section>
        <h2 style={{ fontSize: '1.25rem', color: '#d4af37', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid rgba(197, 160, 89, 0.15)', paddingBottom: '6px' }}>
          Historical Blogs & Research Essays
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
          {articles.map(art => (
            <div key={art.id} className="glass-panel" style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {art.title}
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  By {art.author} • {art.source}
                </span>
              </div>
              <a 
                href={art.link} 
                onClick={(e) => { e.preventDefault(); alert("Mock article redirect initiated."); }}
                style={{ color: 'var(--accent)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Online Book Reader Modal */}
      {selectedBook && (
        <div className="demo-login__overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 1000 }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '680px', background: '#080a10', border: '1px solid rgba(197, 160, 89, 0.4)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--border)', background: 'rgba(21, 25, 38, 0.6)' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#d4af37', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {selectedBook.title}
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Author: {selectedBook.author} • {selectedBook.format}</span>
              </div>
              <button 
                onClick={() => setSelectedBook(null)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body / Book Details */}
            <div style={{ padding: '32px 24px', height: '420px', overflowY: 'auto', background: '#111420', color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', lineHeight: '1.7' }}>
              <div style={{ maxWidth: '560px', margin: '0 auto' }}>
                <h4 style={{ color: '#d4af37', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Book Synopsis</h4>
                <p style={{ marginBottom: '24px', fontStyle: 'italic' }}>
                  "{selectedBook.description}"
                </p>

                <h4 style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Chapters Directory</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedBook.chapters.map((ch, index) => (
                    <div key={index} style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', fontSize: '0.85rem' }}>
                      {ch}
                    </div>
                  ))}
                </div>

                <div style={{ height: '30px' }}></div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                  Full book text is restricted to registered members only. Contact support.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 24px', borderTop: '1px solid var(--border)', background: 'rgba(21, 25, 38, 0.6)' }}>
              <button className="btn btn-secondary btn-sm" onClick={() => { alert("PDF download started."); setSelectedBook(null); }}>
                <Download size={14} /> Download PDF ({selectedBook.size})
              </button>
            </div>

          </div>
        </div>
      )}

    </PageWrapper>
  );
};

export default HistoryPage;
