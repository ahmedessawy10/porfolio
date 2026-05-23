import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects-data";
import { ProjectDetailClient } from "@/components/project-detail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Ahmed Mostafa`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
