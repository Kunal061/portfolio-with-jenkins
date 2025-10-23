import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const contactInfo = {
  email: "Kunalr.tech@gmail.com",
  phone: "+91 9212294947",
  location: "Gurugram, India",
  linkedin: "https://www.linkedin.com/in/kunal-rohilla-745545246/",
  github: "https://github.com/Kunal061",
};

export function ContactSection() {
  const { ref: contactRef, isInView: contactInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
          />

          {/* Contact cards */}
          <div ref={contactRef} className="grid md:grid-cols-3 gap-6">
            <Card className={`p-6 text-center space-y-4 hover-elevate active-elevate-2 transition-all duration-700 ${
              contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`} style={{ transitionDelay: "0ms" }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Email
                </h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-base text-foreground hover:text-primary transition-colors block break-all"
                  data-testid="link-contact-email"
                >
                  {contactInfo.email}
                </a>
              </div>
            </Card>

            <Card className={`p-6 text-center space-y-4 hover-elevate active-elevate-2 transition-all duration-700 ${
              contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`} style={{ transitionDelay: "100ms" }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Phone
                </h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-base text-foreground hover:text-primary transition-colors block"
                  data-testid="link-contact-phone"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </Card>

            <Card className={`p-6 text-center space-y-4 hover-elevate active-elevate-2 transition-all duration-700 ${
              contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`} style={{ transitionDelay: "200ms" }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Location
                </h3>
                <p className="text-base text-foreground" data-testid="text-contact-location">
                  {contactInfo.location}
                </p>
              </div>
            </Card>
          </div>

          {/* Social links */}
          <div className="text-center space-y-6">
            <p className="text-base text-muted-foreground">
              Connect with me on social platforms
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-2"
                data-testid="button-contact-linkedin"
              >
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-2"
                data-testid="button-contact-github"
              >
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
