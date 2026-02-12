import { Cpu, Code2, Wrench, Users, Zap } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const technicalSkills = [
  { name: "Frontend Development", icon: "🎨" },
  { name: "Backend Development", icon: "⚙️" },
  { name: "Mobile Development", icon: "📱" },
  { name: "Software Development", icon: "💻" },
  { name: "Project Management", icon: "📋" },
];

const programmingLanguages = [
  "Java", "Python", "Kotlin", "JavaScript", "TypeScript", "Dart", "C#", "HTML & CSS",
];

const frameworks = [
  "ReactJS", "Flutter", "NodeJS", "Express", "Laravel", "Unity", "MongoDB", "Firebase",
];

const coreSkills = [
  { name: "Leadership", icon: "👑" },
  { name: "Trainability", icon: "📚" },
  { name: "Computational Thinking", icon: "🧠" },
  { name: "Problem Solving", icon: "💡" },
  { name: "Teamwork", icon: "🤝" },
  { name: "Flexibility", icon: "🔄" },
];

const SkillsSection = () => {
  const headerAnimation = useScrollAnimation();
  const technicalAnimation = useScrollAnimation();
  const languagesAnimation = useScrollAnimation();
  const frameworksAnimation = useScrollAnimation();
  const coreAnimation = useScrollAnimation();

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-primary/5 rounded-full blur-[120px] md:blur-[150px]" />
      <div className="absolute top-20 left-10 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-primary/5 rounded-full blur-[100px] md:blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${
            headerAnimation.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Technologies and competencies I've developed through years of dedicated learning and practice
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Technical Skills - Card Grid */}
          <div 
            ref={technicalAnimation.ref}
            className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-700 ${
              technicalAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                <Cpu className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">Technical Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-2.5 md:gap-3">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-secondary/50 hover:bg-primary/10 rounded-xl md:rounded-2xl transition-all duration-300 group cursor-default ${
                    technicalAnimation.isVisible 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <span className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Frameworks */}
          <div className="space-y-4 md:space-y-6">
            {/* Languages */}
            <div 
              ref={languagesAnimation.ref}
              className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-700 delay-100 ${
                languagesAnimation.isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                  <Code2 className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">Languages</h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {programmingLanguages.map((lang, index) => (
                  <span
                    key={lang}
                    className={`px-3 py-2 md:px-4 md:py-2.5 bg-secondary/80 hover:bg-primary hover:text-primary-foreground rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-300 cursor-default hover:scale-105 ${
                      languagesAnimation.isVisible 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div 
              ref={frameworksAnimation.ref}
              className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-700 delay-200 ${
                frameworksAnimation.isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                  <Wrench className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">Frameworks & Tools</h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {frameworks.map((framework, index) => (
                  <span
                    key={framework}
                    className={`px-3 py-2 md:px-4 md:py-2.5 bg-primary/10 text-primary rounded-lg md:rounded-xl text-xs md:text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 ${
                      frameworksAnimation.isVisible 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Work Skills */}
        <div className="max-w-4xl mx-auto mt-6 md:mt-8">
          <div 
            ref={coreAnimation.ref}
            className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-700 ${
              coreAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">Core Work Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-2.5 md:gap-3 p-3 md:p-4 bg-secondary/50 hover:bg-primary/10 rounded-xl md:rounded-2xl transition-all duration-300 cursor-default group hover:scale-105 ${
                    coreAnimation.isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <span className="text-xs md:text-sm font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;