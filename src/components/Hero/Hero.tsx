import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">
          Welcome to <span>My Landing</span>
        </h1>
        <p className="hero__subtitle">
          Створюємо неймовірні веб-рішення з використанням React та TypeScript
        </p>
        <a href='#' className="hero__btn">Get Started</a>
      </div>
    </section>
  );
}