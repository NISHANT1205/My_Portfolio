import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className={`project-card project-${index % 2 ? "right" : "left"}`}>
      <Link href={`/work/${project.slug}`} className="project-image"><ProjectVisual project={project} /><span className="view-pill">View case study <ArrowUpRight size={15}/></span></Link>
      <div className="project-info"><div className="project-meta"><span>0{index + 1}</span><span>{project.category}</span></div><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><p>{project.description}</p><div className="tag-row">{project.technologies.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div></div>
    </article>
  );
}
