import { Reveal } from "../../../../components/Reveal.jsx";
import { uxAudience } from "../data/uxUiData.js";

export function UxAudienceSection() {
  return (
    <section className="section course-audience">
      <Reveal className="section-heading">
        <span className="section-kicker">Для кого курс</span>
        <h2>Для кого?</h2>
      </Reveal>
      <Reveal>
        <p className="section-lead">
          Для тех, кто знает базу дизайна и хочет изучить высокооплачиваемую, востребованную
          профессию.
        </p>
      </Reveal>
      <div className="audience-grid five">
        {uxAudience.map((item, index) => (
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
