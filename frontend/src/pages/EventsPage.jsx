import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Check, AlertTriangle } from 'lucide-react';
import { apiService } from '../services/api';

const EventsPage = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [rsvpState, setRsvpState] = useState({}); // { eventId: 'registered' }
  const [rsvpFormOpen, setRsvpFormOpen] = useState(null); // eventId
  const [rsvpInput, setRsvpInput] = useState({ name: '', email: '', count: '1' });
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await apiService.getEvents();
      setEvents(data);
    } catch (err) {
      setError("Failed to fetch events from database.");
    } finally {
      setLoading(false);
    }
  };

  const handleRsvpSubmit = async (e) => {
    e.preventDefault();
    setRsvpSuccess(true);
    
    try {
      const count = parseInt(rsvpInput.count) || 1;
      await apiService.rsvpEvent(rsvpFormOpen, count);
      await fetchEvents();
    } catch (err) {
      console.error("Failed to submit RSVP:", err);
    }

    setTimeout(() => {
      setRsvpState({ ...rsvpState, [rsvpFormOpen]: true });
      setRsvpFormOpen(null);
      setRsvpSuccess(false);
      setRsvpInput({ name: '', email: '', count: '1' });
    }, 2000);
  };

  const getParsedDate = (dateStr) => {
    try {
      const parts = dateStr.split(',');
      const monthDay = parts[0].trim().split(' ');
      const month = monthDay[0] || 'DATE';
      const day = monthDay[1] || '';
      const year = parts[1] ? parts[1].replace(/\(Passed\)/i, '').trim() : '';
      return { month, day, year };
    } catch (e) {
      return { month: 'DATE', day: '', year: dateStr };
    }
  };

  return (
    <div className="page-container events-page" style={{ maxWidth: 'var(--content-max-width)', margin: '40px auto', padding: '0 var(--space-6) var(--space-10)' }}>
      {/* Header navigation */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <button 
          onClick={() => navigate('/')} 
          className="btn btn-secondary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.9rem', fontWeight: 700 }}
        >
          <ArrowLeft size={16} />
          Back to Homepage
        </button>
      </div>

      {/* Title */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 850, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
          Community Events Calendar
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '1rem' }}>
          Browse scheduled meetings, festivals, workshops, and registrations for upcoming Sistakaranam gatherings.
        </p>
      </div>

      {/* Events List */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
          <div className="spinner" style={{ border: '3px solid var(--border)', borderTop: '3px solid var(--accent)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto var(--space-4)' }}></div>
          Loading events...
        </div>
      ) : error ? (
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
          <AlertTriangle size={36} style={{ color: '#ef4444', marginBottom: '12px' }} />
          <p>{error}</p>
        </div>
      ) : events.length === 0 ? (
        <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
          <Calendar size={40} style={{ color: 'var(--text-muted)', marginBottom: '12px' }} />
          <h3>No events found.</h3>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {events.map(ev => {
            const isClosed = ev.status === "Closed" || ev.title.includes("Passed") || ev.date.includes("Passed");
            const isRegistered = rsvpState[ev.id];
            const { month, day, year } = getParsedDate(ev.date);

            return (
              <div 
                key={ev.id} 
                className="glass-panel"
                style={{ 
                  padding: 'var(--space-6)', 
                  border: '1px solid var(--border)', 
                  borderRadius: 'var(--radius-lg)',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '24px',
                  alignItems: 'center',
                  opacity: isClosed ? 0.75 : 1
                }}
              >
                {/* Date Box */}
                <div 
                  style={{ 
                    width: '90px', 
                    height: '90px', 
                    borderRadius: 'var(--radius-md)', 
                    border: `1px solid ${isClosed ? 'var(--border)' : 'var(--accent)'}`,
                    background: isClosed ? 'rgba(255,255,255,0.01)' : 'var(--accent-glow)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '8px'
                  }}
                >
                  <span style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', color: isClosed ? 'var(--text-muted)' : 'var(--accent)' }}>
                    {month}
                  </span>
                  <span style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: '1' }}>
                    {day}
                  </span>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    {year}
                  </span>
                </div>


              {/* Details */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {ev.title}
                </h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} />{ev.time}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={14} />{ev.location}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Users size={14} />Hosted by: <strong>{ev.organizer}</strong></span>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginBottom: '8px' }}>
                  {ev.description}
                </p>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Active Registrants: <span style={{ color: 'var(--text-primary)' }}>{ev.registrations} members</span>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ minWidth: '150px', textAlign: 'right' }}>
                {isClosed ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, padding: '10px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
                    <AlertTriangle size={14} /> Event Ended
                  </span>
                ) : isRegistered ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#22c55e', fontWeight: 800, padding: '10px 16px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 'var(--radius-sm)' }}>
                    <Check size={14} /> RSVP Confirmed
                  </span>
                ) : (
                  <button 
                    onClick={() => setRsvpFormOpen(ev.id)}
                    className="btn btn-primary"
                    style={{ padding: '12px 24px', fontSize: '0.92rem', fontWeight: 800 }}
                  >
                    Register / RSVP
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    )}

      {/* Modal: RSVP registration */}
      {rsvpFormOpen && (
        <div className="welcome-dialogue-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="glass-panel" style={{ maxWidth: '480px', width: '100%', padding: 'var(--space-6)', border: '1px solid var(--border-strong)', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '4px', color: 'var(--text-primary)' }}>RSVP Registration</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Confirm your attendance and receive the program schedule email.
            </p>

            {rsvpSuccess ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <div style={{ display: 'inline-flex', width: '48px', height: '48px', borderRadius: '50%', background: '#22c55e', alignItems: 'center', justifyContent: 'center', color: '#ffffff', marginBottom: '12px' }}>
                  <Check size={24} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>RSVP Confirmed!</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>An invitation pass has been sent to your email.</p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Your Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={rsvpInput.name} 
                    onChange={e => setRsvpInput({...rsvpInput, name: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Email Address *</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    value={rsvpInput.email} 
                    onChange={e => setRsvpInput({...rsvpInput, email: e.target.value})} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '0.85rem', fontWeight: 700 }}>Number of Family Members Accompanying</label>
                  <select 
                    className="form-input" 
                    value={rsvpInput.count} 
                    onChange={e => setRsvpInput({...rsvpInput, count: e.target.value})}
                  >
                    <option value="1">1 (Self Only)</option>
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members</option>
                    <option value="5">5+ Members</option>
                  </select>
                </div>
                
                <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: '12px' }}>Confirm Attendance</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setRsvpFormOpen(null)} style={{ padding: '12px' }}>Cancel</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default EventsPage;
