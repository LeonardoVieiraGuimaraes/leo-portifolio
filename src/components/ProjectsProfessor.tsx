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
    title: "Projeto Integrador",
    description:
      "Orientações para estruturar projetos, conectar teoria e prática e apresentar resultados com clareza.",
    image: "/images/projects/professor/aulaProjetoIntegrador.png",
    link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYVKOSuhf2p27tRaFlXAFG1T",
    tags: ["Projetos", "Tecnologia", "Docência"],
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
