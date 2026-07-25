import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ticket, Award, Settings, LogOut, CheckCircle } from 'lucide-react';
import { tracks as allTracks } from '../utils/mockData';
import { useAuth } from '../contexts/AuthContext';
import { auth, db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import './Pages.css';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) { // wait for auth to initialize or know it's null
      navigate('/login');
      return;
    }

    if (currentUser) {
      const fetchUserData = async () => {
        try {
          const docRef = doc(db, 'registrations', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUserData();
    }
  }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error("Failed to log out", err);
    }
  };

  if (!currentUser || loading) {
    return (
      <div className="page-container container" style={{ textAlign: 'center', marginTop: '120px' }}>
        <h1>Loading Dashboard...</h1>
      </div>
    );
  }

  if (!userData && !loading) {
    return (
      <div className="page-container container" style={{ textAlign: 'center', marginTop: '120px' }}>
        <h1>No ticket found for this account.</h1>
        <button className="btn-accent btn-large" style={{ maxWidth: '200px', marginTop: '20px' }} onClick={() => navigate('/register')}>
          Register Now
        </button>
        <button className="btn-primary" style={{ maxWidth: '200px', marginTop: '20px', marginLeft: '16px' }} onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  // Find the full track names based on selected track IDs
  const userTracks = allTracks.filter(t => userData.selectedTracks?.includes(t.id));

  return (
    <div className="page-container container" style={{ marginTop: '120px' }}>
      <div className="page-header">
        <h1>Participant Dashboard</h1>
        <p>Welcome back, {userData.name || currentUser.email}</p>
      </div>

      <div className="listing-layout">
        <aside className="filters-sidebar">
          <div className="filter-card" style={{ border: '3px solid var(--dark)', boxShadow: '6px 6px 0 var(--dark)' }}>
            <div className="profile-menu">
              <button className="menu-item active"><Ticket size={20} /> My Ticket</button>
              <div style={{ height: '2px', backgroundColor: 'var(--dark)', margin: '16px 0' }}></div>
              <button className="menu-item text-danger" onClick={handleLogout} style={{ color: 'red' }}>
                <LogOut size={20} /> Logout
              </button>
            </div>
          </div>
        </aside>

        <main className="listing-main">
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
                <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>NATIONAL TECH SYMPOSIUM 2026</h2>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Trivandrum Chapter</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--dark)', color: 'var(--white)', padding: '8px 16px', borderRadius: '30px' }}>
                <CheckCircle size={20} /> <span style={{ fontWeight: 'bold' }}>CONFIRMED</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', opacity: 0.8 }}>Participant Name</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{userData.name}</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', opacity: 0.8 }}>Institution</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{userData.college}</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', opacity: 0.8 }}>Email</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{userData.email}</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', opacity: 0.8 }}>Ticket ID</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>TCK-{userData.ticketId || Math.floor(Math.random() * 90000) + 10000}</div>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--white)', padding: '24px', borderRadius: '16px', border: '3px solid var(--dark)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Registered Tracks</h3>
              <ul style={{ paddingLeft: '24px', fontWeight: 'bold', fontSize: '16px' }}>
                {userTracks.map(track => (
                  <li key={track.id}>{track.title}</li>
                ))}
                {userTracks.length === 0 && <li>No specific tracks selected</li>}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
