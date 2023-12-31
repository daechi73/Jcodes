import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/sections/About.js";
import Home from "./components/sections/Home.js";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import SeasonBackground from "./components/SeasonBackground";

function App() {
  return (
    <>
      <SeasonBackground />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
