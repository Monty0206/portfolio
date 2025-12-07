import { motion } from "framer-motion";
import { Award, GraduationCap, ExternalLink } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { TiltCard } from "./TiltCard";

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
            <ScrollReveal key={cert.title} delay={index * 0.15}>
              <TiltCard className="h-full">
                <motion.div
                  className="glass-card p-8 group cursor-pointer relative overflow-hidden h-full"
                  whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
                >
                  {/* Animated glow */}
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl ${
                      cert.color === "primary" ? "bg-primary/20" : "bg-accent/20"
                    }`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1.5 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                        cert.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                      }`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <cert.icon
                        className={`w-7 h-7 ${
                          cert.color === "primary" ? "text-primary" : "text-accent"
                        }`}
                      />
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
                      <motion.div
                        className="mt-6 pt-6 border-t border-border/50"
                        initial={{ opacity: 0.5 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-xs text-muted-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                          <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ExternalLink className="w-3 h-3" />
                          </motion.span>
                          Click to view certificate
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
