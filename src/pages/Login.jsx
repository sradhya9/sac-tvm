import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      if (email === 'admin@symposium.com') {
        navigate('/organizer');
      } else {
        navigate('/profile');
      }
    } catch (err) {
      setError('Failed to log in: ' + err.message);
      setLoading(false);
    }
  };

  return (
    <div className="auth-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="auth-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="auth-header">
          <h1>Participant Login</h1>
          <p>Access your tickets and certificates.</p>
        </div>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email Address</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="student@college.edu" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '3px solid var(--dark)', fontFamily: 'var(--font-body)', fontSize: '16px' }} />
          </div>
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '3px solid var(--dark)', fontFamily: 'var(--font-body)', fontSize: '16px' }} />
          </div>
          <button disabled={loading} type="submit" className="btn-accent auth-btn">
            {loading ? 'Logging in...' : 'Login to Dashboard'}
          </button>
          
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ fontWeight: 'bold' }}>
              Don't have a ticket yet? <Link to="/register" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Register Now</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
