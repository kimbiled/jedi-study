import { Footer } from "../../../components/Footer.jsx";
import { Header } from "../../../components/Header.jsx";
import { CourseStickyCta } from "../shared/CourseStickyCta.jsx";
import { nextCohorts } from "../shared/courseSharedData.js";
import { CareerPathSection } from "../shared/CareerPathSection.jsx";
import { FaqSection } from "../shared/FaqSection.jsx";
import { LearningPlatformSection } from "../shared/LearningPlatformSection.jsx";
import { NextCohortSection } from "../shared/NextCohortSection.jsx";
import { StudentProofSection } from "../shared/StudentProofSection.jsx";
import { AiAboutSection } from "./sections/AiAboutSection.jsx";
import { AiApplicationSection } from "./sections/AiApplicationSection.jsx";
import { AiAudienceSection } from "./sections/AiAudienceSection.jsx";
import { AiFormatSection } from "./sections/AiFormatSection.jsx";
import { AiGrantsSection } from "./sections/AiGrantsSection.jsx";
import { AiHeroSection } from "./sections/AiHeroSection.jsx";
import { AiOutcomesSection } from "./sections/AiOutcomesSection.jsx";
import { AiPriceSection } from "./sections/AiPriceSection.jsx";
import { AiProgramSection } from "./sections/AiProgramSection.jsx";
import { AiSkillsSection } from "./sections/AiSkillsSection.jsx";
import { AiTeachersSection } from "./sections/AiTeachersSection.jsx";

export function AiProductCoursePage() {
  return (
    <main className="min-h-screen bg-paper font-display text-ink">
      <Header consultationId="ai-application" />
      <CourseStickyCta
        title="AI Product Designer"
        meta="6.5 месяцев · 160 часов · стажировка"
        applicationId="ai-application"
      />
      <AiHeroSection />
      <NextCohortSection cohort={nextCohorts.ai} />
      <AiAboutSection />
      <AiAudienceSection />
      <AiFormatSection />
      <LearningPlatformSection />
      <AiSkillsSection />
      <AiProgramSection />
      <AiOutcomesSection />
      <CareerPathSection />
      <StudentProofSection title="Проекты, которые усиливают портфолио Product Designer" />
      <AiTeachersSection />
      <AiPriceSection />
      <AiApplicationSection />
      <AiGrantsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
