import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ShieldCheck, Ticket, Plus, Minus, Loader2 } from 'lucide-react';
import { loadRazorpay } from '../utils/loadRazorpay';
import './Pages.css';
import './EventDetails.css';

// Mock event for demonstration
const MOCK_EVENT = {
  id: 1,
  title: 'Neon Nights: Electronic Dance Festival',
  description: 'Join us for an unforgettable night of electronic music featuring top international DJs, mesmerizing light shows, and an incredible atmosphere. Experience the ultimate weekend of live music, food, and arts.',
  date: 'Aug 15, 2026',
  time: '8:00 PM - 2:00 AM',
  location: 'Central Park, NY',
  venue: 'Main Lawn Stage',
  category: 'MUSIC',
  price: 45,
  remainingSeats: 120,
  organizer: 'Rhythm Events',
  tickets: [
    { type: 'General Admission', price: 45, available: true },
    { type: 'VIP', price: 150, available: true },
    { type: 'Backstage Pass', price: 300, available: false }
  ]
};

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
  
  // In a real app, fetch event by id. Using mock here.
  const event = MOCK_EVENT;

  const handleBooking = async () => {
    setIsBooking(true);
    
    // Load Razorpay script
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      setIsBooking(false);
      return;
    }

    const ticketPrice = event.tickets[selectedTicket].price;
    const totalAmount = ticketPrice * quantity;

    // Ideally, call the Firebase Function here to get order_id. 
    // We are mocking it for the UI demo since we have a placeholder key.
    
    const options = {
      key: "rzp_test_placeholder_key", // Placeholder key
      amount: totalAmount * 100, // Amount in paise
      currency: "USD", // Or INR
      name: "Zentry Events",
      description: `Payment for ${event.title}`,
      handler: function (response) {
        // Success callback
        navigate('/booking-success', {
          state: {
            id: response.razorpay_payment_id || ('BKG-' + Math.floor(Math.random() * 1000000)),
            eventTitle: event.title,
            date: event.date,
            time: event.time,
            ticketType: event.tickets[selectedTicket].type,
            quantity: quantity,
            total: ticketPrice
          }
        });
      },
      prefill: {
        name: "Test User",
        email: "hello@zentry.com",
        contact: "9999999999"
      },
      theme: {
        color: "#D8FF45" // Neo-Brutalist Lime
      }
    };

    const paymentObject = new window.Razorpay(options);
    
    paymentObject.on('payment.failed', function (response) {
      // If payment fails (or key is invalid), show alert
      alert(`Payment Failed: ${response.error.description}\n\n(Expected since we are using a placeholder key!)`);
      
      // FOR DEMO PURPOSES: Force success redirect after failure so user can see the success screen anyway
      if (options.key === "rzp_test_placeholder_key") {
        setTimeout(() => {
          options.handler({ razorpay_payment_id: "pay_mock_" + Math.floor(Math.random() * 1000000) });
        }, 1500);
      } else {
        setIsBooking(false);
      }
    });

    paymentObject.open();
  };

  return (
    <div className="page-container container">
      <div className="event-details-layout">
        
        {/* Main Content */}
        <div className="event-main">
          <div className="event-hero card-lime">
            <div className="floating-badge">{event.category}</div>
            <h1>{event.title}</h1>
            <p className="event-org">by <strong>{event.organizer}</strong></p>
          </div>

          <div className="event-section">
            <h2>About this event</h2>
            <p className="description">{event.description}</p>
          </div>

          <div className="event-section info-grid">
            <div className="info-box">
              <Calendar size={24} className="icon-accent" />
              <div>
                <strong>Date</strong>
                <p>{event.date}</p>
              </div>
            </div>
            <div className="info-box">
              <Clock size={24} className="icon-accent" />
              <div>
                <strong>Time</strong>
                <p>{event.time}</p>
              </div>
            </div>
            <div className="info-box">
              <MapPin size={24} className="icon-accent" />
              <div>
                <strong>Location</strong>
                <p>{event.location}<br/>{event.venue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="booking-sidebar">
          <div className="booking-card">
            <h3>Buy Tickets</h3>
            <div className="ticket-list">
              {event.tickets.map((ticket, idx) => (
                <div 
                  key={idx} 
                  className={`ticket-option ${!ticket.available ? 'sold-out' : ''} ${selectedTicket === idx ? 'selected' : ''}`}
                  onClick={() => ticket.available && setSelectedTicket(idx)}
                >
                  <div className="ticket-info">
                    <Ticket size={20} />
                    <span>{ticket.type}</span>
                  </div>
                  <div className="ticket-price">
                    ${ticket.price}
                  </div>
                  {ticket.available ? (
                    <input 
                      type="radio" 
                      name="ticket_selection" 
                      checked={selectedTicket === idx}
                      onChange={() => setSelectedTicket(idx)}
                    />
                  ) : (
                    <span className="sold-out-badge">Sold Out</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="booking-summary">
              <div className="qty-selector">
                <label>Quantity</label>
                <div className="qty-controls">
                  <button 
                    className="qty-btn" 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="qty-value">{quantity}</span>
                  <button 
                    className="qty-btn" 
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    disabled={quantity >= 10}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button 
                className="btn-accent btn-large" 
                onClick={handleBooking}
                disabled={isBooking || !event.tickets[selectedTicket].available}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
              >
                {isBooking ? <><Loader2 size={20} className="animate-spin" /> Processing...</> : 'Confirm Booking'}
              </button>
            </div>
            
            <div className="secure-checkout">
              <ShieldCheck size={16} /> Secure Checkout
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;
