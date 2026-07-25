import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Download, Home, QrCode } from 'lucide-react';
import './Pages.css';
import './BookingSuccess.css';

const BookingSuccess = () => {
  const location = useLocation();
  const bookingData = location.state || {
    id: 'BKG-' + Math.floor(Math.random() * 1000000),
    eventTitle: 'Neon Nights: Electronic Dance Festival',
    date: 'Aug 15, 2026',
    time: '8:00 PM',
    ticketType: 'General Admission',
    quantity: 1,
    total: 45
  };

  return (
    <div className="page-container container success-page">
      <div className="success-header animate-fade-up">
        <div className="success-icon">
          <CheckCircle size={64} />
        </div>
        <h1>Booking Confirmed!</h1>
        <p>Your tickets have been successfully booked and sent to your email.</p>
      </div>

      <div className="ticket-container animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="digital-ticket">
          
          <div className="ticket-left">
            <div className="ticket-event-info">
              <h2>{bookingData.eventTitle}</h2>
              <div className="ticket-details">
                <div>
                  <span className="label">Date</span>
                  <span className="value">{bookingData.date}</span>
                </div>
                <div>
                  <span className="label">Time</span>
                  <span className="value">{bookingData.time}</span>
                </div>
              </div>
              <div className="ticket-details">
                <div>
                  <span className="label">Ticket Type</span>
                  <span className="value">{bookingData.ticketType} x {bookingData.quantity}</span>
                </div>
                <div>
                  <span className="label">Order Total</span>
                  <span className="value">${bookingData.total * bookingData.quantity}</span>
                </div>
              </div>
            </div>
            
            <div className="ticket-footer">
              <span className="order-id">Order ID: {bookingData.id}</span>
            </div>
          </div>

          <div className="ticket-divider"></div>

          <div className="ticket-right">
            <div className="qr-wrapper">
              {/* Mock QR Code using Lucide Icon for simplicity, in a real app this would be a real QR generated code */}
              <QrCode size={120} strokeWidth={1} />
            </div>
            <span className="scan-text">Scan at Entry</span>
          </div>
          
        </div>
      </div>

      <div className="success-actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <button className="btn-accent btn-large" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <Download size={20} /> Download Ticket
        </button>
        <Link to="/" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <Home size={20} /> Back to Home
        </Link>
      </div>
      
    </div>
  );
};

export default BookingSuccess;
