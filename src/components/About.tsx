import { differenceInYears } from "date-fns";

export default function About() {
  const birthDate = new Date(1984, 10 - 1, 2);
  const today = new Date();
  const age = differenceInYears(today, birthDate);

  return (
    <section className="container mx-auto my-12 px-4" id="about">
      <div className="relative mx-auto mt-8 max-w-6xl">
        <div className="card relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.12),transparent_30%)]" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Foto - lado direito em desktop */}
            <div className="order-first md:order-last flex justify-center md:col-span-1">
              <div className="h-56 w-44 md:h-72 md:w-56 rounded-lg bg-gray-600 bg-profile bg-cover bg-center flex-shrink-0" />
            </div>
            
            {/* Conteúdo - lado esquerdo em desktop */}
            <div className="space-y-6 md:col-span-2">
              <div className="text-left space-y-3">
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                  Sobre mim
                </h2>
                <p className="text-slate-300">
                  Tenho {age} anos, sou professor universitário e desenvolvedor full stack. Conecto
                  engenharia, matemática e produto para entregar soluções que resolvem problemas de
                  negócio e educação.
                </p>
              </div>

              <p className="text-slate-200 leading-relaxed text-justify">
                Mestre em Modelagem Computacional e Sistemas (UNIMONTES) e doutorando em Modelagem
                Computacional (CEFET/MG). Comecei como aluno em disciplina isolada na UFMG e posteriormente 
                ingressei como aluno regular no doutorado da CEFET. Atuo criando APIs, front-ends e automações, e
                leciono disciplinas de Arquitetura Web, Programação, Banco de Dados, Probabilidade e
                Matemática Financeira. No NIM (Cidade Administrativa de Belo Horizonte) trabalho com
                projetos de TI e suporte ao sistema agropecuário do IMA. Sigo entregando valor e
                aprendendo continuamente.
              </p>

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
                  className="button-secondary border border-white/20 hover:border-white/40"
                >
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
