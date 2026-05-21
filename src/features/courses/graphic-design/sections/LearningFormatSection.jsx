import { Check } from "lucide-react";
import { Reveal } from "../../../../components/Reveal.jsx";
import { formatItems } from "../data/graphicDesignData.js";

export function LearningFormatSection() {
  return (
    <section className="section learning-format">
      <Reveal className="section-heading">
        <span className="section-kicker">Формат обучения</span>
        <h2>Как проходит обучение</h2>
      </Reveal>
      <Reveal className="format-list">
        {formatItems.map((item) => (
          <div className="format-row" key={item}>
            <Check size={18} />
            <p>{item}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
