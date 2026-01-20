
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { theme } = useTheme ? useTheme() : { theme: "dark" };
  const isLight = theme === "light";
  const background = isLight
    ? "linear-gradient(180deg, #f9fafb 0%, #eef2f7 55%, #f9fafb 100%)"
    : "linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)";

  const experiences = [
    {
      role: "Assistente em Gestão de Defesa Agropecuária",
      company: "Instituto Mineiro de Agropecuária (IMA)",
      period: "Nov/2005 – Atual",
      description: "Atuação no Núcleo de Inovação e Modernização (NIM/IMA) com foco em projetos, suporte, gestão e modernização de processos institucionais."
    },
    {
      role: "Professor de Ensino Superior (Prática)",
      company: "Centro Universitário Newton Paiva",
      period: "2024 – Atual",
      description: "Disciplinas de Banco de Dados e Arquitetura Web."
    },
    {
      role: "Professor Autor (Backend II com Banco de Dados)",
      company: "Vitru Brasil Empreendimentos",
      period: "2023 – 2024",
      description: "Docência e autoria de material didático para programação backend."
    },
    {
      role: "Professor / Tutor em TI",
      company: "UNIASSELVI",
      period: "2022 – Atual",
      description: "Cursos de Sistemas para Internet, Gestão de Finanças, Matemática, Análise e Desenvolvimento de Sistemas."
    },
    {
      role: "Professor de Estatística, Matemática Financeira e Inovação",
      company: "FADENORTE",
      period: "2019 – 2020",
      description: "Disciplinas: Estatística, Matemática Financeira, Projeto Integrador II, IV e V, Inovação e Gestão Tecnológica, Gestão Financeira e Produção de Custos."
    },
    {
      role: "Professor Mediador Presencial",
      company: "IFNMG",
      period: "2017 – 2019",
      description: "Mediação presencial em cursos técnicos e superiores."
    },
    {
      role: "Professor Mediador a Distância",
      company: "IFNMG",
      period: "2020",
      description: "Mediação a distância no curso FIC Programador de Dispositivos Móveis (EAD)."
    },
    {
      role: "Professor de Matemática",
      company: "Escola Municipal D. Vila Pinto",
      period: "2010",
      description: "Ensino de Matemática para o ensino fundamental."
    },
    {
      role: "Técnico de Manutenção Eletrônica",
      company: "Prefeitura Municipal de São Francisco/MG",
      period: "2005",
      description: "Manutenção eletrônica em equipamentos municipais."
    }
  ];

  return (
    <section
      className="relative text-white pt-20 pb-16"
      id="experience"
      style={{ background }}
    >
      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Experiência
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Experiência Profissional
          </h2>
          <p className="text-slate-300">
            Histórico de atuação em tecnologia, educação e projetos de transformação digital.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="card bg-white/5 dark:bg-gray-800/80 rounded-xl p-4 border border-white/10 flex flex-col h-full">
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-base font-semibold text-white">{exp.role}</span>
                <span className="text-xs text-cyan-200">{exp.period}</span>
              </div>
              <span className="text-sm text-cyan-100 mb-1">{exp.company}</span>
              <p className="text-gray-300 text-sm mt-1 flex-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
