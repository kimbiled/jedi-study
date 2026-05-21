import { Reveal } from "../../../../components/Reveal.jsx";
import { monthProgram } from "../data/aiProductData.js";

export function AiProgramSection() {
  return (
    <section id="ai-program" className="section ai-program-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Программа на 6 месяцев</span>
        <h2>6 месяцев обучения</h2>
      </Reveal>
      <div className="month-grid">
        {monthProgram.map((month, index) => (
          <Reveal className="month-card" key={month.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{month.title}</h3>
            <p>{month.text}</p>
            <b>{month.hours}</b>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="total-hours">Итого: 160 академических часов</div>
      </Reveal>
    </section>
  );
}
