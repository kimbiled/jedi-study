import { Reveal } from "../../../../components/Reveal.jsx";

export function UxCasesSection() {
  return (
    <section className="section ux-cases-section">
      <Reveal className="section-heading">
        <span className="section-kicker">Кейсы</span>
        <h2>100+ успешных кейсов</h2>
      </Reveal>
      <Reveal>
        <p className="section-lead">
          Наши студенты делают реальные проекты, оформляют портфолио, выходят на первые заказы и
          переходят в дизайн-студии, агентства и продуктовые команды.
        </p>
      </Reveal>
    </section>
  );
}
