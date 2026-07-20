import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
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
      title: "Sistema SAE para Enfermagem",
      description: "Aplicação web para apoiar o atendimento e a sistematização da assistência de enfermagem, com backend Django e persistência em banco de dados.",
      image: "/images/projects/developer/projetoEnfermagem01.png",
      link: "https://sae.leoproti.com.br/",
      github: "https://github.com/LeonardoVieiraGuimaraes/sae-enfermagem-django",
      tags: ["Python", "Django", "PostgreSQL"],
      colSpan: "col-span-1",
    },
    {
      title: "Aplicativo de Enfermagem",
      description: "Aplicativo móvel desenvolvido em React Native para disponibilizar informações e apoiar profissionais de enfermagem em contexto de saúde.",
      image: "/images/projects/developer/projetoEnfermagem02.png",
      link: "https://github.com/LeonardoVieiraGuimaraes/enfermagemInformacao-reactNative",
      github: "https://github.com/LeonardoVieiraGuimaraes/enfermagemInformacao-reactNative",
      tags: ["React Native", "Mobile", "Saúde"],
      colSpan: "col-span-1",
    },
    {
      title: "Arquitetura de Aplicação Web",
      description: "Projeto de referência para organização de aplicações web, separação de responsabilidades, persistência e boas práticas de desenvolvimento.",
      image: "/images/projects/developer/proweb.png",
      link: "https://github.com/LeonardoVieiraGuimaraes/ArquiteturaAplicacaoWeb",
      github: "https://github.com/LeonardoVieiraGuimaraes/ArquiteturaAplicacaoWeb",
      tags: ["Web", "Arquitetura", "Banco de dados"],
      colSpan: "col-span-1",
    },
    {
      title: "Aplicação Web com Spring Boot",
      description: "Projeto backend em Java e Spring Boot voltado à construção de aplicações web, rotas, regras de negócio e acesso a dados.",
      image: "/images/projects/developer/developer07.jpg",
      link: "https://github.com/LeonardoVieiraGuimaraes/ProgramacaoWebSpringBoot",
      github: "https://github.com/LeonardoVieiraGuimaraes/ProgramacaoWebSpringBoot",
      tags: ["Java", "Spring Boot", "Backend"],
      colSpan: "col-span-1",
    },
  ];

  return (
    <section
      className="relative text-cyan-900 dark:text-cyan-100 pt-20 pb-16"
      id="projectsDeveloper"
      style={{ background }}
    >
      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 dark:text-cyan-200">
            Projetos selecionados
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-700 dark:text-cyan-200">
            Desenvolvimento Backend
          </h2>
          <p className="text-slate-500 dark:text-slate-200">
            Projetos reais com código acessível, contexto de uso e tecnologias verificáveis.
          </p>
          <div className="pt-4">
            <a
              href="https://github.com/LeonardoVieiraGuimaraes?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary border border-white/20 hover:border-white/40 inline-flex items-center gap-2"
            >
              <FaGithub className="h-5 w-5" />
              Ver repositórios no GitHub
            </a>
          </div>
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
                <div className="flex flex-wrap gap-2 text-xs text-cyan-200 dark:text-cyan-200">
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
                <p className="text-sm text-slate-500 dark:text-slate-200">{project.description}</p>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="button-secondary inline-flex items-center gap-2 border border-white/20 hover:border-white/40"
                  >
                    <HiArrowTopRightOnSquare className="h-5 w-5" />
                    Ver projeto
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-secondary inline-flex items-center gap-2 border border-white/20 hover:border-white/40"
                    >
                      <FaGithub className="h-5 w-5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
