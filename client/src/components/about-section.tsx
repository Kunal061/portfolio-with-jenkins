import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { useInView } from "@/hooks/use-in-view";

const techStack = {
  languages: ["Python", "Bash", "HTML", "CSS", "Java", "YAML", "Groovy"],
  tools: ["AWS Cloud Services", "Docker", "Apache2", "Linux CLI", "VS Code", "Azure Portal", "Jenkins"],
  platforms: ["Amazon Web Services", "Linux (Ubuntu)", "Windows", "GitHub", "Docker Hub", "Azure VMs"],
};

export function AboutSection() {
  const { ref: bioRef, isInView: bioInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { ref: techRef, isInView: techInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <SectionHeading title="About Me" />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div 
              ref={bioRef}
              className={`space-y-6 transition-all duration-700 ${
                bioInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <p className="text-lg text-foreground leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">Cloud & DevOps Engineer</span> specializing in AWS infrastructure and automation. Currently pursuing my B.Tech in Computer Science at Dronacharya College of Engineering.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                With hands-on experience from my internship at VVDN Technologies, I've worked extensively with AWS services including EC2, S3, IAM, and CloudWatch. I'm proficient in building CI/CD pipelines using Jenkins and containerizing applications with Docker.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My expertise lies in cloud deployment, infrastructure as code, and automation. I'm particularly interested in optimizing cloud environments for scalability, security, and cost-efficiency. Always eager to learn new technologies and contribute to innovative cloud solutions.
              </p>
            </div>

            {/* Tech Stack */}
            <div 
              ref={techRef}
              className={`space-y-6 transition-all duration-700 delay-200 ${
                techInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <Card className="p-6 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.languages.map((lang) => (
                      <Badge
                        key={lang}
                        variant="secondary"
                        className="text-sm"
                        data-testid={`badge-language-${lang.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="text-sm"
                        data-testid={`badge-tool-${tool.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.platforms.map((platform) => (
                      <Badge
                        key={platform}
                        variant="secondary"
                        className="text-sm"
                        data-testid={`badge-platform-${platform.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
