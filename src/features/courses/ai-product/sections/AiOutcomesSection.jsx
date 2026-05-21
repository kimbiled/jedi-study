import { Check } from "lucide-react";
import { Reveal } from "../../../../components/Reveal.jsx";
import { outcomes } from "../data/aiProductData.js";

export function AiOutcomesSection() {
  return (
    <section className="section learning-format">
      <Reveal className="section-heading">
        <span className="section-kicker">Результат после курса</span>
        <h2>После курса у вас будет</h2>
      </Reveal>
      <Reveal className="format-list">
        {outcomes.map((item) => (
          <div className="format-row" key={item}>
            <Check size={18} />
            <p>{item}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
