import ScrollReveal from '../components/ScrollReveal';
import { schedule } from '../utils/mockData';
import './Pages.css';

const Schedule = () => {
  return (
    <div className="container" style={{ marginTop: '120px', minHeight: '60vh', marginBottom: '80px' }}>
      <ScrollReveal animation="fade-up">
        <h1 className="text-h1" style={{ marginBottom: '40px', textTransform: 'uppercase', borderBottom: '4px solid var(--dark)', display: 'inline-block', paddingBottom: '8px' }}>
          Event Schedule
        </h1>
      </ScrollReveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {schedule.map((day, dayIndex) => (
          <ScrollReveal key={dayIndex} animation="fade-up" delay={dayIndex * 150}>
            <div style={{
              backgroundColor: 'var(--white)',
              color: 'var(--dark)',
              borderRadius: '24px',
              border: '4px solid var(--dark)',
              boxShadow: '12px 12px 0 var(--dark)',
              overflow: 'hidden'
            }}>
              <div style={{ 
                backgroundColor: 'var(--primary)', 
                color: 'var(--white)', 
                padding: '20px 32px',
                borderBottom: '4px solid var(--dark)'
              }}>
                <h2 className="text-h3" style={{ margin: 0 }}>{day.date}</h2>
              </div>
              
              <div style={{ padding: '0' }}>
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    padding: '24px 32px',
                    borderBottom: eventIndex < day.events.length - 1 ? '2px solid var(--dark)' : 'none',
                    gap: '20px',
                    alignItems: 'center'
                  }}>
                    <div style={{ 
                      fontWeight: 'bold', 
                      fontSize: '18px', 
                      minWidth: '120px',
                      color: 'var(--primary)'
                    }}>
                      {event.time}
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <h3 className="text-h4" style={{ margin: '0 0 8px 0' }}>{event.title}</h3>
                      <div style={{ opacity: 0.7, fontWeight: 'bold' }}>📍 {event.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
