import { Footer } from "../../../components/Footer.jsx";
import { Header } from "../../../components/Header.jsx";
import { CourseStickyCta } from "../shared/CourseStickyCta.jsx";
import { nextCohorts } from "../shared/courseSharedData.js";
import { CareerPathSection } from "../shared/CareerPathSection.jsx";
import { FaqSection } from "../shared/FaqSection.jsx";
import { LearningPlatformSection } from "../shared/LearningPlatformSection.jsx";
import { NextCohortSection } from "../shared/NextCohortSection.jsx";
import { StudentProofSection } from "../shared/StudentProofSection.jsx";
import { AudienceSection } from "./sections/AudienceSection.jsx";
import { CourseApplicationSection } from "./sections/CourseApplicationSection.jsx";
import { GraphicHeroSection } from "./sections/GraphicHeroSection.jsx";
import { InstallmentSection } from "./sections/InstallmentSection.jsx";
import { LearningFormatSection } from "./sections/LearningFormatSection.jsx";
import { ProgramSection } from "./sections/ProgramSection.jsx";
import { TariffsSection } from "./sections/TariffsSection.jsx";

export function GraphicDesignCoursePage() {
  return (
    <main className="min-h-screen bg-paper font-display text-ink">
      <Header consultationId="course-application" />
      <CourseStickyCta
        title="Графический дизайн с нуля"
        meta="2 месяца · портфолио · практика"
        applicationId="course-application"
      />
      <GraphicHeroSection />
      <NextCohortSection cohort={nextCohorts.graphic} />
      <AudienceSection />
      <ProgramSection />
      <LearningFormatSection />
      <LearningPlatformSection />
      <CareerPathSection />
      <StudentProofSection title="Какие кейсы можно собрать на курсе" />
      <TariffsSection />
      <InstallmentSection />
      <FaqSection />
      <CourseApplicationSection />
      <Footer />
    </main>
  );
}
