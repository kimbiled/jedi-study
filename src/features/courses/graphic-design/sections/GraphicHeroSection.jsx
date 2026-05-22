import { Button } from 'antd';
import { ArrowRight, BookOpen, Play } from 'lucide-react';
import { Reveal } from '../../../../components/Reveal.jsx';
import { useScrollToSection } from '../../../../hooks/useScrollToSection.js';
import { courseHighlights } from '../data/graphicDesignData.js';

export function GraphicHeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="top" className="course-hero">
      <div className="course-hero-copy">
        <Reveal>
          <div className="eyebrow">
            <BookOpen size={17} />
            beginner path · graphic design
          </div>
          <h1>Графический дизайн с нуля</h1>
          <p>
            Освойте востребованную профессию, соберите первые работы в портфолио
            и начните зарабатывать на дизайне.
          </p>
        </Reveal>

        <Reveal className="course-highlights">
          {courseHighlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </Reveal>

        <Reveal className="hero-actions">
          <Button
            type="primary"
            size="large"
            icon={<ArrowRight size={18} />}
            onClick={() => scrollToSection('course-application')}
          >
            Оставить заявку
          </Button>
          <Button
            size="large"
            icon={<Play size={18} />}
            onClick={() => scrollToSection('program')}
          >
            Смотреть программу
          </Button>
        </Reveal>
      </div>

      <Reveal className="course-hero-art">
        <div className="course-poster primary">
          <span>Graphic</span>
          <strong>Design</strong>
        </div>
        <div className="course-poster secondary">
          <span>Portfolio</span>
          <strong>01</strong>
        </div>
      </Reveal>
    </section>
  );
}
