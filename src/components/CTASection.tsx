import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(270 60% 25%) 0%, hsl(280 70% 20%) 50%, hsl(17 80% 35%) 100%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            Join The <span className="text-primary">Movement</span>
          </h2>
          <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-8">
            If you are a government body, educational institution, or training
            organization looking to improve employability outcomes, AI for Skill India
            is your skilling partner.
          </p>
          <p className="text-primary text-lg font-medium italic mb-10">
            Together, we can convert education into employment and build a workforce
            that delivers real skills for real jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 group">
              Become a Partner
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/10">
              Build a Skill Lab
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
