import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Calendar, MapPin } from 'lucide-react';
import EventCard from '../components/EventCard';
import ScrollReveal from '../components/ScrollReveal';
import './Pages.css';

const MOCK_EVENTS = [
  { id: 1, title: 'Neon Nights: Electronic Dance Festival', date: 'Aug 15, 2026', time: '8:00 PM', location: 'Central Park, NY', category: 'MUSIC', price: 45, remainingSeats: 120 },
  { id: 2, title: 'Tech Startup Pitch 2026', date: 'Sep 02, 2026', time: '10:00 AM', location: 'Innovation Hub, SF', category: 'BUSINESS', price: 20, remainingSeats: 45 },
  { id: 3, title: 'Urban Art Exhibition', date: 'Sep 10, 2026', time: '11:00 AM', location: 'Downtown Gallery', category: 'ART', price: 15, remainingSeats: 200 },
  { id: 4, title: 'Local Food Tasting Tour', date: 'Oct 05, 2026', time: '4:00 PM', location: 'Main Street Plaza', category: 'FOOD', price: 35, remainingSeats: 12 },
  { id: 5, title: 'Marathon 2026', date: 'Nov 12, 2026', time: '6:00 AM', location: 'City Center', category: 'SPORTS', price: 50, remainingSeats: 500 },
  { id: 6, title: 'Standup Comedy Night', date: 'Dec 01, 2026', time: '9:00 PM', location: 'Laugh Factory', category: 'ENTERTAINMENT', price: 25, remainingSeats: 50 },
];

const EventListing = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || '';
  
  const [search, setSearch] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory.toUpperCase());

  const filteredEvents = MOCK_EVENTS.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()) || event.location.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? event.category === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container container">
      <ScrollReveal animation="fade-up">
        <div className="page-header">
          <h1>Explore Events</h1>
          <p>Find the best experiences happening around you.</p>
        </div>
      </ScrollReveal>

      <div className="listing-layout">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <ScrollReveal animation="fade-right" delay={100}>
            <div className="filter-card">
              <h3><Filter size={20} /> Filters</h3>
              
              <div className="filter-group">
                <label>Search</label>
                <div className="search-input">
                  <Search size={16} />
                  <input 
                    type="text" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    placeholder="Keyword..."
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">All Categories</option>
                  <option value="MUSIC">Music</option>
                  <option value="BUSINESS">Business</option>
                  <option value="ART">Art</option>
                  <option value="FOOD">Food</option>
                  <option value="SPORTS">Sports</option>
                  <option value="ENTERTAINMENT">Entertainment</option>
                </select>
              </div>
              
              <button className="btn-accent filter-btn" onClick={() => { setSearch(''); setCategory(''); }}>
                Clear Filters
              </button>
            </div>
          </ScrollReveal>
        </aside>

        {/* Event Grid */}
        <main className="listing-main">
          <div className="results-count">
            Found {filteredEvents.length} events
          </div>
          
          <div className="event-grid">
            {filteredEvents.map((event, index) => (
              <ScrollReveal 
                key={event.id} 
                animation="fade-up" 
                delay={(index % 4) * 100}
              >
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="empty-state">
              <h2>No events found</h2>
              <p>Try adjusting your filters or search terms.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default EventListing;
