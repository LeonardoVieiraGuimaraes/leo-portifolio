import ProjectCollection, { CollectionProject } from "./ProjectCollection";

const projects: CollectionProject[] = [
  {
    title: "Pesquisa de Doutorado: Detecção de Fraudes em GTA",
    description:
      "Algoritmos neuro-fuzzy evolutivos para detectar anomalias em dados agropecuários, com aprendizado incremental e modelos interpretáveis.",
    image: "/images/projects/academics/doutoradoMineracaoDadosProjeto.png",
    link: "https://github.com/LeonardoVieiraGuimaraes/DoutoradoCefet/tree/main/ProjetoDoutorado",
    tags: ["Neuro-fuzzy", "Python", "Detecção de anomalias"],
  },
  {
    title: "Mineração de Dados: Acidentes de Trânsito",
    description:
      "Análise de séries temporais e modelos preditivos supervisionados aplicando machine learning em dados históricos de rodovias federais.",
    image: "/images/projects/academics/doutoradoMineracaoDadosTrabalhoIII.png",
    link: "#",
    tags: ["Python", "Séries Temporais", "Scikit-Learn"],
  },
  {
    title: "Mineração de Dados Educacionais (ENEM/ENADE)",
    description:
      "Estudo estatístico e algoritmos de agrupamento (clustering) para correlacionar o rendimento dos estudantes ao perfil socioeconômico.",
    image: "/images/projects/academics/doutoradoMineracaoDadosProjeto.png",
    link: "#",
    tags: ["Python", "Estatística", "Clustering"],
  },
  {
    title: "Visão Computacional - CNN Keypoints",
    description:
      "Dissertação proposta e desenvolvida no Mestrado da UFMG focada em redes convolucionais e matching robusto de descritores sob deformações não rígidas.",
    image: "/images/projects/academics/doutoradoProjetoVisaoComputacional.png",
    link: "#",
    tags: ["CNN", "Computer Vision", "PyTorch"],
  },
  {
    title: "Aplicativo Validado para Enfermagem Prisional",
    description:
      "Pesquisa publicada sobre desenvolvimento e validação de um aplicativo móvel voltado à autonomia e à gestão na enfermagem prisional.",
    image: "/images/projects/developer/aeg.jpeg",
    link: "https://revistas.udea.edu.co/index.php/iee/article/view/364084",
    tags: ["Artigo científico", "Saúde digital", "Mobile"],
  },
  {
    title: "Inovação na Enfermagem Prisional",
    description:
      "Artigo de divulgação sobre como a tecnologia fortalece a autonomia profissional e qualifica o cuidado no sistema prisional.",
    image: "/images/projects/developer/projetoEnfermagem02.png",
    link: "https://www.linkedin.com/pulse/inova%C3%A7%C3%A3o-na-enfermagem-prisional-tecnologia-para-e-o-leonardo-ybvvf/",
    tags: ["Divulgação científica", "Tecnologia", "Enfermagem"],
  },
  {
    title: "Dissertação de Mestrado em Modelagem Computacional",
    description:
      "Monitoramento do processo de desidratação de uvas baseado em processamento de imagens e sistemas inteligentes.",
    image: "/images/projects/academics/dissetacaoMestrado.png",
    link: "https://drive.google.com/file/d/1-l2qG_lpE9hZyoBhIYU7o79xSEl6815P/view",
    tags: ["Processamento de imagens", "Modelagem", "Pesquisa"],
  },
  {
    title: "Identificação de Bovinos com RFID",
    description:
      "Projeto de Engenharia da Computação e artigo sobre identificação eletrônica de bovinos utilizando radiofrequência.",
    image: "/images/projects/academics/artigoRFIDEngenhariaComputacao.png",
    link: "https://drive.google.com/file/d/1WDsuPN1N3Tw-WZdfPAbRMYgtCF8KncLu/view?usp=sharing",
    tags: ["RFID", "Engenharia", "Artigo"],
  },
];

export default function ProjectsAcademics() {
  return (
    <ProjectCollection
      id="projectsAcademics"
      eyebrow="Pesquisa aplicada"
      title="Software, dados e produção acadêmica."
      description="Uma seleção de pesquisas e publicações que sustentam a capacidade de investigar problemas, validar soluções e comunicar resultados."
      projects={projects}
    />
  );
}
