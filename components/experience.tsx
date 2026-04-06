"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "training";
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Full-Stack PHP Laravel Developer",
    company: "Istortech",
    location: "Remote",
    period: "Aug 2024 - Present",
    type: "work",
    description: [
      "Optimized manual workflows, achieving a 40% increase in processing efficiency",
      "Engineered dynamic data management systems for high-user environments",
      "Developed and deployed a dynamic ERP system with custom form creation",
    ],
    skills: ["Laravel", "MySQL", "REST API", "Git"],
  },
  {
    title: "Intensive Training Program",
    company: "Information Technology Institute (ITI)",
    location: "Egypt",
    period: "Oct 2024 - Apr 2025",
    type: "training",
    description: [
      "Comprehensive training in modern web development technologies",
      "Hands-on projects including job portal clone development",
      "Collaborative team projects using Agile methodologies",
    ],
    skills: ["JavaScript", "Angular", "Node.js", "Agile"],
  },
  {
    title: "Full-Stack PHP Laravel Developer",
    company: "Ektml",
    location: "Egypt",
    period: "Jan 2023 - May 2023",
    type: "work",
    description: [
      "Spearheaded the development of a custom-built e-commerce platform",
      "Implemented specialized booking and reservation logic for business clients",
      "Designed scalable database architecture for photo session management",
    ],
    skills: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  },
];

function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: Experience;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* Timeline Line & Node */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="relative z-10 w-5 h-5 rounded-full bg-primary shadow-[0_0_20px_rgba(0,212,255,0.8),0_0_40px_rgba(0,212,255,0.4)]"
        >
          {/* Glow ring */}
          <motion.div
            animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-primary"
          />
          <motion.div
            animate={{ scale: [1.2, 2.5, 1.2], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="absolute inset-0 rounded-full bg-primary"
          />
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
            className="w-px bg-gradient-to-b from-primary to-border flex-1"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="glass rounded-2xl p-6 mb-8 flex-1 card-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block ${
                experience.type === "work"
                  ? "bg-primary/10 text-primary"
                  : "bg-accent/10 text-accent"
              }`}
            >
              {experience.type === "work" ? "Work" : "Training"}
            </span>
            <h3 className="text-xl font-semibold text-foreground">
              {experience.title}
            </h3>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {experience.location}
            </span>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {experience.description.map((item, i) => (
            <li
              key={i}
              className="text-muted-foreground text-sm flex items-start gap-2"
            >
              <span className="text-primary mt-1.5">-</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          {experience.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey in building scalable web applications and
            efficient backend systems.
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              experience={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
