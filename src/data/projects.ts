export type Project = {
  title: string;
  context: string;
  description: string;
  outcome: string;
  image: string;
  link: string;
  tags: string[];
  github?: string;
  store?: string;
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
  },
  {
    title: "PDF Server",
    context: "Microsserviço de documentos",
    description:
      "Microsserviço dedicado à geração e assinatura de documentos fiscais digitais para o IMA. Responsável pela emissão programática de PDFs oficiais com layout padronizado, assinatura digital e entrega via API REST.",
    outcome: "Geração automatizada de documentos fiscais em produção, com API independente rodando em container dedicado.",
    image: "/images/projects/developer/developer06.jpg",
    link: "https://pdfserver.leoproti.com.br/",
    tags: ["Node.js", "Docker", "API REST", "PDF", "Documentos Fiscais"],
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
  },
];

/** Projetos em destaque para a tela inicial: um por frente de atuação (PO/corporativo, marca pessoal, produto publicado). */
export const featuredProjectTitles = ["Sistema Sidagro", "Portfólio Profissional V3", "A&G Enfermagem"];

export const featuredProjects = projects.filter((project) => featuredProjectTitles.includes(project.title));
