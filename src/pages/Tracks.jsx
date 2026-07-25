import ScrollReveal from '../components/ScrollReveal';
import { tracks } from '../utils/mockData';
import './Pages.css';

const Tracks = () => {
  return (
    <div className="container" style={{ marginTop: '120px', minHeight: '60vh', marginBottom: '80px' }}>
      <ScrollReveal animation="fade-up">
        <h1 className="text-h1" style={{ marginBottom: '40px', textTransform: 'uppercase', borderBottom: '4px solid var(--dark)', display: 'inline-block', paddingBottom: '8px' }}>
          Tracks & Events
        </h1>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
        {tracks.map((track, index) => (
          <ScrollReveal key={track.id} animation="fade-up" delay={index * 100}>
            <div style={{
              backgroundColor: index % 2 === 0 ? 'var(--accent)' : 'var(--white)',
              color: 'var(--dark)',
              padding: '32px',
              borderRadius: '24px',
              border: '4px solid var(--dark)',
              boxShadow: '8px 8px 0 var(--dark)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                backgroundColor: 'var(--dark)', 
                color: 'var(--white)', 
                display: 'inline-block', 
                padding: '4px 12px', 
                borderRadius: '8px', 
                fontWeight: 'bold', 
                fontSize: '14px', 
                marginBottom: '16px',
                alignSelf: 'flex-start'
              }}>
                {track.type}
              </div>
              <h2 className="text-h3" style={{ marginBottom: '16px', flexGrow: 1 }}>{track.title}</h2>
              <p style={{ fontSize: '16px', marginBottom: '24px', opacity: 0.8 }}>{track.description}</p>
              <div style={{ fontWeight: 'bold', borderTop: '2px dashed var(--dark)', paddingTop: '16px' }}>
                👥 Team Size: {track.teamSize}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
