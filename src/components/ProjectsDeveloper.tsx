import { FaGithub, FaGooglePlay } from "react-icons/fa";
import { HiArrowTopRightOnSquare, HiCheckCircle } from "react-icons/hi2";
import { getImagePath } from "../utils/paths";

type Project = {
  title: string;
  context: string;
  description: string;
  outcome: string;
  image: string;
  link: string;
  tags: string[];
  github?: string;
  store?: string;
};

const projects: Project[] = [
  {
    title: "A&G Enfermagem",
    context: "Produto mobile publicado",
    description:
      "Aplicativo para enfermagem prisional com consulta offline de protocolos, CID-10/CID-11, medicamentos e calculadoras clínicas.",
    outcome: "Disponível oficialmente na Google Play, com landing page e documentação de privacidade.",
    image: "/images/projects/developer/aeg.jpeg",
    link: "https://aeg.leoproti.com.br/",
    store: "https://play.google.com/store/apps/details?id=com.leonardovieiraxy.informacaoEnfermagemreactNative",
    github: "https://github.com/LeonardoVieiraGuimaraes/informacaoEnfermagem-reactNative",
    tags: ["React Native", "Expo", "Android"],
  },
  {
    title: "Plataforma DAE/PIX",
    context: "Sistema corporativo",
    description:
      "Solução web integrada para processos de arrecadação, com frontend, backend, autenticação e banco de dados em arquitetura containerizada.",
    outcome: "Ambientes independentes de produção e homologação, publicados com Docker e automação de deploy.",
    image: "/images/projects/developer/developer08.jpg",
    link: "https://dae.leoproti.com.br/",
    tags: ["Frontend + Backend", "PostgreSQL", "Docker"],
  },
  {
    title: "Gestão de Processos BPMN",
    context: "Transformação digital",
    description:
      "Aplicação corporativa para modelagem e execução de fluxos, com serviços separados, autenticação e persistência relacional.",
    outcome: "Arquitetura de homologação com frontend, backend, PostgreSQL e túnel seguro de publicação.",
    image: "/images/projects/developer/developer06.jpg",
    link: "https://ima-bpmn-homo.leoproti.com.br/",
    tags: ["BPMN", "PostgreSQL", "CI/CD"],
  },
  {
    title: "Hub de Projetos do Doutorado",
    context: "Pesquisa aplicada",
    description:
      "Ambiente full stack para experimentos com autômatos celulares, random walk, lógica fuzzy, FCA e análise de grafos de GTA.",
    outcome: "Frontend e API publicados separadamente, com documentação interativa e execução em containers.",
    image: "/images/projects/academics/doutoradoMineracaoDadosProjeto.png",
    link: "https://projetos-doutorado.leoproti.com.br/",
    github: "https://github.com/LeonardoVieiraGuimaraes/DoutoradoCefet/tree/main/hospedagem/projetos_doutorado",
    tags: ["FastAPI", "Next.js", "Docker"],
  },
  {
    title: "Sistema Hospitalar de Enfermagem",
    context: "Software para saúde",
    description:
      "Sistema web para pacientes e apoio aos fluxos de cirurgia segura e tratamento quimioterápico.",
    outcome: "Aplicação Django publicada com containerização e deploy automatizado no servidor.",
    image: "/images/projects/developer/recepcao.png",
    link: "https://recepcao.leoproti.com.br/",
    github: "https://github.com/LeonardoVieiraGuimaraes/hospital-enfermagem-django",
    tags: ["Python", "Django", "Docker"],
  },
  {
    title: "Sistema SAE Obstétrico",
    context: "Fluxo assistencial",
    description:
      "Aplicação para cadastro de pacientes, admissão obstétrica, acompanhamento de puérperas e fichas de atendimento.",
    outcome: "Backend Django com interface web e publicação contínua em ambiente próprio.",
    image: "/images/projects/developer/projetoEnfermagem01.png",
    link: "https://sae.leoproti.com.br/",
    github: "https://github.com/LeonardoVieiraGuimaraes/sae-enfermagem-django",
    tags: ["Python", "Django", "Saúde"],
  },
];

export default function ProjectsDeveloper() {
  return (
    <section className="relative border-y border-white/5 bg-slate-950/35 py-24 [.light_&]:border-slate-200 [.light_&]:bg-slate-50" id="projectsDeveloper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Projetos selecionados</p>
            <h2 className="section-title">Software que saiu do repositório e chegou à produção.</h2>
            <p className="section-copy">
              Produtos e sistemas que demonstram desenvolvimento backend, integração, domínio de negócio e operação de ambientes reais.
            </p>
          </div>
          <a
            href="https://github.com/LeonardoVieiraGuimaraes?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary inline-flex w-fit items-center gap-2"
          >
            <FaGithub className="h-5 w-5" />
            Explorar GitHub
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card group flex h-full flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative h-44 overflow-hidden border-b border-white/10 [.light_&]:border-slate-200">
                <img
                  src={getImagePath(project.image)}
                  alt={`Imagem do projeto ${project.title}`}
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
                    Ver projeto
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
