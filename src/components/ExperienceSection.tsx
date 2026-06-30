import { BriefcaseBusiness, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experience = {
  role: "Routing System Intern",
  organization: "Cooperative Development Authority (CDA)",
  location: "Dagupan City, Philippines",
  period: "January 2026 - April 2026",
  stack: ["React", "TypeScript", "C#", ".NET", "PostgreSQL"],
  summary:
    "Completed internship work on CDA's internal routing platform, focusing on workflow automation, document visibility, and reducing manual paperwork through digital processes.",
  highlights: [
    "Contributed to document routing workflows used for internal paperless processing.",
    "Implemented upload, sharing, tracking, and routing status features for document management.",
    "Developed real-time chat and announcement modules to support internal communication.",
    "Improved operational efficiency by helping replace manual paperwork with digital automation.",
  ],
};

const ExperienceSection = () => {
  const headerAnimation = useScrollAnimation();
  const cardAnimation = useScrollAnimation();

  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            headerAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            <BriefcaseBusiness className="w-4 h-4" />
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Relevant <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Internship experience focused on workflow automation, document management, and full-stack development.
          </p>
        </div>

        <div
          ref={cardAnimation.ref}
          className={`max-w-5xl mx-auto rounded-2xl md:rounded-3xl border border-border bg-card/70 backdrop-blur-sm p-5 md:p-8 shadow-card transition-all duration-700 ${
            cardAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-medium text-primary mb-2">
                {experience.organization}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {experience.role}
              </h3>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-primary" />
                  {experience.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary" />
                  {experience.location}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
              {experience.stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-secondary/80 text-muted-foreground border border-border/60 rounded-md"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm md:text-base leading-relaxed text-muted-foreground">
            {experience.summary}
          </p>

          <p className="mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Key Contributions
          </p>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {experience.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
