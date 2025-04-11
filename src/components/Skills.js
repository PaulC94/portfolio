import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillsLeft = {
    languages: {
      title: "Langages",
      items: [
        { name: "JavaScript", level: 90, icon: "devicon-javascript-plain" },
        { name: "PHP", level: 85, icon: "devicon-php-plain" },
        { name: "HTML/CSS", level: 95, icon: "devicon-html5-plain" },
        { name: "SQL", level: 80, icon: "devicon-mysql-plain" },
         ]
    },
    frameworks: {
      title: "Frameworks & Librairies",
      items: [
        { name: "React", level: 80, icon: "devicon-react-original" },
        { name: "next.js", level: 82, icon: "devicon-nextjs-plain" },
        { name: "Bootstrap", level: 70, icon: "devicon-bootstrap-plain" },
        { name: "Node.js", level: 75, icon: "devicon-nodejs-plain" }
      ]
    }
  };

  const skillsRight = {
    tools: {
      title: "Outils & Environnements",
      items: [
        { name: "Git", level: 85, icon: "devicon-git-plain" },
        { name: "VS Code", level: 92, icon: "devicon-vscode-plain" },
        { name: "MySQL", level: 80, icon: "devicon-mysql-plain" },
        { name: "Docker", level: 70, icon: "devicon-docker-plain" }
      ]
    },
    softSkills: {
      title: "Soft Skills",
      items: [
        { name: "Travail d'équipe", level: 95, icon: "fas fa-users" },
        { name: "Gestion de projet", level: 85, icon: "fas fa-tasks" },
        { name: "Communication", level: 90, icon: "fas fa-comments" },
        { name: "Résolution de problèmes", level: 88, icon: "fas fa-puzzle-piece" }
      ]
    }
  };

  const SkillColumn = ({ skills }) => (
    <div className="skills-column">
      {Object.entries(skills).map(([key, category]) => (
        <div 
          key={key}
          className={`skill-category ${activeCategory === key ? 'active' : ''}`}
          onClick={() => setActiveCategory(key === activeCategory ? null : key)}
        >
          <h3>{category.title}</h3>
          <div className="skills-list">
            {category.items.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <i className={skill.icon}></i>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="skill-bar-container">
                  <div 
                    className="skill-bar" 
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Compétences</h2>
        <div className="skills-content">
          <SkillColumn skills={skillsLeft} />
          <SkillColumn skills={skillsRight} />
        </div>
      </div>
    </section>
  );
}

export default Skills;