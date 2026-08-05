import ProjectCollection, { CollectionProject } from "./ProjectCollection";

const projects: CollectionProject[] = [
  {
    title: "Estatística e Probabilidade",
    description:
      "Videoaulas que apresentam conceitos de estatística e probabilidade com exemplos e resolução de exercícios.",
    image: "/images/projects/professor/aulaEstatisticaProbabilidade.png",
    link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYUFCykmhDHcOhAIv7er7rou",
    tags: ["YouTube", "Estatística", "Probabilidade"],
  },
  {
    title: "Matemática Financeira",
    description:
      "Conteúdo didático sobre juros, equivalência de capitais, financiamentos e aplicações práticas.",
    image: "/images/projects/professor/aulaMatematicaFinanceira.png",
    link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYXHvrPFdzPvz2StCvwDVNym",
    tags: ["Matemática", "Finanças", "Educação"],
  },
  {
    title: "Auto Atividade Unidade 01",
    description:
      "Videoaulas de Auto Atividade Unidade 01 com orientações e exercícios práticos.",
    image: "/images/projects/professor/aulaAutoAtividade.png",
    link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYUa4jvkeXZb2Z5ZxVPrysXy",
    tags: ["Educação", "Tecnologia", "Videoaulas"],
  },
  {
    title: "Projeto Visão Computacional",
    description:
      "Projetos e videoaulas abordando conceitos e técnicas avançadas de visão computacional.",
    image: "/images/projects/academics/doutoradoProjetoVisaoComputacional.png",
    link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYWV50N_Y2OzrlRRZy0bjGRY",
    tags: ["Visão Computacional", "Doutorado", "YouTube"],
  },
];

export default function ProjectsProfessor() {
  return (
    <ProjectCollection
      id="projectsProfessor"
      eyebrow="Docência"
      title="Conteúdo técnico com didática."
      description="Materiais que demonstram comunicação, organização do conhecimento e experiência em educação — competências úteis também em times de engenharia."
      projects={projects}
      muted
    />
  );
}
