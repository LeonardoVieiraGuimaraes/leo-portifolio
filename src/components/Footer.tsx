import {
  FaGithub,
  // FaDiscord,
  // FaInstagram,
  // FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/LeonardoVieiraGuimaraes/",
    icon: FaGithub,
  },
  // {
  //   name: "Discord",
  //   url: "https://discord.gg/zDyXDFC8",
  //   icon: FaDiscord,
  // },
  // {
  //   name: "Instagram",
  //   url: "https://instagram.com/yourusername",
  //   icon: FaInstagram,
  // },
  // {
  //   name: "Facebook",
  //   url: "https://facebook.com/yourusername",
  //   icon: FaFacebook,
  // },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/Leonard24081612",
  //   icon: FaXTwitter,
  // },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/leonardo-vieira-guimaraes",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/5 bg-slate-950/80">
      <div className="container mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo.svg" alt="Logo" className="h-12 w-auto" />
          <div>
            <p className="text-white font-semibold">Leonardo Vieira Guimarães</p>
            <p className="text-xs text-slate-400">Portfólio • Produtos digitais, dados e educação</p>
          </div>
        </div>
        <ul className="flex flex-nowrap items-center gap-3">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-cyan-300"
              >
                <link.icon size={22} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
