import {
  HiAcademicCap,
  HiCheckCircle,
  HiCircleStack,
  HiCodeBracketSquare,
  HiCommandLine,
  HiLanguage,
  HiServerStack,
} from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

const stackGroups = [
  {
    title: "Backend",
    description: "Tecnologias centrais para APIs, regras de negócio e integrações.",
    icon: HiServerStack,
    skills: ["Python", "Django", "Django Ninja", "FastAPI", "Java", "Spring Boot", "Node.js"],
    en: { description: "Core technologies for APIs, business rules and integrations." },
  },
  {
    title: "Frontend e mobile",
    description: "Interfaces web e aplicativos conectados a serviços reais.",
    icon: HiCodeBracketSquare,
    skills: ["React", "TypeScript", "Next.js", "React Native", "HTML", "CSS", "Tailwind CSS"],
    en: { title: "Frontend and mobile", description: "Web interfaces and apps connected to real services." },
  },
  {
    title: "Dados",
    description: "Persistência, consulta, análise e apoio à tomada de decisão.",
    icon: HiCircleStack,
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Pandas", "Jupyter", "Estatística Aplicada"],
    en: {
      title: "Data",
      description: "Persistence, querying, analysis and decision support.",
      skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Pandas", "Jupyter", "Applied Statistics"],
    },
  },
  {
    title: "DevOps e operação",
    description: "Publicação, automação e manutenção de ambientes confiáveis.",
    icon: HiCommandLine,
    skills: ["Docker", "Linux", "Nginx", "Git", "GitHub Actions", "CI/CD", "Grafana"],
    en: { title: "DevOps and operations", description: "Deployment, automation and maintenance of reliable environments." },
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

const engineeringPracticesEn = [
  "REST APIs",
  "DDD",
  "MVC",
  "Layered architecture",
  "Clean Code",
  "Data modeling",
  "Authentication and authorization",
  "Automated testing",
  "Observability",
  "Technical documentation",
];

const educations = [
  {
    degree: "Doutorado em andamento",
    course: "Modelagem Matemática e Computacional",
    institution: "CEFET-MG",
    period: "2025 — atual",
    description: "Pesquisa em sistemas inteligentes, modelos neuro-fuzzy e detecção de anomalias.",
    en: {
      degree: "Ph.D. in progress",
      course: "Mathematical and Computational Modeling",
      period: "2025 — present",
      description: "Research on intelligent systems, neuro-fuzzy models and anomaly detection.",
    },
  },
  {
    degree: "Disciplinas isoladas de doutorado — aluno especial",
    course: "Ciência da Computação",
    institution: "Universidade Federal de Minas Gerais — UFMG",
    period: "2021 — 2022",
    description: "Disciplinas: Visão Computacional, Visualização de Dados, Mineração de Dados e Finanças Quantitativas e Gerenciamento de Risco. Os créditos obtidos foram posteriormente aproveitados no Doutorado em Modelagem Matemática e Computacional do CEFET-MG.",
    en: {
      degree: "Doctoral courses — non-degree student",
      course: "Computer Science",
      institution: "Federal University of Minas Gerais — UFMG",
      description: "Courses: Computer Vision, Data Visualization, Data Mining, and Quantitative Finance and Risk Management. The credits were later transferred to the Ph.D. in Mathematical and Computational Modeling at CEFET-MG.",
    },
  },
  {
    degree: "Mestrado profissional",
    course: "Modelagem Computacional e Sistemas",
    institution: "UNIMONTES",
    period: "2016 — 2019",
    description: "Processamento de imagens e sistemas inteligentes aplicados à desidratação de uvas.",
    en: {
      degree: "Professional master's degree",
      course: "Computational Modeling and Systems",
      description: "Image processing and intelligent systems applied to grape dehydration.",
    },
  },
  {
    degree: "Bacharelado",
    course: "Engenharia de Computação",
    institution: "FEMC",
    period: "2010 — 2014",
    description: "Projeto de identificação eletrônica de bovinos utilizando RFID.",
    en: {
      degree: "Bachelor's degree",
      course: "Computer Engineering",
      description: "Electronic cattle identification project using RFID.",
    },
  },
  {
    degree: "Especialização",
    course: "Matemática e Estatística",
    institution: "UFLA — Universidade Federal de Lavras",
    period: "2008 — 2009",
    description: "Formação em estatística aplicada, matemática financeira e métodos quantitativos.",
    en: {
      degree: "Postgraduate specialization",
      course: "Mathematics and Statistics",
      institution: "UFLA — Federal University of Lavras",
      description: "Training in applied statistics, financial mathematics and quantitative methods.",
    },
  },
  {
    degree: "Especialização",
    course: "Educação Matemática",
    institution: "FINOM — Faculdade do Norte de Minas",
    period: "2008 — 2009",
    description: "Formação pedagógica voltada ao ensino de matemática, didática e metodologias de ensino.",
    en: {
      degree: "Postgraduate specialization",
      course: "Mathematics Education",
      description: "Teacher training focused on mathematics teaching, didactics and teaching methodologies.",
    },
  },
  {
    degree: "Licenciatura",
    course: "Matemática",
    institution: "UNIMONTES",
    period: "2004 — 2007",
    description: "Base em raciocínio lógico, modelagem e educação.",
    en: {
      degree: "Teaching degree",
      course: "Mathematics",
      description: "Foundation in logical reasoning, modeling and education.",
    },
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

const professionalStrengthsEn = [
  "Leadership and Mentoring",
  "Adaptability",
  "Clear and didactic communication",
  "Problem Solving",
  "Cross-functional collaboration",
  "Organization and continuous learning",
];

interface LanguageItem {
  language: string;
  level: string;
  certification?: string;
  score?: string;
  verificationUrl?: string;
  verificationKey?: string;
  en: Partial<Pick<LanguageItem, "language" | "level" | "certification" | "score">>;
}

const languages: LanguageItem[] = [
  { language: "Português", level: "Nativo", en: { language: "Portuguese", level: "Native" } },
  {
    language: "Inglês",
    level: "Proficiência em Leitura",
    certification: "Exame de Proficiência (UFSC)",
    score: "Nota 8,50 (mínimo 7,0)",
    verificationUrl: "https://www.proficienciadlle.com",
    verificationKey: "5113208805889763695",
    en: {
      language: "English",
      level: "Reading Proficiency",
      certification: "Proficiency Exam (UFSC)",
      score: "Score 8.50 (minimum 7.0)",
    },
  },
  { language: "Espanhol", level: "Básico", en: { language: "Spanish", level: "Basic" } },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="page-section-muted" id="skills">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">{t("Formação e competências", "Education and skills")}</p>
          <h1 className="section-title">
            {t(
              "Stack focada em construir, publicar e evoluir software — da produção à sala de aula.",
              "A stack focused on building, shipping and evolving software — from production to the classroom."
            )}
          </h1>
          <p className="section-copy">
            {t(
              "Em vez de uma lista extensa de ferramentas e porcentagens subjetivas, estas são as tecnologias e práticas que aparecem de forma consistente nos meus projetos de desenvolvimento e na minha atividade acadêmica e de docência.",
              "Instead of a long list of tools and subjective percentages, these are the technologies and practices that consistently show up in my development projects and in my academic and teaching work."
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {stackGroups.map((entry) => t(entry, { ...entry, ...entry.en })).map(({ title, description, skills, icon: Icon }) => (
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
          <p className="eyebrow">{t("Práticas de engenharia", "Engineering practices")}</p>
          <h2 className="text-2xl font-semibold text-white [.light_&]:text-slate-950">
            {t("Decisões que tornam o código mais sustentável.", "Decisions that make code more maintainable.")}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {t(engineeringPractices, engineeringPracticesEn).map((practice) => (
              <div key={practice} className="flex items-center gap-2 rounded-xl border p-3 text-sm subtle-text" style={{ borderColor: "var(--border)" }}>
                <HiCheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                {practice}
              </div>
            ))}
          </div>
        </article>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">{t("Trajetória acadêmica", "Academic background")}</p>
            <h2 className="section-title">{t("Formação conectada à prática.", "Education connected to practice.")}</h2>
            <p className="section-copy">
              {t(
                "Engenharia, matemática e modelagem computacional sustentam minha abordagem analítica para software, dados e pesquisa aplicada.",
                "Engineering, mathematics and computational modeling underpin my analytical approach to software, data and applied research."
              )}
            </p>

            <div className="card mt-8 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <HiLanguage className="h-5 w-5 text-sky-300 [.light_&]:text-sky-700" />
                <h3 className="font-semibold text-white [.light_&]:text-slate-950">{t("Idiomas", "Languages")}</h3>
              </div>
              <div className="mt-4 space-y-3">
                {languages.map((entry) => t(entry, { ...entry, ...entry.en })).map((lang) => (
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
                            {t("Autenticidade:", "Verification:")}{" "}
                            <a
                              href={lang.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sky-400 hover:text-sky-300 hover:underline"
                            >
                              {lang.verificationUrl.replace("https://", "").replace("http://", "")}
                            </a>{" "}
                            ({t("Chave", "Key")}: {lang.verificationKey})
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
            {educations.map((entry) => t(entry, { ...entry, ...entry.en })).map((education, index) => (
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
                    {t("Em andamento", "In progress")}
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">{t("Forma de trabalhar & perfil comportamental", "Ways of working & soft skills")}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t(professionalStrengths, professionalStrengthsEn).map((strength) => (
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
