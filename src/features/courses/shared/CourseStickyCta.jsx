import { Button } from "antd";
import { ArrowRight } from "lucide-react";
import { useScrollToSection } from "../../../hooks/useScrollToSection.js";

export function CourseStickyCta({ title, meta, applicationId }) {
  const scrollToSection = useScrollToSection();

  return (
    <div className="course-sticky-cta">
      <div className="course-sticky-copy">
        <span>{title}</span>
        <p>{meta}</p>
      </div>
      <Button type="primary" icon={<ArrowRight size={17} />} onClick={() => scrollToSection(applicationId)}>
        <span className="course-sticky-button-label">Заявка</span>
      </Button>
    </div>
  );
}
