import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { getImagePath } from "../utils/paths";
const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/LeonardoVieiraGuimaraes/",
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/leonardo-vieira-guimaraes",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/leonardo.vieira.guimaraes",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" {...props}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1C385.7 9.9 354.3 1.7 319 0 283.3-1.7 164.7-1.7 129 0 93.7 1.7 62.3 9.9 36.9 36.2 9.9 62.3 1.7 93.7 0 129c-1.7 35.3-1.7 153.9 0 189.6 1.7 35.3 9.9 66.7 36.2 92.1 26.1 26.1 57.5 34.3 92.1 36.2 35.3 1.7 153.9 1.7 189.6 0 35.3-1.7 66.7-9.9 92.1-36.2 26.1-26.1 34.3-57.5 36.2-92.1 1.7-35.3 1.7-153.9 0-189.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5C121.1 9 190.9 11.7 224 11.7s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z"/></svg>
    ),
  },
  {
    name: "ORCID",
    url: "https://orcid.org/0009-0000-3118-4664",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" {...props}><circle cx="128" cy="128" r="128" fill="#A6CE39"/><path d="M86.3 186.2H69.7V69.8h16.6v116.4zm-8.3-132.2c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1 11.1 5 11.1 11.1-5 11.1-11.1 11.1zm53.2 132.2h-16.6V69.8h16.6v116.4zm44.2-58.2c0 16.2-4.7 28.7-14.1 37.2-8.2 7.3-19.5 11-33.7 11h-7.2V69.8h7.2c14.2 0 25.5 3.7 33.7 11 9.4 8.5 14.1 21 14.1 37.2zm-16.6 0c0-11.2-2.6-19.5-7.8-24.7-4.2-4.2-10.7-6.3-19.5-6.3h-2.2v62.1h2.2c8.8 0 15.3-2.1 19.5-6.3 5.2-5.2 7.8-13.5 7.8-24.8z" fill="#fff"/></svg>
    ),
  },
];

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const background = isLight ? "var(--panel)" : "rgba(15, 23, 42, 0.8)";
  const borderColor = "var(--border)";

  return (
    <footer
      id="footer"
      className="border-t"
      style={{ backgroundColor: background, borderColor }}
    >
      <div className="container mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <img src={getImagePath("images/logo.svg")} alt="Logo" className="h-12 w-auto" />
          <div>
            <p className="text-white font-semibold">Leonardo Vieira Guimarães</p>
            <p className="text-xs text-slate-400">Portfólio • Produtos digitais, dados e educação</p>
          </div>
        </div>
        <ul className="flex flex-nowrap items-center gap-5 md:gap-6">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-cyan-300"
              >
                {typeof link.icon === 'function'
                  ? (link.icon.name === 'FaGithub' || link.icon.name === 'FaLinkedin')
                    ? <link.icon size={22} />
                    : link.icon({ width: 22, height: 22 })
                  : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
