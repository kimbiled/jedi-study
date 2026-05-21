import { Reveal } from "../../../../components/Reveal.jsx";
import { aiTeachers } from "../data/aiProductData.js";

export function AiTeachersSection() {
  return (
    <section className="section mentors-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Преподаватели</span>
        <h2>Преподаватели</h2>
      </Reveal>
      <div className="mentor-grid">
        {aiTeachers.map((teacher) => (
          <Reveal className="mentor-panel" key={teacher.name}>
            <div className="mentor-photo" style={{ "--accent": teacher.accent }}>
              {teacher.initials}
            </div>
            <div>
              <h3>{teacher.name}</h3>
              <span>{teacher.role}</span>
              <b className="teacher-exp">{teacher.experience}</b>
              <p>{teacher.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
