import React, { useState } from 'react';
import './Contacts.css';

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Тут буде логіка відправки форми
    alert('Дякуємо за повідомлення!');
  };

  return (
    <div className="contacts-container">
      <h1>Контакти</h1>

      <div className="contacts-content">
        <section className="contact-info">
          <h2>Зв'яжіться з нами</h2>
          <div className="info-item">
            <strong>📧 Email:</strong>
            <p>example@email.com</p>
          </div>
          <div className="info-item">
            <strong>📱 Телефон:</strong>
            <p>+380 XX XXX XX XX</p>
          </div>
          <div className="info-item">
            <strong>📍 Адреса:</strong>
            <p>Україна, Київ</p>
          </div>
        </section>

        <section className="contact-form-section">
          <h2>Напишіть нам</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ім'я:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Повідомлення:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Відправити
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contacts;