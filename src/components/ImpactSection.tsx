import { useEffect, useState, useRef } from "react";

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Candidates Skilled in Drone Technologies",
    description: "Graduates trained for operator, technician, and R&D roles",
  },
  {
    value: 250,
    suffix: "+",
    label: "Candidates Skilled in EV Technologies",
    description: "Job-ready talent for EV manufacturing and diagnostics",
  },
  {
    value: 300,
    suffix: "+",
    label: "Candidates Skilled in IoT & Robotics",
    description: "Professionals trained for industrial automation",
  },
  {
    value: 50,
    suffix: "+",
    label: "Candidates Skilled in AI/ML",
    description: "Learners trained to build and deploy AI models",
  },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(stat.value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center p-6"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-2">
        {count}
        {stat.suffix}
      </div>
      <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
        {stat.label}
      </h3>
      <p className="text-muted-foreground text-sm">{stat.description}</p>
    </div>
  );
};

export const ImpactSection = () => {
  return (
    <section id="impact" className="bg-muted/30 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            OUR <span className="text-primary">IMPACT</span> SO FAR
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creating real, measurable change in India&apos;s workforce development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
