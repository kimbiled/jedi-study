import { useState } from "react";
import { Modal } from "antd";
import { Reveal } from "../../../../components/Reveal.jsx";
import { getProgramDetails } from "../../shared/programDetails.js";
import { skills } from "../data/aiProductData.js";

export function AiSkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const details = selectedSkill ? getProgramDetails(selectedSkill) : null;

  return (
    <section className="section program-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Что вы освоите</span>
        <h2>Что вы освоите за 6.5 месяцев</h2>
      </Reveal>
      <Reveal className="program-grid ai-skills-grid">
        {skills.map((item, index) => (
          <button className="program-item clickable" key={item} onClick={() => setSelectedSkill(item)} type="button">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </button>
        ))}
      </Reveal>
      <Modal
        title={details?.title}
        open={Boolean(details)}
        footer={null}
        onCancel={() => setSelectedSkill(null)}
      >
        {details && (
          <div className="program-modal-content">
            <p>{details.summary}</p>
            <strong>Результат</strong>
            <p>{details.result}</p>
            <strong>Практика</strong>
            <p>{details.homework}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
