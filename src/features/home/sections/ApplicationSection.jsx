import { Button, Form, Input, Select } from "antd";
import { BadgeCheck, BriefcaseBusiness, Users } from "lucide-react";
import { submitLead } from "../../../api/leads.js";
import { Reveal } from "../../../components/Reveal.jsx";
import { courses } from "../data/homeData.js";

export function ApplicationSection() {
  return (
    <section id="application" className="application-section">
      <Reveal className="application-copy">
        <h2>Не знаете, какой курс выбрать?</h2>
        <p>
          Оставьте заявку, и менеджер поможет подобрать курс под ваш уровень, цели и свободное
          время.
        </p>
        <div className="application-points">
          <span>
            <BadgeCheck size={18} /> разбор уровня
          </span>
          <span>
            <BriefcaseBusiness size={18} /> подбор траектории
          </span>
          <span>
            <Users size={18} /> доступ в комьюнити
          </span>
        </div>
      </Reveal>

      <Reveal className="form-shell">
        <Form layout="vertical" requiredMark={false} onFinish={submitLead}>
          <Form.Item label="Имя" name="name">
            <Input size="large" placeholder="Как к вам обращаться?" />
          </Form.Item>
          <Form.Item label="Телефон" name="phone">
            <Input size="large" placeholder="+7" />
          </Form.Item>
          <Form.Item label="Telegram / WhatsApp" name="messenger">
            <Input size="large" placeholder="@username или номер" />
          </Form.Item>
          <Form.Item label="Какой курс интересует?" name="course">
            <Select
              size="large"
              placeholder="Выберите направление"
              options={courses.map((course) => ({ value: course.title, label: course.title }))}
            />
          </Form.Item>
          <Form.Item label="Комментарий" name="comment">
            <Input.TextArea rows={4} placeholder="Расскажите о цели, уровне или графике" />
          </Form.Item>
          <Button type="primary" size="large" block htmlType="submit">
            Получить консультацию
          </Button>
        </Form>
      </Reveal>
    </section>
  );
}
