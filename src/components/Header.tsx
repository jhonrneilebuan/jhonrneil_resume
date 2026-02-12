import { Download, Menu, X, Github, Linkedin, Facebook, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const socialLinks = [
  { href: "https://github.com/jhonrneilebuan", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/jhon-r-neil/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/jhonrneil.calimlim.04", icon: Facebook, label: "Facebook" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "projects", "certificates", "skills", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-gradient relative group">
            JE
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm transition-colors duration-300 group ${
                    isActive 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* Social Links & Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-full bg-secondary/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
            </button>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
            <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary rounded-full px-6 ml-2">
              <a href="/resume/CV_EBUAN_JHON_R-NEIL_C.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-2">
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-xl transition-all duration-300"
              >
                {mounted && (theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
                {mounted && (theme === "dark" ? "Light Mode" : "Dark Mode")}
              </button>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 text-sm rounded-xl transition-all duration-300 ${
                      isActive 
                        ? "text-primary bg-primary/10 font-medium" 
                        : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4 px-4">
                <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90 w-full rounded-full">
                  <a href="/resume/CV_EBUAN_JHON_R-NEIL_C.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;