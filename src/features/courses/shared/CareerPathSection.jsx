import { Reveal } from "../../../components/Reveal.jsx";
import { careerSteps } from "./studentProofData.js";

export function CareerPathSection() {
  return (
    <section className="section career-path-section">
      <Reveal className="section-heading">
        <h2>От первого задания до первых заказов</h2>
      </Reveal>
      <div className="career-path-grid">
        {careerSteps.map((step, index) => (
          <Reveal className="career-step-card" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
