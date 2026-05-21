import { useEffect, useState } from "react";
import { Reveal } from "../../../components/Reveal.jsx";
import { results } from "../data/homeData.js";

export function ResultsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % results.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const activeStudent = results[activeIndex];
  const nextStudents = [1, 2, 3].map((offset) => results[(activeIndex + offset) % results.length]);

  return (
    <section id="results" className="section results-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Кейсы</span>
        <h2>Результаты студентов</h2>
      </Reveal>
      <Reveal className="student-spotlight">
        <div className="spotlight-glass one" />
        <div className="spotlight-glass two" />
        <div className="spotlight-main-card">
          <div className="spotlight-photo">
            <span>{activeStudent[0].slice(0, 1)}</span>
          </div>
          <div className="spotlight-copy">
            <span>{activeStudent[1]}</span>
            <h3>{activeStudent[0]}</h3>
            <p>{activeStudent[2]}</p>
          </div>
        </div>
        <div className="spotlight-stack" aria-hidden="true">
          {nextStudents.map(([name, meta, text], index) => (
            <button
              className={`stack-card stack-card-${index + 1}`}
              key={name + meta}
              onClick={() => setActiveIndex((activeIndex + index + 1) % results.length)}
              type="button"
            >
              <span>{meta}</span>
              <strong>{name}</strong>
              <p>{text}</p>
            </button>
          ))}
        </div>
        <div className="spotlight-dots">
          {results.map(([name], index) => (
            <button
              aria-label={`Показать студента ${name}`}
              className={index === activeIndex ? "active" : ""}
              key={name}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
