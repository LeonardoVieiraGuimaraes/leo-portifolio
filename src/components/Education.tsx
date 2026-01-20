import { useTheme } from "../context/ThemeContext";

const Education = () => {
  const { theme } = useTheme ? useTheme() : { theme: "dark" };
  const isLight = theme === "light";
  const background = isLight
    ? "linear-gradient(180deg, #f9fafb 0%, #eef2f7 55%, #f9fafb 100%)"
    : "linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)";

  const education = [
    {
      degree: "Pós-graduação Lato Sensu",
      institution: "Centro Universitário Única",
      course: "Big Data e Inteligência de Marketing",
      period: "2025 - 2026",
      description: "Domínio de algoritmos e dados para decisões estratégicas."
    },
    {
      degree: "Pós-graduação Lato Sensu",
      institution: "Centro Universitário Única",
      course: "Ciências de Dados e Inteligência Artificial",
      period: "2025 - 2026",
      description: "Inovação e transformação digital com dados e IA."
    },
    {
      degree: "Pós-graduação Lato Sensu",
      institution: "Pontifícia Universidade Católica do Paraná (PUCPR)",
      course: "Análise de dados para tomada de decisões",
      period: "2024 - 2025",
      description: "Data-driven decision, visualização, SQL, estatística, mineração e machine learning."
    },
    {
      degree: "MBA Executivo em Gestão de Negócios e Marketing",
      institution: "Centro Universitário Única",
      course: "Pós-graduação Lato Sensu",
      period: "2019 - 2021",
      description: "Gestão, marketing, inovação, equipes e comunicação corporativa."
    },
    {
      degree: "Bacharelado",
      institution: "Centro Universitário do Leste de Minas Gerais (UnilesteOficial)",
      course: "Engenharia de Produção",
      period: "2014 - 2020",
      description: "Gestão, processos, estratégia e pessoas."
    },
    {
      degree: "Tecnólogo",
      institution: "UNINTER - Centro Universitário Internacional",
      course: "Processos Gerenciais",
      period: "2012 - 2014",
      description: "Gestão, processos, estratégia e pessoas."
    }
  ];

  return (
    <section
      className="relative text-white pt-20 pb-16"
      id="education"
      style={{ background }}
    >
      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Educação
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Formação Acadêmica
          </h2>
          <p className="text-slate-300">
            Minha formação acadêmica moldou meu conhecimento em análise de dados e gestão.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, idx) => (
            <div key={idx} className="card bg-white/5 dark:bg-gray-800/80 rounded-xl p-4 border border-white/10 flex flex-col h-full">
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-base font-semibold text-white">{edu.course}</span>
                <span className="text-xs text-cyan-200">{edu.period}</span>
              </div>
              <span className="text-sm text-cyan-100 mb-1">{edu.degree} <span className="mx-1">|</span> {edu.institution}</span>
              <p className="text-gray-300 text-sm mt-1 flex-1">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
