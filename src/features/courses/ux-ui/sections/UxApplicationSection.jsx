import { Button, Form, Input } from "antd";
import { MessageCircle } from "lucide-react";
import { submitLead } from "../../../../api/leads.js";
import { Reveal } from "../../../../components/Reveal.jsx";

export function UxApplicationSection() {
  return (
    <section id="ux-application" className="course-application">
      <Reveal className="course-application-copy">
        <span className="section-kicker">Заявка</span>
        <h2>Остались вопросы?</h2>
        <p>Напишите нашему менеджеру, он лично проконсультирует вас.</p>
      </Reveal>

      <Reveal className="form-shell">
        <Form
          layout="vertical"
          requiredMark={false}
          onFinish={(values) =>
            submitLead({ ...values, course: "UX/UI дизайн за 2 месяца", source: "ux-course-page" })
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
