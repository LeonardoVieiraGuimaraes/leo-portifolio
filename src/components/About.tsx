import { differenceInYears } from "date-fns";
import { FaGithub } from "react-icons/fa";
import { getImagePath } from "../utils/paths";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme ? useTheme() : { theme: "dark" };
  const isLight = theme === "light";
  const background = isLight
    ? "linear-gradient(180deg, #f9fafb 0%, #eef2f7 55%, #f9fafb 100%)"
    : "linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)";

  const birthDate = new Date(1984, 10 - 1, 2);
  const today = new Date();
  const age = differenceInYears(today, birthDate);

  return (
    <section
      className="relative text-white pt-10 pb-10"
      id="about"
      style={{ background }}
    >
      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Sobre
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Sobre mim
          </h2>
          <p className="text-slate-300">
            {age} anos, professor universitário e desenvolvedor full stack. Uso engenharia e matemática para transformar produtos digitais e experiências de aprendizagem.
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
            <div className="space-y-4 text-slate-200 leading-relaxed text-justify">
              <p>
                Mestre em Modelagem Computacional e Sistemas (UNIMONTES) e doutorando em Modelagem Computacional (CEFET/MG). Atuo em APIs, front-ends e automações, leciono Arquitetura Web, Programação e Banco de Dados, e apoio projetos de TI no NIM (Cidade Administrativa).
              </p>
              <p>
                No GitHub compartilho projetos variados: dashboards e automações em Python/Node, APIs em Django/Django Ninja e Spring Boot, front-ends em React/TypeScript e protótipos mobile com React Native. Foco em código limpo, documentação e entregas reprodutíveis.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/LeonardoVieiraGuimaraes?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary border border-white/20 hover:border-white/40 flex items-center gap-2"
              >
                <FaGithub className="h-5 w-5" />
                Ver repositórios no GitHub
              </a>
              <a
                href="https://www.instagram.com/leonardo.vieira.guimaraes"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary border border-pink-400 hover:border-pink-500 flex items-center gap-2"
                style={{ marginLeft: 0 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5" aria-label="Instagram logo"><path fill="#E1306C" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1C385.7 9.9 354.3 1.7 319 0 283.3-1.7 164.7-1.7 129 0 93.7 1.7 62.3 9.9 36.9 36.2 9.9 62.3 1.7 93.7 0 129c-1.7 35.3-1.7 153.9 0 189.6 1.7 35.3 9.9 66.7 36.2 92.1 26.1 26.1 57.5 34.3 92.1 36.2 35.3 1.7 153.9 1.7 189.6 0 35.3-1.7 66.7-9.9 92.1-36.2 26.1-26.1 34.3-57.5 36.2-92.1 1.7-35.3 1.7-153.9 0-189.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5C121.1 9 190.9 11.7 224 11.7s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z"/></svg>
                Instagram
              </a>
              <a
                href="https://orcid.org/0009-0000-3118-4664"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary border border-green-400 hover:border-green-500 flex items-center gap-2"
                style={{ marginLeft: 0 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5" aria-label="ORCID logo"><circle cx="128" cy="128" r="128" fill="#A6CE39"/><path d="M86.3 186.2H69.7V69.8h16.6v116.4zm-8.3-132.2c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1 11.1 5 11.1 11.1-5 11.1-11.1 11.1zm53.2 132.2h-16.6V69.8h16.6v116.4zm44.2-58.2c0 16.2-4.7 28.7-14.1 37.2-8.2 7.3-19.5 11-33.7 11h-7.2V69.8h7.2c14.2 0 25.5 3.7 33.7 11 9.4 8.5 14.1 21 14.1 37.2zm-16.6 0c0-11.2-2.6-19.5-7.8-24.7-4.2-4.2-10.7-6.3-19.5-6.3h-2.2v62.1h2.2c8.8 0 15.3-2.1 19.5-6.3 5.2-5.2 7.8-13.5 7.8-24.8z" fill="#fff"/></svg>
                ORCID: 0009-0000-3118-4664
              </a>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 mt-4">
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
