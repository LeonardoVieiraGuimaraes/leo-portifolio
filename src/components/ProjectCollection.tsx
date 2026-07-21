import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { getImagePath } from "../utils/paths";

export type CollectionProject = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

type ProjectCollectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  projects: CollectionProject[];
  muted?: boolean;
};

export default function ProjectCollection({
  id,
  eyebrow,
  title,
  description,
  projects,
  muted = false,
}: ProjectCollectionProps) {
  return (
    <section className={muted ? "page-section-muted" : "page-section"} id={id}>
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-copy">{description}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card group flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="relative h-48 overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
                <img
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  src={getImagePath(project.image)}
                  alt={`Imagem do projeto ${project.title}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-chip">{tag}</span>
                  ))}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white [.light_&]:text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 muted-text">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link mt-auto pt-6"
                >
                  Ver conteúdo
                  <HiArrowTopRightOnSquare className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
