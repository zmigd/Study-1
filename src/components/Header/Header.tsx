import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

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
        <NavLink to="/" className="header__logo" onClick={closeMenu}>
          My Landing
        </NavLink>

        {/* Overlay для закриття меню */}
        <div
          className={`header__overlay ${isMenuOpen ? "active" : ""}`}
          onClick={closeMenu}
        />

        {/* Навігація */}
        <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
          <NavLink to="/" className="header__link" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" className="header__link" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contacts" className="header__link" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        {/* Бургер кнопка */}
        <div
          className={`header__burger ${isMenuOpen ? "active" : ""}`}
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
