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
      isActive ? "text-cyan-300 dark:text-cyan-200 bg-white/10 border-b-2 border-cyan-400" : "text-slate-500 dark:text-slate-300 hover:text-cyan-300 hover:bg-white/5"
    }`;

  return (
    <header>
      <nav className="w-full px-4 py-2 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center">
          <NavLink to="/" className={({ isActive }) => navItemClass(isActive) + " flex items-center gap-2"} onClick={() => setIsOpen(false)} style={{ maxHeight: '56px', overflow: 'hidden' }}>
            <img
              className="block md:hidden h-12 w-auto max-h-16"
              src={getImagePath("images/logo.svg")}
              alt="Logo"
              style={{ maxHeight: '48px', maxWidth: '140px' }}
            />
            <img
              className="hidden md:block h-12 w-auto max-h-16"
              src={getImagePath("images/logo.svg")}
              alt="Logo"
              style={{ maxHeight: '48px', maxWidth: '140px' }}
            />
            <span className="ml-2 text-xl md:text-2xl font-bold text-cyan-900 dark:text-cyan-200 tracking-tight select-none hidden md:inline">Leonardo Vieira Guimarães</span>
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
              className="text-slate-500 dark:text-slate-300 hover:text-cyan-300 hover:bg-white/5 px-3 py-5 rounded-md flex items-center justify-center font-headline text-lg font-semibold transition ml-2 leading-none"
              title={`Mudar para ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="text-slate-500 dark:text-slate-300 hover:text-cyan-300 hover:bg-white/5 px-3 py-2 rounded-md flex items-center justify-center font-headline text-lg font-semibold transition leading-none"
            title={`Mudar para ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 dark:text-slate-300 hover:text-cyan-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-300"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
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
      </nav>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
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
    </header>
  );
}
