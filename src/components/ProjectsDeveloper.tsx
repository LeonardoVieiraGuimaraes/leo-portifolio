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
      title: "Portfólio Online",
      description: "Portfólio publicado no GitHub Pages com projetos e informações profissionais.",
      image: "/images/projects/developer/portifolioV3.png",
      link: "https://leonardovieiraguimaraes.github.io/leo-portifolio/",
      github: "https://github.com/LeonardoVieiraGuimaraes/leo-portifolio",
      tags: ["Web", "Portfólio", "GitHub Pages"],
      colSpan: "col-span-1",
    },
    {
      title: "Sistema SAE",
      description: "Projeto Mestrado de Enfermagem Atendimento Gestantes",
      image: "/images/projects/developer/projetoEnfermagem01.png",
      link: "https://sae.leoproti.com.br/",
      github: "https://github.com/LeonardoVieiraGuimaraes/sae-enfermagem-django",
      tags: ["React", "Django", "PostgreSQL"],
      colSpan: "col-span-1",
    },
    {
      title: "AEG",
      description: "Sistema de Gestão Acadêmica (redireciona para arquivo)",
      image: "/images/projects/developer/aeg.jpeg",
      link: "http://aeg.leoproti.com.br",
      github: null,
      tags: ["Web", "Acadêmico"],
      colSpan: "col-span-1",
    },
    {
      title: "CasaOS",
      description: "Gerenciamento de dispositivos domésticos",
      image: "/images/projects/developer/casaos.png",
      link: "http://casaos.leoproti.com.br",
      github: null,
      tags: ["Web", "IoT"],
      colSpan: "col-span-1",
    },
    {
      title: "Nextcloud",
      description: "Armazenamento e colaboração em nuvem",
      image: "/images/projects/developer/nextcloud.png",
      link: "https://nextcloud.leoproti.com.br",
      github: null,
      tags: ["Web", "Cloud"],
      colSpan: "col-span-1",
    },
    {
      title: "Recepção",
      description: "Sistema de recepção de visitantes",
      image: "/images/projects/developer/recepcao.png",
      link: "http://recepcao.leoproti.com.br",
      github: null,
      tags: ["Web", "Administração"],
      colSpan: "col-span-1",
    },
    {
      title: "Grafana",
      description: "Monitoramento e visualização de dados",
      image: "/images/projects/developer/developer03.jpg",
      link: "http://grafana.leoproti.com.br",
      github: null,
      tags: ["Web", "Monitoramento"],
      colSpan: "col-span-1",
    },
    {
      title: "Prometheus",
      description: "Coleta e consulta de métricas",
      image: "/images/projects/developer/developer04.jpg",
      link: "http://prometheus.leoproti.com.br",
      github: null,
      tags: ["Web", "Monitoramento"],
      colSpan: "col-span-1",
    },
    {
      title: "ArqWeb V01",
      description: "Sistema de arquivos web versão 1",
      image: "/images/projects/developer/developer05.jpg",
      link: "http://arqwebv01.leoproti.com.br",
      github: "https://github.com/LeonardoVieiraGuimaraes/ArquiteturaAplicacaoWeb",
      tags: ["Web", "Arquivos"],
      colSpan: "col-span-1",
    },
    {
      title: "ProWeb",
      description: "Sistema profissional web",
      image: "/images/projects/developer/developer06.jpg",
      link: "http://proweb.leoproti.com.br",
      github: "https://github.com/LeonardoVieiraGuimaraes/ProdutosWeb",
      tags: ["Web", "Profissional"],
      colSpan: "col-span-1",
    },
  ];

  return (
    <section
      className="relative text-white pt-20 pb-16"
      id="projectsDeveloper"
      style={{ background }}
    >
      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Sistemas web
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Desenvolvimento de sistemas
          </h2>
          <p className="text-slate-300">
            Projetos web e APIs com foco em produto, dados e entrega contínua.
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
