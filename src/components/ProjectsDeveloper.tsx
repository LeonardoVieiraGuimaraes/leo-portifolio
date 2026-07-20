import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub, FaGooglePlay } from "react-icons/fa";
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
      title: "A&G Enfermagem",
      description: "Aplicativo publicado na Play Store para enfermagem prisional, com consulta offline de protocolos, CID-10/CID-11, medicamentos e calculadoras de dosagem e gotejamento.",
      image: "/images/projects/developer/aeg.jpeg",
      link: "https://aeg.leoproti.com.br/",
      store: "https://play.google.com/store/apps/details?id=com.leonardovieiraxy.informacaoEnfermagemreactNative",
      github: "https://github.com/LeonardoVieiraGuimaraes/informacaoEnfermagem-reactNative",
      tags: ["React Native", "Expo", "Play Store"],
      colSpan: "col-span-1",
    },
    {
      title: "Sistema Hospitalar de Enfermagem",
      description: "Sistema web para cadastro de pacientes e apoio a fluxos de cirurgia segura e tratamento quimioterápico, publicado com deploy automatizado no servidor.",
      image: "/images/projects/developer/recepcao.png",
      link: "https://recepcao.leoproti.com.br/",
      github: "https://github.com/LeonardoVieiraGuimaraes/hospital-enfermagem-django",
      tags: ["Python", "Django", "Docker"],
      colSpan: "col-span-1",
    },
    {
      title: "Sistema SAE Obstétrico",
      description: "Aplicação web para cadastro de pacientes, admissão obstétrica, acompanhamento de puérperas e fichas de atendimento de enfermagem.",
      image: "/images/projects/developer/projetoEnfermagem01.png",
      link: "https://sae.leoproti.com.br/",
      github: "https://github.com/LeonardoVieiraGuimaraes/sae-enfermagem-django",
      tags: ["Python", "Django", "Saúde"],
      colSpan: "col-span-1",
    },
    {
      title: "Hub de Projetos do Doutorado",
      description: "Aplicação full stack para experimentos com autômatos celulares, caminhadas aleatórias, lógica fuzzy, FCA e análise de grafos de GTA.",
      image: "/images/projects/academics/doutoradoMineracaoDadosProjeto.png",
      link: "https://projetos-doutorado.leoproti.com.br/",
      github: "https://github.com/LeonardoVieiraGuimaraes/DoutoradoCefet/tree/main/hospedagem/projetos_doutorado",
      tags: ["FastAPI", "Next.js", "Docker"],
      colSpan: "col-span-1",
    },
    {
      title: "API de Produtos com Spring Boot",
      description: "Aplicação Java publicada para cadastro e consulta de produtos, demonstrando API, regras de negócio, persistência e deploy em produção.",
      image: "/images/projects/developer/proweb.png",
      link: "https://proweb.leoproti.com.br/",
      github: "https://github.com/LeonardoVieiraGuimaraes/ProgramacaoWebSpringBoot",
      tags: ["Java", "Spring Boot", "API REST"],
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
            Aplicações publicadas, código acessível e problemas reais resolvidos com tecnologia.
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

                <div className="mt-2 flex flex-wrap gap-2">
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="button-secondary inline-flex items-center gap-2 border border-white/20 hover:border-white/40"
                  >
                    <HiArrowTopRightOnSquare className="h-5 w-5" />
                    Ver projeto
                  </button>
                  {project.store && (
                    <a
                      href={project.store}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-secondary inline-flex items-center gap-2 border border-white/20 hover:border-white/40"
                    >
                      <FaGooglePlay className="h-5 w-5" />
                      Play Store
                    </a>
                  )}
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
