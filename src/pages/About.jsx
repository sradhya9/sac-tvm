import ScrollReveal from '../components/ScrollReveal';
import { eventDetails } from '../utils/mockData';
import './Pages.css';

const About = () => {
  return (
    <div className="container" style={{ marginTop: '120px', minHeight: '60vh', marginBottom: '80px' }}>
      <ScrollReveal animation="fade-up">
        <h1 style={{ fontSize: '48px', marginBottom: '40px', textTransform: 'uppercase', borderBottom: '4px solid var(--dark)', display: 'inline-block', paddingBottom: '8px' }}>
          About {eventDetails.name}
        </h1>
      </ScrollReveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <ScrollReveal animation="fade-right" delay={100}>
          <div className="card-white" style={{
            padding: '40px',
            borderRadius: '24px',
            border: '4px solid var(--dark)',
            boxShadow: '12px 12px 0 var(--dark)',
            fontSize: '20px',
            lineHeight: '1.8'
          }}>
            <p style={{ marginBottom: '20px' }}>
              Welcome to <strong>{eventDetails.name}</strong>, the premier national-level tech symposium hosted by the <strong>{eventDetails.host}</strong>.
            </p>
            <p>
              Our vision is to foster innovation, encourage collaboration, and provide a platform for the brightest minds across the country to showcase their technical prowess. Whether you are a competitive programmer, an AI enthusiast, or a cybersecurity wizard, we have something for you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={200}>
          <div className="card-lime" style={{
            padding: '40px',
            borderRadius: '24px',
            border: '4px solid var(--dark)',
            boxShadow: '12px 12px 0 var(--dark)',
            backgroundColor: 'var(--accent)',
            color: 'var(--dark)'
          }}>
            <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Why Attend?</h2>
            <ul style={{ fontSize: '20px', marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><strong>Network</strong> with industry leaders and fellow tech enthusiasts.</li>
              <li><strong>Compete</strong> in high-stakes hackathons and challenges to win exciting prizes.</li>
              <li><strong>Learn</strong> from hands-on workshops and expert keynotes.</li>
              <li><strong>Showcase</strong> your research in our paper presentation tracks.</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
