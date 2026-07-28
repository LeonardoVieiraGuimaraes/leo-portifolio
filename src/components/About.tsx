import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiAcademicCap,
  HiArrowUpRight,
  HiBuildingOffice2,
  HiCodeBracket,
} from "react-icons/hi2";
import { getImagePath } from "../utils/paths";

const pillars = [
  {
    title: "Engenharia de software",
    description: "APIs, integrações, bancos de dados e aplicações orientadas a regras de negócio.",
    icon: HiCodeBracket,
  },
  {
    title: "Contexto de negócio",
    description: "Experiência aplicada ao setor público, saúde, agropecuária e transformação digital.",
    icon: HiBuildingOffice2,
  },
  {
    title: "Pesquisa e docência",
    description: "Mestrado, doutorado e docência em TI fortalecem análise, documentação e orientação técnica.",
    icon: HiAcademicCap,
  },
];

export default function About() {
  return (
    <section className="page-section" id="about">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="card relative mx-auto w-full max-w-md overflow-hidden rounded-3xl p-2">
            <div className="relative min-h-[460px] overflow-hidden rounded-[1.25rem]">
              <img
                src={getImagePath("images/fotoSobre.jpg")}
                alt="Leonardo Vieira Guimarães"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-semibold">Leonardo Vieira Guimarães</p>
                <p className="mt-1 text-sm text-slate-200">Belo Horizonte, MG · Disponível para oportunidades</p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Sobre mim</p>
            <h1 className="section-title">
              Construo software com visão técnica, entendimento do domínio e responsabilidade pela entrega.
            </h1>
            <div className="mt-7 space-y-4 text-base leading-7 muted-text">
              <p>
                Sou desenvolvedor full stack, Product Owner (PO) e professor universitário. Uso
                engenharia de software e matemática para transformar produtos digitais, construir
                sistemas robustos e enriquecer experiências de aprendizagem.
              </p>
              <p>
                No Instituto Mineiro de Agropecuária (IMA), atuo como desenvolvedor de sistemas web,
                microsserviços e automações (como a Plataforma DAE/PIX, IMA Auth e PDF Server) e como
                Product Owner (PO) do sistema corporativo Sidagro (GLS/TI).
              </p>
              <p>
                Paralelamente, leciono Banco de Dados e Arquitetura Web no Centro Universitário Newton
                Paiva e tutoro cursos de ADS na UNIASSELVI. Sou doutorando em Modelagem Matemática e
                Computacional no CEFET/MG e mestre pela UNIMONTES.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {pillars.map(({ title, description, icon: Icon }) => (
                <article key={title} className="card rounded-2xl p-5">
                  <Icon className="h-5 w-5 text-sky-300 [.light_&]:text-sky-700" />
                  <h2 className="mt-4 text-sm font-semibold text-white [.light_&]:text-slate-950">
                    {title}
                  </h2>
                  <p className="mt-2 text-xs leading-5 muted-text">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/LeonardoVieiraGuimaraes"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary inline-flex items-center gap-2"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/leonardo-vieira-guimaraes/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary inline-flex items-center gap-2"
              >
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://orcid.org/0009-0000-3118-4664"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link px-2 py-3"
              >
                Produção acadêmica
                <HiArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
