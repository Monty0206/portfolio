import { motion } from "framer-motion";
import { MapPin, Calendar, GraduationCap, Target } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { AnimatedCounter } from "./AnimatedCounter";
import { TiltCard } from "./TiltCard";

const stats = [
  { value: 12, suffix: "+", label: "Projects", description: "AI tools, web apps, microservices" },
  { value: 2, suffix: "+", label: "Certifications", description: "Azure AI & C# certified" },
  { value: 5, suffix: "+", label: "Technologies", description: ".NET, React, Azure, Docker" },
  { value: 100, suffix: "%", label: "Commitment", description: "Quality code, on time" },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Pursuing studies at University of Western Cape with a focus on cloud technologies and AI.",
  },
  {
    icon: Target,
    title: "Philosophy",
    description: "Continuous learning, mastering new frameworks, and contributing to open-source projects.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.span
              className="text-primary font-medium text-sm uppercase tracking-widest"
              whileHover={{ letterSpacing: "0.2em" }}
              transition={{ duration: 0.3 }}
            >
              About Me
            </motion.span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mt-4">
              Building the future,<br />
              <span className="text-gradient-primary">one line of code at a time</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar & Info */}
          <ScrollReveal direction="left">
            <TiltCard className="glass-card p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <motion.div
                  className="w-full h-full rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-4xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ boxShadow: "0 0 40px hsl(var(--primary) / 0.4)" }}
                >
                  MB
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-card flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </motion.div>
              </div>

              {/* Name & Info */}
              <h3 className="font-display font-bold text-2xl text-center mb-2">
                Montell Tyrique Boks
              </h3>
              <p className="text-accent font-medium text-center mb-6">Junior Software Developer</p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                >
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>25 years old</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Cape Town, ZA</span>
                </motion.div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1} direction="right">
                <motion.div
                  className="glass-card p-6 group cursor-pointer"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "hsl(var(--primary) / 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-display font-bold text-4xl text-gradient-primary">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <h4 className="font-display font-semibold text-lg mt-2">{stat.label}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.15}>
              <motion.div
                className="glass-card p-8 group"
                whileHover={{
                  scale: 1.02,
                  borderColor: "hsl(var(--primary) / 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                </motion.div>
                <h4 className="font-display font-semibold text-xl mb-2">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
