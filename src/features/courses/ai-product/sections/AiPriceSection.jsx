import { Button } from "antd";
import { Reveal } from "../../../../components/Reveal.jsx";
import { useScrollToSection } from "../../../../hooks/useScrollToSection.js";

export function AiPriceSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="installment-band ai-price-band">
      <Reveal>
        <span className="price-kicker">Стоимость курса</span>
        <h2>600 000 ₸</h2>
        <p>
          Доступна рассрочка 0-0-24 от банков Kaspi Bank, Halyk Bank, Freedom Finance. Также
          доступна внутренняя рассрочка от школы.
        </p>
        <Button size="large" onClick={() => scrollToSection("ai-application")}>
          Оставить заявку
        </Button>
      </Reveal>
    </section>
  );
}
