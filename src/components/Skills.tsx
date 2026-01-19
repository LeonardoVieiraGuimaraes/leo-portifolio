import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2";

export default function Skills() {
  const educations = [
    {
      name: "Mestre me Modelagem Computacional e Sistemas | UNIMONTES",
    },
    {
      name: "Graduação Bacharelado em Ciência da Computação | FACIT",
    },
    {
      name: "Especialização em Matemática | Finon",
    },
    {
      name: "Especialização em Matemática e Estatística | UFLA",
    },
    {
      name: "Graduação Licenciatura em Matemática | UNIMONTES",
    },
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
      name: "Python",
      icon: "images/skills/python.svg",
      level: 80,
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
      name: "Java",
      icon: "images/skills/java.svg",
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

  return (
    <section className="bg-slate-900/40" id="skills">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="text-center space-y-3 mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Formação & stack
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Educação e skills</h2>
          <p className="text-slate-300">
            Base sólida em modelagem, dados e engenharia para construir e ensinar tecnologia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card rounded-2xl p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <HiAcademicCap className="h-7 w-7 text-cyan-300" />
              Educação
            </h3>
            <div className="space-y-3 text-slate-200">
              {educations.map((education, index) => (
                <div
                  key={`education-${index}`}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-4 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  <span className="text-sm font-semibold">{education.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card rounded-2xl p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <HiCodeBracketSquare className="h-7 w-7 text-cyan-300" />
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {skills
                .sort((a, b) => b.level - a.level)
                .map((skill, index) => (
                  <div key={`skill-${index}`} className="space-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-8 w-8 rounded"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{skill.name}</p>
                      <div className="h-2 w-full rounded-full bg-white/10">
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
        </div>
      </div>
    </section>
  );
}
