import { Mail, Phone, MapPin, Send, Download, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const headerAnimation = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible, getDelay } = useStaggeredAnimation(3);
  const ctaAnimation = useScrollAnimation();

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+63 950 823 0467",
      href: "tel:+639508230467",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jhonebuan@gmail.com",
      href: "mailto:jhonebuan@gmail.com",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bantayan, Mangaldan, Pangasinan",
      href: null,
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/5 rounded-full blur-[120px] md:blur-[150px] -translate-y-1/2" />
      
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
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div ref={cardsRef} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className={`group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl md:rounded-3xl p-5 md:p-6 text-center hover:border-primary/40 transition-all duration-500 ${
                  cardsVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={getDelay(index)}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1.5 md:mb-2 text-base md:text-lg">{info.label}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group/link"
                    >
                      {info.value}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <p className="text-xs md:text-sm text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div 
            ref={ctaAnimation.ref}
            className={`relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-14 text-center overflow-hidden transition-all duration-700 ${
              ctaAnimation.isVisible 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-95"
            }`}
          >
            {/* Decorative gradients */}
            <div className="absolute top-0 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-[80px] md:blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-accent/10 rounded-full blur-[80px] md:blur-[100px]" />
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                Let's Work <span className="text-gradient">Together!</span>
              </h3>
              <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto">
                I'm currently open to new opportunities and exciting projects. 
                Feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary px-6 md:px-8 rounded-full text-sm md:text-base">
                  <a href="mailto:jhonebuan@gmail.com">
                    <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Send Message
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-sm md:text-base">
                  <a href="/resume/CV_EBUAN_JHON_R-NEIL_C.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;