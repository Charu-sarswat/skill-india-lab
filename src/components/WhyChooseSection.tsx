import {
  HandMetal,
  MapPin,
  Plane,
  LayoutGrid,
  Award,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: HandMetal,
    title: "Hands-On First Model",
    description:
      "Learning centered around labs, simulators, and real equipment",
  },
  {
    icon: MapPin,
    title: "Real Job Role Mapping",
    description: "Programs aligned to technician, engineer, and operator roles",
  },
  {
    icon: Plane,
    title: "Simulation Before Field Exposure",
    description: "Reduced risk, faster skill confidence",
  },
  {
    icon: LayoutGrid,
    title: "Plug-and-Play Skill Labs",
    description:
      "Quick deployment within existing institutional infrastructure",
  },
  {
    icon: Award,
    title: "Certification Alignment",
    description: "TCoE, ESSCI, and industry-recognized standards",
  },
  {
    icon: TrendingUp,
    title: "Proven Employability Outcomes",
    description:
      "Focus on placements, entrepreneurship, and workforce readiness",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 ">
            Why Institutions Choose <span className="text-primary">Us</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Outcome-Driven. Industry-Aligned. Scalable.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex w-max animate-scroll-left">
            {[...features, ...features].map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="card-border-gold p-6 hover-lift flex-shrink-0 w-[90vw] sm:w-96 mr-6"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
