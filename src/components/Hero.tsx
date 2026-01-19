import { HiArrowDownTray } from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const background = isLight
    ? "radial-gradient(circle at 12% 18%, rgba(14,165,233,0.08), transparent 26%), radial-gradient(circle at 82% 0%, rgba(124,58,237,0.08), transparent 32%), linear-gradient(180deg, #f9fafb 0%, #eef2f7 62%, #f9fafb 100%)"
    : "linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)";

  const glowCyan = isLight ? "bg-cyan-400/15" : "bg-cyan-500/10";
  const glowViolet = isLight ? "bg-violet-400/14" : "bg-violet-500/10";

  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="absolute inset-0" style={{ background }} />
      <div className={`absolute -left-20 -top-32 h-80 w-80 rounded-full ${glowCyan} blur-3xl`} />
      <div className={`absolute right-0 top-10 h-72 w-72 rounded-full ${glowViolet} blur-3xl`} />

      <div className="relative container mx-auto flex max-w-6xl flex-col gap-8 p-6 pb-24 pt-24 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-3 text-sm text-cyan-200 [.light_&]:text-cyan-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-semibold uppercase tracking-wide [.light_&]:border-cyan-200 [.light_&]:bg-cyan-50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 [.light_&]:bg-emerald-600" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 [.light_&]:bg-emerald-600" />
              </span>
              Disponível para novos projetos
            </span>
            <span className="text-slate-300">Professor | Dev Full Stack</span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Transformando dados e código em produtos digitais que entregam impacto real.
          </h1>

          <p className="text-lg text-slate-300">
            Sou Leonardo Vieira Guimarães: desenvolvedor full stack, professor universitário e
            pesquisador. Combino engenharia, matemática e produto para criar soluções web, mobile
            e acadêmicas que resolvem problemas de negócio e educação.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://docs.google.com/document/d/1hLeOBX7zAz-BtYLxXKWK6RtYEWqWnCo4Z5IA5Kvwzsk/edit?usp=drive_link"
              target="_blank"
              rel="noopener"
              className="button flex items-center gap-2"
            >
              <HiArrowDownTray className="h-5 w-5" />
              Currículo
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-vieira-guimaraes/"
              target="_blank"
              rel="noopener"
              className="button flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <FaLinkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/LeonardoVieiraGuimaraes"
              target="_blank"
              rel="noopener"
              className="button flex items-center gap-2 bg-gray-800 hover:bg-gray-900"
            >
              <FaGithub className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4869231A0&tokenCaptchar=03AFcWeA5Xz3lD3vn5HMS9GhkTKnLTFNnn8jIdHmV_gGRxrMmhMj41i_6Lu2oqfAtLP5wyFXdVZJpjXvvBdtYwHXjTs7bE8nxmxjvutCykBoUD2ABe3QL8PkNAaHKTtLibwnOmDCBThU6EIF0OCwoUk3e6_hV4UtOLpidaeAc6fBZ14zZG19qOnFiRwAKpKlyL0jk1LNgurGjYKluX58WYGzMccWrP14UUtkFZSYCZDIBW4iSf0xGtUqMQwkZc_ESopuXY1_gWxABMsK8llBEOZIvkifBmUADeP1rEEQbejucQ03IqK8ZGZfN99DsnBlHuL9GVfkhai8JypHpWhybU2GuFky2xySYJMSxkDwiepFsyOuYY07WsmkoTjvMSawClnvm06zTG6_6WgBXjejxcFD3D3Vfa-Ay7FpMvh3pMXn5k0bNz2U374mFAC7Iv4HXSjcDgNAulCcPKNOtn2P_E8qru4Ryhl1nhWmctHNrd0mMifRWb9T1DzKINX51NK7NmU6ZOFE-LO4MpwNgG6xl-ncQYWWolaYe7BTRm1rPxdHJWH_GeLHQnRFeaOLWrtvZMO6tbdUw1hmo4"
              target="_blank"
              rel="noopener"
              className="button-secondary flex items-center gap-2 border border-white/20 hover:border-white/40"
            >
              <HiArrowDownTray className="h-5 w-5" />
              Currículo Lattes
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
            {[
              "+12 anos docência",
              "+8 anos desenvolvimento",
              "Eng. Comp. + Mat.",
            ].map((item) => (
              <div
                key={item}
                className="card rounded-lg px-4 py-3 text-xs text-slate-200 sm:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="card relative w-80 min-h-[18rem] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.2),transparent_35%)]" />
            <div className="relative flex h-full flex-col justify-start gap-3">
              <div>
                <p className="text-sm uppercase tracking-wide text-cyan-200">Perfil</p>
                <h3 className="text-2xl font-semibold text-white">Leonardo V. Guimarães</h3>
                <p className="text-slate-300">Belo Horizonte • Remoto Brasil</p>
              </div>
              <div className="space-y-2 text-sm text-slate-200">
                <p>Full Stack • Frontend: React, TypeScript, Tailwind</p>
                <p>Backend: Node.js, Python, Django, Django Ninja, Spring Boot</p>
                <p>Professor universitário • Doutorando Modelagem Computacional</p>
                <p className="text-cyan-200">Disponível para projetos e vagas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
