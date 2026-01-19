import { differenceInYears } from "date-fns";

export default function About() {
  const birthDate = new Date(1984, 10 - 1, 2); // Substitua pela sua data de nascimento (ano, mês - 1, dia)
  const today = new Date();
  const age = differenceInYears(today, birthDate);

  return (
    <section className="container mx-auto my-12 px-4" id="about">
      {/* <a
          href="https://www.instagram.com/seu_usuario_do_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 hover:underline ml-4"
          title="Meu Instagram"
        >
          <FaInstagram size={24} />
        </a> */}

      <div className="relative mx-auto mt-8 max-w-6xl">
        <div className="card relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.12),transparent_30%)]" />
          <div className="relative space-y-6">
            <div className="text-center space-y-3">
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
              Matemática e Computacional (CEFET/MG). Atuo criando APIs, front-ends e automações, e
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
          {/* <div className=" w-full h-full rounded-lg bg-gray-50 p-4 text-center">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p className="text-center">
              <span className="mr-1">Mue nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Leonardo Vieira Guimarães
              </span>
            </p>
            <div className="mt-4 w-full text-sm">
              <div>
                <div className="flex">
                  <div className="font-headline font-bold uppercase text-blue-900 mr-6">
                    Idade:
                  </div>
                  <div>{age}</div>
                </div>
                <div className="flex">
                  <div className="font-headline font-bold uppercase text-blue-900 mr-6">
                    Celular:
                  </div>
                  <div>
                    <a
                      href="tel:+5538999352408"
                      className="underline hover:text-blue-800"
                    >
                      +55 (38)99935-2408
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </div>
                  <div>
                    <a
                      href="mailto:leonardovieiraxy@hotmail.com"
                      className="underline hover:text-blue-800"
                    >
                      leonadovieiraxy@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </div>
                  <div>
                    <a
                      href="https://maps.app.goo.gl/J8GYMwibv7pjR8HE7"
                      className="underline hover:text-blue-800"
                    >
                      Sao Francisco - MG
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </div>
                  <div>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-profile bg-cover bg-center md:-left-1 md:-top-1 md:h-64 md:w-40"></div>
        </div>
      </div>
    </section>
  );
}
