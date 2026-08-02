export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  primary?: boolean;
};

export const experiences: ExperienceEntry[] = [
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

/** Resumo para a tela inicial: cargo atual (CLT), atuação freelance/PJ e docência — as três frentes do posicionamento. */
export const featuredExperienceRoles: { role: string; company: string; summary: string }[] = [
  {
    role: "Desenvolvedor Backend (GLS / TI)",
    company: "Instituto Mineiro de Agropecuária (IMA) · jul 2026 — atual",
    summary: "Desenvolvimento backend e Product Owner (PO) do sistema Sidagro, com APIs RESTful, automações e ambientes em Docker.",
  },
  {
    role: "Desenvolvedor de Sistemas Web",
    company: "Projetos freelance, acadêmicos e soluções aplicadas · 2014 — atual",
    summary: "Entregas fim a fim como PJ/freelancer: Python, Java, React e TypeScript, do requisito ao deploy em produção.",
  },
  {
    role: "Professor de Ensino Superior",
    company: "Newton Paiva & UNIASSELVI · 2022 — atual",
    summary: "Docência em Banco de Dados e Arquitetura Web, orientação de projetos integradores e produção de conteúdo didático.",
  },
];
