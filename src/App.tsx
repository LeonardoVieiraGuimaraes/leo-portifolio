import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  const HomePage = () => (
    <>
      <Header />
      {/* <Header2 /> */}
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
    </>
  );

  const ProjectsPage = () => (
    <>
      <Header />
      <ProjectsAcademics />
      <ProjectsDeveloper />
      <ProjectsProfessor />
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
