import { HiArrowUpRight, HiBriefcase, HiCheckCircle } from "react-icons/hi2";

const experiences = [
  {
    role: "Desenvolvedor de Sistemas Web",
    company: "Projetos independentes e soluções aplicadas",
    period: "2023 — atual",
    highlights: [
      "Desenvolvimento e publicação de aplicações com Python, Django, Java, React e SQL.",
      "Integração entre APIs, bancos de dados, autenticação e serviços externos.",
      "Containerização, automação de deploy e acompanhamento dos ambientes em produção.",
    ],
    primary: true,
  },
  {
    role: "Assistente em Gestão de Defesa Agropecuária",
    company: "Instituto Mineiro de Agropecuária · Núcleo de Inovação e Modernização",
    period: "2005 — atual",
    highlights: [
      "Atuação em modernização de processos e soluções digitais para o setor público.",
      "Participação em plataformas corporativas de arrecadação, autenticação e fluxos BPMN.",
    ],
  },
  {
    role: "Professor de Ensino Superior",
    company: "Centro Universitário Newton Paiva",
    period: "2024 — atual",
    highlights: [
      "Docência prática em Banco de Dados e Arquitetura Web, conectando fundamentos e projetos reais.",
    ],
  },
  {
    role: "Professor, tutor e autor em Tecnologia",
    company: "UNIASSELVI · Vitru Brasil Empreendimentos",
    period: "2022 — atual",
    highlights: [
      "Orientação em desenvolvimento de sistemas e autoria de conteúdo de Backend II com Banco de Dados.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-24" id="experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Experiência profissional</p>
            <h2 className="section-title">Tecnologia com contexto, responsabilidade e entrega.</h2>
            <p className="section-copy">
              Uma trajetória que combina desenvolvimento de software, transformação digital no setor público e comunicação técnica.
            </p>
            <a href="/curriculo-leonardo-backend.pdf" download className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200 [.light_&]:text-sky-700">
              Currículo completo
              <HiArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative space-y-4 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-white/10 [.light_&]:before:bg-slate-200">
            {experiences.map((experience) => (
              <article key={`${experience.role}-${experience.company}`} className="card relative rounded-2xl p-6 pl-16">
                <span className={`absolute left-[1.1rem] top-7 grid h-7 w-7 place-items-center rounded-full border ${experience.primary ? "border-sky-400 bg-sky-500 text-white" : "border-white/15 bg-slate-900 text-slate-400 [.light_&]:border-slate-300 [.light_&]:bg-white [.light_&]:text-slate-600"}`}>
                  <HiBriefcase className="h-3.5 w-3.5" />
                </span>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white [.light_&]:text-slate-950">{experience.role}</h3>
                    <p className="mt-1 text-sm text-sky-300 [.light_&]:text-sky-700">{experience.company}</p>
                  </div>
                  <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-400 [.light_&]:border-slate-200 [.light_&]:text-slate-500">
                    {experience.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
                      <HiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
