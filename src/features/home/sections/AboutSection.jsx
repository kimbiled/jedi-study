import { Reveal } from "../../../components/Reveal.jsx";

export function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <Reveal className="section-kicker">Что такое Jedikuna Study</Reveal>
      <Reveal>
        <h2>
          Практическая онлайн-школа для тех, кто хочет думать, презентовать и работать как
          дизайнер.
        </h2>
      </Reveal>
      <Reveal className="about-grid">
        <p>
          Онлайн-школа дизайна, где обучение построено вокруг практики, живых созвонов,
          наставничества и реальных проектов.
        </p>
        <p>
          Мы обучаем графическому дизайну, UX/UI, веб-дизайну, продуктовому подходу,
          AI-инструментам и работе с заказчиками.
        </p>
        <p>
          Студенты проходят обучение в живом формате, получают обратную связь от наставников,
          делают проекты в портфолио и получают доступ к комьюнити, заказам и вакансиям.
        </p>
      </Reveal>
    </section>
  );
}
