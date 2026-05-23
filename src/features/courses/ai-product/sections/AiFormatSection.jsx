import { Reveal } from "../../../../components/Reveal.jsx";
import { weeklyFormat } from "../data/aiProductData.js";

export function AiFormatSection() {
  return (
    <section className="section ai-format-section">
      <Reveal className="section-heading">
        <h2>Формат обучения</h2>
      </Reveal>
      <Reveal>
        <p className="section-lead">
          Курс проходит в живом онлайн-формате. Каждую неделю проходят:
        </p>
      </Reveal>
      <div className="weekly-grid">
        {weeklyFormat.map((item) => (
          <Reveal className="weekly-card" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <span>{item.duration}</span>
            </div>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="format-note">Записи созвонов сохраняются и остаются доступными студентам.</p>
      </Reveal>
    </section>
  );
}
