import { Calendar, Folder, ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  description: string;
  tech: string[];
  year: string;
  role: string;
  highlights: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "DisabilityCareers",
    description: "A job-matching platform that connects persons with disabilities (PWDs) to inclusive employers. It helps PWDs find accessible job opportunities while guiding companies on inclusive hiring and workplace accessibility.",
    tech: ["ReactJS", "MongoDB", "NodeJS"],
    year: "2024 - 2025",
    role: "Full Stack Developer",
    highlights: [
      "Job postings from companies committed to disability inclusion",
      "Filters to match job seekers with roles based on skills and needs",
      "Successfully developed a mobile application for the project"
    ],
    link: "https://disability-careers-gixk.onrender.com",
  },
  {
    title: "A&J AutoFix",
    description: "A comprehensive online platform designed to streamline and enhance the vehicle repair and maintenance booking process. The platform provides a seamless and efficient experience for both vehicle owners and service providers.",
    tech: ["Flutter", "Dart", "MongoDB", "NodeJS", "Firebase"],
    year: "2024",
    role: "Full Stack Developer",
    highlights: [
      "User-friendly interface for web and mobile platforms",
      "Notification, customer reviews and ratings, geolocation services"
    ],
  },
  {
    title: "Gear Brawl",
    description: "A multiplayer action game developed using Unity and C# with 3D assets created in Blender.",
    tech: ["Unity", "C#", "Blender"],
    year: "2025",
    role: "Game Developer",
    highlights: [
      "3D game development with Unity engine",
      "Custom 3D assets and animations"
    ],
  },
  {
    title: "Bibilibeads",
    description: "An e-commerce platform that lets you shop for colorful beads and customize unique accessories! Mix and match designs to create stunning bracelets, necklaces, and charms.",
    tech: ["Android Studio", "Kotlin", "Laravel"],
    year: "2023",
    role: "Full Stack Developer",
    highlights: [
      "Customizable accessories creation",
      "Drag-and-drop customization feature"
    ],
  },
  {
    title: "Weastern Oceanic Grandeur",
    description: "A restaurant reservation website that allows users to book a table, select the number of guests, and explore the menu including appetizers, drinks, and main dishes.",
    tech: ["HTML", "CSS"],
    year: "2022",
    role: "Front-End Developer",
    highlights: [
      "Simple reservation system with capacity selection",
      "Responsive & user-friendly design"
    ],
  },
];

const ProjectsSection = () => {
  const headerAnimation = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible, getDelay } = useStaggeredAnimation(projects.length);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-20 transition-all duration-700 ${
            headerAnimation.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning web applications, mobile apps, and game development
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const CardWrapper = project.link ? 'a' : 'div';
            const cardProps = project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};
            
            return (
            <CardWrapper
              key={project.title}
              {...cardProps}
              className={`group relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-primary/40 hover:bg-card/80 transition-all duration-500 block cursor-pointer ${
                gridVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={getDelay(index)}
            >
              {/* Project number badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                0{index + 1}
              </div>
              
              {/* Hover arrow */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>

              {/* Header with folder icon */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{project.role}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mb-6 space-y-2.5">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-secondary/80 text-muted-foreground border-0 hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardWrapper>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;