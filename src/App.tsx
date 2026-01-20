import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Header2 from "./components/Header2";
import Hero from "./components/Hero";
import ProjectsDeveloper from "./components/ProjectsDeveloper";
import ProjectsAcademics from "./components/ProjectsAcademics";
import ProjectsProfessor from "./components/ProjectsProfessor";
import Services from "./components/Services";
import Process from "./components/Process";
import Skills from "./components/Skills";
import { ThemeProvider } from "./context/ThemeContext";

// import Textimonials from "./components/Textimonials";

function App() {
  const tabs = [
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "services", label: "Serviços" },
    { id: "process", label: "Processo" },
    { id: "projectsAcademics", label: "Proj. Acadêmicos" },
    { id: "projectsDeveloper", label: "Proj. Dev" },
    { id: "projectsProfessor", label: "Proj. Prof" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contato" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    tabs.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ThemeProvider>
      <main>
        <Header />
        {/* <Header2 /> */}

        <div className="sticky top-16 z-40 bg-slate-900/80 backdrop-blur border-b border-white/5 shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
          <div className="container mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-chip ${activeTab === tab.id ? "tab-chip-active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <Hero />
        <About />
        <Services />
        <Process />
        <ProjectsAcademics />
        <ProjectsDeveloper />
        <ProjectsProfessor />
        <Skills />
        {/* <Textimonials /> */}
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
