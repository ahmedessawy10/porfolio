import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

// Below-the-fold sections are split into separate chunks so the first
// load only ships the JS for what is visible.
const Projects = dynamic(() =>
  import("@/components/projects").then((m) => m.Projects)
);
const Experience = dynamic(() =>
  import("@/components/experience").then((m) => m.Experience)
);
const Skills = dynamic(() =>
  import("@/components/skills").then((m) => m.Skills)
);
const Certifications = dynamic(() =>
  import("@/components/certifications").then((m) => m.Certifications)
);
const Contact = dynamic(() =>
  import("@/components/contact").then((m) => m.Contact)
);
const Footer = dynamic(() =>
  import("@/components/footer").then((m) => m.Footer)
);

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
