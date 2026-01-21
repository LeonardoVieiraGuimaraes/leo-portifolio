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
    { name: "HTML5/CSS3", icon: "https://simpleicons.org/icons/html5.svg", level: 95 },
    { name: "JavaScript", icon: "https://simpleicons.org/icons/javascript.svg", level: 90 },
    { name: "TypeScript", icon: "https://simpleicons.org/icons/typescript.svg", level: 85 },
    { name: "React.js", icon: "https://simpleicons.org/icons/react.svg", level: 90 },
    { name: "Next.js", icon: "https://simpleicons.org/icons/nextdotjs.svg", level: 80 },
    { name: "Node.js", icon: "https://simpleicons.org/icons/nodedotjs.svg", level: 85 },
    { name: "Express.js", icon: "https://simpleicons.org/icons/express.svg", level: 80 },
    { name: "Python", icon: "https://simpleicons.org/icons/python.svg", level: 90 },
    { name: "Django", icon: "https://simpleicons.org/icons/django.svg", level: 80 },
    { name: "Spring Boot", icon: "https://simpleicons.org/icons/springboot.svg", level: 70 },
    { name: "Java", icon: "https://simpleicons.org/icons/java.svg", level: 75 },
    { name: "C#", icon: "https://simpleicons.org/icons/csharp.svg", level: 60 },
    { name: "PostgreSQL", icon: "https://simpleicons.org/icons/postgresql.svg", level: 85 },
    { name: "MySQL", icon: "https://simpleicons.org/icons/mysql.svg", level: 80 },
    { name: "MongoDB", icon: "https://simpleicons.org/icons/mongodb.svg", level: 70 },
    { name: "Docker", icon: "https://simpleicons.org/icons/docker.svg", level: 75 },
    { name: "Git", icon: "https://simpleicons.org/icons/git.svg", level: 90 },
    { name: "Linux", icon: "https://simpleicons.org/icons/linux.svg", level: 80 },
    { name: "Figma", icon: "https://simpleicons.org/icons/figma.svg", level: 60 },
    { name: "Power BI", icon: "https://cdn.worldvectorlogo.com/logos/power-bi.svg", level: 60 },
    { name: "Pandas", icon: "https://simpleicons.org/icons/pandas.svg", level: 70 },
    { name: "Numpy", icon: "https://simpleicons.org/icons/numpy.svg", level: 65 },
    { name: "Bootstrap", icon: "https://simpleicons.org/icons/bootstrap.svg", level: 60 },
    { name: "Tailwind CSS", icon: "https://simpleicons.org/icons/tailwindcss.svg", level: 80 },
    { name: "Jest", icon: "https://simpleicons.org/icons/jest.svg", level: 50 },
    { name: "Cypress", icon: "https://simpleicons.org/icons/cypress.svg", level: 40 },
    { name: "APIs REST", icon: "https://www.svgrepo.com/show/353478/api.svg", level: 90 },
    { name: "GraphQL", icon: "https://simpleicons.org/icons/graphql.svg", level: 40 },
    { name: "Matplotlib", icon: "https://simpleicons.org/icons/matplotlib.svg", level: 50 },
    { name: "Seaborn", icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg", level: 40 },
    { name: "FastAPI", icon: "https://simpleicons.org/icons/fastapi.svg", level: 40 },
    { name: "Flask", icon: "https://simpleicons.org/icons/flask.svg", level: 40 },
    { name: "SASS", icon: "https://simpleicons.org/icons/sass.svg", level: 60 },
    { name: "Redux", icon: "https://simpleicons.org/icons/redux.svg", level: 60 },
    { name: "Vite", icon: "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.svg", level: 70 },
    { name: "Yarn", icon: "https://simpleicons.org/icons/yarn.svg", level: 70 },
    { name: "NPM", icon: "https://simpleicons.org/icons/npm.svg", level: 70 },
    { name: "Jupyter", icon: "https://simpleicons.org/icons/jupyter.svg", level: 60 },
    // IA e Machine Learning
    { name: "TensorFlow", icon: "https://simpleicons.org/icons/tensorflow.svg", level: 60 },
    { name: "Keras", icon: "https://simpleicons.org/icons/keras.svg", level: 60 },
    { name: "PyTorch", icon: "https://simpleicons.org/icons/pytorch.svg", level: 50 },
    { name: "Scikit-learn", icon: "https://simpleicons.org/icons/scikitlearn.svg", level: 65 },
    { name: "OpenAI API", icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", level: 60 },
    { name: "Gemini API", icon: "https://www.svgrepo.com/show/499962/artificial-intelligence-ai.svg", level: 55 },
    { name: "Gestão de Projetos (PMI, PMBOK, Scrum, Kanban, métodos ágeis)", icon: "https://www.svgrepo.com/show/354202/project-management.svg", level: 70 },
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-900 dark:text-cyan-200">
            Formação & stack
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-900 dark:text-cyan-200">Educação e habilidades</h2>
          <p className="text-cyan-700 dark:text-cyan-200">
            Base sólida em modelagem, dados e engenharia para construir e ensinar tecnologia.
          </p>
        </div>


        <div className="flex flex-col gap-8">
          {/* Formação */}
          <div className="card rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 dark:text-cyan-200 tracking-tight flex items-center justify-center gap-2">
                <HiAcademicCap className="h-7 w-7 text-cyan-900 dark:text-cyan-200" />
                Formação Acadêmica
              </h2>
              <p className="text-cyan-700 dark:text-cyan-200 mt-2 text-base">Trajetória educacional e principais títulos obtidos.</p>
            </div>
            <div className="flex flex-col gap-4 text-cyan-900 dark:text-cyan-200">
              {educations.map((education, index) => (
                <div
                  key={`education-${index}`}
                  className="card rounded-lg border border-slate-200 dark:border-white/10 px-4 py-4 flex flex-col gap-1 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <span className="text-base font-bold text-cyan-900 dark:text-cyan-100">{education.course}</span>
                    <span className="text-xs text-cyan-700 dark:text-cyan-200">{education.period}</span>
                  </div>
                  <span className="text-sm text-cyan-700 dark:text-cyan-200 font-semibold">{education.degree} <span className="mx-1">|</span> {education.institution}</span>
                  <p className="text-cyan-700 dark:text-cyan-200 text-sm mt-1">{education.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades */}
          <div className="card rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 dark:text-cyan-200 tracking-tight flex items-center justify-center gap-2">
                <HiCodeBracketSquare className="h-7 w-7 text-cyan-900 dark:text-cyan-200" />
                Habilidades Técnicas
              </h2>
              <p className="text-cyan-700 dark:text-cyan-200 mt-2 text-base">Principais tecnologias e stacks que domino para desenvolvimento de soluções.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 mb-2">Competências Técnicas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter(skill => !["Ensino", "Matemática", "Estatística"].includes(skill.name))
                  .sort((a, b) => b.level - a.level)
                  .map((skill, index) => (
                  <div key={`skill-${index}`} className="card flex items-center gap-4 rounded-lg border border-slate-200 dark:border-white/10 px-4 py-4 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-8 w-8 rounded drop-shadow-sm"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.style.display = 'none';
                          target.insertAdjacentHTML('afterend', `
                            <svg viewBox='0 0 24 24' fill='none' class='h-8 w-8 text-cyan-700 dark:text-cyan-200' xmlns='http://www.w3.org/2000/svg'>
                              <circle cx='12' cy='12' r='11' fill='currentColor' fill-opacity='0.10' />
                              <rect x='3' y='7' width='18' height='10' rx='2' fill='currentColor' fill-opacity='0.2' />
                              <rect x='7' y='3' width='10' height='18' rx='2' fill='currentColor' fill-opacity='0.4' />
                            </svg>
                          `);
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-cyan-900 dark:text-cyan-100">{skill.name}</p>
                      <div className="h-2 w-full rounded-full bg-cyan-100 dark:bg-cyan-500/10">
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
            <div>
              <h3 className="text-lg font-semibold text-cyan-900 dark:text-cyan-300 mb-2">Competências Comportamentais</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Competências comportamentais aprimoradas */}
                {[
                  {
                    name: "Comunicação Clara e Didática",
                    icon: "https://www.svgrepo.com/show/375930/megaphone-announcement.svg",
                    level: 95,
                    desc: "Facilidade para explicar conceitos complexos de forma simples, tanto em ambientes acadêmicos quanto corporativos."
                  },
                  {
                    name: "Trabalho em Equipe Multidisciplinar",
                    icon: "https://www.svgrepo.com/show/375899/teamwork-group.svg",
                    level: 90,
                    desc: "Experiência colaborando com profissionais de diferentes áreas para alcançar objetivos comuns."
                  },
                  {
                    name: "Resolução de Problemas",
                    icon: "https://www.svgrepo.com/show/375927/puzzle-solution.svg",
                    level: 90,
                    desc: "Capacidade analítica para identificar, investigar e solucionar desafios técnicos e pedagógicos."
                  },
                  {
                    name: "Pensamento Crítico e Analítico",
                    icon: "https://www.svgrepo.com/show/375925/brainstorm-idea.svg",
                    level: 90,
                    desc: "Avaliação criteriosa de informações e tomada de decisões fundamentadas."
                  },
                  {
                    name: "Gestão do Tempo e Organização",
                    icon: "https://www.svgrepo.com/show/375911/time-management.svg",
                    level: 85,
                    desc: "Priorização de tarefas e cumprimento de prazos em múltiplos projetos simultâneos."
                  },
                  {
                    name: "Aprendizado Contínuo",
                    icon: "https://www.svgrepo.com/show/375900/learning-education.svg",
                    level: 95,
                    desc: "Busca constante por atualização e novas competências em tecnologia e educação."
                  },
                  {
                    name: "Empatia e Escuta Ativa",
                    icon: "https://www.svgrepo.com/show/375915/heart-empathy.svg",
                    level: 90,
                    desc: "Compreensão das necessidades de alunos, colegas e clientes, promovendo um ambiente colaborativo."
                  },
                  {
                    name: "Liderança e Mentoria",
                    icon: "https://www.svgrepo.com/show/375908/leader-mentoring.svg",
                    level: 85,
                    desc: "Orientação de equipes e desenvolvimento de talentos em ambientes educacionais e de TI."
                  },
                  {
                    name: "Adaptabilidade",
                    icon: "https://www.svgrepo.com/show/375903/adaptability.svg",
                    level: 90,
                    desc: "Facilidade para lidar com mudanças e novos desafios em contextos diversos."
                  }
                ].map((skill, index) => (
                  <div key={`soft-skill-${index}`} className="card flex flex-col gap-2 rounded-lg border border-slate-200 dark:border-white/10 px-4 py-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 dark:border-slate-700">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="h-8 w-8 rounded drop-shadow-sm"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.onerror = null;
                            target.style.display = 'none';
                            target.insertAdjacentHTML('afterend', `
                              <svg viewBox='0 0 24 24' fill='none' class='h-8 w-8 text-cyan-700 dark:text-cyan-200' xmlns='http://www.w3.org/2000/svg'>
                                <circle cx='12' cy='12' r='11' fill='currentColor' fill-opacity='0.10' />
                                <rect x='3' y='7' width='18' height='10' rx='2' fill='currentColor' fill-opacity='0.2' />
                                <rect x='7' y='3' width='10' height='18' rx='2' fill='currentColor' fill-opacity='0.4' />
                              </svg>
                            `);
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-cyan-900 dark:text-cyan-100">{skill.name}</p>
                        <div className="h-2 w-full rounded-full bg-cyan-100 dark:bg-cyan-500/10">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-cyan-700 dark:text-cyan-200 mt-1">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Idiomas */}
          <div className="card rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 dark:text-cyan-200 tracking-tight mb-6 text-center">Idiomas</h2>
            <div className="flex flex-col gap-4">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="card rounded-lg border border-slate-200 dark:border-white/10 px-4 py-4 flex flex-col gap-1 shadow-sm items-center"
                >
                  <span className="text-base font-bold text-cyan-900 dark:text-cyan-100 mb-1">{lang.language}</span>
                  <span className="text-sm text-cyan-700 dark:text-cyan-200 font-semibold">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
