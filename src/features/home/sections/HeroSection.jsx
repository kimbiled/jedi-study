import { Button } from "antd";
import { ArrowRight, CirclePlay } from "lucide-react";
import { Reveal } from "../../../components/Reveal.jsx";
import { useScrollToSection } from "../../../hooks/useScrollToSection.js";
import { directions } from "../data/homeData.js";
import { VisualBoard } from "../components/VisualBoard.jsx";

export function HeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="top" className="hero-section">
      <div className="hero-copy">
        <Reveal>
          <div className="eyebrow">
            <CirclePlay size={17} />
            live cohorts · portfolio · mentorship
          </div>
          <h1>Jedikuna Study</h1>
          <p className="hero-lead">
            Онлайн-школа дизайна, где вы учитесь на практике, работаете с реальными задачами и
            собираете портфолио под свой уровень.
          </p>
        </Reveal>

        <Reveal className="direction-list">
          {directions.map((direction, index) => (
            <div className="direction-item" key={direction}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{direction}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="hero-actions">
          <Button
            type="primary"
            size="large"
            icon={<ArrowRight size={18} />}
            onClick={() => scrollToSection("courses")}
          >
            Выбрать курс
          </Button>
          <Button size="large" onClick={() => scrollToSection("application")}>
            Получить консультацию
          </Button>
        </Reveal>
      </div>

      <Reveal className="hero-visual">
        <VisualBoard />
      </Reveal>
    </section>
  );
}
