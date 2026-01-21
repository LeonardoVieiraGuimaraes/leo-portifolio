import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

export default function Skills() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const background = isLight
    ? "linear-gradient(180deg, #f9fafb 0%, #eef2f7 55%, #f9fafb 100%)"
    : "rgba(15, 23, 42, 0.4)";

  const educations = [
    {
      degree: "Doutorado (em andamento)",
      institution: "CEFET/MG",
      course: "Modelagem Matemática e Computacional",
      period: "2025 - atual",
      description: "Linha de pesquisa em sistemas inteligentes. Orientador: Alisson Marques da Silva."
    },
    {
      degree: "Mestrado Profissional",
      institution: "UNIMONTES",
      course: "Modelagem Computacional e Sistemas",
      period: "2016 - 2019",
      description: "Título: Monitoramento no Processo de Desidratação de Uvas Baseado em Imagens Digitais e Sistemas Inteligentes. Orientador: Dr. Maurílio José Inácio. Coorientador: Dr. Rodolpho Cézar dos Reis Tinini."
    },
    {
      degree: "Especialização",
      institution: "UFLA",
      course: "Matemática e Estatística",
      period: "2008 - 2009",
      description: "Trabalho de Qualificação. Orientador: Paulo César Lima."
    },
    {
      degree: "Especialização",
      institution: "FINOM",
      course: "Matemática",
      period: "2008",
      description: "Título: A matemática Financeira Aplicada em Empréstimos e Financiamentos Bancários. Orientador: Maria Marlene Rodrigues Souza."
    },
    {
      degree: "Graduação",
      institution: "FEMC",
      course: "Engenharia de Computação",
      period: "2010 - 2014",
      description: "Título: Sistema de Identificação de Bovídeos Usando Radiofrequência por Identificação (RFID). Orientador: Alexandre Dantas Dias."
    },
    {
      degree: "Graduação",
      institution: "UNIMONTES",
      course: "Matemática",
      period: "2004 - 2007",
      description: "Formação em Matemática."
    }
  ];

  const skills = [
    {
      name: "HTML5/CSS3",
      icon: "images/skills//html.svg",
      level: 95,
    },
    {
      name: "JavaScript",
      icon: "images/skills/javascript.svg",
      level: 85,
    },
    {
      name: "React.js",
      icon: "images/skills/react.svg",
      level: 70,
    },
    {
      name: "Node.js",
      icon: "images/skills/nodejs.svg",
      level: 65,
    },
    {
      name: "Django",
      icon: "images/skills/django.svg",
      level: 80,
    },
    {
      name: "Django Ninja",
      icon: "images/skills/djangoNinja.png",
      level: 70,
    },
    {
      name: "Python",
      icon: "images/skills/python.svg",
      level: 80,
    },
    {
      name: "Spring Boot",
      icon: "images/skills/Spring_Boot.svg",
      level: 60,
    },
    {
      name: "Docker",
      icon: "images/skills/docker.svg",
      level: 50,
    },
    {
      name: "Nginx",
      icon: "images/skills/nginx.svg",
      level: 50,
    },
    {
      name: "PHP",
      icon: "images/skills/php.svg",
      level: 40,
    },
    {
      name: "Vue.js",
      icon: "images/skills/vue.svg",
      level: 20,
    },
    {
      name: "Angular.js",
      icon: "images/skills/angular.svg",
      level: 20,
    },
    {
      name: "typescript.js",
      icon: "images/skills/typescript.svg",
      level: 40,
    },
  ];

  const languages = [
    {
      language: "Português",
      level: "Nativo"
    },
    {
      language: "Espanhol",
      level: "Básico (leitura e comunicação simples)"
    },
    {
      language: "Inglês",
      level: "Intermediário (leitura técnica e documentação)"
    }
  ];

  return (
    <section
      className="relative pt-20 pb-16"
      id="skills"
      style={{ background }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-3 mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Formação & stack
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Educação e habilidades</h2>
          <p className="text-slate-300">
            Base sólida em modelagem, dados e engenharia para construir e ensinar tecnologia.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Habilidades */}
          <div className="card rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 tracking-tight flex items-center justify-center gap-2">
                <HiCodeBracketSquare className="h-7 w-7 text-cyan-300 [.light_&]:text-cyan-700" />
                Habilidades Técnicas
              </h2>
              <p className="text-slate-400 mt-2 text-base">Principais tecnologias e stacks que domino para desenvolvimento de soluções.</p>
            </div>
            <div className="flex flex-col gap-4">
              {skills
                .sort((a, b) => b.level - a.level)
                .map((skill, index) => (
                  <div key={`skill-${index}`} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/10">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-8 w-8 rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-800 dark:text-white">{skill.name}</p>
                      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-white/10">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Formação */}
          <div className="card rounded-2xl p-6">
            <div className="mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 tracking-tight flex items-center justify-center gap-2">
                <HiAcademicCap className="h-7 w-7 text-cyan-300 [.light_&]:text-cyan-700" />
                Formação Acadêmica
              </h2>
              <p className="text-slate-400 mt-2 text-base">Trajetória educacional e principais títulos obtidos.</p>
            </div>
            <div className="flex flex-col gap-4 text-slate-200">
              {educations.map((education, index) => (
                <div
                  key={`education-${index}`}
                  className="rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-4 flex flex-col gap-1 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <span className="text-base font-bold text-slate-800 dark:text-white">{education.course}</span>
                    <span className="text-xs text-cyan-700 dark:text-cyan-200">{education.period}</span>
                  </div>
                  <span className="text-sm text-cyan-700 dark:text-cyan-100 font-semibold">{education.degree} <span className="mx-1">|</span> {education.institution}</span>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{education.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Idiomas */}
          <div className="card rounded-2xl p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 tracking-tight mb-6 text-center">Idiomas</h2>
            <div className="flex flex-col gap-4">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-4 flex flex-col gap-1 shadow-sm items-center"
                >
                  <span className="text-base font-bold text-slate-800 dark:text-white mb-1">{lang.language}</span>
                  <span className="text-sm text-cyan-700 dark:text-cyan-100 font-semibold">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
