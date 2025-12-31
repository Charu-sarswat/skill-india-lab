import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-robot.jpg";

type Slide = {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
};

export const HeroSection = ({ intervalMs = 3000 }: { intervalMs?: number }) => {
  const slides: Slide[] = useMemo(
    () => [
      {
        id: 1,
        title: "From Classrooms to Careers: Building Job-Ready Talent",
        subtitle: "AI for Skill India",
        description:
          "We partner with governments, universities, polytechnics, ITIs, and training institutions to transform education into hands-on, industry-ready learning.",
        image: heroImage,
      },
      {
        id: 2,
        title: "Hands-On Learning for Real Jobs",
        subtitle: "Industry-Aligned Curriculum",
        description:
          "Delivering skills for AI, Drones, EVs, IoT, Robotics, and Clean Energy through practical labs and projects.",
        image: heroImage,
      },
      {
        id: 3,
        title: "Scale Skill Labs Nationwide",
        subtitle: "Partner With Us",
        description:
          "Enable institutions to move beyond theory—build labs, train faculty, and certify job-ready graduates.",
        image: heroImage,
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // clear existing
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [intervalMs, slides.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          {slides.map((s, i) => (
            <img
              key={s.id}
              src={s.image}
              alt={s.title}
              className={`w-full h-full object-cover object-center md:object-right absolute inset-0 transition-opacity duration-700 ease-in-out " ${i === index ? "opacity-100 z-0" : "opacity-0 z-[-1]"
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-3xl md:max-w-4xl lg:max-w-6xl">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up text-left">
            {slides[index].title.split(":")[0]}:{" "}
            <span className="text-primary">
              {slides[index].title.split(":")[1] || ""}
            </span>
          </h1>
          <p
            className="text-primary text-lg md:text-xl mb-8 leading-relaxed animate-fade-up text-left"
            style={{ animationDelay: "0.2s" }}
          >
            {slides[index].description}
          </p>
          <p
            className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed animate-fade-up text-left"
            style={{ animationDelay: "0.3s" }}
          >
            {slides[index].subtitle}
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

          {/* Dots */}
          <div className="flex gap-2 mt-8">
            {slides.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${i === index ? "bg-primary" : "bg-muted-foreground/40"
                  }`}
              />
            ))}
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