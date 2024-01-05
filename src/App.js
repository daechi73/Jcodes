import "./App.css";
import Navbar from "./components/Navbar.js";
import Portfolio from "./components/pages/portfolio.js";
import Blog from "./components/pages/blog.js";
import About from "./components/sections/About.js";
import Home from "./components/sections/Home.js";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import SeasonBackground from "./components/SeasonBackground/SeasonBackground";
import { useParams } from "react-router-dom";

function App() {
  const { name } = useParams();
  return (
    <>
      <SeasonBackground />
      <Navbar />
      {name === "blog" ? (
        <Blog />
      ) : name == "sign-up" ? (
        "sign-up"
      ) : (
        <Portfolio />
      )}
      <Footer />
    </>
  );
}

export default App;
