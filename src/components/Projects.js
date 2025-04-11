import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Application de Gestion",
      description: "Application web complète de gestion développée pour [Client/Stage]. Gestion des utilisateurs, des stocks et des commandes avec tableau de bord administrateur.",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      image: "/path/to/project1-image.jpg",
      links: {
        demo: "https://demo-link.com",
        github: "https://github.com/your-username/project1"
      }
    },
    {
      title: "Site E-commerce",
      description: "Plateforme e-commerce moderne avec panier d'achat, paiement en ligne et gestion des commandes. Développée avec React et Node.js.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/path/to/project2-image.jpg",
      links: {
        demo: "https://demo-link.com",
        github: "https://github.com/your-username/project2"
      }
    },
    // Ajoutez d'autres projets ici
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-demo">
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;