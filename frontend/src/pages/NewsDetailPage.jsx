import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, AlertCircle } from 'lucide-react';
import { apiService } from '../services/api';

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await apiService.getNewsArticleById(id);
        setArticle(data);
      } catch (err) {
        console.error("Failed to load news article:", err);
        setError("The news article could not be found or failed to load. Please verify the URL or try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="page-container" style={{ maxWidth: '800px', margin: '40px auto', padding: '0 var(--space-6)' }}>
        <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
          <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
          Loading article content...
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="page-container" style={{ maxWidth: '600px', margin: '80px auto', padding: '0 var(--space-6)' }}>
        <div className="glass-panel" style={{ padding: 'var(--space-6)', textAlign: 'center', border: '1px solid var(--border)' }}>
          <AlertCircle size={48} style={{ color: 'var(--danger)', marginBottom: 'var(--space-3)' }} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 'var(--space-2)' }}>Article Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: 'var(--space-6)' }}>{error}</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container news-detail-page" style={{ maxWidth: '900px', margin: '40px auto', padding: '0 var(--space-6) var(--space-10)' }}>
      {/* Back navigation */}
      <button 
        onClick={() => navigate('/')} 
        className="btn btn-secondary"
        style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          marginBottom: 'var(--space-6)',
          padding: '10px 18px',
          fontSize: '0.9rem',
          fontWeight: 700
        }}
      >
        <ArrowLeft size={16} />
        Back to News Feed
      </button>

      {/* Main Content Layout */}
      <article className="glass-panel" style={{ padding: 'var(--space-8)', border: '1px solid var(--border)', overflow: 'hidden' }}>
        
        {/* Header Metadata */}
        <div className="news-article__meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: 'var(--space-4)', fontSize: '0.82rem' }}>
          <span className="news-article__category" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)' }}>
            <Tag size={14} />
            {article.category}
          </span>
          <span className="news-article__date" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
            <Calendar size={14} />
            {article.date}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
            <User size={14} />
            {article.author}
          </span>
        </div>

        {/* Title */}
        <h1 style={{ 
          fontSize: '2.2rem', 
          fontWeight: 850, 
          letterSpacing: '-0.02em', 
          lineHeight: '1.25',
          color: 'var(--text-primary)',
          marginBottom: 'var(--space-6)'
        }}>
          {article.title}
        </h1>

        {/* Thumbnail Image (Only if available) */}
        {article.images && article.images[0] && !article.images[0].includes('unsplash.com') && (
          <div style={{ 
            width: '100%', 
            maxHeight: '450px', 
            borderRadius: 'var(--radius-lg)', 
            overflow: 'hidden', 
            border: '1px solid var(--border)',
            marginBottom: 'var(--space-6)',
            background: 'rgba(0,0,0,0.1)'
          }}>
            <img 
              src={article.images[0]} 
              alt={article.title} 
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>
        )}

        {/* Article Excerpt / Summary */}
        {article.excerpt && article.excerpt.length > 5 && (
          <div style={{ 
            fontSize: '1.1rem', 
            fontWeight: 500, 
            lineHeight: '1.6', 
            color: 'var(--text-secondary)',
            borderLeft: '4px solid var(--accent)',
            paddingLeft: 'var(--space-4)',
            margin: 'var(--space-6) 0'
          }}>
            {article.excerpt}
          </div>
        )}

        {/* Main Body content rendering HTML */}
        <div 
          className="news-detail-body" 
          dangerouslySetInnerHTML={{ __html: article.content }} 
          style={{ 
            fontSize: '1.05rem', 
            lineHeight: '1.8', 
            color: 'var(--text-primary)',
            marginTop: 'var(--space-6)'
          }}
        />

      </article>
    </div>
  );
};

export default NewsDetailPage;
