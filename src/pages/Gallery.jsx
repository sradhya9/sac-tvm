import ScrollReveal from '../components/ScrollReveal';
import './Pages.css';

const Gallery = () => {
  // Hackathon specific images
  const images = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    "https://images.unsplash.com/photo-1631350397792-8e0c2de5b637?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
  ];

  return (
    <div className="container" style={{ marginTop: '120px', minHeight: '60vh', marginBottom: '80px' }}>
      <ScrollReveal animation="fade-up">
        <h1 className="text-h1" style={{ marginBottom: '40px', textTransform: 'uppercase', borderBottom: '4px solid var(--dark)', display: 'inline-block', paddingBottom: '8px' }}>
          Event Gallery
        </h1>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {images.map((src, index) => (
          <ScrollReveal key={index} animation="scale" delay={(index % 3) * 100}>
            <div style={{
              borderRadius: '16px',
              border: '4px solid var(--dark)',
              boxShadow: '8px 8px 0 var(--dark)',
              overflow: 'hidden',
              height: '250px',
              backgroundColor: 'var(--primary)'
            }}>
              <img
                src={src}
                alt={`Gallery ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
