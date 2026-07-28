import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { FaSpinner, FaWhatsapp } from "react-icons/fa";
import {
  HiArrowUpRight,
  HiCheckCircle,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";

const contacts = [
  {
    name: "E-mail",
    description: "leonardovieiraxy@hotmail.com",
    link: "mailto:leonardovieiraxy@hotmail.com?subject=Contato%20via%20Portfólio",
    icon: HiOutlineEnvelope,
  },
  {
    name: "Telefone / WhatsApp",
    description: "(38) 99239-1698",
    link: "https://wa.me/5538992391698?text=Olá%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.",
    icon: FaWhatsapp,
  },
  {
    name: "Localização",
    description: "Belo Horizonte, MG · Brasil",
    link: "https://maps.app.goo.gl/J8GYMwibv7pjR8HE7",
    icon: HiOutlineMapPin,
  },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatus("idle");

    emailjs
      .sendForm(
        "service_j9nivzg",
        "template_7r5dttp",
        form.current,
        "0FrWhxTHRugZZ8opX"
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          setStatus("error");
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <section className="page-section" id="contact">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Contato</p>
            <h1 className="section-title">Vamos conversar sobre a próxima entrega.</h1>
            <p className="section-copy">
              Estou disponível para oportunidades em desenvolvimento backend, engenharia de software
              e projetos que precisem unir tecnologia e conhecimento de negócio.
            </p>

            <div className="mt-8 space-y-3">
              {contacts.map(({ name, description, link, icon: Icon }) => (
                <a
                  key={name}
                  href={link}
                  target={link.startsWith("http") ? "_blank" : undefined}
                  rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card group flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-0.5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-400/10 text-sky-300 [.light_&]:bg-sky-100 [.light_&]:text-sky-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-white [.light_&]:text-slate-950">
                      {name}
                    </span>
                    <span className="mt-1 block truncate text-xs muted-text">{description}</span>
                  </span>
                  <HiArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-sky-300 [.light_&]:group-hover:text-sky-700" />
                </a>
              ))}
            </div>
          </div>

          <div className="card rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 [.light_&]:text-sky-700">
                Mensagem direta
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white [.light_&]:text-slate-950">
                Conte um pouco sobre a oportunidade.
              </h2>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-semibold subtle-text">
                    Nome
                  </label>
                  <input
                    className="field"
                    type="text"
                    name="fullName"
                    id="fullName"
                    autoComplete="name"
                    placeholder="Como posso chamar você?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold subtle-text">
                    E-mail
                  </label>
                  <input
                    className="field"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="voce@empresa.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold subtle-text">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="field min-h-40 resize-y"
                  placeholder="Fale sobre a vaga, o projeto ou o desafio."
                  required
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="button inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? <FaSpinner className="h-4 w-4 animate-spin" /> : <HiOutlineEnvelope className="h-4 w-4" />}
                  {loading ? "Enviando..." : "Enviar mensagem"}
                </button>

                {status === "success" && (
                  <p className="flex items-center gap-2 text-sm text-emerald-400" role="status">
                    <HiCheckCircle className="h-4 w-4" />
                    Mensagem enviada.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-rose-400" role="alert">
                    Não foi possível enviar. Use o e-mail ou WhatsApp ao lado.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
