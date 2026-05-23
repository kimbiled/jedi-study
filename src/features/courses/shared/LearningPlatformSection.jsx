import { CheckCircle2, MessageSquareText, PlayCircle, Users } from "lucide-react";
import { Reveal } from "../../../components/Reveal.jsx";

const platformItems = [
  ["Видеоуроки", "Короткие уроки, чеклисты и записи созвонов", PlayCircle],
  ["Домашние задания", "Практика по теме и понятный дедлайн", CheckCircle2],
  ["Фидбек наставника", "Разбор логики, композиции и презентации", MessageSquareText],
  ["Комьюнити", "Обсуждения, вакансии, заказы и поддержка", Users],
];

export function LearningPlatformSection() {
  return (
    <section className="section platform-section">
      <Reveal className="section-heading">
        <h2>Платформа, созвоны, фидбек и комьюнити в одном процессе</h2>
      </Reveal>
      <Reveal className="platform-mockup">
        <div className="platform-sidebar">
          <span>Jedikuna OS</span>
          {["Модули", "Домашки", "Созвоны", "Портфолио"].map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="platform-main">
          <div className="platform-video">
            <PlayCircle size={46} />
            <span>Live review / portfolio sprint</span>
          </div>
          <div className="platform-grid">
            {platformItems.map(([title, text, Icon]) => (
              <div className="platform-item" key={title}>
                <Icon size={20} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
