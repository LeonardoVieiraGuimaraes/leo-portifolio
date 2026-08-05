import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { FaLinkedin, FaSpinner, FaWhatsapp } from "react-icons/fa";
import {
  HiArrowUpRight,
  HiCheckCircle,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiSparkles,
} from "react-icons/hi2";

const contacts = [
  {
    name: "E-mail",
    description: "leonardovieiraxy@hotmail.com",
    badge: "Resposta em até 24h",
    link: "mailto:leonardovieiraxy@hotmail.com?subject=Contato%20via%20Portfólio",
    icon: HiOutlineEnvelope,
    accentColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  },
  {
    name: "Telefone / WhatsApp",
    description: "(38) 99239-1698",
    badge: "Mensagem rápida",
    link: "https://wa.me/5538992391698?text=Olá%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.",
    icon: FaWhatsapp,
    accentColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    name: "LinkedIn",
    description: "in/leonardo-vieira-guimaraes",
    badge: "Rede profissional",
    link: "https://www.linkedin.com/in/leonardo-vieira-guimaraes/",
    icon: FaLinkedin,
    accentColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    name: "Currículo Lattes",
    description: "lattes.cnpq.br/3600922455238720",
    badge: "Produção acadêmica",
    link: "http://lattes.cnpq.br/3600922455238720",
    icon: HiOutlineAcademicCap,
    accentColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    name: "Localização",
    description: "Belo Horizonte, MG · Brasil",
    badge: "Remoto ou Presencial",
    link: "https://maps.app.goo.gl/J8GYMwibv7pjR8HE7",
    icon: HiOutlineMapPin,
    accentColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
];

const quickTopics = [
  { id: "vaga", label: "💼 Vaga / Oportunidade", text: "Gostaria de conversar sobre uma vaga em nossa empresa: " },
  { id: "freelance", label: "🚀 Projeto / Consultoria", text: "Tenho um projeto/desafio de tecnologia e gostaria de um orçamento/consultoria: " },
  { id: "parceria", label: "🤝 Parceria Acadêmica/Docência", text: "Gostaria de propor uma parceria acadêmica ou projeto educacional: " },
  { id: "outro", label: "💬 Outros Assuntos", text: "Olá Leonardo, gostaria de conversar sobre: " },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const handleTopicSelect = (topicId: string, topicText: string) => {
    setSelectedTopic(topicId);
    if (!message || quickTopics.some((t) => message.startsWith(t.text))) {
      setMessage(topicText);
    }
  };

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
          setMessage("");
          setSelectedTopic(null);
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
    <section className="page-section relative overflow-hidden" id="contact">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="section-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Column: Contact info */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Disponível para novas propostas
            </div>

            <h1 className="section-title">Vamos conversar sobre a próxima entrega.</h1>
            <p className="section-copy">
              Estou disponível para oportunidades em desenvolvimento backend, engenharia de software,
              arquitetura de sistemas e projetos que unam tecnologia e inteligência de dados.
            </p>

            <div className="mt-8 space-y-3.5">
              {contacts.map(({ name, description, badge, link, icon: Icon, accentColor }) => (
                <a
                  key={name}
                  href={link}
                  target={link.startsWith("http") ? "_blank" : undefined}
                  rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card group relative flex items-center justify-between rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-xl hover:shadow-sky-500/5"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${accentColor}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="block text-sm font-semibold text-white [.light_&]:text-slate-950">
                          {name}
                        </span>
                        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium muted-text">
                          {badge}
                        </span>
                      </div>
                      <span className="mt-0.5 block truncate text-xs muted-text group-hover:text-sky-300 [.light_&]:group-hover:text-sky-700 transition">
                        {description}
                      </span>
                    </div>
                  </div>
                  <HiArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-300 [.light_&]:group-hover:text-sky-700 ml-2" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="card relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl backdrop-blur-md">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 [.light_&]:text-sky-700">
                <HiSparkles className="h-4 w-4" />
                <span>Mensagem direta</span>
              </div>
              <h2 className="mt-2 text-2xl font-bold text-white [.light_&]:text-slate-950">
                Conte um pouco sobre a oportunidade.
              </h2>
              <p className="mt-1 text-xs muted-text">
                Escolha o tipo de assunto ou digite sua mensagem diretamente abaixo:
              </p>
            </div>

            {/* Quick Topic Chips */}
            <div className="mb-6 flex flex-wrap gap-2">
              {quickTopics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => handleTopicSelect(topic.id, topic.text)}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-medium transition duration-200 ${
                    selectedTopic === topic.id
                      ? "border-sky-400 bg-sky-500/20 text-sky-200 shadow-sm"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-sky-400/40 hover:bg-white/10"
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-xs font-semibold uppercase tracking-wider subtle-text">
                    Seu Nome *
                  </label>
                  <input
                    className="field focus:ring-2 focus:ring-sky-400/20"
                    type="text"
                    name="fullName"
                    id="fullName"
                    autoComplete="name"
                    placeholder="Ex: Maria Silva"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider subtle-text">
                    Seu E-mail *
                  </label>
                  <input
                    className="field focus:ring-2 focus:ring-sky-400/20"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="suaempresa@dominio.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider subtle-text">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="field min-h-36 resize-y focus:ring-2 focus:ring-sky-400/20"
                  placeholder="Descreva a vaga, o projeto, escopo ou desafio..."
                  required
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
                <button
                  type="submit"
                  className="button w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 font-bold text-slate-950 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? <FaSpinner className="h-4 w-4 animate-spin" /> : <HiOutlineEnvelope className="h-4 w-4" />}
                  {loading ? "Enviando mensagem..." : "Enviar mensagem"}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400" role="status">
                    <HiCheckCircle className="h-4 w-4 shrink-0" />
                    <span>Mensagem enviada com sucesso! Respondo em breve.</span>
                  </div>
                )}
                {status === "error" && (
                  <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-xs font-medium text-rose-400" role="alert">
                    <span>Falha ao enviar. Favor utilizar o e-mail ou WhatsApp ao lado.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

