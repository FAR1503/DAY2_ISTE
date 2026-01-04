import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">

      {/* Header Section */}
      <section className="about-header">
        <h1>About <span>Us</span></h1>
        <p>
          We are passionate about building modern, scalable, and user-friendly
          web applications using cutting-edge technologies.
        </p>
      </section>

      {/* Content Section */}
      <section className="about-content">

        <div className="about-card">
          <h3>🚀 Our Mission</h3>
          <p>
            To design and develop digital experiences that are fast, reliable,
            and visually appealing while maintaining simplicity and usability.
          </p>
        </div>

        <div className="about-card">
          <h3>💡 What We Do</h3>
          <p>
            We specialize in frontend development using React, creating clean
            UI designs, responsive layouts, and efficient component-based
            architectures.
          </p>
        </div>

        <div className="about-card">
          <h3>🛠 Technologies</h3>
          <p>
            React, JavaScript, HTML, CSS, Git, and modern UI/UX practices
            to deliver high-quality web solutions.
          </p>
        </div>

      </section>

    </div>
  );
};

export default About;
