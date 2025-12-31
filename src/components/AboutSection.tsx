import aboutBg from "@/assets/about-bg-update.png";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutBg}
          alt="Professional training environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-8">
            ABOUT <span className="text-primary">US</span>
          </h2>

          <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
            AI for Skill India is a skilling and capability-building initiative designed
            to help institutions deliver outcome-driven, employment-focused education.
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed mb-8">
            We work with government bodies, engineering colleges, polytechnics, ITIs,
            vocational institutes, and corporate training centers to integrate hands-on
            skilling into existing academic and training frameworks.
          </p>

          <p className="text-primary text-lg md:text-xl leading-relaxed italic">
            Our role is to convert education infrastructure into job-creation engines by
            embedding real-world labs, simulations, hardware training, and industry-aligned
            curricula.
          </p>
        </div>
      </div>
    </section>
  );
};
