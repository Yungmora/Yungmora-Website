const Portfolio = () => {
  return (
    <div>
      <section className="portfolio-hero">
        <h1>My Portfolio</h1>
        <p>Producer • Beatmaker • Sound Engineer | Lagos, Nigeria</p>
      </section>

      <section className="portfolio-section">
        <h2>Selected Works & Achievements</h2>
        
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <h3>🔥 Afrobeat & Amapiano Pack 2025</h3>
            <p>Produced 50+ beats for upcoming artists. Multiple tracks hit 50K+ streams.</p>
            <span className="tag">2025</span>
          </div>

          <div className="portfolio-card">
            <h3>🎤 Artist Collaborations</h3>
            <p>Worked with talented artists across Lagos, producing hooks, verses, and full songs.</p>
            <span className="tag">2024 - Present</span>
          </div>

          <div className="portfolio-card">
            <h3>🎧 Mixing & Mastering Projects</h3>
            <p>Delivered clean, radio-ready mixes for independent artists.</p>
            <span className="tag">2024</span>
          </div>

          <div className="portfolio-card">
            <h3>📈 Building My Brand</h3>
            <p>Consistently releasing beats and growing my online presence.</p>
            <span className="tag">Ongoing</span>
          </div>
        </div>
      </section>

      <section className="stats">
        <h2>By The Numbers</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Beats Produced</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Artists Supported</p>
          </div>
          <div className="stat-item">
            <h3>10K+</h3>
            <p>Total Streams</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;