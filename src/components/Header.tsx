import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Projetos", to: "/projects" },
    { name: "Competências", to: "/skills" },
    { name: "Experiência", to: "/experience" },
    { name: "Sobre", to: "/sobre" },
    { name: "Contato", to: "/contact" },
  ];

  const navItemClass = (isActive: boolean) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-sky-500/10 text-sky-300 [.light_&]:bg-sky-50 [.light_&]:text-sky-700"
        : "text-slate-300 hover:bg-white/5 hover:text-white [.light_&]:text-slate-600 [.light_&]:hover:bg-slate-100 [.light_&]:hover:text-slate-950"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/85 backdrop-blur-xl [.light_&]:border-slate-200 [.light_&]:bg-white/90">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-bold text-white shadow-lg shadow-sky-950/30">
            LV
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-semibold text-white [.light_&]:text-slate-950">
              Leonardo Guimarães
            </span>
            <span className="hidden text-xs text-slate-400 sm:block [.light_&]:text-slate-500">
              Backend & Software Engineering
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => navItemClass(isActive)}>
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:border-sky-400/40 hover:text-sky-300 [.light_&]:border-slate-200 [.light_&]:text-slate-600"
            title={`Mudar para o modo ${theme === "dark" ? "claro" : "escuro"}`}
            aria-label={`Mudar para o modo ${theme === "dark" ? "claro" : "escuro"}`}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="ml-3 flex shrink-0 items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 [.light_&]:border-slate-200 [.light_&]:text-slate-600"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 [.light_&]:border-slate-200 [.light_&]:text-slate-600"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="sr-only">Abrir menu</span>
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-white/5 px-4 py-4 md:hidden [.light_&]:border-slate-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `${navItemClass(isActive)} w-full`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
