import {
  HiCommandLine,
  HiComputerDesktop,
  HiDevicePhoneMobile,
  HiCircleStack,
} from "react-icons/hi2";

export default function Services() {
  const services = [
    {
      title: "APIs e Backend",
      description:
        "Desenvolvimento de APIs e serviços com Python, Django, Java, Spring Boot e Node.js.",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    {
      title: "Dados e Automação",
      description: "Modelagem SQL, integração de sistemas e automação de processos com Python.",
      icon: <HiCommandLine className="h-12 w-12" />,
    },
    {
      title: "Aplicações Web e Mobile",
      description:
        "Interfaces em React e TypeScript e aplicativos multiplataforma com React Native.",
      icon: <HiDevicePhoneMobile className="h-12 w-12" />,
    },
    {
      title: "Deploy e Infraestrutura",
      description:
        "Publicação de aplicações com Docker, Linux, Nginx e integração contínua.",
      icon: <HiCircleStack className="h-12 w-12" />,
    },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 pt-20 pb-16" id="services">
      <div className="text-center space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 dark:text-cyan-200">
          O que faço
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-cyan-300 dark:text-cyan-200">
          Soluções backend do requisito ao deploy
        </h2>
        <p className="text-slate-400 dark:text-slate-200">
          APIs, bancos de dados, integrações, automações e infraestrutura para colocar software confiável em produção.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            className="card relative h-full overflow-hidden rounded-xl p-5"
            key={`service-${index}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/5" />
            <div className="relative space-y-3">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 dark:text-cyan-200 [.light_&]:bg-cyan-100 [.light_&]:text-cyan-700">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white dark:text-cyan-100">{service.title}</h3>
              <p className="text-sm text-slate-300 dark:text-slate-200 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
