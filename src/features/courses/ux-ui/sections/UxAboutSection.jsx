import { Check } from "lucide-react";
import { Reveal } from "../../../../components/Reveal.jsx";
import { uxCourseFormat } from "../data/uxUiData.js";

export function UxAboutSection() {
  return (
    <section id="ux-about" className="section learning-format">
      <Reveal className="section-heading">
        <h2>Онлайн-школа дизайна, где вы окунётесь в реальный мир с заказчиками</h2>
      </Reveal>
      <Reveal className="format-list">
        {uxCourseFormat.map((item) => (
          <div className="format-row" key={item}>
            <Check size={18} />
            <p>{item}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
