import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import HeroCarousel from '../components/HeroCarousel';
import { eventDetails, tracks, schedule, speakers } from '../utils/mockData';
import { Info, MapPin, Calendar, ArrowRight } from 'lucide-react';
import './Pages.css';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("October 15, 2026 09:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <ScrollReveal animation="fade-up">
          <HeroCarousel />
        </ScrollReveal>
      </div>
      
      <div className="container" style={{ marginBottom: '80px' }}>
        <ScrollReveal animation="fade-up">
          <div className="card-lime" style={{ 
            padding: '48px 32px', 
            borderRadius: '32px', 
            border: '4px solid var(--dark)', 
            boxShadow: '8px 8px 0 var(--dark)',
            textAlign: 'center',
            backgroundColor: 'var(--white)',
            color: 'var(--dark)',
            marginTop: '20px'
          }}>
            <h2 className="text-h3" style={{ textTransform: 'uppercase', marginBottom: '12px' }}>
              Countdown to the Event
            </h2>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '32px', opacity: 0.8 }}>
              Hosted by {eventDetails.host}
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '20px', 
              flexWrap: 'wrap'
            }}>
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} style={{
                  backgroundColor: 'var(--accent)',
                  padding: '16px',
                  borderRadius: '16px',
                  border: '3px solid var(--dark)',
                  minWidth: '90px',
                  boxShadow: '4px 4px 0 var(--dark)'
                }}>
                  <div className="text-h3" style={{ fontWeight: '900', fontFamily: 'var(--font-display)' }}>
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold' }}>
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div style={{ 
            marginTop: '60px', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '40px' 
          }}>
            {/* About Card */}
            <div style={{
              padding: '48px',
              borderRadius: '32px',
              border: '4px solid var(--dark)',
              boxShadow: '12px 12px 0 var(--dark)',
              backgroundColor: 'var(--accent)',
              color: 'var(--dark)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translate(-4px, -4px)';
              e.currentTarget.style.boxShadow = '16px 16px 0 var(--dark)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '12px 12px 0 var(--dark)';
            }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <h2 className="text-h2" style={{ lineHeight: '1' }}>About<br/>The Event</h2>
                  <div style={{ backgroundColor: 'var(--white)', padding: '16px', borderRadius: '50%', border: '3px solid var(--dark)' }}>
                    <Info size={32} />
                  </div>
                </div>
                <p style={{ fontSize: '20px', marginBottom: '40px', fontWeight: '500' }}>{eventDetails.description}</p>
              </div>
              <Link to="/about" style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '12px', 
                backgroundColor: 'var(--dark)', color: 'var(--white)', 
                padding: '16px 32px', borderRadius: '50px', 
                fontWeight: 'bold', fontSize: '18px', width: 'fit-content'
              }}>
                Explore More <ArrowRight size={20} />
              </Link>
            </div>

            {/* Venue & Dates Card */}
            <div style={{
              padding: '48px',
              borderRadius: '32px',
              border: '4px solid var(--dark)',
              boxShadow: '12px 12px 0 var(--accent)',
              backgroundColor: 'var(--dark)',
              color: 'var(--white)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translate(-4px, -4px)';
              e.currentTarget.style.boxShadow = '16px 16px 0 var(--accent)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '12px 12px 0 var(--accent)';
            }}
            >
              <h2 className="text-h2" style={{ marginBottom: '40px', color: 'var(--accent)' }}>When & Where</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ backgroundColor: 'var(--primary)', padding: '16px', borderRadius: '16px', border: '3px solid var(--white)' }}>
                    <MapPin size={32} color="var(--white)" />
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7, marginBottom: '4px' }}>Location</p>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{eventDetails.location}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ backgroundColor: 'var(--primary)', padding: '16px', borderRadius: '16px', border: '3px solid var(--white)' }}>
                    <Calendar size={32} color="var(--white)" />
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7, marginBottom: '4px' }}>Date</p>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{eventDetails.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tracks Section */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div style={{ marginTop: '100px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
              <div>
                <h2 className="text-h1" style={{ textTransform: 'uppercase', lineHeight: 1 }}>Tracks &<br/>Workshops</h2>
              </div>
              <Link to="/tracks" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '24px', border: '3px solid var(--dark)', fontWeight: 'bold' }}>View All Tracks</Link>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {tracks.slice(0, 3).map((track, i) => (
                <div key={i} style={{
                  padding: '32px',
                  backgroundColor: i % 2 === 0 ? 'var(--white)' : 'var(--accent)',
                  color: 'var(--dark)',
                  border: '3px solid var(--dark)',
                  borderRadius: '24px',
                  boxShadow: '8px 8px 0 var(--dark)'
                }}>
                  <div style={{ 
                    display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--dark)', 
                    color: 'var(--white)', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', marginBottom: '16px' 
                  }}>
                    {track.type}
                  </div>
                  <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>{track.title}</h3>
                  <p style={{ opacity: 0.8 }}>{track.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Schedule Section */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div style={{ marginTop: '100px', backgroundColor: 'var(--dark)', color: 'var(--white)', padding: '60px', borderRadius: '40px', border: '4px solid var(--dark)', boxShadow: '12px 12px 0 var(--accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <h2 className="text-h1" style={{ color: 'var(--accent)' }}>Event Schedule</h2>
              <Link to="/schedule" style={{ color: 'var(--white)', textDecoration: 'underline', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Full Schedule &rarr;</Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {schedule[0].events.map((event, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', paddingBottom: '24px', borderBottom: '2px dashed rgba(255,255,255,0.2)' }}>
                  <div style={{ backgroundColor: 'var(--accent)', color: 'var(--dark)', padding: '12px 24px', borderRadius: '30px', fontWeight: '900', fontSize: '20px', minWidth: '120px', textAlign: 'center' }}>
                    {event.time}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '24px', marginBottom: '4px' }}>{event.title}</h3>
                    <p style={{ opacity: 0.7, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={16} /> {event.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Speakers Section */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div style={{ marginTop: '120px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '60px' }}>
              <h2 className="text-h1" style={{ textTransform: 'uppercase', lineHeight: 1, textShadow: '4px 4px 0 var(--dark)' }}>Featured<br/>Speakers</h2>
              <Link to="/speakers" className="btn-accent" style={{ padding: '16px 32px', borderRadius: '50px', border: '4px solid var(--dark)', fontWeight: '900', fontSize: '18px', boxShadow: '6px 6px 0 var(--dark)', whiteSpace: 'nowrap' }}>Meet Everyone &rarr;</Link>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
              {speakers.map((speaker, i) => (
                <div key={i} style={{ 
                  backgroundColor: i % 2 === 0 ? 'var(--white)' : 'var(--accent)', 
                  color: 'var(--dark)', 
                  border: '4px solid var(--dark)', 
                  borderRadius: '32px', 
                  boxShadow: '12px 12px 0 var(--dark)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translate(-8px, -8px)';
                  e.currentTarget.style.boxShadow = '20px 20px 0 var(--dark)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'grayscale(0%) contrast(1.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = '12px 12px 0 var(--dark)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.filter = 'grayscale(100%) contrast(1.2)';
                }}
                >
                  <div style={{ padding: '24px 24px 0 24px' }}>
                    <div style={{ 
                      height: '280px', 
                      borderRadius: '24px', 
                      border: '4px solid var(--dark)', 
                      overflow: 'hidden',
                      backgroundColor: 'var(--dark)'
                    }}>
                      <img src={speaker.image} alt={speaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)', transition: 'filter 0.3s ease' }} />
                    </div>
                  </div>
                  <div style={{ padding: '32px 24px' }}>
                    <div style={{ display: 'inline-block', backgroundColor: 'var(--dark)', color: 'var(--white)', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '16px', border: '2px solid var(--dark)' }}>
                      {speaker.company}
                    </div>
                    <h3 className="text-h3" style={{ marginBottom: '8px', lineHeight: 1.1 }}>{speaker.name}</h3>
                    <p style={{ fontWeight: 'bold', opacity: 0.8, fontSize: '18px' }}>{speaker.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Gallery Preview */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div style={{ marginTop: '100px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
              <h2 className="text-h1" style={{ textTransform: 'uppercase', lineHeight: 1, textShadow: '4px 4px 0 var(--dark)' }}>Gallery</h2>
              <Link to="/gallery" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '24px', border: '3px solid var(--dark)', fontWeight: 'bold', backgroundColor: 'var(--white)', color: 'var(--dark)', whiteSpace: 'nowrap' }}>View Full Gallery &rarr;</Link>
            </div>
            <div className="grid-responsive-3">
              {[
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              ].map((imgUrl, idx) => (
                <div key={idx} style={{ 
                  aspectRatio: '1', backgroundColor: 'var(--dark)', borderRadius: '16px', 
                  border: '3px solid var(--dark)', boxShadow: '6px 6px 0 var(--accent)',
                  backgroundImage: `url(${imgUrl})`,
                  backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(30%)',
                  transition: 'filter 0.3s ease, transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = 'grayscale(30%)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                ></div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ & Contact Section */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="grid-responsive-2" style={{ marginTop: '100px', backgroundColor: 'var(--primary)', color: 'var(--white)', padding: '60px', borderRadius: '40px', border: '4px solid var(--dark)', boxShadow: '12px 12px 0 var(--dark)' }}>
            <div>
              <h2 className="text-h1" style={{ marginBottom: '24px', color: 'var(--accent)' }}>Got Questions?</h2>
              <p style={{ fontSize: '18px', marginBottom: '32px' }}>We're here to help you get ready for the biggest tech symposium of the year.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ backgroundColor: 'var(--white)', color: 'var(--dark)', padding: '24px', borderRadius: '16px', border: '3px solid var(--dark)', fontWeight: 'bold' }}>
                  Is accommodation provided?
                  <div style={{ fontWeight: 'normal', marginTop: '8px', opacity: 0.8 }}>Yes, for outstation participants upon early request.</div>
                </div>
                <div style={{ backgroundColor: 'var(--white)', color: 'var(--dark)', padding: '24px', borderRadius: '16px', border: '3px solid var(--dark)', fontWeight: 'bold' }}>
                  Do I need to pay to register?
                  <div style={{ fontWeight: 'normal', marginTop: '8px', opacity: 0.8 }}>No, registration is completely free of charge.</div>
                </div>
              </div>
            </div>
            
            <div style={{ backgroundColor: 'var(--dark)', padding: '40px', borderRadius: '24px', border: '3px solid var(--white)' }}>
              <h3 className="text-h3" style={{ marginBottom: '24px', color: 'var(--accent)' }}>Contact Us</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '18px' }}>
                <p><strong>Email:</strong><br/>hello@csitvm.org</p>
                <p><strong>Phone:</strong><br/>+91 98765 43210</p>
                <p><strong>Address:</strong><br/>CSI Chapter, Technopark, Trivandrum, Kerala 695581</p>
                <Link to="/contact" className="btn-accent" style={{ marginTop: '24px', textAlign: 'center', display: 'block', textDecoration: 'none' }}>Send a Message</Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
};

export default Home;
