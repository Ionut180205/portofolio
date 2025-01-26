import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Login from './components/Login';
import Resume from './components/Resume';
import ServicesAbout from './components/ServicesAbout';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      hero: heroRef,
      aboutme: aboutRef,
      services: servicesRef,
      projects: projectsRef,
      contact: contactRef,
    };
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/proiect-individual"
            element={
              <>
                <Navbar scrollToSection={scrollToSection} />
                <div ref={heroRef}>
                  <Hero />
                </div>
                <div ref={aboutRef}>
                  <About id='aboutme' />
                </div>
                <div ref={servicesRef}>
                  <Services />
                </div>
                <div ref={projectsRef}>
                  <Projects />
                </div>
                <div ref={contactRef}>
                  <Contact />
                </div>
              </>
            }
          />
          <Route path="/proiect-individual/login" element={<Login />} />
          <Route path="/proiect-individual/admin" element={<Admin />} />
          <Route path="/proiect-individual/resume" element={<Resume />} />
          <Route path="/proiect-individual/servicesabout" element={<ServicesAbout />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
