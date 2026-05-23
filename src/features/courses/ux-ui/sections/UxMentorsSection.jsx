import { Reveal } from "../../../../components/Reveal.jsx";
import { roninFacts, uxMentors } from "../data/uxUiData.js";

export function UxMentorsSection() {
  return (
    <section className="section mentors-section">
      <Reveal className="section-heading">
        <h2>Кто будет вас учить</h2>
      </Reveal>
      <div className="mentor-grid ux-mentor-grid">
        {uxMentors.map((mentor) => (
          <Reveal className="mentor-panel" key={mentor.name}>
            <div className={`mentor-photo${mentor.photo ? " teacher-photo" : ""}`} style={{ "--accent": mentor.accent }}>
              {mentor.photo ? <img src={mentor.photo} alt={mentor.name} /> : mentor.initials}
            </div>
            <div>
              <h3>{mentor.name}</h3>
              <span>{mentor.role}</span>
              <p>{mentor.text}</p>
            </div>
          </Reveal>
        ))}
        <Reveal className="mentor-panel ronin-panel">
          <div className="mentor-photo" style={{ "--accent": "#090C21" }}>
            R
          </div>
          <div>
            <h3>Курс создан Ronin</h3>
            <span>Международная студия дизайна</span>
            <ul>
              {roninFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
