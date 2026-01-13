import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a href='/' className="header__logo">My Landing</a>
        
        {/* Overlay для закриття меню */}
        <div 
          className={`header__overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={closeMenu}
        />
        
        {/* Навігація */}
        <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="header__link" onClick={closeMenu}>Home</a>
          <a href="#benefits" className="header__link" onClick={closeMenu}>Benefits</a>
          <a href="#contact" className="header__link" onClick={closeMenu}>Contact</a>
        </nav>
        
        {/* Бургер кнопка */}
        <div 
          className={`header__burger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}