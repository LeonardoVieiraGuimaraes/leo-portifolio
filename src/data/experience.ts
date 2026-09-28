type ExperienceText = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

/** `en` guarda a versão em inglês dos textos; campos omitidos repetem o original. */
export type ExperienceEntry = ExperienceText & {
  primary?: boolean;
  en: Partial<ExperienceText>;
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
    en: {
      role: "Backend Developer (GLS / IT)",
      period: "Jul 2026 — present",
      highlights: [
        "Leads technical support management for the Sidagro system and serves as its Product Owner (PO), analyzing complex business rules and aligning requirements.",
        "Works as a backend developer in the Logistics and General Services Department (GLS / IT), focused on web development and the continuous evolution and maintenance of the Sidagro system (validated for Firefox).",
        "Develops RESTful APIs and internal automation tools to speed up operational processes and routines.",
        "Models and administers relational databases that support management reports and the institution's operational control.",
        "Uses Docker and containers to standardize and isolate development, staging and production environments.",
      ],
    },
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
    en: {
      role: "Management Assistant (NIM - Innovation and Modernization)",
      period: "Sep 2024 — Jul 2026",
      highlights: [
        "Managed projects and technical support for the Sidagro system, analyzing and documenting complex business rules as Product Owner (PO).",
        "Provided technical leadership at the Innovation and Modernization Unit (NIM), focused on modernizing corporate processes in the public sector.",
        "Developed and maintained essential digital solutions, such as fee-collection platforms (DAE/PIX integration) and corporate authentication systems.",
        "Modeled and documented complex institutional process flows in BPMN to integrate and optimize different departments.",
      ],
    },
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
    en: {
      role: "Web Systems Developer",
      company: "Freelance, academic and applied projects",
      period: "2014 — present",
      highlights: [
        "Building robust web systems and secure APIs since my Computer Engineering degree, for academic, commercial and research needs.",
        "End-to-end solutions with Python (Django, FastAPI), Java (Spring Boot), React, TypeScript and SQL databases.",
        "Container-based architectures (Docker), Nginx server configuration, CI/CD pipelines and Git version control.",
      ],
    },
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
    en: {
      role: "Android App Developer (Freelance)",
      company: "Health Technology & Scientific Research Project",
      period: "Jan 2024 — Feb 2024",
      highlights: [
        "Developed and designed the architecture of a native Android app for managing and systematizing prison healthcare services.",
        "Worked directly on the technology behind an international scientific study on prison nursing, published in 2026 (Investigación y Educación en Enfermería).",
        "Modeled the app's local database, ensuring secure offline storage, optimized performance and validation of health data.",
      ],
    },
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
    en: {
      role: "Management Assistant (São Francisco Regional Office)",
      period: "Nov 2005 — Sep 2024",
      highlights: [
        "Supported regional management in northern Minas Gerais, focusing on public service, case analysis and operational control of agricultural defense.",
        "Developed and maintained automated reports, management spreadsheets and small local scripts to streamline the daily workflow.",
        "Issued official documents, controlled the transit of animals and plants and inspected regional regulatory compliance.",
      ],
    },
  },
  {
    role: "Professor de Ensino Superior",
    company: "Centro Universitário Newton Paiva",
    period: "ago 2024 — dez 2025",
    highlights: [
      "Docência prática de disciplinas de Banco de Dados e Arquitetura Web, conectando a teoria acadêmica às necessidades e padrões práticos do mercado.",
      "Orientação de estudantes em projetos práticos integradores de desenvolvimento de software, modelagem de dados e design de arquitetura RESTful.",
    ],
    en: {
      role: "University Professor",
      period: "Aug 2024 — Dec 2025",
      highlights: [
        "Taught hands-on Databases and Web Architecture courses, connecting academic theory to industry needs and practical standards.",
        "Supervised students in hands-on capstone projects on software development, data modeling and RESTful architecture design.",
      ],
    },
  },
  {
    role: "Professor Convidado (Pós-Graduação Stricto Sensu)",
    company: "Universidade Federal de Alfenas (UNIFAL-MG)",
    period: "nov 2025",
    highlights: [
      "Ministrei a aula temática 'Desenvolvimento de aplicativos No-Code: da ideia à implementação' na disciplina 'Tecnologia em Saúde e Educação' (ENF65) do Programa de Pós-Graduação em Enfermagem (Mestrado e Doutorado).",
      "Orientei mestrandos e doutorandos na modelagem de problemas e publicação de protótipos funcionais de aplicativos móveis.",
    ],
    en: {
      role: "Guest Professor (Graduate Program)",
      company: "Federal University of Alfenas (UNIFAL-MG)",
      period: "Nov 2025",
      highlights: [
        "Taught the thematic class 'No-Code App Development: from idea to implementation' in the course 'Technology in Health and Education' (ENF65) of the Graduate Program in Nursing (Master's and Ph.D.).",
        "Guided master's and Ph.D. students in problem modeling and in publishing working mobile app prototypes.",
      ],
    },
  },
  {
    role: "Professor, Tutor e Autor de Tecnologia",
    company: "UNIASSELVI · Vitru Brasil Empreendimentos",
    period: "fev 2022 — fev 2025",
    highlights: [
      "Atuação como tutor e orientador acadêmico nos cursos de Análise e Desenvolvimento de Sistemas e Sistemas para Internet.",
      "Autoria de conteúdo didático para a disciplina 'Backend II com Banco de Dados', cobrindo programação web com acesso a dados estruturados e melhores práticas backend.",
    ],
    en: {
      role: "Technology Professor, Tutor and Author",
      period: "Feb 2022 — Feb 2025",
      highlights: [
        "Academic tutor and advisor in the Systems Analysis and Development and Internet Systems programs.",
        "Authored course material for 'Backend II with Databases', covering web programming with structured data access and backend best practices.",
      ],
    },
  },
  {
    role: "Professor Mediador EAD (Desenvolvimento Mobile)",
    company: "IFNMG — Instituto Federal do Norte de Minas Gerais",
    period: "2020",
    highlights: [
      "Atuação como Professor Mediador a Distância no curso de Formação Inicial e Continuada (FIC) Programador de Dispositivos Móveis na modalidade EAD.",
      "Apoio, orientação e avaliação dos estudantes em tópicos de lógica de programação para dispositivos móveis.",
    ],
    en: {
      role: "Distance Learning Mediator (Mobile Development)",
      company: "IFNMG — Federal Institute of Northern Minas Gerais",
      highlights: [
        "Distance learning mediator in the Mobile Device Programmer continuing education (FIC) online course.",
        "Supported, guided and assessed students on programming logic for mobile devices.",
      ],
    },
  },
  {
    role: "Professor Mediador Presencial (Tutor de TI)",
    company: "IFNMG — Instituto Federal do Norte de Minas Gerais",
    period: "2017 — 2019",
    highlights: [
      "Mediação e tutoria presencial de alunos do curso Técnico em Informática para Internet na modalidade presencial.",
      "Suporte didático-pedagógico prático em lógica de programação, banco de dados e desenvolvimento de interfaces web básicas.",
    ],
    en: {
      role: "On-site Mediator (IT Tutor)",
      company: "IFNMG — Federal Institute of Northern Minas Gerais",
      highlights: [
        "On-site mediation and tutoring for students of the Internet Computing Technician program.",
        "Hands-on teaching support in programming logic, databases and basic web interface development.",
      ],
    },
  },
  {
    role: "Professor de Ensino Superior",
    company: "FADENORTE — Faculdade de Desenvolvimento do Norte",
    period: "2019 — 2020",
    highlights: [
      "Docência de disciplinas de Estatística, Matemática Financeira, Gestão Financeira e Inovação Tecnológica para cursos superiores de graduação.",
      "Orientação de Projetos Integradores (II, IV e V) focados em aplicação prática e resolução de problemas gerenciais nas organizações.",
    ],
    en: {
      role: "University Professor",
      highlights: [
        "Taught Statistics, Financial Mathematics, Financial Management and Technological Innovation in undergraduate programs.",
        "Supervised Capstone Projects (II, IV and V) focused on practical application and solving management problems in organizations.",
      ],
    },
  },
];

/** Resumo para a tela inicial: cargo atual (CLT), atuação freelance/PJ e docência — as três frentes do posicionamento. */
type FeaturedRoleText = { role: string; company: string; summary: string };

export const featuredExperienceRoles: (FeaturedRoleText & { en: Partial<FeaturedRoleText> })[] = [
  {
    role: "Desenvolvedor Backend (GLS / TI)",
    company: "Instituto Mineiro de Agropecuária (IMA) · jul 2026 — atual",
    summary: "Desenvolvimento backend e Product Owner (PO) do sistema Sidagro, com APIs RESTful, automações e ambientes em Docker.",
    en: {
      role: "Backend Developer (GLS / IT)",
      company: "Instituto Mineiro de Agropecuária (IMA) · Jul 2026 — present",
      summary: "Backend development and Product Owner (PO) of the Sidagro system, with RESTful APIs, automations and Docker environments.",
    },
  },
  {
    role: "Desenvolvedor de Sistemas Web",
    company: "Projetos freelance, acadêmicos e soluções aplicadas · 2014 — atual",
    summary: "Entregas fim a fim como PJ/freelancer: Python, Java, React e TypeScript, do requisito ao deploy em produção.",
    en: {
      role: "Web Systems Developer",
      company: "Freelance, academic and applied projects · 2014 — present",
      summary: "End-to-end delivery as a contractor/freelancer: Python, Java, React and TypeScript, from requirements to production deployment.",
    },
  },
  {
    role: "Professor de Ensino Superior",
    company: "Newton Paiva & UNIASSELVI · 2022 — 2025",
    summary: "Docência em Banco de Dados e Arquitetura Web, orientação de projetos integradores e produção de conteúdo didático. Professor convidado na pós-graduação stricto sensu da UNIFAL-MG.",
    en: {
      role: "University Professor",
      summary: "Taught Databases and Web Architecture, supervised capstone projects and produced course material. Guest professor in the UNIFAL-MG graduate program.",
    },
  },
];
