import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QrCode, CheckCircle, Ticket as TicketIcon } from 'lucide-react';
import { tracks } from '../utils/mockData';
import { db, auth } from '../config/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Auth.css';

const Register = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [year, setYear] = useState('');
  const [college, setCollege] = useState('');
  const [github, setGithub] = useState('');
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [ticketId, setTicketId] = useState('');
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If we're mounting, generate a random ticket ID just in case
    setTicketId(`TCK-${Math.floor(Math.random() * 90000) + 10000}`);
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleTrackToggle = (id) => {
    setSelectedTracks(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      
      // Create Auth User
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userData = {
        name,
        email,
        phone,
        year,
        college,
        github,
        selectedTracks,
        ticketId,
        timestamp: serverTimestamp()
      };
      
      // Save registration data to Firestore using user UID
      await setDoc(doc(db, "registrations", user.uid), userData);
      
      setLoading(false);
      setStep(3); // Step 3 is the Ticket View
    } catch (err) {
      setError('Failed to complete registration: ' + err.message);
      setLoading(false);
    }
  };

  const userTracks = tracks.filter(t => selectedTracks.includes(t.id));

  return (
    <div className="auth-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="auth-card" style={{ maxWidth: step === 3 ? '800px' : '600px', margin: '0 auto' }}>
        
        {step < 3 && (
          <div className="auth-header">
            <h1>Registration (Step {step}/2)</h1>
            <p>Register for the National-Level Tech Symposium.</p>
          </div>
        )}
        
        {error && <div className="auth-error">{error}</div>}
        
        {step === 1 && (
          <form onSubmit={handleNext} className="auth-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
            </div>
            <div className="form-group grid-responsive-register">
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email Address</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="student@college.edu" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '3px solid var(--dark)', fontFamily: 'var(--font-body)', fontSize: '16px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Create Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" minLength="6" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '3px solid var(--dark)', fontFamily: 'var(--font-body)', fontSize: '16px' }} />
              </div>
            </div>
            <div className="form-group grid-responsive-register">
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Phone Number</label>
                <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 9876543210" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '3px solid var(--dark)', fontFamily: 'var(--font-body)', fontSize: '16px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>College / Institution</label>
                <input type="text" required value={college} onChange={(e) => setCollege(e.target.value)} placeholder="College Name" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '3px solid var(--dark)', fontFamily: 'var(--font-body)', fontSize: '16px' }} />
              </div>
            </div>
            <div className="form-group">
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Year of Study</label>
              <select required value={year} onChange={(e) => setYear(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '3px solid var(--dark)', fontFamily: 'var(--font-body)', fontSize: '16px', backgroundColor: 'var(--white)' }}>
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="PG">Postgraduate</option>
              </select>
            </div>
            <div className="form-group">
              <label>GitHub / LinkedIn URL (Optional)</label>
              <input type="url" value={github} onChange={(e) => setGithub(e.target.value)} placeholder="https://github.com/yourusername" />
            </div>
            <button type="submit" className="btn-accent auth-btn">Proceed to Event Selection &rarr;</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="auth-form">
            <label style={{ display: 'block', marginBottom: '16px', fontWeight: 'bold' }}>Select Tracks / Workshops</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {tracks.map(track => (
                <label key={track.id} style={{
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', border: '2px solid var(--dark)', borderRadius: '8px', cursor: 'pointer', backgroundColor: selectedTracks.includes(track.id) ? 'var(--accent)' : 'var(--white)'
                }}>
                  <input type="checkbox" checked={selectedTracks.includes(track.id)} onChange={() => handleTrackToggle(track.id)} style={{ width: '20px', height: '20px' }} />
                  <div>
                    <strong>{track.title}</strong>
                    <div style={{ fontSize: '12px', opacity: 0.8 }}>{track.type}</div>
                  </div>
                </label>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" onClick={() => setStep(1)} className="btn-secondary auth-btn" style={{ flex: 1 }}>Back</button>
              <button disabled={loading || selectedTracks.length === 0} type="submit" className="btn-primary auth-btn" style={{ flex: 2 }}>
                {loading ? 'Processing...' : 'Confirm Booking'}
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="ticket-view" style={{ textAlign: 'left' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <CheckCircle size={64} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
              <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Registration Confirmed!</h1>
              <p>Your booking is successful. Present this ticket at the venue.</p>
            </div>

            <div style={{ 
              backgroundColor: 'var(--accent)', 
              padding: '40px', 
              borderRadius: '24px', 
              border: '4px solid var(--dark)', 
              boxShadow: '12px 12px 0 var(--dark)',
              color: 'var(--dark)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px dashed var(--dark)', paddingBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2 style={{ fontSize: '32px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <TicketIcon size={32} /> NATIONAL TECH SYMPOSIUM
                  </h2>
                  <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Trivandrum Chapter</div>
                </div>
                <div style={{ padding: '12px', backgroundColor: 'var(--white)', border: '3px solid var(--dark)', borderRadius: '12px' }}>
                  <QrCode size={80} />
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', opacity: 0.8 }}>Participant Name</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{name}</div>
                </div>
                <div>
                  <div style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', opacity: 0.8 }}>Institution</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{college}</div>
                </div>
                <div>
                  <div style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', opacity: 0.8 }}>Year</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{year}</div>
                </div>
                <div>
                  <div style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', opacity: 0.8 }}>Ticket ID</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{ticketId}</div>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--white)', padding: '24px', borderRadius: '16px', border: '3px solid var(--dark)' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Confirmed Tracks</h3>
                <ul style={{ paddingLeft: '24px', fontWeight: 'bold', fontSize: '16px' }}>
                  {userTracks.map(track => (
                    <li key={track.id}>{track.title}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <Link to="/" className="btn-secondary" style={{ padding: '16px 32px', display: 'inline-block', fontWeight: 'bold', borderRadius: '12px', border: '2px solid var(--dark)' }}>
                Return to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
