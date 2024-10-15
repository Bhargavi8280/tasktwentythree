import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Your Music Home</h2>

      {/* Artists Section */}
      <section className="artists-section">
        <h3>Artists & Their Songs</h3>
        <div className="artists-list">
          <div className="artist">
            <h4>Taylor Swift</h4>
            <ul>
              <li>Love Story</li>
              <li>Shake It Off</li>
              <li>Cardigan</li>
            </ul>
          </div>
          <div className="artist">
            <h4>Ed Sheeran</h4>
            <ul>
              <li>Shape of You</li>
              <li>Perfect</li>
              <li>Bad Habits</li>
            </ul>
          </div>
          <div className="artist">
            <h4>Billie Eilish</h4>
            <ul>
              <li>Bad Guy</li>
              <li>Happier Than Ever</li>
              <li>Bury a Friend</li>
            </ul>
          </div>
        </div>
      </section>

      {/* My Playlist Section */}
      <section className="playlist-section">
        <h3>My Playlist</h3>
        <div className="playlist-list">
          <div className="song-card">
            <h4>Blinding Lights - The Weeknd</h4>
            <audio controls>
              <source src="song-url-here" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button>❤ Favorite</button>
            <button>➕ Wishlist</button>
          </div>
          <div className="song-card">
            <h4>Levitating - Dua Lipa</h4>
            <audio controls>
              <source src="song-url-here" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button>❤ Favorite</button>
            <button>➕ Wishlist</button>
          </div>
        </div>
      </section>

      {/* Favorite Songs Section */}
      <section className="favorite-section">
        <h3>Favorite Songs</h3>
        <div className="favorite-list">
          <div className="favorite-song">
            <h4>Save Your Tears - The Weeknd</h4>
            <audio controls>
              <source src="song-url-here" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="favorite-song">
            <h4>Good 4 U - Olivia Rodrigo</h4>
            <audio controls>
              <source src="song-url-here" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </section>

      {/* Wishlist Section */}
      <section className="wishlist-section">
        <h3>Wishlist</h3>
        <div className="wishlist-list">
          <div className="wishlist-song">
            <h4>Peaches - Justin Bieber</h4>
            <button>Play</button>
          </div>
          <div className="wishlist-song">
            <h4>Stay - The Kid LAROI, Justin Bieber</h4>
            <button>Play</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
