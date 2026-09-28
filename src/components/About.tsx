import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiAcademicCap,
  HiArrowUpRight,
  HiBuildingOffice2,
  HiCodeBracket,
} from "react-icons/hi2";
import { getImagePath } from "../utils/paths";
import { useLanguage } from "../context/LanguageContext";

const pillars = [
  {
    title: "Engenharia de software",
    description: "APIs, integrações, bancos de dados e aplicações orientadas a regras de negócio.",
    icon: HiCodeBracket,
    en: {
      title: "Software engineering",
      description: "APIs, integrations, databases and applications driven by business rules.",
    },
  },
  {
    title: "Contexto de negócio",
    description: "Experiência aplicada ao setor público, saúde, agropecuária e transformação digital.",
    icon: HiBuildingOffice2,
    en: {
      title: "Business context",
      description: "Experience applied to the public sector, healthcare, agriculture and digital transformation.",
    },
  },
  {
    title: "Pesquisa e docência",
    description: "Mestrado, doutorado e docência em TI fortalecem análise, documentação e orientação técnica.",
    icon: HiAcademicCap,
    en: {
      title: "Research and teaching",
      description: "A master's degree, Ph.D. studies and IT teaching strengthen analysis, documentation and technical guidance.",
    },
  },
];

export default function About() {
  const { t } = useLanguage();

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
                <p className="mt-1 text-sm text-slate-200">
                  {t("Belo Horizonte, MG · Aberto a novos desafios e projetos", "Belo Horizonte, MG · Open to new challenges and projects")}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">{t("Sobre mim", "About me")}</p>
            <h1 className="section-title">
              {t(
                "Construo software com visão técnica, entendimento do domínio e responsabilidade pela entrega.",
                "I build software with technical vision, domain understanding and ownership of delivery."
              )}
            </h1>
            <div className="mt-7 space-y-4 text-base leading-7 muted-text">
              <p>
                {t(
                  "Sou desenvolvedor full stack, Product Owner (PO) e professor de TI. Minha atuação profissional é focada no desenvolvimento de aplicações web, arquitetura de APIs RESTful, microsserviços e governança de dados.",
                  "I'm a full stack developer, Product Owner (PO) and IT professor. My professional work focuses on web application development, RESTful API architecture, microservices and data governance."
                )}
              </p>
              <p>
                {t(
                  "No Instituto Mineiro de Agropecuária (IMA), atuo no desenvolvimento de software de microsserviços e soluções corporativas, na gestão de suporte técnico avançado e como Product Owner (PO) do sistema corporativo Sidagro, garantindo alinhamento técnico e regras de negócio de alta complexidade.",
                  "At the Instituto Mineiro de Agropecuária (IMA), the agricultural defense agency of Minas Gerais, I develop microservices and enterprise solutions, manage advanced technical support and serve as Product Owner (PO) of the Sidagro enterprise system, ensuring technical alignment and highly complex business rules."
                )}
              </p>
              <p>
                {t(
                  "Minha trajetória abrange também a docência universitária e tutoria em TI, além da pesquisa científica aplicada como doutorando no CEFET/MG e mestre pela UNIMONTES — experiências que fortalecem minha capacidade analítica, comunicação técnica e clareza na solução de problemas.",
                  "My background also includes university teaching and IT tutoring, as well as applied scientific research as a Ph.D. candidate at CEFET/MG with an M.Sc. from UNIMONTES — experiences that strengthen my analytical skills, technical communication and clarity in problem solving."
                )}
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {pillars.map((entry) => t(entry, { ...entry, ...entry.en })).map(({ title, description, icon: Icon }) => (
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
                {t("Produção acadêmica", "Academic output")}
                <HiArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
