import React from 'react';
import './About.css';
// Import direct de l'image
import cvImage from '../assets/images/cv.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img 
                src="../src/assets/images/cv.png"
                alt="Profile" 
                onError={(e) => {
                  console.error('Erreur de chargement de l\'image');
                  e.target.src = 'https://via.placeholder.com/400';
                }}
              />
            </div>
          </div>
          <div className="about-text">
            <h3>Étudiant en BTS SIO option SLAM</h3>
            <p className="about-description">
              Passionné par le développement web et les nouvelles technologies, 
              je suis actuellement en formation pour devenir développeur. 
              Mon parcours m'a permis de développer une solide base en programmation 
              et une compréhension approfondie des enjeux du développement moderne.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <i className="fas fa-graduation-cap"></i>
                <span>BTS SIO SLAM</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>France</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-code"></i>
                <span>Développeur Full Stack Junior</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-language"></i>
                <span>Français, Anglais</span>
              </div>
            </div>
            <div className="about-cta">
              <a href="/cv.pdf" className="btn btn-primary" download>
                <i className="fas fa-download"></i> Télécharger CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;