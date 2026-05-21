import { Footer } from "../../components/Footer.jsx";
import { Header } from "../../components/Header.jsx";
import { CareerPathSection } from "../courses/shared/CareerPathSection.jsx";
import { LearningPlatformSection } from "../courses/shared/LearningPlatformSection.jsx";
import { StudentProofSection } from "../courses/shared/StudentProofSection.jsx";
import { AboutSection } from "./sections/AboutSection.jsx";
import { ApplicationSection } from "./sections/ApplicationSection.jsx";
import { CoursesSection } from "./sections/CoursesSection.jsx";
import { HeroSection } from "./sections/HeroSection.jsx";
import { MentorsSection } from "./sections/MentorsSection.jsx";
import { ResultsSection } from "./sections/ResultsSection.jsx";
import { ShowcaseSection } from "./sections/ShowcaseSection.jsx";
import { StatsSection } from "./sections/StatsSection.jsx";

export function HomePage() {
  return (
    <main className="min-h-screen bg-paper font-display text-ink">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <CoursesSection />
      <LearningPlatformSection />
      <CareerPathSection />
      <MentorsSection />
      <ShowcaseSection />
      <StudentProofSection title="Сгенерированная витрина кейсов на основе результатов студентов" />
      <ResultsSection />
      <ApplicationSection />
      <Footer />
    </main>
  );
}
