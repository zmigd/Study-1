import './Benefits.css';

export default function Benefits() {
  const benefitsData = [
    {
      icon: '🚀',
      title: 'Швидкість',
      text: 'Блискавична швидкість завантаження та роботи додатку'
    },
    {
      icon: '🛡️',
      title: 'Безпека',
      text: 'Надійний захист даних та безпечна робота'
    },
    {
      icon: '⚡',
      title: 'Продуктивність',
      text: 'Оптимізований код для максимальної ефективності'
    }
  ];

  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <h2 className="benefits__title">
          Our <span>Benefits</span>
        </h2>
        <div className="benefits__grid">
          {benefitsData.map((item, index) => (
            <div className="benefits__card" key={index}>
              <span className="benefits__icon">{item.icon}</span>
              <h3 className="benefits__card-title">{item.title}</h3>
              <p className="benefits__card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}