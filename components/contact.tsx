"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Download, Send, Github, Linkedin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "elessawy238@gmail.com",
      href: "mailto:elessawy238@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 1091023782",
      href: "tel:+201091023782",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {`If you would like to discuss a project or just say hi, I'm always
            down to chat.`}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass rounded-2xl p-8 h-full card-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                    >
                      <info.icon className="h-5 w-5 text-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://github.com/ahmedessawy10"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ahmed-mostafa-essawy-1106b31a1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>

              {/* Download CV Button */}
              <motion.a
                href="/AhmedMostafa-CV.pdf"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 pulse-glow shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] transition-all duration-300"
              >
                <Download className="h-4 w-4" />
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 card-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    <>Message Sent!</>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
