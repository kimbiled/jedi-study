import { Button } from "antd";
import { ArrowRight, Bot, Play } from "lucide-react";
import { Reveal } from "../../../../components/Reveal.jsx";
import { useScrollToSection } from "../../../../hooks/useScrollToSection.js";
import { aiHighlights } from "../data/aiProductData.js";

export function AiHeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="top" className="course-hero ai-hero">
      <div className="course-hero-copy">
        <Reveal>
          <div className="eyebrow">
            <Bot size={17} />
            ai · product · middle path
          </div>
          <h1>AI-Powered Product Designer</h1>
          <p>
            6-месячная программа для дизайнеров, которые хотят вырасти до Junior+/Middle, освоить
            продуктовый подход, AI-инструменты и реальные проекты.
          </p>
        </Reveal>

        <Reveal className="course-highlights">
          {aiHighlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </Reveal>

        <Reveal className="hero-actions">
          <Button
            type="primary"
            size="large"
            icon={<ArrowRight size={18} />}
            onClick={() => scrollToSection("ai-application")}
          >
            Оставить заявку
          </Button>
          <Button size="large" icon={<Play size={18} />} onClick={() => scrollToSection("ai-program")}>
            Смотреть программу
          </Button>
        </Reveal>
      </div>

      <Reveal className="ai-hero-art">
        <div className="ai-core-card">
          <span>Product</span>
          <strong>AI</strong>
        </div>
        <div className="ai-side-card">
          <span>160h</span>
          <b>24 weeks</b>
        </div>
        <div className="ai-stack">
          {["Research", "Figma", "AI Studio", "Claude MCP", "Webflow"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
