"use client";

import { useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCategory = "all" | "full-stack" | "backend" | "frontend";

interface Project {
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "all">;
  tech: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "Enterprise ERP System",
    description:
      "Architected a dynamic ERP system with custom form creation, serving 50+ users. Reduced manual processing time by 40% and improved efficiency.",
    category: "full-stack",
    tech: ["Laravel", "MySQL", "Git", "REST API"],
    highlights: ["50+ Users", "40% Efficiency Boost", "Custom Forms"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "Built a complete online retail engine from the ground up with Laravel. Features include product management, cart system, and payment integration.",
    category: "full-stack",
    tech: ["Laravel", "REST API", "HTML5", "Bootstrap"],
    highlights: ["Full CRUD", "Payment Ready", "Scalable"],
  },
  {
    title: "Reservation Engine",
    description:
      "Developed a logic-heavy booking system for photo sessions using Laravel. Includes availability management and automated confirmations.",
    category: "backend",
    tech: ["PHP", "OOP", "MySQL", "Laravel"],
    highlights: ["Booking Logic", "Availability System", "Notifications"],
  },
  {
    title: "Wazzaf Clone",
    description:
      "Recreated a complex job portal interface during ITI intensive training. Features include job listings, filters, and application management.",
    category: "frontend",
    tech: ["JavaScript", "Bootstrap", "CSS", "HTML5"],
    highlights: ["Job Portal", "Advanced Filters", "Responsive UI"],
  },
];

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "full-stack", label: "Full-Stack" },
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
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
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
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
      className="glass rounded-2xl p-6 relative group cursor-pointer card-shadow hover:shadow-[0_25px_70px_rgba(0,0,0,0.7),0_0_40px_rgba(0,212,255,0.2)]"
    >
      {/* Category Badge */}
      <div className="absolute top-4 right-4">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize">
          {project.category}
        </span>
      </div>

      <div className="mb-4">
        <Layers className="h-10 w-10 text-primary mb-4 drop-shadow-[0_0_15px_rgba(0,212,255,0.6)]" />
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

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, rgba(0, 212, 255, 0.15), transparent 40%)`,
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
            A selection of projects that showcase my expertise in building
            scalable web applications and efficient backend systems.
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
