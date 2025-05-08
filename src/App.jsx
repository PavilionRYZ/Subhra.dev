import { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MarvelLoading from "./components/MarvelLoading"

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  return (
 <Fragment>
  {isLoading && <MarvelLoading onLoadingComplete={() => setIsLoading(false)} />}
     <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-100"} min-h-screen transition-colors duration-300`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Education darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Projects darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer />
    </div>
 </Fragment>
  );
}

export default App;