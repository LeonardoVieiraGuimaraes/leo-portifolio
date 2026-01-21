
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { theme } = useTheme ? useTheme() : { theme: "dark" };
  const isLight = theme === "light";
  const background = isLight
    ? "linear-gradient(180deg, #f9fafb 0%, #eef2f7 55%, #f9fafb 100%)"
    : "linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)";

  const experiences = [
    {
      role: "Professor de Ensino Superior (Prática)",
      company: "Centro Universitário Newton Paiva",
      period: "2024 – Atual",
      description: "Disciplinas de Banco de Dados e Arquitetura Web."
    },
    {
      role: "Desenvolvedor de Aplicativos Android (Freelancer)",
      company: "Projetos Diversos",
      period: "Jan/2024 – Fev/2024",
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Desenvolveu aplicativo Android para gestão de serviços na área da saúde, desde a concepção até a publicação.</li>
          <li>Implementou funcionalidades integradas a banco de dados, priorizando performance, segurança e experiência do usuário.</li>
          <li>Realizou testes, validação e documentação, assegurando estabilidade e qualidade técnica do produto final.</li>
        </ul>
      )
    },
    {
      role: "Professor Autor (Backend II com Banco de Dados)",
      company: "Vitru Brasil Empreendimentos",
      period: "2023 – 2024",
      description: "Docência e autoria de material didático para programação backend."
    },
    {
      role: "Desenvolvedor de Sistemas Web (Freelancer)",
      company: "Projetos Diversos",
      period: "Jan/2023 – Dez/2023",
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Projetou, desenvolveu e implantou sistemas web completos para clientes de diversos segmentos, atuando em todas as etapas do ciclo de vida do software.</li>
          <li>Utilizou Python, Java, SQL e arquitetura web moderna para criar soluções escaláveis, seguras e de alta performance.</li>
          <li>Realizou integrações robustas entre APIs, sistemas legados e bancos de dados, garantindo automação de processos e integridade das informações.</li>
          <li>Automatizou fluxos operacionais, reduzindo atividades manuais e aumentando a produtividade dos clientes.</li>
          <li>Aplicou metodologias ágeis, versionamento com Git e boas práticas de engenharia de software, entregando projetos dentro do prazo e alinhados às necessidades do negócio.</li>
          <li>Recebeu feedback positivo dos clientes pela qualidade técnica, clareza na comunicação e suporte pós-implantação.</li>
        </ul>
      )
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
      role: "Assistente em Gestão de Defesa Agropecuária",
      company: "Instituto Mineiro de Agropecuária (IMA)",
      period: "Nov/2005 – Atual",
      description: "Atuação no Núcleo de Inovação e Modernização (NIM/IMA) com foco em projetos, suporte, gestão e modernização de processos institucionais."
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
      className="relative text-cyan-900 dark:text-cyan-100 pt-20 pb-16"
      id="experience"
      style={{ background }}
    >
      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 dark:text-cyan-200">
            Experiência
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-700 dark:text-cyan-200">
            Experiência Profissional
          </h2>
          <p className="text-slate-500 dark:text-slate-200">
            Histórico de atuação em tecnologia, educação e projetos de transformação digital.
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
