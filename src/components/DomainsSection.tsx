import { ArrowRight } from "lucide-react";
import droneImage from "@/assets/drone-tech.jpg";
import evImage from "@/assets/ev-tech.jpg";
import iotImage from "@/assets/iot-robotics.jpg";
import aiImage from "@/assets/ai-ml.jpg";
import solarImage from "@/assets/solar-energy.jpg";

const domains = [
  {
    title: "Drone Technologies",
    description:
      "End-to-end drone skilling including simulation-based flight training, assembly, repair, diagnostics, service, and R&D roles.",
    image: droneImage,
  },
  {
    title: "Electric Vehicle (EV) Technologies",
    description:
      "Hands-on EV skilling covering battery systems, motors, controllers, diagnostics, and clean mobility platforms.",
    image: evImage,
  },
  {
    title: "Embedded Systems, IoT & Robotics",
    description:
      "Industry-aligned training in electronics, robotics, embedded hardware, IoT, and AIoT systems for smart infrastructure.",
    image: iotImage,
  },
  {
    title: "Artificial Intelligence & AI/ML",
    description:
      "Applied AI programs focused on Python, ML workflows, and real-world industry use cases.",
    image: aiImage,
  },
  {
    title: "Solar & Renewable Energy",
    description:
      "Practical solar PV installation, maintenance, grid integration, and renewable energy skilling.",
    image: solarImage,
  },
];

export const DomainsSection = () => {
  return (
    <section id="domains" className="bg-background section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            OUR CORE SKILLING <span className="text-primary">DOMAINS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building expertise in cutting-edge technologies that drive India&apos;s future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <div
              key={domain.title}
              className="group relative overflow-hidden rounded-xl bg-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {domain.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {domain.description}
                </p>
                <button className="inline-flex items-center gap-2 text-primary text-sm font-medium group/btn">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
