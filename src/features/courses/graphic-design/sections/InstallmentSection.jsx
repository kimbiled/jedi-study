import { Reveal } from "../../../../components/Reveal.jsx";
import { installmentOptions } from "../data/graphicDesignData.js";

export function InstallmentSection() {
  return (
    <section className="installment-band">
      <Reveal>
        <h2>Рассрочка 12 месяцев без %</h2>
      </Reveal>
      <Reveal className="installment-list">
        {installmentOptions.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </Reveal>
    </section>
  );
}
