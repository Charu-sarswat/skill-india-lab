import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-robot.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Futuristic AI Technology"
          className="w-full h-full object-cover object-center md:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      {/* Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-3xl md:max-w-4xl lg:max-w-6xl">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up text-left">
            From Classrooms to Careers:{" "}
            <span className="text-primary">Building Job-Ready Talent</span> for
            India
          </h1>
          <p
            className="text-primary text-lg md:text-xl mb-8 leading-relaxed animate-fade-up text-left"
            style={{ animationDelay: "0.2s" }}
          >
            AI for Skill India partners with governments, universities,
            polytechnics, ITIs, and training institutions to transform
            traditional education into hands-on, industry-ready learning
            ecosystems.
          </p>
          <p
            className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed animate-fade-up text-left"
            style={{ animationDelay: "0.3s" }}
          >
            We enable institutions to move beyond theory and deliver real skills
            for real jobs in AI, Drones, EVs, IoT, Robotics, and Clean Energy.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up justify-start"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="gap-2 group">
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Build Skill Labs
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};
