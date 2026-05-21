import { Reveal } from "../../../components/Reveal.jsx";
import { stats } from "../data/homeData.js";

export function StatsSection() {
  return (
    <section className="stats-band" aria-label="Цифры школы">
      {stats.map(([value, label]) => (
        <Reveal className="stat-item" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </Reveal>
      ))}
    </section>
  );
}
