const Music = () => {
  return (
    <div>
      <section className="music-hero">
        <h1>Listen to YungMora</h1>
        <p>Official Beats • Afrobeat • Amapiano • Trap</p>
      </section>

      {/* Spotify */}
      <section className="music-section">
        <h2>Featured on Spotify</h2>
        <div className="embed-container">
          <iframe 
            src="https://open.spotify.com/embed/artist/7MsTBCnYP2sz7rwhdXo5sL" 
            width="100%" 
            height="380" 
            frameBorder="0" 
            allowtransparency="true" 
            allow="encrypted-media">
          </iframe>
        </div>
      </section>

      {/* YouTube */}
      <section className="music-section">
        <h2>Latest on YouTube</h2>
        <div className="embed-container">
          <iframe 
            width="100%" 
            height="380" 
            src="https://www.youtube.com/embed/9pVAaiBqr14" 
            title="YungMora YouTube" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </section>

      {/* Local Beat */}
      <section className="music-section">
        <h2>Direct Beat Preview</h2>
        <div className="beats-grid">
          <div className="beat-card">
            
            <img 
              src="/images/Afrobeat3000x3000.jpg" 
              alt="Vibe Mosaic" 
              style={{ 
                width: '300px', 
                height: 'auto', 
                borderRadius: '12px',
                marginBottom: '15px'
              }}
            />

            <div className="beat-info">
              <h3>Vibe Mosaic</h3>
              <p>Instrumental • Afrobeat</p>
              
              <audio controls style={{ width: '100%', margin: '15px 0' }}>
                <source src="/Sound/Vibe __Mosiac_-_Instrumental.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              <button className="btn primary" style={{width: "100%"}}>
                Buy This Beat - ₦15,000
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Music;