import { Button } from "antd";
import { Check } from "lucide-react";
import { Reveal } from "../../../components/Reveal.jsx";
import { courses } from "../data/homeData.js";

export function CoursesSection() {
  return (
    <section id="courses" className="section courses-section">
      <Reveal className="section-heading">
        <h2>Выберите свой курс</h2>
      </Reveal>
      <div className="course-grid">
        {courses.map((course, index) => (
          <Reveal className={`course-card ${course.tone}`} key={course.title}>
            <div className="course-card-head">
              <span>{course.tag}</span>
              <b>{String(index + 1).padStart(2, "0")}</b>
            </div>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <ul>
              {course.items.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              block
              size="large"
              href={
                index === 0
                  ? "/courses/graphic-design"
                  : index === 1
                    ? "/courses/ux-ui"
                    : "/courses/ai-product"
              }
              type={course.tone === "dark" ? "primary" : "default"}
            >
              Подробнее о курсе
            </Button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
