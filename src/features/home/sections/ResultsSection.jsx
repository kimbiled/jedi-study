import { Reveal } from "../../../components/Reveal.jsx";
import { results } from "../data/homeData.js";

export function ResultsSection() {
  return (
    <section id="results" className="section results-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Кейсы</span>
        <h2>Результаты студентов</h2>
      </Reveal>
      <div className="results-grid">
        {results.map(([name, meta, text], index) => (
          <Reveal className="result-card" key={name + meta}>
            <div className="result-index">{String(index + 1).padStart(2, "0")}</div>
            <h3>{name}</h3>
            <span>{meta}</span>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
