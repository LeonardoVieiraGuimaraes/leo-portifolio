import { HiArrowsRightLeft, HiCircleStack, HiCloudArrowUp, HiCodeBracketSquare } from "react-icons/hi2";

const services = [
  {
    title: "Backend & APIs",
    description: "Serviços bem estruturados com Python, Django, FastAPI, Java, Spring Boot e Node.js.",
    icon: HiCodeBracketSquare,
  },
  {
    title: "Integrações & Dados",
    description: "Modelagem SQL, autenticação, serviços externos e automação de processos críticos.",
    icon: HiArrowsRightLeft,
  },
  {
    title: "Web & Mobile",
    description: "Produtos completos com React, TypeScript e React Native, do fluxo à publicação.",
    icon: HiCircleStack,
  },
  {
    title: "Cloud & DevOps",
    description: "Ambientes Docker, Linux, Nginx, CI/CD, monitoramento e operação em produção.",
    icon: HiCloudArrowUp,
  },
];

export default function Services() {
  return (
    <section className="border-y border-white/[0.06] bg-slate-950/30 py-24 [.light_&]:border-slate-200 [.light_&]:bg-slate-100/60" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="eyebrow">Competências principais</p>
            <h2 className="section-title">Do requisito à operação.</h2>
          </div>
          <p className="section-copy lg:max-w-xl lg:justify-self-end">
            Visão de ponta a ponta para transformar necessidades de negócio em aplicações publicadas, observáveis e simples de manter.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="card rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-400/10 text-sky-300 [.light_&]:bg-sky-100 [.light_&]:text-sky-700">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold text-slate-600 [.light_&]:text-slate-400">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-lg font-semibold text-white [.light_&]:text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
