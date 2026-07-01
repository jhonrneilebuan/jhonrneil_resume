import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Gamepad2,
  MonitorSmartphone,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { Badge } from "./ui/badge";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  year: string;
  period: string;
  role: string;
  badge?: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
  icon: typeof Code2;
}

const projects: Project[] = [
  {
    title: "CDA Routing System",
    year: "2026",
    period: "Jan 2026 - Apr 2026",
    role: "Routing System Intern",
    badge: "Internship Project",
    description:
      "An internal workflow platform for the Cooperative Development Authority that digitizes document routing from upload to tracking, with built-in communication tools for users.",
    highlights: [
      "Structured the document lifecycle around routing status, visibility, and handoffs.",
      "Added file upload, sharing, tracking, announcements, and chat as workflow modules.",
      "Built the system with React, TypeScript, C#, .NET, and PostgreSQL.",
    ],
    tech: ["React", "TypeScript", "C#", ".NET", "PostgreSQL"],
    icon: BriefcaseBusiness,
  },
  {
    title: "DisabilityCareers",
    year: "2025",
    period: "2024 - 2025",
    role: "Full Stack Developer",
    description:
      "A job-matching platform that connects persons with disabilities (PWDs) to inclusive employers. It helps PWDs find accessible job opportunities while guiding companies on inclusive hiring and workplace accessibility.",
    highlights: [
      "Developed a job-matching platform that connects persons with disabilities (PWDs) with inclusive employers.",
      "Provided accessible job opportunities for PWDs while supporting companies in adopting inclusive hiring practices and improving workplace accessibility.",
      "Integrated job postings from companies committed to disability inclusion.",
      "Implemented filtering options that match job seekers to roles based on their skills and needs.",
    ],
    tech: ["ReactJS", "MongoDB", "NodeJS"],
    link: "https://disability-careers-gixk.onrender.com",
    icon: Code2,
  },
  {
    title: "Gear Brawl",
    year: "2025",
    period: "2025",
    role: "Game Developer",
    description:
      "A multiplayer action game developed using Unity and C# with 3D assets created in Blender.",
    highlights: [
      "Developed a real-time multiplayer game in Unity using Photon to enable online gameplay.",
      "Implemented core systems such as matchmaking, lobby creation, and player synchronization for seamless multiplayer experience.",
      "Conducted testing and debugging to optimize performance and enhance overall user experience.",
    ],
    tech: ["Unity", "C#", "Blender"],
    icon: Gamepad2,
  },
  {
    title: "A&J AutoFix",
    year: "2024",
    period: "2024",
    role: "Full Stack Developer",
    description:
      "A comprehensive online platform designed to streamline and enhance the vehicle repair and maintenance booking process. The platform provides a seamless and efficient experience for both vehicle owners and service providers.",
    highlights: [
      "Developed a full-stack vehicle service booking platform enabling users to schedule maintenance and repair services.",
      "Added multiple service categories including tire replacement, windshield repair, and oil changes.",
      "Integrated real-time notifications for booking confirmations and status updates.",
      "Built a secure backend using Node.js and MongoDB to manage users, bookings, and service data efficiently.",
    ],
    tech: ["Flutter", "Dart", "MongoDB", "NodeJS", "Firebase"],
    icon: MonitorSmartphone,
  },
  {
    title: "Bibilibeads",
    year: "2023",
    period: "2023",
    role: "Full Stack Developer",
    description:
      "An e-commerce platform that lets you shop for colorful beads and customize unique accessories! Mix and match designs to create stunning bracelets, necklaces, and charms.",
    highlights: [
      "Customizable accessories creation.",
      "Drag-and-drop customization feature.",
    ],
    tech: ["Android Studio", "Kotlin", "Laravel"],
    icon: ShoppingBag,
  },
  {
    title: "Weastern Oceanic Grandeur",
    year: "2022",
    period: "2022",
    role: "Front-End Developer",
    description:
      "A restaurant reservation website that allows users to book a table, select the number of guests, and explore the menu including appetizers, drinks, and main dishes.",
    highlights: [
      "Simple reservation system with capacity selection.",
      "Responsive & user-friendly design.",
    ],
    tech: ["HTML", "CSS"],
    icon: Utensils,
  },
];

const ProjectsSection = () => {
  const headerAnimation = useScrollAnimation();
  const {
    ref: timelineRef,
    isVisible: timelineVisible,
    getDelay,
  } = useStaggeredAnimation(projects.length);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={headerAnimation.ref}
          className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-700 md:mb-16 ${
            headerAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Projects
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            My Project <span className="text-gradient">Timeline</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            A clean timeline of my recent systems, web, mobile, and game
            development projects, arranged from newest to oldest.
          </p>
        </div>

        <div ref={timelineRef} className="relative mx-auto max-w-6xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-border sm:left-5 md:left-12" />

          <div className="space-y-7 sm:space-y-8 md:space-y-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const cardClassName = `group block rounded-xl border border-border/80 bg-card/80 p-4 shadow-card backdrop-blur-sm transition-all duration-300 sm:rounded-2xl sm:p-5 md:min-h-60 md:p-10 ${
                project.link
                  ? "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                  : "hover:border-primary/30 hover:bg-card"
              }`;

              const cardContent = (
                <>
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-bold tracking-wide text-primary">
                      {project.year}
                    </p>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="break-words text-lg font-bold leading-tight text-foreground sm:text-xl md:text-2xl">
                          {project.title}
                        </h3>
                        {project.badge && (
                          <Badge
                            variant="secondary"
                            className="border border-primary/20 bg-primary/10 text-xs font-medium text-primary"
                          >
                            {project.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="mt-2 text-sm font-medium text-muted-foreground">
                        {project.role} - {project.period}
                      </p>
                      {project.link && (
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                          View Project
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-6 max-w-4xl text-sm leading-7 text-muted-foreground sm:mt-7 md:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-5 grid gap-2.5 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Skills & Tools Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="border border-foreground/10 bg-secondary/80 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/15 hover:text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              );

              return (
                <div
                  key={`${project.year}-${project.title}`}
                  className={`relative pl-12 transition-all duration-700 sm:pl-16 md:pl-28 ${
                    timelineVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={getDelay(index)}
                >
                  <div className="absolute left-0 top-6 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-foreground/20 bg-background shadow-md ring-8 ring-background sm:h-10 sm:w-10 md:left-6 md:h-12 md:w-12">
                    <Icon className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClassName}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <article className={cardClassName}>{cardContent}</article>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
