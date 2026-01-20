import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { getImagePath } from "../utils/paths";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Início", to: "/inicio" },
    { name: "Projetos", to: "/projects" },
    { name: "Habilidades", to: "/skills" },
    { name: "Experiência", to: "/experience" },
    { name: "Sobre", to: "/sobre" },
    { name: "Contato", to: "/contact" },
  ];

  const navItemClass = (isActive: boolean) =>
    `px-2 py-3 rounded-md font-headline text-base font-medium transition leading-none ${
      isActive ? "text-white bg-white/10 border-b-2 border-cyan-400" : "text-slate-200 hover:text-white hover:bg-white/5"
    }`;

  return (
    <header>
      <nav className="fixed z-50 w-full border-b border-white/5 dark:border-white/5 light:border-blue-500/20 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/90 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                title={`Mudar para ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="flex-1 md:justify-between flex items-center  md:items-stretch">
              <div className="flex-shrink-0">
                <NavLink to="/" className={({ isActive }) => navItemClass(isActive)} onClick={() => setIsOpen(false)}>
                  <img
                    className="block md:hidden h-14 w-auto"
                    src={getImagePath("images/logo.svg")}
                    alt="Logo"
                  />
                  <img
                    className="hidden md:block h-10 w-auto"
                    src={getImagePath("images/logo.svg")}
                    alt="Logo"
                  />
                </NavLink>
              </div>
              <div className="hidden md:block md:ml-4 ">
                <div className="flex space-x-2 items-center">
                  {navLinks.map((link, index) => (
                    <NavLink
                      key={index}
                      to={link.to}
                      className={({ isActive }) => navItemClass(isActive)}
                      title={link.name}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                  <button
                    onClick={toggleTheme}
                    className="text-slate-200 hover:text-white hover:bg-white/5 px-3 py-5 rounded-md flex items-center justify-center font-headline text-lg font-semibold transition ml-2 leading-none"
                    title={`Mudar para ${theme === "dark" ? "light" : "dark"} mode`}
                  >
                    {theme === "dark" ? <FaSun /> : <FaMoon />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-4 py-3 flex flex-col gap-1 items-start">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) => navItemClass(isActive) + " w-full text-left"}
                title={link.name}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
