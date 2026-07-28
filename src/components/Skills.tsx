import {
  HiAcademicCap,
  HiCheckCircle,
  HiCircleStack,
  HiCodeBracketSquare,
  HiCommandLine,
  HiLanguage,
  HiServerStack,
} from "react-icons/hi2";

const stackGroups = [
  {
    title: "Backend",
    description: "Tecnologias centrais para APIs, regras de negócio e integrações.",
    icon: HiServerStack,
    skills: ["Python", "Django", "Django Ninja", "FastAPI", "Java", "Spring Boot", "Node.js"],
  },
  {
    title: "Frontend e mobile",
    description: "Interfaces web e aplicativos conectados a serviços reais.",
    icon: HiCodeBracketSquare,
    skills: ["React", "TypeScript", "Next.js", "React Native", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Dados",
    description: "Persistência, consulta, análise e apoio à tomada de decisão.",
    icon: HiCircleStack,
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Pandas", "Jupyter", "Estatística Aplicada"],
  },
  {
    title: "DevOps e operação",
    description: "Publicação, automação e manutenção de ambientes confiáveis.",
    icon: HiCommandLine,
    skills: ["Docker", "Linux", "Nginx", "Git", "GitHub Actions", "CI/CD", "Grafana"],
  },
];

const engineeringPractices = [
  "APIs REST",
  "DDD",
  "MVC",
  "Arquitetura em camadas",
  "Clean Code",
  "Modelagem de dados",
  "Autenticação e autorização",
  "Testes automatizados",
  "Observabilidade",
  "Documentação técnica",
];

const educations = [
  {
    degree: "Doutorado em andamento",
    course: "Modelagem Matemática e Computacional",
    institution: "CEFET-MG",
    period: "2025 — atual",
    description: "Pesquisa em sistemas inteligentes, modelos neuro-fuzzy e detecção de anomalias.",
  },
  {
    degree: "Disciplinas isoladas de doutorado — aluno especial",
    course: "Ciência da Computação",
    institution: "Universidade Federal de Minas Gerais — UFMG",
    period: "2021 — 2022",
    description: "Disciplinas: Visão Computacional, Visualização de Dados, Mineração de Dados e Finanças Quantitativas e Gerenciamento de Risco. Os créditos obtidos foram posteriormente aproveitados no Doutorado em Modelagem Matemática e Computacional do CEFET-MG.",
  },
  {
    degree: "Mestrado profissional",
    course: "Modelagem Computacional e Sistemas",
    institution: "UNIMONTES",
    period: "2016 — 2019",
    description: "Processamento de imagens e sistemas inteligentes aplicados à desidratação de uvas.",
  },
  {
    degree: "Bacharelado",
    course: "Engenharia de Computação",
    institution: "FEMC",
    period: "2010 — 2014",
    description: "Projeto de identificação eletrônica de bovinos utilizando RFID.",
  },
  {
    degree: "Especialização",
    course: "Matemática e Estatística",
    institution: "UFLA — Universidade Federal de Lavras",
    period: "2008 — 2009",
    description: "Formação em estatística aplicada, matemática financeira e métodos quantitativos.",
  },
  {
    degree: "Especialização",
    course: "Educação Matemática",
    institution: "FINOM — Faculdade do Norte de Minas",
    period: "2008 — 2009",
    description: "Formação pedagógica voltada ao ensino de matemática, didática e metodologias de ensino.",
  },
  {
    degree: "Licenciatura",
    course: "Matemática",
    institution: "UNIMONTES",
    period: "2004 — 2007",
    description: "Base em raciocínio lógico, modelagem e educação.",
  },
];

const professionalStrengths = [
  "Liderança e Mentoria",
  "Adaptabilidade",
  "Comunicação clara e didática",
  "Resolução de Problemas",
  "Colaboração multidisciplinar",
  "Organização e aprendizado contínuo",
];

interface LanguageItem {
  language: string;
  level: string;
  certification?: string;
  score?: string;
  verificationUrl?: string;
  verificationKey?: string;
}

const languages: LanguageItem[] = [
  { language: "Português", level: "Nativo" },
  {
    language: "Inglês",
    level: "Proficiência em Leitura",
    certification: "Exame de Proficiência (UFSC)",
    score: "Nota 8,50 (mínimo 7,0)",
    verificationUrl: "https://www.proficienciadlle.com",
    verificationKey: "5113208805889763695",
  },
  { language: "Espanhol", level: "Básico" },
];

export default function Skills() {
  return (
    <section className="page-section-muted" id="skills">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Formação e competências</p>
          <h1 className="section-title">Stack focada em construir, publicar e evoluir software — da produção à sala de aula.</h1>
          <p className="section-copy">
            Em vez de uma lista extensa de ferramentas e porcentagens subjetivas, estas são as
            tecnologias e práticas que aparecem de forma consistente nos meus projetos de desenvolvimento
            e na minha atividade acadêmica e de docência.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {stackGroups.map(({ title, description, skills, icon: Icon }) => (
            <article key={title} className="card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-400/10 text-sky-300 [.light_&]:bg-sky-100 [.light_&]:text-sky-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-white [.light_&]:text-slate-950">{title}</h2>
                  <p className="mt-1 text-sm leading-6 muted-text">{description}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tech-chip">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="card mt-5 rounded-2xl p-6 sm:p-8">
          <p className="eyebrow">Práticas de engenharia</p>
          <h2 className="text-2xl font-semibold text-white [.light_&]:text-slate-950">
            Decisões que tornam o código mais sustentável.
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {engineeringPractices.map((practice) => (
              <div key={practice} className="flex items-center gap-2 rounded-xl border p-3 text-sm subtle-text" style={{ borderColor: "var(--border)" }}>
                <HiCheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                {practice}
              </div>
            ))}
          </div>
        </article>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Trajetória acadêmica</p>
            <h2 className="section-title">Formação conectada à prática.</h2>
            <p className="section-copy">
              Engenharia, matemática e modelagem computacional sustentam minha abordagem analítica
              para software, dados e pesquisa aplicada.
            </p>

            <div className="card mt-8 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <HiLanguage className="h-5 w-5 text-sky-300 [.light_&]:text-sky-700" />
                <h3 className="font-semibold text-white [.light_&]:text-slate-950">Idiomas</h3>
              </div>
              <div className="mt-4 space-y-3">
                {languages.map((lang) => (
                  <div key={lang.language} className="border-t pt-3" style={{ borderColor: "var(--border)" }}>
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium subtle-text">{lang.language}</span>
                      <span className="text-right muted-text font-semibold">{lang.level}</span>
                    </div>
                    {lang.certification && (
                      <div className="mt-2 flex flex-col gap-1 border-l-2 border-sky-500/30 pl-3 text-xs">
                        <p className="font-medium text-slate-200 [.light_&]:text-slate-700">
                          {lang.certification} — {lang.score}
                        </p>
                        {lang.verificationUrl && (
                          <p className="text-[10px] text-slate-400 [.light_&]:text-slate-500">
                            Autenticidade:{" "}
                            <a
                              href={lang.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sky-400 hover:text-sky-300 hover:underline"
                            >
                              {lang.verificationUrl.replace("https://", "").replace("http://", "")}
                            </a>{" "}
                            (Chave: {lang.verificationKey})
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative space-y-4 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-white/10 [.light_&]:before:bg-slate-200">
            {educations.map((education, index) => (
              <article key={`${education.institution}-${education.course}`} className="card relative rounded-2xl p-6 pl-16">
                <span className="absolute left-[1.1rem] top-7 grid h-7 w-7 place-items-center rounded-full border border-sky-400 bg-sky-500 text-white">
                  <HiAcademicCap className="h-3.5 w-3.5" />
                </span>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-300 [.light_&]:text-sky-700">
                      {education.degree}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-white [.light_&]:text-slate-950">
                      {education.course}
                    </h3>
                    <p className="mt-1 text-sm muted-text">{education.institution}</p>
                  </div>
                  <span className="text-xs font-medium muted-text">{education.period}</span>
                </div>
                <p className="mt-3 text-sm leading-6 muted-text">{education.description}</p>
                {index === 0 && (
                  <span className="mt-4 inline-flex rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    Em andamento
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Forma de trabalhar & perfil comportamental</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {professionalStrengths.map((strength) => (
              <div key={strength} className="card rounded-2xl p-5">
                <HiCheckCircle className="h-5 w-5 text-emerald-400" />
                <p className="mt-4 text-sm font-semibold leading-6 text-white [.light_&]:text-slate-900">
                  {strength}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
