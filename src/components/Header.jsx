import { Button } from "antd";
import { MessageCircle } from "lucide-react";
import { useScrollToSection } from "../hooks/useScrollToSection.js";

const navItems = [
  ["О школе", "about"],
  ["Курсы", "courses"],
  ["Наставники", "mentors"],
  ["Результаты", "results"],
];

export function Header({ consultationId = "application" }) {
  const scrollToSection = useScrollToSection();
  const isHomePage = window.location.pathname === "/";

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Jedikuna Study">
        <span>J</span>
        Jedikuna Study
      </a>
      <nav>
        {navItems.map(([label, sectionId]) => (
          <a href={isHomePage ? `#${sectionId}` : `/#${sectionId}`} key={sectionId}>
            {label}
          </a>
        ))}
      </nav>
      <Button
        type="primary"
        icon={<MessageCircle size={17} />}
        onClick={() => scrollToSection(consultationId)}
      >
        Консультация
      </Button>
    </header>
  );
}
