import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './HeroCarousel.css';

const HERO_SLIDES = [
  {
    id: 1,
    badge: "FEATURED EVENT",
    title: "NATIONAL TECH SYMPOSIUM 2026",
    description: "Join the largest national-level tech event in Kerala. Three days of intense hackathons, paper presentations, and expert talks.",
    theme: "lime",
    buttonText: "Register Now"
  },
  {
    id: 2,
    badge: "FLAGSHIP",
    title: "36-HOUR NATIONAL HACKATHON",
    description: "Solve real-world problems. Build, innovate, and win exciting prizes in our flagship coding marathon.",
    theme: "blue",
    buttonText: "Join Hackathon"
  },
  {
    id: 3,
    badge: "WORKSHOP",
    title: "AI & ML MASTERCLASS",
    description: "Hands-on workshop on building LLMs and generative AI applications. Learn from the experts.",
    theme: "light",
    buttonText: "Secure Seat"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="hero-carousel container">
      <div className="carousel-wrapper">
        
        <div className="slides-container">
          <div className="carousel-slide" key={slide.id}>
            <div className="ad-content">
              <span className={`badge badge-${slide.theme}`}>{slide.badge}</span>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="btn-accent" onClick={() => navigate('/register')}>{slide.buttonText}</button>
            </div>
            <div className="ad-image-placeholder">
              <div className="decorative-shape star"></div>
              <div className="decorative-shape blob"></div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-btn prev-btn" onClick={handlePrev}>
          <ChevronLeft size={24} />
        </button>
        <button className="carousel-btn next-btn" onClick={handleNext}>
          <ChevronRight size={24} />
        </button>

        {/* Pagination Dots */}
        <div className="carousel-pagination">
          {HERO_SLIDES.map((_, idx) => (
            <div 
              key={idx} 
              className={`dot ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            ></div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HeroCarousel;
