import { Button } from "antd";
import { Check } from "lucide-react";
import { Reveal } from "../../../../components/Reveal.jsx";
import { useScrollToSection } from "../../../../hooks/useScrollToSection.js";
import { uxTariffs } from "../data/uxUiData.js";

export function UxTariffsSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="section tariffs-section">
      <Reveal className="section-heading">
        <h2>Тарифы</h2>
      </Reveal>
      <div className="tariff-grid">
        {uxTariffs.map((tariff) => (
          <Reveal className={`tariff-card ${tariff.tone}`} key={tariff.title}>
            <h3>{tariff.title}</h3>
            <ul>
              {tariff.items.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="tariff-price">
              <strong>{tariff.price}</strong>
              <span>{tariff.monthly}</span>
            </div>
            <Button
              block
              size="large"
              type={tariff.tone === "dark" ? "primary" : "default"}
              onClick={() => scrollToSection("ux-application")}
            >
              Оставить заявку
            </Button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
