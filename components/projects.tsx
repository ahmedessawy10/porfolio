"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { projects as allProjects } from "@/lib/projects-data";

type ProjectCategory = "all" | "full-stack" | "backend";

const techColors: Record<string, string> = {
  Laravel: "bg-red-500/15 text-red-400 border-red-500/20",
  "Laravel 12.x": "bg-red-500/15 text-red-400 border-red-500/20",
  PHP: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
  "PHP 8.2": "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
  MySQL: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "REST API": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  React: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  "React.js": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  "Next.js": "bg-slate-400/15 text-slate-300 border-slate-400/20",
  Sanctum: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  "Laravel Sanctum": "bg-orange-500/15 text-orange-400 border-orange-500/20",
  "Spatie Permissions": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "Spatie Media Library": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  "Fractal Transformers": "bg-teal-500/15 text-teal-400 border-teal-500/20",
  "Spatie Query Builder": "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  "Events & Listeners": "bg-pink-500/15 text-pink-400 border-pink-500/20",
  "Payment Webhooks": "bg-green-500/15 text-green-400 border-green-500/20",
  HyperPay: "bg-green-500/15 text-green-400 border-green-500/20",
  Unifonic: "bg-violet-500/15 text-violet-400 border-violet-500/20",
  "Tailwind CSS": "bg-sky-500/15 text-sky-400 border-sky-500/20",
  "ERP Integration": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  "Real-time Tracking": "bg-rose-500/15 text-rose-400 border-rose-500/20",
  TypeScript: "bg-blue-400/15 text-blue-300 border-blue-400/20",
};

const defaultTechColor = "bg-muted text-muted-foreground border-border";

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "full-stack", label: "Full-Stack" },
  { value: "backend", label: "Backend" },
];

const cardProjects = allProjects.map((p) => ({
  slug: p.slug,
  title: p.title,
  company: p.company,
  year: p.year,
  role: p.role,
  category: p.category,
  summary: p.summary,
  image: p.image,
  tech: p.techGroups.flatMap((g) => g.items).slice(0, 6),
}));

function TechTag({ tech }: { tech: string }) {
  return (
    <span
      className={cn(
        "px-2.5 py-1 rounded-full text-xs font-medium border",
        techColors[tech] ?? defaultTechColor
      )}
    >
      {tech}
    </span>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof cardProjects)[number];
  index: number;
}) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="glass rounded-2xl overflow-hidden card-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(0,212,255,0.15)] transition-shadow duration-300 cursor-pointer group"
    >
      {/* Image area */}
      <div className="relative w-full h-44 bg-muted/30 border-b border-border overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-2 text-muted-foreground/30">
            <ImageIcon className="h-8 w-8" />
            <span className="text-xs">No image yet</span>
          </div>
        )}
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-primary text-sm font-medium mt-0.5">{project.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              {project.role}
            </span>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.summary}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechTag key={t} tech={t} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    activeCategory === "all"
      ? cardProjects
      : cardProjects.filter((p) => p.category === activeCategory);

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
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Real-world systems I have shipped — production APIs, full-stack platforms, and
            backend services across healthcare, HR, fintech, food-tech, and e-commerce.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
