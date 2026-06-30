import {
  Code2,
  Database,
  Monitor,
  Palette,
  Server,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "C#", "Kotlin", "Dart", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Technologies",
    icon: Server,
    skills: ["React", "Flutter", "Node.js", "Express.js", ".NET"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools & IDEs",
    icon: Wrench,
    skills: ["Git", "GitHub", "Visual Studio Code", "Android Studio", "Figma", "Cisco Packet Tracer"],
  },
  {
    title: "Design & Productivity",
    icon: Palette,
    skills: ["Microsoft Excel", "Microsoft Word", "PowerPoint", "Canva", "CapCut"],
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: ["Windows", "Linux", "Ubuntu"],
  },
];

const technicalFocus = [
  "Cybersecurity Fundamentals",
  "Networking",
  "Linux",
  "SQL",
  "Threats & Vulnerabilities",
  "Detection & Response",
  "Web Application Development",
  "Mobile Application Development",
  "Backend Development",
  "Database Management",
];

const SkillsSection = () => {
  const headerAnimation = useScrollAnimation();
  const focusAnimation = useScrollAnimation();
  const {
    ref: gridRef,
    isVisible: gridVisible,
    getDelay,
  } = useStaggeredAnimation(skillCategories.length);

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${
            headerAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 bg-primary/10 text-primary rounded-md text-xs md:text-sm font-medium mb-3 md:mb-4 border border-primary/20">
            <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Technical skills, tools, and platforms from my resume and project experience.
          </p>
        </div>

        <div
          ref={focusAnimation.ref}
          className={`max-w-6xl mx-auto mb-5 md:mb-8 rounded-lg border border-border bg-card p-5 md:p-6 shadow-card transition-all duration-700 ${
            focusAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="text-lg md:text-xl font-bold">Technical Focus</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {technicalFocus.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border bg-secondary/70 px-3 py-2 text-xs md:text-sm font-medium text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div
          ref={gridRef}
          className="max-w-6xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6"
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group rounded-lg border border-border bg-card p-5 md:p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={getDelay(index)}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border/70 bg-secondary/70 px-3 py-1.5 text-xs md:text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
