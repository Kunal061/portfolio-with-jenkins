import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { Trophy, Users } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const achievements = [
  {
    id: 1,
    title: "AIR 2 in Aptitude Quiz",
    organization: "CodingNinja",
    description: "Secured All India Rank 2 in a competitive aptitude quiz, demonstrating strong problem-solving and analytical skills.",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Hackathon Volunteer",
    organization: "DEVOLYMPUS",
    description: "Successfully volunteered in organizing a technical hackathon, contributing to event coordination and participant support.",
    icon: Users,
  },
];

export function AchievementsSection() {
  const { ref: achievementsRef, isInView: achievementsInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="achievements" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <SectionHeading title="Achievements" />

          {/* Achievements grid */}
          <div ref={achievementsRef} className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={achievement.id}
                  className={`p-8 space-y-4 hover-elevate active-elevate-2 transition-all duration-700 border-chart-2/30 ${
                    achievementsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  data-testid={`card-achievement-${achievement.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-chart-2" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-foreground" data-testid={`text-achievement-title-${achievement.id}`}>
                        {achievement.title}
                      </h3>
                      <p className="text-sm font-medium text-primary" data-testid={`text-achievement-org-${achievement.id}`}>
                        {achievement.organization}
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
