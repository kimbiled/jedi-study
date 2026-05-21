import { Reveal } from "../../../../components/Reveal.jsx";
import { aiAudience } from "../data/aiProductData.js";

export function AiAudienceSection() {
  return (
    <section className="section course-audience">
      <Reveal className="section-heading">
        <span className="section-kicker">Для кого курс</span>
        <h2>Кому подойдёт курс</h2>
      </Reveal>
      <div className="audience-grid">
        {aiAudience.map((item, index) => (
          <Reveal className="audience-card" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
