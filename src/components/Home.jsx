import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Build Modern <span>Web Experiences</span>
        </h1>
        <p>
          Create fast, responsive and visually appealing websites using
          React and modern UI principles.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>⚡ Fast Performance</h3>
          <p>
            Optimized components ensure smooth and fast user experiences.
          </p>
        </div>

        <div className="feature-card">
          <h3>🎨 Modern Design</h3>
          <p>
            Clean dark-themed UI with elegant blue highlights.
          </p>
        </div>

        <div className="feature-card">
          <h3>📱 Responsive</h3>
          <p>
            Works perfectly across desktop, tablet, and mobile devices.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
