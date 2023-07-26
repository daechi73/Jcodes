import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/sections/About.js";
import Home from "./components/sections/Home.js";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;
