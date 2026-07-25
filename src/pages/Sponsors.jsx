import ScrollReveal from '../components/ScrollReveal';
import { sponsors } from '../utils/mockData';
import './Pages.css';

const Sponsors = () => {
  const platinum = sponsors.filter(s => s.tier === 'Platinum');
  const gold = sponsors.filter(s => s.tier === 'Gold');
  const others = sponsors.filter(s => s.tier !== 'Platinum' && s.tier !== 'Gold');

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '120px', overflow: 'hidden' }}>
      
      {/* Decorative Marquee Header */}
      <div style={{ marginTop: '120px', backgroundColor: 'var(--accent)', borderTop: '6px solid var(--dark)', borderBottom: '6px solid var(--dark)', padding: '16px 0', display: 'flex', whiteSpace: 'nowrap', overflow: 'hidden', transform: 'rotate(-2deg) scale(1.05)', position: 'relative', zIndex: 10 }}>
        <h1 className="text-h1" style={{ fontWeight: '900', textTransform: 'uppercase', color: 'var(--dark)', margin: 0, animation: 'marquee 10s linear infinite', display: 'flex', gap: '32px' }}>
          <span>OUR SPONSORS</span> <span>✦</span> <span>OUR SPONSORS</span> <span>✦</span> <span>OUR SPONSORS</span> <span>✦</span> <span>OUR SPONSORS</span> <span>✦</span>
        </h1>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .sponsor-bento-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 32px;
            margin-top: 80px;
          }
          @media (min-width: 768px) {
            .sponsor-bento-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .bento-full {
              grid-column: span 2;
            }
          }
          .bento-card {
            border: 6px solid var(--dark);
            border-radius: 32px;
            box-shadow: 16px 16px 0 var(--dark);
            padding: 48px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
          }
          .bento-card:hover {
            transform: translate(-8px, -8px);
            box-shadow: 24px 24px 0 var(--dark);
          }
          .tier-badge {
            position: absolute;
            top: 24px;
            left: 24px;
            border: 3px solid var(--dark);
            padding: 8px 16px;
            border-radius: 50px;
            font-weight: 900;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1px;
            z-index: 2;
          }
          @media (max-width: 767px) {
            .bento-card {
              padding: 24px;
            }
          }
        `}
      </style>

      <div className="container">
        <div className="sponsor-bento-grid">
          
          {/* Platinum Sponsor - Full Width */}
          {platinum.map((sponsor, i) => (
            <ScrollReveal key={`plat-${i}`} animation="fade-up" delay={100} className="bento-full">
              <div className="bento-card" style={{ backgroundColor: 'var(--white)' }}>
                <div className="tier-badge" style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}>{sponsor.tier} Partner</div>
                <img src={sponsor.logo} alt={sponsor.name} style={{ height: '120px', objectFit: 'contain', margin: '40px 0', position: 'relative', zIndex: 2 }} />
                <h2 className="text-h1" style={{ color: 'var(--dark)', margin: 0, fontWeight: '900', textAlign: 'center', position: 'relative', zIndex: 2 }}>{sponsor.name}</h2>
                {/* Decorative background element */}
                <div style={{ position: 'absolute', right: '-10%', bottom: '-20%', width: '300px', height: '300px', backgroundColor: 'var(--accent)', borderRadius: '50%', border: '6px solid var(--dark)', opacity: 0.2, zIndex: 1 }}></div>
              </div>
            </ScrollReveal>
          ))}

          {/* Gold Sponsor - Half Width */}
          {gold.map((sponsor, i) => (
            <ScrollReveal key={`gold-${i}`} animation="fade-up" delay={200}>
              <div className="bento-card" style={{ backgroundColor: 'var(--accent)' }}>
                <div className="tier-badge" style={{ backgroundColor: 'var(--white)', color: 'var(--dark)' }}>{sponsor.tier} Partner</div>
                <img src={sponsor.logo} alt={sponsor.name} style={{ height: '80px', objectFit: 'contain', margin: '40px 0 20px 0' }} />
                <h2 className="text-h3" style={{ color: 'var(--dark)', margin: 0, fontWeight: '900', textAlign: 'center' }}>{sponsor.name}</h2>
              </div>
            </ScrollReveal>
          ))}

          {/* Ecosystem Partner - Half Width */}
          {others.filter(s => s.tier === 'Ecosystem Partner').map((sponsor, i) => (
            <ScrollReveal key={`eco-${i}`} animation="fade-up" delay={300}>
              <div className="bento-card" style={{ backgroundColor: 'var(--primary)' }}>
                <div className="tier-badge" style={{ backgroundColor: 'var(--white)', color: 'var(--dark)' }}>{sponsor.tier}</div>
                <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0 20px 0' }}>
                  <div className="text-h3" style={{ backgroundColor: 'var(--white)', color: 'var(--primary)', padding: '10px 20px', borderRadius: '16px', fontWeight: '900', border: '4px solid var(--dark)', transform: 'rotate(-5deg)' }}>KSUM</div>
                </div>
                <h2 className="text-h3" style={{ color: 'var(--white)', margin: 0, fontWeight: '900', textAlign: 'center' }}>{sponsor.name}</h2>
              </div>
            </ScrollReveal>
          ))}

          {/* Silver Sponsors - Full Width Split internally */}
          <div className="bento-full" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {others.filter(s => s.tier === 'Silver').map((sponsor, i) => (
              <ScrollReveal key={`silv-${i}`} animation="scale" delay={400 + (i * 100)}>
                <div className="bento-card" style={{ backgroundColor: 'var(--white)', padding: '32px' }}>
                  <div className="tier-badge" style={{ backgroundColor: 'var(--dark)', color: 'var(--white)', top: '16px', left: '16px' }}>{sponsor.tier}</div>
                  <img src={sponsor.logo} alt={sponsor.name} style={{ height: '60px', objectFit: 'contain', margin: '40px 0 16px 0' }} />
                  <h2 className="text-h4" style={{ color: 'var(--dark)', margin: 0, fontWeight: '900', textAlign: 'center' }}>{sponsor.name}</h2>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sponsors;
