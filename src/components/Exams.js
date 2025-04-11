import React from 'react';
import './Exams.css';

function Exams() {
  const examsList = [
    {
      title: "E1 - Culture et communication",
      coef: 4,
      details: [
        {
          name: "E11 - Culture générale et expression",
          coef: 2,
          duration: "4h",
          type: "Écrit"
        },
        {
          name: "E12 - Expression et communication en langue anglaise",
          coef: 2,
          duration: "2h + 20min",
          type: "Écrit + Oral"
        }
      ]
    },
    {
      title: "E2 - Mathématiques pour l'informatique",
      coef: 3,
      duration: "2h",
      type: "Écrit"
    },
    {
      title: "E3 - Culture économique, managériale et juridique pour l'informatique",
      coef: 3,
      duration: "4h",
      type: "Écrit"
    },
    {
      title: "E4 - Support et mise à disposition des services informatiques",
      coef: 4,
      duration: "40min",
      type: "Oral + Pratique",
      description: "Épreuve pratique basée sur le contrôle en cours de formation (CCF)"
    },
    {
      title: "E5 - SLAM - Conception et développement d'applications",
      coef: 4,
      duration: "40min",
      type: "Oral",
      description: "Présentation d'un projet développé en stage ou en formation"
    },
    {
      title: "E6 - Cybersécurité des services informatiques",
      coef: 4,
      duration: "4h",
      type: "Écrit + Pratique",
      description: "Étude de cas de mise en œuvre de solutions de sécurité"
    }
  ];

  return (
    <section id="exams" className="exams">
      <div className="exams-container">
        <h2 className="section-title">Les Épreuves du BTS SIO</h2>
        <div className="exams-intro">
          <p>Le BTS SIO option SLAM (Solutions Logicielles et Applications Métiers) 
             comporte 6 épreuves principales qui évaluent différentes compétences essentielles 
             pour un futur professionnel de l'informatique.</p>
        </div>
        <div className="exams-grid">
          {examsList.map((exam, index) => (
            <div key={index} className="exam-card">
              <div className="exam-header">
                <h3>{exam.title}</h3>
                <span className="exam-coef">Coefficient {exam.coef}</span>
              </div>
              {exam.details ? (
                <div className="exam-details">
                  {exam.details.map((detail, idx) => (
                    <div key={idx} className="exam-subdetail">
                      <h4>{detail.name}</h4>
                      <p>Coefficient : {detail.coef}</p>
                      <p>Durée : {detail.duration}</p>
                      <p>Type : {detail.type}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="exam-info">
                  <p>Durée : {exam.duration}</p>
                  <p>Type : {exam.type}</p>
                  {exam.description && <p>{exam.description}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Exams;
