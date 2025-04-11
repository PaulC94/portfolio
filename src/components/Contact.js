import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>paul.cohen@efrei.net</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Téléphone</h3>
                <p>+33 7 68 12 18 46</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Localisation</h3>
                <p>Le Perreux-sur-Marne, France</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
              <i className="fas fa-user"></i>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                required
              />
              <i className="fas fa-envelope"></i>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet"
                required
              />
              <i className="fas fa-heading"></i>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                required
              ></textarea>
              <i className="fas fa-comment-alt"></i>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${status}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Envoi en cours...' : 
               status === 'sent' ? 'Message envoyé !' : 
               'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;