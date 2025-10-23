import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Award, ExternalLink } from "lucide-react";
import { SiAmazon, SiOracle, SiLinux } from "react-icons/si";
import { useInView } from "@/hooks/use-in-view";

const certifications = [
  {
    id: 1,
    title: "AWS Fundamentals",
    issuer: "Amazon Web Services",
    icon: SiAmazon,
    color: "text-orange-500",
    link: "https://www.credly.com/badges/896158b7-947a-4614-88f5-48daf6907ea9/public_url",
  },
  {
    id: 2,
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle Corporation",
    icon: SiOracle,
    color: "text-red-600",
    link: "https://www.linkedin.com/in/kunal-rohilla-745545246/overlay/Certifications/1195031261/treasury/?profileId=ACoAADzyxeUBJ986at-9au_TbxzzPCeVWvXlrfA",
  },
  {
    id: 3,
    title: "Linux Foundation Certified System Administrator",
    issuer: "Linux Foundation",
    code: "LFS-101",
    icon: SiLinux,
    color: "text-yellow-500",
    link: "https://www.credly.com/badges/832b4c65-73fb-4427-818f-ef93492d1c64/public_url",
  },
];

export function CertificationsSection() {
  const { ref: certsRef, isInView: certsInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <SectionHeading 
            title="Certifications" 
            subtitle="Professional certifications validating cloud and system administration expertise"
          />

          {/* Certifications grid */}
          <div ref={certsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={cert.id}
                  className={`p-8 space-y-6 hover-elevate active-elevate-2 transition-all duration-700 group border-chart-2/20 ${
                    certsInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  data-testid={`card-certification-${cert.id}`}
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-lg bg-muted/50 flex items-center justify-center">
                        <Icon className={`h-7 w-7 ${cert.color}`} />
                      </div>
                      <Award className="h-5 w-5 text-chart-2" />
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground leading-tight" data-testid={`text-certification-title-${cert.id}`}>
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-certification-issuer-${cert.id}`}>
                        {cert.issuer}
                      </p>
                      {cert.code && (
                        <p className="text-xs font-mono text-muted-foreground">
                          {cert.code}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* View credential button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 group-hover:border-chart-2/50"
                    asChild
                    data-testid={`link-certification-${cert.id}`}
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Credential
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
