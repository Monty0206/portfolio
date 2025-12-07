import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Cloud, Database } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: [
      { name: "C# / .NET", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "SQL", level: 80 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    skills: [
      { name: ".NET Core / .NET 6+", level: 90 },
      { name: "ASP.NET Core", level: 85 },
      { name: "React", level: 80 },
      { name: "Entity Framework", level: 80 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "Microsoft Azure", level: 85 },
      { name: "Azure AI Services", level: 80 },
      { name: "Docker", level: 70 },
      { name: "CI/CD Pipelines", level: 75 },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "SQL Server", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Redis", level: 65 },
    ],
  },
];

const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill.name}</span>
        <motion.span
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.span
              className="text-primary font-medium text-sm uppercase tracking-widest"
              whileHover={{ letterSpacing: "0.2em" }}
            >
              Skills
            </motion.span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mt-4">
              Technical <span className="text-gradient-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              My technology stack and the tools I use to build scalable, intelligent systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal
              key={category.title}
              delay={categoryIndex * 0.1}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                className="glass-card p-8"
                whileHover={{
                  scale: 1.02,
                  borderColor: "hsl(var(--primary) / 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <category.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-xl">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
