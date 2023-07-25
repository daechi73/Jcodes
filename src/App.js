import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/pages/About";
import Home from "./components/pages/Home.js";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
