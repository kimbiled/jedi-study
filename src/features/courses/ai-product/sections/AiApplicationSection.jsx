import { Button, Form, Input } from "antd";
import { MessageCircle } from "lucide-react";
import { submitLead } from "../../../../api/leads.js";
import { Reveal } from "../../../../components/Reveal.jsx";

export function AiApplicationSection() {
  return (
    <section id="ai-application" className="course-application">
      <Reveal className="course-application-copy">
        <span className="section-kicker">Заявка</span>
        <h2>Хотите понять, подходит ли вам курс?</h2>
        <p>
          Оставьте заявку, и менеджер Jedikuna Study проконсультирует вас по программе, формату,
          стоимости и старту ближайшего потока.
        </p>
      </Reveal>

      <Reveal className="form-shell">
        <Form
          layout="vertical"
          requiredMark={false}
          onFinish={(values) =>
            submitLead({
              ...values,
              course: "AI-Powered Product Designer",
              source: "ai-product-course-page",
            })
          }
        >
          <Form.Item label="Имя" name="name">
            <Input size="large" placeholder="Как к вам обращаться?" />
          </Form.Item>
          <Form.Item label="Телефон" name="phone">
            <Input size="large" placeholder="+7" />
          </Form.Item>
          <Form.Item label="Telegram / WhatsApp" name="messenger">
            <Input size="large" placeholder="@username или номер" />
          </Form.Item>
          <Form.Item label="Комментарий" name="comment">
            <Input.TextArea rows={4} placeholder="Напишите вопрос или удобное время связи" />
          </Form.Item>
          <Button type="primary" size="large" block htmlType="submit" icon={<MessageCircle size={18} />}>
            Оставить заявку
          </Button>
        </Form>
      </Reveal>
    </section>
  );
}
