import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/LeonardoVieiraGuimaraes/", icon: FaGithub },
  { name: "LinkedIn", url: "https://linkedin.com/in/leonardo-vieira-guimaraes", icon: FaLinkedin },
];

const footerLinks = [
  { name: "Projetos", to: "/projects" },
  { name: "Competências", to: "/skills" },
  { name: "Experiência", to: "/experience" },
  { name: "Sobre", to: "/sobre" },
  { name: "Contato", to: "/contact" },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/[0.07] bg-[#07101f] [.light_&]:border-slate-200 [.light_&]:bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-semibold text-slate-100 [.light_&]:text-slate-900">Leonardo Vieira Guimarães</p>
            <p className="mt-1 text-sm text-slate-400 [.light_&]:text-slate-600">
              Backend · Software Engineering · Belo Horizonte
            </p>
          </div>

          <nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
            {footerLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-slate-400 transition hover:text-sky-300 [.light_&]:text-slate-600 [.light_&]:hover:text-sky-700"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/[0.07] pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between [.light_&]:border-slate-200">
          <p className="text-xs">© {new Date().getFullYear()} Leonardo Vieira Guimarães</p>
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
