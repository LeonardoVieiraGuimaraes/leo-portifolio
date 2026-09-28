import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiArrowDownTray,
  HiArrowRight,
  HiCheckBadge,
  HiOutlineServerStack,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { getImagePath } from "../utils/paths";
import { useLanguage } from "../context/LanguageContext";

const proofPoints = [
  {
    value: "Desenvolvedor Full Stack",
    label: "APIs RESTful, microsserviços e front-end",
    en: { value: "Full Stack Developer", label: "RESTful APIs, microservices and front-end" },
  },
  {
    value: "Product Owner (PO)",
    label: "Gestão do Sidagro e regras de negócio",
    en: { label: "Sidagro management and business rules" },
  },
  {
    value: "Arquitetura ao Deploy",
    label: "Node.js, Python, Java, Docker e SQL",
    en: { value: "Architecture to Deploy", label: "Node.js, Python, Java, Docker and SQL" },
  },
  {
    value: "Docência & Pesquisa",
    label: "Professor de TI, mestre e doutorando CEFET/MG",
    en: { value: "Teaching & Research", label: "IT professor, M.Sc. and Ph.D. candidate at CEFET/MG" },
  },
];

const deliverySkills = ["Modelagem de dados", "Integrações", "Docker e Linux", "CI/CD e observabilidade", "Docência em TI", "Gestão de Produto (PO)"];
const deliverySkillsEn = ["Data modeling", "Integrations", "Docker and Linux", "CI/CD and observability", "IT teaching", "Product management (PO)"];

const resumePt = "curriculo-leonardo-fullstack.pdf";
const resumeEn = "curriculo-leonardo-fullstack-en.pdf";

export default function Hero() {
  const { t } = useLanguage();

  // O currículo do idioma atual vem primeiro; o outro fica como opção ao lado
  const resumes = t(
    [
      { file: resumePt, label: "Baixar currículo" },
      { file: resumeEn, label: "Currículo em inglês" },
    ],
    [
      { file: resumeEn, label: "Download resume" },
      { file: resumePt, label: "Resume in Portuguese" },
    ]
  );

  return (
    <section className="relative overflow-hidden border-b border-white/5 [.light_&]:border-slate-200" id="hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(14,165,233,0.13),transparent_30%),radial-gradient(circle_at_88%_8%,rgba(37,99,235,0.12),transparent_28%)]" />
      <div className="absolute inset-0 surface-grid opacity-40" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <div className="min-w-0">
          <div className="mb-6 flex w-full items-start gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300 sm:inline-flex sm:w-auto sm:items-center sm:rounded-full [.light_&]:border-emerald-200 [.light_&]:bg-emerald-50 [.light_&]:text-emerald-700">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400 sm:mt-0" />
            <span>
              {t(
                "Disponível para vagas CLT/PJ, projetos freelance e parcerias acadêmicas",
                "Open to full-time and contract roles, freelance projects and academic partnerships"
              )}
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300 [.light_&]:text-sky-700">
            {t(
              "Desenvolvedor Full Stack · Product Owner · Professor de TI & Pesquisador",
              "Full Stack Developer · Product Owner · IT Professor & Researcher"
            )}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl [.light_&]:text-slate-950">
            {t(
              "Desenvolvo sistemas distribuídos, APIs robustas e produtos de alto impacto.",
              "I build distributed systems, robust APIs and high-impact products."
            )}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 [.light_&]:text-slate-600">
            {t(
              "Desenvolvedor full stack focado em desenvolvimento web, microsserviços e automações no IMA, atuando também na gestão de suporte técnico e como Product Owner (PO) do sistema Sidagro. Atendo também projetos freelance/PJ desde 2014 e sou professor universitário de TI e doutorando em Modelagem Matemática e Computacional no CEFET/MG, integrando entrega técnica de software, prática de mercado e rigor analítico.",
              "Full stack developer focused on web development, microservices and automation at IMA, the agricultural defense agency of Minas Gerais, where I also manage technical support and serve as Product Owner (PO) of the Sidagro system. I have taken on freelance and contract projects since 2014, and I am a university IT professor and Ph.D. candidate in Mathematical and Computational Modeling at CEFET/MG, bringing together software delivery, industry practice and analytical rigor."
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <NavLink to="/projects" className="button inline-flex items-center gap-2">
              {t("Ver projetos", "View projects")}
              <HiArrowRight className="h-4 w-4" />
            </NavLink>
            {resumes.map((resume) => (
              <a
                key={resume.file}
                href={getImagePath(resume.file)}
                className="button-secondary inline-flex items-center gap-2"
                download
              >
                <HiArrowDownTray className="h-4 w-4" />
                {resume.label}
              </a>
            ))}
            <a
              href="https://github.com/LeonardoVieiraGuimaraes"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-vieira-guimaraes/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-12 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3 [.light_&]:border-slate-200">
            {proofPoints.map((entry) => t(entry, { ...entry, ...entry.en })).map((item) => (
              <div key={item.value}>
                <p className="text-sm font-semibold text-white [.light_&]:text-slate-950">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400 [.light_&]:text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto min-w-0 w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2rem] bg-sky-500/10 blur-3xl" />
          <div className="card relative overflow-hidden rounded-3xl p-2">
            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/85 p-6 [.light_&]:border-slate-200 [.light_&]:bg-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-5 [.light_&]:border-slate-200">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 [.light_&]:text-sky-700">
                    {t("Perfil técnico", "Technical profile")}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white [.light_&]:text-slate-950">
                    Leonardo Vieira Guimarães
                  </h2>
                  <p className="mt-1 text-sm text-slate-400 [.light_&]:text-slate-500">
                    {t("Belo Horizonte · Remoto Brasil", "Belo Horizonte · Remote, Brazil")}
                  </p>
                </div>
                <HiCheckBadge className="h-9 w-9 text-sky-400" />
              </div>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-400/10 text-sky-300 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                    <HiOutlineServerStack className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white [.light_&]:text-slate-950">{t("Stack principal", "Main stack")}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
                       React · TypeScript · Node.js · Python · Django · Java · Spring Boot · SQL
                     </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 [.light_&]:border-slate-200 [.light_&]:bg-slate-50">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-500">
                    {t("Entrega completa", "End-to-end delivery")}
                  </p>
                   <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-200 [.light_&]:text-slate-700">
                     {t(deliverySkills, deliverySkillsEn).map((skill) => (
                       <span key={skill} className="flex items-center gap-2">
                         <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                         {skill}
                       </span>
                     ))}
                   </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-sky-500/15 to-blue-600/10 px-4 py-3">
                  <span className="text-sm font-medium text-slate-200 [.light_&]:text-slate-700">
                     {t("Eng. Computação · Mestre · Doutorando CEFET/MG", "Computer Eng. · M.Sc. · Ph.D. candidate CEFET/MG")}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
