import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  // Determine card style based on ID to cycle through the 4 styles in the image
  const styleIndex = event.id % 4;
  const styleClasses = ['card-light', 'card-lime', 'card-blue', 'card-dark'];
  const currentStyle = styleClasses[styleIndex];

  return (
    <div className={`event-card ${currentStyle}`}>
      <div className="floating-badge">{event.category}</div>
      
      <div className="event-content">
        <h3>{event.title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Eget eu faucibus sapien habitant eget ac a lobortis.</p>
      </div>
      
      <button className="btn-book-pill" onClick={() => navigate(`/events/${event.id}`)}>
        <span>Book Now</span>
        <div className="icon-circle">
          <ChevronRight size={18} />
        </div>
      </button>
    </div>
  );
};

export default EventCard;
