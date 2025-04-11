import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="glitch">
            <span aria-hidden="true">Paul COHEN</span>
            Paul COHEN
            <span aria-hidden="true">Paul COHEN</span>
          </h1>
          <h2>Étudiant en BTS SIO option SLAM</h2>
          <p>Transformant des idées en expériences numériques exceptionnelles</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-secondary">Me contacter</a>
          </div>
        </div>
        <div className="hero-social">
          <a href="https://github.com/PaulC94" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/paul-cohen94/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:paul.cohen@efrei.net">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}

export default Hero;