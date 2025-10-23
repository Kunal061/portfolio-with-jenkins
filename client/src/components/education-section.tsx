import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    major: "Computer Science and Engineering",
    institution: "Dronacharya College of Engineering",
    university: "Gurugram University",
    location: "Gurgaon, India",
    period: "2022 – 2026",
    gpa: "Pursuing",
    current: true,
  },
  {
    id: 2,
    degree: "Senior Secondary (Grade 12th)",
    major: "Science",
    institution: "Holy Cross School",
    university: "Central Board of Secondary Education",
    location: "Gurgaon, India",
    period: "2022",
    gpa: "78%",
    current: false,
  },
  {
    id: 3,
    degree: "Secondary (Grade 10th)",
    major: "",
    institution: "Holy Cross School",
    university: "Central Board of Secondary Education",
    location: "Gurgaon, India",
    period: "2020",
    gpa: "74%",
    current: false,
  },
];

export function EducationSection() {
  const { ref: eduRef, isInView: eduInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <SectionHeading title="Education" />

          {/* Education timeline */}
          <div ref={eduRef} className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {education.map((edu, index) => (
              <div key={edu.id} className={`relative transition-all duration-700 ${
                eduInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`} style={{ transitionDelay: `${index * 150}ms` }}>
                {/* Timeline dot */}
                <div
                  className={`absolute -left-2 top-8 w-4 h-4 rounded-full border-4 border-background hidden md:block ${
                    edu.current ? "bg-primary" : "bg-muted"
                  }`}
                />

                <Card
                  className="p-8 hover-elevate active-elevate-2 transition-all duration-300"
                  data-testid={`card-education-${edu.id}`}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-bold text-foreground" data-testid={`text-education-degree-${edu.id}`}>
                              {edu.degree}
                              {edu.major && (
                                <span className="text-muted-foreground font-normal"> – {edu.major}</span>
                              )}
                            </h3>
                            <p className="text-base text-foreground mt-1" data-testid={`text-education-institution-${edu.id}`}>
                              {edu.institution}
                            </p>
                            <p className="text-sm text-muted-foreground" data-testid={`text-education-university-${edu.id}`}>
                              {edu.university}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="text-lg font-semibold text-primary" data-testid={`text-education-gpa-${edu.id}`}>
                          {edu.gpa}
                        </div>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span data-testid={`text-education-period-${edu.id}`}>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span data-testid={`text-education-location-${edu.id}`}>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
