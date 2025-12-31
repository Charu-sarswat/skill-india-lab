import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProblemSection } from "@/components/ProblemSection";
import { DomainsSection } from "@/components/DomainsSection";
import { ImpactSection } from "@/components/ImpactSection";
import { PartnersSection } from "@/components/PartnersSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProblemSection />
        <DomainsSection />
        <ImpactSection />
        <PartnersSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
