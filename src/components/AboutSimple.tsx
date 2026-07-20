import { NavLink } from "react-router-dom";
import { getImagePath } from "../utils/paths";

export default function AboutSimple() {
  return (
    <section className="container mx-auto px-4 pt-24 pb-16" id="about">
      <div className="relative mx-auto max-w-6xl">
        <div className="card relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-6 md:p-8">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-700 dark:text-cyan-200">Sobre mim</h2>
              <p className="text-slate-500 dark:text-slate-200">
                Sou desenvolvedor backend, Engenheiro da Computação, mestre e doutorando em Modelagem Matemática e Computacional. Desenvolvo sistemas, APIs, integrações e automações com foco em confiabilidade e valor para o usuário.
                <span className="mt-2 block font-semibold text-cyan-700 dark:text-cyan-200">Python, Django, Java, Spring Boot, SQL, Docker e Linux.</span>
                <span className="mt-1 block">Ciência de Dados, pesquisa e docência complementam minha atuação técnica.</span>
              </p>
              <div>
                <NavLink
                  to="/sobre"
                  className={({ isActive }) =>
                    `button-secondary inline-flex items-center gap-2 ${isActive ? "opacity-90" : ""}`
                  }
                  title="Ver detalhes"
                >
                  Ver mais detalhes
                </NavLink>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-lg">
                <img
                  src={getImagePath("images/fotoInicial.jpg")}
                  alt="Leonardo Vieira Guimarães"
                  className="w-full h-full object-cover -translate-x-3 translate-y-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
