import { FaGithub, FaGooglePlay } from "react-icons/fa";
import { HiArrowTopRightOnSquare, HiCheckCircle } from "react-icons/hi2";
import { getImagePath } from "../utils/paths";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsDeveloper() {
  const { t } = useLanguage();

  return (
    <section className="relative border-y border-white/5 bg-slate-950/35 py-24 [.light_&]:border-slate-200 [.light_&]:bg-slate-50" id="projectsDeveloper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">{t("Projetos selecionados", "Selected projects")}</p>
            <h2 className="section-title">{t("Software que saiu do repositório e chegou à produção.", "Software that left the repository and reached production.")}</h2>
            <p className="section-copy">
              {t(
                "Produtos e sistemas que demonstram desenvolvimento backend, integração, domínio de negócio e operação de ambientes reais.",
                "Products and systems that demonstrate backend development, integration, business domain knowledge and real-world operations."
              )}
            </p>
          </div>
          <a
            href="https://github.com/LeonardoVieiraGuimaraes?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary inline-flex w-fit items-center gap-2"
          >
            <FaGithub className="h-5 w-5" />
            {t("Explorar GitHub", "Explore GitHub")}
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((entry) => t(entry, { ...entry, ...entry.en })).map((project) => (
            <article
              key={project.title}
              className="card group flex h-full flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative h-44 overflow-hidden border-b border-white/10 [.light_&]:border-slate-200">
                <img
                  src={getImagePath(project.image)}
                  alt={t(`Imagem do projeto ${project.title}`, `${project.title} project image`)}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-sky-200 backdrop-blur">
                  {project.context}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-chip">{tag}</span>
                  ))}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white [.light_&]:text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">{project.description}</p>
                <p className="mt-4 flex gap-2 text-sm leading-6 text-slate-300 [.light_&]:text-slate-700">
                  <HiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  {project.outcome}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {t("Ver projeto", "View project")}
                    <HiArrowTopRightOnSquare className="h-4 w-4" />
                  </a>
                  {project.store && (
                    <a href={project.store} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Google Play">
                      <FaGooglePlay className="h-4 w-4" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                      <FaGithub className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
