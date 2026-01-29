
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { theme } = useTheme ? useTheme() : { theme: "dark" };
  const isLight = theme === "light";
  const background = isLight
    ? "linear-gradient(180deg, #f9fafb 0%, #eef2f7 55%, #f9fafb 100%)"
    : "linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)";

  const experiences = [
    {
      role: "Cientista de Dados / Analista de BI",
      company: "Projetos Diversos (Consultoria e Freelance)",
      period: "2022 – Atual",
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Desenvolvimento de soluções de análise de dados, dashboards interativos e automações para empresas de diferentes setores.</li>
          <li>Implementação de pipelines de dados (ETL), integração de múltiplas fontes e modelagem de dados para BI.</li>
          <li>Construção de modelos de machine learning para predição, classificação e segmentação de clientes.</li>
          <li>Consultoria em projetos de dados: levantamento de requisitos, definição de KPIs, storytelling analítico e apoio à tomada de decisão.</li>
          <li>Resultados: aumento de eficiência operacional, insights estratégicos e suporte a decisões de negócio baseadas em dados.</li>
        </ul>
      )
    },
    {
      role: "Desenvolvedor de Dashboards e Automação de Dados",
      company: "Projetos Pessoais e Open Source",
      period: "2021 – Atual",
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Criação de dashboards em Power BI, Streamlit e Plotly Dash para visualização de indicadores e acompanhamento de métricas.</li>
          <li>Automação de relatórios, coleta e limpeza de dados utilizando Python (Pandas, SQLAlchemy, Requests).</li>
          <li>Publicação de projetos open source e tutoriais sobre análise de dados, machine learning e BI.</li>
        </ul>
      )
    },
    {
      role: "Consultor em Ciência de Dados",
      company: "Empresas de Serviços e Educação",
      period: "2020 – 2022",
      description: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Mentoria e treinamento em análise de dados, visualização e machine learning para equipes técnicas e gestores.</li>
          <li>Implantação de soluções de BI e automação de processos para pequenas e médias empresas.</li>
          <li>Elaboração de estudos de caso, provas de conceito e apresentações de resultados para stakeholders.</li>
        </ul>
      )
    },
    {
      role: "Assistente em Gestão de Defesa Agropecuária",
      company: "Instituto Mineiro de Agropecuária (IMA)",
      period: "Nov/2005 – Atual",
      description: "Atuação no Núcleo de Inovação e Modernização (NIM/IMA) com foco em projetos de dados, automação de relatórios, suporte à gestão e modernização de processos institucionais."
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
            Experiência em ciência de dados, BI, machine learning, automação, consultoria e projetos de dados para negócios.
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
