import { useState } from "react";
import { Modal } from "antd";
import { Reveal } from "../../../../components/Reveal.jsx";
import { getProgramDetails } from "../../shared/programDetails.js";
import { curriculum } from "../data/graphicDesignData.js";

export function ProgramSection() {
  const [selectedModule, setSelectedModule] = useState(null);
  const details = selectedModule ? getProgramDetails(selectedModule) : null;

  return (
    <section id="program" className="section program-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Что вы изучите</span>
        <h2>Что будет на курсе</h2>
      </Reveal>
      <Reveal className="program-grid">
        {curriculum.map((item, index) => (
          <button className="program-item clickable" key={item} onClick={() => setSelectedModule(item)} type="button">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </button>
        ))}
      </Reveal>
      <Modal
        title={details?.title}
        open={Boolean(details)}
        footer={null}
        onCancel={() => setSelectedModule(null)}
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
