"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const roles = [
  "Full-Stack PHP Developer",
  "Laravel Specialist",
  "Backend Engineer",
  "API Architect",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-[100px] overflow-hidden">
      {/* Background gradient orbs with animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#00d4ff] rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#00ff88] rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0ea5e9] rounded-full blur-[150px]" 
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-mono tracking-wider uppercase mb-4">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text">Ahmed Mostafa</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-12 md:h-14 flex items-center justify-center mb-8"
        >
          <span className="text-xl md:text-2xl text-muted-foreground font-mono">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-balance"
        >
          I specialize in PHP Laravel, creating scalable ERP systems and seamless
          e-commerce experiences. Driven by efficiency, with a proven track record
          of reducing processing times by 40% through custom-built automation tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold pulse-glow shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] transition-all duration-300"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, borderColor: "#00d4ff" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-full border-2 border-border text-foreground font-semibold hover:border-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
          >
            View Projects
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <motion.a
            href="https://github.com/ahmedessawy10"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border-2 border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ahmed-mostafa-essawy-1106b31a1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border-2 border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="mailto:elessawy238@gmail.com"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border-2 border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
