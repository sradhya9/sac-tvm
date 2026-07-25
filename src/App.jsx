import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import OrganizerDashboard from './pages/OrganizerDashboard';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Speakers from './pages/Speakers';
import Tracks from './pages/Tracks';
import Sponsors from './pages/Sponsors';
import Gallery from './pages/Gallery';
import ContactFAQ from './pages/ContactFAQ';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactFAQ />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/organizer" element={<OrganizerDashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
