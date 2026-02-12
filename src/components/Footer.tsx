import { Heart, ArrowUp, Github, Linkedin, Facebook } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/jhonrneilebuan", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/jhon-r-neil/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/jhonrneil.calimlim.04", icon: Facebook, label: "Facebook" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 md:py-12 border-t border-border bg-secondary/10 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Logo & Copyright */}
          <div className="text-center">
            <span className="text-2xl md:text-3xl font-bold text-gradient block mb-2">JE</span>
            <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-1.5 justify-center">
              © {currentYear} Made with
              <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary fill-primary animate-pulse" />
              by Jhon
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5 md:gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-secondary/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            ))}
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <a href="#about" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#projects" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#skills" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all hover:scale-110"
          >
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
