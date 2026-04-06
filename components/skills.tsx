"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: ["PHP", "Laravel", "Node.js", "REST API", "GraphQL", "WebSockets"],
  },
  {
    name: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Angular", "Bootstrap", "Tailwind CSS"],
  },
  {
    name: "Database",
    skills: ["MySQL", "MongoDB", "ORM", "Query Optimization"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Apache"],
  },
  {
    name: "Practices",
    skills: ["OOP", "MVC", "Design Patterns", "Agile", "PHPUnit", "Security"],
  },
];

const marqueeSkills = [
  "Laravel",
  "PHP",
  "MySQL",
  "REST API",
  "JavaScript",
  "Git",
  "Docker",
  "AWS",
  "Angular",
  "Node.js",
  "Bootstrap",
  "Tailwind",
  "GraphQL",
  "MongoDB",
  "Linux",
  "OOP",
];

function MarqueeRow({ direction = "left", speed = 30 }: { direction?: "left" | "right"; speed?: number }) {
  const skills = [...marqueeSkills, ...marqueeSkills];
  
  return (
    <div className="flex overflow-hidden py-3">
      <motion.div
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-4 pr-4"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-5 py-2.5 rounded-full glass text-sm font-medium text-muted-foreground whitespace-nowrap hover:text-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 cursor-default"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive toolkit spanning backend development, frontend
            technologies, and modern DevOps practices.
          </p>
        </motion.div>

        {/* Marquee Skills Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 -mx-6 md:-mx-12"
        >
          <MarqueeRow direction="left" speed={35} />
          <MarqueeRow direction="right" speed={40} />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-6 card-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(0,212,255,0.15)]"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <motion.span 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,212,255,0.8)]" 
                />
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * catIndex + 0.05 * skillIndex,
                    }}
                    className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
          className="mt-8 glass rounded-2xl p-6 card-shadow"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <motion.span 
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(14,165,233,0.8)]" 
            />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Problem Solving",
              "Critical Thinking",
              "Teamwork",
              "Project Management",
              "Continuous Learning",
              "Adaptability",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
