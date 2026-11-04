import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectArt } from "@/components/project-art";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        className="project-art-link"
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} project`}
        tabIndex={-1}
      >
        <ProjectArt project={project} compact />
      </Link>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span>{project.category}</span>
          <span className="project-number">{project.number}</span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
        <div className="tag-row" aria-label="Technologies and status">
          {project.technologies.slice(0, 3).map((technology) => (
            <span className="tag" key={technology}>{technology}</span>
          ))}
          <span className="tag tag-status">{project.status}</span>
        </div>
        <Link className="text-link project-link" href={`/projects/${project.slug}`}>
          Explore project <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
