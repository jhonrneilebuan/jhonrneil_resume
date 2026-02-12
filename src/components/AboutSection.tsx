import { GraduationCap, Code, Smartphone, Zap, Globe } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

const AboutSection = () => {
  const headerAnimation = useScrollAnimation();
  const cardAnimation = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible, getDelay } = useStaggeredAnimation(4);
  const parallax1 = useParallax({ speed: 0.15, direction: "up" });
  const parallax2 = useParallax({ speed: 0.1, direction: "down" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "BSIT Student",
      description: "Major in System Development at PHINMA University of Pangasinan (2022 - Present)",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Developer",
      description: "Specializing in Flutter, React Native, and native Android development",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Web Developer",
      description: "Building modern web apps using ReactJS, MongoDB & NodeJS",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Building complete solutions with React, Node.js, and MongoDB",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden" ref={parallax1.ref}>
      {/* Background decorations with parallax */}
      <div 
        className="absolute top-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[150px] md:blur-[200px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
        style={{ transform: `translate(-50%, calc(-50% + ${parallax1.offset * 0.5}px))` }}
      />
      <div 
        ref={parallax2.ref}
        className="absolute bottom-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-accent/5 rounded-full blur-[120px] md:blur-[150px] translate-x-1/2 translate-y-1/2 transition-transform duration-300 ease-out"
        style={{ transform: `translate(50%, calc(50% + ${parallax2.offset * 0.3}px))` }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-12 md:mb-20 transition-all duration-700 ${
              headerAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-primary/20">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Passionate <span className="text-gradient">Developer</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              Crafting digital experiences with modern technologies
            </p>
          </div>

          {/* Profile Summary Card */}
          <div 
            ref={cardAnimation.ref}
            className={`relative bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 mb-12 md:mb-20 overflow-hidden shadow-card transition-all duration-700 delay-100 hover:border-primary/30 hover:shadow-lg ${
              cardAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-primary opacity-5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-accent/10 blur-3xl rounded-full" />
            
            <div className="flex items-start gap-4 md:gap-5 mb-6 md:mb-8 relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg glow-primary">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Who I Am</h3>
                <p className="text-sm md:text-base text-muted-foreground">A passionate creator of digital solutions</p>
              </div>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed relative z-10">
              I am a BSIT student majoring in System Development at PHINMA University of Pangasinan, 
              specializing in mobile and web development. Passionate about software development and 
              problem-solving, I build efficient, user-friendly applications. Skilled in programming, 
              databases, and modern frameworks, I continuously enhance my expertise to create 
              innovative and scalable solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group relative bg-card/60 backdrop-blur-md border border-border/50 rounded-xl md:rounded-2xl p-5 md:p-6 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  gridVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={getDelay(index)}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;