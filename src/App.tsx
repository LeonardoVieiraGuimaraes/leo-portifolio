import { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsDeveloper from "./components/ProjectsDeveloper";
import ProjectsAcademics from "./components/ProjectsAcademics";
import ProjectsProfessor from "./components/ProjectsProfessor";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import AboutSimple from "./components/AboutSimple";
import { ThemeProvider } from "./context/ThemeContext";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
}

function SiteLayout() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[var(--text)]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsDeveloper />
      <Experience />
      <AboutSimple />
      <Services />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <ProjectsDeveloper />
      <ProjectsAcademics />
      <ProjectsProfessor />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToSection />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/inicio" element={<HomePage />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
