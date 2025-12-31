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
    description: "Learning centered around labs, simulators, and real equipment",
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
    description: "Quick deployment within existing institutional infrastructure",
  },
  {
    icon: Award,
    title: "Certification Alignment",
    description: "TCoE, ESSCI, and industry-recognized standards",
  },
  {
    icon: TrendingUp,
    title: "Proven Employability Outcomes",
    description: "Focus on placements, entrepreneurship, and workforce readiness",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Why Institutions Choose <span className="text-primary">Us</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Outcome-Driven. Industry-Aligned. Scalable.
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-border-gold p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
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
    </section>
  );
};
