import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionTransition from "@/components/SectionTransition";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SectionTransition direction="up">
          <AboutSection />
        </SectionTransition>
        <SectionTransition direction="left" delay={100}>
          <ProjectsSection />
        </SectionTransition>
        <SectionTransition direction="scale" delay={50}>
          <CertificatesSection />
        </SectionTransition>
        <SectionTransition direction="right" delay={100}>
          <SkillsSection />
        </SectionTransition>
        <SectionTransition direction="up" delay={50}>
          <ContactSection />
        </SectionTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
