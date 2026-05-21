import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../../components/Reveal.jsx";

const showcaseItems = [
  ["Brand identity", "Логотип, визуальная система, носители"],
  ["UX case", "Исследование, flow, прототип, UI"],
  ["SMM design", "Контент-система для бренда и соцсетей"],
  ["AI concept", "Идея, генерация, презентация решения"],
];

export function ShowcaseSection() {
  return (
    <section className="section showcase-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Витрина работ</span>
        <h2>Студенты собирают портфолио, которое можно показать клиенту</h2>
      </Reveal>
      <div className="showcase-grid">
        {showcaseItems.map(([title, text], index) => (
          <Reveal className="showcase-card" key={title}>
            <div className="showcase-art">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="showcase-card-copy">
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight size={20} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
