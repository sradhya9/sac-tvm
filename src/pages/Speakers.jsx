import ScrollReveal from '../components/ScrollReveal';
import { speakers } from '../utils/mockData';
import './Pages.css';

const Speakers = () => {
  return (
    <div className="container" style={{ marginTop: '120px', minHeight: '60vh', marginBottom: '80px' }}>
      <ScrollReveal animation="fade-up">
        <h1 className="text-h1" style={{ marginBottom: '40px', textTransform: 'uppercase', borderBottom: '4px solid var(--dark)', display: 'inline-block', paddingBottom: '8px' }}>
          Speakers & Guests
        </h1>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '40px' }}>
        {speakers.map((speaker, index) => (
          <ScrollReveal key={speaker.id} animation="fade-up" delay={index * 150}>
            <div style={{
              backgroundColor: 'var(--white)',
              color: 'var(--dark)',
              borderRadius: '24px',
              border: '4px solid var(--dark)',
              boxShadow: '8px 8px 0 var(--dark)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div style={{
                height: '280px',
                borderBottom: '4px solid var(--dark)',
                overflow: 'hidden',
                backgroundColor: 'var(--primary)'
              }}>
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)' }}
                />
              </div>
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h2 className="text-h3" style={{ marginBottom: '8px' }}>{speaker.name}</h2>
                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '16px' }}>
                  {speaker.role} @ {speaker.company}
                </div>
                <p style={{ opacity: 0.8, fontSize: '15px', flexGrow: 1 }}>{speaker.bio}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
