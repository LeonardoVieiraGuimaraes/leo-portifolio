import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { FaSpinner, FaWhatsapp } from "react-icons/fa";
import {
  HiCheckCircle,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const background = isLight
    ? "linear-gradient(180deg, #f9fafb 0%, #eef2f7 60%, #f9fafb 100%)"
    : "linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)";

  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_j9nivzg",
        "template_7r5dttp",
        form.current,
        "0FrWhxTHRugZZ8opX"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
          console.error(error);
        }
      );
  };

  const contacts = [
    {
      name: "WhatsApp",
      description: "Clique aqui",
      link: "https://wa.me/5538999352408?text=Olá...",
      icon: <FaWhatsapp className="h-10 w-10" />,
    },
    {
      name: "Email",
      description: "leonardovieiraxy@hotmail.com",
      link: "mailto:leonardovieiraxy@hotmail.com?subject=Contato%20via%20Portfólio",
      icon: <HiOutlineEnvelope className="h-10 w-10" />,
    },
    {
      name: "Belo Horizonte",
      description: "Minas Gerais - Brasil",
      link: "https://maps.app.goo.gl/J8GYMwibv7pjR8HE7",
      icon: <HiOutlineMapPin className="h-10 w-10" />,
    },
  ];

  return (
    <section
      className="relative text-cyan-900 dark:text-cyan-100 pt-20 pb-16"
      id="contact"
      style={{ background }}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 dark:text-cyan-200">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">Contato</h2>
          <p className="text-slate-500 dark:text-slate-200">
            Me envie uma mensagem ou chame no WhatsApp. Retorno rápido para falar sobre projetos e oportunidades.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card md:col-span-2 rounded-2xl p-6">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[var(--text)]">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-32 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--panel)] p-3 text-[var(--text)] outline-none focus:border-[color:var(--accent)]"
                  required
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-[var(--text)]">
                    Seu nome
                  </label>
                  <input
                    className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--panel)] p-3 text-[var(--text)] outline-none focus:border-[color:var(--accent)]"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[var(--text)]">
                    Seu email
                  </label>
                  <input
                    className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--panel)] p-3 text-[var(--text)] outline-none focus:border-[color:var(--accent)]"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="button-hero"
                  disabled={loading}
                >
                  {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                  {success && <HiCheckCircle className="h-4 w-4" />}
                  Enviar mensagem
                </button>

                {error && (
                  <p className="text-sm text-rose-200 dark:text-rose-200">
                    Ocorreu um erro ao enviar. Tente novamente mais tarde.
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <div
                key={`contact-${index}`}
                className="card flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 dark:text-cyan-200 [.light_&]:bg-cyan-100 [.light_&]:text-cyan-700">
                  {contact.icon}
                </div>
                <div>
                  <p className="font-semibold text-cyan-900 dark:text-cyan-100">{contact.name}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    className="text-sm text-cyan-200 dark:text-cyan-200 underline underline-offset-2"
                    rel="noreferrer"
                  >
                    {contact.description}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
