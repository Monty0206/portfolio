import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, Send, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { ScrollReveal } from "./ScrollReveal";
import { MagneticButton } from "./MagneticButton";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "montellboks@gmail.com",
    href: "mailto:montellboks@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cape Town, South Africa",
    href: null,
  },
  {
    icon: Briefcase,
    label: "Status",
    value: "Available for opportunities",
    href: null,
  },
];

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "6c100b3e-ce7e-4e61-8cc2-8bdea451c0cc",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please email me directly at montellboks@gmail.com",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please email me directly at montellboks@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses = (fieldName: string) =>
    `w-full px-4 py-3 rounded-xl bg-secondary/50 border transition-all duration-300 outline-none text-base ${
      focusedField === fieldName
        ? "border-primary ring-2 ring-primary/20"
        : "border-border hover:border-primary/30"
    }`;

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.span
              className="text-primary font-medium text-xs sm:text-sm uppercase tracking-widest"
              whileHover={{ letterSpacing: "0.2em" }}
            >
              Contact
            </motion.span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mt-4">
              Let's <span className="text-gradient-primary">Work Together</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm sm:text-base">
              I'm always open to discussing new projects and opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.label} delay={index * 0.1} direction="left">
                <motion.div
                  className="glass-card p-4 sm:p-6 group"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "hsl(var(--primary) / 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </motion.div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-muted-foreground text-xs sm:text-sm mb-1">
                        {info.label}
                      </h4>
                      {info.href ? (
                        <motion.a
                          href={info.href}
                          className="font-display font-semibold text-base sm:text-lg hover:text-primary transition-colors break-all"
                          whileHover={{ x: 5 }}
                        >
                          {info.value}
                        </motion.a>
                      ) : (
                        <p className="font-display font-semibold text-base sm:text-lg">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6"
              whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={inputClasses("name")}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={inputClasses("email")}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={inputClasses("subject")}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className={`${inputClasses("message")} resize-none`}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <MagneticButton
                  onClick={() => {}}
                  className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base sm:text-lg hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </MagneticButton>
              </motion.div>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
