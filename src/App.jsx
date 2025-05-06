import React from "react";
import Hero from "./sections/Hero/Hero";
import { ThemeProvider } from "./common/ThemeContext";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/skills/Skills";
import Contact from "./sections/Contacts/Contact";
import Footer from "./sections/Footer/Footer";
function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
