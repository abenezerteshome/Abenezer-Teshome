import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { ProjectArt } from "@/components/project-art";
import { Reveal } from "@/components/reveal";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Abenezer Teshome`,
      description: project.description,
      images: ["/opengraph-image.svg"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main id="main-content" className="detail-page">
      <section className="detail-hero">
        <div className="container">
          <Link className="back-link" href="/#projects"><ArrowLeft size={15} /> All projects</Link>
          <div className="detail-heading">
            <Reveal>
              <p className="eyebrow">{project.number} / {project.category}</p>
              <h1>{project.title}</h1>
              <p className="detail-lead">{project.description}</p>
              <span className="status-pill"><span />{project.status}</span>
            </Reveal>
          </div>
          <Reveal className="detail-art-wrap">
            <ProjectArt project={project} />
          </Reveal>
        </div>
      </section>
      <section className="section detail-content-section">
        <div className="container detail-content">
          <div>
            <p className="eyebrow">PROJECT OVERVIEW</p>
            <h2>Designed around the work that matters.</h2>
            <p className="detail-context">{project.context}</p>
          </div>
          <div className="detail-info">
            <div className="detail-info-block">
              <span className="card-overline">KEY AREAS</span>
              <ul className="detail-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}><Check size={16} />{highlight}</li>
                ))}
              </ul>
            </div>
            {project.technologies.length > 0 ? (
              <div className="detail-info-block">
                <span className="card-overline">TECHNOLOGIES</span>
                <div className="tag-row detail-tags">
                  {project.technologies.map((technology) => (
                    <span className="tag" key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <section className="detail-next">
        <div className="container detail-next-inner">
          <div>
            <span className="card-overline">NEXT STEP</span>
            <h2>Want to talk through a similar challenge?</h2>
          </div>
          <Link className="button button-primary" href="/#contact">Get in touch <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
