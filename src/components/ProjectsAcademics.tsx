import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { getImagePath } from "../utils/paths";
import { useTheme } from "../context/ThemeContext";

export default function ProjectsAcademics() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const background = isLight
    ? "linear-gradient(180deg, #f9fafb 0%, #eef2f7 55%, #f9fafb 100%)"
    : "linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)";

  const projects = [
    {
      title: "Pesquisa de Doutorado: Detecção de Fraudes em GTA",
      description:
        "Desenvolvimento de algoritmos neuro-fuzzy evolutivos para detectar anomalias e fraudes em dados agropecuários, com aprendizado incremental e modelos interpretáveis.",
      image: "/images/projects/academics/doutoradoMineracaoDadosProjeto.png",
      link: "https://github.com/LeonardoVieiraGuimaraes/DoutoradoCefet/tree/main/ProjetoDoutorado",
      tags: ["Neuro-fuzzy", "Detecção de fraudes", "Python"],
      colSpan: "col-span-1",
    },
    {
      title: "Aplicativo Validado para Enfermagem Prisional",
      description:
        "Pesquisa publicada sobre o desenvolvimento e a validação de um aplicativo móvel voltado à autonomia e à gestão na enfermagem prisional.",
      image: "/images/projects/developer/aeg.jpeg",
      link: "https://revistas.udea.edu.co/index.php/iee/article/view/364084",
      tags: ["Artigo científico", "Saúde digital", "Mobile"],
      colSpan: "col-span-1",
    },
    {
      title: "Inovação na Enfermagem Prisional",
      description:
        "Artigo de divulgação sobre como a tecnologia pode fortalecer a autonomia profissional e qualificar o cuidado no sistema prisional.",
      image: "/images/projects/developer/projetoEnfermagem02.png",
      link: "https://www.linkedin.com/pulse/inova%C3%A7%C3%A3o-na-enfermagem-prisional-tecnologia-para-e-o-leonardo-ybvvf/",
      tags: ["Divulgação científica", "Tecnologia", "Enfermagem"],
      colSpan: "col-span-1",
    },
    {
      title: "Dissertação de Mestrado em Modelagem Matemática",
      description:
        "Monitoramento do processo de desidratação de uvas baseado em processamento e análise de imagens.",
      image: "/images/projects/academics/dissetacaoMestrado.png",
      link: "https://drive.google.com/file/d/1-l2qG_lpE9hZyoBhIYU7o79xSEl6815P/view",
      tags: ["Processamento de imagens", "Pesquisa", "Modelagem"],
      colSpan: "col-span-1",
    },
    {
      title: "Identificação de Bovinos com RFID",
      description:
        "Trabalho de Engenharia da Computação e artigo publicado sobre identificação eletrônica de bovinos usando RFID.",
      image: "/images/projects/academics/artigoRFIDEngenhariaComputacao.png",
      link: "https://drive.google.com/file/d/1WDsuPN1N3Tw-WZdfPAbRMYgtCF8KncLu/view?usp=sharing",
      tags: ["RFID", "Engenharia", "Artigo"],
      colSpan: "col-span-1",
    },
  ];

  return (
    <section
      className="relative text-white dark:text-cyan-100 pt-20 pb-16"
      id="projectsAcademics"
      style={{ background }}
    >
      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 dark:text-cyan-200">
            Pesquisa
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-700 dark:text-cyan-200">Projetos acadêmicos</h2>
          <p className="text-slate-500 dark:text-slate-200">
            Pesquisa aplicada e publicações que conectam software, dados, saúde e agronegócio.
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
