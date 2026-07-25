import { Tag } from 'lucide-react';
import './OfferBanner.css';

const OfferBanner = () => {
  return (
    <div className="offer-banner">
      <div className="marquee-content">
        {/* Repeat content for infinite scrolling effect */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="marquee-item">
            <Tag size={16} />
            <span>FESTIVAL OFFER: 20% OFF ALL TICKETS</span>
            <div className="dot"></div>
            <Tag size={16} />
            <span>FLASH SALE: 50% OFF VIP LOUNGE</span>
            <div className="dot"></div>
            <Tag size={16} />
            <span>EARLY BIRD: GET FREE DRINKS WITH PLATINUM</span>
            <div className="dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferBanner;
