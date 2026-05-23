"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Core Technologies",
    skills: ["PHP", "Laravel", "Laravel 12.x", "REST API", "Eloquent ORM", "Sanctum", "JWT"],
  },
  {
    name: "Architecture & Patterns",
    skills: ["Clean Architecture", "Facade-Service Pattern", "SOLID", "Design Patterns", "MVC", "OOP", "Agile"],
  },
  {
    name: "Database",
    skills: ["MySQL", "PostgreSQL", "Redis", "Query Optimization", "Database Design", "Spatie Query Builder"],
  },
  {
    name: "Integrations & Tools",
    skills: ["HyperPay", "Unifonic", "ERP Integration", "Spatie Media Library", "Fractal Transformers", "Postman"],
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5"],
  },
  {
    name: "DevOps & Testing",
    skills: ["Docker", "AWS (EC2, S3)", "GitHub Actions", "Linux", "Nginx", "PHPUnit", "Pest", "Git"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A backend-focused stack spanning API development, architecture patterns,
            database engineering, and modern DevOps practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * catIndex }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 card-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(0,212,255,0.15)]"
            >
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(0,212,255,0.25)] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
