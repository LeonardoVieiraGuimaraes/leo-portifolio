import { FaGithub } from "react-icons/fa";
import { getImagePath } from "../utils/paths";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme ? useTheme() : { theme: "dark" };
  const isLight = theme === "light";
  const background = isLight
    ? "linear-gradient(180deg, #f9fafb 0%, #eef2f7 55%, #f9fafb 100%)"
    : "linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)";

  return (
    <section
      className="relative text-cyan-900 dark:text-cyan-100 pt-10 pb-10"
      id="about"
      style={{ background }}
    >
      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-900 dark:text-cyan-200">
            Sobre
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-900 dark:text-cyan-200">
            Sobre mim
          </h2>
            <p className="text-cyan-900 dark:text-cyan-200">
              Professor universitário e desenvolvedor full stack. Uso engenharia e matemática para transformar produtos digitais e experiências de aprendizagem.
            </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 items-start">
          <div className="order-first md:order-last flex justify-center md:col-span-1">
            <img
              src={getImagePath("images/fotoSobre.jpg")}
              alt="Leonardo Vieira Guimarães"
              className="h-56 w-44 md:h-72 md:w-56 rounded-lg object-cover flex-shrink-0 shadow-lg"
            />
          </div>
          <div className="space-y-6 md:col-span-2">
            <div className="space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed text-justify">
              <p className="text-cyan-900 dark:text-cyan-100">
                Mestre em Modelagem Computacional e Sistemas (UNIMONTES) e doutorando em Modelagem Computacional (CEFET/MG). Atuo em APIs, front-ends e automações, leciono Arquitetura Web, Programação e Banco de Dados, e apoio projetos de TI no NIM (Cidade Administrativa).
              </p>
              <p className="text-cyan-900 dark:text-cyan-100">
                No GitHub compartilho projetos variados: dashboards e automações em Python/Node, APIs em Django/Django Ninja e Spring Boot, <span className="font-semibold text-cyan-900 dark:text-cyan-200">front-ends</span> em <span className="font-semibold text-cyan-900 dark:text-cyan-100">React/TypeScript</span>, <span className="font-semibold text-cyan-900 dark:text-cyan-200">back-end</span> com <span className="font-semibold text-cyan-900 dark:text-cyan-100">Node.js, Django, Spring Boot</span> e protótipos <span className="font-semibold text-cyan-900 dark:text-cyan-200">mobile</span> com <span className="font-semibold text-cyan-900 dark:text-cyan-100">React Native</span>. Foco em código limpo, documentação e entregas reprodutíveis.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/LeonardoVieiraGuimaraes"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary border border-white/20 hover:border-white/40 flex items-center gap-2"
              >
                <FaGithub className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://orcid.org/0009-0000-3118-4664"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary border border-green-400 hover:border-green-500 flex items-center gap-2"
                style={{ marginLeft: 0 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5" aria-label="ORCID logo"><circle cx="128" cy="128" r="128" fill="#A6CE39"/><path d="M86.3 186.2H69.7V69.8h16.6v116.4zm-8.3-132.2c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1 11.1 5 11.1 11.1-5 11.1-11.1 11.1zm53.2 132.2h-16.6V69.8h16.6v116.4zm44.2-58.2c0 16.2-4.7 28.7-14.1 37.2-8.2 7.3-19.5 11-33.7 11h-7.2V69.8h7.2c14.2 0 25.5 3.7 33.7 11 9.4 8.5 14.1 21 14.1 37.2zm-16.6 0c0-11.2-2.6-19.5-7.8-24.7-4.2-4.2-10.7-6.3-19.5-6.3h-2.2v62.1h2.2c8.8 0 15.3-2.1 19.5-6.3 5.2-5.2 7.8-13.5 7.8-24.8z" fill="#fff"/></svg>
                <span className="text-base">ORCID</span>
              </a>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-900 dark:text-cyan-200 mt-4">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              Disponível para projetos e oportunidades
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
