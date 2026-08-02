import { HiArrowRight, HiArrowUpRight, HiBriefcase } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { getImagePath } from "../utils/paths";
import { featuredExperienceRoles } from "../data/experience";

export default function ExperienceFeatured() {
  return (
    <section className="py-24" id="experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Experiência profissional</p>
            <h2 className="section-title">Três frentes, uma mesma entrega técnica.</h2>
            <p className="section-copy">
              CLT no setor público, atuação PJ/freelance e docência — trajetórias que se reforçam em capacidade analítica e comunicação técnica.
            </p>
            <a href={getImagePath("curriculo-leonardo-fullstack.pdf")} download className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200 [.light_&]:text-sky-700">
              Currículo completo
              <HiArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative space-y-4 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-white/10 [.light_&]:before:bg-slate-200">
            {featuredExperienceRoles.map((experience) => (
              <article key={`${experience.role}-${experience.company}`} className="card relative rounded-2xl p-6 pl-16">
                <span className="absolute left-[1.1rem] top-7 grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-slate-900 text-slate-400 [.light_&]:border-slate-300 [.light_&]:bg-white [.light_&]:text-slate-600">
                  <HiBriefcase className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-lg font-semibold text-white [.light_&]:text-slate-950">{experience.role}</h3>
                <p className="mt-1 text-sm text-sky-300 [.light_&]:text-sky-700">{experience.company}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">{experience.summary}</p>
              </article>
            ))}

            <NavLink to="/experience" className="button-secondary inline-flex w-fit items-center gap-2">
              Ver trajetória completa
              <HiArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
