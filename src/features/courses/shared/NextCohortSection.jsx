import { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { CalendarDays, Download, Users } from "lucide-react";
import { submitLead } from "../../../api/leads.js";
import { Reveal } from "../../../components/Reveal.jsx";
import { useScrollToSection } from "../../../hooks/useScrollToSection.js";

export function NextCohortSection({ cohort }) {
  const scrollToSection = useScrollToSection();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="section next-cohort-section">
      <Reveal className="section-heading">
        <h2>Старт обучения: {cohort.start}</h2>
      </Reveal>
      <Reveal className="cohort-grid">
        <div className="cohort-card">
          <CalendarDays size={22} />
          <span>Длительность</span>
          <p>{cohort.duration}</p>
        </div>
        <div className="cohort-card">
          <Download size={22} />
          <span>Формат</span>
          <p>{cohort.format}</p>
        </div>
        <div className="cohort-card">
          <Users size={22} />
          <span>Набор</span>
          <p>{cohort.seats}</p>
        </div>
      </Reveal>
      <Reveal className="cohort-actions">
        <Button type="primary" size="large" onClick={() => scrollToSection(cohort.applicationId)}>
          Забронировать место
        </Button>
        <Button size="large" icon={<Download size={18} />} onClick={() => setIsModalOpen(true)}>
          Получить программу PDF
        </Button>
      </Reveal>
      <Modal
        title={`Получить программу: ${cohort.course}`}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form
          layout="vertical"
          requiredMark={false}
          onFinish={(values) => {
            submitLead({ ...values, course: cohort.course, source: "syllabus-modal" });
            setIsModalOpen(false);
          }}
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
          <Button type="primary" size="large" block htmlType="submit">
            Получить программу PDF
          </Button>
        </Form>
      </Modal>
    </section>
  );
}
