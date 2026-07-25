import { useState, useEffect } from 'react';
import { TrendingUp, Users, Activity, CheckCircle, Ticket, Lock, LogOut } from 'lucide-react';
import { db, auth } from '../config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { tracks as availableTracks } from '../utils/mockData';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const ADMIN_EMAIL = 'admin@symposium.com';

const OrganizerDashboard = () => {
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    colleges: 0,
    checkIns: 0,
    trackCounts: {}
  });
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser.email === ADMIN_EMAIL) {
      const unsubscribe = onSnapshot(collection(db, 'registrations'), (snapshot) => {
        let total = 0;
      const collegeSet = new Set();
      const counts = {};

      // Initialize counts based on available tracks
      availableTracks.forEach(t => { counts[t.id] = 0; });

      snapshot.forEach(doc => {
        const data = doc.data();
        total++;
        if (data.college) {
          collegeSet.add(data.college.toLowerCase().trim());
        }
        
        if (data.selectedTracks && Array.isArray(data.selectedTracks)) {
          data.selectedTracks.forEach(trackId => {
            if (counts[trackId] !== undefined) {
              counts[trackId]++;
            }
          });
        }
      });

      setStats({
        totalRegistrations: total,
        colleges: collegeSet.size,
        checkIns: Math.floor(total * 0.7),
        trackCounts: counts
      });
      setLoading(false);
    });

    return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error("Failed to log out", err);
    }
  };

  if (currentUser === null) {
    return (
      <div className="page-container container" style={{ textAlign: 'center', marginTop: '120px' }}>
        <Lock size={64} style={{ color: 'var(--primary)', marginBottom: '16px', display: 'inline-block' }} />
        <h1>Admin Access Required</h1>
        <p style={{ marginBottom: '24px' }}>Please log in with organizer credentials to view this page.</p>
        <button className="btn-primary" style={{ margin: '0 auto', maxWidth: '200px', display: 'flex', justifyContent: 'center' }} onClick={() => navigate('/login')}>
          Go to Login
        </button>
      </div>
    );
  }

  if (currentUser.email !== ADMIN_EMAIL) {
    return (
      <div className="page-container container" style={{ textAlign: 'center', marginTop: '120px' }}>
        <Lock size={64} style={{ color: 'red', marginBottom: '16px', display: 'inline-block' }} />
        <h1>Unauthorized Access</h1>
        <p style={{ marginBottom: '24px' }}>Your account ({currentUser.email}) does not have admin privileges.</p>
        <button className="btn-secondary" style={{ margin: '0 auto', maxWidth: '200px', display: 'flex', justifyContent: 'center' }} onClick={() => navigate('/profile')}>
          Return to My Profile
        </button>
      </div>
    );
  }

  return (
    <div className="page-container container" style={{ marginTop: '120px' }}>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1>Admin / Organizer Dashboard</h1>
          <p>Live metrics for National Tech Symposium 2026</p>
        </div>
        <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'red', border: '2px solid red', padding: '8px 16px', height: 'auto', borderRadius: '12px' }} onClick={handleLogout}>
          <LogOut size={20} /> Logout
        </button>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px', fontSize: '24px', fontWeight: 'bold' }}>Loading Live Data from Firebase...</div>
      ) : (
        <>
          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <div style={{ padding: '32px', backgroundColor: 'var(--primary)', color: 'var(--white)', border: '4px solid var(--dark)', borderRadius: '24px', boxShadow: '8px 8px 0 var(--dark)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '20px' }}>Total Registrations</strong>
                <Users size={28} />
              </div>
              <h2 style={{ fontSize: '48px', marginTop: '16px' }}>{stats.totalRegistrations}</h2>
            </div>
            <div style={{ padding: '32px', backgroundColor: 'var(--accent)', color: 'var(--dark)', border: '4px solid var(--dark)', borderRadius: '24px', boxShadow: '8px 8px 0 var(--dark)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '20px' }}>Colleges Participated</strong>
                <Activity size={28} />
              </div>
              <h2 style={{ fontSize: '48px', marginTop: '16px' }}>{stats.colleges}</h2>
            </div>
            <div style={{ padding: '32px', backgroundColor: 'var(--white)', color: 'var(--dark)', border: '4px solid var(--dark)', borderRadius: '24px', boxShadow: '8px 8px 0 var(--dark)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '20px' }}>Check-ins (Est.)</strong>
                <CheckCircle size={28} />
              </div>
              <h2 style={{ fontSize: '48px', marginTop: '16px' }}>{stats.checkIns}</h2>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '24px', border: '4px solid var(--dark)', boxShadow: '12px 12px 0 var(--dark)', color: 'var(--dark)' }}>
            <h2 style={{ marginBottom: '24px', fontSize: '32px' }}>Track Registrations</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {availableTracks.map((track) => (
                <div key={track.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderBottom: '2px dashed var(--dark)' }}>
                  <strong style={{ fontSize: '20px' }}>{track.title}</strong>
                  <div style={{ backgroundColor: 'var(--dark)', color: 'var(--white)', padding: '4px 12px', borderRadius: '16px', fontWeight: 'bold' }}>
                    {stats.trackCounts[track.id] || 0} Participants
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrganizerDashboard;
