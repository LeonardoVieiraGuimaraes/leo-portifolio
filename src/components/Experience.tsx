import { HiArrowUpRight, HiBriefcase, HiCheckCircle } from "react-icons/hi2";
import { getImagePath } from "../utils/paths";

const experiences = [
  {
    role: "Desenvolvedor Backend (GLS / TI)",
    company: "Instituto Mineiro de Agropecuária (IMA)",
    period: "jul 2026 — atual",
    highlights: [
      "Liderança na gestão de suporte técnico do sistema Sidagro e atuação como Product Owner (PO), sendo responsável pela análise de regras de negócio complexas e alinhamento de requisitos.",
      "Atuação direta como desenvolvedor backend na Gerência de Logística e Serviços Gerais (GLS / TI), com foco em desenvolvimento web, evolução e sustentação contínua do sistema Sidagro (homologado para Firefox).",
      "Desenvolvimento de APIs RESTful e ferramentas de automação interna para agilizar processos e rotinas operacionais.",
      "Modelagem e administração de bancos de dados relacionais para suporte a relatórios gerenciais e controle operacional da instituição.",
      "Utilização de Docker e contêineres para padronizar e isolar ambientes de desenvolvimento, homologação e produção.",
    ],
    primary: true,
  },
  {
    role: "Assistente de Gestão (NIM - Inovação e Modernização)",
    company: "Instituto Mineiro de Agropecuária (IMA)",
    period: "set 2024 — jul 2026",
    highlights: [
      "Gestão de projetos e de suporte técnico do sistema Sidagro, atuando na análise e documentação de regras de negócio complexas como Product Owner (PO).",
      "Liderança técnica e atuação ativa no Núcleo de Inovação e Modernização (NIM), com foco na modernização de processos corporativos no setor público.",
      "Desenvolvimento e sustentação de soluções digitais essenciais, como plataformas de arrecadação (integração DAE/PIX) e sistemas corporativos de autenticação.",
      "Modelagem e documentação de fluxos de processos institucionais complexos utilizando a notação BPMN para integrar e otimizar diferentes setores.",
    ],
  },
  {
    role: "Desenvolvedor de Sistemas Web",
    company: "Projetos freelance, acadêmicos e soluções aplicadas",
    period: "2014 — atual",
    highlights: [
      "Desenvolvimento de sistemas web robustos e APIs seguras desde a graduação em Engenharia de Computação, atendendo a demandas acadêmicas, comerciais e de pesquisa.",
      "Construção de soluções completas fim a fim com Python (Django, FastAPI), Java (Spring Boot), React, TypeScript e bancos de dados SQL.",
      "Concepção de arquiteturas baseadas em contêineres (Docker), configuração de servidores Nginx, fluxos de CI/CD e controle de versionamento com Git.",
    ],
  },
  {
    role: "Desenvolvedor de Aplicativo Android (Freelancer)",
    company: "Projeto de Tecnologia na Saúde & Pesquisa Científica",
    period: "jan 2024 — fev 2024",
    highlights: [
      "Desenvolvimento e arquitetura de um aplicativo Android nativo para a gestão e sistematização de serviços de saúde prisional.",
      "Atuação direta no desenvolvimento tecnológico de uma pesquisa científica internacional de enfermagem prisional, publicada em 2026 (Investigación y Educación en Enfermería).",
      "Modelagem do banco de dados local do app, garantindo armazenamento offline seguro, desempenho otimizado e validação dos dados de saúde.",
    ],
  },
  {
    role: "Assistente de Gestão (Escritório Seccional de São Francisco)",
    company: "Instituto Mineiro de Agropecuária (IMA)",
    period: "nov 2005 — set 2024",
    highlights: [
      "Suporte à gestão regional do norte de Minas Gerais, com foco em atendimento ao público, análise processual e controle operacional de defesa agropecuária.",
      "Desenvolvimento e manutenção de relatórios automatizados, planilhas gerenciais e pequenos scripts locais para otimização do fluxo de trabalho diário.",
      "Emissão de documentos oficiais, controle de trânsito de animais e vegetais e fiscalização de conformidade regulatória regional.",
    ],
  },
  {
    role: "Professor de Ensino Superior",
    company: "Centro Universitário Newton Paiva",
    period: "2024 — atual",
    highlights: [
      "Docência prática de disciplinas de Banco de Dados e Arquitetura Web, conectando a teoria acadêmica às necessidades e padrões práticos do mercado.",
      "Orientação de estudantes em projetos práticos integradores de desenvolvimento de software, modelagem de dados e design de arquitetura RESTful.",
    ],
  },
  {
    role: "Professor, Tutor e Autor de Tecnologia",
    company: "UNIASSELVI · Vitru Brasil Empreendimentos",
    period: "2022 — atual",
    highlights: [
      "Atuação como tutor e orientador acadêmico nos cursos de Análise e Desenvolvimento de Sistemas e Sistemas para Internet.",
      "Autoria de conteúdo didático para a disciplina 'Backend II com Banco de Dados', cobrindo programação web com acesso a dados estruturados e melhores práticas backend.",
    ],
  },
  {
    role: "Professor Mediador EAD (Desenvolvimento Mobile)",
    company: "IFNMG — Instituto Federal do Norte de Minas Gerais",
    period: "2020",
    highlights: [
      "Atuação como Professor Mediador a Distância no curso de Formação Inicial e Continuada (FIC) Programador de Dispositivos Móveis na modalidade EAD.",
      "Apoio, orientação e avaliação dos estudantes em tópicos de lógica de programação para dispositivos móveis.",
    ],
  },
  {
    role: "Professor Mediador Presencial (Tutor de TI)",
    company: "IFNMG — Instituto Federal do Norte de Minas Gerais",
    period: "2017 — 2019",
    highlights: [
      "Mediação e tutoria presencial de alunos do curso Técnico em Informática para Internet na modalidade presencial.",
      "Suporte didático-pedagógico prático em lógica de programação, banco de dados e desenvolvimento de interfaces web básicas.",
    ],
  },
  {
    role: "Professor de Ensino Superior",
    company: "FADENORTE — Faculdade de Desenvolvimento do Norte",
    period: "2019 — 2020",
    highlights: [
      "Docência de disciplinas de Estatística, Matemática Financeira, Gestão Financeira e Inovação Tecnológica para cursos superiores de graduação.",
      "Orientação de Projetos Integradores (II, IV e V) focados em aplicação prática e resolução de problemas gerenciais nas organizações.",
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
            <a href={getImagePath("curriculo-leonardo-fullstack.pdf")} download className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200 [.light_&]:text-sky-700">
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
