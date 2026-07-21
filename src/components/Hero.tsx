import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiArrowDownTray,
  HiArrowRight,
  HiCheckBadge,
  HiOutlineServerStack,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { getImagePath } from "../utils/paths";

const proofPoints = [
  { value: "Software em produção", label: "Saúde, pesquisa e setor público" },
  { value: "Backend ao deploy", label: "APIs, dados, Docker e CI/CD" },
  { value: "Produto publicado", label: "Aplicativo disponível na Play Store" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 [.light_&]:border-slate-200" id="hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(14,165,233,0.13),transparent_30%),radial-gradient(circle_at_88%_8%,rgba(37,99,235,0.12),transparent_28%)]" />
      <div className="absolute inset-0 surface-grid opacity-40" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <div className="min-w-0">
          <div className="mb-6 flex w-full items-start gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300 sm:inline-flex sm:w-auto sm:items-center sm:rounded-full [.light_&]:border-emerald-200 [.light_&]:bg-emerald-50 [.light_&]:text-emerald-700">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400 sm:mt-0" />
            <span>Disponível para oportunidades de desenvolvimento</span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300 [.light_&]:text-sky-700">
            Desenvolvedor Backend · Software Engineer
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl [.light_&]:text-slate-950">
            Transformo regras complexas em sistemas claros, confiáveis e prontos para produção.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 [.light_&]:text-slate-600">
            Desenvolvo APIs, integrações e aplicações com Python, Django, Java, Spring Boot e SQL.
            Minha experiência une engenharia de software, conhecimento de negócio e capacidade de
            entregar do requisito ao monitoramento.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <NavLink to="/projects" className="button inline-flex items-center gap-2">
              Ver projetos
              <HiArrowRight className="h-4 w-4" />
            </NavLink>
            <a
              href={getImagePath("curriculo-leonardo-backend.pdf")}
              className="button-secondary inline-flex items-center gap-2"
              download
            >
              <HiArrowDownTray className="h-4 w-4" />
              Baixar currículo
            </a>
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
            {proofPoints.map((item) => (
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
                    Perfil técnico
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white [.light_&]:text-slate-950">
                    Leonardo Vieira Guimarães
                  </h2>
                  <p className="mt-1 text-sm text-slate-400 [.light_&]:text-slate-500">
                    Belo Horizonte · Remoto Brasil
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
                    <p className="font-semibold text-white [.light_&]:text-slate-950">Stack principal</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
                      Python · Django · Java · Spring Boot · SQL · APIs REST
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 [.light_&]:border-slate-200 [.light_&]:bg-slate-50">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-500">
                    Entrega completa
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-200 [.light_&]:text-slate-700">
                    {["Modelagem de dados", "Integrações", "Docker e Linux", "CI/CD e observabilidade"].map((skill) => (
                      <span key={skill} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-sky-500/15 to-blue-600/10 px-4 py-3">
                  <span className="text-sm font-medium text-slate-200 [.light_&]:text-slate-700">
                    Engenharia da Computação · Mestre · Doutorando
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
