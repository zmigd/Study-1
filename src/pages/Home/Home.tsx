import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Ласкаво просимо!</h1>
        <p className="subtitle">Це ваш новий React проєкт</p>
      </section>

      <section className="info-section">
        <div className="info-card">
          <h2>🚀 Швидкий старт</h2>
          <p>Почніть розробку вашого застосунку</p>
        </div>

        <div className="info-card">
          <h2>📚 Навчання</h2>
          <p>Вивчайте React та TypeScript</p>
        </div>

        <div className="info-card">
          <h2>💡 Ідеї</h2>
          <p>Реалізуйте свої проєкти</p>
        </div>
      </section>
    </div>
  );
};

export default Home;