import { useState } from 'react'
import './App.css'

const destinations = [
  {
    name: 'Pangong Lake',
    category: 'LAKES & LANDSCAPES',
    description: 'Discover the magical blue waters of the Himalayas.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85',
    duration: '2 days',
  },
  {
    name: 'Nubra Valley',
    category: 'VALLEYS & CULTURE',
    description: 'Explore sand dunes, mountain passes and peaceful villages.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85',
    duration: '2–3 days',
  },
  {
    name: 'Leh & Monasteries',
    category: 'HERITAGE & CULTURE',
    description: 'Experience Ladakh’s monasteries, markets and local life.',
    image:
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85',
    duration: '1–2 days',
  },
]

const services = [
  {
    icon: '🏔️',
    title: 'Guided Tours',
    description: 'Thoughtfully planned journeys through Ladakh’s iconic landscapes.',
  },
  {
    icon: '🏡',
    title: 'Homestays',
    description: 'Stay with local families and experience the warmth of Ladakhi culture.',
  },
  {
    icon: '🚙',
    title: 'Private Transfers',
    description: 'Comfortable travel with experienced local drivers and flexible routes.',
  },
  {
    icon: '🧭',
    title: 'Custom Trips',
    description: 'Personalized itineraries designed around your time and interests.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [travelDate, setTravelDate] = useState('')
  const [travelers, setTravelers] = useState('2 travelers')

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const message = [
      'Hello Ladakh Voyages! I would like to plan a trip.',
      `Travel date: ${travelDate || 'Flexible'}`,
      `Group size: ${travelers}`,
    ].join('\n')

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ladakh Voyages home">
          <span className="brand-mark">LV</span>
          <span className="brand-copy">
            <strong>LADAKH VOYAGES</strong>
            <small>YOUR HIMALAYAN JOURNEY</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#destinations" onClick={closeMenu}>Destinations</a>
          <a href="#experiences" onClick={closeMenu}>Experiences</a>
          <a href="#about" onClick={closeMenu}>About us</a>
          <a className="nav-cta" href="#inquiry" onClick={closeMenu}>Plan your trip <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90"
            alt="Majestic Himalayan mountains beneath a clear sky"
          />
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              <span /> YOUR JOURNEY TO THE EXTRAORDINARY
            </p>
            <h1>
              Find your
              <br />
              <em>own kind</em> of
              <br />
              wild.
            </h1>
            <p className="hero-description">
              Ancient monasteries, endless mountain roads and skies that
              stretch forever. Your Ladakh story begins here.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#destinations">
                Explore Ladakh <span>↗</span>
              </a>
              <a className="text-link hero-link" href="#about">
                Discover our story <span>→</span>
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <span>34.1526° N&nbsp; 77.5771° E</span>
            <span>THE LAND OF HIGH PASSES</span>
            <span>JOURNEYS MADE PERSONAL&nbsp; ↗</span>
          </div>

          <div className="hero-index"><span>01</span> / 04</div>
        </section>

        <section className="intro section-wrap">
          <div className="intro-label">
            <span className="section-number">01</span>
            <span>THE CALL OF THE MOUNTAINS</span>
          </div>
          <div className="intro-copy">
            <h2>
              Some places you visit.
              <br />
              <em>Some places change you.</em>
            </h2>
            <p>
              Ladakh is more than a destination. It is the quiet of a mountain
              morning, the kindness of a village home and the feeling of being
              wonderfully small beneath the Himalayas.
            </p>
            <p>
              We help you experience it beyond the ordinary, with thoughtful
              journeys shaped by the people and places that make Ladakh special.
            </p>
            <a className="text-link dark-link" href="#about">
              Get to know us <span>↗</span>
            </a>
          </div>
          <div className="intro-stamp" aria-hidden="true">
            <span>EXPLORE SLOWLY</span>
            <strong>हिमालय</strong>
            <span>TRAVEL DEEPLY · 34° N</span>
          </div>
        </section>

        <section className="destinations section-wrap" id="destinations">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE PLACES THAT STAY WITH YOU</p>
              <h2>Find your <em>somewhere.</em></h2>
            </div>
            <a className="text-link dark-link" href="#inquiry">
              Explore all destinations <span>↗</span>
            </a>
          </div>

          <div className="destination-grid">
            {destinations.map((destination, index) => (
              <article className="destination-card" key={destination.name}>
                <a
                  className="destination-image-wrap"
                  href="#inquiry"
                  aria-label={`Plan a trip to ${destination.name}`}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                  />
                  <span className="destination-index">0{index + 1}</span>
                  <span className="image-arrow">↗</span>
                </a>
                <div className="destination-info">
                  <p className="eyebrow">{destination.category}</p>
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <div className="destination-meta">
                    <span>◷ &nbsp;{destination.duration}</span>
                    <a href="#inquiry">Discover <span>→</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-banner" id="experiences">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=85"
            alt="A dramatic mountain range under a starry night sky"
            loading="lazy"
          />
          <div className="experience-overlay" />
          <div className="experience-content">
            <p className="eyebrow">NOT JUST A TRIP. A DIFFERENT PERSPECTIVE.</p>
            <h2>
              Go beyond
              <br />
              <em>the familiar.</em>
            </h2>
            <p>
              Sleep beneath Himalayan skies. Share stories over butter tea.
              Take the road less travelled.
            </p>
            <a className="button button-light" href="#inquiry">
              Find your experience <span>↗</span>
            </a>
          </div>
        </section>

        <section className="services section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MADE FOR THE WAY YOU TRAVEL</p>
              <h2>Your journey, <em>your way.</em></h2>
            </div>
            <p className="heading-note">
              The best journeys aren't one-size-fits-all.
              We take care of the details so you can be present for the moments.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">0{index + 1}</span>
                <span className="service-icon" aria-hidden="true">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#inquiry" aria-label={`Enquire about ${service.title}`}>
                  Learn more <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85"
              alt="A peaceful landscape in the mountains"
              loading="lazy"
            />
            <span className="photo-caption">LADAKH · A PLACE TO BREATHE</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">LOCAL HEART. OPEN ROADS.</p>
            <h2>
              Travel with
              <br />
              <em>meaning.</em>
            </h2>
            <p>
              We believe the best way to know a place is to slow down, meet its
              people and leave room for the unexpected.
            </p>
            <p>
              From the first conversation to the final mountain pass, we help
              you make a journey that feels personal, considered and truly yours.
            </p>
            <a className="text-link dark-link" href="#inquiry">
              Let’s plan together <span>↗</span>
            </a>
            <div className="about-note">
              <span>01 / OUR PROMISE</span>
              <span>Thoughtful travel. Genuine connections.</span>
            </div>
          </div>
        </section>

        <section className="inquiry section-wrap" id="inquiry">
          <div className="inquiry-copy">
            <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2>Let the mountains <em>call.</em></h2>
            <p>
              Tell us a little about your plans. We’ll help you take the first
              step towards your Ladakh journey.
            </p>
            <div className="inquiry-detail">
              <span>✳</span>
              <div>
                <strong>Made around you</strong>
                <p>Your dates, your pace, your kind of adventure.</p>
              </div>
            </div>
          </div>

          <form className="inquiry-form" onSubmit={handleInquiry}>
            <label htmlFor="travel-date">When would you like to go?</label>
            <input
              id="travel-date"
              type="date"
              value={travelDate}
              onChange={(event) => setTravelDate(event.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />

            <label htmlFor="travelers">Who’s coming along?</label>
            <select
              id="travelers"
              value={travelers}
              onChange={(event) => setTravelers(event.target.value)}
            >
              <option>Solo traveler</option>
              <option>2 travelers</option>
              <option>3–5 travelers</option>
              <option>6+ travelers</option>
              <option>Family with children</option>
            </select>

            <button className="button button-dark" type="submit">
              Start planning on WhatsApp <span>↗</span>
            </button>
            <p className="form-note">
              No pressure, no fixed packages. Just a conversation.
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">LV</span>
            <span className="brand-copy">
              <strong>LADAKH VOYAGES</strong>
              <small>YOUR HIMALAYAN JOURNEY</small>
            </span>
          </a>
          <p>For the roads you remember<br />and the moments you keep.</p>
          <a className="footer-top-link" href="#home">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ladakh Voyages</span>
          <span>MADE FOR THE LOVE OF THE MOUNTAINS</span>
          <a href="mailto:hello@ladakhvoyages.com">Get in touch ↗</a>
        </div>
      </footer>

      <a className="mobile-trip-bar" href="#inquiry">
        Plan your Ladakh journey <span>↗</span>
      </a>
    </>
  )
}

export default App