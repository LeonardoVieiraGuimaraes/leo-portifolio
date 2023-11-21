import { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaLaptopCode,
  FaArrowUp,
  FaTools,
  FaBook,
  FaVideo,
} from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", icon: <FaHome />, href: "#" },
    { name: "Sobre", icon: <FaInfoCircle />, href: "#about" },
    { name: "Serviços", icon: <FaLaptopCode />, href: "#services" },
    {
      name: "Projetos",
      icon: dropdownOpen ? (
        <FaArrowUp className="transform transition-transform duration-500 rotate-180" />
      ) : (
        <FaArrowUp className="transform transition-transform duration-500" />
      ),
      href: "#projects",
    },
    { name: "Skills", icon: <FaTools />, href: "#skills" },
    { name: "Fale Comigo", icon: <FaEnvelope />, href: "#contact" },
  ];

  const projects = [
    { name: "Academicos", icon: <FaBook />, href: "#projectsAcademics" },
    {
      name: "Desenlvolvedor",
      icon: <FaLaptopCode />,
      href: "#projectsDeveloper",
    },
    { name: "Video Aulas", icon: <FaVideo />, href: "#projectsProfessor" },
  ];

  return (
    <header>
      <nav className="bg-gray-800 fixed w-full z-50 py-2 ">
        <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
              <div className="flex-shrink-0">
                <a href="/">
                  <img
                    className="block lg:hidden h-16 w-auto"
                    src="images/logo.svg"
                    alt="Logo"
                  />
                  <img
                    className="hidden lg:block h-16 w-auto"
                    src="images/logo.svg"
                    alt="Logo"
                  />
                </a>
              </div>
              <div className="hidden md:block md:ml-6 ">
                <div className="flex space-x-4 ">
                  {navLinks.map((link, index) =>
                    link.name === "Projetos" ? (
                      <div className="relative" key={index}>
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md flex items-center font-headline text-xl font-semibold"
                          key={index}
                        >
                          {link.icon}
                          <span className="ml-2">{link.name}</span>
                        </button>
                        {dropdownOpen && (
                          <div className="absolute left-0 w-auto pt-2 pb-2  bg-gray-800">
                            {projects.map((projects, index) => (
                              <a
                                key={index}
                                href={projects.href}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center"
                              >
                                {projects.icon}
                                <span className="ml-2">{projects.name}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        key={index}
                        href={link.href}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md flex items-center font-headline text-xl font-semibold"
                      >
                        {link.icon}
                        <span className="ml-2">{link.name}</span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) =>
              link.name === "Projetos" ? (
                <div className="relative" key={index}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center"
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </button>
                  {dropdownOpen && (
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {projects.map((projects, index) => (
                        <a
                          key={index}
                          href={projects.href}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center"
                        >
                          {projects.icon}
                          <span className="ml-2">{projects.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center"
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </a>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
