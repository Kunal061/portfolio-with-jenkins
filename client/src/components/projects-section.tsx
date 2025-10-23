import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const projects = [
  {
    id: 1,
    title: "Jenkins CI/CD Pipeline Project",
    description: "Developed a comprehensive Jenkins CI/CD pipeline using Groovy to automate deployment of static websites from GitHub to Apache2 on AWS EC2.",
    features: [
      "Auto-deploy site files from GitHub to Apache2 on AWS EC2",
      "Integrated webhook for real-time updates on every commit",
      "Implemented secure master-agent automation",
      "Automated cloud website deployment with zero manual steps",
      "Hands-on experience with pipeline scripting and containerization",
    ],
    technologies: ["Jenkins", "Groovy", "AWS EC2", "Apache2", "GitHub", "Docker", "CI/CD"],
    githubUrl: "https://github.com/Kunal061/ci-cd-aws-static-hosting",
    featured: true,
  },
  {
    id: 2,
    title: "Cloud-Based Web Hosting using AWS",
    description: "Deployed scalable static and dynamic web applications leveraging core AWS services with enterprise-grade security and monitoring.",
    features: [
      "Deployed static and dynamic web applications using AWS EC2 and S3",
      "Implemented IAM with secure role-based access control",
      "Configured Apache2 for dynamic content delivery",
      "Implemented load balancing for high availability",
      "Monitored server performance using CloudWatch",
    ],
    technologies: ["AWS", "EC2", "S3", "IAM", "Apache2", "CloudWatch", "Load Balancing"],
    featured: true,
  },
];

export function ProjectsSection() {
  const { ref: projectsRef, isInView: projectsInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Hands-on experience building cloud infrastructure and automation pipelines"
          />

          {/* Projects grid */}
          <div ref={projectsRef} className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`p-8 space-y-6 hover-elevate active-elevate-2 transition-all duration-700 border-border/50 backdrop-blur-sm bg-card/50 ${
                  projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`card-project-${project.id}`}
              >
                {/* Project header */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-foreground"
                        data-testid={`text-project-${project.id}-feature-${index}`}
                      >
                        <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-project-${project.id}-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {project.githubUrl && (
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      data-testid={`link-project-${project.id}-github`}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
