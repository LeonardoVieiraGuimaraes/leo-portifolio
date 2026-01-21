import {
  HiCommandLine,
  HiComputerDesktop,
  HiDevicePhoneMobile,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

export default function Services() {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, HTML5 e CSS3.",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    {
      title: "Sistemas",
      description: "Desenvolvimento de Sistemas e analise de dados com Python.",
      icon: <HiCommandLine className="h-12 w-12" />,
    },
    {
      title: "Mobile",
      description:
        "Desenvolvimento de aplicativos Android com React Native, Kivy e Kodular.",
      icon: <HiDevicePhoneMobile className="h-12 w-12" />,
    },
    {
      title: "Professor",
      description:
        "Professor das diversas áread da Matemática e Tecnologia da Informação.",
      icon: <HiOutlineAcademicCap className="h-12 w-12" />,
    },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 pt-20 pb-16" id="services">
      <div className="text-center space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 dark:text-cyan-200">
          O que faço
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-cyan-300 dark:text-cyan-200">
          Soluções ponta a ponta para produtos digitais e educação
        </h2>
        <p className="text-slate-400 dark:text-slate-200">
          Do discovery à entrega: <span className="font-semibold text-cyan-700 dark:text-cyan-200">front-end</span>, <span className="font-semibold text-cyan-700 dark:text-cyan-200">back-end</span>, dados, <span className="font-semibold text-cyan-700 dark:text-cyan-200">mobile</span> e trilhas educacionais.
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
