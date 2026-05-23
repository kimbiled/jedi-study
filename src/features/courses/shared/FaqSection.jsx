import { Collapse } from "antd";
import { Reveal } from "../../../components/Reveal.jsx";
import { commonFaq } from "./courseSharedData.js";

export function FaqSection({ items = commonFaq }) {
  return (
    <section className="section faq-section">
      <Reveal className="section-heading">
        <h2>Частые вопросы</h2>
      </Reveal>
      <Reveal className="faq-shell">
        <Collapse
          ghost
          items={items.map((item) => ({
            key: item.question,
            label: item.question,
            children: <p>{item.answer}</p>,
          }))}
        />
      </Reveal>
    </section>
  );
}
