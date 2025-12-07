import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, Zap, Ship, Cloud } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { TiltCard } from "./TiltCard";
import { MagneticButton } from "./MagneticButton";

const projects = [
  {
    icon: Bot,
    badge: "AI Powered",
    title: "Intelligent Document Analyzer",
    subtitle: "Azure AI • Full Stack Application",
    description:
      "AI-powered document analysis platform built with Azure Cognitive Services. Performs real-time sentiment analysis, entity recognition, key phrase extraction, and document summarization with 95%+ accuracy.",
    tags: ["JavaScript", "Azure AI", "HTML5/CSS3", "REST APIs"],
    liveUrl: "https://monty0206.github.io/document-analyzer/",
    githubUrl: "https://github.com/Monty0206/document-analyzer",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Zap,
    badge: "Full Stack",
    title: "NexusTasks",
    subtitle: "Real-time Collaboration",
    description:
      "Modern task management application featuring drag-and-drop kanban board, JWT authentication, and real-time updates. React frontend on Vercel, .NET Core backend on Railway with PostgreSQL.",
    tags: ["React", ".NET Core", "PostgreSQL", "JWT Auth", "Tailwind CSS"],
    liveUrl: "https://nexustasks.vercel.app/",
    githubUrl: "https://github.com/Monty0206/nexustasks",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Ship,
    badge: "Business Solution",
    title: "FreightSync",
    subtitle: "SA Logistics Intelligence Platform",
    description:
      "South African logistics intelligence platform addressing port congestion and delays. Real-time shipment tracking, predictive delay detection with 48-hour alerts, automated cost calculations.",
    tags: ["Next.js 14", "TypeScript", "Supabase", "n8n Automation", "Azure"],
    liveUrl: "https://freight-sync.vercel.app/dashboard",
    githubUrl: "https://github.com/Monty0206/FreightSync",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Cloud,
    badge: "Microservices",
    title: "CloudCart Microservices",
    subtitle: "E-Commerce Backend Architecture",
    description:
      "Production-ready microservices e-commerce platform with 5 independent services. Event-driven architecture with RabbitMQ, API Gateway, MongoDB, Redis, Docker, and Kubernetes orchestration.",
    tags: ["ASP.NET Core", "Docker", "Kubernetes", "MongoDB", "RabbitMQ"],
    liveUrl: null,
    githubUrl: "https://github.com/Monty0206/CloudCart-Microservices",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.span
              className="text-primary font-medium text-sm uppercase tracking-widest"
              whileHover={{ letterSpacing: "0.2em" }}
            >
              Projects
            </motion.span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mt-4">
              Featured <span className="text-gradient-primary">Work</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Real applications solving real problems with modern technologies.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <TiltCard className="h-full">
                <motion.article
                  className="glass-card overflow-hidden h-full group relative"
                  whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="p-8 pb-0 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <project.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <motion.span
                          className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.badge}
                        </motion.span>
                      </div>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all"
                            title="Live Demo"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all"
                          title="View Code"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-2xl mb-1">{project.title}</h3>
                    <p className="text-primary text-sm font-medium mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="p-8 pt-6 relative">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: tagIndex * 0.05 }}
                          whileHover={{
                            scale: 1.05,
                            borderColor: "hsl(var(--primary) / 0.5)",
                            color: "hsl(var(--primary))",
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <MagneticButton
              href="https://github.com/Monty0206?tab=repositories"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-border hover:border-primary/50 font-semibold transition-all duration-300 group"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.span>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
