import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [preferences, setPreferences] = useState([]);

  return (
    <div>
      <section className="hero">
        <h1>Welcome to YungMora's World of Sound</h1>
        <p>Dive into a hub where music meets soul. Stream exclusive beats, discover Afro vibes, book sessions, and connect directly with Lagos finest — Yung Mora.</p>

        <div className="hero-buttons">
          <Link to="/music" className="btn primary">Listen to Beats</Link>
          <Link to="/form" className="btn secondary">Join the Movement</Link>
        </div>
      </section>

      <section className="genres">
        <h2>Select Your Top Genre</h2>

        <div className="genre-grid">

          <label>
            <input
              type="checkbox"
              onChange={(e) => {
                const value = "Afrobeat";
                if (e.target.checked) {
                  setPreferences([...preferences, value]);
                } else {
                  setPreferences(preferences.filter((item) => item !== value));
                }
              }}
            />
            Afrobeat
          </label>

          <label>
            <input
              type="checkbox"
              onChange={(e) => {
                const value = "Amapiano";
                if (e.target.checked) {
                  setPreferences([...preferences, value]);
                } else {
                  setPreferences(preferences.filter((item) => item !== value));
                }
              }}
            />
            Amapiano
          </label>

          <label>
            <input
              type="checkbox"
              onChange={(e) => {
                const value = "AfroSwing";
                if (e.target.checked) {
                  setPreferences([...preferences, value]);
                } else {
                  setPreferences(preferences.filter((item) => item !== value));
                }
              }}
            />
            AfroSwing
          </label>

          <label>
            <input
              type="checkbox"
              onChange={(e) => {
                const value = "UK Drill";
                if (e.target.checked) {
                  setPreferences([...preferences, value]);
                } else {
                  setPreferences(preferences.filter((item) => item !== value));
                }
              }}
            />
            UK Drill
          </label>

          <label>
            <input
              type="checkbox"
              onChange={(e) => {
                const value = "Trap";
                if (e.target.checked) {
                  setPreferences([...preferences, value]);
                } else {
                  setPreferences(preferences.filter((item) => item !== value));
                }
              }}
            />
            Trap
          </label>

          <input type="text" placeholder="Others..." />

        </div>

        <button
          className="btn primary"
          onClick={() => {
            if (preferences.length === 0) {
              alert("Please select at least one genre");
            } else {
              alert("You selected: " + preferences.join(", "));
            }
          }}
        >
          Submit Preferences
        </button>

      </section>
    </div>
  );
};

export default Home;