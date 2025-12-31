import { Mail, Phone, ArrowRight, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Impact", href: "#impact" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
  ],
  domains: [
    { name: "Drone Technologies", href: "#domains" },
    { name: "EV Technologies", href: "#domains" },
    { name: "IoT & Robotics", href: "#domains" },
    { name: "AI & Machine Learning", href: "#domains" },
    { name: "Solar & Renewable Energy", href: "#domains" },
  ],
  partners: [
    { name: "Government Programs", href: "#partners" },
    { name: "Engineering Colleges", href: "#partners" },
    { name: "Polytechnics & ITIs", href: "#partners" },
    { name: "Corporate Training", href: "#partners" },
  ],
};

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(270 60% 30%) 0%, hsl(280 70% 25%) 50%, hsl(17 80% 40%) 100%)",
      }}
    >
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Logo & Contact Form */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background font-heading font-bold text-xl">AI</span>
              </div>
              <div>
                <span className="font-heading font-bold text-foreground text-xl">AI for Skill</span>
                <span className="font-heading font-bold text-primary text-xl"> India</span>
              </div>
            </div>

            <h3 className="text-primary font-heading font-bold text-xl mb-4">
              Get in Touch
            </h3>
            <p className="text-foreground/80 mb-6">
              Reach out to us - let&apos;s talk possibilities.
            </p>

            {/* Email Input */}
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-foreground/10 border-foreground/20 text-foreground placeholder:text-foreground/50"
              />
              <Button size="icon" className="shrink-0">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Checkbox id="consent" className="border-foreground/30" />
              <label htmlFor="consent">I agree to be contacted via email</label>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-primary font-heading font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-primary font-heading font-bold mb-4">Skill Domains</h4>
              <ul className="space-y-3">
                {footerLinks.domains.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-primary font-heading font-bold mb-4">Partners</h4>
              <ul className="space-y-3">
                {footerLinks.partners.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info & Bottom Bar */}
        <div className="border-t border-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-foreground/80">
              <a href="mailto:contact@aiforskillindia.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="w-4 h-4" />
                contact@aiforskillindia.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-foreground">
                <Phone className="w-4 h-4" />
                +91 123 456 7890
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-foreground/60 text-sm">
                © AI for Skill India | Enabling Hands-On, Job-Ready Education
              </span>
              <span className="text-foreground/60 text-sm">
                All Rights Reserved 2025
              </span>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <a
        href="#home"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg z-50"
      >
        <svg
          className="w-5 h-5 text-primary-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </a>
    </footer>
  );
};
