import './App.css'

function App() {
  const heroImage =
    'https://www.figma.com/api/mcp/asset/f2c9b158-b2cd-43f2-95ae-0ffadca6946a'
  const location1 =
    'https://www.figma.com/api/mcp/asset/a6a8a33a-bb46-4b78-8b52-aceec6e0a0e1'
  const location2 =
    'https://www.figma.com/api/mcp/asset/fd400515-bcbc-4b42-a84b-d92248636a0f'
  const location3 =
    'https://www.figma.com/api/mcp/asset/f48631e3-7502-4b20-9793-c324fe55ecc0'

  return (
    <div className="coworking-page">
      {/* Hero */}
      <header className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="hero-gradient" />

        <div className="page-container hero-inner">
          <div className="hero-header">
            <div className="brand">Brainwave.io</div>
            <nav className="main-nav">
              <a href="#demos">Demos</a>
              <a href="#pages">Pages</a>
              <a href="#support">Support</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="hero-content">
            <p className="hero-eyebrow">Shared space in your town</p>
            <h1 className="hero-title">
              Rent desk space in a shared office environment
            </h1>
            <p className="hero-subtitle">
              With lots of unique blocks, you can easily build a landing page
              without coding.
            </p>

            <div className="hero-form">
              <div className="hero-field">
                <label>Location</label>
                <input placeholder="Choose a city" />
              </div>
              <div className="hero-field">
                <label>Date</label>
                <input type="date" />
              </div>
              <button className="primary-btn">Book now</button>
            </div>

            <button className="video-link" type="button">
              <span className="video-icon">▶</span>
              Take virtual tour of our spaces
            </button>
          </div>
        </div>
      </header>

      {/* Facts */}
      <section className="page-container facts">
        <div className="fact">
          <div className="fact-number">06</div>
          <p className="fact-text">
            Offices are available in different countries.
          </p>
        </div>
        <div className="fact">
          <div className="fact-number">238</div>
          <p className="fact-text">
            Seats are available right now with dedicated support.
          </p>
        </div>
        <div className="fact">
          <div className="fact-number">1,395</div>
          <p className="fact-text">
            People are using our co-work spaces right now.
          </p>
        </div>
      </section>

      {/* Popular locations */}
      <section className="section section-locations" id="demos">
        <div className="page-container">
          <div className="section-heading center">
            <h2>Popular locations</h2>
            <p>
              With lots of unique blocks, you can easily build a page without
              any coding.
            </p>
          </div>

          <div className="location-grid">
            <article className="location-card">
              <img src={location1} alt="Beauview workspace" />
              <div className="location-info">
                <h3>Beauview</h3>
                <p>37 seats</p>
              </div>
            </article>
            <article className="location-card">
              <img src={location2} alt="Haleyborough workspace" />
              <div className="location-info">
                <h3>Haleyborough</h3>
                <p>12 seats</p>
              </div>
            </article>
            <article className="location-card">
              <img src={location3} alt="Jeromyshire workspace" />
              <div className="location-info">
                <h3>Jeromyshire</h3>
                <p>28 seats</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Team / gallery */}
      <section className="section">
        <div className="page-container team">
          <div className="team-copy">
            <h2>
              Work around very
              <br />
              talented people.
            </h2>
            <p>
              We share common trends and strategies for creating and improving
              your rental income without any coding.
            </p>
            <ul className="feature-list">
              <li>
                <strong>Dedicated desk</strong> with noise free locations.
              </li>
              <li>
                <strong>High speed internet</strong> and unlimited coffee.
              </li>
              <li>
                <strong>24/7 support</strong> from our community managers.
              </li>
            </ul>
          </div>
          <div className="team-gallery">
            <div className="team-photo large">
              <img src={location2} alt="People working in a shared office" />
            </div>
            <div className="team-photo small">
              <img src={location1} alt="Casual workspace" />
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA + FAQ summary */}
      <section className="section section-dark">
        <div className="page-container dark-inner">
          <div className="dark-copy">
            <h2>We are always here for your backup.</h2>
            <p>
              We share common trends and strategies for creating and improving
              your rental income. Focus on your work while we take care of the
              rest.
            </p>
            <ul className="checklist">
              <li>Noise free locations</li>
              <li>24/7 hour support</li>
              <li>Flexible membership plans</li>
            </ul>
          </div>

          <div className="faq-card">
            <h3>Frequently asked questions</h3>
            <ul>
              <li>How to get started with Shade Pro?</li>
              <li>Can I use Shade Pro for my clients?</li>
              <li>How often do you release updates?</li>
              <li>How can I access older versions?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section section-newsletter" id="contact">
        <div className="page-container newsletter-inner">
          <div className="section-heading center">
            <h2>Get latest updates</h2>
            <p>
              With lots of unique blocks, you can easily build a page without
              coding. We’ll never share your details with third parties.
            </p>
            <p className="small">
              View our Privacy Policy for more info.
            </p>
          </div>
          <form className="newsletter-form">
            <input placeholder="Enter your email" type="email" />
            <button className="primary-btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="page-container footer-inner">
          <p>© 2026 Brainwave.io. All rights reserved.</p>
          <div className="footer-links">
            <a href="#support">Support</a>
            <a href="#pages">Pricing</a>
            <a href="#pages">Help desk</a>
            <a href="#contact">Contact us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
