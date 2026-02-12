import { Award, ExternalLink } from "lucide-react";
import phinmaIese from "@/assets/certificates/phinma-iese.jpg";
import designThinking from "@/assets/certificates/design-thinking.jpg";
import pythonSololearn from "@/assets/certificates/python-sololearn.png";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: "From Argentina to the World: Overcoming Challenges and Embracing Opportunities",
    issuer: "PHINMA Education & IESE Business School",
    date: "March 2025",
    image: phinmaIese,
  },
  {
    title: "Innovating Research Forums: Applying Design Thinking for Transformative Outcomes",
    issuer: "PHINMA University of Pangasinan",
    date: "December 2024",
    image: designThinking,
  },
  {
    title: "Python for Beginners",
    issuer: "Sololearn",
    date: "November 2022",
    image: pythonSololearn,
  },
];

const CertificatesSection = () => {
  const headerAnimation = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible, getDelay } = useStaggeredAnimation(certificates.length);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            headerAnimation.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and training programs that showcase my commitment to continuous learning
          </p>
        </div>

        {/* Certificates Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className={`group bg-card/50 backdrop-blur-sm border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 ${
                gridVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={getDelay(index)}
            >
              {/* Certificate Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-primary font-medium">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
