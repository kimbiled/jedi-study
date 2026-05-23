import { Reveal } from "../../../../components/Reveal.jsx";

export function AiAboutSection() {
  return (
    <section className="section ai-about-section">
      <Reveal className="section-heading">
        <h2>Хотите перейти в продуктовый дизайн?</h2>
      </Reveal>
      <Reveal className="about-grid ai-about-grid">
        <p>
          На курсе студенты углубляют UX/UI, учатся проводить исследования, проектировать сложные
          интерфейсы, работать с дизайн-системами, использовать AI-инструменты и собирать проекты
          под реальные бизнес-задачи.
        </p>
        <p>
          Главная особенность курса — практика с реальным заказчиком. Каждый студент проходит путь
          от брифа и исследования до презентации и сдачи проекта.
        </p>
      </Reveal>
    </section>
  );
}
