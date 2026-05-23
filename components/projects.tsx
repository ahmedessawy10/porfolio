"use client";

import { useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Layers, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCategory = "all" | "full-stack" | "backend" | "api";

interface Project {
  title: string;
  description: string;
  role: string;
  category: Exclude<ProjectCategory, "all">;
  tech: string[];
  highlights: string[];
  screenshot?: string; // path to screenshot image, e.g. "/screenshots/ajjile.png"
}

const projects: Project[] = [
  {
    title: "Ajjile",
    description:
      "A full-stack HR and payroll management platform. Built the complete backend REST API with Laravel following a Facade-Service architecture, and contributed to the React frontend. Handles employee records, attendance, leaves, payroll cycles, and role-based access control.",
    role: "Full-Stack Developer",
    category: "full-stack",
    tech: ["Laravel", "REST API", "React", "MySQL", "Sanctum", "Spatie Permissions"],
    highlights: ["HR & Payroll", "Role-Based Access", "Full-Stack"],
  },
  {
    title: "Mytip",
    description:
      "Backend API for a tipping and digital gratitude platform. Responsible for the entire server-side: authentication flows, tip transaction logic, wallet management, and webhook integration with payment gateways.",
    role: "Backend Developer",
    category: "backend",
    tech: ["Laravel", "REST API", "MySQL", "Sanctum", "Payment Webhooks"],
    highlights: ["Tip Transactions", "Wallet System", "Payment Integration"],
  },
  {
    title: "Lifecare25",
    description:
      "Backend API for a healthcare appointment and service booking platform. Built patient and provider management, appointment scheduling with conflict detection, notification system, and admin reporting endpoints.",
    role: "Backend Developer",
    category: "api",
    tech: ["Laravel", "REST API", "MySQL", "Sanctum", "Spatie Media Library", "Fractal"],
    highlights: ["Appointment Scheduling", "Healthcare Platform", "Admin Reporting"],
  },
  {
    title: "Eksel",
    description:
      "Backend API for a freelance marketplace connecting clients with skilled workers. Engineered service listings, bidding system, order lifecycle management, escrow-style payment flow, and review system.",
    role: "Backend Developer",
    category: "api",
    tech: ["Laravel", "REST API", "MySQL", "Sanctum", "Query Builder", "Events & Listeners"],
    highlights: ["Freelance Marketplace", "Bidding System", "Order Lifecycle"],
  },
  {
    title: "Crepe",
    description:
      "Full-stack food ordering platform for a crepe restaurant chain. Developed the Laravel backend API for menu management, customizable orders, branch locations, and delivery tracking — plus contributed to the frontend interface.",
    role: "Full-Stack Developer",
    category: "full-stack",
    tech: ["Laravel", "REST API", "MySQL", "Sanctum", "React", "Fractal Transformers"],
    highlights: ["Food Ordering", "Menu Management", "Multi-Branch"],
  },
  {
    title: "Aeon",
    description:
      "End-to-end e-commerce platform built solo — both frontend and backend. Designed and implemented the Laravel REST API (products, cart, orders, auth) and built the React/Next.js storefront with full shopping experience.",
    role: "Full-Stack Developer (Solo)",
    category: "full-stack",
    tech: ["Laravel", "Next.js", "React", "MySQL", "REST API", "Tailwind CSS"],
    highlights: ["Solo Full-Stack", "E-Commerce", "Frontend + Backend"],
  },
];

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "full-stack", label: "Full-Stack" },
  { value: "backend", label: "Backend" },
  { value: "api", label: "API" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="glass rounded-2xl overflow-hidden relative group cursor-pointer card-shadow hover:shadow-[0_25px_70px_rgba(0,0,0,0.7),0_0_40px_rgba(0,212,255,0.2)]"
    >
      {/* Screenshot area */}
      <div className="relative w-full h-48 bg-muted/30 border-b border-border overflow-hidden">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-2 text-muted-foreground/40">
            <ImageIcon className="h-10 w-10" />
            <span className="text-xs">Screenshot coming soon</span>
            {/* Drop your screenshot at: public/screenshots/{project.title.toLowerCase()}.png */}
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-primary text-xs font-medium capitalize border border-primary/20">
            {project.category}
          </span>
        </div>
        {/* Role Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground text-xs font-medium border border-border">
            {project.role}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.highlights.map((highlight, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Tech Stack - Shown on hover */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([mx, my]: number[]) =>
              `radial-gradient(600px circle at ${(mx + 0.5) * 100}% ${(my + 0.5) * 100}%, rgba(0, 212, 255, 0.15), transparent 40%)`
          ),
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Real-world projects I have shipped — from solo full-stack builds to team-based API backends across healthcare, HR, e-commerce, and marketplace domains.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
