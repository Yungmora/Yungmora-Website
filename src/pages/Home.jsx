const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to YungMora's World of Sound</h1>
        <p>Dive into a hub where music meets soul. Stream exclusive beats, discover Afro vibes, book sessions, and connect directly with Lagos finest — Yung Mora.</p>
        
        <div className="hero-buttons">
          <a href="/music" className="btn primary">Listen to Beats</a>
          <a href="/form" className="btn secondary">Join the Movement</a>
        </div>
      </section>

      <section className="genres">
        <h2>Select Your Top Genre</h2>
        <div className="genre-grid">
          <label><input type="checkbox" /> Afrobeat</label>
          <label><input type="checkbox" /> Amapiano</label>
          <label><input type="checkbox" /> AfroSwing</label>
          <label><input type="checkbox" /> UK Drill</label>
          <label><input type="checkbox" /> Trap</label>
          <input type="text" placeholder="Others..." />
        </div>
        <button className="btn primary">Submit Preferences</button>
      </section>
    </div>
  );
};

export default Home;