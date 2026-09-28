import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t("Projetos", "Projects"), to: "/projects" },
    { name: t("Competências", "Skills"), to: "/skills" },
    { name: t("Experiência", "Experience"), to: "/experience" },
    { name: t("Sobre", "About"), to: "/sobre" },
    { name: t("Contato", "Contact"), to: "/contact" },
  ];

  const navItemClass = (isActive: boolean) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-sky-500/10 text-sky-300 [.light_&]:bg-sky-50 [.light_&]:text-sky-700"
        : "text-slate-300 hover:bg-white/5 hover:text-white [.light_&]:text-slate-600 [.light_&]:hover:bg-slate-100 [.light_&]:hover:text-slate-950"
    }`;

  const languageLabel = t("Switch to English", "Mudar para português");
  const languageButton = (
    <button
      onClick={toggleLanguage}
      className="flex h-10 items-center gap-1 rounded-lg border border-white/10 px-3 text-xs font-semibold text-slate-500 transition hover:border-sky-400/40 [.light_&]:border-slate-200 [.light_&]:text-slate-400"
      title={languageLabel}
      aria-label={languageLabel}
    >
      <span className={language === "pt-br" ? "text-sky-300 [.light_&]:text-sky-700" : undefined}>PT-BR</span>
      <span aria-hidden="true">|</span>
      <span className={language === "en" ? "text-sky-300 [.light_&]:text-sky-700" : undefined}>EN</span>
    </button>
  );

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
            title={t(`Mudar para o modo ${theme === "dark" ? "claro" : "escuro"}`, `Switch to ${theme === "dark" ? "light" : "dark"} mode`)}
            aria-label={t(`Mudar para o modo ${theme === "dark" ? "claro" : "escuro"}`, `Switch to ${theme === "dark" ? "light" : "dark"} mode`)}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <div className="ml-2">{languageButton}</div>
        </div>

        <div className="ml-3 flex shrink-0 items-center gap-2 md:hidden">
          {languageButton}
          <button
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 [.light_&]:border-slate-200 [.light_&]:text-slate-600"
            aria-label={t("Alternar tema", "Toggle theme")}
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
            <span className="sr-only">{t("Abrir menu", "Open menu")}</span>
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
