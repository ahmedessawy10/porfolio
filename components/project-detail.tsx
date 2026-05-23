"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, Calendar, Lock, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProjectDetail } from "@/lib/projects-data";
import { ProjectGallery } from "@/components/project-gallery";

const categoryColors: Record<string, string> = {
  "full-stack": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  backend: "bg-red-500/15 text-red-400 border-red-500/20",
  api: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
};

const statusColors: Record<string, string> = {
  Production: "bg-green-500/15 text-green-400 border-green-500/20",
  "In Progress": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  Completed: "bg-blue-500/15 text-blue-400 border-blue-500/20",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
      <span className="w-1 h-6 rounded-full bg-primary shadow-[0_0_12px_rgba(0,212,255,0.6)]" />
      {children}
    </h2>
  );
}

function ModuleCard({ name, features }: { name: string; features: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-xl overflow-hidden border border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-primary/5 transition-colors duration-200"
      >
        <span className="font-medium text-foreground">{name}</span>
        <span className="flex items-center gap-2 text-muted-foreground text-sm">
          <span>{features.length} features</span>
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 border-t border-border">
          <ul className="mt-3 space-y-1.5">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">–</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ChallengeCard({ title, solution, index }: { title: string; solution: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-xl overflow-hidden border border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 px-5 py-4 text-left hover:bg-primary/5 transition-colors duration-200"
      >
        <span className="text-primary font-mono font-bold text-sm mt-0.5 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-medium text-foreground flex-1">{title}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 border-t border-border">
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{solution}</p>
        </div>
      )}
    </div>
  );
}

export function ProjectDetailClient({ project }: { project: ProjectDetail }) {
  return (
    <main className="min-h-screen px-6 py-24 md:py-28">
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={cn("px-3 py-1 rounded-full text-xs font-medium border capitalize", categoryColors[project.category])}>
              {project.category}
            </span>
            <span className={cn("px-3 py-1 rounded-full text-xs font-medium border", statusColors[project.status])}>
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              {project.company}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {project.year}
            </span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              {project.role}
            </span>
          </div>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 md:p-8 mb-8 card-shadow"
        >
          <SectionTitle>About This Project</SectionTitle>
          <p className="text-muted-foreground leading-relaxed">{project.about}</p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass rounded-2xl p-6 md:p-8 mb-8 card-shadow"
        >
          <SectionTitle>Technology Stack</SectionTitle>
          <div className="space-y-5">
            {project.techGroups.map((group) => (
              <div key={group.category}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <SectionTitle>Technical Highlights</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((h) => (
              <div
                key={h.title}
                className="glass rounded-xl p-5 card-shadow hover:shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,212,255,0.1)] transition-shadow duration-300"
              >
                <h3 className="font-semibold text-foreground mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8"
        >
          <SectionTitle>
            Feature Modules ({project.modules.length})
          </SectionTitle>
          <p className="text-sm text-muted-foreground mb-4">
            Click on a module to see its features.
          </p>
          <div className="space-y-2">
            {project.modules.map((mod) => (
              <ModuleCard key={mod.name} name={mod.name} features={mod.features} />
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mb-8"
          >
            <SectionTitle>Gallery ({project.gallery.length})</SectionTitle>
            <p className="text-sm text-muted-foreground mb-4">
              Click any image to view fullscreen. Use arrow keys or buttons to navigate.
            </p>
            <ProjectGallery images={project.gallery} />
          </motion.div>
        )}

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <SectionTitle>Challenges &amp; Solutions</SectionTitle>
          <p className="text-sm text-muted-foreground mb-4">
            Click on a challenge to see how it was solved.
          </p>
          <div className="space-y-2">
            {project.challenges.map((c, i) => (
              <ChallengeCard key={c.title} title={c.title} solution={c.solution} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Code Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="glass rounded-2xl p-6 mb-10 border border-border flex items-start gap-4"
        >
          <Lock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">{project.codePrivacy}</p>
        </motion.div>

        {/* Back bottom */}
        <div className="text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
