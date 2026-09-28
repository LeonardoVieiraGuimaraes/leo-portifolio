
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { theme } = useTheme ? useTheme() : { theme: "dark" };
  const isLight = theme === "light";
  const { t } = useLanguage();
  const background = isLight
    ? "linear-gradient(180deg, #f9fafb 0%, #eef2f7 55%, #f9fafb 100%)"
    : "linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)";

  const bullets = (items: string[]) => (
    <ul className="list-disc ml-5 space-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );

  const experiences = [
    {
      role: t("Professor de Ensino Superior (Prática)", "Higher Education Professor (Practice)"),
      company: "Centro Universitário Newton Paiva",
      period: t("Ago/2024 – Dez/2025", "Aug 2024 – Dec 2025"),
      description: t("Disciplinas de Banco de Dados e Arquitetura Web.", "Courses on Databases and Web Architecture.")
    },
    {
      role: t("Desenvolvedor de Aplicativos Android (Freelancer)", "Android Application Developer (Freelance)"),
      company: t("Projetos Diversos", "Various Projects"),
      period: t("Jan/2024 – Fev/2024", "Jan 2024 – Feb 2024"),
      description: bullets(t(
        [
          "Desenvolveu aplicativo Android para gestão de serviços na área da saúde, desde a concepção até a publicação.",
          "Implementou funcionalidades integradas a banco de dados, priorizando performance, segurança e experiência do usuário.",
          "Realizou testes, validação e documentação, assegurando estabilidade e qualidade técnica do produto final."
        ],
        [
          "Developed an Android application for managing healthcare services, from concept to publication.",
          "Implemented database-integrated features, prioritizing performance, security and user experience.",
          "Performed testing, validation and documentation, ensuring the stability and technical quality of the final product."
        ]
      ))
    },
    {
      role: t("Professor Autor (Backend II com Banco de Dados)", "Author Professor (Backend II with Databases)"),
      company: "Vitru Brasil Empreendimentos",
      period: "2023 – 2024",
      description: t("Docência e autoria de material didático para programação backend.", "Teaching and authoring course material on backend programming.")
    },
    {
      role: t("Desenvolvedor de Sistemas Web (Freelancer)", "Web Systems Developer (Freelance)"),
      company: t("Projetos Diversos", "Various Projects"),
      period: t("Jan/2023 – Dez/2023", "Jan 2023 – Dec 2023"),
      description: bullets(t(
        [
          "Projetou, desenvolveu e implantou sistemas web completos para clientes de diversos segmentos, atuando em todas as etapas do ciclo de vida do software.",
          "Utilizou Python, Java, SQL e arquitetura web moderna para criar soluções escaláveis, seguras e de alta performance.",
          "Realizou integrações robustas entre APIs, sistemas legados e bancos de dados, garantindo automação de processos e integridade das informações.",
          "Automatizou fluxos operacionais, reduzindo atividades manuais e aumentando a produtividade dos clientes.",
          "Aplicou metodologias ágeis, versionamento com Git e boas práticas de engenharia de software, entregando projetos dentro do prazo e alinhados às necessidades do negócio.",
          "Recebeu feedback positivo dos clientes pela qualidade técnica, clareza na comunicação e suporte pós-implantação."
        ],
        [
          "Designed, built and deployed complete web systems for clients across several industries, covering every stage of the software life cycle.",
          "Used Python, Java, SQL and modern web architecture to create scalable, secure, high-performance solutions.",
          "Built robust integrations between APIs, legacy systems and databases, automating processes and ensuring data integrity.",
          "Automated operational workflows, reducing manual work and increasing client productivity.",
          "Applied agile methods, Git version control and software engineering best practices, delivering projects on time and aligned with business needs.",
          "Received positive client feedback for technical quality, clear communication and post-deployment support."
        ]
      ))
    },
    {
      role: t("Professor / Tutor em TI", "Professor / IT Tutor"),
      company: "UNIASSELVI",
      period: t("Fev/2022 – Fev/2025", "Feb 2022 – Feb 2025"),
      description: t(
        "Cursos de Sistemas para Internet, Gestão de Finanças, Matemática, Análise e Desenvolvimento de Sistemas.",
        "Internet Systems, Financial Management, Mathematics, and Systems Analysis and Development programs."
      )
    },
    {
      role: t("Professor de Estatística, Matemática Financeira e Inovação", "Professor of Statistics, Financial Mathematics and Innovation"),
      company: "FADENORTE",
      period: "2019 – 2020",
      description: t(
        "Disciplinas: Estatística, Matemática Financeira, Projeto Integrador II, IV e V, Inovação e Gestão Tecnológica, Gestão Financeira e Produção de Custos.",
        "Courses: Statistics, Financial Mathematics, Capstone Projects II, IV and V, Innovation and Technology Management, Financial Management and Cost Accounting."
      )
    },
    {
      role: t("Professor Mediador Presencial", "On-site Course Mediator"),
      company: "IFNMG",
      period: "2017 – 2019",
      description: t("Mediação presencial em cursos técnicos e superiores.", "On-site mediation in technical and undergraduate programs.")
    },
    {
      role: t("Professor Mediador a Distância", "Distance Learning Mediator"),
      company: "IFNMG",
      period: "2020",
      description: t(
        "Mediação a distância no curso FIC Programador de Dispositivos Móveis (EAD).",
        "Online mediation for the Mobile Device Programmer course (distance learning)."
      )
    },
    {
      role: t("Assistente em Gestão de Defesa Agropecuária", "Agricultural Defense Management Assistant"),
      company: "Instituto Mineiro de Agropecuária (IMA)",
      period: t("Nov/2005 – Atual", "Nov 2005 – Present"),
      description: t(
        "Atuação no Núcleo de Inovação e Modernização (NIM/IMA) com foco em projetos, suporte, gestão e modernização de processos institucionais.",
        "Member of the Innovation and Modernization Unit (NIM/IMA), focused on projects, support, management and modernization of institutional processes."
      )
    },
    {
      role: t("Professor de Matemática", "Mathematics Teacher"),
      company: "Escola Municipal D. Vila Pinto",
      period: "2010",
      description: t("Ensino de Matemática para o ensino fundamental.", "Mathematics for elementary and middle school students.")
    },
    {
      role: t("Técnico de Manutenção Eletrônica", "Electronics Maintenance Technician"),
      company: t("Prefeitura Municipal de São Francisco/MG", "São Francisco City Hall, MG"),
      period: "2005",
      description: t("Manutenção eletrônica em equipamentos municipais.", "Electronic maintenance of municipal equipment.")
    }
  ];

  return (
    <section
      className="relative text-cyan-900 dark:text-cyan-100 pt-20 pb-16"
      id="experience"
      style={{ background }}
    >
      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 dark:text-cyan-200">
            {t("Experiência", "Experience")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-700 dark:text-cyan-200">
            {t("Experiência Profissional", "Professional Experience")}
          </h2>
          <p className="text-slate-500 dark:text-slate-200">
            {t(
              "Histórico de atuação em tecnologia, educação e projetos de transformação digital.",
              "Track record in technology, education and digital transformation projects."
            )}
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="card bg-white/90 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col h-full">
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-base font-semibold text-cyan-900 dark:text-cyan-100">{exp.role}</span>
                <span className="text-xs text-cyan-800 dark:text-cyan-200">{exp.period}</span>
              </div>
              <span className="text-sm text-cyan-800 dark:text-cyan-200 mb-1">{exp.company}</span>
              {typeof exp.description === 'string' ? (
                <p className="text-slate-700 dark:text-slate-200 text-sm mt-1 flex-1">{exp.description}</p>
              ) : (
                <div className="text-slate-700 dark:text-slate-200 text-sm mt-1 flex-1">{exp.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
