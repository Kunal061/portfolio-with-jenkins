import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { Building2, MapPin, Calendar } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const experience = {
  company: "VVDN Technologies Pvt Ltd",
  role: "Cloud Intern",
  location: "Gurgaon, India",
  type: "On-site",
  period: "Jun 2024 – July 2024",
  responsibilities: [
    "Implemented AWS-based deployment setups including EC2 instances, S3 static hosting, and IAM role management",
    "Assisted in configuring Apache2 servers and optimizing cloud environments for efficient application hosting",
    "Contributed to cloud setup and server management using AWS EC2",
    "Created auto scaling groups and ensured efficient deployment of web applications",
  ],
  skills: ["AWS EC2", "S3", "IAM", "Apache2", "Auto Scaling", "CloudWatch"],
};

export function ExperienceSection() {
  const { ref: expRef, isInView: expInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="experience" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <SectionHeading title="Work Experience" />

          {/* Experience card */}
          <div ref={expRef} className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <Card className={`relative p-8 hover-elevate transition-all duration-700 ${
              expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {/* Timeline dot */}
              <div className="absolute -left-2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground" data-testid="text-role">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-2 text-lg text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span data-testid="text-company">{experience.company}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="self-start" data-testid="badge-employment-type">
                      {experience.type}
                    </Badge>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span data-testid="text-period">{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span data-testid="text-location">{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((resp, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-base text-foreground"
                        data-testid={`text-responsibility-${index}`}
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-primary/30 text-primary"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
