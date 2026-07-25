import EventCard from './EventCard';
import { ArrowRight } from 'lucide-react';
import './EventSlider.css';

const MOCK_EVENTS = [
  {
    id: 1,
    title: 'Neon Nights: Electronic Dance Festival',
    date: 'Aug 15, 2026',
    time: '8:00 PM',
    location: 'Central Park, NY',
    category: 'MUSIC',
    price: 45,
    remainingSeats: 120,
  },
  {
    id: 2,
    title: 'Tech Startup Pitch 2026',
    date: 'Sep 02, 2026',
    time: '10:00 AM',
    location: 'Innovation Hub, SF',
    category: 'BUSINESS',
    price: 20,
    remainingSeats: 45,
  },
  {
    id: 3,
    title: 'Urban Art Exhibition',
    date: 'Sep 10, 2026',
    time: '11:00 AM',
    location: 'Downtown Gallery',
    category: 'ART',
    price: 15,
    remainingSeats: 200,
  },
  {
    id: 4,
    title: 'Local Food Tasting Tour',
    date: 'Oct 05, 2026',
    time: '4:00 PM',
    location: 'Main Street Plaza',
    category: 'FOOD',
    price: 35,
    remainingSeats: 12,
  },
];

const EventSlider = ({ title }) => {
  return (
    <section className="event-slider-section container">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <button className="view-all-btn">
          View All <ArrowRight size={18} />
        </button>
      </div>
      
      <div className="event-grid">
        {MOCK_EVENTS.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventSlider;
