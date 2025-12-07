import { useState } from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, ExternalLink, X } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const certifications = [
  {
    icon: Award,
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "September 2025",
    color: "primary",
    image: "https://calm-dune-0801d2110.1.azurestaticapps.net/images/azure-ai-cert.png",
  },
  {
    icon: Award,
    title: "Foundational C# with Microsoft",
    issuer: "FreeCodeCamp",
    date: "June 2025",
    color: "accent",
    image: "https://calm-dune-0801d2110.1.azurestaticapps.net/images/freecodecamp-cert.png",
  },
  {
    icon: GraduationCap,
    title: "Multi-Platform Software Developer",
    issuer: "University of Western Cape",
    date: "2025 - Present",
    color: "primary",
    image: null,
  },
];

interface CertCardProps {
  cert: typeof certifications[0];
  index: number;
}

const CertCard = ({ cert, index }: CertCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (cert.image) {
      setIsFlipped(!isFlipped);
    }
  };

  const glowClass = cert.color === "primary" ? "bg-primary/20" : "bg-accent/20";
  const iconBgClass = cert.color === "primary" ? "bg-primary/10" : "bg-accent/10";
  const iconColorClass = cert.color === "primary" ? "text-primary" : "text-accent";

  return (
    <ScrollReveal delay={index * 0.15}>
      <div 
        className="relative h-[320px] cursor-pointer"
        onClick={handleFlip}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="w-full h-full relative"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of card */}
          <div 
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden" }}
          >
            <motion.div
              className="glass-card p-8 group relative overflow-hidden h-full flex flex-col"
              whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
            >
              {/* Animated glow */}
              <motion.div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl ${glowClass}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1.5 }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative flex-1 flex flex-col">
                <motion.div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${iconBgClass}`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <cert.icon className={`w-7 h-7 ${iconColorClass}`} />
                </motion.div>

                <h3 className="font-display font-semibold text-lg mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
                <motion.p
                  className="text-primary text-sm font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {cert.date}
                </motion.p>

                {cert.image && (
                  <div className="mt-auto pt-6 border-t border-border/50">
                    <span className="text-xs text-muted-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </motion.span>
                      Tap to view certificate
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Back of card - Certificate Image */}
          {cert.image && (
            <div 
              className="absolute inset-0"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <div className="glass-card p-4 h-full flex flex-col items-center justify-center relative overflow-hidden">
                {/* Close button hint */}
                <div className="absolute top-3 right-3 z-10">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.3)" }}
                  >
                    <X className="w-4 h-4 text-primary" />
                  </motion.div>
                </div>
                
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Tap to flip back
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </ScrollReveal>
  );
};

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.span
              className="text-primary font-medium text-sm uppercase tracking-widest"
              whileHover={{ letterSpacing: "0.2em" }}
            >
              Credentials
            </motion.span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mt-4">
              Certifications & <span className="text-gradient-primary">Education</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Professional certifications and educational achievements.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
