import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Header } from "@/components/header";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.description } : { title: "Project" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main>
      <Header inner />
      <article className="case-study">
        <div className="container">
          <Link className="back-link" href="/work"><ArrowLeft size={15} /> All work</Link>
          <div className="case-hero">
            <div>
              <span className="eyebrow">{project.category} / Case study</span>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </div>
            <aside>
              <span>ROLE</span><b>{project.role}</b>
              <span>TYPE</span><b>{project.eyebrow}</b>
              {project.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={16} /></a>)}
            </aside>
          </div>

          <ProjectVisual project={project} detail />

          <div className="case-content">
            <section>
              <span className="eyebrow">Overview</span>
              <h2>A complete product experience.</h2>
              <p>{project.longDescription}</p>
            </section>
            <section>
              <span className="eyebrow">What I built</span>
              <div className="feature-list">{project.features.map((feature) => <div key={feature}><Check size={16} />{feature}</div>)}</div>
            </section>
          </div>

          {/* Temporarily hidden until the case-study narrative is finalized.
          {project.details && (
            <section className="case-workings">
              <span className="eyebrow">How it works</span>
              <div className="workings-grid">
                {project.details.map((detail, index) => <article key={detail.title}><span>0{index + 1}</span><h3>{detail.title}</h3><p>{detail.text}</p></article>)}
              </div>
            </section>
          )}
          */}

          {project.architecture && (
            <section className="case-architecture">
              <div><span className="eyebrow">Under the hood</span><h2>Connected across<br />every layer.</h2></div>
              <div>{project.architecture.map((item) => <span key={item}><Check size={15} />{item}</span>)}</div>
            </section>
          )}

          <div className="case-next"><span>Want to see more?</span><Link href="/work">Browse all projects <ArrowUpRight size={18} /></Link></div>
        </div>
      </article>
    </main>
  );
}
