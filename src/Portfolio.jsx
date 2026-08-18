import { MotionConfig } from "framer-motion";
import Header from "./sections/Header.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import WorkSection from "./sections/WorkSection.jsx";
import ValueSection from "./sections/ValueSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import ResumeSection from "./sections/ResumeSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import Footer from "./sections/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { actionLinks, featuredWork } from "./data/portfolioData.js";

export function validatePortfolioLinks() {
  return {
    emailUsesGmailCompose: actionLinks.email.startsWith("https://mail.google.com/mail/?view=cm"),
    linkedInUsesCorrectProfile: actionLinks.linkedIn === "https://www.linkedin.com/in/shina-rose-dsouza-443a63287/",
    hasThreeCaseStudies: featuredWork.length >= 3,
  };
}

export default function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen scroll-smooth bg-[#fff8fb] text-slate-900 selection:bg-rose-200 selection:text-rose-950">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-rose-800 focus:shadow-xl">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          <HeroSection />
          <WorkSection />
          <ValueSection />
          <SkillsSection />
          <AboutSection />
          <ExperienceSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}
