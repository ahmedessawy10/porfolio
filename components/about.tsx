"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Award, Calendar } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "4+" },
  { label: "Efficiency Boost", value: "40%" },
  { label: "GPA Score", value: "3.34" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Get to know more about my background, education, and what drives me
            as a developer.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Bio Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Professional Bio
            </h3>
            <p className="text-muted-foreground leading-relaxed text-balance">
              Experienced Full-Stack Developer specializing in PHP Laravel, with
              over 1 year of hands-on experience in designing, developing, and
              deploying scalable web applications. Proven expertise in building
              dynamic ERP systems, e-commerce platforms, and reservation systems
              using Laravel, REST APIs, and modern front-end technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 text-balance">
              Skilled in a variety of technologies, including PHP (Laravel),
              WordPress, HTML, CSS, JavaScript, Angular, AWS, Docker, and Git. I
              have a proven track record of reducing manual processing time by
              40% and improving efficiency for enterprise clients.
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 flex flex-col justify-between"
          >
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">Based in</p>
              <p className="text-xl font-semibold text-foreground">
                Cairo, Egypt
              </p>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <GraduationCap className="h-8 w-8 text-primary mb-4" />
            <p className="text-sm text-muted-foreground mb-1">Education</p>
            <p className="text-lg font-semibold text-foreground mb-2">
              Bachelor of Computer Science
            </p>
            <p className="text-sm text-muted-foreground">
              Menofia University, 2018-2022
            </p>
          </motion.div>

          {/* ITI Training Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <Award className="h-8 w-8 text-primary mb-4" />
            <p className="text-sm text-muted-foreground mb-1">Certification</p>
            <p className="text-lg font-semibold text-foreground mb-2">
              Intensive Training Program
            </p>
            <p className="text-sm text-muted-foreground">
              Information Technology Institute (ITI)
            </p>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <Calendar className="h-8 w-8 text-primary mb-4" />
            <p className="text-sm text-muted-foreground mb-3">Languages</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-muted text-sm text-foreground">
                Arabic (Native)
              </span>
              <span className="px-3 py-1 rounded-full bg-muted text-sm text-foreground">
                English (Excellent)
              </span>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
