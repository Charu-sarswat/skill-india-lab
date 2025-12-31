import { Building2, GraduationCap, Wrench, Award, Briefcase } from "lucide-react";

const partners = [
  {
    icon: Building2,
    title: "Government & Public Sector Programs",
    description:
      "Supporting national and state skilling missions with scalable, outcome-driven training models.",
  },
  {
    icon: GraduationCap,
    title: "Engineering Colleges (BTech / MTech)",
    description:
      "Enhancing employability through industry-aligned labs and applied learning modules.",
  },
  {
    icon: Wrench,
    title: "Polytechnics & ITIs",
    description:
      "Delivering hands-on technical skilling aligned with industry job roles.",
  },
  {
    icon: Award,
    title: "Vocational & Skill Development Centers",
    description:
      "Improving placement outcomes through practical, certification-ready training.",
  },
  {
    icon: Briefcase,
    title: "Corporate Training & Workforce Development",
    description:
      "Upskilling and reskilling teams for Industry 4.0 and digital transformation.",
  },
];

export const PartnersSection = () => {
  return (
    <section id="partners" className="bg-background section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            OUR INSTITUTIONAL <span className="text-primary">PARTNERSHIP</span> ECOSYSTEM
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Working together to build a skilled India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.title}
              className="card-border-gold p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <partner.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3">
                {partner.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
