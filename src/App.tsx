import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsDeveloper from "./components/ProjectsDeveloper";
import ProjectsAcademics from "./components/ProjectsAcademics";
import ProjectsProfessor from "./components/ProjectsProfessor";
import Services from "./components/Services";
import Process from "./components/Process";
import Skills from "./components/Skills";
import About from "./components/About";
import AboutSimple from "./components/AboutSimple";
import { ThemeProvider } from "./context/ThemeContext";

// import Textimonials from "./components/Textimonials";

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

function App() {
  const HomePage = () => (
    <>
      <Header />
      <Hero />
      <AboutSimple />
      <Services />
      <Process />
      <Footer />
    </>
  );

  const ProjectsPage = () => (
    <>
      <Header />
      <ProjectsAcademics />
      <ProjectsDeveloper />
      <ProjectsProfessor />
      <Footer />
    </>
  );

  const SkillsPage = () => (
    <>
      <Header />
      <Skills />
      <Footer />
    </>
  );

  const ContactPage = () => (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/sobre" element={<><Header /><About /><Footer /></>} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
