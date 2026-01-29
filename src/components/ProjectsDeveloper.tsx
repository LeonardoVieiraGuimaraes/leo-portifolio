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
      title: "Dashboard de Vendas e BI",
      description: "Dashboard interativo em Power BI para análise de vendas, KPIs e acompanhamento de metas. Integração de múltiplas fontes de dados e automação de relatórios.",
      image: "/images/projects/developer/dashboard-vendas-bi.png",
      link: "https://github.com/LeonardoVieiraGuimaraes/dashboard-vendas-bi",
      github: "https://github.com/LeonardoVieiraGuimaraes/dashboard-vendas-bi",
      tags: ["Power BI", "BI", "Automação"],
      colSpan: "col-span-1",
    },
    {
      title: "Predição de Churn com Machine Learning",
      description: "Modelo de machine learning para predição de churn de clientes utilizando Python, Pandas, Scikit-learn e visualização de resultados.",
      image: "/images/projects/developer/churn-ml.png",
      link: "https://github.com/LeonardoVieiraGuimaraes/churn-prediction-ml",
      github: "https://github.com/LeonardoVieiraGuimaraes/churn-prediction-ml",
      tags: ["Python", "Machine Learning", "Churn"],
      colSpan: "col-span-1",
    },
    {
      title: "Automação de Coleta de Dados Públicos",
      description: "Script Python para coleta, limpeza e análise de dados públicos (dados.gov.br), com geração de relatórios automatizados.",
      image: "/images/projects/developer/automacao-dados-publicos.png",
      link: "https://github.com/LeonardoVieiraGuimaraes/automacao-dados-publicos",
      github: "https://github.com/LeonardoVieiraGuimaraes/automacao-dados-publicos",
      tags: ["Python", "ETL", "Dados Públicos"],
      colSpan: "col-span-1",
    },
    {
      title: "Análise Exploratória de Dados de Saúde",
      description: "Projeto de análise exploratória de dados de saúde pública, com visualizações em Matplotlib e Plotly, e insights para tomada de decisão.",
      image: "/images/projects/developer/analise-saude.png",
      link: "https://github.com/LeonardoVieiraGuimaraes/analise-dados-saude",
      github: "https://github.com/LeonardoVieiraGuimaraes/analise-dados-saude",
      tags: ["Python", "Saúde", "Visualização"],
      colSpan: "col-span-1",
    },
    {
      title: "Classificação de Imagens com CNN",
      description: "Rede neural convolucional (CNN) para classificação de imagens, com aplicação em visão computacional e dataset customizado.",
      image: "/images/projects/developer/classificacao-cnn.png",
      link: "https://github.com/LeonardoVieiraGuimaraes/classificacao-cnn",
      github: "https://github.com/LeonardoVieiraGuimaraes/classificacao-cnn",
      tags: ["Python", "CNN", "Visão Computacional"],
      colSpan: "col-span-1",
    },
    {
      title: "Consultoria em BI e Dados",
      description: "Projetos de consultoria em BI, definição de KPIs, implantação de dashboards e treinamento de equipes para cultura data-driven.",
      image: "/images/projects/developer/consultoria-bi.png",
      link: "https://github.com/LeonardoVieiraGuimaraes/consultoria-bi",
      github: "https://github.com/LeonardoVieiraGuimaraes/consultoria-bi",
      tags: ["Consultoria", "BI", "Treinamento"],
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
            Projetos em Dados
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-700 dark:text-cyan-200">
            Ciência de Dados & BI
          </h2>
          <p className="text-slate-500 dark:text-slate-200">
            Projetos de ciência de dados, BI, machine learning, automação e consultoria para negócios orientados a dados.
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
