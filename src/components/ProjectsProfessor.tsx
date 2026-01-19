import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { getImagePath } from "../utils/paths";

export default function ProjectsProfessor() {
  const projects = [
    {
      title: "Estátitica e Probabilidade",
      description: "Video aulas de Estátitica e Probabilidade",
      image: "/images/projects/professor/aulaEstatisticaProbabilidade.png",
      link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYUFCykmhDHcOhAIv7er7rou",
      tags: ["YouTube", "Estatística"],
      colSpan: "col-span-1",
    },

    {
      title: "Matemática Financeira",
      description: "Video aulas de Matemática Financeira",
      image: "/images/projects/professor/aulaMatematicaFinanceira.png",
      link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYXHvrPFdzPvz2StCvwDVNym",
      tags: ["Finanças", "Educação"],
      colSpan: "col-span-1",
    },
    {
      title: "Projeto Integrador",
      description: "Video aulas Projeto Integrador",
      image: "/images/projects/professor/aulaProjetoIntegrador.png",
      link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYVKOSuhf2p27tRaFlXAFG1T",
      tags: ["Projetos", "Tecnologia"],
      colSpan: "col-span-1",
    },
  ];

  return (
    <section className="relative text-white" id="projectsProfessor">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="relative container mx-auto max-w-6xl px-4 py-16">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Educação
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">Projetos e videoaulas</h2>
          <p className="text-slate-300">
            Conteúdo prático de estatística, finanças e tecnologia para sala de aula e online.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              className={`card group relative overflow-hidden rounded-xl ${project.colSpan}`}
              key={index}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={getImagePath(project.image)}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
              </div>

              <div className="relative space-y-3 p-4">
                <div className="flex flex-wrap gap-2 text-xs text-cyan-200">
                  {(project as { tags?: string[] }).tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="text-sm text-slate-300">{project.description}</p>

                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="button-secondary mt-2 inline-flex items-center gap-2 border border-white/20 hover:border-white/40"
                >
                  <HiArrowTopRightOnSquare className="h-5 w-5" />
                  Ver projeto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
