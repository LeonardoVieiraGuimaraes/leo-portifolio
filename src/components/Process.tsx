import { HiArrowTrendingUp, HiMagnifyingGlassCircle, HiSparkles, HiWrenchScrewdriver } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const steps = [
    {
      title: t("Coleta de dados", "Data collection"),
      description: t(
        "Mapeio fontes, levanto requisitos e garanto qualidade dos insumos antes de construir.",
        "I map sources, gather requirements and ensure input quality before building."
      ),
      icon: <HiMagnifyingGlassCircle className="h-8 w-8" />,
    },
    {
      title: t("Tratamento", "Processing"),
      description: t(
        "Limpeza, padronização e modelagem para deixar dados e requisitos prontos para uso.",
        "Cleaning, standardization and modeling to get data and requirements ready for use."
      ),
      icon: <HiWrenchScrewdriver className="h-8 w-8" />,
    },
    {
      title: t("Construção", "Building"),
      description: t(
        "Desenvolvimento de APIs, front-end, dashboards ou automações focadas no resultado.",
        "Result-focused development of APIs, front-ends, dashboards or automation."
      ),
      icon: <HiSparkles className="h-8 w-8" />,
    },
    {
      title: t("Entrega e iteração", "Delivery and iteration"),
      description: t(
        "Deploy automatizado, monitoramento e evolução contínua com feedbacks rápidos.",
        "Automated deployment, monitoring and continuous improvement with fast feedback."
      ),
      icon: <HiArrowTrendingUp className="h-8 w-8" />,
    },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-4 pt-20 pb-16" id="process">
      <div className="text-center space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 dark:text-cyan-200">
          {t("Metodologia", "Methodology")}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-cyan-300 dark:text-cyan-200">
          {t("Processo estruturado para entregar com qualidade", "A structured process for quality delivery")}
        </h2>
        <p className="text-slate-400 dark:text-slate-200">
          {t(
            "Passos claros para reduzir risco, alinhar expectativas e garantir valor em produção.",
            "Clear steps to reduce risk, align expectations and ensure value in production."
          )}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <div key={step.title} className="card relative h-full overflow-hidden rounded-xl p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/5" />
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 dark:text-cyan-200 [.light_&]:bg-cyan-100 [.light_&]:text-cyan-700">
                {step.icon}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-cyan-200 dark:text-cyan-200">0{index + 1}</span>
                  <h3 className="text-xl font-semibold text-cyan-300 dark:text-cyan-200">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-400 dark:text-slate-200">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
