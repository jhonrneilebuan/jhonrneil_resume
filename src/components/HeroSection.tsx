import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";
import { useMouseParallax } from "@/hooks/useParallax";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const HeroSection = () => {
  const mouseParallax = useMouseParallax(0.015);
  const { displayedText, isComplete } = useTypingAnimation({
    text: "Jhon R-Neil",
    speed: 100,
    delay: 600,
  });

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 md:pt-20 pb-12 relative overflow-hidden">
      {/* Background effects with parallax */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div 
        className="absolute top-20 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-[100px] md:blur-[120px] transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mouseParallax.x * 2}px, ${mouseParallax.y * 2}px)` }}
      />
      <div 
        className="absolute bottom-20 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[120px] md:blur-[150px] transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mouseParallax.x * -1.5}px, ${mouseParallax.y * -1.5}px)` }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse" />
              
              {/* Profile container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/40 glow-primary">
                <img
                  src={profileImage}
                  alt="Jhon R-Neil C. Ebuan"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-primary rounded-full flex items-center gap-2 text-primary-foreground font-semibold text-xs md:text-sm shadow-lg">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                BSIT
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full mb-4 md:mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs md:text-sm font-medium">Available for opportunities</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Hi, I'm{" "}
              <span className="text-gradient block lg:inline">
                {displayedText}
                <span 
                  className={`inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle ${isComplete ? 'animate-pulse' : 'animate-[blink_0.8s_infinite]'}`}
                />
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <span className="text-foreground font-medium">Mobile Developer</span> & System Development Specialist
            </p>
            
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed opacity-0 animate-fade-in px-2 md:px-0" style={{ animationDelay: "0.6s" }}>
              BSIT student at PHINMA University of Pangasinan, passionate about building efficient, user-friendly applications that make a difference.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <a
                href="tel:+639508230467"
                className="flex items-center justify-center gap-2 px-3 py-2 md:px-4 bg-secondary/50 rounded-full text-xs md:text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              >
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                +63 950 823 0467
              </a>
              <a
                href="mailto:jhonebuan@gmail.com"
                className="flex items-center justify-center gap-2 px-3 py-2 md:px-4 bg-secondary/50 rounded-full text-xs md:text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              >
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                jhonebuan@gmail.com
              </a>
              <span className="flex items-center justify-center gap-2 px-3 py-2 md:px-4 bg-secondary/50 rounded-full text-xs md:text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Mangaldan, Pangasinan
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start opacity-0 animate-fade-in px-4 sm:px-0" style={{ animationDelay: "0.8s" }}>
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary px-6 md:px-8 rounded-full text-sm md:text-base">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-sm md:text-base">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;