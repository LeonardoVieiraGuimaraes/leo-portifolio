import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { getImagePath } from "../utils/paths";
import { useTheme } from "../context/ThemeContext";

export default function ProjectsDeveloper() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const background = isLight
    ? "linear-gradient(180deg, #f9fafb 0%, #eef2f7 55%, #f9fafb 100%)"
    : "linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)";

  const projects = [
    {
      title: "Sistema SAE",
      description: "Projeto Mestrado de Enfermagem Atendimento Gestantes",
      image: "/images/projects/developer/projetoEnfermagem01.png",
      link: "https://sae.leoproti.com.br/",
      tags: ["React", "Django", "PostgreSQL"],
      colSpan: "col-span-1",
    },
    // {
    //   title: "Sistema Atendimento ao Paciente",
    //   description: "Projeto Desenvolvido em Dajngo",
    //   image: "/images/projects/developer/projetoEnfermagem02.png",
    //   link: "https://enfermagem.leoproti.com.br/",
    //   colSpan: "col-span-1",
    // },
    // {
    //   title: "Primeiro Portfólio",
    //   description: "Portfólio desenvolvido em HTML, CSS e JavaScript",
    //   image: "/images/projects/developer/portifoliov1.png",
    //   link: "https://portifoliov1.leoproti.com.br/",
    //   colSpan: "col-span-1",
    // },
  ];

  return (
    <section
      className="relative text-white"
      id="projectsDeveloper"
      style={{ background }}
    >
      <div className="relative container mx-auto max-w-6xl px-4 py-16">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Desenvolvimento de sistemas
          </h2>
          <p className="text-slate-300">
            Projetos web e APIs com foco em produto, dados e entrega contínua.
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
