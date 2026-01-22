import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Про нас</h1>
        
        <section className="about-section">
          <h2>Хто ми?</h2>
          <p>
            Ми — команда розробників, які створюють сучасні веб-застосунки 
            використовуючи найновіші технології.
          </p>
        </section>

        <section className="about-section">
          <h2>Наша місія</h2>
          <p>
            Наша мета — створювати якісні та зручні рішення, які допомагають 
            людям у їхній повсякденній діяльності.
          </p>
        </section>

        <section className="about-section">
          <h2>Технології</h2>
          <ul className="tech-list">
            <li>React</li>
            <li>TypeScript</li>
            <li>CSS3</li>
            <li>React Router</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;