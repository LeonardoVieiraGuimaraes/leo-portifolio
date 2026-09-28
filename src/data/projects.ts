type ProjectText = {
  title: string;
  context: string;
  description: string;
  outcome: string;
  tags: string[];
};

/** `en` guarda a versão em inglês dos textos; campos omitidos repetem o original. */
export type Project = ProjectText & {
  image: string;
  link: string;
  github?: string;
  store?: string;
  en: Partial<ProjectText>;
};

export const projects: Project[] = [
  {
    title: "Sistema Sidagro",
    context: "Sistema de Integração Agropecuária",
    description:
      "Portal corporativo de defesa agropecuária de Minas Gerais. Atuação como Product Owner (PO), sendo responsável pela análise de regras de negócio complexas e pela liderança da gestão de suporte técnico do sistema. (Nota: Sistema homologado e compatível exclusivamente com o navegador Mozilla Firefox).",
    outcome: "Plataforma oficial do IMA em produção, com gestão de regras de negócio estruturadas e suporte de alta disponibilidade.",
    image: "/images/projects/developer/developer07.jpg",
    link: "https://www.sidagro.ima.mg.gov.br/sidagro/login.seam",
    tags: ["Java EE", "Oracle", "Gestão de Produto (PO)", "Suporte Técnico"],
    en: {
      title: "Sidagro System",
      context: "Agricultural Integration System",
      description: "Corporate agricultural defense portal of Minas Gerais. Serving as Product Owner (PO), responsible for analyzing complex business rules and leading the system's technical support management. (Note: the system is validated for and compatible only with Mozilla Firefox).",
      outcome: "Official IMA platform in production, with structured business rules management and high-availability support.",
      tags: ["Java EE", "Oracle", "Product Management (PO)", "Technical Support"],
    },
  },
  {
    title: "Portfólio Profissional V3",
    context: "Website & Portfólio Pessoal",
    description:
      "Website moderno e responsivo com design elegante utilizando React, TypeScript e TailwindCSS, apresentando transições suaves, glassmorphism e controle de temas (dark/light).",
    outcome: "Portfólio de engenharia publicado, integrado com envio de emails em tempo real e entrega automatizada de documentos.",
    image: "/images/projects/developer/portifolioV3.png",
    link: "https://leoproti.com.br/",
    github: "https://github.com/LeonardoVieiraGuimaraes/leo-portifolio",
    tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
    en: {
      title: "Professional Portfolio V3",
      context: "Personal Website & Portfolio",
      description: "Modern, responsive website with an elegant design built with React, TypeScript and TailwindCSS, featuring smooth transitions, glassmorphism and dark/light themes.",
      outcome: "Published engineering portfolio, with real-time email delivery and automated document delivery.",
    },
  },
  {
    title: "A&G Enfermagem",
    context: "Produto mobile publicado",
    description:
      "Aplicativo para enfermagem prisional com consulta offline de protocolos, CID-10/CID-11, medicamentos e calculadoras clínicas.",
    outcome: "Disponível oficialmente na Google Play, com landing page e documentação de privacidade.",
    image: "/images/projects/developer/aeg.jpeg",
    link: "https://aeg.leoproti.com.br/",
    store: "https://play.google.com/store/apps/details?id=com.leonardovieiraxy.informacaoEnfermagemreactNative",
    github: "https://github.com/LeonardoVieiraGuimaraes/informacaoEnfermagem-reactNative",
    tags: ["React Native", "Expo", "Android"],
    en: {
      context: "Published mobile product",
      description: "App for prison nursing with offline lookup of protocols, ICD-10/ICD-11, medications and clinical calculators.",
      outcome: "Officially available on Google Play, with a landing page and privacy documentation.",
    },
  },
  {
    title: "Plataforma DAE/PIX v2",
    context: "Sistema corporativo",
    description:
      "Evolução do sistema corporativo do IMA para arrecadação, integrando pagamentos instantâneos via PIX e DAE em arquitetura distribuída.",
    outcome: "Frontend e API separados rodando em ambientes independentes de homologação e produção.",
    image: "/images/projects/developer/developer08.jpg",
    link: "https://daev2.leoproti.com.br/",
    tags: ["React", "TypeScript", "PostgreSQL", "Docker"],
    en: {
      title: "DAE/PIX Platform v2",
      context: "Corporate system",
      description: "Evolution of IMA's corporate fee-collection system, integrating instant payments via PIX and DAE in a distributed architecture.",
      outcome: "Separate frontend and API running in independent staging and production environments.",
    },
  },
  {
    title: "IMA Auth",
    context: "Microsserviço de autenticação",
    description:
      "Serviço corporativo de autenticação única (SSO) baseado em OAuth2/JWT para o ecossistema Sidagro. Gerencia sessões, emissão e validação de tokens para múltiplos sistemas do IMA, integrando serviços legados e novos microsserviços.",
    outcome: "Autenticação centralizada e segura em produção, integrando sistemas legados e novos serviços do IMA via containers.",
    image: "/images/projects/developer/developer06.jpg",
    link: "https://ima-auth.leoproti.com.br/",
    tags: ["OAuth2/JWT", "Node.js", "Docker", "SSO", "API"],
    en: {
      context: "Authentication microservice",
      description: "Corporate single sign-on (SSO) service based on OAuth2/JWT for the Sidagro ecosystem. Manages sessions and issues and validates tokens for multiple IMA systems, integrating legacy services and new microservices.",
      outcome: "Centralized, secure authentication in production, integrating IMA's legacy systems and new services via containers.",
    },
  },
  {
    title: "Radar Brucelose (Hisbruc)",
    context: "Engenharia de requisitos",
    description:
      "Portal wiki e radar de controle sanitário da Brucelose em Minas Gerais, mapeando regras de negócio e casos de uso integrados ao PNCEBT.",
    outcome: "Hospedado via Docker/Nginx com documentação interativa baseada em Wiki de engenharia de software.",
    image: "/images/projects/developer/developer01.jpg",
    link: "https://hisbruc.leoproti.com.br/",
    tags: ["Nginx", "Docker", "Requisitos", "Wiki"],
    en: {
      title: "Brucellosis Radar (Hisbruc)",
      context: "Requirements engineering",
      description: "Wiki portal and sanitary control radar for brucellosis in Minas Gerais, mapping business rules and use cases integrated with PNCEBT, the national brucellosis and tuberculosis control program.",
      outcome: "Hosted with Docker/Nginx, with interactive documentation based on a software engineering wiki.",
      tags: ["Nginx", "Docker", "Requirements", "Wiki"],
    },
  },
  {
    title: "Hub de Projetos do Doutorado",
    context: "Pesquisa aplicada",
    description:
      "Ambiente full stack para experimentos científicos com autômatos celulares, random walk, lógica fuzzy e grafos de GTA.",
    outcome: "Frontend Next.js e API FastAPI publicados separadamente, com documentação interativa em containers.",
    image: "/images/projects/academics/doutoradoMineracaoDadosProjeto.png",
    link: "https://projetos-doutorado.leoproti.com.br/",
    github: "https://github.com/LeonardoVieiraGuimaraes/DoutoradoCefet/tree/main/hospedagem/projetos_doutorado",
    tags: ["FastAPI", "Next.js", "Docker"],
    en: {
      title: "Ph.D. Projects Hub",
      context: "Applied research",
      description: "Full stack environment for scientific experiments with cellular automata, random walks, fuzzy logic and animal transit permit (GTA) graphs.",
      outcome: "Next.js frontend and FastAPI API published separately, with interactive documentation in containers.",
    },
  },
  {
    title: "Mineração de Dados - Acidentes de Trânsito",
    context: "Pesquisa & Modelagem Preditiva",
    description:
      "Exploração, tratamento e modelagem preditiva utilizando séries temporais e algoritmos de aprendizado supervisionado (regressão e classificação) aplicados a dados de acidentes de trânsito em rodovias federais.",
    outcome: "Identificação dos principais fatores de risco e construção de modelos preditivos com alta taxa de acerto.",
    image: "/images/projects/academics/doutoradoMineracaoDadosTrabalhoIII.png",
    link: "#",
    tags: ["Python", "Séries Temporais", "Scikit-Learn", "Machine Learning"],
    en: {
      title: "Data Mining - Traffic Accidents",
      context: "Research & Predictive Modeling",
      description: "Exploration, preprocessing and predictive modeling using time series and supervised learning algorithms (regression and classification) applied to traffic accident data on federal highways.",
      outcome: "Identified the main risk factors and built predictive models with high accuracy.",
      tags: ["Python", "Time Series", "Scikit-Learn", "Machine Learning"],
    },
  },
  {
    title: "Mineração de Dados Educacionais (ENEM/ENADE)",
    context: "Pesquisa & Análise Estatística",
    description:
      "Estudo analítico utilizando algoritmos de mineração de dados para correlacionar fatores socioeconômicos ao desempenho de estudantes no ENEM e ENADE.",
    outcome: "Descoberta de padrões comportamentais e geração de relatórios estatísticos para apoio a políticas públicas de educação.",
    image: "/images/projects/academics/doutoradoMineracaoDadosProjeto.png",
    link: "#",
    tags: ["Python", "Pandas", "Estatística", "Clustering"],
    en: {
      title: "Educational Data Mining (ENEM/ENADE)",
      context: "Research & Statistical Analysis",
      description: "Analytical study using data mining algorithms to correlate socioeconomic factors with student performance in ENEM and ENADE, Brazil's national exams.",
      outcome: "Found behavioral patterns and produced statistical reports to support public education policy.",
      tags: ["Python", "Pandas", "Statistics", "Clustering"],
    },
  },
  {
    title: "Visão Computacional - CNN Keypoints",
    context: "Pesquisa Aplicada / Mestrado (UFMG)",
    description:
      "Investigação e otimização de arquiteturas de Redes Neurais Convolucionais (CNNs) voltadas para a detecção robusta de pontos de interesse (keypoints) em imagens com deformações não rígidas.",
    outcome: "Proposta de dissertação desenvolvida sob orientação do Prof. Erickson Rangel (UFMG) com foco em matching de descritores.",
    image: "/images/projects/academics/doutoradoProjetoVisaoComputacional.png",
    link: "#",
    tags: ["Computer Vision", "CNN", "PyTorch", "Matching"],
    en: {
      title: "Computer Vision - CNN Keypoints",
      context: "Applied Research / Master's (UFMG)",
      description: "Research and optimization of Convolutional Neural Network (CNN) architectures for robust keypoint detection in images with non-rigid deformations.",
      outcome: "Dissertation proposal developed under the supervision of Prof. Erickson Rangel (UFMG), focused on descriptor matching.",
    },
  },
  {
    title: "Monitoramento de Desidratação de Uvas",
    context: "Dissertação de Mestrado (UNIMONTES)",
    description:
      "Sistema inteligente para o monitoramento de desidratação de uvas baseado em processamento digital de imagens e modelos estatísticos de regressão para estimar a perda de massa em tempo real.",
    outcome: "Defesa e publicação da dissertação de Mestrado em Modelagem Computacional e Sistemas, otimizando o controle de qualidade industrial.",
    image: "/images/projects/academics/dissetacaoMestrado.png",
    link: "#",
    tags: ["Processamento de Imagens", "Sistemas Inteligentes", "Regressão", "Matlab"],
    en: {
      title: "Grape Dehydration Monitoring",
      context: "Master's Dissertation (UNIMONTES)",
      description: "Intelligent system for monitoring grape dehydration based on digital image processing and statistical regression models to estimate mass loss in real time.",
      outcome: "Master's dissertation in Computational Modeling and Systems defended and published, improving industrial quality control.",
      tags: ["Image Processing", "Intelligent Systems", "Regression", "Matlab"],
    },
  },
  {
    title: "Sistema de Identificação Bovinos RFID",
    context: "Artigo / Engenharia de Computação",
    description:
      "Projeto e implementação de sistema de identificação e rastreamento de bovinos por radiofrequência (RFID), integrando hardware embarcado e sistema de banco de dados.",
    outcome: "Artigo científico publicado detalhando o circuito receptor, tags ativas e protocolo de comunicação segura.",
    image: "/images/projects/academics/artigoRFIDEngenhariaComputacao.png",
    link: "#",
    tags: ["RFID", "Hardware", "Engenharia de Computação", "SQL"],
    en: {
      title: "RFID Cattle Identification System",
      context: "Paper / Computer Engineering",
      description: "Design and implementation of a radio-frequency identification (RFID) system for identifying and tracking cattle, integrating embedded hardware and a database system.",
      outcome: "Published scientific paper detailing the receiver circuit, active tags and secure communication protocol.",
      tags: ["RFID", "Hardware", "Computer Engineering", "SQL"],
    },
  },
  {
    title: "Sistema Hospitalar de Enfermagem",
    context: "Software para saúde",
    description:
      "Sistema web para recepção de pacientes e apoio aos fluxos de cirurgia segura e tratamento quimioterápico.",
    outcome: "Aplicação Django publicada com containerização e deploy automatizado no servidor.",
    image: "/images/projects/developer/recepcao.png",
    link: "https://recepcao.leoproti.com.br/",
    github: "https://github.com/LeonardoVieiraGuimaraes/hospital-enfermagem-django",
    tags: ["Python", "Django", "Docker"],
    en: {
      title: "Hospital Nursing System",
      context: "Healthcare software",
      description: "Web system for patient reception and support for safe surgery and chemotherapy treatment workflows.",
      outcome: "Django application published with containerization and automated deployment to the server.",
    },
  },
  {
    title: "Sistema SAE Obstétrico",
    context: "Fluxo assistencial",
    description:
      "Aplicação para cadastro de pacientes, admissão obstétrica, acompanhamento de puérperas e fichas de atendimento.",
    outcome: "Backend Django com interface web e publicação contínua em ambiente próprio.",
    image: "/images/projects/developer/projetoEnfermagem01.png",
    link: "https://sae.leoproti.com.br/",
    github: "https://github.com/LeonardoVieiraGuimaraes/sae-enfermagem-django",
    tags: ["Python", "Django", "Saúde"],
    en: {
      title: "Obstetric Nursing Care System (SAE)",
      context: "Care workflow",
      description: "Application for patient registration, obstetric admission, postpartum follow-up and care records.",
      outcome: "Django backend with a web interface and continuous deployment to a self-hosted environment.",
      tags: ["Python", "Django", "Healthcare"],
    },
  },
  {
    title: "Arquitetura de Aplicação Web",
    context: "Didático / Ensino",
    description:
      "Plataforma de ensino contendo implementações de referência com Java, Spring Boot, Docker e TypeScript, base das disciplinas ministradas.",
    outcome: "Ambiente online para demonstração prática de APIs RESTful e padrões arquiteturais complexos.",
    image: "/images/projects/developer/developer02.jpg",
    link: "https://arqwebv01.leoproti.com.br/",
    tags: ["Java", "Spring Boot", "Docker", "REST"],
    en: {
      title: "Web Application Architecture",
      context: "Teaching / Education",
      description: "Teaching platform with reference implementations in Java, Spring Boot, Docker and TypeScript, the foundation of the courses I taught.",
      outcome: "Online environment for hands-on demonstrations of RESTful APIs and complex architectural patterns.",
    },
  },
  {
    title: "Programação Web",
    context: "Didático / Ensino",
    description:
      "Plataforma de apoio pedagógico focada em desenvolvimento backend inicial, com APIs simples e controle de persistência relacional.",
    outcome: "Sistema online para demonstração prática de controllers, requests e persistência de dados em aula.",
    image: "/images/projects/developer/proweb.png",
    link: "https://proweb.leoproti.com.br/",
    tags: ["Java", "Spring Boot", "Web", "SQL"],
    en: {
      title: "Web Programming",
      context: "Teaching / Education",
      description: "Teaching support platform focused on introductory backend development, with simple APIs and relational persistence.",
      outcome: "Online system for hands-on classroom demonstrations of controllers, requests and data persistence.",
    },
  },
  {
    title: "Observabilidade (Grafana & Prometheus)",
    context: "Infraestrutura & DevOps",
    description:
      "Pilha de monitoramento integrada para coleta de métricas de containers, recursos do sistema e alertas em tempo real.",
    outcome: "Painéis e alertas em tempo real para controle de saúde e disponibilidade dos serviços do home server.",
    image: "/images/projects/developer/grafana.png",
    link: "https://grafana.leoproti.com.br/",
    tags: ["Grafana", "Prometheus", "DevOps", "Métricas"],
    en: {
      title: "Observability (Grafana & Prometheus)",
      context: "Infrastructure & DevOps",
      description: "Integrated monitoring stack collecting container metrics, system resources and real-time alerts.",
      outcome: "Real-time dashboards and alerts tracking the health and availability of the home server services.",
      tags: ["Grafana", "Prometheus", "DevOps", "Metrics"],
    },
  },
  {
    title: "CasaOS Home Server Portal",
    context: "Infraestrutura & DevOps",
    description:
      "Painel centralizador e orquestrador de contêineres Docker para gerenciamento simplificado da infraestrutura local.",
    outcome: "Gerenciamento visual e centralizado de todos os serviços e volumes do servidor doméstico.",
    image: "/images/projects/developer/casaos.png",
    link: "https://casaos.leoproti.com.br/",
    tags: ["CasaOS", "Docker", "Homelab", "Orquestração"],
    en: {
      context: "Infrastructure & DevOps",
      description: "Central dashboard and Docker container orchestrator for simplified management of the local infrastructure.",
      outcome: "Visual, centralized management of all home server services and volumes.",
      tags: ["CasaOS", "Docker", "Homelab", "Orchestration"],
    },
  },
  {
    title: "Nextcloud Privado",
    context: "Infraestrutura & Nuvem",
    description:
      "Servidor de arquivos e colaboração na nuvem própria, garantindo armazenamento soberano e seguro para pesquisas e assets.",
    outcome: "Hospedagem segura em ambiente HTTPS próprio com verificação de segurança no proxy.",
    image: "/images/projects/developer/nextcloud.png",
    link: "https://nextcloud.leoproti.com.br/",
    tags: ["Nextcloud", "Nuvem", "Docker", "Soberania"],
    en: {
      title: "Private Nextcloud",
      context: "Infrastructure & Cloud",
      description: "Self-hosted cloud file and collaboration server, providing sovereign and secure storage for research and assets.",
      outcome: "Secure hosting in a self-managed HTTPS environment with security checks at the proxy.",
      tags: ["Nextcloud", "Cloud", "Docker", "Sovereignty"],
    },
  },
];

/** Projetos em destaque para a tela inicial: um por frente de atuação (PO/corporativo, marca pessoal, produto publicado). */
export const featuredProjectTitles = ["Sistema Sidagro", "Portfólio Profissional V3", "A&G Enfermagem"];

export const featuredProjects = projects.filter((project) => featuredProjectTitles.includes(project.title));
