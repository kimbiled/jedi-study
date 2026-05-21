import { Button } from "antd";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../../../../components/Reveal.jsx";
import { grantSteps } from "../data/aiProductData.js";

export function AiGrantsSection() {
  return (
    <section className="section grants-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Гранты и условия отбора</span>
        <h2>Гранты на обучение</h2>
      </Reveal>
      <Reveal>
        <p className="section-lead">
          Доступны безвозмездные гранты, которые покрывают 50% и более стоимости обучения.
        </p>
      </Reveal>
      <Reveal className="grant-steps">
        {grantSteps.map((step, index) => (
          <div className="grant-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </div>
        ))}
      </Reveal>
      <Reveal className="grant-action">
        <Button type="primary" size="large" icon={<ArrowRight size={18} />}>
          Узнать подробности и подать заявку на грант в WhatsApp
        </Button>
      </Reveal>
    </section>
  );
}
