import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../../components/Reveal.jsx";
import { generatedStudentCases } from "./studentProofData.js";

export function StudentProofSection({ title = "Учебные кейсы студентов" }) {
  return (
    <section className="section student-proof-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Портфолио</span>
        <h2>{title}</h2>
      </Reveal>
      <div className="student-case-grid">
        {generatedStudentCases.map((item, index) => (
          <Reveal className="student-case-card" key={item.name + item.project}>
            <div className="student-case-cover">
              <span>{item.tag}</span>
              <b>{String(index + 1).padStart(2, "0")}</b>
            </div>
            <div className="student-case-copy">
              <span>{item.stream}</span>
              <h3>{item.name}</h3>
              <p>{item.role}</p>
              <strong>{item.project}</strong>
              <p>{item.result}</p>
              <ArrowUpRight size={20} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
