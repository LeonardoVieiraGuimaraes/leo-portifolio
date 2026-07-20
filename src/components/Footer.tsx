import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowUpRight, HiEnvelope } from "react-icons/hi2";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/LeonardoVieiraGuimaraes/", icon: FaGithub },
  { name: "LinkedIn", url: "https://linkedin.com/in/leonardo-vieira-guimaraes", icon: FaLinkedin },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/[0.07] bg-[#07101f] [.light_&]:border-slate-200 [.light_&]:bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-white/[0.07] pb-12 md:flex-row md:items-end md:justify-between [.light_&]:border-slate-200">
          <div>
            <p className="eyebrow">Vamos conversar</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl [.light_&]:text-slate-950">
              Procurando um desenvolvedor que entende o problema antes de escrever o código?
            </h2>
          </div>
          <a href="mailto:leonardovieiraxy@gmail.com" className="button inline-flex shrink-0 items-center justify-center gap-2">
            <HiEnvelope className="h-4 w-4" />
            Enviar e-mail
          </a>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-200 [.light_&]:text-slate-800">Leonardo Vieira Guimarães</p>
            <p className="mt-1 text-xs">Backend · Software Engineering · Belo Horizonte</p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="social-button" aria-label={name}>
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a href="https://orcid.org/0009-0000-3118-4664" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-sky-300 [.light_&]:hover:text-sky-700">
              ORCID <HiArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
