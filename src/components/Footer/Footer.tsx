import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h3 className="footer__logo">Мій Проєкт</h3>
        
        <nav className="footer__nav">
          <Link to="/" className="footer__link">Головна</Link>
          <Link to="/about" className="footer__link">Про нас</Link>
          <Link to="/contacts" className="footer__link">Контакти</Link>
        </nav>

        <div className="footer__socials">
          <a 
            href="https://t.me/yourchannel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer__social" 
            title="Telegram"
            aria-label="Telegram"
          >
            📱
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer__social" 
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            💼
          </a>
          <a 
            href="mailto:your@email.com" 
            className="footer__social" 
            title="Email"
            aria-label="Email"
          >
            📧
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer__social" 
            title="GitHub"
            aria-label="GitHub"
          >
            🐙
          </a>
        </div>

        <p className="footer__copy">
          © {currentYear} <span>Мій Проєкт</span>. Всі права захищені.
        </p>
      </div>
    </footer>
  );
}