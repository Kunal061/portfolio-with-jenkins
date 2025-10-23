import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Download, ArrowDown } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/20"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated circles */}
          <circle cx="10%" cy="20%" r="100" fill="currentColor" className="text-primary/10 animate-pulse" />
          <circle cx="90%" cy="80%" r="120" fill="currentColor" className="text-chart-2/10 animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="80%" cy="30%" r="80" fill="currentColor" className="text-chart-3/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-chart-3 to-primary bg-clip-text text-transparent">
                Kunal Rohilla
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
              Cloud & DevOps Engineer
            </p>
          </div>

          {/* Brief summary */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Detail-oriented engineering student with practical exposure to AWS Cloud.
            Proficient in cloud deployment, CI/CD pipelines, and infrastructure automation.
            Building scalable solutions with AWS, Docker, and Jenkins.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="text-base px-8"
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 backdrop-blur-md"
              asChild
              data-testid="button-download-resume"
            >
              <a
                href="/Kunal_Rohilla_Resume.pdf"
                download="Kunal_Rohilla_Resume.pdf"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3 pt-8">
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-linkedin"
            >
              <a
                href="https://www.linkedin.com/in/kunal-rohilla-745545246/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-github"
            >
              <a
                href="https://github.com/Kunal061"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="link-email"
            >
              <a
                href="mailto:Kunalr.tech@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
