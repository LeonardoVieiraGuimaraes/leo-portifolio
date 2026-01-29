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
            Cientista de Dados & Analista
          </h2>
          <p className="text-cyan-900 dark:text-cyan-200">
            Analista e cientista de dados com forte atuação em projetos de análise preditiva, BI, automação de dados e visualização interativa. Experiência prática em Python, SQL, Power BI, machine learning e storytelling analítico, sempre focando em gerar valor real para negócios e decisões baseadas em dados.
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
                Doutorando e mestre em Modelagem Computacional, com mais de 8 anos de experiência em análise de dados, machine learning, BI e automação de processos. Atualmente atuo no Núcleo de Inovação do IMA, desenvolvendo projetos de ciência de dados, automação, ETL, dashboards interativos e soluções para transformação digital institucional, sempre com foco em resultados práticos e insights acionáveis.
              </p>
              <p className="text-cyan-900 dark:text-cyan-100">
                No GitHub compartilho soluções de ciência de dados, dashboards em Power BI, automações em Python, análises estatísticas e modelos de machine learning. Meu objetivo é transformar dados em decisões estratégicas, com entregas reprodutíveis, código limpo e documentação clara.
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
