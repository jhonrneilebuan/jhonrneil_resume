import { ArrowUp, Facebook, Github, Linkedin, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/jhonrneilebuan", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/jhon-r-neil/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/jhonrneil.calimlim.04", icon: Facebook, label: "Facebook" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certifications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/80 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 py-8 sm:grid-cols-2 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:gap-10 md:py-12">
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#home" className="mb-4 inline-flex items-center gap-3">
              <span className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl bg-primary/10 text-base md:text-lg font-bold text-primary">
                JE
              </span>
              <span className="text-base md:text-lg font-semibold text-foreground">
                Jhon R-Neil Ebuan
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Aspiring Cybersecurity Analyst - Software Developer
            </p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:jhonrneilebuan@gmail.com"
                className="flex w-fit max-w-full items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate">jhonrneilebuan@gmail.com</span>
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>Mangaldan, Pangasinan</span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Navigation
            </h2>
            <nav className="grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Connect
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border/80 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {currentYear} Jhon R-Neil Ebuan. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
