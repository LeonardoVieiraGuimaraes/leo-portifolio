import ProjectCollection, { CollectionProject } from "./ProjectCollection";
import { useLanguage } from "../context/LanguageContext";

const projects: CollectionProject[] = [
  {
    title: "Estatística e Probabilidade",
    description:
      "Videoaulas que apresentam conceitos de estatística e probabilidade com exemplos e resolução de exercícios.",
    image: "/images/projects/professor/aulaEstatisticaProbabilidade.png",
    link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYUFCykmhDHcOhAIv7er7rou",
    tags: ["YouTube", "Estatística", "Probabilidade"],
    en: {
      title: "Statistics and Probability",
      description: "Video lessons presenting statistics and probability concepts with examples and worked exercises.",
      tags: ["YouTube", "Statistics", "Probability"],
    },
  },
  {
    title: "Matemática Financeira",
    description:
      "Conteúdo didático sobre juros, equivalência de capitais, financiamentos e aplicações práticas.",
    image: "/images/projects/professor/aulaMatematicaFinanceira.png",
    link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYXHvrPFdzPvz2StCvwDVNym",
    tags: ["Matemática", "Finanças", "Educação"],
    en: {
      title: "Financial Mathematics",
      description: "Teaching content on interest, capital equivalence, financing and practical applications.",
      tags: ["Mathematics", "Finance", "Education"],
    },
  },
  {
    title: "Auto Atividade Unidade 01",
    description:
      "Videoaulas de Auto Atividade Unidade 01 com orientações e exercícios práticos.",
    image: "/images/projects/professor/aulaAutoAtividade.png",
    link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYUa4jvkeXZb2Z5ZxVPrysXy",
    tags: ["Educação", "Tecnologia", "Videoaulas"],
    en: {
      title: "Self-Study Activity Unit 01",
      description: "Video lessons for Self-Study Activity Unit 01, with guidance and hands-on exercises.",
      tags: ["Education", "Technology", "Video lessons"],
    },
  },
  {
    title: "Projeto Visão Computacional",
    description:
      "Projetos e videoaulas abordando conceitos e técnicas avançadas de visão computacional.",
    image: "/images/projects/academics/doutoradoProjetoVisaoComputacional.png",
    link: "https://www.youtube.com/playlist?list=PLbLoehbSIAYWV50N_Y2OzrlRRZy0bjGRY",
    tags: ["Visão Computacional", "Doutorado", "YouTube"],
    en: {
      title: "Computer Vision Project",
      description: "Projects and video lessons covering advanced computer vision concepts and techniques.",
      tags: ["Computer Vision", "Ph.D.", "YouTube"],
    },
  },
  {
    title: "Orientação TCC: Irrigação Inteligente",
    description:
      "Orientação de projeto final utilizando Arduino Uno, sensores de umidade/temperatura e interface web para controle e monitoramento remoto de irrigação.",
    image: "/images/projects/academics/especializacaoMatematicaFinanceira.png",
    link: "#",
    tags: ["Arduino", "IoT", "Orientação Acadêmica"],
    en: {
      title: "Capstone Supervision: Smart Irrigation",
      description: "Supervision of a final project using an Arduino Uno, humidity/temperature sensors and a web interface for remote irrigation control and monitoring.",
      tags: ["Arduino", "IoT", "Academic Supervision"],
    },
  },
];

export default function ProjectsProfessor() {
  const { t } = useLanguage();

  return (
    <ProjectCollection
      id="projectsProfessor"
      eyebrow={t("Docência", "Teaching")}
      title={t("Conteúdo técnico com didática.", "Technical content, clearly taught.")}
      description={t(
        "Materiais que demonstram comunicação, organização do conhecimento e experiência em educação — competências úteis também em times de engenharia.",
        "Materials that show communication, knowledge organization and teaching experience — skills that are just as useful in engineering teams."
      )}
      projects={projects}
      muted
    />
  );
}
