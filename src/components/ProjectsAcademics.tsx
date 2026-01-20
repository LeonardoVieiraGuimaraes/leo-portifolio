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
      title: "Dissertaçao Graduação Engenharia da Computação",
      description: "Sistema de Identificação de Bovinos Usando RFID",
      image: "/images/projects/academics/dissertacaoEngenhariaComputacao.png",
      link: "https://drive.google.com/file/d/1jj_w4hFihZVSzSOlFSGCwHkuno2t5WGT/view?usp=sharing",
      tags: ["RFID", "Engenharia"],
      colSpan: "col-span-1",
    },
    {
      title: "Dissertação Mestrado",
      description:
        "Monitoramento no processo de desidratação de unvas basedo em imagens",
      image: "/images/projects/academics/dissetacaoMestrado.png",
      link: "https://drive.google.com/file/d/1-l2qG_lpE9hZyoBhIYU7o79xSEl6815P/view",
      tags: ["Processamento de imagens", "Pesquisa"],
      colSpan: "col-span-1",
    },
    {
      title: "Analise das notas do Enade e Enem",
      description:
        "Mineração de dados analisando a Influência das notas obtidas pelos anunos do Enem e Enade",
      image: "/images/projects/academics/doutoradoMineracaoDadosProjeto.png",
      link: "https://drive.google.com/file/d/1MdopkYDRjYKNr92dlhYR50HfK0z3nIFI/view?usp=drive_link",
      tags: ["Mineração de dados", "Educação"],
      colSpan: "col-span-1",
    },
    {
      title: "Ocorrências de Acidentes no Trânsito Brasileiro",
      description:
        "Mineração de ados analisando as ocorrências de acidentes no trânsito brasileiro",
      image:
        "/images/projects/academics/doutoradoMineracaoDadosTrabalhoIII.png",
      link: "https://drive.google.com/file/d/1OXEAMs3jHTyWvv7OtsPg8gESEDdbbtxO/view?usp=drive_link",
      tags: ["Dados públicos", "Segurança"],
      colSpan: "col-span-1",
    },
    {
      title:
        "Improving CNN Based Feature Point Detection Through Matching Information",
      description:
        "Melhorando a detecção de pontos de recursos baseados em CNN por meio de informações correspondentes",
      image: "/images/projects/academics/DoutaradoVisaoComputacional.png",
      link: "https://drive.google.com/file/d/1EAIF3-2NhG-A2O-y7W1S8Q1ASOn2Krfi/view?usp=sharing",
      tags: ["Visão computacional", "CNN"],
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Sistema de Identificação de Bovinos Usando RFID",
      description: "Artigo publicado ISSN 22367160",
      image: "/images/projects/academics/artigoRFIDEngenhariaComputacao.png",
      link: "https://drive.google.com/file/d/1WDsuPN1N3Tw-WZdfPAbRMYgtCF8KncLu/view?usp=sharing",
      tags: ["RFID", "Artigo"],
      colSpan: "col-span-1/2",
    },

    {
      title:
        "A Matemática Financeira Aplicada em Empréstimos e Financiamentos Bancários",
      description: "Artigo publicado ISSN 22367160",
      image:
        "/images/projects/academics/especializacaoMatematicaFinanceira.png",
      link: "https://drive.google.com/file/d/1owo7hjjOpRAFNyyYyA6zktvlsPK-P3Eu/view?usp=sharing",
      tags: ["Finanças", "Artigo"],
      colSpan: "col-span-1",
    },
    {
      title: "Projeto Visão Computacional",
      description: "Projetos Doutrado de Ciência da Computação UFMG",
      image:
        "/images/projects/academics/doutoradoProjetoVisaoComputacional.png",
      link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYWV50N_Y2OzrlRRZy0bjGRY",
      tags: ["Visão computacional", "YouTube"],
      colSpan: "col-span-1",
    },
  ];

  return (
    <section
      className="relative text-white pt-20 pb-16"
      id="projectsAcademics"
      style={{ background }}
    >
      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Pesquisa
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">Projetos acadêmicos</h2>
          <p className="text-slate-300">
            Dissertações, artigos e projetos que conectam ciência, tecnologia e dados.
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
