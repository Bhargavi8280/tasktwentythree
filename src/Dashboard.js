import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Your Music Dashboard</h2>
      <p>Explore trending artists and top songs just for you.</p>

      {/* Trending Artists Section */}
      <section className="section trending-artists">
        <h3>Trending Artists</h3>
        <div className="cards-container">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="Artist 1"
            />
            <h4>Billie Eilish</h4>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
              alt="Artist 2"
            />
            <h4>Drake</h4>
          </div>
          <div className="card">
            <img
              src="https://i.pinimg.com/736x/82/33/76/82337613dfddfc3034d95973e3ace0b1.jpg"
              alt="Artist 3"
            />
            <h4>Ed Sheeran</h4>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1"
              alt="Artist 4"
            />
            <h4>Ariana Grande</h4>
          </div>
        </div>
      </section>

      {/* Top Trending Songs Section */}
      <section className="section top-trending-songs">
        <h3>Top Trending Songs</h3>
        <div className="song-list">
          <div className="song-item">
            <p>1. Save Your Tears - The Weeknd</p>
          </div>
          <div className="song-item">
            <p>2. Levitating - Dua Lipa</p>
          </div>
          <div className="song-item">
            <p>3. Good 4 U - Olivia Rodrigo</p>
          </div>
          <div className="song-item">
            <p>4. Peaches - Justin Bieber</p>
          </div>
          <div className="song-item">
            <p>5. Stay - The Kid LAROI, Justin Bieber</p>
          </div>
        </div>
      </section>

      {/* Posters of Artists and Songs Section */}
      <section className="section posters">
        <h3>Top Artists & Songs Posters</h3>
        <div className="poster-grid">
          <div className="poster-card">
            <img
              src="https://images.unsplash.com/photo-1593642532400-2682810df593"
              alt="Poster 1"
            />
            <h4>Taylor Swift - Folklore</h4>
          </div>
          <div className="poster-card">
            <img
              src="https://images.unsplash.com/photo-1497032205916-ac775f0649ae"
              alt="Poster 2"
            />
            <h4>The Weeknd - Blinding Lights</h4>
          </div>
          <div className="poster-card">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="Poster 3"
            />
            <h4>Billie Eilish - Happier Than Ever</h4>
          </div>
          <div className="poster-card">
            <img
              src="https://images.unsplash.com/photo-1497032205916-ac775f0649ae"
              alt="Poster 4"
            />
            <h4>Dua Lipa - Levitating</h4>
          </div>
          <div className="poster-card">
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
              alt="Poster 5"
            />
            <h4>Drake - Certified Lover Boy</h4>
          </div>
          <div className="poster-card">
            <img
              src="https://live-production.wcms.abc-cdn.net.au/43790eaa1a40a9f828aa23edd25639e5?impolicy=wcms_crop_resize&cropH=562&cropW=1000&xPos=0&yPos=0&width=862&height=485"
              alt="Poster 6"
            />
            <h4>Olivia Rodrigo - Sour</h4>
          </div>
          <div className="poster-card">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="Poster 7"
            />
            <h4>Ed Sheeran - Bad Habits</h4>
          </div>
          <div className="poster-card">
            <img
              src="https://i.pinimg.com/originals/75/34/3d/75343dc17b2c4922beb57791c770f0ee.jpg"
              alt="Poster 8"
            />
            <h4>Ariana Grande - Positions</h4>
          </div>
          <div className="poster-card">
            <img
              src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1"
              alt="Poster 9"
            />
            <h4>Justin Bieber - Peaches</h4>
          </div>
          <div className="poster-card">
            <img
              src="https://images.unsplash.com/photo-1485579149621-3123dd979885"
              alt="Poster 10"
            />
            <h4>The Kid LAROI - Stay</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
