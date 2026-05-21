import { Reveal } from "../../../components/Reveal.jsx";
import { mentors } from "../data/homeData.js";

export function MentorsSection() {
  return (
    <section id="mentors" className="section mentors-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Наставники</span>
        <h2>Кто будет вас учить</h2>
      </Reveal>
      <div className="mentor-grid">
        {mentors.map((mentor) => (
          <Reveal className="mentor-panel" key={mentor.name}>
            <div className="mentor-photo" style={{ "--accent": mentor.accent }}>
              {mentor.initials}
            </div>
            <div>
              <h3>{mentor.name}</h3>
              <span>{mentor.role}</span>
              <p>{mentor.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
