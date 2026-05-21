import { Reveal } from "../../../../components/Reveal.jsx";
import { VisualAccent } from "../../../../components/VisualAccent.jsx";
import { audience } from "../data/graphicDesignData.js";

export function AudienceSection() {
  return (
    <section className="section course-audience">
      <Reveal className="section-heading">
        <span className="section-kicker">Для кого курс</span>
        <h2>Этот курс для вас, если вы:</h2>
      </Reveal>
      <div className="audience-grid">
        {audience.map((item, index) => (
          <Reveal className="audience-card" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="section-visual-row">
        <VisualAccent
          title="Start"
          label="from zero"
          variant="blue"
          items={["Visual", "Type", "Color", "Client brief"]}
        />
      </Reveal>
    </section>
  );
}
