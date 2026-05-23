import { Button } from "antd";
import { ArrowRight, Play } from "lucide-react";
import { Reveal } from "../../../../components/Reveal.jsx";
import { useScrollToSection } from "../../../../hooks/useScrollToSection.js";
import { uxHighlights } from "../data/uxUiData.js";

export function UxHeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="top" className="course-hero ux-hero">
      <div className="course-hero-copy">
        <Reveal>
          <h1>Станьте UX/UI дизайнером за 2 месяца</h1>
          <p>
            Практический курс по UX/UI и Web для тех, кто хочет выйти на более дорогие проекты и
            собрать портфолио с нуля.
          </p>
        </Reveal>

        <Reveal className="course-highlights">
          {uxHighlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </Reveal>

        <Reveal className="hero-actions">
          <Button
            type="primary"
            size="large"
            icon={<ArrowRight size={18} />}
            onClick={() => scrollToSection("ux-application")}
          >
            Оставить заявку
          </Button>
          <Button size="large" icon={<Play size={18} />} onClick={() => scrollToSection("ux-about")}>
            Смотреть программу
          </Button>
        </Reveal>
      </div>

      <Reveal className="ux-hero-art">
        <div className="ux-window top">
          <span>Research</span>
          <b>UX</b>
        </div>
        <div className="ux-window bottom">
          <span>Interface</span>
          <b>UI</b>
        </div>
      </Reveal>
    </section>
  );
}
