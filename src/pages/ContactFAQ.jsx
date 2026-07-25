import ScrollReveal from '../components/ScrollReveal';
import './Pages.css';

const ContactFAQ = () => {
  const faqs = [
    { q: "Who can participate?", a: "The event is open to all college students across India with a valid college ID." },
    { q: "Is accommodation provided?", a: "Yes, limited accommodation is available on a first-come, first-serve basis for outstation participants." },
    { q: "Are there any registration fees?", a: "No! Registration is completely free for all events." },
    { q: "Can I participate in multiple events?", a: "Yes, as long as their timings in the schedule do not overlap." }
  ];

  return (
    <div className="container" style={{ marginTop: '120px', minHeight: '60vh', marginBottom: '80px' }}>
      <ScrollReveal animation="fade-up">
        <h1 className="text-h1" style={{ marginBottom: '40px', textTransform: 'uppercase', borderBottom: '4px solid var(--dark)', display: 'inline-block', paddingBottom: '8px' }}>
          Contact & FAQ
        </h1>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px' }}>
        <ScrollReveal animation="fade-right">
          <div>
            <h2 className="text-h3" style={{ marginBottom: '24px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  backgroundColor: 'var(--white)',
                  color: 'var(--dark)',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '3px solid var(--dark)',
                  boxShadow: '6px 6px 0 var(--dark)'
                }}>
                  <h3 className="text-h4" style={{ marginBottom: '12px' }}>{faq.q}</h3>
                  <p style={{ opacity: 0.8 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div>
            <h2 className="text-h3" style={{ marginBottom: '24px' }}>Get in Touch</h2>
            <form style={{
              backgroundColor: 'var(--accent)',
              padding: '40px',
              borderRadius: '24px',
              border: '4px solid var(--dark)',
              boxShadow: '12px 12px 0 var(--dark)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: 'var(--dark)' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '2px solid var(--dark)', fontSize: '16px' }} placeholder="Your Name" />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: 'var(--dark)' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '2px solid var(--dark)', fontSize: '16px' }} placeholder="Your Email" />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: 'var(--dark)' }}>Message</label>
                <textarea rows="4" style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '2px solid var(--dark)', fontSize: '16px', resize: 'vertical' }} placeholder="How can we help?"></textarea>
              </div>
              <button type="button" className="btn-dark" style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--white)',
                padding: '16px',
                borderRadius: '30px',
                border: '3px solid var(--dark)',
                boxShadow: '4px 4px 0 var(--dark)',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '12px'
              }}>
                Send Message
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ContactFAQ;
