import { Footer } from "../../../components/Footer.jsx";
import { Header } from "../../../components/Header.jsx";
import { CourseStickyCta } from "../shared/CourseStickyCta.jsx";
import { nextCohorts } from "../shared/courseSharedData.js";
import { CareerPathSection } from "../shared/CareerPathSection.jsx";
import { FaqSection } from "../shared/FaqSection.jsx";
import { LearningPlatformSection } from "../shared/LearningPlatformSection.jsx";
import { NextCohortSection } from "../shared/NextCohortSection.jsx";
import { StudentProofSection } from "../shared/StudentProofSection.jsx";
import { UxAboutSection } from "./sections/UxAboutSection.jsx";
import { UxApplicationSection } from "./sections/UxApplicationSection.jsx";
import { UxAudienceSection } from "./sections/UxAudienceSection.jsx";
import { UxCasesSection } from "./sections/UxCasesSection.jsx";
import { UxGraduatesSection } from "./sections/UxGraduatesSection.jsx";
import { UxHeroSection } from "./sections/UxHeroSection.jsx";
import { UxInstallmentSection } from "./sections/UxInstallmentSection.jsx";
import { UxMentorsSection } from "./sections/UxMentorsSection.jsx";
import { UxTariffsSection } from "./sections/UxTariffsSection.jsx";

export function UxUiCoursePage() {
  return (
    <main className="min-h-screen bg-paper font-display text-ink">
      <Header consultationId="ux-application" />
      <CourseStickyCta
        title="UX/UI дизайн"
        meta="2 месяца · 2 проекта · no-code"
        applicationId="ux-application"
      />
      <UxHeroSection />
      <NextCohortSection cohort={nextCohorts.ux} />
      <UxAboutSection />
      <UxAudienceSection />
      <UxMentorsSection />
      <LearningPlatformSection />
      <CareerPathSection />
      <UxGraduatesSection />
      <StudentProofSection title="Примеры портфолио после UX/UI курса" />
      <UxTariffsSection />
      <UxInstallmentSection />
      <UxCasesSection />
      <FaqSection />
      <UxApplicationSection />
      <Footer />
    </main>
  );
}
