import { HiArrowUpRight, HiAcademicCap, HiCodeBracket, HiPresentationChartLine } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { getImagePath } from "../utils/paths";

const credentials = [
  { label: "Engenharia da Computação", icon: HiCodeBracket },
  { label: "Mestre e doutorando", icon: HiAcademicCap },
  { label: "Professor de Tecnologia", icon: HiPresentationChartLine },
];

export default function AboutSimple() {
  return (
    <section className="py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-slate-800">
              <img
                src={getImagePath("images/fotoInicial.jpg")}
                alt="Leonardo Vieira Guimarães"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold text-white">Leonardo Vieira Guimarães</p>
                <p className="mt-1 text-xs text-slate-200">Belo Horizonte, MG · Brasil</p>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-14">
              <p className="eyebrow">Sobre mim</p>
              <h2 className="section-title">Engenharia, domínio de negócio e comunicação.</h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-400 [.light_&]:text-slate-600">
                <p>
                  Sou desenvolvedor backend e Engenheiro da Computação. Construo sistemas, APIs, integrações e automações com atenção à arquitetura, confiabilidade e experiência de quem usa.
                </p>
                <p>
                  Minha atuação reúne software, setor público, saúde e pesquisa. O mestrado, o doutorado em andamento e a docência ampliam minha capacidade de investigar problemas complexos e explicar decisões técnicas com clareza.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {credentials.map(({ label, icon: Icon }) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.025] p-4 [.light_&]:border-slate-200 [.light_&]:bg-slate-50">
                    <Icon className="h-5 w-5 text-sky-300 [.light_&]:text-sky-700" />
                    <p className="mt-3 text-sm font-medium leading-5 text-slate-200 [.light_&]:text-slate-800">{label}</p>
                  </div>
                ))}
              </div>

              <NavLink to="/sobre" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200 [.light_&]:text-sky-700">
                Conheça minha trajetória
                <HiArrowUpRight className="h-4 w-4" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
