import { differenceInYears } from "date-fns";
import { FaGithub } from "react-icons/fa";
import { getImagePath } from "../utils/paths";

export default function About() {
  const birthDate = new Date(1984, 10 - 1, 2);
  const today = new Date();
  const age = differenceInYears(today, birthDate);

  return (
    <section className="container mx-auto px-4 pt-20 pb-16" id="about">
      <div className="relative mx-auto mt-8 max-w-6xl">
        <div className="card relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.12),transparent_30%)]" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Foto - lado direito em desktop */}
            <div className="order-first md:order-last flex justify-center md:col-span-1">
              <img
                src={getImagePath("images/fotoSobre.jpg")}
                alt="Leonardo Vieira Guimarães"
                className="h-56 w-44 md:h-72 md:w-56 rounded-lg object-cover flex-shrink-0 shadow-lg"
              />
            </div>
            
            {/* Conteúdo - lado esquerdo em desktop */}
            <div className="space-y-6 md:col-span-2">
              <div className="text-left space-y-3">
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                  Sobre mim
                </h2>
                <p className="text-slate-300">
                  {age} anos, professor universitário e desenvolvedor full stack. Uso engenharia e
                  matemática para transformar produtos digitais e experiências de aprendizagem.
                </p>
              </div>

              <div className="space-y-4 text-slate-200 leading-relaxed text-justify">
                <p>
                  Mestre em Modelagem Computacional e Sistemas (UNIMONTES) e doutorando em Modelagem
                  Computacional (CEFET/MG). Atuo em APIs, front-ends e automações, leciono Arquitetura Web,
                  Programação e Banco de Dados, e apoio projetos de TI no NIM (Cidade Administrativa).
                </p>
                <p>
                  No GitHub compartilho projetos variados: dashboards e automações em Python/Node, APIs em
                  Django/Django Ninja e Spring Boot, front-ends em React/TypeScript e protótipos mobile com
                  React Native. Foco em código limpo, documentação e entregas reprodutíveis.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                  </span>
                  Disponível para projetos e oportunidades
                </div>
                <a
                  href="https://github.com/LeonardoVieiraGuimaraes?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary border border-white/20 hover:border-white/40 flex items-center gap-2"
                >
                  <FaGithub className="h-5 w-5" />
                  Ver repositórios no GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
