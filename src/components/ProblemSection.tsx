import { AlertTriangle, Eye, Target } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="container-custom">
        {/* Problem Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">The Challenge</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            The Gap Between Education and <span className="text-primary">Employability</span>
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            While academic institutions produce graduates at scale, industries continue
            to face a shortage of job-ready talent. The challenge is not degrees but
            practical exposure, operational confidence, and real-world problem-solving skills.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="card-border-gold p-6 hover-lift">
              <h3 className="text-primary font-heading font-semibold text-lg mb-3">
                Practice-First Learning
              </h3>
              <p className="text-muted-foreground text-sm">
                Shifting learning from theory-first to practice-first
              </p>
            </div>
            <div className="card-border-gold p-6 hover-lift">
              <h3 className="text-primary font-heading font-semibold text-lg mb-3">
                Hands-On Labs
              </h3>
              <p className="text-muted-foreground text-sm">
                Replacing passive classrooms with hands-on labs and simulations
              </p>
            </div>
            <div className="card-border-gold p-6 hover-lift">
              <h3 className="text-primary font-heading font-semibold text-lg mb-3">
                Industry Alignment
              </h3>
              <p className="text-muted-foreground text-sm">
                Aligning training outcomes directly with industry roles and job readiness
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card-border-gold p-8 hover-lift">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To enable India&apos;s institutions to become centers of practical excellence,
              producing graduates who are skilled, employable, and industry-ready from day one.
            </p>
          </div>

          <div className="card-border-gold p-8 hover-lift">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To partner with institutions and governments to deliver hands-on, scalable,
              and certification-aligned skilling programs that convert education into employment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
