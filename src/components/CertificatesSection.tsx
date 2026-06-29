import { Award, Calendar, GraduationCap } from "lucide-react";
import phinmaIese from "@/assets/certificates/phinma-iese.jpg";
import designThinking from "@/assets/certificates/design-thinking.jpg";
import pythonSololearn from "@/assets/certificates/python-sololearn.png";
import ibmCybersecurityFundamentals from "@/assets/certificates/ibm-cybersecurity-fundamentals.jpg";
import courseraSecurityRisks from "@/assets/certificates/coursera-hs5tnzcn0jg8.png";
import courseraNetworkSecurity from "@/assets/certificates/coursera-b43fxq0xeao5.png";
import courseraLinuxSql from "@/assets/certificates/coursera-cntbvleui7ar.png";
import courseraAssetsThreats from "@/assets/certificates/coursera-96klzttjv5gt.png";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  imageClassName?: string;
}

const certificates: Certificate[] = [
  {
    title: "Assets, Threats, and Vulnerabilities",
    issuer: "Google / Coursera",
    date: "June 2026",
    image: courseraAssetsThreats,
    imageClassName: "object-contain p-3 bg-white",
  },
  {
    title: "Tools of the Trade: Linux and SQL",
    issuer: "Google / Coursera",
    date: "June 2026",
    image: courseraLinuxSql,
    imageClassName: "object-contain p-3 bg-white",
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google / Coursera",
    date: "June 2026",
    image: courseraNetworkSecurity,
    imageClassName: "object-contain p-3 bg-white",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google / Coursera",
    date: "June 2026",
    image: courseraSecurityRisks,
    imageClassName: "object-contain p-3 bg-white",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "June 2026",
    image: ibmCybersecurityFundamentals,
    imageClassName: "object-contain p-4 bg-white",
  },
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
    <section id="certificates" className="py-16 md:py-24 relative overflow-hidden">
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
            <Award className="w-4 h-4" />
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and training programs that showcase my commitment to continuous learning
          </p>
        </div>

        {/* Certificates Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className={`group flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_45px_hsl(var(--primary)/0.16)] ${
                gridVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={getDelay(index)}
            >
              {/* Certificate Image */}
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border/70 bg-secondary/40">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className={`h-full w-full ${cert.imageClassName ?? "object-contain p-3 bg-white"} transition-transform duration-500 group-hover:scale-[1.03]`}
                />
              </div>

              {/* Certificate Info */}
              <div className="flex flex-1 flex-col p-4 md:p-5">
                <h3 className="mb-4 text-sm md:text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {cert.title}
                </h3>
                <div className="mt-auto space-y-2 border-t border-border/70 pt-4">
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                    <span className="line-clamp-1">{cert.issuer}</span>
                  </p>
                  <p className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Calendar className="h-4 w-4 shrink-0" />
                    {cert.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
