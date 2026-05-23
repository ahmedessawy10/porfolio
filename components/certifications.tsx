"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  logo?: string;
  tags: string[];
}

const certifications: Certification[] = [
  {
    title: "Web Development with PHP",
    issuer: "Information Technology Institute (ITI)",
    date: "Nov 2024 – Feb 2025",
    description:
      "Intensive professional training covering PHP fundamentals, Laravel framework, REST API design, database engineering, and modern backend development practices.",
    tags: ["PHP", "Laravel", "REST API", "MySQL", "Backend"],
  },
  {
    title: "AWS Developer Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Validates expertise in developing and deploying cloud-based applications on AWS, including EC2, S3, Lambda, RDS, and CI/CD pipelines.",
    tags: ["AWS", "EC2", "S3", "Lambda", "Cloud", "DevOps"],
  },
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Professional certifications and training programs that have shaped
            my expertise in backend development and cloud technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 card-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(0,212,255,0.15)] flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_12px_rgba(0,212,255,0.15)]">
                    <Award className="w-5 h-5 text-primary drop-shadow-[0_0_6px_rgba(0,212,255,0.6)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary/80 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    aria-label="View credential"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {cert.date}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all duration-200 cursor-default"
                  >
                    {tag}
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
