import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h3 className="footer__logo">My Landing</h3>
        <nav className="footer__nav">
          <a href="#" className="footer__link">Home</a>
          <a href="#benefits" className="footer__link">Benefits</a>
          <a href="#contact" className="footer__link">Contact</a>
        </nav>
        <div className="footer__socials">
          <a href="#" className="footer__social">📱</a>
          <a href="#" className="footer__social">💼</a>
          <a href="#" className="footer__social">📧</a>
        </div>
        <p className="footer__copy">
          © 2025 <span>My Landing</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}